(self.webpackChunkavadash=self.webpackChunkavadash||[]).push([[3552],{62031:(Q,Z,v)=>{"use strict";Q.exports=v(59525)},59525:function(Q,Z,v){(function(t,C){Q.exports=C(v(67294),v(78384))})(this,function(t,C){return function(o){var u={};function n(c){if(u[c])return u[c].exports;var s=u[c]={i:c,l:!1,exports:{}};return o[c].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=o,n.c=u,n.d=function(c,s,E){n.o(c,s)||Object.defineProperty(c,s,{enumerable:!0,get:E})},n.r=function(c){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},n.t=function(c,s){if(1&s&&(c=n(c)),8&s||4&s&&typeof c=="object"&&c&&c.__esModule)return c;var E=Object.create(null);if(n.r(E),Object.defineProperty(E,"default",{enumerable:!0,value:c}),2&s&&typeof c!="string")for(var g in c)n.d(E,g,function(O){return c[O]}.bind(null,g));return E},n.n=function(c){var s=c&&c.__esModule?function(){return c.default}:function(){return c};return n.d(s,"a",s),s},n.o=function(c,s){return Object.prototype.hasOwnProperty.call(c,s)},n.p="",n(n.s=110)}({0:function(o,u,n){o.exports=n(19)()},1:function(o,u){o.exports=t},10:function(o,u,n){var c=n(25),s=n(26),E=n(22),g=n(27);o.exports=function(O,T){return c(O)||s(O,T)||E(O,T)||g()},o.exports.default=o.exports,o.exports.__esModule=!0},110:function(o,u,n){"use strict";n.r(u),n.d(u,"Main",function(){return e}),n.d(u,"SkipToContent",function(){return G});var c,s=n(5),E=n.n(s),g=n(4),O=n.n(g),T=n(3),P=n.n(T),B=n(1),y=n.n(B),m=n(0),j=n.n(m),A=n(2),D=n.n(A),M=["labelledBy"],N=D.a.main(c||(c=P()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),e=function(I){var H=I.labelledBy,W=O()(I,M),X=H||"main-content-title";return y.a.createElement(N,E()({"aria-labelledby":X,id:"main-content",tabIndex:-1},W))};e.defaultProps={labelledBy:void 0},e.propTypes={labelledBy:j.a.string};var r,h=n(6),w=D()(h.Box)(r||(r=P()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(I){return I.theme.spaces[3]},function(I){return I.theme.spaces[3]}),G=function(I){var H=I.children;return y.a.createElement(w,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},H)};G.propTypes={children:j.a.node.isRequired}},13:function(o,u){function n(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(o.exports=n=function(s){return typeof s},o.exports.default=o.exports,o.exports.__esModule=!0):(o.exports=n=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},o.exports.default=o.exports,o.exports.__esModule=!0),n(c)}o.exports=n,o.exports.default=o.exports,o.exports.__esModule=!0},19:function(o,u,n){"use strict";var c=n(20);function s(){}function E(){}E.resetWarningCache=s,o.exports=function(){function g(P,B,y,m,j,A){if(A!==c){var D=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw D.name="Invariant Violation",D}}function O(){return g}g.isRequired=g;var T={array:g,bool:g,func:g,number:g,object:g,string:g,symbol:g,any:g,arrayOf:O,element:g,elementType:g,instanceOf:O,node:g,objectOf:O,oneOf:O,oneOfType:O,shape:O,exact:O,checkPropTypes:E,resetWarningCache:s};return T.PropTypes=T,T}},2:function(o,u){o.exports=C},20:function(o,u,n){"use strict";o.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(o,u){o.exports=function(n,c){(c==null||c>n.length)&&(c=n.length);for(var s=0,E=new Array(c);s<c;s++)E[s]=n[s];return E},o.exports.default=o.exports,o.exports.__esModule=!0},22:function(o,u,n){var c=n(21);o.exports=function(s,E){if(s){if(typeof s=="string")return c(s,E);var g=Object.prototype.toString.call(s).slice(8,-1);return g==="Object"&&s.constructor&&(g=s.constructor.name),g==="Map"||g==="Set"?Array.from(s):g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)?c(s,E):void 0}},o.exports.default=o.exports,o.exports.__esModule=!0},24:function(o,u){o.exports=function(n,c){if(n==null)return{};var s,E,g={},O=Object.keys(n);for(E=0;E<O.length;E++)s=O[E],c.indexOf(s)>=0||(g[s]=n[s]);return g},o.exports.default=o.exports,o.exports.__esModule=!0},25:function(o,u){o.exports=function(n){if(Array.isArray(n))return n},o.exports.default=o.exports,o.exports.__esModule=!0},26:function(o,u){o.exports=function(n,c){var s=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(s!=null){var E,g,O=[],T=!0,P=!1;try{for(s=s.call(n);!(T=(E=s.next()).done)&&(O.push(E.value),!c||O.length!==c);T=!0);}catch(B){P=!0,g=B}finally{try{T||s.return==null||s.return()}finally{if(P)throw g}}return O}},o.exports.default=o.exports,o.exports.__esModule=!0},27:function(o,u){o.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},o.exports.default=o.exports,o.exports.__esModule=!0},3:function(o,u){o.exports=function(n,c){return c||(c=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(c)}}))},o.exports.default=o.exports,o.exports.__esModule=!0},4:function(o,u,n){var c=n(24);o.exports=function(s,E){if(s==null)return{};var g,O,T=c(s,E);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(s);for(O=0;O<P.length;O++)g=P[O],E.indexOf(g)>=0||Object.prototype.propertyIsEnumerable.call(s,g)&&(T[g]=s[g])}return T},o.exports.default=o.exports,o.exports.__esModule=!0},5:function(o,u){function n(){return o.exports=n=Object.assign||function(c){for(var s=1;s<arguments.length;s++){var E=arguments[s];for(var g in E)Object.prototype.hasOwnProperty.call(E,g)&&(c[g]=E[g])}return c},o.exports.default=o.exports,o.exports.__esModule=!0,n.apply(this,arguments)}o.exports=n,o.exports.default=o.exports,o.exports.__esModule=!0},6:function(o,u,n){"use strict";n.r(u),n.d(u,"Box",function(){return N});var c,s=n(3),E=n.n(s),g=n(2),O=n.n(g),T=n(7),P=n(1),B=n.n(P),y=n(0),m=n.n(y),j=function(e){return B.a.createElement("div",e)},A={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},D={_hover:m.a.func,background:m.a.string,basis:m.a.oneOfType([m.a.string,m.a.string]),borderColor:m.a.string,children:m.a.oneOfType([m.a.node,m.a.string]),color:m.a.string,flex:m.a.oneOfType([m.a.string,m.a.string]),grow:m.a.oneOfType([m.a.string,m.a.string]),hasRadius:m.a.bool,hiddenS:m.a.bool,hiddenXS:m.a.bool,padding:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingBottom:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingLeft:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingRight:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),paddingTop:m.a.oneOfType([m.a.number,m.a.arrayOf(m.a.number)]),shadow:m.a.string,shrink:m.a.oneOfType([m.a.string,m.a.string])};j.defaultProps=A,j.propTypes=D;var M={color:!0},N=O.a.div.withConfig({shouldForwardProp:function(e,r){return!M[e]&&r(e)}})(c||(c=E()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var r=e.fontSize;return e.theme.fontSizes[r]||r},function(e){var r=e.theme,h=e.background;return r.colors[h]},function(e){var r=e.theme,h=e.color;return r.colors[h]},function(e){var r=e.theme,h=e.padding;return Object(T.a)("padding",h,r)},function(e){var r=e.theme,h=e.paddingTop;return Object(T.a)("padding-top",h,r)},function(e){var r=e.theme,h=e.paddingRight;return Object(T.a)("padding-right",h,r)},function(e){var r=e.theme,h=e.paddingBottom;return Object(T.a)("padding-bottom",h,r)},function(e){var r=e.theme,h=e.paddingLeft;return Object(T.a)("padding-left",h,r)},function(e){var r=e.theme,h=e.marginLeft;return Object(T.a)("margin-left",h,r)},function(e){var r=e.theme,h=e.marginRight;return Object(T.a)("margin-right",h,r)},function(e){var r=e.theme,h=e.marginTop;return Object(T.a)("margin-top",h,r)},function(e){var r=e.theme,h=e.marginBottom;return Object(T.a)("margin-bottom",h,r)},function(e){var r=e.theme;return e.hiddenS?"".concat(r.mediaQueries.tablet," { display: none; }"):void 0},function(e){var r=e.theme;return e.hiddenXS?"".concat(r.mediaQueries.mobile," { display: none; }"):void 0},function(e){var r=e.theme,h=e.hasRadius,w=e.borderRadius;return h?r.borderRadius:w},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var r=e.borderColor;return e.theme.colors[r]},function(e){var r=e.theme,h=e.borderColor,w=e.borderStyle,G=e.borderWidth;if(h&&!w&&!G)return"1px solid ".concat(r.colors[h])},function(e){var r=e.theme,h=e.shadow;return r.shadows[h]},function(e){return e.pointerEvents},function(e){var r=e._hover,h=e.theme;return r?r(h):void 0},function(e){return e.display},function(e){return e.position},function(e){var r=e.left;return e.theme.spaces[r]||r},function(e){var r=e.right;return e.theme.spaces[r]||r},function(e){var r=e.top;return e.theme.spaces[r]||r},function(e){var r=e.bottom;return e.theme.spaces[r]||r},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var r=e.width;return e.theme.spaces[r]||r},function(e){var r=e.maxWidth;return e.theme.spaces[r]||r},function(e){var r=e.minWidth;return e.theme.spaces[r]||r},function(e){var r=e.height;return e.theme.spaces[r]||r},function(e){var r=e.maxHeight;return e.theme.spaces[r]||r},function(e){var r=e.minHeight;return e.theme.spaces[r]||r},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});N.defaultProps=A,N.propTypes=D},7:function(o,u,n){"use strict";var c=n(10),s=n.n(c),E=n(13),g=n.n(E);u.a=function(O,T,P){var B=T;if(Array.isArray(T)||g()(T)!=="object"||(B=[T==null?void 0:T.desktop,T==null?void 0:T.tablet,T==null?void 0:T.mobile]),B!==void 0){if(Array.isArray(B)){var y=B,m=s()(y,3),j=m[0],A=m[1],D=m[2],M="".concat(O,": ").concat(P.spaces[j],";");return A!==void 0&&(M+="".concat(P.mediaQueries.tablet,`{
          `).concat(O,": ").concat(P.spaces[A],`;
        }`)),D!==void 0&&(M+="".concat(P.mediaQueries.mobile,`{
          `).concat(O,": ").concat(P.spaces[D],`;
        }`)),M}var N=P.spaces[B]||B;return"".concat(O,": ").concat(N,";")}}}})})},72751:(Q,Z,v)=>{"use strict";v.r(Z),v.d(Z,{default:()=>Ye});var t=v(67294),C=v(68547),o=v(45697),u=v.n(o),n=v(97132),c=v(19408),s=v(62031),E=v(78862),g=v(80768),O=v.n(g),T=v(85407),P=v.n(T),B=v(8181),y=v(15559),m=v(80831),j=v(84734),A=v.n(j),D=v(75146),M=v(11402),N=v(67826),e=v(5493),r=v(14276),h=v(49425),w=v(53209);const I=(0,w.Ry)().shape({code:(0,w.Z_)().required(),displayName:(0,w.Z_)().max(50,"Settings.locales.modal.locales.displayName.error").required(C.translatedErrors.required)});var H=v(37424),W=v(7982),X=(l,i,a)=>new Promise((d,p)=>{var b=f=>{try{x(a.next(f))}catch(S){p(S)}},L=f=>{try{x(a.throw(f))}catch(S){p(S)}},x=f=>f.done?d(f.value):Promise.resolve(f.value).then(b,L);x((a=a.apply(l,i)).next())});const me=(l,i,a)=>X(void 0,null,function*(){try{const d=yield(0,C.request)(`/i18n/locales/${l}`,{method:"PUT",body:i});return a({type:"success",message:{id:(0,y.O)("Settings.locales.modal.edit.success")}}),d}catch(d){return a({type:"warning",message:{id:"notification.error"}}),null}}),fe=()=>{const[l,i]=(0,t.useState)(!1),a=(0,H.useDispatch)(),d=(0,C.useNotification)();return{isEditing:l,editLocale:(b,L)=>X(void 0,null,function*(){i(!0);const x=yield me(b,L,d);a({type:W.OT,editedLocale:x}),i(!1)})}};var V=v(34626),q=v(55967),_=v(43808);const ee=({locale:l})=>{const{formatMessage:i}=(0,n.useIntl)(),{values:a,handleChange:d,errors:p}=(0,m.useFormikContext)();return t.createElement(V.Grid,{gap:4},t.createElement(V.GridItem,{col:6},t.createElement(_.Select,{label:i({id:(0,y.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:l.code,disabled:!0},t.createElement(_.Option,{value:l.code},l.name))),t.createElement(V.GridItem,{col:6},t.createElement(q.TextInput,{name:"displayName",label:i({id:(0,y.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:i({id:(0,y.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:p.displayName?i({id:(0,y.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:a.displayName,onChange:d})))},pe=ee;ee.propTypes={locale:u().shape({id:u().number.isRequired,name:u().string.isRequired,code:u().string.isRequired,isDefault:u().bool.isRequired}).isRequired};var te=v(81325);const ne=({isDefaultLocale:l})=>{const{values:i,setFieldValue:a}=(0,m.useFormikContext)(),{formatMessage:d}=(0,n.useIntl)();return t.createElement(te.Checkbox,{name:"isDefault",hint:d({id:(0,y.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>a("isDefault",!i.isDefault),value:i.isDefault,disabled:l},d({id:(0,y.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};ne.propTypes={isDefaultLocale:u().bool.isRequired};const ve=ne;var ge=(l,i,a)=>new Promise((d,p)=>{var b=f=>{try{x(a.next(f))}catch(S){p(S)}},L=f=>{try{x(a.throw(f))}catch(S){p(S)}},x=f=>f.done?d(f.value):Promise.resolve(f.value).then(b,L);x((a=a.apply(l,i)).next())});const $=({locale:l,onClose:i})=>{const{refetchPermissions:a}=(0,C.useRBACProvider)(),{isEditing:d,editLocale:p}=fe(),{formatMessage:b}=(0,n.useIntl)(),L=x=>ge(void 0,[x],function*({displayName:f,isDefault:S}){yield p(l.id,{name:f,isDefault:S}),yield a()});return t.createElement(D.ModalLayout,{onClose:i,labelledBy:"edit-locale-title"},t.createElement(m.Formik,{initialValues:{code:l==null?void 0:l.code,displayName:(l==null?void 0:l.name)||"",isDefault:Boolean(l==null?void 0:l.isDefault)},onSubmit:L,validationSchema:I},t.createElement(C.Form,null,t.createElement(D.ModalHeader,null,t.createElement(h.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title"},b({id:(0,y.O)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"}))),t.createElement(D.ModalBody,null,t.createElement(M.TabGroup,{label:b({id:(0,y.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},t.createElement(N.Flex,{justifyContent:"space-between"},t.createElement(h.Typography,{as:"h2"},b({id:(0,y.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),t.createElement(M.Tabs,null,t.createElement(M.Tab,null,b({id:(0,y.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),t.createElement(M.Tab,null,b({id:(0,y.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),t.createElement(r.Divider,null),t.createElement(e.Box,{paddingTop:7,paddingBottom:7},t.createElement(M.TabPanels,null,t.createElement(M.TabPanel,null,t.createElement(pe,{locale:l})),t.createElement(M.TabPanel,null,t.createElement(ve,{isDefaultLocale:Boolean(l&&l.isDefault)})))))),t.createElement(D.ModalFooter,{startActions:t.createElement(c.Button,{variant:"tertiary",onClick:i},b({id:"app.components.Button.cancel"})),endActions:t.createElement(c.Button,{type:"submit",startIcon:t.createElement(A(),null),disabled:d},b({id:"global.save"}))}))))};$.defaultProps={locale:void 0},$.propTypes={locale:u().shape({id:u().number.isRequired,name:u().string.isRequired,code:u().string.isRequired,isDefault:u().bool.isRequired}),onClose:u().func.isRequired};const ye=$;var ae=(l,i,a)=>new Promise((d,p)=>{var b=f=>{try{x(a.next(f))}catch(S){p(S)}},L=f=>{try{x(a.throw(f))}catch(S){p(S)}},x=f=>f.done?d(f.value):Promise.resolve(f.value).then(b,L);x((a=a.apply(l,i)).next())});const he=(l,i)=>ae(void 0,null,function*(){try{const a=yield(0,C.request)(`/i18n/locales/${l}`,{method:"DELETE"});return i({type:"success",message:{id:(0,y.O)("Settings.locales.modal.delete.success")}}),a}catch(a){return i({type:"warning",message:{id:"notification.error"}}),a}}),be=()=>{const[l,i]=(0,t.useState)(!1),a=(0,H.useDispatch)(),d=(0,C.useNotification)();return{isDeleting:l,deleteLocale:b=>ae(void 0,null,function*(){i(!0),yield he(b,d),a({type:W.HC,id:b}),i(!1)})}},k=({localeToDelete:l,onClose:i})=>{const{isDeleting:a,deleteLocale:d}=be(),p=Boolean(l),b=()=>d(l.id).then(i);return t.createElement(C.ConfirmDialog,{isConfirmButtonLoading:a,onConfirm:b,onToggleDialog:i,isOpen:p})};k.defaultProps={localeToDelete:void 0},k.propTypes={localeToDelete:u().shape({id:u().number.isRequired}),onClose:u().func.isRequired};const Ee=k;var xe=v(27361),Oe=v.n(xe),oe=(l,i,a)=>new Promise((d,p)=>{var b=f=>{try{x(a.next(f))}catch(S){p(S)}},L=f=>{try{x(a.throw(f))}catch(S){p(S)}},x=f=>f.done?d(f.value):Promise.resolve(f.value).then(b,L);x((a=a.apply(l,i)).next())});const Te=(l,i)=>oe(void 0,[l,i],function*({code:a,name:d,isDefault:p},b){const L=yield(0,C.request)("/i18n/locales",{method:"POST",body:{name:d,code:a,isDefault:p}});return b({type:"success",message:{id:(0,y.O)("Settings.locales.modal.create.success")}}),L}),Le=()=>{const[l,i]=(0,t.useState)(!1),a=(0,H.useDispatch)(),d=(0,C.useNotification)();return{isAdding:l,addLocale:b=>oe(void 0,null,function*(){i(!0);try{const L=yield Te(b,d);a({type:W.xz,newLocale:L})}catch(L){const x=Oe()(L,"response.payload.message",null);throw x&&x.includes("already exists")?d({type:"warning",message:{id:(0,y.O)("Settings.locales.modal.create.alreadyExist")}}):d({type:"warning",message:{id:"notification.error"}}),L}finally{i(!1)}})}};var le=v(54675),Se=v(23724),Ce=v(84686),Me=(l,i,a)=>new Promise((d,p)=>{var b=f=>{try{x(a.next(f))}catch(S){p(S)}},L=f=>{try{x(a.throw(f))}catch(S){p(S)}},x=f=>f.done?d(f.value):Promise.resolve(f.value).then(b,L);x((a=a.apply(l,i)).next())});const Pe=l=>Me(void 0,null,function*(){try{return yield(0,C.request)("/i18n/iso-locales",{method:"GET"})}catch(i){return l({type:"warning",message:{id:"notification.error"}}),[]}}),De=()=>{const{formatMessage:l}=(0,n.useIntl)(),{notifyStatus:i}=(0,Ce.useNotifyAT)(),a=(0,C.useNotification)(),{isLoading:d,data:p}=(0,Se.useQuery)("default-locales",()=>Pe(a).then(b=>(i(l({id:(0,y.O)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."})),b)));return{defaultLocales:p,isLoading:d}},Y=t.memo(({value:l,onClear:i,onLocaleChange:a,error:d})=>{const{formatMessage:p}=(0,n.useIntl)(),{defaultLocales:b,isLoading:L}=De(),{locales:x}=(0,B.Z)(),f=(b||[]).map(F=>({label:F.name,value:F.code})).filter(({value:F})=>{const z=x.find(({code:U})=>U===F);return!z||z.code===l}),S=l||"";return t.createElement(le.Combobox,{"aria-busy":L,error:d,label:p({id:(0,y.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:S,onClear:l?i:void 0,onChange:F=>{const z=f.find(U=>U.value===F);z&&a({code:z.value,displayName:z.label})},placeholder:p({id:"components.placeholder.select",defaultMessage:"Select"})},f.map(F=>t.createElement(le.ComboboxOption,{value:F.value,key:F.value},F.label)))});Y.defaultProps={error:void 0,value:void 0,onClear:()=>{},onLocaleChange:()=>{}},Y.propTypes={error:u().string,onClear:u().func,onLocaleChange:u().func,value:u().string};const Be=Y,Re=()=>{const{formatMessage:l}=(0,n.useIntl)(),{values:i,handleChange:a,setFieldValue:d,errors:p}=(0,m.useFormikContext)(),b=(0,t.useCallback)(x=>{d("displayName",x.displayName),d("code",x.code)},[d]),L=(0,t.useCallback)(()=>{d("displayName",""),d("code","")},[d]);return t.createElement(V.Grid,{gap:4},t.createElement(V.GridItem,{col:6},t.createElement(Be,{error:p.code,value:i.code,onLocaleChange:b,onClear:L})),t.createElement(V.GridItem,{col:6},t.createElement(q.TextInput,{name:"displayName",label:l({id:(0,y.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:l({id:(0,y.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:p.displayName?l({id:(0,y.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:i.displayName,onChange:a})))},Ae=()=>{const{values:l,setFieldValue:i}=(0,m.useFormikContext)(),{formatMessage:a}=(0,n.useIntl)();return t.createElement(te.Checkbox,{hint:a({id:(0,y.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>i("isDefault",!l.isDefault),value:l.isDefault},a({id:(0,y.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};var Fe=(l,i,a)=>new Promise((d,p)=>{var b=f=>{try{x(a.next(f))}catch(S){p(S)}},L=f=>{try{x(a.throw(f))}catch(S){p(S)}},x=f=>f.done?d(f.value):Promise.resolve(f.value).then(b,L);x((a=a.apply(l,i)).next())});const Ie={code:"",displayName:"",isDefault:!1},re=({onClose:l})=>{const{isAdding:i,addLocale:a}=Le(),{formatMessage:d}=(0,n.useIntl)(),{refetchPermissions:p}=(0,C.useRBACProvider)(),b=L=>Fe(void 0,null,function*(){yield a({code:L.code,name:L.displayName,isDefault:L.isDefault}),yield p()});return t.createElement(D.ModalLayout,{onClose:l,labelledBy:"add-locale-title"},t.createElement(m.Formik,{initialValues:Ie,onSubmit:b,validationSchema:I,validateOnChange:!1},t.createElement(C.Form,null,t.createElement(D.ModalHeader,null,t.createElement(h.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title"},d({id:(0,y.O)("Settings.list.actions.add"),defaultMessage:"Add new locale"}))),t.createElement(D.ModalBody,null,t.createElement(M.TabGroup,{label:d({id:(0,y.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},t.createElement(N.Flex,{justifyContent:"space-between"},t.createElement(h.Typography,{as:"h2",variant:"beta"},d({id:(0,y.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),t.createElement(M.Tabs,null,t.createElement(M.Tab,null,d({id:(0,y.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),t.createElement(M.Tab,null,d({id:(0,y.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),t.createElement(r.Divider,null),t.createElement(e.Box,{paddingTop:7,paddingBottom:7},t.createElement(M.TabPanels,null,t.createElement(M.TabPanel,null,t.createElement(Re,null)),t.createElement(M.TabPanel,null,t.createElement(Ae,null)))))),t.createElement(D.ModalFooter,{startActions:t.createElement(c.Button,{variant:"tertiary",onClick:l},d({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(c.Button,{type:"submit",startIcon:t.createElement(A(),null),disabled:i},d({id:"global.save",defaultMessage:"Save"}))}))))};re.propTypes={onClose:u().func.isRequired};const je=re;var se=v(30741),Ne=v(9008),we=v(26851),R=v(41798),ze=v(19352),He=v.n(ze),Ve=v(18568),Ge=v.n(Ve),We=Object.defineProperty,ie=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,ce=(l,i,a)=>i in l?We(l,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[i]=a,de=(l,i)=>{for(var a in i||(i={}))Ue.call(i,a)&&ce(l,a,i[a]);if(ie)for(var a of ie(i))Qe.call(i,a)&&ce(l,a,i[a]);return l};const J=({locales:l,onDeleteLocale:i,onEditLocale:a})=>{const{formatMessage:d}=(0,n.useIntl)();return t.createElement(R.Table,{colCount:4,rowCount:l.length+1},t.createElement(R.Thead,null,t.createElement(R.Tr,null,t.createElement(R.Th,null,t.createElement(h.Typography,{variant:"sigma",textColor:"neutral600"},d({id:(0,y.O)("Settings.locales.row.id")}))),t.createElement(R.Th,null,t.createElement(h.Typography,{variant:"sigma",textColor:"neutral600"},d({id:(0,y.O)("Settings.locales.row.displayName")}))),t.createElement(R.Th,null,t.createElement(h.Typography,{variant:"sigma",textColor:"neutral600"},d({id:(0,y.O)("Settings.locales.row.default-locale")}))),t.createElement(R.Th,null,t.createElement(we.VisuallyHidden,null,"Actions")))),t.createElement(R.Tbody,null,l.map(p=>t.createElement(R.Tr,de({key:p.id},(0,C.onRowClick)({fn:()=>a(p),condition:a})),t.createElement(R.Td,null,t.createElement(h.Typography,{textColor:"neutral800"},p.id)),t.createElement(R.Td,null,t.createElement(h.Typography,{textColor:"neutral800"},p.name)),t.createElement(R.Td,null,t.createElement(h.Typography,{textColor:"neutral800"},p.isDefault?d({id:(0,y.O)("Settings.locales.default")}):null)),t.createElement(R.Td,null,t.createElement(Ne.Stack,de({horizontal:!0,spacing:1,style:{justifyContent:"flex-end"}},C.stopPropagation),a&&t.createElement(se.IconButton,{onClick:()=>a(p),label:d({id:(0,y.O)("Settings.list.actions.edit")}),icon:t.createElement(He(),null),noBorder:!0}),i&&!p.isDefault&&t.createElement(se.IconButton,{onClick:()=>i(p),label:d({id:(0,y.O)("Settings.list.actions.delete")}),icon:t.createElement(Ge(),null),noBorder:!0})))))))};J.defaultProps={locales:[],onDeleteLocale:void 0,onEditLocale:void 0},J.propTypes={locales:u().array,onDeleteLocale:u().func,onEditLocale:u().func};const Ze=J,K=({canUpdateLocale:l,canDeleteLocale:i,onToggleCreateModal:a,isCreating:d})=>{const[p,b]=(0,t.useState)(),[L,x]=(0,t.useState)(),{locales:f}=(0,B.Z)(),{formatMessage:S}=(0,n.useIntl)();(0,C.useFocusWhenNavigate)();const F=()=>b(void 0),z=i?b:void 0,U=()=>x(void 0),Je=l?x:void 0;return t.createElement(s.Main,{tabIndex:-1},t.createElement(E.HeaderLayout,{primaryAction:t.createElement(c.Button,{startIcon:t.createElement(O(),null),onClick:a,size:"L"},S({id:(0,y.O)("Settings.list.actions.add")})),title:S({id:(0,y.O)("plugin.name")}),subtitle:S({id:(0,y.O)("Settings.list.description")})}),t.createElement(E.ContentLayout,null,(f==null?void 0:f.length)>0?t.createElement(Ze,{locales:f,onDeleteLocale:z,onEditLocale:Je}):t.createElement(E.EmptyStateLayout,{icon:t.createElement(P(),{width:void 0,height:void 0}),content:S({id:(0,y.O)("Settings.list.empty.title")}),action:a?t.createElement(c.Button,{variant:"secondary",startIcon:t.createElement(O(),null),onClick:a},S({id:(0,y.O)("Settings.list.actions.add")})):null})),d&&t.createElement(je,{onClose:a}),L&&t.createElement(ye,{onClose:U,locale:L}),t.createElement(Ee,{localeToDelete:p,onClose:F}))};K.defaultProps={onToggleCreateModal:void 0},K.propTypes={canUpdateLocale:u().bool.isRequired,canDeleteLocale:u().bool.isRequired,onToggleCreateModal:u().func,isCreating:u().bool.isRequired};const Xe=K,ue=({canReadLocale:l,canCreateLocale:i,canDeleteLocale:a,canUpdateLocale:d})=>{const[p,b]=(0,t.useState)(!1),L=i?()=>b(x=>!x):void 0;return l?t.createElement(Xe,{canUpdateLocale:d,canDeleteLocale:a,onToggleCreateModal:L,isCreating:p}):null};ue.propTypes={canReadLocale:u().bool.isRequired,canCreateLocale:u().bool.isRequired,canUpdateLocale:u().bool.isRequired,canDeleteLocale:u().bool.isRequired};const $e=ue;var ke=v(2135);const Ye=()=>{const{isLoading:l,allowedActions:{canRead:i,canUpdate:a,canCreate:d,canDelete:p}}=(0,C.useRBAC)(ke.Z);return l?null:t.createElement($e,{canReadLocale:i,canCreateLocale:d,canUpdateLocale:a,canDeleteLocale:p})}}}]);
