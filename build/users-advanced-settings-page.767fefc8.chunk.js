(self.webpackChunkavadash=self.webpackChunkavadash||[]).push([[9460],{62031:(z,j,c)=>{"use strict";z.exports=c(59525)},59525:function(z,j,c){(function(g,M){z.exports=M(c(67294),c(78384))})(this,function(g,M){return function(n){var f={};function t(a){if(f[a])return f[a].exports;var r=f[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=f,t.d=function(a,r,l){t.o(a,r)||Object.defineProperty(a,r,{enumerable:!0,get:l})},t.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,r){if(1&r&&(a=t(a)),8&r||4&r&&typeof a=="object"&&a&&a.__esModule)return a;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:a}),2&r&&typeof a!="string")for(var i in a)t.d(l,i,function(u){return a[u]}.bind(null,i));return l},t.n=function(a){var r=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(r,"a",r),r},t.o=function(a,r){return Object.prototype.hasOwnProperty.call(a,r)},t.p="",t(t.s=110)}({0:function(n,f,t){n.exports=t(19)()},1:function(n,f){n.exports=g},10:function(n,f,t){var a=t(25),r=t(26),l=t(22),i=t(27);n.exports=function(u,d){return a(u)||r(u,d)||l(u,d)||i()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,f,t){"use strict";t.r(f),t.d(f,"Main",function(){return e}),t.d(f,"SkipToContent",function(){return D});var a,r=t(5),l=t.n(r),i=t(4),u=t.n(i),d=t(3),v=t.n(d),x=t(1),E=t.n(x),s=t(0),O=t.n(s),P=t(2),p=t.n(P),L=["labelledBy"],B=p.a.main(a||(a=v()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),e=function(w){var U=w.labelledBy,H=u()(w,L),G=U||"main-content-title";return E.a.createElement(B,l()({"aria-labelledby":G,id:"main-content",tabIndex:-1},H))};e.defaultProps={labelledBy:void 0},e.propTypes={labelledBy:O.a.string};var o,m=t(6),C=p()(m.Box)(o||(o=v()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(w){return w.theme.spaces[3]},function(w){return w.theme.spaces[3]}),D=function(w){var U=w.children;return E.a.createElement(C,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},U)};D.propTypes={children:O.a.node.isRequired}},13:function(n,f){function t(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(r){return typeof r},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n.exports.default=n.exports,n.exports.__esModule=!0),t(a)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,f,t){"use strict";var a=t(20);function r(){}function l(){}l.resetWarningCache=r,n.exports=function(){function i(v,x,E,s,O,P){if(P!==a){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}function u(){return i}i.isRequired=i;var d={array:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:u,element:i,elementType:i,instanceOf:u,node:i,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:l,resetWarningCache:r};return d.PropTypes=d,d}},2:function(n,f){n.exports=M},20:function(n,f,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,f){n.exports=function(t,a){(a==null||a>t.length)&&(a=t.length);for(var r=0,l=new Array(a);r<a;r++)l[r]=t[r];return l},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,f,t){var a=t(21);n.exports=function(r,l){if(r){if(typeof r=="string")return a(r,l);var i=Object.prototype.toString.call(r).slice(8,-1);return i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set"?Array.from(r):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(r,l):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,f){n.exports=function(t,a){if(t==null)return{};var r,l,i={},u=Object.keys(t);for(l=0;l<u.length;l++)r=u[l],a.indexOf(r)>=0||(i[r]=t[r]);return i},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,f){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,f){n.exports=function(t,a){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var l,i,u=[],d=!0,v=!1;try{for(r=r.call(t);!(d=(l=r.next()).done)&&(u.push(l.value),!a||u.length!==a);d=!0);}catch(x){v=!0,i=x}finally{try{d||r.return==null||r.return()}finally{if(v)throw i}}return u}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,f){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,f){n.exports=function(t,a){return a||(a=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,f,t){var a=t(24);n.exports=function(r,l){if(r==null)return{};var i,u,d=a(r,l);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(r);for(u=0;u<v.length;u++)i=v[u],l.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(r,i)&&(d[i]=r[i])}return d},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,f){function t(){return n.exports=t=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(a[i]=l[i])}return a},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,f,t){"use strict";t.r(f),t.d(f,"Box",function(){return B});var a,r=t(3),l=t.n(r),i=t(2),u=t.n(i),d=t(7),v=t(1),x=t.n(v),E=t(0),s=t.n(E),O=function(e){return x.a.createElement("div",e)},P={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},p={_hover:s.a.func,background:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.string]),borderColor:s.a.string,children:s.a.oneOfType([s.a.node,s.a.string]),color:s.a.string,flex:s.a.oneOfType([s.a.string,s.a.string]),grow:s.a.oneOfType([s.a.string,s.a.string]),hasRadius:s.a.bool,hiddenS:s.a.bool,hiddenXS:s.a.bool,padding:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingBottom:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingLeft:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingRight:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingTop:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),shadow:s.a.string,shrink:s.a.oneOfType([s.a.string,s.a.string])};O.defaultProps=P,O.propTypes=p;var L={color:!0},B=u.a.div.withConfig({shouldForwardProp:function(e,o){return!L[e]&&o(e)}})(a||(a=l()([`
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
`])),function(e){var o=e.fontSize;return e.theme.fontSizes[o]||o},function(e){var o=e.theme,m=e.background;return o.colors[m]},function(e){var o=e.theme,m=e.color;return o.colors[m]},function(e){var o=e.theme,m=e.padding;return Object(d.a)("padding",m,o)},function(e){var o=e.theme,m=e.paddingTop;return Object(d.a)("padding-top",m,o)},function(e){var o=e.theme,m=e.paddingRight;return Object(d.a)("padding-right",m,o)},function(e){var o=e.theme,m=e.paddingBottom;return Object(d.a)("padding-bottom",m,o)},function(e){var o=e.theme,m=e.paddingLeft;return Object(d.a)("padding-left",m,o)},function(e){var o=e.theme,m=e.marginLeft;return Object(d.a)("margin-left",m,o)},function(e){var o=e.theme,m=e.marginRight;return Object(d.a)("margin-right",m,o)},function(e){var o=e.theme,m=e.marginTop;return Object(d.a)("margin-top",m,o)},function(e){var o=e.theme,m=e.marginBottom;return Object(d.a)("margin-bottom",m,o)},function(e){var o=e.theme;return e.hiddenS?"".concat(o.mediaQueries.tablet," { display: none; }"):void 0},function(e){var o=e.theme;return e.hiddenXS?"".concat(o.mediaQueries.mobile," { display: none; }"):void 0},function(e){var o=e.theme,m=e.hasRadius,C=e.borderRadius;return m?o.borderRadius:C},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var o=e.borderColor;return e.theme.colors[o]},function(e){var o=e.theme,m=e.borderColor,C=e.borderStyle,D=e.borderWidth;if(m&&!C&&!D)return"1px solid ".concat(o.colors[m])},function(e){var o=e.theme,m=e.shadow;return o.shadows[m]},function(e){return e.pointerEvents},function(e){var o=e._hover,m=e.theme;return o?o(m):void 0},function(e){return e.display},function(e){return e.position},function(e){var o=e.left;return e.theme.spaces[o]||o},function(e){var o=e.right;return e.theme.spaces[o]||o},function(e){var o=e.top;return e.theme.spaces[o]||o},function(e){var o=e.bottom;return e.theme.spaces[o]||o},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var o=e.width;return e.theme.spaces[o]||o},function(e){var o=e.maxWidth;return e.theme.spaces[o]||o},function(e){var o=e.minWidth;return e.theme.spaces[o]||o},function(e){var o=e.height;return e.theme.spaces[o]||o},function(e){var o=e.maxHeight;return e.theme.spaces[o]||o},function(e){var o=e.minHeight;return e.theme.spaces[o]||o},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});B.defaultProps=P,B.propTypes=p},7:function(n,f,t){"use strict";var a=t(10),r=t.n(a),l=t(13),i=t.n(l);f.a=function(u,d,v){var x=d;if(Array.isArray(d)||i()(d)!=="object"||(x=[d==null?void 0:d.desktop,d==null?void 0:d.tablet,d==null?void 0:d.mobile]),x!==void 0){if(Array.isArray(x)){var E=x,s=r()(E,3),O=s[0],P=s[1],p=s[2],L="".concat(u,": ").concat(v.spaces[O],";");return P!==void 0&&(L+="".concat(v.mediaQueries.tablet,`{
          `).concat(u,": ").concat(v.spaces[P],`;
        }`)),p!==void 0&&(L+="".concat(v.mediaQueries.mobile,`{
          `).concat(u,": ").concat(v.spaces[p],`;
        }`)),L}var B=v.spaces[x]||x;return"".concat(u,": ").concat(B,";")}}}})})},98352:(z,j,c)=>{"use strict";c.r(j),c.d(j,{default:()=>ae});var g=c(67294),M=c(23724),n=c(97132),f=c(80831),t=c(68547),a=c(84686),r=c(62031),l=c(78862),i=c(19408),u=c(5493),d=c(9008),v=c(43808),x=c(49425),E=c(34626),s=c(84734),O=c.n(s),P=c(81912),p=c(89031);const B=[{intlLabel:{id:(0,p.OB)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,p.OB)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,p.OB)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,p.OB)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,p.OB)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,p.OB)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,p.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,p.OB)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,p.OB)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,p.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,p.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,p.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}];var e=c(53209);const o=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),C=e.Ry().shape({email_confirmation_redirection:e.nK().when("email_confirmation",{is:!0,then:e.Z_().matches(o).required(),otherwise:e.Z_().nullable()}),email_reset_password:e.Z_(t.translatedErrors.string).matches(o,t.translatedErrors.regex).nullable()});var D=(h,b,y)=>new Promise((_,F)=>{var W=S=>{try{A(y.next(S))}catch(R){F(R)}},k=S=>{try{A(y.throw(S))}catch(R){F(R)}},A=S=>S.done?_(S.value):Promise.resolve(S.value).then(W,k);A((y=y.apply(h,b)).next())});const w=()=>D(void 0,null,function*(){const{data:h}=yield p.be.get((0,p.Gc)("advanced"));return h}),U=h=>p.be.put((0,p.Gc)("advanced"),h);var H=Object.defineProperty,G=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,X=(h,b,y)=>b in h?H(h,b,{enumerable:!0,configurable:!0,writable:!0,value:y}):h[b]=y,Z=(h,b)=>{for(var y in b||(b={}))te.call(b,y)&&X(h,y,b[y]);if(K)for(var y of K(b))ne.call(b,y)&&X(h,y,b[y]);return h},$=(h,b)=>G(h,ee(b)),V=(h,b,y)=>new Promise((_,F)=>{var W=S=>{try{A(y.next(S))}catch(R){F(R)}},k=S=>{try{A(y.throw(S))}catch(R){F(R)}},A=S=>S.done?_(S.value):Promise.resolve(S.value).then(W,k);A((y=y.apply(h,b)).next())});const re=()=>g.createElement(t.CheckPagePermissions,{permissions:P.Z.readAdvancedSettings},g.createElement(oe,null)),oe=()=>{const{formatMessage:h}=(0,n.useIntl)(),b=(0,t.useNotification)(),{lockApp:y,unlockApp:_}=(0,t.useOverlayBlocker)(),{notifyStatus:F}=(0,a.useNotifyAT)(),W=(0,M.useQueryClient)();(0,t.useFocusWhenNavigate)();const k=(0,g.useMemo)(()=>({update:P.Z.updateAdvancedSettings}),[]),{isLoading:A,allowedActions:{canUpdate:S}}=(0,t.useRBAC)(k),{status:R,data:Y}=(0,M.useQuery)("advanced",()=>w(),{onSuccess:()=>{F(h({id:(0,p.OB)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError:()=>{b({type:"warning",message:{id:(0,p.OB)("notification.error"),defaultMessage:"An error occured"}})}}),ie=A||R!=="success",J=(0,M.useMutation)(I=>U(I),{onSuccess:()=>V(void 0,null,function*(){yield W.invalidateQueries("advanced"),b({type:"success",message:{id:(0,p.OB)("notification.success.saved"),defaultMessage:"Saved"}}),_()}),onError:()=>{b({type:"warning",message:{id:(0,p.OB)("notification.error"),defaultMessage:"An error occured"}}),_()},refetchActive:!0}),{isLoading:se}=J,le=I=>V(void 0,null,function*(){y();const N=I.email_confirmation?I.email_confirmation_redirection:"";yield J.mutateAsync($(Z({},I),{email_confirmation_redirection:N}))});return ie?g.createElement(r.Main,{"aria-busy":"true"},g.createElement(t.SettingsPageTitle,{name:h({id:(0,p.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),g.createElement(l.HeaderLayout,{title:h({id:(0,p.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),g.createElement(l.ContentLayout,null,g.createElement(t.LoadingIndicatorPage,null))):g.createElement(r.Main,{"aria-busy":se},g.createElement(t.SettingsPageTitle,{name:h({id:(0,p.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),g.createElement(f.Formik,{onSubmit:le,initialValues:Y.settings,validateOnChange:!1,validationSchema:C,enableReinitialize:!0},({errors:I,values:N,handleChange:q,isSubmitting:ue})=>g.createElement(t.Form,null,g.createElement(l.HeaderLayout,{title:h({id:(0,p.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:g.createElement(i.Button,{loading:ue,type:"submit",disabled:!S,startIcon:g.createElement(O(),null),size:"L"},h({id:"global.save",defaultMessage:"Save"}))}),g.createElement(l.ContentLayout,null,g.createElement(u.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},g.createElement(d.Stack,{spacing:4},g.createElement(x.Typography,{variant:"delta",as:"h2"},h({id:"global.settings",defaultMessage:"Settings"})),g.createElement(E.Grid,{gap:6},g.createElement(E.GridItem,{col:6,s:12},g.createElement(v.Select,{label:h({id:(0,p.OB)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:N.default_role,hint:h({id:(0,p.OB)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:T=>q({target:{name:"default_role",value:T}})},Y.roles.map(T=>g.createElement(v.Option,{key:T.type,value:T.type},T.name)))),B.map(T=>{let Q=N[T.name];return Q||(Q=T.type==="bool"?!1:""),g.createElement(E.GridItem,Z({key:T.name},T.size),g.createElement(t.GenericInput,$(Z({},T),{value:Q,error:I[T.name],disabled:T.name==="email_confirmation_redirection"&&N.email_confirmation===!1,onChange:q})))}))))))))},ae=re},46979:(z,j,c)=>{"use strict";c.d(j,{Z:()=>r});var g=c(9669),M=c.n(g),n=c(68547),f=c.n(n),t=(l,i,u)=>new Promise((d,v)=>{var x=O=>{try{s(u.next(O))}catch(P){v(P)}},E=O=>{try{s(u.throw(O))}catch(P){v(P)}},s=O=>O.done?d(O.value):Promise.resolve(O.value).then(x,E);s((u=u.apply(l,i)).next())});const a=M().create({baseURL:""});a.interceptors.request.use(l=>t(void 0,null,function*(){return l.headers={Authorization:`Bearer ${n.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},l}),l=>{Promise.reject(l)}),a.interceptors.response.use(l=>l,l=>{var i;throw((i=l.response)==null?void 0:i.status)===401&&(n.auth.clearAppStorage(),window.location.reload()),l});const r=a},89031:(z,j,c)=>{"use strict";c.d(j,{be:()=>g.Z,YX:()=>f,Gc:()=>r,OB:()=>l.Z});var g=c(46979),M=c(96486);const f=i=>Object.keys(i).reduce((u,d)=>{const v=i[d].controllers,x=Object.keys(v).reduce((E,s)=>((0,M.isEmpty)(v[s])||(E[s]=v[s]),E),{});return(0,M.isEmpty)(x)||(u[d]={controllers:x}),u},{});var t=c(31498);const r=i=>`/${t.Z}/${i}`;var l=c(84757)}}]);
