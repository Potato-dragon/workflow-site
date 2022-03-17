(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["portfolio-feebilling"],{"5b59":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"features",class:{"features-column":t.column}},t._l(t.features,(function(e,a){return i("div",{key:a},[i("router-link",{staticClass:"left-arrow",attrs:{to:"/"+t.market+e.url}},[t._v(t._s(e.title))])],1)})),0)},o=[],n=i("ded3"),r=i.n(n),s=i("2f62"),l={name:"PortfolioFeatureList",props:{column:{type:Boolean,default:function(){return!1},required:!1}},data:function(){return{features:[{url:"/solutions/intelliflo-portfolio/portfolio-reporting",title:"Portfolio Reporting"},{url:"/solutions/intelliflo-portfolio/fee-billing",title:"Fee Billing"},{url:"/solutions/intelliflo-portfolio/rebalancing-and-trading",title:"Rebalancing & Trading"},{url:"/solutions/intelliflo-portfolio/mobile-and-client-tools",title:"Mobile & Client Tools"},{url:"/solutions/intelliflo-portfolio/integrations-and-api",title:"Integrations and API"}]}},computed:r()({},Object(s["c"])({market:"geo/currentMarket"}))},c=l,u=i("2877"),f=Object(u["a"])(c,a,o,!1,null,null,null);e["a"]=f.exports},"72b0":function(t,e,i){},"806d":function(t,e,i){"use strict";i("72b0")},"857a":function(t,e,i){var a=i("1d80"),o=/"/g;t.exports=function(t,e,i,n){var r=String(a(t)),s="<"+e;return""!==i&&(s+=" "+i+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+r+"</"+e+">"}},"8d5a":function(t,e,i){"use strict";var a=i("ded3"),o=i.n(a),n=i("2f62");e["a"]={data:function(){return{titleBuild:!1}},computed:o()({},Object(n["c"])({logoShowing:"banner/showingLogo"})),created:function(){var t=this;this.logoShowing?this.$nextTick((function(){t.titleBuild=!0})):this.titleBuild=!0}}},9911:function(t,e,i){"use strict";var a=i("23e7"),o=i("857a"),n=i("af03");a({target:"String",proto:!0,forced:n("link")},{link:function(t){return o(this,"a","href",t)}})},af03:function(t,e,i){var a=i("d039");t.exports=function(t){return a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},bf08:function(t,e,i){"use strict";var a=i("c973"),o=i.n(a),n=i("448a"),r=i.n(n),s=i("ded3"),l=i.n(s),c=(i("96cf"),i("b0c0"),i("99af"),i("a4d3"),i("e01a"),i("d81d"),i("4de4"),i("9911"),i("7db0"),i("159b"),i("ac1f"),i("1276"),i("a15b"),i("2f62"));e["a"]={metaInfo:function(){var t=this;return l()(l()({},this.metaInfo),{},{titleTemplate:function(e){return e&&"Article"===t.$route.name?"".concat(e," | intelliflo ").concat(t.market.toUpperCase()):e}})},data:function(){return{settingMetadata:!1}},computed:l()(l()(l()({},Object(c["d"])("TuiPage",["page"])),Object(c["c"])({market:"geo/currentMarket",translatedMetadata:"TuiPage/translatedMetadata"})),{},{metaInfo:{get:function(){return this.$store.state.App.metaInfo},set:function(t){this.$store.dispatch("App/setMetaInfo",t)}},routehead:function(){var t,e="https://www.intelliflo.com/intelliflo-card.png",i="Intelliflo logo";if(null!==(t=this.$route.meta)&&void 0!==t&&t.head)return l()(l()({},this.$route.meta.head),{},{thumbnail:e,thumbnailAlt:i});if("Article"===this.$route.name){var a=this.translatedMetadata,o=a.markets,n=void 0===o?[]:o,s=a.title,c=a.description,u=a.thumbnail,f=void 0===u?e:u,d=a.thumbnailAlt,p=void 0===d?i:d;return{markets:n,titles:[{market:"default",title:"intelliflo - ".concat(s)}].concat(r()(n.map((function(t){return{market:t,title:"".concat(s," | intelliflo ").concat(t.toUpperCase())}})))),descriptions:[{market:"default",desc:c}].concat(r()(n.map((function(t){return{market:t,desc:c}})))),thumbnail:f,thumbnailAlt:p}}return null}}),watch:{routehead:{immediate:!0,handler:"setMetadata"},page:"setMetadata","$route.name":"setMetadata"},methods:{setMetadata:function(){var t=this;return o()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.settingMetadata){e.next=2;break}return e.abrupt("return");case 2:if(t.routehead){e.next=4;break}return e.abrupt("return");case 4:if("Article"!==t.$route.name||t.page){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,t.$nextTick();case 8:if(t.settingMetadata=!0,t.setTitle(),t.setDescription(),t.setThumbnail(),t.setCanonical(),void 0===window.__PRERENDER_INJECTED){e.next=18;break}return e.next=16,t.$nextTick();case 16:Object({VUE_APP_URL:"https://intelliflo.com",VUE_APP_PRERENDER:"true",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("\n".concat(JSON.stringify(t.metaInfo,null,2))),document.dispatchEvent(new Event("x-app-rendered"));case 18:case"end":return e.stop()}}),e)})))()},setMetaInfo:function(t){var e=t.name,i=t.property,a=t.content,o=l()(l()({},e?{name:e}:{property:i}),{},{content:a});this.metaInfo=l()(l()({},this.metaInfo),{},{meta:[].concat(r()((this.metaInfo.meta||[]).filter((function(t){return!(t.name&&t.name===e||t.property&&t.property===i)}))),[o])})},setMetaInfoLink:function(t){this.metaInfo=l()(l()({},this.metaInfo),{},{link:[].concat(r()(this.metaInfo.link.filter((function(e){return e.href!==t.href}))),[t])})},setTitle:function(){var t=this;try{var e,i,a=null!==(e=this.routehead)&&void 0!==e&&e.titles?null===(i=this.routehead.titles.find((function(e){return e.market===t.market}))||this.routehead.titles.find((function(t){return"default"===t.market})))||void 0===i?void 0:i.title:"Article"===this.$route.name&&this.page?this.page.pageData.translatedMetadata.en_GB.title:"";if(!a)return;this.metaInfo=l()(l()({},this.metaInfo),{},{title:a}),this.setMetaInfo({name:"twitter:title",content:a}),this.setMetaInfo({property:"og:title",content:a})}catch(o){console.log("[ERR1]",o)}},setDescription:function(){var t=this;try{var e,i,a=null!==(e=this.routehead)&&void 0!==e&&e.descriptions?null===(i=this.routehead.descriptions.find((function(e){return e.market===t.market}))||this.routehead.descriptions.find((function(t){return"default"===t.market})))||void 0===i?void 0:i.desc:"Article"===this.$route.name&&this.page?this.page.pageData.translatedMetadata.en_GB.description:"";if(!a)return;this.setMetaInfo({name:"description",content:a}),this.setMetaInfo({name:"twitter:description",content:a}),this.setMetaInfo({property:"og:description",content:a})}catch(o){console.log("[ERR2]",o)}},setThumbnail:function(){try{var t,e,i=(null===(t=this.routehead)||void 0===t?void 0:t.thumbnail)||("Article"===this.$route.name&&this.page?this.page.pageData.metadata.thumbnail:"")||"";if(!i)return;this.setMetaInfo({name:"twitter:image",content:i}),this.setMetaInfo({property:"og:image",content:i});var a=(null===(e=this.routehead)||void 0===e?void 0:e.thumbnailAlt)||("Article"===this.$route.name&&this.page?this.page.pageData.translatedMetadata.en_GB.thumbnailAlt:"")||"";if(!a)return;this.setMetaInfo({name:"twitter:image:alt",content:a}),this.setMetaInfo({property:"og:image:alt",content:a})}catch(o){console.log("[ERR3]",o)}},setLocalisedLanguages:function(){var t=this;this.routehead.markets&&this.routehead.markets.length>1&&this.routehead.markets.forEach((function(e){var i={rel:"alternate",hreflang:t.getLanguage(e),href:t.getLanguageRoute(e)};t.setMetaInfoLink(i)}))},getLanguage:function(t){return"uk"===t?"en-GB":"us"===t?"en-US":"au"===t?"en-AU":""},getLanguageRoute:function(t){var e=this.$route.path.split("/");return e.length>1&&(e[1]=t),"https://www.intelliflo.com".concat(e.join("/"))},setCanonical:function(){this.setMetaInfoLink({rel:"canonical",href:"https://www.intelliflo.com".concat(this.$route.path)})}}}},cdf3:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page product-page"},["uk"===t.market||"au"===t.market?i("div",[i("div",{staticClass:"page-section"},[i("div",{staticClass:"contained"},[i("not-found",{scopedSlots:t._u([{key:"header",fn:function(){return[i("router-link",{staticClass:"no-hover",attrs:{to:{name:"IntellifloPortfolio",params:{market:t.market}}}},[i("div",{staticClass:"product-logo"},[i("div",{staticClass:"logo-title",class:{starting:!t.titleBuild}},[i("div",{staticClass:"logo"},[i("logo",{attrs:{size:64}})],1),i("div",{staticClass:"logo-title__title"},[t._v("portfolio")])])])]),i("div",{staticClass:"flex"},[i("div",{staticClass:"col-8"},[i("h1",{staticClass:"tight larger"},[t._v("Fee Billing")])])])]},proxy:!0},{key:"description",fn:function(){return[i("p",{staticClass:"mt-xs"},[t._v(" You can access this page at the "),i("router-link",{staticClass:"blocklink",attrs:{to:"/uk/solutions/intelliflo-portfolio/fee-billing"}},[i("b",[t._v("US")]),t._v(" Fee Billing ")])],1)]},proxy:!0}],null,!1,846003807)})],1)])]):"us"===t.market?i("div",[i("div",{staticClass:"page-section"},[i("div",{staticClass:"contained"},[i("router-link",{staticClass:"no-hover",attrs:{to:{name:"IntellifloPortfolio",params:{market:t.market}}}},[i("div",{staticClass:"product-logo"},[i("div",{staticClass:"logo-title",class:{starting:!t.titleBuild}},[i("div",{staticClass:"logo"},[i("logo",{attrs:{size:64}})],1),i("div",{staticClass:"logo-title__title"},[t._v("portfolio")])])])]),i("div",{staticClass:"flex"},[i("div",{staticClass:"col-8"},[i("h1",{staticClass:"mb-sm mt-lg"},[t._v("Fee Billing")]),i("h2",{staticClass:"tight smaller"},[t._v("A subtitle for this page might go here.")]),i("h3",{staticClass:"smaller mb-none"},[t._v("A section title can go here.")]),i("p",{staticClass:"mt-xs"},[t._v(" General copy for this page to be copied in here. General copy for this page to be copied in here. General copy for this page to be copied in here. General copy for this page to be copied in here. General copy for this page to be copied in here. General copy for this page to be copied in here. General copy for this page to be copied in here. General copy for this page to be copied in here. General copy for this page to be copied in here. General copy for this page to be copied in here. General copy for this page to be copied in here. General copy for this page to be copied in here. ")]),i("div",{staticClass:"mt-xxl"},[i("router-link",{staticClass:"back-link",attrs:{to:"/us/solutions/intelliflo-portfolio/"}},[t._v("Back to "),i("strong",[t._v("intelliflo portfolio")])])],1),i("div",{staticClass:"mt-md mb-xxl"},[i("router-link",{staticClass:"button white-lozenge phat",attrs:{to:{name:"BookADemo",query:{product:"portfolio"}}}},[t._v("Book a demo")])],1)]),i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-3"},[i("router-link",{staticClass:"back-link",attrs:{to:"/us/solutions/intelliflo-portfolio/"}},[t._v("Back to intelliflo portfolio")]),i("div",{staticClass:"mt-sm"},[i("router-link",{staticClass:"button white-lozenge phat",attrs:{to:{name:"BookADemo",query:{product:"portfolio"}}}},[t._v("Book a demo")])],1),i("div",{staticClass:"mt-lg mb-xl"},[i("h3",{staticClass:"smaller"},[t._v("Explore more features")]),i("portfolio-feature-list",{attrs:{column:!0}})],1)],1)])],1)])]):i("div",[t._m(0)])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-section"},[i("div",{staticClass:"contained"},[t._v(" This page is not found in this market! ")])])}],n=i("ded3"),r=i.n(n),s=i("2f62"),l=i("5b59"),c=i("8d5a"),u=i("bf08"),f={name:"PortfolioReporting",components:{PortfolioFeatureList:l["a"]},mixins:[u["a"],c["a"]],computed:r()({},Object(s["c"])({market:"geo/currentMarket"}))},d=f,p=(i("806d"),i("2877")),h=Object(p["a"])(d,a,o,!1,null,"0fbd5010",null);e["default"]=h.exports}}]);
//# sourceMappingURL=portfolio-feebilling.de01519a.js.map