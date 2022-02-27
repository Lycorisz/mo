---
title: 一些基础问题
date: "2022-2-27"
categories:
  - JavaScript
  - Vue
tags:
  - 基础
publish: true
---

## 什么是 HTML 语义化

```
    根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析。
```

## 为什么要 HTML 语义化

```
    1. 为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构；

    2. 用户体验：例如title、alt用于解释名词或解释图片信息、label标签的活用；

    3. 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；

    4. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；

    5. 便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
```

## 标签 title 与 alt 属性的区别

```
    它们都会出现一个浮层用于解释图片的相关内容。

    alt属性会在图片未加载或者无法加载时在原本图片位置显示一段文字，便于用户浏览与开发者维护，搜索引擎也可以通过这个属性获取图片。

    title属性可以用在任何元素上，当用户把鼠标移动到元素上时，就会出现title的内容，起到对图片说明的作用，其实质就是对图片的一种备注或者注释
```

## iframe 的优缺点

### 优点

```
    可以跨域请求其他网站，并将网站完整展示出来

    典型系统结构可以提高代码的复用性

    创建一个全新的独立的宿主环境，可以隔离或者访问原生接口及对象

    模块分离，若多个页面引用同一个iframe，则便于修改操作

    实现广告展示的一个解决方案

    若需要刷新iframe则只需要刷新框架内，不需要刷新整个页面
```

### 缺点

```
    iframes阻塞页面加载，影响网页加载速度，iframe加载完毕后才会触发window.onload事件，动态设置src可解决这个问题。

    加载了新页面，增加了css与js文件的请求，即额外增加了HTTP请求，增加了服务器负担。

    有时iframe由于页面挤占空间的原因出现滚动条，造成布局混乱。

    不利于SEO，搜索引擎的爬虫无法解读iframe的页面。

    有些小型的移动设备如手机等无法完全显示框架，兼容性较差。

    iframe与主页面是共享链接池的，若iframe加载时用光了链接池，则会造成主页面加载阻塞。
```

## CSS 盒子模型

### W3C 盒模型（标准盒模型）

```
    默认box-size: content-box
    标签宽度：width: content-width + border + padding + margin
    CSS的宽width = content-width
```

### IE 盒模型（怪异盒模型）

```
    默认box-size: border-box
    标签宽度：width: content-width + margin
    CSS的宽width = content-width + 2 * （border + padding）
```

## 垂直居中

```
    1. 文本垂直居中：line-height
    2. 元素垂直居中：
        1. flex布局：align-items：center;
        2. table-cell布局：vertical-align： middle;
        3. padding： 5px 0;
        4. position: absolute; margin: auto 0;
```

## raba 和 opacity 的透明效果

```
    rgba()和opacity都能实现透明效果，但最大的不同是opacity作用于元素，以及元素内的所有内容的透明度，而rgba()只作用于元素的颜色或其背景色。
```

## position 中,relative 和 absolute 分别相对于谁进行定位

```
    relative生成相对定位的元素，相对于其正常位置进行定位。
    absolute生成绝对定位的元素，相对于最近一级的 不是 static 的父元素来进行定位,如果没有找到的话，最终是根据body进行定位。
```

## HTML5 与 CSS3 的新特性

```
    HTML5:

    1. 语义化标签(header,footer,nav,section,article,aside,details,summary,dialog等)

    2. 增强型表单(HTML5 拥有多个新的表单 Input 输入类型。这些新特性提供了更好的输入控制和验证。color,date,email等；新增表单属性（placeholder,required,step等）；)

    3. 视频与音频(audio支持音频：mp3，ogg，wav；video支持视频：mp4，webm，ogg)

    4. canvas绘图：需用JavaScript进行绘制

    5. svg绘图：使用XML描述2d图形的语言

    6. 地理定位

    7. 拖放API：dragstart*1 + drag*n + dragend*1

    8. webworker

    9. Web Storage：localstorage与sessionstorage

    10. WebSocket

    CSS3:

    1、新增选择器 p:nth-child（n）{color: rgba（255, 0, 0, 0.75）}

    2、弹性盒模型 display: flex;

    3、多列布局 column-count: 5;

    4、媒体查询 @media （max-width: 480px） {.box: {column-count: 1;}}

    5、个性化字体 @font-face{font-family:BorderWeb;src:url（BORDERW0.eot）；}

    6、颜色透明度 color: rgba（255, 0, 0, 0.75）；

    7、圆角 border-radius: 5px;

    8、渐变 background:linear-gradient（red, green, blue）；

    9、阴影 box-shadow:3px 3px 3px rgba（0, 64, 128, 0.3）；

    10、倒影 box-reflect: below 2px;

    11、文字装饰 text-stroke-color: red;

    12、文字溢出 text-overflow:ellipsis;

    13、背景效果 background-size: 100px 100px;

    14、边框效果 border-image:url（bt_blue.png） 0 10;

    15、旋转 transform: rotate（20deg）；

    16、倾斜 transform: skew（150deg, -10deg）；

    17、位移 transform:translate（20px, 20px）；

    18、缩放 transform: scale（。5）；

    19、平滑过渡 transition: all .3s ease-in .1s;

    20、动画 @keyframes anim-1 {50% {border-radius: 50%;}} animation: anim-1 1s;
```

## BFC 是什么（块级格式化上下文）

### 定义

```
    它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。
```

### 触发：

```
    1. body根元素
    2. 浮动元素（float出现除none之外的值）
    3. 绝对定位（position出现fixed与absolute）
    4. display（inline-block,table-cells,flex）
    5、overflow（除visible以外的的值，如hidden,auto,scroll）
```

### 特点：

```
    1. BFC内部块级盒子垂直排列。
    2. box的垂直方向距离由margin决定，属于同一个BFC的两个相邻box的margin会发生重叠。
    3. 每个元素的marginbox的左边，与包含块borderbox的左边相接触。
    4. BFC的区域不会与floatbox接触。
    5. BFC是页面上一个隔离的独立容器，容器内子元素不会影响外部，外部元素也不会影响内部。
    6. 计算BFC高度时，浮动元素也参与计算。
```

## 常见兼容性问题

## JS 的数据类型

```
    Number, String, Boolean, Symbol, null, undefined, Bigint, Object(Array, Date, function)
```

## 判断一个值是什么类型

```
    1. typeof

    2. instantof

    3. constructor

    4. Object.prototype.toString（最准确） 用法：必须使用Object.prototype.toString.call来强制执行，某些类型中实现了自己的toString方法
```

## null 和 undefined 的区别

```
    null 表示一个值被定义了，定义为“空值”；变量是空对象
    undefined 表示根本不存在定义。
    在使用var声明变量但未对其加以初始化时，这个变量的值就是undefined。
    null值则是表示空对象指针。
```

## 判断一个变量是不是数组（不能用 typeof）

```
    1. Object.prototype.toString.call(arr)

    2. Array.isArray()高版本浏览器下最好用
```

## 箭头函数有哪些特点

```
    1. this指向，this永远等于外层函数的this

    2. 不可作为构造函数

    3. arguments对象：箭头函数中没有定义arguments关键字，跟this一样，也是由词法决定的，也就是会解析到外层函数的arguments，如果你想获取箭头函数自己的参数对象，可以用 ES6 的剩余参数（...操作符）特性

    4. 隐式返回值：如果箭头函数只包含一个表达式，那么就可以省略函数体的花括号和return语句，并且这个表达式会被当作返回值。

    5. 类成员方法：作为类的成员方法，箭头函数的this指向永远指向类的实例对象
```

## new 操作符具体做了什么

```
    1. 创建一个空对象

    2. 链接到原型：把 obj 的proto 指向构造函数Func的原型对象 prototype，此时便建立了 obj 对象的原型链：obj->Func.prototype->Object.prototype->null

    3. 绑定this值（让Func中的this指向obj，并执行Func的函数体。）

    4. 返回新对象：判断Func的返回值类型：如果无返回值 或者 返回一个非对象值，则将 obj 作为新对象返回；否则会将 result 作为新对象返回。
```

## document.write 和 innerHTML 的区别

```
    1.write是DOM方法,向文档写入HTML表达式或JavaScript代码，可列出多个参数，参数被顺序添加到文档中 ；innerHTML是DOM属性,设置或返回调用元素开始结束标签之间的HTML元素。

    2.两者都可向页面输出内容,innerHTML比document.write更灵活。

        当文档加载时调用document.write直接向页面输出内容，文档加载结束后调用document.write输出内容会重写整个页面。
        通常按照两种的方式使用 write() 方法：一是在使用该方在文档中输出 HTML，二是在调用该方法的的窗口之外的窗口、框架中产生新文档（务必使用close关闭文档）。
        在读模式下，innerHTML属性返回与调用元素的所有子节点对应的HTML标记，在写模式下，innerHTML会根据指定的值创建新的DOM树替换调用元素原先的所有子节点。

    3.两者都可动态包含外部资源如JavaScript文件

        通过document.write插入<script>元素会自动执行其中的脚本；
        大多数浏览器中，通过innerHTML插入<script>元素并不会执行其中的脚本。
```
