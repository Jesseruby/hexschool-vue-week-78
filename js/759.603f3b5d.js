"use strict";(self["webpackChunkweek8"]=self["webpackChunkweek8"]||[]).push([[759],{6759:function(t,a,s){s.r(a),s.d(a,{default:function(){return z}});var e=s(6252);function n(t,a,s,n,r,o){const l=(0,e.up)("front-navbar"),c=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(l),(0,e.Wm)(c)],64)}var r=s(3577);const o={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"container-fluid"},c=(0,e.Uk)("Jesse"),i=(0,e._)("button",{type:"button",class:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),u={id:"navbarSupportedContent",class:"collapse navbar-collapse"},d={class:"navbar-nav me-auto mb-2 mb-lg-0"},p={class:"nav-item"},v=(0,e.Uk)(" 首頁 "),h={class:"nav-item"},b=(0,e.Uk)(" 前台產品列表 "),g={class:"nav-item"},m=(0,e.Uk)(" 前台購物車 "),k={class:"nav-item"},f=(0,e.Uk)(" 登入產品後台 "),_={class:"nav-item"},w=(0,e.Uk)(" 產品後台 "),$=(0,e.Uk)(" 購物車 "),C={class:"badge rounded-pill bg-danger"};function W(t,a,s,n,W,U){const x=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("nav",o,[(0,e._)("div",l,[(0,e.Wm)(x,{class:"navbar-brand",to:"/"},{default:(0,e.w5)((()=>[c])),_:1}),i,(0,e._)("div",u,[(0,e._)("ul",d,[(0,e._)("li",p,[(0,e.Wm)(x,{class:"nav-link",to:"/"},{default:(0,e.w5)((()=>[v])),_:1})]),(0,e._)("li",h,[(0,e.Wm)(x,{class:"nav-link",to:"/products"},{default:(0,e.w5)((()=>[b])),_:1})]),(0,e._)("li",g,[(0,e.Wm)(x,{class:"nav-link",to:"/cart"},{default:(0,e.w5)((()=>[m])),_:1})]),(0,e._)("li",k,[(0,e.Wm)(x,{class:"nav-link",to:"/login"},{default:(0,e.w5)((()=>[f])),_:1})]),(0,e._)("li",_,[!0===t.status?((0,e.wg)(),(0,e.j4)(x,{key:0,class:"nav-link",to:"/admin/products"},{default:(0,e.w5)((()=>[w])),_:1})):(0,e.kq)("",!0)])])]),(0,e.Wm)(x,{type:"button",class:"btn btn-primary",to:"/cart"},{default:(0,e.w5)((()=>[$,(0,e._)("span",C,(0,r.zw)(W.cartData?.carts?.length),1)])),_:1})])])}var U=s(4902),x={data(){return{cartData:{carts:[]}}},methods:{getCart(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/jesse-hexschool/cart").then((t=>{this.cartData=t.data.data}))}},created(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${t}`;const a="https://vue3-course-api.hexschool.io/v2/api/user/check";this.$http.post(a).then((()=>{this.status=!0,this.$router.push("/admin/products")})).catch((()=>{this.status=!1,this.$router.push("/products")}))},mounted(){this.getCart(),U.Z.on("get-cart",(()=>{this.getCart()}))}},D=s(3744);const y=(0,D.Z)(x,[["render",W]]);var S=y,Z={components:{FrontNavbar:S}};const j=(0,D.Z)(Z,[["render",n]]);var z=j}}]);
//# sourceMappingURL=759.603f3b5d.js.map