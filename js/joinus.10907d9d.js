(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["joinus"],{"5bf3":function(t,e,n){t.exports={columns:"JoinUs_columns_2_sfP",column:"JoinUs_column_2kPCv",lozengeBox:"JoinUs_lozengeBox_37eYZ",socialMedia:"JoinUs_socialMedia_3iMa9"}},6230:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page why-page"},[n("div",{staticClass:"page-section has-lozenge"},[t._m(0),n("div",{staticClass:"contained"},[n("div",{staticClass:"flex no-wrap"},[n("div",{staticClass:"col-8"},["us"===t.market?n("div",[n("not-found",{scopedSlots:t._u([{key:"header",fn:function(){return[n("h1",[t._v(" Join us ")])]},proxy:!0},{key:"description",fn:function(){return[n("p",[t._v(" You can access this page on the UK or Australian versions of the site: ")]),n("div",[n("strong",[n("router-link",{staticClass:"blocklink",attrs:{to:{name:"JoinUs",params:{market:"uk"}}}},[t._v(" UK - Join us ")])],1),t._v(" | "),n("strong",[n("router-link",{staticClass:"blocklink",attrs:{to:{name:"JoinUs",params:{market:"au"}}}},[t._v(" Australia - Join us ")])],1)])]},proxy:!0}],null,!1,4149679294)})],1):n("div",[n("h1",[t._v("Be part of an award-winning team")]),n("p",{staticClass:"bumped"},[t._v(" We are the UK’s leading practice management and digital engagement software provider, delivering intuitive solutions to over 30,000 financial professionals worldwide. ")]),n("p",{staticClass:"bumped"},[t._v(" We are continually recruiting talented individuals to join our teams across all departments. Take a look at our current vacancies to see if there’s the right role for you. ")])])]),n("div",{staticClass:"col-4"})])])]),"us"!==t.market?n("div",{staticClass:"page-section mb-xbl mob-mb-xxl",style:{"background-color":"#E9EDEF","min-height":"660px"}},[n("div",{staticClass:"contained mt-md"},[n("iframe",{style:{width:"100%",height:"730px",overflow:"hidden",margin:"0 auto",border:0},attrs:{src:"https://intelliflojobs.secure.force.com/recruit/"}})])]):t._e()])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lozenge-image from-right",attrs:{"aria-hidden":"true"}},[n("img",{attrs:{src:"https://intelliflo.imgix.net/intelliflo_photography_alternativeangles09.jpg?auto=compress,format&h=640&w=1150&fit=crop&crop=focalpoint&fp-z=1.25&fp-x=1.5",loading:"lazy",alt:""}})])}],r=n("ded3"),o=n.n(r),s=n("2f62"),c=n("bf08"),l={name:"JoinUs",mixins:[c["a"]],computed:o()({},Object(s["c"])({market:"geo/currentMarket"}))},u=l,f=n("f790"),d=n("2877");function h(t){this["$style"]=f["default"].locals||f["default"]}var m=Object(d["a"])(u,a,i,!1,h,null,null);e["default"]=m.exports},"857a":function(t,e,n){var a=n("1d80"),i=/"/g;t.exports=function(t,e,n,r){var o=String(a(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),s+">"+o+"</"+e+">"}},9911:function(t,e,n){"use strict";var a=n("23e7"),i=n("857a"),r=n("af03");a({target:"String",proto:!0,forced:r("link")},{link:function(t){return i(this,"a","href",t)}})},af03:function(t,e,n){var a=n("d039");t.exports=function(t){return a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},bf08:function(t,e,n){"use strict";var a=n("c973"),i=n.n(a),r=n("448a"),o=n.n(r),s=n("ded3"),c=n.n(s),l=(n("96cf"),n("b0c0"),n("99af"),n("a4d3"),n("e01a"),n("d81d"),n("4de4"),n("9911"),n("7db0"),n("159b"),n("ac1f"),n("1276"),n("a15b"),n("2f62"));e["a"]={metaInfo:function(){var t=this;return c()(c()({},this.metaInfo),{},{titleTemplate:function(e){return e&&"Article"===t.$route.name?"".concat(e," | intelliflo ").concat(t.market.toUpperCase()):e}})},data:function(){return{settingMetadata:!1}},computed:c()(c()(c()({},Object(l["d"])("TuiPage",["page"])),Object(l["c"])({market:"geo/currentMarket",translatedMetadata:"TuiPage/translatedMetadata"})),{},{metaInfo:{get:function(){return this.$store.state.App.metaInfo},set:function(t){this.$store.dispatch("App/setMetaInfo",t)}},routehead:function(){var t,e="https://www.intelliflo.com/intelliflo-card.png",n="Intelliflo logo";if(null!==(t=this.$route.meta)&&void 0!==t&&t.head)return c()(c()({},this.$route.meta.head),{},{thumbnail:e,thumbnailAlt:n});if("Article"===this.$route.name){var a=this.translatedMetadata,i=a.markets,r=void 0===i?[]:i,s=a.title,l=a.description,u=a.thumbnail,f=void 0===u?e:u,d=a.thumbnailAlt,h=void 0===d?n:d;return{markets:r,titles:[{market:"default",title:"intelliflo - ".concat(s)}].concat(o()(r.map((function(t){return{market:t,title:"".concat(s," | intelliflo ").concat(t.toUpperCase())}})))),descriptions:[{market:"default",desc:l}].concat(o()(r.map((function(t){return{market:t,desc:l}})))),thumbnail:f,thumbnailAlt:h}}return null}}),watch:{routehead:{immediate:!0,handler:"setMetadata"},page:"setMetadata","$route.name":"setMetadata"},methods:{setMetadata:function(){var t=this;return i()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.settingMetadata){e.next=2;break}return e.abrupt("return");case 2:if(t.routehead){e.next=4;break}return e.abrupt("return");case 4:if("Article"!==t.$route.name||t.page){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,t.$nextTick();case 8:if(t.settingMetadata=!0,t.setTitle(),t.setDescription(),t.setThumbnail(),t.setCanonical(),void 0===window.__PRERENDER_INJECTED){e.next=18;break}return e.next=16,t.$nextTick();case 16:Object({VUE_APP_URL:"https://intelliflo.com",VUE_APP_PRERENDER:"true",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("\n".concat(JSON.stringify(t.metaInfo,null,2))),document.dispatchEvent(new Event("x-app-rendered"));case 18:case"end":return e.stop()}}),e)})))()},setMetaInfo:function(t){var e=t.name,n=t.property,a=t.content,i=c()(c()({},e?{name:e}:{property:n}),{},{content:a});this.metaInfo=c()(c()({},this.metaInfo),{},{meta:[].concat(o()((this.metaInfo.meta||[]).filter((function(t){return!(t.name&&t.name===e||t.property&&t.property===n)}))),[i])})},setMetaInfoLink:function(t){this.metaInfo=c()(c()({},this.metaInfo),{},{link:[].concat(o()(this.metaInfo.link.filter((function(e){return e.href!==t.href}))),[t])})},setTitle:function(){var t=this;try{var e,n,a=null!==(e=this.routehead)&&void 0!==e&&e.titles?null===(n=this.routehead.titles.find((function(e){return e.market===t.market}))||this.routehead.titles.find((function(t){return"default"===t.market})))||void 0===n?void 0:n.title:"Article"===this.$route.name&&this.page?this.page.pageData.translatedMetadata.en_GB.title:"";if(!a)return;this.metaInfo=c()(c()({},this.metaInfo),{},{title:a}),this.setMetaInfo({name:"twitter:title",content:a}),this.setMetaInfo({property:"og:title",content:a})}catch(i){console.log("[ERR1]",i)}},setDescription:function(){var t=this;try{var e,n,a=null!==(e=this.routehead)&&void 0!==e&&e.descriptions?null===(n=this.routehead.descriptions.find((function(e){return e.market===t.market}))||this.routehead.descriptions.find((function(t){return"default"===t.market})))||void 0===n?void 0:n.desc:"Article"===this.$route.name&&this.page?this.page.pageData.translatedMetadata.en_GB.description:"";if(!a)return;this.setMetaInfo({name:"description",content:a}),this.setMetaInfo({name:"twitter:description",content:a}),this.setMetaInfo({property:"og:description",content:a})}catch(i){console.log("[ERR2]",i)}},setThumbnail:function(){try{var t,e,n=(null===(t=this.routehead)||void 0===t?void 0:t.thumbnail)||("Article"===this.$route.name&&this.page?this.page.pageData.metadata.thumbnail:"")||"";if(!n)return;this.setMetaInfo({name:"twitter:image",content:n}),this.setMetaInfo({property:"og:image",content:n});var a=(null===(e=this.routehead)||void 0===e?void 0:e.thumbnailAlt)||("Article"===this.$route.name&&this.page?this.page.pageData.translatedMetadata.en_GB.thumbnailAlt:"")||"";if(!a)return;this.setMetaInfo({name:"twitter:image:alt",content:a}),this.setMetaInfo({property:"og:image:alt",content:a})}catch(i){console.log("[ERR3]",i)}},setLocalisedLanguages:function(){var t=this;this.routehead.markets&&this.routehead.markets.length>1&&this.routehead.markets.forEach((function(e){var n={rel:"alternate",hreflang:t.getLanguage(e),href:t.getLanguageRoute(e)};t.setMetaInfoLink(n)}))},getLanguage:function(t){return"uk"===t?"en-GB":"us"===t?"en-US":"au"===t?"en-AU":""},getLanguageRoute:function(t){var e=this.$route.path.split("/");return e.length>1&&(e[1]=t),"https://www.intelliflo.com".concat(e.join("/"))},setCanonical:function(){this.setMetaInfoLink({rel:"canonical",href:"https://www.intelliflo.com".concat(this.$route.path)})}}}},f790:function(t,e,n){"use strict";var a=n("5bf3"),i=n.n(a);n.d(e,"default",(function(){return i.a}))}}]);
//# sourceMappingURL=joinus.10907d9d.js.map