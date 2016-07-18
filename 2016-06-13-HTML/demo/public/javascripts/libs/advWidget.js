/*!
 * Copyright 2015 Erealm Info & Tech.
 * Created by Tom on 11/16/2015
*/

/*!
 *  AdvancedWidget.jquery.js
 *  @requires   jQuery 1.6.1+
*/

/**
 *  Supports complete initialization through the constructor
 *
 *  @constructor AdvancedWidget
 *  @param {Object} Settings (dataUrl, defaults, elements, excluddes, limits, onData and onReady)
 */
;var AdvancedWidget = function(settings) {

    /**
     * @ignore
     *
     * :matches('text') selector expression for finding elements with the exact text match
     */
    jQuery.expr[':'].matches = function(el, i, match) {
        return match ? el.innerText == match[3] : null;
    };

    /**
     * @ignore
     *
     * .prop polyfill for >= 1.4.2, <= 1.6.0
     */
    if (!jQuery.fn.prop) {
        jQuery.fn.prop = function(prop, enabled) {
            jQuery(this).attr(prop, enabled ? prop : null);

            return this;
        };
    };

    /**
     * @ignore
     */
    var _getStruct = function(degrees, categories, subjects) {
        return {
            'degrees':      degrees,
            'categories':   categories,
            'subjects':     subjects
        };
    };

    // Default options
    var _options = {
        dataUrl:    'https://admin.educationaxis.com/degree?callback=AfterDataLoaded',
        defaults:   _getStruct(),
        elements:   _getStruct(),
        excludes:   _getStruct(),
        limits:     _getStruct(),
        onData:     function() {},
        onReady:    function() {}
    };

    jQuery.extend(_options, settings);

    /**
     *  Exclude specific degrees, categories or subjects
     *
     *  @param {Object or Array}  Object containing all three, or just an array of Degrees
     *  @param {Array}  Categories
     *  @param {Array}  Subjects
     */
    this.exclude = function(excludes, categories, subjects) {
        if (typeof excludes !== 'object') {
            var excludes = _getStruct(excludes, categories, subjects);
        };

        this.setExcludes(excludes);
    };

    /**
     *  Exclude specific degrees
     *
     *  @param {String} Degree 1
     *  @param {String} Degree 2
     *  @param {String} etc...
     */
    this.excludeDegrees = function(degrees) {
        this.exclude({ 'degrees': arguments });

        return this;
    };

    /**
     *  Exclude specific categories
     *
     *  @param {String} Category 1
     *  @param {String} Category 2
     *  @param {String} etc...
     */
    this.excludeCategories = function(categories) {
        this.exclude({ 'categories': arguments });

        return this;
    };

    /**
     *  Exclude specific subjects
     *
     *  @param {String} Subject 1
     *  @param {String} Subject 2
     *  @param {String} etc...
     */
    this.excludeSubjects = function(subjects) {
        this.exclude({ 'subjects': arguments });

        return this;
    };

    /**
     *  Widget data for AdvancedWidget
     *
     *  @return {Object}
     */
    this.getData = function(key) {
        var data = AdvancedWidget.data;

        return key ? data[key] : data;
    };

    /**
     *  Get default degrees, categories and subjects
     *
     *  @return {Object}
     */
    this.getDefaults = function(type) {
        return this.getOptions('defaults', type);
    };

    /**
     *  Get elements used for population of widget data
     *
     *  @return {Object}
     */
    this.getElements = function(type) {
        return this.getOptions('elements', type);
    };

    /**
     *  Get excluded degrees, categories and subjects
     *
     *  @return {Object}
     */
    this.getExcludes = function(type) {
        return this.getOptions('excludes', type);
    };

    /**
     *  Get specified limits for degree, catogires and subjects
     *
     *  @return {Object}
     */
    this.getLimits = function(type) {
        return this.getOptions('limits', type);
    };

    /**
     *  Get current options
     *
     *  @param  {String} (Optional) Option parent to retrieve (ie, "elements")
     *  @param  {String} (Optional) Type of object to retrieve (ie, "degrees")
     *
     *  @return {Object}
     */
    this.getOptions = function(parent, type) {
        var data = _options[parent];

        return type
        ? data[type]
        : data;
    };

    /**
     * @ignore
     */
    this._getNextElement = function(event, current, next) {
        var index   = jQuery.inArray(event.currentTarget, this.getElements(current));
        var $select = this.getElements(next).eq(index);

        return $select;
    };

    /**
     * @ignore
     */
    this._init = function() {
        this._initDegrees();
        this._initDefaults();

        _options.onReady.call(this, _options);

        return this;
    };

    /**
     * @ignore
     */
    this._initDefaults = function(selectType) {
        for (var type in this.getDefaults()) {
            if (!this.getDefaults().hasOwnProperty(type)) { continue; };

            // Skip other types if we only want to set the default for 'categories'
            if (selectType && type !== selectType) {
                continue;
            };

            var value = this.getDefaults(type);

            if (value) {
                var selects     = this.getElements(type);
                var matches     = jQuery('option:matches("' + value + '")', selects);
                var contains    = jQuery('option:contains("' + value + '")', selects);
                var values      = (parseInt(value) == value) ? jQuery('option[value="' + value + '"]', selects) : [];
                var targets;

                if (matches.length) {
                    targets = matches;
                } else if (contains.length) {
                    targets = contains;
                } else if (values.length) {
                    targets = values;
                }

                jQuery(targets).prop('selected', true).trigger('change');
            };
        };
    };

    /**
     * @ignore
     */
    this._initDegrees = function() {
        var $degrees = this.getElements('degrees');
        this._initSelect(
            this.getElements('degrees'),
            this.getData('items'),
            this._initCategories,
            'degrees'
        );

        $degrees.one('focus', jQuery.proxy(function(event) {
            var $category = this._getNextElement(event, 'degrees', 'categories');

            $category.removeAttr('disabled');
        }, this));
    };

    /**
     * @ignore
     */
    this._initCategories = function(event) {
        var $option     = jQuery('option:selected', event.currentTarget);
        var categories  = $option.data('children');
        var $select     = this._getNextElement(event, 'degrees', 'categories');

        this._initSelect(
            $select,
            categories,
            this._initSubjects,
            'categories'
        );

        this._sortSelect($select);

        $select.one('focus', jQuery.proxy(function(event) {
            var $subject = this._getNextElement(event, 'categories', 'subjects');

            $subject.removeAttr('disabled');
        }, this));
    };

    /**
     * @ignore
     */
    this._initSubjects = function(event) {
        var $option     = jQuery('option:selected', event.currentTarget);
        var subjects    = $option.data('children');
        var $select     = this._getNextElement(event, 'categories', 'subjects');

        this._initSelect(
            $select,
            subjects,
            null,
            'subjects'
        );

        this._sortSelect($select);
    };

    /**
     * @ignore
     */
    this._initSelect = function(select, data, callback, type) {
        // Support initialization of multiple selects (rather than wrapping this all in a .forEach)
        if (select.length > 1) {
            for (var i = 0; i < select.length; i++) {
                this._initSelect(select.eq(i), data, callback, type);
            }

            return;
        };

        var previous = select.find('option:selected');

        var existingOptions = select.data('existingOptions');

        if (! existingOptions) {
            select.data('existingOptions', select.find('option'));
        };

        select.removeAttr('disabled').empty().append(select.data('existingOptions'));

        var $options = this._initOptions(data, type);

        select.append($options);

        var $previous = select.find('option:matches("' + previous.text() + '")');

        if (previous.text() && $previous.length) {
            // Select the previously selected option & propogate changes
            $previous.prop('selected', true)
                     .trigger('change');
        } else if ($options.length === 1) {
            // Select the first option, if there's only one option
            $options.eq(0).prop('selected', true)
                          .trigger('change');
        } else {
            // No previous selection was found, so ensure empty choices propogate
            select.trigger('change');
        }

        select.change( jQuery.proxy(callback, this) );
    };

    /**
     * @ignore
     */
    this._initOptions = function(data, type) {
        var limits   = this.getLimits(type),
            excludes = this.getExcludes(type),
            $group   = jQuery('<optgroup />');

        for (var id in data) {
            if(! data.hasOwnProperty(id)) { continue; };

            // The data may have been excluded
            if (data[id]) {
                var $option = this._initOption(data[id]);

                if ($option) {
                    $group.append($option);
                };
            };
        };

        if (limits) {
            this._limitOptions($group, limits);
        };

        if (excludes) {
            this._excludeOptions($group, excludes);
        };

        return $group.find('option');
    };

    /**
     * @ignore
     */
    this._limitOptions = function($group, limits) {
        var valid = [];

        jQuery.each(limits, function(i, limit) {
            valid = jQuery.merge(valid, $group.find('option:contains("' + limit + '")'));
        });

        $group.find('option').not(valid).remove();
    };

    /**
     * @ignore
     */
    this._excludeOptions = function($group, excludes) {
        jQuery.each(excludes, function(i, exclude) {
            $group.find('option:contains("' + exclude + '")').remove();
        });
    };

    /**
     * @ignore
     */
    this._initOption = function(data) {
        var option = new Option;
        option.value        = data.programID;
        option.innerHTML    = data.programName;

        var $option = jQuery(option);

        $option.data('children', data.children);

        return $option;
    };

    /**
     *  Specify which degrees, categories or subjects to limit the options to
     *
     *  @param  {Object or Array}   Object of degrees, categories and subjects, or just an Array of Degrees
     *  @param  {Array} Categories
     *  @param  {Array} Subjects
     */
    this.limit = function(degrees, categories, subjects) {
        var limits = (typeof degrees !== 'object')
                   ? _getStruct(degrees, categories, subjects)
                   : degrees;

        this.setLimits(degrees);

        return this;
    };

    /**
     *  Limit to specific degrees
     *
     *  @param {String} Degree 1
     *  @param {String} Degree 2
     *  @param {String} etc...
     */
    this.limitDegrees = function(degrees) {
        return this.limit({ 'degrees': arguments });
    };

    /**
     *  Limit to specific categories
     *
     *  @param {String} Category 1
     *  @param {String} Category 2
     *  @param {String} etc...
     */
    this.limitCategories = function(categories) {
        return this.limit({ 'categories': arguments });
    };

    /**
     *  Limit to specific subjects
     *
     *  @param {String} Subject 1
     *  @param {String} Subject 2
     *  @param {String} etc...
     */
    this.limitSubjects = function(subjects) {
        return this.limit({ 'subjects': arguments });
    };

    /**
     *  Load the widget data as specified in the options (Defaulted to EDUDirect's data)
     */
    this.loadData = function(url) {
        AfterDataLoaded = jQuery.proxy(function(data) {
            this.setData(data);
        }, this);

        // jQuery appends =TIMESTAMP to script URLs for caching,
        // which results in a 404.
        var script = document.createElement('script');
        script.src = url || this.getOptions('dataUrl');

        document.getElementsByTagName('head')[0].appendChild(script);

        return this;
    };

    /**
     *  Inject stylesheet into the page
     *
     *  @param  {String} URL
     */
    this.loadStyles = function(url) {

        if (document.createStyleSheet) {
            document.createStyleSheet(url);
        } else {
            jQuery("head").append('<link rel="stylesheet" href="' + url + '" />');
    }

        return this;
    };

    /**
     * @ignore
     */
    this.loadTemplate = function(url) {
        return this;
    };

    /**
     *  Specify callback for when widget data is loaded
     *
     *  @param {Function} Callback
     */
    this.onData = function(callback) {
        _options.onData = callback;

        return this;
    };

    /**
     *  Specify callback for when the widget has completed initialization and adjusting the SELECTs
     *
     *  @param {Function} Callback
     */
    this.onReady = function(callback) {
        _options.onReady = callback;

        return this;
    };

    /*
     *  Populate specified elements with widget data
     *
     *  @param  {Object or String}  Object containing degree, category and subject selectors, or just the degree selector
     *  @param  {String}    Category selector
     *  @param  {String}    Subject selector
     */
    this.populate = function(elements, cElements, sElements) {
        if (typeof elements !== 'object') {
            var elements = _getStruct(elements, cElements, sElements);
        };

        this.setElements(elements);

        return this;
    };

    /**
     *  Specify which elements to populate with degree options
     *
     *  @param {String} Degree selector
     */
    this.populateDegrees = function(element) {
        return this.populate({ 'degrees': element});
    };

    /**
     *  Specify which elements to populate with category options
     *
     *  @param {String} Category selector
     */
    this.populateCategories = function(element) {
        return this.populate({ 'categories': element});
    };

    /**
     *  Specify which elements to populate with subject options
     *
     *  @param {String} Subject selector
     */
    this.populateSubjects = function(element) {
        return this.populate({ 'subjects': element});
    };

    /**
     *  @ignore
     */
    this.setData = function(json) {
        // Data has to be set outside of the instance,
        // otherwise we'll continually reload it.
        AdvancedWidget.data = jQuery.extend(AdvancedWidget.data, json);

        _options.onData.call(this, _options);

        this._init();

        return this;
    };

    /*
     *  Specify defaults for the degree, category and subject options
     *
     *  @param  {Object or String}  Object containing default degree, category and subject, or just the default degree
     *  @param  {String}    Default category
     *  @param  {String}    Default subject
     */
    this.setDefaults = function(defaults, cDefault, sDefault) {
        if (typeof defaults !== 'object') {
            var defaults = _getStruct(defaults, cDefault, sDefault);
        };

        jQuery.extend(_options.defaults, defaults);

        return this;
    };

    /**
     *  Specify the default degree
     *
     *  @param {String} Default degree (partial match supported)
     */
    this.setDefaultDegree = function(value) {
        return this.setDefaults({ degrees: value });
    };

    /**
     *  Specify the default categry
     *
     *  @param {String} Default category (partial match supported)
     */
    this.setDefaultCategory = function(value) {
        return this.setDefaults({ categories: value });
    };

    /**
     *  Specify the default subject
     *
     *  @param {String} Default subject (partial match supported)
     */
    this.setDefaultSubject = function(value) {
        return this.setDefaults({ subjects: value });
    };

    /**
     *  Store and initially disable elements to be used for the widget
     *
     *  @param  {Object} Degree, category & subject elements
     */
    this.setElements = function(elements) {
        jQuery.extend(_options.elements, elements);

        for (var i in _options.elements) {
            if (!_options.elements.hasOwnProperty(i)) { continue; };

            _options.elements[i] = jQuery(_options.elements[i]).prop('disabled', true);
        };

        return this;
    };

    /**
     *  Exclude degrees, categories & subjects
     *
     *  @param {Object} Degrees, categories & subjects to exclude
     */
    this.setExcludes = function(excludes) {
        jQuery.extend(_options.excludes, excludes);

        return this;
    };

    /**
     *  Limit degrees, categories & subjects to specific options
     *
     *  @param {Object} Degree, category & subjects to limit options to
     */
    this.setLimits = function(limits) {
        jQuery.extend(_options.limits, limits);
    };

    /**
     * @ignore
     */
    this._sortSelect = function(select) {
        var $existingOptions = select.data('existingOptions');
        var $options = select.find('option').not($existingOptions);

        $options.sort(function(a, b) {
            if ($existingOptions.index(a) > -1) {
                return 0;
            };

            var $a = jQuery(a),
                $b = jQuery(b);

            if ($a.text() < $b.text()) {
                return -1;
            } else if ($a.text() > $b.text()) {
                return 1;
            } else {
                return 0;
            }
        }).appendTo(select);

        return select;
    };

    // Load data if it does not already exist
    if (! AdvancedWidget.data) {
        setTimeout(jQuery.proxy(function() {
            this.loadData();
        }, this), 1);
    };

    /**
     *  Ensure that legacy widgets point to "https://schools.collegedegrees.com/"
     */
    //jQuery(function($) {
    //    $('a[href^="https://search"], a[href^="http://search"]').attr('href', function(i, href) {
    //        return href.replace('search.', 'schools.');
    //    });
    //
    //    $("form [action]").attr('action', function(i, action) {
    //        return action.replace('search.', 'schools.');
    //    });
    //});

    /**
     *  Expose public methods as AdvancedWidget API
     */
    return {
        exclude:                this.exclude,
        excludeDegrees:         this.excludeDegrees,
        excludeCategories:      this.excludeCategories,
        excludeSubjects:        this.excludeSubjects,
        getData:                this.getData,
        getDefaults:            this.getDefaults,
        getExcludes:            this.getExcludes,
        getLimits:              this.getLimits,
        getOptions:             this.getOptions,
        limit:                  this.limit,
        limitDegrees:           this.limitDegrees,
        limitCategories:        this.limitCategories,
        limitSubjects:          this.limitSubjects,
        loadData:               this.loadData,
        loadStyles:             this.loadStyles,
        loadTemplate:           this.loadTemplate,
        onData:                 this.onData,
        onReady:                this.onReady,
        populate:               this.populate,
        populateDegrees:        this.populateDegrees,
        populateCategories:     this.populateCategories,
        populateSubjects:       this.populateSubjects,
        setData:                this.setData,
        setDefaults:            this.setDefaults,
        setDefaultDegree:       this.setDefaultDegree,
        setDefaultCategory:     this.setDefaultCategory,
        setDefaultSubject:      this.setDefaultSubject,
        setElements:            this.setElements,
        setExcludes:            this.setExcludes,
        setLimits:              this.setLimits
    };
};

/**
 *  @ignore
 */
AdvancedWidget.data = null;
