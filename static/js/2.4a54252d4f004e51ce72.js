webpackJsonp([2],{"6VBC":function(t,e){},Cdx3:function(t,e,s){var a=s("sB3e"),n=s("lktj");s("uqUo")("keys",function(){return function(t){return n(a(t))}})},"Jhn/":function(t,e,s){"use strict";var a=s("DMPO"),n={name:"MeSlider",components:{swiper:a.swiper},props:{direction:{type:String,default:"horizontal",validator:function(t){return["horizontal","vertical"].indexOf(t)>-1}},interval:{type:Number,default:3e3,validator:function(t){return t>=0}},loop:{type:Boolean,default:!0},pagination:{type:Boolean,default:!0},data:{type:Array,default:function(){return[]}}},data:function(){return{keyId:Math.random()}},watch:{data:function(t){0!==t.length&&(this.swiperOption.loop=1!==t.length&&this.loop,this.keyId=Math.random())}},created:function(){this.init()},methods:{init:function(){this.swiperOption={watchOverflow:!0,direction:this.direction,autoplay:!!this.interval&&{delay:this.interval,disableOnInteraction:!1},slidesPerView:1,loop:!(this.data.length<=1)&&this.loop,pagination:{el:this.pagination?".swiper-pagination":null}}}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("swiper",{key:this.keyId,attrs:{options:this.swiperOption}},[this._t("default"),this._v(" "),this.pagination?e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):this._e()],2)},staticRenderFns:[]};var r=s("VU/8")(n,i,!1,function(t){s("pwlJ")},"data-v-e40efaea",null);e.a=r.exports},"Pp+J":function(t,e){},ccg4:function(t,e){},e2jc:function(t,e){},fZjL:function(t,e,s){t.exports={default:s("jFbC"),__esModule:!0}},jFbC:function(t,e,s){s("Cdx3"),t.exports=s("FeBl").Object.keys},pwlJ:function(t,e){},taF9:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("//Fk"),n=s.n(a),i=s("cQcd"),r=s("T452"),o={components:{MeNavbar:s("/l8+").a},methods:{back:function(){this.$router.back()}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("me-navbar",{staticClass:"header",attrs:{title:"商品详情"}},[e("i",{staticClass:"iconfont icon-back",attrs:{slot:"left"},on:{click:this.back},slot:"left"}),this._v(" "),e("div",{attrs:{slot:"center"},slot:"center"}),this._v(" "),e("i",{staticClass:"iconfont icon-cart",attrs:{slot:"right"},slot:"right"})])},staticRenderFns:[]};var l=s("VU/8")(o,c,!1,function(t){s("6VBC")},"data-v-fa81de3a",null).exports,d=s("8MDr"),u=s("Jhn/"),v=s("odKQ"),f=s("DMPO"),p={components:{MeSlider:u.a,MeLoading:v.a,swiperSlide:f.swiperSlide},props:{sliders:{type:Array,default:[]}},watch:{sliders:function(t){0!==t.length&&this.$emit("slidersLoaded")}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"slide-wrap"},[this.sliders.length?e("me-slider",this._l(this.sliders,function(t,s){return e("swiper-slide",{key:s},[e("img",{staticClass:"slider-img",attrs:{src:t}})])}),1):e("me-loading")],1)},staticRenderFns:[]};var _=s("VU/8")(p,m,!1,function(t){s("w53u")},"data-v-0f481182",null).exports,h=s("fZjL"),C=s.n(h),g={name:"ProductDesc",props:{content:{type:Object,default:{}}},watch:{content:function(t){0!==C()(t).length&&this.$emit("contentLoaded")}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"desc"},[s("div",{staticClass:"price-wrap"},[s("span",{staticClass:"price"},[t._v("￥"+t._s(t.content.price))]),t._v(" "),s("span",{staticClass:"soldNum"},[t._v(t._s(t.content.soldCountMonth)+"件已售")])]),t._v(" "),s("div",{staticClass:"title"},[s("div",{staticClass:"wrap"},[t._v(t._s(t.content.title))])]),t._v(" "),s("div",{staticClass:"delivery"},[s("span",{staticClass:"fare"},[t._v(t._s(t.content.deliveryFade))]),t._v(" "),s("span",{staticClass:"count"},[t._v("月售"+t._s(t.content.soldCountTotal)+"件")]),t._v(" "),s("span",{staticClass:"from"},[t._v(t._s(t.content.from))])])])},staticRenderFns:[]};var w=s("VU/8")(g,y,!1,function(t){s("e2jc")},"data-v-5effe2f8",null).exports,b={name:"ProductRecommend",props:{recommends:{type:Object,default:{}}},method:{},watch:{recommends:function(t){0!==C()(t).length&&this.$emit("recommendsLoaded")}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-recommend"},[s("div",{staticClass:"re-total"},[t._v("商品评价("+t._s(t.recommends.totalCount)+")")]),t._v(" "),s("ul",{staticClass:"re-bubble"},t._l(t.recommends.keywords,function(e,a){return s("li",{key:a,staticClass:"re-item"},[s("span",{staticClass:"re-item-text"},[t._v(t._s(e.word))]),t._v(" "),s("span",{staticClass:"re-item-num"},[t._v("("+t._s(e.count)+")")])])}),0),t._v(" "),s("div",{staticClass:"user"},[s("div",{staticClass:"user-info"},[s("div",{staticClass:"user-name"},[t._v(t._s(t.recommends.user.userName))])]),t._v(" "),s("div",{staticClass:"user-re"},[t._v(t._s(t.recommends.user.content))]),t._v(" "),s("div",{staticClass:"re-info"},[t._v(t._s(t.recommends.user.dateTime))])])])},staticRenderFns:[]};var k=s("VU/8")(b,x,!1,function(t){s("ccg4")},"data-v-623fc9e8",null).exports,P={name:"ProductSeller",props:{seller:{type:Object,default:{}}},watch:{seller:function(t){0!==C()(t).length&&this.$emit("sellerLoaded")}}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"seller"},[s("div",{staticClass:"left"},[s("div",{staticClass:"pic-wrap"},[s("img",{attrs:{src:t.seller.shopPic}})])]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"shopName"},[t._v(t._s(t.seller.shopName))]),t._v(" "),s("div",{staticClass:"TMallIcon"},[s("img",{attrs:{src:t.seller.brandPic}})]),t._v(" "),s("div",{staticClass:"scoreList"},[s("div",{staticClass:"score-desc"},[t._v(t._s(t.seller.evaluates[0].title)+t._s(t.seller.evaluates[0].score))]),t._v(" "),s("div",{staticClass:"score-seller"},[t._v(t._s(t.seller.evaluates[1].title)+t._s(t.seller.evaluates[1].score))]),t._v(" "),s("div",{staticClass:"score-delivery"},[t._v(t._s(t.seller.evaluates[2].title)+t._s(t.seller.evaluates[2].score))])])])])},staticRenderFns:[]};var O=s("VU/8")(P,F,!1,function(t){s("xLXg")},"data-v-73eff37d",null).exports,S={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footerbar"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"iconfont icon-shop"}),t._v(" "),s("span",{staticClass:"text"},[t._v("店铺")])]),t._v(" "),s("div",{staticClass:"icon"},[s("i",{staticClass:"iconfont icon-service"}),t._v(" "),s("span",{staticClass:"text"},[t._v("客服")])]),t._v(" "),s("div",{staticClass:"icon"},[s("i",{staticClass:"iconfont icon-collect"}),t._v(" "),s("span",{staticClass:"text"},[t._v("收藏")])]),t._v(" "),s("div",{staticClass:"add"},[t._v("加入购物车")]),t._v(" "),s("div",{staticClass:"buy"},[t._v("马上抢")])])}]};var j=s("VU/8")({name:"ProductFooter"},S,!1,function(t){s("ufk4")},"data-v-9338de96",null).exports,$={name:"Product",components:{ProductHeader:l,MeScroll:d.a,ProductSlide:_,ProductDesc:w,ProductRecommend:k,ProductSeller:O,ProductFooter:j},data:function(){return{sliders:[],content:{},recommends:{},seller:{},flags:[]}},created:function(){this.getdata(this.$route.params.id)},methods:{getdata:function(t){var e=this;return function(t){console.log(t);var e={api:"mtop.taobao.detail.getdetail",ttid:"2017%40taobao_h5_6.6.0",data:'{"itemNumId":"'+t+'"}',appKey:12574478,dataType:"jsonp",type:"jsonp",v:"6.0"};return Object(i.a)("https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/",e,r.d).then(function(t){if("SUCCESS::调用成功"===t.ret[0]){var e=JSON.parse(t.data.apiStack[0].value);return console.log("xxxx"),console.log(e),t.data}throw new Error("没有成功获取到数据")}).catch(function(t){t&&console.log(t)}).then(function(t){return new n.a(function(e){setTimeout(function(){e(t)},1e3)})})}(t).then(function(t){console.log(t);var s=JSON.parse(t.apiStack[0].value);e.sliders=t.item.images,e.content={title:t.item.title,price:s.price.price.priceText,soldCountTotal:s.item.vagueSellCount,soldCountMonth:s.item.sellCount,from:s.delivery.from,deliveryFade:s.delivery.postage},e.recommends={totalCount:t.rate.totalCount,keywords:t.rate.keywords,user:t.rate.rateList[0]},e.seller={brandPic:t.seller.creditLevelIcon,shopName:t.seller.shopName,shopPic:t.seller.shopIcon,evaluates:t.seller.evaluates},setTimeout(function(){e.$refs.scroll.update()},1e3)})},ready:function(t){console.log("------------"),console.log(t),this.flags.push(1),console.log(this.flags)}}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product"},[s("header",{staticClass:"header"},[s("product-header")],1),t._v(" "),s("me-scroll",{ref:"scroll",attrs:{scrollbar:"",flag:t.flags}},[s("product-slide",{attrs:{id:this.$route.params.id,sliders:t.sliders},on:{slidersLoaded:function(e){return t.ready("sliders")}}}),t._v(" "),s("product-desc",{attrs:{content:t.content},on:{contentLoaded:function(e){return t.ready("content")}}}),t._v(" "),s("product-recommend",{attrs:{recommends:t.recommends},on:{recommendsLoaded:function(e){return t.ready("recommends")}}}),t._v(" "),s("product-seller",{attrs:{seller:t.seller},on:{sellerLoaded:function(e){return t.ready("seller")}}})],1),t._v(" "),s("div",{staticClass:"g-footer-container"},[s("product-footer")],1)],1)},staticRenderFns:[]};var M=s("VU/8")($,L,!1,function(t){s("Pp+J")},"data-v-37d52b66",null);e.default=M.exports},ufk4:function(t,e){},uqUo:function(t,e,s){var a=s("kM2E"),n=s("FeBl"),i=s("S82l");t.exports=function(t,e){var s=(n.Object||{})[t]||Object[t],r={};r[t]=e(s),a(a.S+a.F*i(function(){s(1)}),"Object",r)}},w53u:function(t,e){},xLXg:function(t,e){}});
//# sourceMappingURL=2.4a54252d4f004e51ce72.js.map