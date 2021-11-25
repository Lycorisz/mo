---
title: 盒模型&BFC
date: '2021-11-23'
categories:
 - JavaScript
tags:
 - 基础
publish: true
---
# 盒模型

### W3C标准盒模型
```
    box-size: content-box
    width: content-width
```

### IE盒模型
```
    box-size: content-box
    width: content-width + border + padding
```

# BFC(块格式化上下文)

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