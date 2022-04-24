---
title: 自适应插件------lib-flexible
date: "2022-4-24"
categories:
  - Vue
tags:
  - 技巧
publish: true
---

### 安装 lib-flexible

```
  npm i lib-flexible -S
```

### 在 main.js 中引入

```
  import 'lib-flexible/flexible';
```

### 安装 px2rem-loader、postcss-loader

```
  npm i px2rem-loader postcss-loader --save-dev
```

### 配置 px2rem

如果使用的是 cli2.x,需要找到 build/utils.js,找到 exports.cssLoaders，修改为

```
exports.cssLoaders = function(options) {
    options = options || {}
    var cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: process.env.NODE_ENV === 'production',
            sourceMap: options.sourceMap
        }
    }
// 新增px2remLoader和postcssLoader定义
    var px2remLoader = {
        loader: 'px2rem-loader',
        options: {
          remUnit: 192,
          remPrecision: 8  //1rem=多少像素 这里的设计稿是1920px。
        }
    }
    var postcssLoader = {
        loader: 'postcss-loader',
        options: {
          sourceMap: options.sourceMap
        }
      }
    function generateLoaders(loader, loaderOptions) {
        // var loaders = [cssLoader] //注释或删除此行变更成下面的方式
        var loaders = options.usePostCSS ? [cssLoader,postcssLoader, px2remLoader] : [cssLoader,px2remLoader]
        if(loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }

        if(options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            })
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }

    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', {
            indentedSyntax: true
        }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
}
```

如果使用的是 vue3.x 的版本，则需要新建文件 vue.config.js，并在此文件配置以下代码

```
module.exports = {
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        // 以设计稿1920为例， 1920 / 10 = 192
                        remUnit: 192
                    }),
                ]
            }
        }
    },
};
```

### 当然，除了上面的配置外，在插件源码中 refreshRem 方法提到当宽度大于 540 这个特定值时就不再有对应的适配，这里为了使其适配超大屏幕，可以将其删除或注释。

打开./node_modules/lib-flexible/flexible.js，找到如下片段源码：

```
  function refreshRem(){
    var width = docEl.getBoundingClientRect().width;
    //if (width / dpr > 540) {
    //  width = 540 * dpr;
    //}
    var rem = width / 10;
    docEl.style.fontSize = rem + 'px';
    flexible.rem = win.rem = rem;
}
```

### 不过一般是不建议直接更改 node_modules 的代码，这时可以将 flexible.js 复制出来放置到 static 文件夹中，在该文件做以上的代码变更，然后在 main.js 里面将之前的引用更改为当前文件的引用即可。

```
  import '../static/flexible.js';
```
