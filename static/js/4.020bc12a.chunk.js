/*! For license information please see 4.020bc12a.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{295:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(5),s=n(48),o=n(49),a=n(51),i=n(50),u=n(0),c=n.n(u),l=n(9),p=n(20),g=n(1),f=function(e){return{isAuth:e.auth.isAuth}},h=function(e){var t=function(t){Object(a.a)(u,t);var n=Object(i.a)(u);function u(){return Object(s.a)(this,u),n.apply(this,arguments)}return Object(o.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(g.jsx)(e,Object(r.a)({},this.props)):Object(g.jsx)(l.a,{to:"/Login"})}}]),u}(c.a.Component);return Object(p.b)(f)(t)}},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(94);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,s=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){s=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(s)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},300:function(e,t,n){e.exports={photo:"users_photo__1TTx8",pageCount:"users_pageCount__1VJ8k",usersProfile:"users_usersProfile__21-5T",followButton:"users_followButton__214X9",userImage:"users_userImage__2YzgH",usersItem:"users_usersItem__1xa04",image:"users_image__3vEbs",location:"users_location__28Gnc",wrapperNameStatus:"users_wrapperNameStatus__1UjIR",status:"users_status__3dhTR"}},301:function(e,t,n){e.exports={paginator:"Paginator_paginator__2Uv9a",pageNumber:"Paginator_pageNumber__3BekG",selectedPage:"Paginator_selectedPage__1kHAj"}},302:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=s.apply(null,r);a&&e.push(a)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r)}()},304:function(e,t,n){"use strict";n.r(t);var r=n(48),s=n(49),o=n(51),a=n(50),i=n(0),u=n.n(i),c=n(20),l=n(300),p=n.n(l),g=n.p+"static/media/png1.4c1d555f.png",f=n(14),h=n(95),d=n(297),j=n(301),b=n.n(j),m=n(302),O=n.n(m),v=n(1),P=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r=Math.ceil(e.totalUsersCount/e.pageSize),s=[],o=1;o<=r;o++)s.push(o);var a=Math.ceil(r/n),u=Object(i.useState)(1),c=Object(d.a)(u,2),l=c[0],p=c[1],g=(l-1)*n+1,f=l*n;return Object(v.jsxs)("div",{className:b.a.paginator,children:[l>1&&Object(v.jsx)("button",{onClick:function(){p(l-1)},children:"< PREV"}),s.filter((function(e){return e>=g&&e<=f})).map((function(t){return Object(v.jsx)("span",{className:O()(Object(h.a)({},b.a.selectedPage,e.currentPage===t),b.a.pageNumber),onClick:function(n){e.onPageChanged(t)},children:t},t)})),a>l&&Object(v.jsx)("button",{onClick:function(){p(l+1)},children:"NEXT >"})]})},_=function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(P,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(t){return Object(v.jsxs)("div",{className:p.a.usersProfile,children:[Object(v.jsxs)("div",{className:p.a.userImage,children:[Object(v.jsx)("div",{className:p.a.image,children:Object(v.jsx)(f.b,{to:"/profile/"+t.id,children:Object(v.jsx)("img",{src:null!=t.photos.small?t.photos.small:g,className:p.a.photo})})}),Object(v.jsx)("div",{className:p.a.followButton,children:t.followed?Object(v.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(v.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(v.jsxs)("div",{className:p.a.usersItem,children:[Object(v.jsxs)("div",{className:p.a.wrapperNameStatus,children:[Object(v.jsxs)("div",{children:[" ",t.name]}),Object(v.jsxs)("div",{className:p.a.status,children:[" ",t.status]})]}),Object(v.jsxs)("div",{className:p.a.location,children:[Object(v.jsx)("div",{children:"u.location.country"}),Object(v.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},x=n(129),w=n(63),y=(n(295),n(10)),C=function(e){return e.usersPage.users},S=function(e){return e.usersPage.pageSize},N=function(e){return e.usersPage.currentPage},I=function(e){return e.usersPage.totalUsersCount},k=function(e){return e.usersPage.isFetching},U=function(e){return e.usersPage.followingInProgress},z=function(e){Object(o.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[this.props.isFetching?Object(v.jsx)(w.a,{}):null,Object(v.jsx)(_,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(u.a.Component);t.default=Object(y.d)(Object(c.b)((function(e){return{users:C(e),pageSize:S(e),totalUsersCount:I(e),currentPage:N(e),isFetching:k(e),followingInProgress:U(e)}}),{follow:x.b,unfollow:x.f,setCurrentPage:x.d,toggleFollowingProgress:x.e,getUsers:x.c}))(z)}}]);
//# sourceMappingURL=4.020bc12a.chunk.js.map