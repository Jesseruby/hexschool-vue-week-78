"use strict";(self["webpackChunkweek8"]=self["webpackChunkweek8"]||[]).push([[624],{4624:function(e,t,s){s.r(t),s.d(t,{default:function(){return Y}});var a=s(6252),l=s(3577),o=s(9963);const i={class:"container"},d=(0,a._)("h2",null,"購物車",-1),n={class:"row justify-content-center"},r={class:"col-md-6"},c={class:"text-end"},m=["disabled"],u={class:"table align-middle"},h=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th",null,"品名"),(0,a._)("th",{style:{width:"130px"}},"數量/單位"),(0,a._)("th"),(0,a._)("th",null,"單價")])],-1),p=["onClick","disabled"],g=(0,a.Uk)(" x "),b={class:"input-group input-group-sm"},_={class:"input-group mb-3"},f=["onUpdate:modelValue","onChange","disabled"],v=["value"],x={class:"input-group-text",id:"basic-addon2"},C=(0,a._)("td",null,null,-1),y={class:"text-end"},w=(0,a._)("td",{colspan:"4",class:"text-end"},"總計",-1),k={class:"text-end"},L={class:"my-5 row justify-content-center"},V={class:"mb-3"},I=(0,a._)("label",{for:"email",class:"form-label"},"Email",-1),$={class:"mb-3"},D=(0,a._)("label",{for:"name",class:"form-label"},"收件人姓名",-1),j={class:"mb-3"},W=(0,a._)("label",{for:"tel",class:"form-label"},"收件人電話",-1),q={class:"mb-3"},U=(0,a._)("label",{for:"address",class:"form-label"},"收件人地址",-1),z={class:"mb-3"},Z=(0,a._)("label",{for:"message",class:"form-label"},"留言",-1),A={class:"text-end"},O=["disabled"];function P(e,t,s,P,E,H){const K=(0,a.up)("component-loading"),S=(0,a.up)("font-awesome-icon"),Y=(0,a.up)("component-field"),F=(0,a.up)("error-message"),M=(0,a.up)("component-form");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(K,{active:E.isLoading},null,8,["active"]),d,(0,a._)("div",n,[(0,a._)("div",r,[(0,a._)("div",c,[(0,a._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...e)=>H.delAllCarts&&H.delAllCarts(...e)),disabled:0===E.cartData.carts.length}," 清空購物車 ",8,m)]),(0,a._)("table",u,[h,(0,a._)("tbody",null,[E.cartData.carts?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(E.cartData.carts,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,[(0,a._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:t=>H.removeCartItem(e.id),disabled:E.isLoadingItem===e.id},[E.isLoadingItem===e.id?((0,a.wg)(),(0,a.j4)(S,{key:0,icon:"spinner",pulse:""})):(0,a.kq)("",!0),g],8,p)]),(0,a._)("td",null,(0,l.zw)(e.product.title),1),(0,a._)("td",null,[(0,a._)("div",b,[(0,a._)("div",_,[(0,a.wy)((0,a._)("select",{class:"form-select","onUpdate:modelValue":t=>e.qty=t,onChange:t=>H.updateCartItem(e),disabled:E.isLoadingItem===e.id},[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(10,(t=>(0,a._)("option",{key:`${t}-${e.id}`,value:t},(0,l.zw)(t),9,v))),64))],40,f),[[o.bM,e.qty]]),(0,a._)("span",x,(0,l.zw)(e.product.unit),1)])])]),C,(0,a._)("td",y,(0,l.zw)(e.total),1)])))),128)):(0,a.kq)("",!0)]),(0,a._)("tfoot",null,[(0,a._)("tr",null,[w,(0,a._)("td",k,(0,l.zw)(E.cartData.total),1)])])])])]),(0,a._)("div",L,[(0,a.Wm)(M,{ref:"form",class:"col-md-6",onSubmit:H.createOrder},{default:(0,a.w5)((({errors:e})=>[(0,a._)("div",V,[I,(0,a.Wm)(Y,{id:"email",name:"email",type:"email",class:(0,l.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:E.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=e=>E.form.user.email=e)},null,8,["class","modelValue"]),(0,a.Wm)(F,{name:"email",class:"invalid-feedback"})]),(0,a._)("div",$,[D,(0,a.Wm)(Y,{id:"name",name:"姓名",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:E.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=e=>E.form.user.name=e)},null,8,["class","modelValue"]),(0,a.Wm)(F,{name:"姓名",class:"invalid-feedback"})]),(0,a._)("div",j,[W,(0,a.Wm)(Y,{id:"tel",name:"電話",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:H.isPhone,modelValue:E.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=e=>E.form.user.tel=e)},null,8,["class","rules","modelValue"]),(0,a.Wm)(F,{name:"電話",class:"invalid-feedback"})]),(0,a._)("div",q,[U,(0,a.Wm)(Y,{id:"address",name:"地址",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:E.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=e=>E.form.user.address=e)},null,8,["class","modelValue"]),(0,a.Wm)(F,{name:"地址",class:"invalid-feedback"})]),(0,a._)("div",z,[Z,(0,a.wy)((0,a._)("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[5]||(t[5]=e=>E.form.message=e)},null,512),[[o.nr,E.form.message]])]),(0,a._)("div",A,[(0,a._)("button",{type:"submit",class:"btn btn-danger",disabled:Object.keys(e).length>0||0===E.cartData.carts.length}," 送出訂單 ",8,O)])])),_:1},8,["onSubmit"])])])}var E=s(4902),H={data(){return{cartData:{carts:[]},form:{user:{name:"",email:"",tel:"",address:""},message:""},products:[],isLoadingItem:"",isLoading:!1}},methods:{isPhone(e){const t=/(^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$/;return!!t.test(e)||"請輸入正確的手機號碼，格式：0912-345-678"},getProducts(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/jesse-hexschool/products").then((e=>{console.log(e),this.products=e.data.products}))},getCart(){this.isLoading=!0,this.$http.get("https://vue3-course-api.hexschool.io/v2/api/jesse-hexschool/cart").then((e=>{this.cartData=e.data.data,this.isLoading=!1,E.Z.emit("get-cart")}))},removeCartItem(e){this.isLoadingItem=e,this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/jesse-hexschool/cart/${e}`).then((e=>{console.log(e),this.getCart(),this.isLoadingItem="",E.Z.emit("get-cart")}))},updateCartItem(e){const t={product_id:e.product_id,qty:e.qty};this.isLoadingItem=e.id,this.$http.put(`https://vue3-course-api.hexschool.io/v2/api/jesse-hexschool/cart/${e.id}`,{data:t}).then((e=>{console.log(e),this.getCart(),this.isLoadingItem=""}))},delAllCarts(){this.isLoading=!0,this.$http.delete("https://vue3-course-api.hexschool.io/v2/api/jesse-hexschool/carts").then((e=>{console.log(e),this.isLoading=!1,this.getCart(),E.Z.emit("get-cart")}))},createOrder(){this.isLoading=!0;const e=this.form;this.$http.post("https://vue3-course-api.hexschool.io/v2/api/jesse-hexschool/order",{data:e}).then((e=>{this.isLoading=!1,console.log(e),this.$refs.form.resetForm(),this.getCart()}))}},mounted(){this.getCart()}},K=s(3744);const S=(0,K.Z)(H,[["render",P]]);var Y=S}}]);
//# sourceMappingURL=624.87aaf0f6.js.map