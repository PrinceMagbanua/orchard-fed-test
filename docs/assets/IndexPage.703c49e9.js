import{c as g,h as p,g as V,i as qe,e as A,l as Xe,a as Je,r as y,w as Q,b as W,T as ve,H as xe,A as Fe,j as he,o as Ze,B as Se,m as et,C as tt,D as ot,E as $,d as E,F as nt,G as it,I as lt,q as ee,_ as te,t as H,J as Z,x,K as st,v as Ie,L as Ae,M as v,N,s as pe,O as at,P as He,u as ze}from"./index.605cf4b2.js";import{c as oe,h as we,d as rt}from"./dom.97e14070.js";import{Q as ut,v as Ve,a as ct}from"./vm.8331cd66.js";import{b as dt,a as ft,h as mt}from"./scroll.b806c6b1.js";const gt={dark:{type:Boolean,default:null}};function vt(e,t){return g(()=>e.dark===null?t.dark.isActive:e.dark)}const ht={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},ce={xs:2,sm:4,md:8,lg:16,xl:24};var pt=oe({name:"QSeparator",props:{...gt,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=V(),n=vt(e,t.proxy.$q),o=g(()=>e.vertical===!0?"vertical":"horizontal"),a=g(()=>` q-separator--${o.value}`),l=g(()=>e.inset!==!1?`${a.value}-${ht[e.inset]}`:""),i=g(()=>`q-separator${a.value}${l.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),s=g(()=>{const r={};if(e.size!==void 0&&(r[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const m=e.spaced===!0?`${ce.md}px`:e.spaced in ce?`${ce[e.spaced]}px`:e.spaced,f=e.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${f[0]}`]=r[`margin${f[1]}`]=m}return r});return()=>p("hr",{class:i.value,style:s.value,"aria-orientation":o.value})}}),yt=oe({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=V(),o=qe(Xe,A);if(o===A)return console.error("QPage needs to be a deep child of QLayout"),A;if(qe(Je,A)===A)return console.error("QPage needs to be child of QPageContainer"),A;const l=g(()=>{const s=(o.header.space===!0?o.header.size:0)+(o.footer.space===!0?o.footer.size:0);if(typeof e.styleFn=="function"){const r=o.isContainer.value===!0?o.containerHeight.value:n.screen.height;return e.styleFn(s,r)}return{minHeight:o.isContainer.value===!0?o.containerHeight.value-s+"px":n.screen.height===0?s!==0?`calc(100vh - ${s}px)`:"100vh":n.screen.height-s+"px"}}),i=g(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:i.value,style:l.value},we(t.default))}});const wt={ratio:[String,Number]};function bt(e,t){return g(()=>{const n=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const _t=16/9;var ye=oe({name:"QImg",props:{...wt,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:_t},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:n}){const o=y(e.initialRatio),a=bt(e,o);let l=null,i=!1;const s=[y(null),y(q())],r=y(0),m=y(!1),f=y(!1),b=g(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),_=g(()=>({width:e.width,height:e.height})),k=g(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),S=g(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));Q(()=>C(),T);function C(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function q(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function T(d){l!==null&&(clearTimeout(l),l=null),f.value=!1,d===null?(m.value=!1,s[r.value^1].value=q()):m.value=!0,s[r.value].value=d}function c({target:d}){i!==!0&&(l!==null&&(clearTimeout(l),l=null),o.value=d.naturalHeight===0?.5:d.naturalWidth/d.naturalHeight,w(d,1))}function w(d,F){i===!0||F===1e3||(d.complete===!0?G(d):l=setTimeout(()=>{l=null,w(d,F+1)},50))}function G(d){i!==!0&&(r.value=r.value^1,s[r.value].value=null,m.value=!1,f.value=!1,n("load",d.currentSrc||d.src))}function ne(d){l!==null&&(clearTimeout(l),l=null),m.value=!1,f.value=!0,s[r.value].value=null,s[r.value^1].value=q(),n("error",d)}function U(d){const F=s[d].value,I={key:"img_"+d,class:k.value,style:S.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...F};return r.value===d?(I.class+=" q-img__image--waiting",Object.assign(I,{onLoad:c,onError:ne})):I.class+=" q-img__image--loaded",p("div",{class:"q-img__container absolute-full",key:"img"+d},p("img",I))}function D(){return m.value!==!0?p("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},we(t[f.value===!0?"error":"default"])):p("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[p(ut,{color:e.spinnerColor,size:e.spinnerSize})])}return T(C()),W(()=>{i=!0,l!==null&&(clearTimeout(l),l=null)}),()=>{const d=[];return a.value!==null&&d.push(p("div",{key:"filler",style:a.value})),f.value!==!0&&(s[0].value!==null&&d.push(U(0)),s[1].value!==null&&d.push(U(1))),d.push(p(ve,{name:"q-transition--fade"},D)),p("div",{class:b.value,style:_.value,role:"img","aria-label":e.alt},d)}}});function qt(e,t,n){let o;function a(){o!==void 0&&(xe.remove(o),o=void 0)}return W(()=>{e.value===!0&&a()}),{removeFromHistory:a,addToHistory(){o={condition:()=>n.value===!0,handler:t},xe.add(o)}}}function xt(){let e=null;const t=V();function n(){e!==null&&(clearTimeout(e),e=null)}return Fe(n),W(n),{removeTimeout:n,registerTimeout(o,a){n(),Ve(t)===!1&&(e=setTimeout(o,a))}}}function St(){let e;const t=V();function n(){e=void 0}return Fe(n),W(n),{removeTick:n,registerTick(o){e=o,he(()=>{e===o&&(Ve(t)===!1&&e(),e=void 0)})}}}const $t={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},kt=["beforeShow","show","beforeHide","hide"];function Ct({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:a,processOnMount:l}){const i=V(),{props:s,emit:r,proxy:m}=i;let f;function b(c){e.value===!0?S(c):_(c)}function _(c){if(s.disable===!0||c!==void 0&&c.qAnchorHandled===!0||t!==void 0&&t(c)!==!0)return;const w=s["onUpdate:modelValue"]!==void 0;w===!0&&(r("update:modelValue",!0),f=c,he(()=>{f===c&&(f=void 0)})),(s.modelValue===null||w===!1)&&k(c)}function k(c){e.value!==!0&&(e.value=!0,r("beforeShow",c),o!==void 0?o(c):r("show",c))}function S(c){if(s.disable===!0)return;const w=s["onUpdate:modelValue"]!==void 0;w===!0&&(r("update:modelValue",!1),f=c,he(()=>{f===c&&(f=void 0)})),(s.modelValue===null||w===!1)&&C(c)}function C(c){e.value!==!1&&(e.value=!1,r("beforeHide",c),a!==void 0?a(c):r("hide",c))}function q(c){s.disable===!0&&c===!0?s["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!1):c===!0!==e.value&&(c===!0?k:C)(f)}Q(()=>s.modelValue,q),n!==void 0&&ct(i)===!0&&Q(()=>m.$route.fullPath,()=>{n.value===!0&&e.value===!0&&S()}),l===!0&&Ze(()=>{q(s.modelValue)});const T={show:_,hide:S,toggle:b};return Object.assign(m,T),T}const Tt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Et(e,t=()=>{},n=()=>{}){return{transitionProps:g(()=>{const o=`q-transition--${e.transitionShow||t()}`,a=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${a}-leave-from`,leaveActiveClass:`${a}-leave-active`,leaveToClass:`${a}-leave-to`}}),transitionStyle:g(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let O=[],K=[];function Me(e){K=K.filter(t=>t!==e)}function Bt(e){Me(e),K.push(e)}function $e(e){Me(e),K.length===0&&O.length!==0&&(O[O.length-1](),O=[])}function Pt(e){K.length===0?e():O.push(e)}let Lt=1,Dt=document.body;function Ft(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${Lt++}`:e,Se.globalNodes!==void 0){const o=Se.globalNodes.class;o!==void 0&&(n.className=o)}return Dt.appendChild(n),n}function It(e){e.remove()}const de=[];function At(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ht(e,t,n,o){const a=y(!1),l=y(!1);let i=null;const s={},r=o==="dialog"&&At(e);function m(b){if(b===!0){$e(s),l.value=!0;return}l.value=!1,a.value===!1&&(r===!1&&i===null&&(i=Ft(!1,o)),a.value=!0,de.push(e.proxy),Bt(s))}function f(b){if(l.value=!1,b!==!0)return;$e(s),a.value=!1;const _=de.indexOf(e.proxy);_!==-1&&de.splice(_,1),i!==null&&(It(i),i=null)}return et(()=>{f(!0)}),e.proxy.__qPortal=!0,tt(e.proxy,"contentEl",()=>t.value),{showPortal:m,hidePortal:f,portalIsActive:a,portalIsAccessible:l,renderPortal:()=>r===!0?n():a.value===!0?[p(ot,{to:i},n())]:void 0}}let j=0,fe,me,R,ge=!1,ke,Ce,Te,B=null;function zt(e){Vt(e)&&nt(e)}function Vt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=it(e),n=e.shiftKey&&!e.deltaX,o=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),a=n||o?e.deltaY:e.deltaX;for(let l=0;l<t.length;l++){const i=t[l];if(mt(i,o))return o?a<0&&i.scrollTop===0?!0:a>0&&i.scrollTop+i.clientHeight===i.scrollHeight:a<0&&i.scrollLeft===0?!0:a>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function Ee(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function X(e){ge!==!0&&(ge=!0,requestAnimationFrame(()=>{ge=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:o}=document.scrollingElement;(R===void 0||t!==window.innerHeight)&&(R=n-t,document.scrollingElement.scrollTop=o),o>R&&(document.scrollingElement.scrollTop-=Math.ceil((o-R)/8))}))}function Be(e){const t=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:a}=window.getComputedStyle(t);fe=dt(window),me=ft(window),ke=t.style.left,Ce=t.style.top,Te=window.location.href,t.style.left=`-${fe}px`,t.style.top=`-${me}px`,a!=="hidden"&&(a==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,$.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",X,E.passiveCapture),window.visualViewport.addEventListener("scroll",X,E.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ee,E.passiveCapture))}$.is.desktop===!0&&$.is.mac===!0&&window[`${e}EventListener`]("wheel",zt,E.notPassive),e==="remove"&&($.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",X,E.passiveCapture),window.visualViewport.removeEventListener("scroll",X,E.passiveCapture)):window.removeEventListener("scroll",Ee,E.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=ke,t.style.top=Ce,window.location.href===Te&&window.scrollTo(fe,me),R=void 0)}function Mt(e){let t="add";if(e===!0){if(j++,B!==null){clearTimeout(B),B=null;return}if(j>1)return}else{if(j===0||(j--,j>0))return;if(t="remove",$.is.ios===!0&&$.is.nativeMobile===!0){B!==null&&clearTimeout(B),B=setTimeout(()=>{Be(t),B=null},100);return}}Be(t)}function jt(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Mt(t))}}}const P=[];let z;function Ot(e){z=e.keyCode===27}function Rt(){z===!0&&(z=!1)}function Nt(e){z===!0&&(z=!1,lt(e,27)===!0&&P[P.length-1](e))}function je(e){window[e]("keydown",Ot),window[e]("blur",Rt),window[e]("keyup",Nt),z=!1}function Qt(e){$.is.desktop===!0&&(P.push(e),P.length===1&&je("addEventListener"))}function Pe(e){const t=P.indexOf(e);t>-1&&(P.splice(t,1),P.length===0&&je("removeEventListener"))}const L=[];function Oe(e){L[L.length-1](e)}function Kt(e){$.is.desktop===!0&&(L.push(e),L.length===1&&document.body.addEventListener("focusin",Oe))}function Le(e){const t=L.indexOf(e);t>-1&&(L.splice(t,1),L.length===0&&document.body.removeEventListener("focusin",Oe))}let J=0;const Wt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},De={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Gt=oe({name:"QDialog",inheritAttrs:!1,props:{...$t,...Tt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...kt,"shake","click","escapeKey"],setup(e,{slots:t,emit:n,attrs:o}){const a=V(),l=y(null),i=y(!1),s=y(!1);let r=null,m=null,f,b;const _=g(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:k}=jt(),{registerTimeout:S}=xt(),{registerTick:C,removeTick:q}=St(),{transitionProps:T,transitionStyle:c}=Et(e,()=>De[e.position][0],()=>De[e.position][1]),{showPortal:w,hidePortal:G,portalIsAccessible:ne,renderPortal:U}=Ht(a,l,Ye,"dialog"),{hide:D}=Ct({showing:i,hideOnRouteChange:_,handleShow:Ke,handleHide:We,processOnMount:!0}),{addToHistory:d,removeFromHistory:F}=qt(i,D,_),I=g(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Wt[e.position]}`+(s.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),Y=g(()=>i.value===!0&&e.seamless!==!0),Ne=g(()=>e.autoClose===!0?{onClick:Ge}:{}),Qe=g(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${Y.value===!0?"modal":"seamless"}`,o.class]);Q(()=>e.maximized,u=>{i.value===!0&&se(u)}),Q(Y,u=>{k(u),u===!0?(Kt(ae),Qt(le)):(Le(ae),Pe(le))});function Ke(u){d(),m=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,se(e.maximized),w(),s.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),C(M)):q(),S(()=>{if(a.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:h,bottom:re}=document.activeElement.getBoundingClientRect(),{innerHeight:_e}=window,ue=window.visualViewport!==void 0?window.visualViewport.height:_e;h>0&&re>ue/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-ue,re>=_e?1/0:Math.ceil(document.scrollingElement.scrollTop+re-ue/2))),document.activeElement.scrollIntoView()}b=!0,l.value.click(),b=!1}w(!0),s.value=!1,n("show",u)},e.transitionDuration)}function We(u){q(),F(),be(!0),s.value=!0,G(),m!==null&&(((u&&u.type.indexOf("key")===0?m.closest('[tabindex]:not([tabindex^="-"])'):void 0)||m).focus(),m=null),S(()=>{G(!0),s.value=!1,n("hide",u)},e.transitionDuration)}function M(u){Pt(()=>{let h=l.value;h===null||h.contains(document.activeElement)===!0||(h=(u!==""?h.querySelector(u):null)||h.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||h.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||h.querySelector("[autofocus], [data-autofocus]")||h,h.focus({preventScroll:!0}))})}function ie(u){u&&typeof u.focus=="function"?u.focus({preventScroll:!0}):M(),n("shake");const h=l.value;h!==null&&(h.classList.remove("q-animate--scale"),h.classList.add("q-animate--scale"),r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,l.value!==null&&(h.classList.remove("q-animate--scale"),M())},170))}function le(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&ie():(n("escapeKey"),D()))}function be(u){r!==null&&(clearTimeout(r),r=null),(u===!0||i.value===!0)&&(se(!1),e.seamless!==!0&&(k(!1),Le(ae),Pe(le))),u!==!0&&(m=null)}function se(u){u===!0?f!==!0&&(J<1&&document.body.classList.add("q-body--dialog"),J++,f=!0):f===!0&&(J<2&&document.body.classList.remove("q-body--dialog"),J--,f=!1)}function Ge(u){b!==!0&&(D(u),n("click",u))}function Ue(u){e.persistent!==!0&&e.noBackdropDismiss!==!0?D(u):e.noShake!==!0&&ie()}function ae(u){e.allowFocusOutside!==!0&&ne.value===!0&&rt(l.value,u.target)!==!0&&M('[tabindex]:not([tabindex="-1"])')}Object.assign(a.proxy,{focus:M,shake:ie,__updateRefocusTarget(u){m=u||null}}),W(be);function Ye(){return p("div",{role:"dialog","aria-modal":Y.value===!0?"true":"false",...o,class:Qe.value},[p(ve,{name:"q-transition--fade",appear:!0},()=>Y.value===!0?p("div",{class:"q-dialog__backdrop fixed-full",style:c.value,"aria-hidden":"true",tabindex:-1,onClick:Ue}):null),p(ve,T.value,()=>i.value===!0?p("div",{ref:l,class:I.value,style:c.value,tabindex:-1,...Ne.value},we(t.default)):null)])}return U}});const Ut=ee({name:"DialogImg",data(){return{showPreview:!1}}});function Yt(e,t,n,o,a,l){return H(),Z(Ae,null,[x(ye,st(e.$attrs,{onClick:t[0]||(t[0]=i=>e.showPreview=!0),class:"grow-hvr"}),null,16),x(Gt,{modelValue:e.showPreview,"onUpdate:modelValue":t[2]||(t[2]=i=>e.showPreview=i)},{default:Ie(()=>[x(ye,{src:e.$attrs.src,onClick:t[1]||(t[1]=i=>e.showPreview=!0),contain:""},null,8,["src"])]),_:1},8,["modelValue"])],64)}var Re=te(Ut,[["render",Yt]]);const Xt=ee({name:"CardItem",components:{DialogImg:Re},props:{item:{type:Object,default:()=>{}}}}),Jt={class:"col-12 q-pb-lg"},Zt={class:"col-12 content-thin-0 card-item-content"},eo=v("div",{class:"col-shrink row relative-position q-mt-md q-mb-xl cursor-pointer"},[v("a",{class:"col-shrink q-px-xs title-medium-0 text-link text-uppercase q-py-sm link-animation"}," Read More ")],-1);function to(e,t,n,o,a,l){return H(),Z("a",{onClick:t[1]||(t[1]=i=>console.log("redirecting to: "+e.item.title)),class:"row col-12 cursor-pointer"},[v("div",Jt,[x(ye,{src:e.item.image,alt:e.item.imageAlt,class:"latest-bottom-line"},null,8,["src","alt"])]),v("a",{onClick:t[0]||(t[0]=i=>console.log("redirecting to: "+e.item.title)),class:"col-shrink title-medium-2 q-pb-xs cursor-pointer"},N(e.item.title),1),v("div",Zt,N(e.item.shortDesc),1),eo])}var oo=te(Xt,[["render",to]]);const no=ee({name:"CardList",components:{CardItem:oo},props:{cards:{type:Array,default:()=>[]}}});function io(e,t,n,o,a,l){const i=pe("CardItem");return H(),Z("div",{class:He(`col-12 q-pb-sm q-px-sm row justify-center ${e.$q.screen.lt.md?"":"q-col-gutter-lg"}`)},[(H(!0),Z(Ae,null,at(e.cards,(s,r)=>(H(),ze(i,{class:"col-xs-12 col-md-4 box-hvr",key:r+"_cardListKey",item:s},null,8,["item"]))),128))],2)}var lo=te(no,[["render",io]]),so="/orchard-fed-test/resources/component-two/Image-01.jpg",ao="/orchard-fed-test/resources/component-two/Image-02.jpg",ro="/orchard-fed-test/resources/component-two/Image-03.jpg";const uo=ee({name:"IndexPage",components:{CardList:lo,DialogImgVue:Re},setup(){const e=y("Answer Your Body's Needs"),t=y("The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs."),n=y("Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.");return{latestFromAeg:y([{image:so,imageAlt:"various foods - shrimp and vedgetables - on plates",title:"Summer Lunch Menu By Mark Best",shortDesc:"AEG ambassador Mark best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."},{image:ao,imageAlt:"carrots and a whole toasted chicken on black plates",title:"A Traditinal Christmas Eve, Mark best Style",shortDesc:"One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Even menu which is sure impress your guests."},{image:ro,imageAlt:"a pot of meat and vegetables",title:"Taking Taste Further",shortDesc:"This exclusive cookbook gives you all the know how you need. We've designed it to make sure you get the most out of our products - and the best out of your food."}]),componentOneTitle:e,componentOneDesc:t,componentOneBottomDesc:n}}}),co={class:"col-12 row page-wrapper items-center"},fo={class:"component-one col-12 items-start row q-pa-md"},mo={class:"col-6"},go={class:"col-6 row q-pl-md items-between"},vo={class:"col-12 q-pb-md row items-stretch"},ho={class:"col-12 row items-stretch"},po={class:"col-xs-12 col-md-4 row items-start q-px-md"},yo={class:"title-thin-1 text-uppercase text-white"},wo={class:"content-thin-1 component-one-desc"},bo=v("div",{class:"text-primary q-pt-xl text-uppercase row justify-start col-12 q-pt-md q-pb-md"}," Be Mindful ",-1),_o={class:"col-12 title-medium-1"},qo={class:"component-two justify-center col-12 items-start row q-pa-md"},xo=v("div",{class:"title-thin-2 text-uppercase col-12 text-center q-pb-xl"}," All the latest from AEG ",-1);function So(e,t,n,o,a,l){const i=pe("DialogImgVue"),s=pe("CardList");return H(),ze(yt,{class:"row items-start justify-center"},{default:Ie(()=>[v("div",co,[v("div",fo,[v("div",{class:He(`row col-xs-12 col-md-8 q-px-sm q-mb-md ${e.$q.screen.lt.md?"q-px-md":""}`),style:{"max-height":"600px"}},[v("div",mo,[x(i,{src:"resources/component-one/Image-01.jpg",alt:"Adult male person, holding hands with child, walking through grass",style:{"max-height":"570px"}})]),v("div",go,[v("div",vo,[x(i,{src:"resources/component-one/Image-02.jpg",alt:"random fruits on a bowl, some are rotten, some are not",style:{"max-height":"290px"}})]),v("div",ho,[x(i,{src:"resources/component-one/Image-03.jpg",alt:"four whole asparagi parallel to each other",style:{"max-height":"290px"}})])])],2),v("div",po,[v("div",yo,N(e.componentOneTitle),1),x(pt,{style:{height:"2px"},class:"col-12 q-mb-md q-mt-sm bg-white"}),v("div",wo,N(e.componentOneDesc),1),bo,v("div",_o,N(e.componentOneBottomDesc),1)])]),v("div",qo,[xo,x(s,{class:"col-12 row",cards:e.latestFromAeg},null,8,["cards"])])])]),_:1})}var Eo=te(uo,[["render",So]]);export{Eo as default};