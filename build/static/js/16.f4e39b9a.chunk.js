(this["webpackJsonpizze-admin"]=this["webpackJsonpizze-admin"]||[]).push([[16],{586:function(e,t,i){"use strict";var n=i(35),r=i(36);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(i(0)),a=(0,n(i(37)).default)(o.createElement("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"ControlPoint");t.default=a},590:function(e,t,i){"use strict";i(0);var n=i(605),r=i(606),o=i(595),a=i(632),c=i(375),l=i(370),s=i(596),d=i.n(s),u=i(597),j=i.n(u),m=i(598),v=i.n(m),b=i(599),h=i.n(b),p=i(600),g=i.n(p),O=i(601),x=i.n(O),f=i(602),w=i.n(f),k=i(4),_=Object(l.a)((function(e){return{inActive:{borderRadius:"unset",color:e.palette.green.main,border:"1px solid ".concat(e.palette.green.main)},active:{borderRadius:"unset",color:e.palette.white,border:"1px solid ".concat(e.palette.green.main),backgroundColor:e.palette.green.main,"&:hover":{backgroundColor:e.palette.green.dark}},btnGroup:{display:"block"}}})),q=function(e){var t=e.editor,i=_();return Object(k.jsxs)(a.a,{disableElevation:!0,fullWidth:!0,className:i.btnGroup,variant:"contained",size:"small",children:[Object(k.jsx)(c.a,{size:"small",classes:{root:(null===t||void 0===t?void 0:t.isActive("bold"))?i.active:i.inActive},onClick:function(){return null===t||void 0===t?void 0:t.chain().focus().toggleBold().run()},children:Object(k.jsx)(d.a,{})}),Object(k.jsx)(c.a,{size:"small",classes:{root:(null===t||void 0===t?void 0:t.isActive("italic"))?i.active:i.inActive},onClick:function(){return null===t||void 0===t?void 0:t.chain().focus().toggleItalic().run()},children:Object(k.jsx)(j.a,{})}),Object(k.jsx)(c.a,{size:"small",classes:{root:(null===t||void 0===t?void 0:t.isActive("strike"))?i.active:i.inActive},onClick:function(){return null===t||void 0===t?void 0:t.chain().focus().toggleStrike().run()},children:Object(k.jsx)(v.a,{})}),Object(k.jsx)(c.a,{size:"small",classes:{root:(null===t||void 0===t?void 0:t.isActive("code"))?i.active:i.inActive},onClick:function(){return null===t||void 0===t?void 0:t.chain().focus().toggleCode().run()},children:Object(k.jsx)(h.a,{})}),Object(k.jsx)(c.a,{size:"small",classes:{root:(null===t||void 0===t?void 0:t.isActive("paragraph"))?i.active:i.inActive},onClick:function(){return null===t||void 0===t?void 0:t.chain().focus().setParagraph().run()},children:Object(k.jsx)(g.a,{})}),Object(k.jsx)(c.a,{size:"small",classes:{root:(null===t||void 0===t?void 0:t.isActive("bulletList"))?i.active:i.inActive},onClick:function(){return null===t||void 0===t?void 0:t.chain().focus().toggleBulletList().run()},children:Object(k.jsx)(x.a,{})}),Object(k.jsx)(c.a,{size:"small",classes:{root:(null===t||void 0===t?void 0:t.isActive("orderedList"))?i.active:i.inActive},onClick:function(){return null===t||void 0===t?void 0:t.chain().focus().toggleOrderedList().run()},children:Object(k.jsx)(w.a,{})})]})};t.a=function(e){var t=e.value,i=e.onChange,a=e.onBlur,c=Object(n.b)({extensions:[r.a,o.a],content:t,onUpdate:function(e){var t=e.editor;return i(t.getHTML())},onBlur:function(e){e.editor;return a()}});return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(q,{editor:c}),Object(k.jsx)(n.a,{editor:c})]})}},640:function(e,t,i){"use strict";i.r(t);var n=i(42),r=i(13),o=i(28),a=i.n(o),c=i(47),l=i(21),s=i(370),d=i(560),u=i(166),j=i(380),m=i(561),v=i(562),b=i(563),h=i(564),p=i(565),g=i(373),O=i(374),x=i(566),f=i(581),w=i(567),k=i(375),_=i(568),q=i(529),C=i(531),y=i(569),N=i(537),B=i(543),W=i(533),A=i(204),E=i(211),S=i.n(E),T=i(209),I=i.n(T),R=i(586),z=i.n(R),P=i(212),F=i.n(P),L=i(210),M=i.n(L),V=i(579),D=i(653),G=i(125),H=i(0),U=i(62),J=i(168),K=i(52),Q=i(126),X=i(590),Y=i(94),Z=i(81),$=i(61),ee=i(213),te=i(215),ie=i.n(te),ne=i(4),re=Object(s.a)((function(e){return{root:{width:e.breakpoints.values.lg,maxWidth:"100%",margin:"0 auto",padding:e.spacing(3)},addIcon:{marginRight:e.spacing(1)},content:{padding:0},inner:{minWidth:700},actions:{padding:e.spacing(1),justifyContent:"center"},tabCard:{marginTop:e.spacing(3)},sEvenly:{display:"flex",justifyContent:"space-evenly"},iconPadd:{padding:5},jCenter:{display:"flex",justifyContent:"center"},imageView:{width:"100%",height:"100%"},themeButton:{color:e.palette.white,backgroundColor:e.palette.green.main,"&:hover":{backgroundColor:e.palette.green.dark}},lColor:{color:"white"},workouttermsavatar:{width:"100%",height:"100%"},deleteButton:{width:"100%",height:"50px"},avatarStyles:{width:e.spacing(15),height:e.spacing(15)},ingredientsAvatarStyle:{width:e.spacing(10),height:e.spacing(10),margin:"auto"},marginTopStyle:{marginTop:e.spacing(2)},adjustmentTop:{marginTop:"5px"},avatarRoot:{borderRadius:10,marginRight:15,width:e.spacing(10),height:e.spacing(10)},textPrimary:{marginTop:10,fontWeight:"bold"},textSecondary:{marginTop:10},ingrdientsGridMain:{marginTop:10},ingredientsAvatarRoot:{width:e.spacing(7),height:e.spacing(7),margin:"auto"},htmlContentGrid:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3),paddingTop:e.spacing(1)},noIngredientsText:{marginBottom:e.spacing(3),display:"flex",justifyContent:"center"},htmlContent:{"& ul":{paddingLeft:"1.2rem"},"& p":{textAlign:"justify"}}}})),oe=function(e){var t=e.isOpen,i=e.title,o=e.onClose,s=e.isEdit,u=e.data,m=e.onSuccess,v=e.okBtnText,b=void 0===v?"Ok":v,h=re(),p=Object(H.useRef)(null),g=Object(H.useRef)(null),O=(Object(H.useRef)(null),Object($.a)()),x=Object(Z.b)().Post,f=Object(H.useState)([]),w=Object(l.a)(f,2),k=w[0],_=w[1],E={name:"",image:{file:null,prevImage:"",isNew:null},description:""},S={workout_name:"",workout_image:{file:null,prevImage:"",isNew:null},workout_description:"",workout_type:"",workout_terms:[E],required_equipments:[{id:""}],how_to_do:""},T=Object(H.useState)(Object(r.a)({},S)),I=Object(l.a)(T,2),R=I[0],P=I[1],F=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x("app/listAllEquipment",{}).then((function(e){if(e.error)O.show(e.message,"error");else{var t=e.data.map((function(e){return e.id=e._id,e}));_(t)}})).catch((function(e){O.show(e.message,"error")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){e.persist();var t=e.target.files;if(t&&0!=t.length){var i=new FileReader,n=t[0];i.onloadend=function(){p.current.setFieldValue("workout_image",{file:n,prevImage:i.result,isNew:!0})},i.readAsDataURL(n)}},M=function(e,t){var i=t.setSubmitting,n=t.resetForm;console.log(e),i(!0),x("app/addWorkout",e).then((function(e){O.show(e.message,"success"),i(!1),n(),m()})).catch((function(e){i(!1),O.show(e.message,"error")}))},V=function(e,t){var i=t.setSubmitting,n=t.resetForm;i(!0),x("app/editWorkout",e).then((function(e){O.show(e.message,"success"),i(!1),n(),m()})).catch((function(e){i(!1),O.show(e.message,"error")}))},K=function(e,t){var i=t.map((function(e){return{id:e._id}}));p.current.setFieldValue("required_equipments",i)};return Object(H.useEffect)((function(){if(s){var e=u.required_equipments,t=u.workout_terms,i=u._id,o=u.workout_image,a=Object(n.a)(u,["required_equipments","workout_terms","_id","workout_image"]),c=Object(r.a)(Object(r.a)({},a),{},{id:i});c.required_equipments=e.map((function(e){return{id:e._id}}));var l=k.map((function(e){return e._id}));c.required_equipments=e.filter((function(e){var t=e._id;return l.includes(t)})).map((function(e){return{id:e._id}})),c.workout_terms=t.map((function(e){var t;return{name:e.name,image:{file:e.image,prevImage:null===(t=e.image)||void 0===t?void 0:t.url,isNew:!1},description:e.description}})),c.workout_image={file:o,prevImage:null===o||void 0===o?void 0:o.url,isNew:!1},P(c)}else P(S)}),[e]),Object(H.useEffect)((function(){F()}),[]),Object(ne.jsxs)(q.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,fullWidth:!0,maxWidth:"md","aria-labelledby":"dialog-title",open:t,children:[Object(ne.jsx)(J.a,{id:"dialog-title",onClose:o,children:i}),Object(ne.jsx)(G.b,{innerRef:p,enableReinitialize:!0,initialValues:R,onSubmit:function(e,t){try{t.setSubmitting(!0),function(){var i=Object(c.a)(a.a.mark((function i(){var o,c,d,u,j,m,v,b,h;return a.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return o=e.workout_image,c=e.workout_terms,d=Object(n.a)(e,["workout_image","workout_terms"]),u=d,j=Promise.all(c.map((function(e){var t=e.image,i=Object(n.a)(e,["image"]);return Object(ee.b)(t).then((function(e){return Object(r.a)({image:e},i)}))}))),i.next=5,Promise.all([Object(ee.b)(o),j]);case 5:m=i.sent,v=Object(l.a)(m,2),b=v[0],h=v[1],u.workout_image=b,u.workout_terms=h,!s&&M(u,t),s&&V(u,t);case 13:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}}()()}catch(i){O.show("Image Upload Failed","error")}},validationSchema:U.d().shape({workout_name:U.f().trim().required("Workout name is required"),workout_image:U.d({file:U.b().required("A file is required")}),workout_description:U.f().trim().max(250,"Must be 250 characters or less").required("Workout description is required"),workout_type:U.f().trim().required("Workout type is required"),workout_terms:U.a().of(U.d().shape({name:U.f().trim().required("Workout term name is Required"),image:U.d({file:U.b().required("required")}),description:U.f().max(250,"Must be 250 characters or less").required("Workout description is Required")})),required_equipments:U.a().of(U.d().shape({id:U.f().trim().required(" Equipments is Required")})),how_to_do:U.f().trim().required("Steps is required")}),children:function(e){var t,i,n,a,c,l,s=e.values,u=e.errors,m=e.touched,v=e.handleChange,p=e.setFieldValue,O=e.handleBlur,x=e.setFieldTouched,f=e.submitForm,w=e.isSubmitting;return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(C.a,{dividers:!0,children:Object(ne.jsxs)(d.a,{container:!0,spacing:3,children:[Object(ne.jsx)(d.a,{item:!0,md:12,xs:12,children:Object(ne.jsx)(y.a,{fullWidth:!0,label:"Workout name",name:"workout_name",variant:"outlined",error:Boolean(m.workout_name&&u.workout_name),helperText:m.workout_name&&u.workout_name,value:s.workout_name,onChange:v,onBlur:O})}),Object(ne.jsx)(d.a,{item:!0,md:12,xs:12,children:Object(ne.jsx)(y.a,{fullWidth:!0,multiline:!0,label:"Workout description",name:"workout_description",variant:"outlined",error:Boolean(m.workout_description&&u.workout_description),helperText:m.workout_description&&u.workout_description,value:s.workout_description,onChange:v,onBlur:O})}),Object(ne.jsx)(d.a,{item:!0,md:12,xs:12,children:Object(ne.jsx)(y.a,{fullWidth:!0,multiline:!0,label:"Workout type",name:"workout_type",variant:"outlined",error:Boolean(m.workout_type&&u.workout_type),helperText:m.workout_type&&u.workout_type,value:s.workout_type,onChange:v,onBlur:O})}),Object(ne.jsx)(G.a,{name:"workout_terms",validateOnChange:!0,children:function(e){var t,i=e.push;e.remove;return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(d.a,{item:!0,md:12,xs:12,children:Object(ne.jsx)(j.a,{fullWidth:!0,className:h.themeButton,variant:"contained",color:"default",onClick:function(){return function(e,t){e.workout_terms,t(E)}(s,i)},endIcon:Object(ne.jsx)(z.a,{}),children:"Add workout terms"})}),null===s||void 0===s||null===(t=s.workout_terms)||void 0===t?void 0:t.map((function(e,t){return Object(ne.jsx)(ae,{index:t},t)}))]})}}),Object(ne.jsx)(d.a,{item:!0,md:12,xs:12,children:Object(ne.jsx)(D.a,{multiple:!0,id:"combo-box-demo",options:k,value:k.filter((function(e){return s.required_equipments.map((function(e){return e.id})).includes(e._id)})),onChange:K,getOptionLabel:function(e){return e.name},renderInput:function(e){var t,i,n,o;return Object(ne.jsx)(y.a,Object(r.a)(Object(r.a)({},e),{},{label:"Equipments",name:"required_equipments",variant:"outlined",error:Boolean((null===m||void 0===m?void 0:m.required_equipments)&&(null===m||void 0===m||null===(t=m.required_equipments[0])||void 0===t?void 0:t.id)&&(null===u||void 0===u?void 0:u.required_equipments)&&(null===u||void 0===u||null===(i=u.required_equipments[0])||void 0===i?void 0:i.id)),helperText:(null===m||void 0===m?void 0:m.required_equipments)&&(null===m||void 0===m||null===(n=m.required_equipments[0])||void 0===n?void 0:n.id)&&(null===u||void 0===u?void 0:u.required_equipments)&&(null===u||void 0===u||null===(o=u.required_equipments[0])||void 0===o?void 0:o.id),inputProps:Object(r.a)({},e.inputProps)}))}})}),Object(ne.jsx)(d.a,{item:!0,md:12,xs:12,children:Object(ne.jsxs)(N.a,{fullWidth:!0,error:Boolean((null===m||void 0===m?void 0:m.how_to_do)&&(null===u||void 0===u?void 0:u.how_to_do)),children:[Object(ne.jsx)(X.a,{value:s.how_to_do,onChange:function(e){return p("how_to_do",e)},onBlur:function(){return x("how_to_do",!0,!0)}}),Object(ne.jsx)(B.a,{children:(null===m||void 0===m?void 0:m.how_to_do)&&(null===u||void 0===u?void 0:u.how_to_do)})]})}),Object(ne.jsxs)(d.a,{item:!0,md:12,xs:12,children:[Object(ne.jsx)("input",{name:"recipe_image",ref:g,type:"file",accept:".jpg,.png,jpeg",onChange:L,onBlur:O,hidden:!0}),Object(ne.jsx)(j.a,{fullWidth:!0,className:h.themeButton,variant:"contained",color:"default",onClick:function(){return g.current.click()},startIcon:Object(ne.jsx)(ie.a,{}),children:"Workout image"}),Object(ne.jsx)(N.a,{error:Boolean((null===m||void 0===m||null===(t=m.workout_image)||void 0===t?void 0:t.file)&&(null===u||void 0===u||null===(i=u.workout_image)||void 0===i?void 0:i.file)),children:Object(ne.jsx)(B.a,{children:(null===m||void 0===m||null===(n=m.workout_image)||void 0===n?void 0:n.file)&&(null===u||void 0===u||null===(a=u.workout_image)||void 0===a?void 0:a.file)})})]}),Object(ne.jsx)(d.a,{item:!0,md:12,xs:12,children:(null===(c=s.workout_image)||void 0===c?void 0:c.prevImage)&&Object(ne.jsx)("img",{className:h.imageView,src:null===(l=s.workout_image)||void 0===l?void 0:l.prevImage})})]})}),Object(ne.jsxs)(W.a,{children:[Object(ne.jsx)(j.a,{onClick:o,variant:"outlined",color:"secondary",children:"Cancel"}),Object(ne.jsx)(j.a,{className:h.themeButton,onClick:function(){return f()},disabled:w,variant:"outlined",children:w?Object(ne.jsx)(A.a,{size:24,className:h.lColor}):b})]})]})}})]})},ae=function(e){var t,i,n,r,o,a=re(),c=Object(G.d)(),l=c.values,s=c.errors,u=c.touched,m=c.setFieldValue,v=c.handleBlur,b=c.handleChange,h=e.index,p=Object(H.useRef)(null),g="workout_terms[".concat(h,"]"),O=Object(G.c)(l,"workout_terms[".concat(h,"]")),x=Object(G.c)(s,"workout_terms[".concat(h,"]")),w=Object(G.c)(u,"workout_terms[".concat(h,"]"));return Object(ne.jsxs)(d.a,{item:!0,container:!0,md:12,xs:12,direction:"row",spacing:2,children:[Object(ne.jsxs)(d.a,{item:!0,md:1,xs:12,children:[Object(ne.jsx)("input",{name:"".concat(g,".image"),ref:p,type:"file",accept:".jpg,.png,jpeg",onChange:function(e){return function(e){e.persist();var t=e.target.files;if(t&&0!=t.length){var i=new FileReader,n=t[0];i.onloadend=function(){m("".concat(g,".image"),{file:n,prevImage:i.result,isNew:!0})},i.readAsDataURL(n)}else m("".concat(g,".image"),{file:null,prevImage:"",isNew:null})}(e)},onBlur:v,hidden:!0}),Object(ne.jsx)(f.a,{className:a.workouttermsavatar,variant:"square",onClick:function(){var e;return null===p||void 0===p||null===(e=p.current)||void 0===e?void 0:e.click()},src:null===O||void 0===O||null===(t=O.image)||void 0===t?void 0:t.prevImage}),Object(ne.jsx)(N.a,{error:Boolean((null===w||void 0===w||null===(i=w.image)||void 0===i?void 0:i.file)&&(null===x||void 0===x||null===(n=x.image)||void 0===n?void 0:n.file)),children:Object(ne.jsx)(B.a,{children:(null===w||void 0===w||null===(r=w.image)||void 0===r?void 0:r.file)&&(null===x||void 0===x||null===(o=x.image)||void 0===o?void 0:o.file)})})]}),Object(ne.jsx)(d.a,{item:!0,md:5,xs:12,children:Object(ne.jsx)(y.a,{fullWidth:!0,multiline:!0,label:"Workout terms name",name:"".concat(g,".name"),variant:"outlined",error:Boolean((null===w||void 0===w?void 0:w.name)&&(null===x||void 0===x?void 0:x.name)),helperText:(null===w||void 0===w?void 0:w.name)&&(null===x||void 0===x?void 0:x.name),value:O.name,onChange:b,onBlur:v})}),Object(ne.jsx)(d.a,{item:!0,md:5,xs:8,children:Object(ne.jsx)(y.a,{fullWidth:!0,multiline:!0,label:"Workout terms description",name:"".concat(g,".description"),variant:"outlined",error:Boolean((null===w||void 0===w?void 0:w.description)&&(null===x||void 0===x?void 0:x.description)),helperText:(null===w||void 0===w?void 0:w.description)&&(null===x||void 0===x?void 0:x.description),value:O.description,onChange:b,onBlur:v})}),Object(ne.jsx)(d.a,{item:!0,md:1,xs:4,children:(null===l||void 0===l?void 0:l.workout_terms.length)>1&&Object(ne.jsx)(j.a,{fullWidth:!0,className:a.deleteButton,variant:"contained",color:"secondary",onClick:function(){return function(){var e=Object(G.c)(l,"workout_terms").filter((function(e,t){return t!=h}));m("workout_terms",e)}()},children:Object(ne.jsx)(F.a,{})})})]})},ce=function(e){var t,i,n,r,o,a=e.isOpen,c=e.title,s=e.onClose,m=e.data,v=re(),b=Object(H.useState)(m),h=Object(l.a)(b,2),p=h[0],g=h[1];return Object(H.useEffect)((function(){g(m)}),[e]),Object(ne.jsxs)(q.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,fullWidth:!0,maxWidth:"sm","aria-labelledby":"dialog-view-title",open:a,children:[Object(ne.jsx)(J.a,{id:"dialog-view-title",onClose:s,children:c}),Object(ne.jsxs)(C.a,{dividers:!0,children:[Object(ne.jsx)("div",{children:Object(ne.jsx)("img",{src:null===p||void 0===p||null===(t=p.workout_image)||void 0===t?void 0:t.url,alt:"Workout image",className:v.imageView})}),Object(ne.jsx)(u.a,{variant:"h5",align:"left",className:v.textPrimary,children:null===p||void 0===p?void 0:p.workout_name}),Object(ne.jsxs)(d.a,{container:!0,spacing:2,className:v.ingrdientsGridMain,justify:"center",children:[null===p||void 0===p||null===(i=p.workout_terms)||void 0===i?void 0:i.map((function(e,t){var i;return Object(ne.jsxs)(d.a,{item:!0,xs:4,md:3,children:[Object(ne.jsx)(f.a,{className:v.ingredientsAvatarRoot,src:null===e||void 0===e||null===(i=e.image)||void 0===i?void 0:i.url}),Object(ne.jsx)(u.a,{variant:"h6",align:"center",children:null===e||void 0===e?void 0:e.name}),Object(ne.jsx)(u.a,{variant:"subtitle2",align:"center",children:e.description.length>=25?"".concat(e.description.substring(0,30),"..."):e.description})]},t)})),0==(null===p||void 0===p||null===(n=p.workout_terms)||void 0===n?void 0:n.length)&&Object(ne.jsx)(d.a,{item:!0,xs:12,md:12,className:v.noIngredientsText,children:Object(ne.jsx)("div",{children:"No workout terms added"})})]}),Object(ne.jsx)(u.a,{variant:"h6",align:"left",className:v.textSecondary,children:null===p||void 0===p?void 0:p.workout_description}),Object(ne.jsx)(u.a,{variant:"h5",align:"left",style:{color:"#41A58D"},className:v.textPrimary,children:"Equipments"}),Object(ne.jsxs)(d.a,{container:!0,spacing:2,className:v.ingrdientsGridMain,justify:"center",children:[null===p||void 0===p||null===(r=p.required_equipments)||void 0===r?void 0:r.map((function(e,t){var i;return Object(ne.jsxs)(d.a,{item:!0,xs:4,md:3,children:[Object(ne.jsx)(f.a,{className:v.ingredientsAvatarRoot,src:null===e||void 0===e||null===(i=e.image)||void 0===i?void 0:i.url}),Object(ne.jsx)(u.a,{variant:"h6",align:"center",children:null===e||void 0===e?void 0:e.name})]},t)})),0==(null===p||void 0===p||null===(o=p.required_equipments)||void 0===o?void 0:o.length)&&Object(ne.jsx)(d.a,{item:!0,xs:12,md:12,className:v.noIngredientsText,children:Object(ne.jsx)("div",{children:"No Equipments Added"})})]}),Object(ne.jsx)(u.a,{variant:"h6",align:"left",style:{color:"#41A58D"},children:"How to do"}),Object(ne.jsx)(d.a,{container:!0,children:Object(ne.jsx)(d.a,{item:!0,xs:12,md:12,className:v.htmlContentGrid,children:Object(ne.jsx)("div",{className:v.htmlContent,dangerouslySetInnerHTML:{__html:null===p||void 0===p?void 0:p.how_to_do}})})})]}),Object(ne.jsx)(W.a,{children:Object(ne.jsx)(j.a,{onClick:s,variant:"outlined",color:"secondary",children:"Close"})})]})};t.default=function(){var e=re(),t=Object(Z.b)().Post,i=Object($.a)(),n=Object(Y.b)(),o=Object(H.useState)({page_no:1,page_limit:10}),s=Object(l.a)(o,2),q=s[0],C=s[1],y=Object(H.useState)(0),N=Object(l.a)(y,2),B=N[0],W=N[1],A=Object(H.useState)([]),E=Object(l.a)(A,2),T=E[0],R=E[1],z=Object(H.useState)(!0),P=Object(l.a)(z,2),L=P[0],D=P[1],G=Object(H.useState)({isOpen:!1,title:"",okBtnText:"",isEdit:!1,data:{}}),U=Object(l.a)(G,2),J=U[0],X=U[1],ee=Object(H.useState)({isOpen:!1,title:"",data:{}}),te=Object(l.a)(ee,2),ie=te[0],ae=te[1],le=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(!0),t("app/listWorkout",q).then((function(e){D(!1),e.error?i.show(e.message,"error"):(R(e.data),W(e.page_count))})).catch((function(e){D(!1),i.show(e.message,"error")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){X((function(e){return Object(r.a)(Object(r.a)({},e),{},{isOpen:!1})}))},de=function(){le(),se()};return Object(H.useEffect)((function(){le()}),[q]),Object(ne.jsxs)("div",{className:e.root,children:[Object(ne.jsx)(Q.a,{title:"Workout Exercise"}),Object(ne.jsxs)(d.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3,children:[Object(ne.jsx)(d.a,{item:!0,children:Object(ne.jsx)(u.a,{component:"h1",variant:"h3",children:"Movement Exercise"})}),Object(ne.jsx)(d.a,{item:!0,children:Object(ne.jsx)(j.a,{variant:"contained",onClick:function(){X((function(e){return Object(r.a)(Object(r.a)({},e),{},{isOpen:!0,isEdit:!1,title:"Add Exercise",okBtnText:"Save"})}))},className:e.themeButton,startIcon:Object(ne.jsx)(S.a,{}),children:"Add"})})]}),Object(ne.jsxs)(m.a,{className:e.tabCard,children:[Object(ne.jsx)(v.a,{className:e.content,children:Object(ne.jsx)(b.a,{children:Object(ne.jsxs)(h.a,{children:[Object(ne.jsx)(p.a,{children:Object(ne.jsxs)(g.a,{children:[Object(ne.jsx)(O.a,{align:"center",children:"#"}),Object(ne.jsx)(O.a,{align:"center",children:"Exercise Image"}),Object(ne.jsx)(O.a,{align:"center",children:"Exercise Name"}),Object(ne.jsx)(O.a,{align:"center",children:"Exercise Description"}),Object(ne.jsx)(O.a,{align:"center",children:"Actions"})]})}),Object(ne.jsxs)(x.a,{children:[!L&&T.map((function(o,l){var s,d;return Object(ne.jsxs)(g.a,{hover:!0,children:[Object(ne.jsx)(O.a,{align:"center",children:q.page_limit*(q.page_no-1)+l+1}),Object(ne.jsx)(O.a,{align:"center",children:Object(ne.jsx)("div",{className:e.jCenter,children:Object(ne.jsx)(f.a,{variant:"square",src:null===o||void 0===o||null===(s=o.workout_image)||void 0===s?void 0:s.url})})}),Object(ne.jsx)(O.a,{align:"center",children:null===o||void 0===o?void 0:o.workout_name}),Object(ne.jsx)(O.a,{align:"center",children:Object(ne.jsx)(w.a,{title:null===o||void 0===o?void 0:o.workout_description,children:Object(ne.jsx)("span",{children:(d=null===o||void 0===o?void 0:o.workout_description,(null===d||void 0===d?void 0:d.length)>=25?"".concat(d.substring(0,40),"..."):d)})})}),Object(ne.jsx)(O.a,{align:"center",children:Object(ne.jsxs)("div",{className:e.sEvenly,children:[Object(ne.jsx)(w.a,{title:"View",arrow:!0,children:Object(ne.jsx)(k.a,{className:e.iconPadd,onClick:function(){return function(e){ae((function(t){return Object(r.a)(Object(r.a)({},t),{},{isOpen:!0,data:e,title:"View Exerice"})}))}(o)},children:Object(ne.jsx)(I.a,{color:"primary"})})}),Object(ne.jsx)(w.a,{title:"Edit",arrow:!0,children:Object(ne.jsx)(k.a,{className:e.iconPadd,onClick:function(){return function(e){X((function(t){return Object(r.a)(Object(r.a)({},t),{},{isOpen:!0,isEdit:!0,data:e,title:"Edit Exercise",okBtnText:"Edit"})}))}(o)},children:Object(ne.jsx)(M.a,{color:"action"})})}),Object(ne.jsx)(w.a,{title:"Delete",arrow:!0,children:Object(ne.jsx)(k.a,{className:e.iconPadd,onClick:function(){return function(e){var r=n.openModel,o=n.setLoading,l=n.closeModel;r((function(){o(!0),t("app/deleteWorkout",{id:e._id}).then(function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(!1),l(),de(),i.show(t.message,"success");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){o(!1),i.show("Internal Server Error","error")}))}))}(o)},children:Object(ne.jsx)(F.a,{color:"secondary"})})})]})})]},l)})),L&&Object(ne.jsx)(K.a,{}),!L&&0==T.length&&Object(ne.jsx)(K.b,{children:"No Data Found"})]})]})})}),Object(ne.jsx)(_.a,{className:e.actions,children:Object(ne.jsx)(V.a,{count:B,page:q.page_no,onChange:function(e,t){C((function(e){return Object(r.a)(Object(r.a)({},e),{},{page_no:t})}))}})})]}),Object(ne.jsx)(oe,Object(r.a)(Object(r.a)({},J),{},{onClose:se,onSuccess:de})),Object(ne.jsx)(ce,Object(r.a)(Object(r.a)({},ie),{},{onClose:function(){ae((function(e){return Object(r.a)(Object(r.a)({},e),{},{isOpen:!1})}))}}))]})}}}]);
//# sourceMappingURL=16.f4e39b9a.chunk.js.map