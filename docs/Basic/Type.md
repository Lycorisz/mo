---
title: 数据类型
date: '2021-11-23'
categories:
 - JavaScript
tags:
 - 基础
publish: true
---

## 原始类型

截止目前js版本，共有如下原始类型
```
    number, string, boolean, null, undefined, symbol, bigint
```
原始类型变量无任何可调用的方法
```
    '1'.toString()可以调用 =》 '1'是String对象，拥有toString方法。
```
number表现为浮点型数字
```
0.1 + 0.2 !== 0.3 // 存在精度丢失问题
```
typeof null => object
```
    js最初为32位系统，为了性能考虑使用低位存储变量的类型信息，由于null表现为全0，而000开头则视为对象，所以会出现这种情况
```