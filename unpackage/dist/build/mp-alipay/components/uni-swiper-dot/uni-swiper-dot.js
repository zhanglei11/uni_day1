;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uni-swiper-dot/uni-swiper-dot"],{2514:function(t,e,n){"use strict";var i=n("c87c"),o=n.n(i);o.a},3726:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},d=[]},"42e32":function(t,e,n){"use strict";n.r(e);var i=n("3726"),o=n("deed");for(var d in o)"default"!==d&&function(t){n.d(e,t,(function(){return o[t]}))}(d);n("2514");var r,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"547f0d12",null,!1,i["a"],r);e["default"]=u.exports},c87c:function(t,e,n){},d1e1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};e.default=i},deed:function(t,e,n){"use strict";n.r(e);var i=n("d1e1"),o=n.n(i);for(var d in i)"default"!==d&&function(t){n.d(e,t,(function(){return i[t]}))}(d);e["default"]=o.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uni-swiper-dot/uni-swiper-dot-create-component',
    {
        'components/uni-swiper-dot/uni-swiper-dot-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("42e32"))
        })
    },
    [['components/uni-swiper-dot/uni-swiper-dot-create-component']]
]);
