"use strict";(self.webpackChunkmovieratings=self.webpackChunkmovieratings||[]).push([[921],{545:function(e,s,a){a.d(s,{Z:function(){return i}});a(791);var r=a(184);var i=function(e){var s=e.children;return(0,r.jsx)("ul",{className:"flex-nowrap g-3 list-unstyled row",style:{overflowX:"scroll",WebkitOverflowScrolling:"touch"},children:s})}},921:function(e,s,a){a.r(s),a.d(s,{default:function(){return f}});var r=a(791),i=a(885),n=a(363),t=a(548),o=a(7),c=a.n(o),d=a(184),l=(0,r.memo)((function(e){var s=e.width;return(0,d.jsx)("div",{className:"bg-secondary overflow-hidden rounded",children:(0,d.jsx)("div",{className:"animate__animated animate__slideInLeft bg-danger pb-2 rounded",style:{width:"".concat(s,"%")}})})}));l.propTypes={width:c().oneOfType([c().number,c().string]).isRequired};var m=l,v={moviesPerDecadeReleased:"Per decade released",moviesPerRatingGiven:"Per rating given",moviesPerYearWatched:"Per year watched"},u=(0,r.memo)((function(e){var s=e.movies,a=e.moviesStatus,r=e.type;return(0,d.jsxs)("div",{className:"border border-secondary p-3 rounded",children:[(0,d.jsx)("h1",{className:"h5",children:v[r]}),(0,d.jsx)(t.Z,{dataStatus:a,hasData:!!s.groups,messageNoData:"noStats",children:(0,d.jsx)("ul",{className:"list-unstyled",children:Object.entries(s.groups).reverse().map((function(e){var a=(0,i.Z)(e,2),t=a[0],o=a[1],c=100*o/s.max;return(0,d.jsxs)("li",{className:"mb-2",children:[(0,d.jsxs)("div",{className:"g-0 row",children:[(0,d.jsx)("div",{className:"col",children:function(){if("moviesPerRatingGiven"===r){for(var e=[],s=0;s<t;s+=1)e.push((0,d.jsx)(n.G,{className:"me-1 text-warning",icon:"star"},s));return e}return t}()}),(0,d.jsx)("div",{className:"col-auto fw-bold",children:o})]}),(0,d.jsx)(m,{width:c})]},t)}))})})]})})),h=a(545),x=a(423),j=a(301);var f=function(){var e=(0,x.a)(),s=e.moviesPerYearWatched,a=e.movieDiaryStatus,r=(0,j.D)(),i=r.moviesPerDecadeReleased,n=r.moviesPerRatingGiven,t=r.movieRatingsStatus;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{className:"h4",children:"Stats"}),(0,d.jsxs)(h.Z,{children:[(0,d.jsx)("div",{className:"col-9 col-sm-5 col-md-4",children:(0,d.jsx)(u,{movies:s,moviesStatus:a,type:"moviesPerYearWatched"})}),(0,d.jsx)("div",{className:"col-9 col-sm-5 col-md-4",children:(0,d.jsx)(u,{movies:n,moviesStatus:t,type:"moviesPerRatingGiven"})}),(0,d.jsx)("div",{className:"col-9 col-sm-5 col-md-4",children:(0,d.jsx)(u,{movies:i,moviesStatus:t,type:"moviesPerDecadeReleased"})})]})]})}}}]);
//# sourceMappingURL=921.2b194e6c.chunk.js.map