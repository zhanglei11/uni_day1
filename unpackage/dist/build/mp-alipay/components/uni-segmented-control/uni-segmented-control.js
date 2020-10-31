;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uni-segmented-control/uni-segmented-control"],{"0f63":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"UniSegmentedControl",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",{currentIndex:t}))}}};n.default=r},"2f96":function(t,n,e){"use strict";e.r(n);var r=e("bc8e"),u=e("9bf6");for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("3664");var i,f=e("f0c5"),o=Object(f["a"])(u["default"],r["b"],r["c"],!1,null,"6ff4d795",null,!1,r["a"],i);n["default"]=o.exports},3664:function(t,n,e){"use strict";var r=e("5038"),u=e.n(r);u.a},5038:function(t,n,e){},"9bf6":function(t,n,e){"use strict";e.r(n);var r=e("0f63"),u=e.n(r);for(var c in r)"default"!==c&&function(t){e.d(n,t,(function(){return r[t]}))}(c);n["default"]=u.a},bc8e:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},c=[]}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uni-segmented-control/uni-segmented-control-create-component',
    {
        'components/uni-segmented-control/uni-segmented-control-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("2f96"))
        })
    },
    [['components/uni-segmented-control/uni-segmented-control-create-component']]
]);
