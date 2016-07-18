(function() {
  angular.module('builder.components', ['builder']).config([
    '$builderProvider', function($builderProvider) {
//      $builderProvider.registerComponent('firstName', {
//        group: 'Default',
//        label: 'First Name',
//        description: 'Please Input Your First Name',
//        placeholder: 'First Name',
//        required: false,
//        template: "<div class=\"form-group\">\n" +
//            "    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n " +
//            "   <div class=\"col-sm-8\">\n  " +
//            "      <input type=\"text\" ng-model=\"firstName\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>\n" +
//            "        <p class='help-block'>{{description}}</p>\n " +
//            "   </div>\n</div>",
//        popoverTemplate: "<form>\n" +
//            "    <div class=\"form-group\">\n" +
//            "        <label class='control-label'>Label</label>\n" +
//            "        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n" +
//            "    </div>\n" +
//            "    <div class=\"form-group\">\n" +
//            "        <label class='control-label'>Description</label>\n" +
//            "        <input type='text' ng-model=\"description\" class='form-control'/>\n" +
//            "    </div>\n" +
//            "    <div class=\"form-group\">\n" +
//            "        <label class='control-label'>Placeholder</label>\n" +
//            "        <input type='text' ng-model=\"placeholder\" class='form-control'/>\n" +
//            "    </div>\n" +
//            "    <div class=\"checkbox\">\n" +
//            "        <label>\n" +
//            "            <input type='checkbox' ng-model=\"required\" />\n" +
//            "            Required</label>\n" +
//            "    </div>\n" +
//            "    <hr/>\n" +
//            "    <div class='form-group'>\n" +
//            "        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n" +
//            "        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n" +
//            "        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n" +
//            "    </div>\n" +
//            "</form>"
//      });
//          $builderProvider.registerComponent('middleName', {
//              group: 'Default',
//              label: 'Middle Name',
//              description: 'Please Input Your Middle Name',
//              placeholder: 'Middle Name',
//              required: false,
//              template: "<div class=\"form-group\">\n" +
//                  "    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n" +
//                  "    <div class=\"col-sm-8\">\n" +
//                  "        <input type=\"text\" ng-model=\"middleName\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>\n" +
//                  "        <p class='help-block'>{{description}}</p>\n" +
//                  "    </div>\n</div>",
//              popoverTemplate: "<form>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Label</label>\n" +
//                  "        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Description</label>\n" +
//                  "        <input type='text' ng-model=\"description\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Placeholder</label>\n" +
//                  "        <input type='text' ng-model=\"placeholder\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"checkbox\">\n" +
//                  "        <label>\n" +
//                  "            <input type='checkbox' ng-model=\"required\" />\n" +
//                  "            Required</label>\n" +
//                  "    </div>\n" +
//                  "    <hr/>\n" +
//                  "    <div class='form-group'>\n" +
//                  "        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n" +
//                  "        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n" +
//                  "        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n" +
//                  "    </div>\n" +
//                  "</form>"
//          });
//          $builderProvider.registerComponent('lastName', {
//              group: 'Default',
//              label: 'Last Name',
//              description: 'Please Input Your Last Name',
//              placeholder: 'Last Name',
//              required: false,
//              template: "<div class=\"form-group\">\n" +
//                  "    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n" +
//                  "    <div class=\"col-sm-8\">\n" +
//                  "        <input type=\"text\" ng-model=\"lastName\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>\n" +
//                  "        <p class='help-block'>{{description}}</p>\n" +
//                  "    </div>\n</div>",
//              popoverTemplate: "<form>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Label</label>\n" +
//                  "        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Description</label>\n" +
//                  "        <input type='text' ng-model=\"description\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Placeholder</label>\n" +
//                  "        <input type='text' ng-model=\"placeholder\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"checkbox\">\n" +
//                  "        <label>\n" +
//                  "            <input type='checkbox' ng-model=\"required\" />\n" +
//                  "            Required</label>\n" +
//                  "    </div>\n" +
//                  "    <hr/>\n" +
//                  "    <div class='form-group'>\n" +
//                  "        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n" +
//                  "        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n" +
//                  "        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n" +
//                  "    </div>\n" +
//                  "</form>"
//          });
//          $builderProvider.registerComponent('phone', {
//              group: 'Default',
//              label: 'Phone Number',
//              description: 'Please Input Your Phone Number',
//              placeholder: 'Phone Number',
//              required: false,
//              template: "<div class=\"form-group\">\n" +
//                  "    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n" +
//                  "    <div class=\"col-sm-8\">\n" +
//                  "        <input type=\"text\" ng-model=\"phoneNumber\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>\n" +
//                  "        <p class='help-block'>{{description}}</p>\n" +
//                  "    </div>\n</div>",
//              popoverTemplate: "<form>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Label</label>\n" +
//                  "        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Description</label>\n" +
//                  "        <input type='text' ng-model=\"description\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Placeholder</label>\n" +
//                  "        <input type='text' ng-model=\"placeholder\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"checkbox\">\n" +
//                  "        <label>\n" +
//                  "            <input type='checkbox' ng-model=\"required\" />\n" +
//                  "            Required</label>\n" +
//                  "    </div>\n" +
//                  "    <hr/>\n" +
//                  "    <div class='form-group'>\n" +
//                  "        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n" +
//                  "        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n" +
//                  "        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n" +
//                  "    </div>\n" +
//                  "</form>"
//          });
//          $builderProvider.registerComponent('email', {
//              group: 'Default',
//              label: 'Email Address',
//              description: 'Please Input Your Email Address',
//              placeholder: 'Email Address',
//              required: false,
//              template: "<div class=\"form-group\">\n" +
//                  "    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n" +
//                  "    <div class=\"col-sm-8\">\n" +
//                  "        <input type=\"text\" ng-model=\"email\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>\n" +
//                  "        <p class='help-block'>{{description}}</p>\n" +
//                  "    </div>\n</div>",
//              popoverTemplate: "<form>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Label</label>\n" +
//                  "        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Description</label>\n" +
//                  "        <input type='text' ng-model=\"description\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Placeholder</label>\n" +
//                  "        <input type='text' ng-model=\"placeholder\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"checkbox\">\n" +
//                  "        <label>\n" +
//                  "            <input type='checkbox' ng-model=\"required\" />\n" +
//                  "            Required</label>\n" +
//                  "    </div>\n" +
//                  "    <hr/>\n" +
//                  "    <div class='form-group'>\n" +
//                  "        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n" +
//                  "        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n" +
//                  "        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n" +
//                  "    </div>\n" +
//                  "</form>"
//          });
////      $builderProvider.registerComponent('textArea', {
////        group: 'Default',
////        label: 'Text Area',
////        description: 'description',
////        placeholder: 'placeholder',
////        required: false,
////        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <textarea type=\"text\" ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" rows='6' placeholder=\"{{placeholder}}\"/>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
////        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Placeholder</label>\n        <input type='text' ng-model=\"placeholder\" class='form-control'/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required</label>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
////      });
////      $builderProvider.registerComponent('checkbox', {
////        group: 'Default',
////        label: 'Checkbox',
////        description: 'description',
////        placeholder: 'placeholder',
////        required: false,
////        options: ['value one', 'value two'],
////        arrayToText: true,
////        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <input type='hidden' ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\"/>\n        <div class='checkbox' ng-repeat=\"item in options track by $index\">\n            <label><input type='checkbox' ng-model=\"$parent.inputArray[$index]\" value='item'/>\n                {{item}}\n            </label>\n        </div>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
////        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required\n        </label>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
////      });
//        $builderProvider.registerComponent('age', {
//        group: 'Default',
//        label: 'Age',
////        description: 'Please Select Your Age',
//        placeholder: 'Age',
//        required: false,
//        options: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],
//        template: "<div class=\"form-group text-left\">\n" +
//            "    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\">{{label}}</label>\n" +
//            "    <div class=\"col-sm-4\">\n" +
//            "        <select ng-options=\"value for value in options\" id=\"{{formName+index}}\" class=\"form-control\"\n  ng-model=\"age\" ng-init=\"age = options[17]\"/>\n" +
////            "<p class='help-block'>{{description}}</p>\n" +
//            "    </div>\n" +
//            "</div>",
//        popoverTemplate: "<form>\n" +
//            "    <div class=\"form-group\">\n" +
//            "        <label class='control-label'>Label</label>\n" +
//            "        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n" +
//            "    </div>\n" +
////            "    <div class=\"form-group\">\n" +
////            "        <label class='control-label'>Description</label>\n" +
////            "        <input type='text' ng-model=\"description\" class='form-control'/>\n" +
////            "    </div>\n" +
//            "    <div class=\"form-group\">\n" +
//            "        <label class='control-label'>Options</label>\n" +
//            "        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n" +
//            "    </div>\n\n" +
//            "    <hr/>\n" +
//            "    <div class='form-group'>\n" +
//            "        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n" +
//            "        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n" +
//            "        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n" +
//            "    </div>\n" +
//            "</form>"
//      });
//           $builderProvider.registerComponent('graduationYear', {
//              group: 'Default',
//              label: 'Graduation Year',
//              description: 'High School',
//              placeholder: 'Graduation Year',
//              required: false,
//              options: [1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
//              template: "<div class=\"form-group text-left\">\n" +
//                  "    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\">{{label}}</label>\n" +
//                  "    <div class=\"col-sm-4\">\n" +
//                  "        <select ng-options=\"value for value in options\" id=\"{{formName+index}}\" class=\"form-control\"\n  ng-model=\"graduationYear\" ng-init=\"graduationYear = options[70]\"/>\n" +
//                  "        </select>"+
//                  "<p class='help-block'>{{description}}</p>\n" +
//                  "    </div>\n" +
//                  "</div>",
//              popoverTemplate: "<form>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Label</label>\n" +
//                  "        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Description</label>\n" +
//                  "        <input type='text' ng-model=\"description\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Options</label>\n" +
//                  "        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n" +
//                  "    </div>\n\n" +
//                  "    <hr/>\n" +
//                  "    <div class='form-group'>\n" +
//                  "        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n" +
//                  "        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n" +
//                  "        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n" +
//                  "    </div>\n" +
//                  "</form>"
//          });
//          $builderProvider.registerComponent('militaryAssociation', {
//              group: 'Default',
//              label: 'Military Association',
////              description: 'Please Select Military Association',
//              placeholder: 'Military Association',
//              required: false,
//              options: ['Yes', 'No'],
//              template: "<div class=\"form-group\">\n" +
//                  "    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n" +
//                  "    <div class=\"col-sm-4\">\n" +
//                  "        <div class='radio form-radio' ng-repeat=\"item in options track by $index\">\n" +
//                  "            <label><input name='{{formName+index}}' ng-model=\"$parent.association\" validator-group=\"{{formName}}\" value='{{item}}' type='radio'/>\n" +
//                  "                {{item}}\n            " +
//                  "            </label>\n" +
//                  "        </div>\n" +
////                  "        <p class='help-block'>{{description}}</p>\n" +
//                  "    </div>\n</div>",
//              popoverTemplate: "<form>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Label</label>\n" +
//                  "        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n" +
//                  "    </div>\n" +
////                  "    <div class=\"form-group\">\n" +
////                  "        <label class='control-label'>Description</label>\n" +
////                  "        <input type='text' ng-model=\"description\" class='form-control'/>\n" +
////                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Options</label>\n" +
//                  "        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n" +
//                  "    </div>\n\n" +
//                  "    <hr/>\n" +
//                  "    <div class='form-group'>\n" +
//                  "        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n" +
//                  "        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n" +
//                  "        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n" +
//                  "    </div>\n" +
//                  "</form>"
//          });
//          $builderProvider.registerComponent('address1', {
//              group: 'Default',
//              label: 'Street Address1',
//              description: 'Please Input Street Address1',
//              placeholder: 'Street Address1',
//              required: false,
//              template: "<div class=\"form-group\">\n" +
//                  "    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n" +
//                  "    <div class=\"col-sm-8\">\n" +
//                  "        <input type=\"text\" ng-model=\"address1\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>\n" +
//                  "        <p class='help-block'>{{description}}</p>\n" +
//                  "    </div>\n</div>",
//              popoverTemplate: "<form>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Label</label>\n" +
//                  "        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Description</label>\n" +
//                  "        <input type='text' ng-model=\"description\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Placeholder</label>\n" +
//                  "        <input type='text' ng-model=\"placeholder\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"checkbox\">\n" +
//                  "        <label>\n" +
//                  "            <input type='checkbox' ng-model=\"required\" />\n" +
//                  "            Required</label>\n" +
//                  "    </div>\n" +
//                  "    <hr/>\n" +
//                  "    <div class='form-group'>\n" +
//                  "        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n" +
//                  "        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n" +
//                  "        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n" +
//                  "    </div>\n" +
//                  "</form>"
//          });
//          $builderProvider.registerComponent('address2', {
//              group: 'Default',
//              label: 'Street Address2',
//              description: 'Please Input Street Address1',
//              placeholder: 'Street Address2',
//              required: false,
//              template: "<div class=\"form-group\">\n" +
//                  "    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n" +
//                  "    <div class=\"col-sm-8\">\n" +
//                  "        <input type=\"text\" ng-model=\"address2\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>\n" +
//                  "        <p class='help-block'>{{description}}</p>\n" +
//                  "    </div>\n</div>",
//              popoverTemplate: "<form>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Label</label>\n" +
//                  "        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Description</label>\n" +
//                  "        <input type='text' ng-model=\"description\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Placeholder</label>\n" +
//                  "        <input type='text' ng-model=\"placeholder\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"checkbox\">\n" +
//                  "        <label>\n" +
//                  "            <input type='checkbox' ng-model=\"required\" />\n" +
//                  "            Required" +
//                  "         </label>\n" +
//                  "    </div>\n" +
//                  "    <hr/>\n" +
//                  "    <div class='form-group'>\n" +
//                  "        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n" +
//                  "        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n" +
//                  "        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n" +
//                  "    </div>\n" +
//                  "</form>"
//          });
//          $builderProvider.registerComponent('city', {
//              group: 'Default',
//              label: 'City',
//              description: 'Please Input City',
//              placeholder: 'City',
//              required: false,
//              template: "<div class=\"form-group\">\n" +
//                  "    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n" +
//                  "    <div class=\"col-sm-8\">\n" +
//                  "        <input type=\"text\" ng-model=\"city\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>\n" +
//                  "        <p class='help-block'>{{description}}</p>\n" +
//                  "    </div>\n</div>",
//              popoverTemplate: "<form>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Label</label>\n" +
//                  "        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Description</label>\n" +
//                  "        <input type='text' ng-model=\"description\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Placeholder</label>\n" +
//                  "        <input type='text' ng-model=\"placeholder\" class='form-control'/>\n" +
//                  "    </div>\n" +
//                  "    <div class=\"checkbox\">\n" +
//                  "        <label>\n" +
//                  "            <input type='checkbox' ng-model=\"required\" />\n" +
//                  "            Required" +
//                  "         </label>\n" +
//                  "    </div>\n" +
//                  "    <hr/>\n" +
//                  "    <div class='form-group'>\n" +
//                  "        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n" +
//                  "        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n" +
//                  "        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n" +
//                  "    </div>\n" +
//                  "</form>"
//          });
//          $builderProvider.registerComponent('state', {
//              group: 'Default',
//              label: 'State',
////              description: 'State',
//              placeholder: 'State',
//              required: false,
//              options: [
//                  {
//                      name: "Alabama",
//                      abbreviation: "AL"
//                  },
//                  {
//                      name: "Alaska",
//                      abbreviation: "AK"
//                  },
//                  {
//                      name: "Arizona",
//                      abbreviation: "AZ"
//                  },
//                  {
//                      name: "Arkansas",
//                      abbreviation: "AR"
//                  },
//                  {
//                      name: "California",
//                      abbreviation: "CA"
//                  },
//                  {
//                      name: "Colorado",
//                      abbreviation: "CO"
//                  },
//                  {
//                      name: "Connecticut",
//                      abbreviation: "CT"
//                  },
//                  {
//                      name: "Delaware",
//                      abbreviation: "DE"
//                  },
//                  {
//                      name: "District Of Columbia",
//                      abbreviation: "DC"
//                  },
//                  {
//                      name: "Florida",
//                      abbreviation: "FL"
//                  },
//                  {
//                      name: "Georgia",
//                      abbreviation: "GA"
//                  },
//                  {
//                      name: "Hawaii",
//                      abbreviation: "HI"
//                  },
//                  {
//                      name: "Idaho",
//                      abbreviation: "ID"
//                  },
//                  {
//                      name: "Illinois",
//                      abbreviation: "IL"
//                  },
//                  {
//                      name: "Indiana",
//                      abbreviation: "IN"
//                  },
//                  {
//                      name: "Iowa",
//                      abbreviation: "IA"
//                  },
//                  {
//                      name: "Kansas",
//                      abbreviation: "KS"
//                  },
//                  {
//                      name: "Kentucky",
//                      abbreviation: "KY"
//                  },
//                  {
//                      name: "Louisiana",
//                      abbreviation: "LA"
//                  },
//                  {
//                      name: "Maine",
//                      abbreviation: "ME"
//                  },
//                  {
//                      name: "Maryland",
//                      abbreviation: "MD"
//                  },
//                  {
//                      name: "Massachusetts",
//                      abbreviation: "MA"
//                  },
//                  {
//                      name: "Michigan",
//                      abbreviation: "MI"
//                  },
//                  {
//                      name: "Minnesota",
//                      abbreviation: "MN"
//                  },
//                  {
//                      name: "Mississippi",
//                      abbreviation: "MS"
//                  },
//                  {
//                      name: "Missouri",
//                      abbreviation: "MO"
//                  },
//                  {
//                      name: "Montana",
//                      abbreviation: "MT"
//                  },
//                  {
//                      name: "Nebraska",
//                      abbreviation: "NE"
//                  },
//                  {
//                      name: "Nevada",
//                      abbreviation: "NV"
//                  },
//                  {
//                      name: "New Hampshire",
//                      abbreviation: "NH"
//                  },
//                  {
//                      name: "New Jersey",
//                      abbreviation: "NJ"
//                  },
//                  {
//                      name: "New Mexico",
//                      abbreviation: "NM"
//                  },
//                  {
//                      name: "New York",
//                      abbreviation: "NY"
//                  },
//                  {
//                      name: "North Carolina",
//                      abbreviation: "NC"
//                  },
//                  {
//                      name: "North Dakota",
//                      abbreviation: "ND"
//                  },
//                  {
//                      name: "Ohio",
//                      abbreviation: "OH"
//                  },
//                  {
//                      name: "Oklahoma",
//                      abbreviation: "OK"
//                  },
//                  {
//                      name: "Oregon",
//                      abbreviation: "OR"
//                  },
//                  {
//                      name: "Pennsylvania",
//                      abbreviation: "PA"
//                  },
//                  {
//                      name: "Rhode Island",
//                      abbreviation: "RI"
//                  },
//                  {
//                      name: "South Carolina",
//                      abbreviation: "SC"
//                  },
//                  {
//                      name: "South Dakota",
//                      abbreviation: "SD"
//                  },
//                  {
//                      name: "Tennessee",
//                      abbreviation: "TN"
//                  },
//                  {
//                      name: "Texas",
//                      abbreviation: "TX"
//                  },
//                  {
//                      name: "Utah",
//                      abbreviation: "UT"
//                  },
//                  {
//                      name: "Vermont",
//                      abbreviation: "VT"
//                  },
//                  {
//                      name: "Virginia",
//                      abbreviation: "VA"
//                  },
//                  {
//                      name: "Washington",
//                      abbreviation: "WA"
//                  },
//                  {
//                      name: "West Virginia",
//                      abbreviation: "WV"
//                  },
//                  {
//                      name: "Wisconsin",
//                      abbreviation: "WI"
//                  },
//                  {
//                      name: "Wyoming",
//                      abbreviation: "WY"
//                  }
//              ],
//              template: "<div class=\"form-group text-left\">\n" +
//                  "    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\">{{label}}</label>\n" +
//                  "    <div class=\"col-sm-4\">\n" +
//                  "        <select ng-options=\"value.abbreviation as value.name for value in options\" ng-model=\"$parent.state\" ng-init=\"$parent.state = options[0].abbreviation\" id=\"{{formName+index}}\" class=\"form-control\"\n></select>\n" +
////            "<p class='help-block'>{{description}}</p>\n" +
//                  "    </div>\n" +
//                  "</div>",
//              popoverTemplate: "<form>\n" +
//                  "    <div class=\"form-group\">\n" +
//                  "        <label class='control-label'>Label</label>\n" +
//                  "        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n" +
//                  "    </div>\n" +
////            "    <div class=\"form-group\">\n" +
////            "        <label class='control-label'>Description</label>\n" +
////            "        <input type='text' ng-model=\"description\" class='form-control'/>\n" +
////            "    </div>\n" +
//                  "    <hr/>\n" +
//                  "    <div class='form-group'>\n" +
//                  "        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n" +
//                  "        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n" +
//                  "        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n" +
//                  "    </div>\n" +
//                  "</form>"
//          });
    }
  ]);

}).call(this);
