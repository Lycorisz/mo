(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{546:function(v,e,_){"use strict";_.r(e);var t=_(12),a=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"指令-插值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#指令-插值"}},[v._v("#")]),v._v(" 指令 插值")]),v._v(" "),_("ul",[_("li",[v._v("插值 表达式 "),_("code",[v._v("{ msg }")])]),v._v(" "),_("li",[v._v("指令 动态属性 "),_("code",[v._v("{ flag ? true : false }")])]),v._v(" "),_("li",[v._v("v-html 会有"),_("a",{attrs:{href:"https://www.jianshu.com/p/4fcb4b411a66",target:"_blank",rel:"noopener noreferrer"}},[v._v("xss(Cross Site Scripting)"),_("OutboundLink")],1),v._v("风险，会覆盖子组件 "),_("code",[v._v("v-html")])])]),v._v(" "),_("h2",{attrs:{id:"computed-和-watch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#computed-和-watch"}},[v._v("#")]),v._v(" computed 和 watch")]),v._v(" "),_("ul",[_("li",[v._v("computed有缓存，data不变不会重新计算")]),v._v(" "),_("li",[v._v("watch深度监听 "),_("code",[v._v("deep: true")])]),v._v(" "),_("li",[v._v("watch监听引用类型。拿不到oldVal 因为引用拿的是指针，所以此时oldVal已经变成了新的val了")])]),v._v(" "),_("h2",{attrs:{id:"class-和-style"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#class-和-style"}},[v._v("#")]),v._v(" class 和 style")]),v._v(" "),_("ul",[_("li",[v._v("使用动态属性")]),v._v(" "),_("li",[v._v("使用驼峰式写法")])]),v._v(" "),_("h2",{attrs:{id:"条件渲染"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#条件渲染"}},[v._v("#")]),v._v(" 条件渲染")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("v-if v-else")]),v._v("的用法， 可以使用变量，也可以使用"),_("code",[v._v("===")]),v._v("表达式")]),v._v(" "),_("li",[_("code",[v._v("v-if")]),v._v("会根据条件选择渲染或者不渲染，"),_("code",[v._v("v-show")]),v._v("其实已经渲染出来了但是会根据条件设置"),_("code",[v._v("display")]),v._v("属性")]),v._v(" "),_("li",[_("code",[v._v("v-if")]),v._v("适合切换频率低的场景，因为设置"),_("code",[v._v("display")]),v._v("的消耗比渲染的消耗小")])]),v._v(" "),_("h2",{attrs:{id:"循环-列表-渲染"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#循环-列表-渲染"}},[v._v("#")]),v._v(" 循环（列表）渲染")]),v._v(" "),_("ul",[_("li",[v._v("遍历对象 "),_("code",[v._v("v-for")]),v._v("也可以")]),v._v(" "),_("li",[_("code",[v._v("key")]),v._v("很重要。但是也不能乱写（使用random或index）")]),v._v(" "),_("li",[_("code",[v._v("v-for")]),v._v("和"),_("code",[v._v("v-if")]),v._v("不能一起使用，因为一起使用的时候由于v-for优先级高，底层渲染会在每次循环时都会调用一次if，导致非常消耗性能，解决方法是可以将循环的内容用计算属性计算出来进行循环，或者将if和for分开")])]),v._v(" "),_("h2",{attrs:{id:"事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[v._v("#")]),v._v(" 事件")]),v._v(" "),_("ul",[_("li",[v._v("event参数，自定义参数 如果无参数，默认有一个"),_("code",[v._v("event")]),v._v("参数，如果带参数还要传event，可以用"),_("code",[v._v("$event")]),v._v("，"),_("code",[v._v("event")]),v._v("是原生的，是被挂载到当前元素的")]),v._v(" "),_("li",[v._v("事件修饰符，按键修饰符")]),v._v(" "),_("li",[v._v("事件被绑定到哪里，原生dom事件的绑定是调用了"),_("code",[v._v("addEventListener")]),v._v(" 组件事件的绑定是调用了内部的$on")])]),v._v(" "),_("h2",{attrs:{id:"表单"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#表单"}},[v._v("#")]),v._v(" 表单")]),v._v(" "),_("ul",[_("li",[v._v("v-model")]),v._v(" "),_("li",[v._v("常见表单项 "),_("code",[v._v("textarea, checkbox, radio, select")])]),v._v(" "),_("li",[v._v("修饰符 "),_("code",[v._v("lazy, number, trim")])])]),v._v(" "),_("h2",{attrs:{id:"vue组件使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue组件使用"}},[v._v("#")]),v._v(" vue组件使用")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("props")]),v._v("和"),_("code",[v._v("$emit")])]),v._v(" "),_("li",[v._v("组件间通讯 - 自定义事件 "),_("code",[v._v("vue.$on")]),v._v("、"),_("code",[v._v("vue.$emit")]),v._v("和"),_("code",[v._v("vue.$off")])]),v._v(" "),_("li",[v._v("组件生命周期\n"),_("ul",[_("li",[v._v("挂载阶段 "),_("code",[v._v("beforeCreate, created, beforeMount, mounted")])]),v._v(" "),_("li",[v._v("更新阶段 "),_("code",[v._v("beforeUpdate, updated")])]),v._v(" "),_("li",[v._v("销毁阶段 "),_("code",[v._v("beforeDestroy, destroyed")]),v._v(" "),_("br"),v._v("\n组件的调用顺序都是先父后子,渲染完成的顺序肯定是先子后父"),_("br"),v._v("\n组件的销毁操作是先父后子，销毁完成的顺序是先子后父")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);