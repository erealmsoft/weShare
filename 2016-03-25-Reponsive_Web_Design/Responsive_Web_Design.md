#响应式设计    

###——RWD,Responsive Web Design，提供各种设备都能浏览网页的一种设计方法，让网页在不同的设备中展现不同的设计风格。

##一、一些术语
###1.流体网格
流体网格是一种简单的网格系统，将每个网格格子使用百分比单位来控制网格大小。其最大的好处是让网格大小随时根据屏幕尺寸大小做出相对应的比例缩放。

###2.弹性图片
弹性图片指不给图片设置固定尺寸，而是根据流体网格进行缩放，用于适应各种网格尺寸。    
eg:  img{max-width:100%} 或者 使用background-image给元素使用背景图片  

###3.媒体查询
Medial Queries，根据用户的使用设备的当前宽度，你的Web页面将加载一个备用的样式，实现特定的页面风格。

###4.主要断点
主要断点，即设备宽度的临界点。媒体特性中的“min-width”和“max-width”对应的属性值就是响应式设计中的断点值。就是使用不同断点，创建不同媒体查询的条件。而每个断点会对应调用一个样式文件（或者样式代码）。

##二、Media Queries
Media Queries是CSS3新增加的一个模块功能，其最大的特色就是通过CSS3来查询媒体，然后调用对应的样式。
###1.媒体类型
可以通过媒体类型对不同的设备制定不同的样式。    

10种媒体类型：    

- All----所有设备     
- Braille----盲人用点字法触觉回馈设备    
- Embossed----盲文打印机
- Handheld----便携设备
- Print----打印用纸或打印预览视图
- Projection----各种投影设备
- Screen----电脑显示器
- Speech----语音或音频合成器
- Tv----电视机类型设备
- Tty----使用固定密度字母栅格的媒介，比如电传打字机和终端

其中**Screen**、**All**和**Print**为最常见的三种媒体类型。
###2.常见引用方法
**link**方法    
在<link>标签引用样式的时候，通过link标签中的media属性来指定不同的媒体类型。
    `<link rel="stylesheet" type="text/css" href="style.css" media="screen" />`
	`<link rel="stylesheet" type="text/css" href="print.css" media="print" />`    

**@import**方法    
@import可以引用样式文件，同样也可以用来引用媒体类型。
`@importurl(reset.css) screen;`    
`@importurl(print.css) print;`       

`<head>(在IE6~7都不被支持)`   
`<style type="text/css">`
    `@importurl(style.css) all;`   
`</style>`   
`</head>`
 
**@media**方法   
@media是CSS3中新引进的一个特性，被称为媒体查询。在页面中也可以通过这个属性来引入媒体类型。    
（1）在样式文件中引用媒体类型：    
`@media screen {`    
   `选择器{/*你的样式代码写在这里…*/}`    
`}`

（2）使用@media引入媒体类型的方式是在<head>标签中的`<style>`中引用。    

`<head>`    
`<style type="text/css">`    
    `@media screen{`    
    `选择器{/*你的样式代码写在这里…*/}`    
`}`    
`</style>`        
`</head>`    

###3.Media Queries使用方法
(1)**@media 媒体类型 and （媒体特性）{你的样式}**     
媒体特性的书写方式和样式的书写方式非常相似，主要分为两个部分，第一个部分指的是媒体特性，第二部分为媒体特性所指定的值，而且这两个部分之间使用冒号分隔。    
eg:(max-width: 480px)    

(2)媒体特性是通过min/max来表示大于等于或小于做为逻辑判断，而不是使用小于（<）和大于（>）这样的符号来判断。

eg:`@media screen and (max-width:480px){`    
   `.ads {`    
   `display:none;`    
  `}`    
`}`

`@media screen and (min-width:900px){`    
`.wrapper{width: 980px;}`    
`}`

`@media screen and (min-width:600px) and (max-width:900px)`    
`{`    
  `body {background-color:#f5f5f5;}`    
`}`

(3)not、only关键字    
**`@media not/only print and (max-width: 1200px){样式代码}`**    
样式代码将被使用在除打印设备和设备宽度小于1200px下所有设备中/只有打印机中。

##三、Responsive Web Design    
###1.mate 标签    
meta标签被称为可视区域meta标签，其使用方法如下：    
`<meta name=”viewport” content=”” />`    

**content**属性:    
- **width**----可视区域的宽度，其值可以是一个具体数字或关键字'device-width'    
- **height**----可视区域的高度，其值可以是一个具体数字或关键字'device-height'     
- **initial-scale**----页面首次被显示时可视区域的缩放级别，取值为1.0时将页面按实际尺寸显示，无任何缩放    
- **minimun-scale**----可视区域的最小缩放级别，表示用户可以将页面缩小的程度，取值为1.0时，将禁止用户缩小至实际尺寸以下    
- **maximun-scale**----可视区域的放大缩放级别，表示用户可以将页面放大的程度，取值为1.0时，将禁止用户放大至实际尺寸以上    
- **user-scalable**----指定用户是否可以对页面进行缩放，设置为yes将允许缩放，no为禁止缩放  
  
**eg**:`<meta name=”viewport” content=”width=device-width,initial-scale=1.0” />`  
使用设备的宽度为视图的宽度  

##2.不同设备的分辨率设置

**1024px显屏**    
`@media screen and (max-width : 1024px) {                    
/* 样式写在这里 */          
}`    

**800px显屏**   
`@media screen and (max-width : 800px) {              
/* 样式写在这里 */          
}`     
    
**640px显屏**
`@media screen and (max-width : 640px) {              
/* 样式写在这*/            
}`   
     
**iPad横板显屏**
`@media screen and (max-device-width: 1024px) and (orientation: landscape) {              
/* 样式写在这 */            
}`    
     
**iPad竖板显屏**
`@media screen and (max-device-width: 768px) and (orientation: portrait) {         
/* 样式写在这 */            
}`     
    
**iPhone 和 Smartphones**
`@media screen and (min-device-width: 320px) and (min-device-width: 480px) {              
/* 样式写在这 */            
}`

##3.布局容器    
Bootstrap 需要为页面内容和栅格系统包裹一个 .container 容器。    
.container 类用于**固定**宽度并支持响应式布局的容器。
`<div class="container">`    
  `...`    
`</div`    

.container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器。    
`<div class="container-fluid">`    
  `...`    
`</div>`    

##4.禁止响应式布局
(1)移除 此 CSS 文档中提到的设置浏览器视口（viewport）的标签：`<meta>`。    

(2)通过为 .container 类设置一个 width 值从而覆盖框架的默认 width 设置，例如 width: 970px !important;    

(3)对于栅格布局，替换掉 .col-md-* 和 .col-lg-*。

##四、栅格系统    
###1.媒体查询
Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。    

/* 小屏幕（平板，大于等于 768px） */
`@media (min-width: @screen-sm-min) { ... }`

/* 中等屏幕（桌面显示器，大于等于 992px） */
`@media (min-width: @screen-md-min) { ... }`

/* 大屏幕（大桌面显示器，大于等于 1200px） */
`@media (min-width: @screen-lg-min) { ... }`    

`@media (max-width: @screen-xs-max) { ... }`    
`@media (min-width: @screen-sm-min) and (max-width:`     `@screen-sm-max) { ... }`    
`@media (min-width: @screen-md-min) and (max-width:`     `@screen-md-max) { ... }````
`@media (min-width: @screen-lg-min) { ... }`    

###2.参数    
- 超小屏幕 手机(<768px)----.col-sx-
- 小屏幕 平板(>=768px)----.col-sm-
- 中等屏幕 桌面显示器(>=992px)----.col-md-
- 大屏幕 大桌面显示器(>=1200px)----.col-lg-
