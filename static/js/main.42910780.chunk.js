(this.webpackJsonpobdb=this.webpackJsonpobdb||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(76),a=n.n(r),c=(n(95),n(151)),s=n(85),l=Object(s.a)({palette:{mode:"light",primary:{main:"#3f51b5"},secondary:{main:"#f50057"}},typography:{}}),j=n(28),u=n(11),d=n(153),b=n(155),h=n(156),x=n(1),v=function(e){return Object(x.jsx)(d.a,{position:"static",color:"primary",children:Object(x.jsx)(b.a,{children:Object(x.jsx)(h.a,{variant:"body1",color:"white",children:"\xa9 2021 Vidyalankar Polytechnic"})})})},m=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(d.a,{position:"static",color:"primary",children:Object(x.jsx)(b.a,{children:Object(x.jsx)(j.b,{to:"/",style:{textDecoration:"none"},children:Object(x.jsx)(h.a,{color:"white",variant:"h6",children:"OBDB"})})})})})},O=function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m,{}),Object(x.jsx)(u.a,{}),Object(x.jsx)(v,{})]})},g=n(158),f=n(154),p=n(146),y=n(157),I=n(82),k=n.n(I),B=function(e){return Object(x.jsxs)(f.a,{component:"form",method:"get",action:"/search",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:"100%"},children:[Object(x.jsx)(p.a,{name:"query",sx:{ml:1,flex:1},placeholder:"Search Book"}),Object(x.jsx)(y.a,{type:"submit",sx:{p:"10px"},children:Object(x.jsx)(k.a,{})})]})},w=function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g.a,{children:Object(x.jsx)(h.a,{variant:"h2",margin:10,color:"primary",textAlign:"center",children:"Open Books DataBase"})}),Object(x.jsx)(g.a,{style:{margin:"2rem auto",width:"80%"},children:Object(x.jsx)(B,{})})]})},P=n(10),S=n(152),C=n(148),F=n(159),L=n(160),D=n(161),R=function(e){var t,n,o=e.book;return Object(x.jsxs)(F.a,{style:{height:"100%"},children:[Object(x.jsx)(L.a,{component:"img",image:null!==(t=null===(n=o.volumeInfo.imageLinks)||void 0===n?void 0:n.thumbnail)&&void 0!==t?t:"/assets/image_nav.jpg"}),Object(x.jsxs)(D.a,{children:[Object(x.jsx)(h.a,{gutterBottom:!0,variant:"h6",color:"secondary",children:o.volumeInfo.title}),Object(x.jsx)(h.a,{gutterBottom:!0,variant:"subtitle1",color:"secondary",children:o.volumeInfo.subtitle}),Object(x.jsx)(h.a,{variant:"body2",children:o.volumeInfo.description})]})]})},A=n(162),T=function(e){return Object(x.jsx)(A.a,{})},_=n(44),q=n.n(_),E=n(61),J=n(83),M=n.n(J).a.create({baseURL:"https://www.googleapis.com/books/v1/",timeout:1e4,headers:void 0}),V=function(){var e=Object(E.a)(q.a.mark((function e(t,n){var o,i,r=arguments;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.length>2&&void 0!==r[2]?r[2]:1,e.next=3,M.get("volumes",{params:{q:t,maxResults:n,startIndex:(o-1)*n}});case 3:return i=e.sent,e.abrupt("return",{totalBooks:i.data.totalItems,books:i.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(E.a)(q.a.mark((function e(t){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.get("volumes/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function z(e,t){var n=i.a.useState(1),o=Object(P.a)(n,2),r=o[0],a=o[1],c=i.a.useState(),s=Object(P.a)(c,2),l=s[0],j=s[1],u=i.a.useState(0),d=Object(P.a)(u,2),b=d[0],h=d[1];return i.a.useEffect((function(){j(void 0),V(e,t,r).then((function(e){j(e.books),h(e.totalBooks)}))}),[r]),{books:l,totalBooks:b,page:r,setPage:a}}function G(e){var t=i.a.useState(),n=Object(P.a)(t,2),o=n[0],r=n[1];return i.a.useEffect((function(){W(e).then((function(e){return r(e)}))}),[]),o}var H=function(e){var t,n=Object(j.c)(),o=z(null!==(t=Object(P.a)(n,1)[0].get("query"))&&void 0!==t?t:"",24),i=o.books,r=(o.totalBooks,o.page),a=o.setPage;return void 0===i?Object(x.jsx)(T,{}):Object(x.jsxs)(g.a,{style:{margin:"2rem"},children:[Object(x.jsx)(S.a,{container:!0,spacing:{xs:2,md:3},alignItems:"stretch",children:i.map((function(e){return Object(x.jsx)(S.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(x.jsx)(j.b,{to:"/book?id=".concat(e.id),style:{textDecoration:"none"},children:Object(x.jsx)(R,{book:e})})},e.id)}))}),Object(x.jsx)(g.a,{style:{padding:"2rem"},children:Object(x.jsx)(C.a,{color:"primary",count:25,page:r,onChange:function(e,t){return a(t)},showFirstButton:!0,showLastButton:!0,style:{display:"flex",justifyContent:"center"}})})]})},N=n(149),Q=function(e){var t,n=Object(j.c)(),o=G(null!==(t=Object(P.a)(n,1)[0].get("id"))&&void 0!==t?t:"");if(void 0===o)return Object(x.jsx)(T,{});var i,r,a,c,s,l,u,d,b,v,m,O,f,p,y,I,k,B,w,C={ISBN:null!==(i=null===(r=o.volumeInfo.industryIdentifiers)||void 0===r?void 0:r.map((function(e){return e.identifier})).join(", "))&&void 0!==i?i:"-",Published:null!==(a=o.volumeInfo.publishedDate)&&void 0!==a?a:"-",Publisher:null!==(c=o.volumeInfo.publisher)&&void 0!==c?c:"-",Author:null!==(s=null===(l=o.volumeInfo.authors)||void 0===l?void 0:l.join(", "))&&void 0!==s?s:"-","Page Count":null!==(u=null===(d=o.volumeInfo.pageCount)||void 0===d?void 0:d.toString())&&void 0!==u?u:"-",Language:null!==(b=o.volumeInfo.language)&&void 0!==b?b:"-",Genere:null!==(v=null===(m=o.volumeInfo.categories)||void 0===m?void 0:m.join(", "))&&void 0!==v?v:"-",Price:(null===(O=o.saleInfo.listPrice)||void 0===O?void 0:O.amount)?(null===(f=o.saleInfo.listPrice)||void 0===f?void 0:f.amount)+" "+(null!==(p=null===(y=o.saleInfo.listPrice)||void 0===y?void 0:y.currencyCode)&&void 0!==p?p:""):"-",Ratings:o.volumeInfo.averageRating+";"+(null===(I=o.volumeInfo)||void 0===I?void 0:I.ratingsCount)};return Object(x.jsx)(g.a,{style:{margin:"2rem"},children:Object(x.jsxs)(S.a,{container:!0,spacing:2,children:[Object(x.jsx)(S.a,{item:!0,xs:12,sm:3,children:Object(x.jsx)("img",{width:"80%",src:null!==(k=null===(B=o.volumeInfo.imageLinks)||void 0===B?void 0:B.thumbnail)&&void 0!==k?k:"/assets/image_nav.jpg",alt:"bookCoverPage"})}),Object(x.jsxs)(S.a,{item:!0,xs:12,sm:9,children:[Object(x.jsx)(h.a,{variant:"h5",children:"Details: "}),Object(x.jsx)(g.a,{style:{textAlign:"justify",wordWrap:"break-word"},children:Object(x.jsx)("table",{children:Object.entries(C).map((function(e){var t=Object(P.a)(e,2),n=t[0],i=t[1];return"Ratings"===n?Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{children:[n,": "]}),Object(x.jsxs)("td",{children:[o.volumeInfo.averageRating?Object(x.jsx)(N.a,{value:parseFloat(i.split(";")[0]),precision:.5,readOnly:!0}):"-",o.volumeInfo.ratingsCount?"(".concat(i.split(";")[1],")"):""]})]}):Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{children:[n,": "]}),Object(x.jsx)("td",{children:i})]})}))})})]}),Object(x.jsxs)(S.a,{item:!0,xs:12,sm:12,children:[Object(x.jsx)(h.a,{variant:"h5",children:"Description: "}),Object(x.jsx)(g.a,{style:{textAlign:"justify",wordWrap:"break-word"},children:Object(x.jsx)("div",{style:{marginRight:"2rem"},dangerouslySetInnerHTML:{__html:null!==(w=o.volumeInfo.description)&&void 0!==w?w:""}})})]})]})})},U=n(84),K=n.n(U),X=function(e){var t=z("alchemist",24),n=t.books,o=(t.totalBooks,t.page,t.setPage,G("FzVjBgAAQBAJ"));return void 0===n||void 0===o?Object(x.jsx)(T,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(K.a,{}),Object(x.jsxs)(g.a,{children:["Searched Books Length = ",n.length]}),Object(x.jsxs)(g.a,{children:["Book Title = ",o.volumeInfo.title,Object(x.jsx)("br",{}),"Book Subtitle = ",o.volumeInfo.subtitle,Object(x.jsx)("br",{}),"Book rating = ",Object(x.jsx)(N.a,{value:o.volumeInfo.averageRating,precision:.5,readOnly:!0})]})]})},Y=function(e){return Object(x.jsx)(j.a,{children:Object(x.jsx)(u.d,{children:Object(x.jsxs)(u.b,{path:"/",element:Object(x.jsx)(O,{}),children:[Object(x.jsx)(u.b,{index:!0,element:Object(x.jsx)(w,{})}),Object(x.jsx)(u.b,{path:"search",element:Object(x.jsx)(H,{})}),Object(x.jsx)(u.b,{path:"book",element:Object(x.jsx)(Q,{})}),Object(x.jsx)(u.b,{path:"test",element:Object(x.jsx)(X,{})})]})})})};var Z=function(){return Object(x.jsx)(c.a,{theme:l,children:Object(x.jsx)(Y,{})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,163)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),r(e),a(e)}))};a.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(Z,{})}),document.getElementById("root")),$()},95:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.42910780.chunk.js.map