"use strict";(self["webpackChunkweek8"]=self["webpackChunkweek8"]||[]).push([[206],{2251:function(e,t,l){l.d(t,{Z:function(){return b}});var a=l(6252),d=l(3577),s=l(9963);const r={"aria-label":"Page navigation example",class:"mt-3 d-flex justify-content-center"},o={class:"pagination"},n=(0,a._)("span",{"aria-hidden":"true"},"«",-1),i=[n],u=["onClick"],c=(0,a._)("span",{"aria-hidden":"true"},"»",-1),p=[c];function h(e,t,l,n,c,h){return(0,a.wg)(),(0,a.iD)("nav",r,[(0,a._)("ul",o,[(0,a._)("li",{class:(0,d.C_)(["page-item",{disabled:!l.pages.has_pre}])},[(0,a._)("a",{class:"page-link","aria-label":"Previous",href:"#",onClick:t[0]||(t[0]=(0,s.iM)((t=>e.$emit("get-product",l.pages.current_page-1)),["prevent"]))},i)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(t=>((0,a.wg)(),(0,a.iD)("li",{class:(0,d.C_)(["page-item",{active:t===l.pages.current_page}]),key:t+"123"},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((l=>e.$emit("get-product",t)),["prevent"])},(0,d.zw)(t),9,u)],2)))),128)),(0,a._)("li",{class:(0,d.C_)(["page-item",{disabled:!l.pages.has_next}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,s.iM)((t=>e.$emit("get-product",l.pages.current_page+1)),["prevent"]))},p)],2)])])}var _={props:["pages"]},m=l(3744);const g=(0,m.Z)(_,[["render",h]]);var b=g},2206:function(e,t,l){l.r(t),l.d(t,{default:function(){return ze}});var a=l(6252),d=l(3577),s=l(9963);const r={class:"table mt-4"},o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"購買時間"),(0,a._)("th",null,"Email"),(0,a._)("th",null,"購買款項"),(0,a._)("th",null,"應付金額"),(0,a._)("th",null,"是否付款"),(0,a._)("th",null,"編輯")])],-1),n=["textContent"],i={class:"list-unstyled"},u={class:"text-right"},c={class:"form-check form-switch"},p=["id","onUpdate:modelValue"],h=["for"],_={key:0},m={key:1},g={class:"btn-group"},b=["onClick"],w=["onClick"];function k(e,t,l,k,y,O){const f=(0,a.up)("component-loading"),v=(0,a.up)("page-pagination"),M=(0,a.up)("order-modal"),D=(0,a.up)("del-orderModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(f,{active:y.isLoading},null,8,["active"]),(0,a._)("table",r,[o,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(y.orders,((e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:t},[y.orders.length?((0,a.wg)(),(0,a.iD)("tr",{key:0,class:(0,d.C_)({"text-secondary":!e.is_paid})},[(0,a._)("td",null,(0,d.zw)(O.date(e.create_at)),1),(0,a._)("td",null,[e.user?((0,a.wg)(),(0,a.iD)("span",{key:0,textContent:(0,d.zw)(e.user.email)},null,8,n)):(0,a.kq)("",!0)]),(0,a._)("td",null,[(0,a._)("ul",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.products,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t},(0,d.zw)(e.product.title)+" 數量："+(0,d.zw)(e.qty)+" "+(0,d.zw)(e.product.unit),1)))),128))])]),(0,a._)("td",u,(0,d.zw)(e.total),1),(0,a._)("td",null,[(0,a._)("div",c,[(0,a.wy)((0,a._)("input",{type:"checkbox",class:"form-check-input",id:`${e.id}`,"onUpdate:modelValue":t=>e.is_paid=t},null,8,p),[[s.e8,e.is_paid]]),(0,a._)("label",{class:"form-check-label",for:`${e.id}`},[e.is_paid?((0,a.wg)(),(0,a.iD)("span",_,"已付款")):((0,a.wg)(),(0,a.iD)("span",m,"未付款"))],8,h)])]),(0,a._)("td",null,[(0,a._)("div",g,[(0,a._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:t=>O.openOrdersModal(e)}," 檢視 ",8,b),(0,a._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:t=>O.openDelOrderModal(e)}," 刪除 ",8,w)])])],2)):(0,a.kq)("",!0)],64)))),128))])]),(0,a.Wm)(v,{pages:y.pagination,onGetProduct:O.getOrders},null,8,["pages","onGetProduct"]),(0,a.Wm)(M,{order:y.tempOrder,ref:"orderModal",onUpdatePaid:O.getOrders},null,8,["order","onUpdatePaid"]),(0,a.Wm)(D,{item:y.tempOrder,ref:"delOrderModal",onDelOrderItem:O.delOrder},null,8,["item","onDelOrderItem"])],64)}var y=l(2251);const O={class:"modal fade",id:"OrderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},f={class:"modal-dialog modal-xl",role:"document"},v={class:"modal-content border-0"},M=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"訂單細節")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),D={class:"modal-body"},x={class:"row"},$={class:"col-md-4"},C=(0,a._)("h3",null,"用戶資料",-1),z={class:"table"},P={key:0},L=(0,a._)("th",{style:{width:"100px"}},"姓名：",-1),j=(0,a._)("th",null,"Email：",-1),U=(0,a._)("th",null,"電話：",-1),H=(0,a._)("th",null,"地址：",-1),S={class:"col-md-8"},Y=(0,a._)("h3",null,"訂單細節",-1),Z={class:"table"},q=(0,a._)("th",{style:{width:"100px"}},"訂單編號：",-1),K=(0,a._)("th",null,"下單時間：",-1),W=(0,a._)("th",null,"付款時間：",-1),N={key:0},V={key:1},E=(0,a._)("th",null,"付款狀態：",-1),G={key:0,class:"text-success"},I={key:1,class:"text-muted"},A=(0,a._)("th",null,"總金額：",-1),B=(0,a._)("h3",null,"選購商品：",-1),F={class:"table"},J=(0,a._)("thead",null,[(0,a._)("tr")],-1),Q={class:"text-end"},R={class:"d-flex justify-content-end"},T={class:"form-check"},X={class:"form-check-label",for:"flexCheckDefault"},ee={key:0},te={key:1},le={class:"modal-footer"},ae=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function de(e,t,l,r,o,n){return(0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("div",f,[(0,a._)("div",v,[M,(0,a._)("div",D,[(0,a._)("div",x,[(0,a._)("div",$,[C,(0,a._)("table",z,[o.tempOrder.user?((0,a.wg)(),(0,a.iD)("tbody",P,[(0,a._)("tr",null,[L,(0,a._)("td",null,(0,d.zw)(o.tempOrder.user.name),1)]),(0,a._)("tr",null,[j,(0,a._)("td",null,(0,d.zw)(o.tempOrder.user.email),1)]),(0,a._)("tr",null,[U,(0,a._)("td",null,(0,d.zw)(o.tempOrder.user.tel),1)]),(0,a._)("tr",null,[H,(0,a._)("td",null,(0,d.zw)(o.tempOrder.user.address),1)])])):(0,a.kq)("",!0)])]),(0,a._)("div",S,[Y,(0,a._)("table",Z,[(0,a._)("tbody",null,[(0,a._)("tr",null,[q,(0,a._)("td",null,(0,d.zw)(o.tempOrder.id),1)]),(0,a._)("tr",null,[K,(0,a._)("td",null,(0,d.zw)(n.date(o.tempOrder.create_at)),1)]),(0,a._)("tr",null,[W,(0,a._)("td",null,[o.tempOrder.paid_date?((0,a.wg)(),(0,a.iD)("span",N,(0,d.zw)(n.date(o.tempOrder.paid_date)),1)):((0,a.wg)(),(0,a.iD)("span",V,"時間不正確"))])]),(0,a._)("tr",null,[E,(0,a._)("td",null,[o.tempOrder.is_paid?((0,a.wg)(),(0,a.iD)("strong",G,"已付款")):((0,a.wg)(),(0,a.iD)("span",I,"尚未付款"))])]),(0,a._)("tr",null,[A,(0,a._)("td",null,(0,d.zw)(o.tempOrder.total),1)])])]),B,(0,a._)("table",F,[J,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.tempOrder.products,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("th",null,(0,d.zw)(e.product.title),1),(0,a._)("td",null,(0,d.zw)(e.qty)+" / "+(0,d.zw)(e.product.unit),1),(0,a._)("td",Q,(0,d.zw)(e.final_total),1)])))),128))])]),(0,a._)("div",R,[(0,a._)("div",T,[(0,a.wy)((0,a._)("input",{type:"checkbox",class:"form-check-input",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[0]||(t[0]=e=>o.tempOrder.is_paid=e)},null,512),[[s.e8,o.tempOrder.is_paid]]),(0,a._)("label",X,[o.tempOrder.is_paid?((0,a.wg)(),(0,a.iD)("span",ee,"已付款")):((0,a.wg)(),(0,a.iD)("span",te,"未付款"))])])])])])]),(0,a._)("div",le,[ae,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=e=>n.updatePaid(o.tempOrder))}," 修改付款狀態 ")])])])],512)}var se=l(7424),re=l.n(se),oe={props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:{},tempOrder:{},isPaid:!1}},watch:{order(){this.tempOrder=this.order}},methods:{date(e){const t=new Date(1e3*e);return t.toLocaleDateString()},updatePaid(e){const t=`https://vue3-course-api.hexschool.io/v2/api/jesse-hexschool/admin/order/${e.id}`,l={is_paid:e.is_paid};this.$http.put(t,{data:l}).then((e=>{this.$httpMessageState(e,"更新付款狀態"),this.orderModal.hide(),this.$emit("update-paid")})).catch((e=>{this.$httpMessageState(e.response,"錯誤訊息")}))},openModal(){this.orderModal.show()},closeModal(){this.orderModal.hide()}},mounted(){this.orderModal=new(re())(this.$refs.modal,{keyboard:!1,backdrop:"static"})}},ne=l(3744);const ie=(0,ne.Z)(oe,[["render",de]]);var ue=ie;const ce={class:"modal fade",id:"delOrderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},pe={class:"modal-dialog",role:"document"},he={class:"modal-content border-0"},_e={class:"modal-header bg-danger text-white"},me={class:"modal-title"},ge=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),be={class:"modal-body"},we=(0,a.Uk)(" 是否刪除 "),ke={class:"text-danger"},ye=(0,a.Uk)(" (刪除後將無法恢復)。 "),Oe={class:"modal-footer"},fe=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ve(e,t,l,s,r,o){return(0,a.wg)(),(0,a.iD)("div",ce,[(0,a._)("div",pe,[(0,a._)("div",he,[(0,a._)("div",_e,[(0,a._)("h5",me,[(0,a._)("span",null,"刪除 "+(0,d.zw)(l.item.title),1)]),ge]),(0,a._)("div",be,[we,(0,a._)("strong",ke,(0,d.zw)(l.item.title),1),ye]),(0,a._)("div",Oe,[fe,(0,a._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=t=>e.$emit("del-order-item"))}," 確認刪除 ")])])])],512)}var Me={props:["item"],data(){return{modal:{}}},methods:{openModal(){this.delOrderModal.show()},hideModal(){this.delOrderModal.hide()}},emits:["del-order-item"],mounted(){this.delOrderModal=new(re())(this.$refs.modal,{keyboard:!1,backdrop:"static"})}};const De=(0,ne.Z)(Me,[["render",ve]]);var xe=De,$e={data(){return{orders:[],isNew:!1,pagination:{},tempOrder:{},isLoading:!1}},components:{PagePagination:y.Z,OrderModal:ue,DelOrderModal:xe},inject:["emitter"],methods:{date(e){const t=new Date(1e3*e);return t.toLocaleDateString()},getOrders(e=1){const t=`https://vue3-course-api.hexschool.io/v2/api/jesse-hexschool/admin/orders?page=${e}`;this.isLoading=!0,this.$http.get(t).then((e=>{console.log(e),this.orders=e.data.orders,this.isLoading=!1,this.pagination=e.data.pagination})).catch((e=>{this.$httpMessageState(e.response,"錯誤訊息")}))},delOrder(){const e=`https://vue3-course-api.hexschool.io/v2/api/jesse-hexschool/admin/order/${this.tempOrder.id}`;this.$http.delete(e).then((e=>{console.log(e),this.$emit("get-orders"),this.$refs.delOrderModal.hideModal(),this.getOrders()})).catch((e=>{this.$httpMessageState(e.response,"錯誤訊息")}))},openOrdersModal(e){this.tempOrder={...e},this.isNew=!1,this.$refs.orderModal.openModal()},openDelOrderModal(e){this.tempOrder={...e},this.$refs.delOrderModal.openModal()}},mounted(){this.getOrders()}};const Ce=(0,ne.Z)($e,[["render",k]]);var ze=Ce}}]);
//# sourceMappingURL=206.86ba9458.js.map