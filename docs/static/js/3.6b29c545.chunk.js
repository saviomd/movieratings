(this.webpackJsonpmovieratings=this.webpackJsonpmovieratings||[]).push([[3],{39:function(e,t,a){"use strict";a(0);var r=a(1),n=function(e){var t=e.children;return Object(r.jsx)("ul",{className:"flex-nowrap g-3 list-unstyled row",style:{overflowX:"scroll",WebkitOverflowScrolling:"touch"},children:t})};t.a=n},42:function(e,t,a){"use strict";a.r(t);var r=a(18);var n=a(11);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=a(0),i=a(2),l=a(6),o=a(4),d=a(23),u=function(e){var t=e.path,a=e.queryString,r=void 0===a?"":a,n=d.a.url,c=d.a.key;return fetch("".concat(n).concat(t,"?api_key=").concat(c).concat(r)).then((function(e){if(!e.ok)throw Error(e.status);return e.json()}))},m=d.a.methods,b=m.movieDetails,j=m.searchMovies,v=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),h=function(e){var t=e.value;return t?"US".concat(v.format(t)):"--"},p=a(19),O=function(e){var t=e.credits;return Object(o.a)(Object(o.a)({},t),{},{cast:null===t||void 0===t?void 0:t.cast.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{tmdbURI:"https://www.themoviedb.org/person/".concat(e.id)})})),crew:null===t||void 0===t?void 0:t.crew.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{tmdbURI:"https://www.themoviedb.org/person/".concat(e.id)})}))})},f=d.a.img.poster,x=function(e){return e.movies.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{poster_url:f({path:e.poster_path}),tmdbURI:"https://www.themoviedb.org/movie/".concat(e.id)})}))},g=d.a.img,y=g.backdrop,N=g.poster,w=function(e){var t=e.movie,a=e.movieDetails;return Object(o.a)(Object(o.a)({},a),{},{backdrop_url:y({path:a.backdrop_path}),budget:h({value:a.budget}),credits:O({credits:a.credits}),LetterboxdURI:t.LetterboxdURI,original_language:a.original_language.toUpperCase(),poster_url:N({path:a.poster_path}),Rating:t.Rating,recommendations:x({movies:a.recommendations.results}),release_date:Object(p.a)({date:a.release_date}),release_year:a.release_date.split("-")[0],revenue:h({value:a.revenue}),tmdbURI:"https://www.themoviedb.org/movie/".concat(a.id)})},_=a(1),D=Object(s.createContext)(),k=function(){return Object(s.useContext)(D)},I={movieDetails:{},movieDetailsStatus:""};function R(e,t){switch(t.type){case"setMovieDetails":return Object(o.a)(Object(o.a)({},e),{},{movieDetails:t.payload,movieDetailsStatus:"loaded"});case"setMovieDetailsStatus":return Object(o.a)(Object(o.a)({},e),{},{movieDetailsStatus:t.payload});default:throw new Error}}var S=function(e){var t=e.children,a=e.movie,r=Object(s.useReducer)(R,I),n=Object(l.a)(r,2),c=n[0],i=n[1],o=Object(s.useCallback)((function(){if(void 0!==a){var e=a.Name,t=a.Year;i({type:"setMovieDetailsStatus",payload:"loading"}),function(e){var t=e.Name,a=e.Year;return u({path:j(),queryString:"&query=".concat(t,"&year=").concat(a)})}({Name:e,Year:t}).then((function(r){if(!r.results.length)throw Error("No movie found");var n=r.results.find((function(a){return a.title===e&&a.release_date.indexOf(t)>-1}));if(void 0===n)throw Error("No movie found");(function(e){var t=e.movieId;return u({path:b({movieId:t}),queryString:"&append_to_response=credits,recommendations"})})({movieId:n.id}).then((function(e){i({type:"setMovieDetails",payload:w({movie:a,movieDetails:e})})}))})).catch((function(){i({type:"setMovieDetailsStatus",payload:"error"})}))}else i({type:"setMovieDetailsStatus",payload:"error"})}),[a]);Object(s.useEffect)((function(){o()}),[o]);var d=Object(s.useMemo)((function(){return c}),[c]);return Object(_.jsx)(D.Provider,{value:d,children:t})};S.defaultProps={movie:void 0};var U=a(21),M=a(22),q=a(24),C=a(8),E=function(e){var t=e.src,a=e.title,r=e.type,n={backdrop:{height:300,width:533},poster:{height:450,width:300}}[r],c={paddingTop:"".concat(n.height/n.width*100,"%")};return Object(_.jsx)("div",{className:"bg-secondary ratio text-white",style:c,children:t?Object(_.jsx)("img",{alt:"".concat(r," for ").concat(a),loading:"lazy",src:t}):Object(_.jsx)("div",{className:"p-3 text-center",children:"No ".concat(r," available for ").concat(a)})})};E.defaultProps={src:null};var A=E,P=a(39),L=function(){var e=k().movieDetails;return e.credits?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("h2",{className:"h4",children:["Cast",Object(_.jsx)(C.a,{className:"ms-1 small",icon:"external-link-alt"})]}),e.credits.cast.length?Object(_.jsx)(P.a,{children:e.credits.cast.map((function(e){return Object(_.jsx)("li",{className:"col-auto",children:Object(_.jsxs)("a",{className:"btn btn-secondary btn-sm",href:e.tmdbURI,rel:"noopener noreferrer",target:"_blank",children:[e.name,Object(_.jsx)("div",{className:"small",children:e.character})]})},e.credit_id)}))}):Object(_.jsx)("p",{children:"No data available"}),Object(_.jsxs)("h2",{className:"h4",children:["Crew",Object(_.jsx)(C.a,{className:"ms-1 small",icon:"external-link-alt"})]}),e.credits.crew.length?Object(_.jsx)(P.a,{children:e.credits.crew.map((function(e){return Object(_.jsx)("li",{className:"col-auto",children:Object(_.jsxs)("a",{className:"btn btn-secondary btn-sm",href:e.tmdbURI,rel:"noopener noreferrer",target:"_blank",children:[e.name,Object(_.jsx)("div",{className:"small",children:e.job})]})},e.credit_id)}))}):Object(_.jsx)("p",{children:"No data available"})]}):null},T=a(12),F=function(){var e=k().movieDetails;return e.recommendations.length?Object(_.jsxs)("div",{className:"p-3",children:[Object(_.jsxs)("h2",{className:"h4",children:["Recommendations",Object(_.jsx)(C.a,{className:"ms-1 small",icon:"external-link-alt"})]}),Object(_.jsx)(P.a,{children:e.recommendations.map((function(e){return Object(_.jsx)("li",{className:"col-5 col-md-3 col-lg-2",children:Object(_.jsxs)(T.a,{href:e.tmdbURI,target:"_blank",children:[Object(_.jsx)(A,{src:e.poster_url,title:e.title,type:"poster"}),e.title]})},e.id)}))})]}):null},Y=function(){var e=k().movieDetails,t=e.runtime,a=e.release_date,r=e.genres,n=e.budget,c=e.revenue,s=e.production_companies,i=e.production_countries,l=e.spoken_languages,o=[{title:"Runtime",value:"".concat(t," minutes")},{title:"Release date",value:a},{title:"Genres",value:r.map((function(e){return e.name}))},{title:"Budget",value:n},{title:"Revenue",value:c},{title:"Production companies",value:s.map((function(e){return e.name}))},{title:"Production countries",value:i.map((function(e){return e.name}))},{title:"Spoken languages",value:l.map((function(e){return e.english_name}))}];return Object(_.jsx)(P.a,{children:o.map((function(e){var t=e.title,a=e.value;return Object(_.jsxs)("li",{className:"col-auto",children:[Object(_.jsx)("div",{children:t}),Array.isArray(a)?Object(_.jsx)("ul",{className:"fw-bold list-unstyled mb-0",children:a.map((function(e){return Object(_.jsx)("li",{children:Object(_.jsx)("span",{className:"badge bg-secondary",children:e})},e)}))}):Object(_.jsx)("div",{className:"fw-bold",children:a})]},t)}))})},J=function(){var e=k().movieDetails;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"p-3",children:[Object(_.jsxs)("div",{className:"animate__animated animate__fadeInUp mb-3 row",children:[Object(_.jsx)("div",{className:"col-6 col-lg-4",children:Object(_.jsx)(A,{src:e.poster_url,title:e.title,type:"poster"})}),Object(_.jsx)("div",{className:"col-12 col-sm-6 col-lg-8 lead",children:e.overview})]}),Object(_.jsx)(Y,{}),Object(_.jsx)(L,{}),e.tagline&&Object(_.jsx)("blockquote",{className:"blockquote px-5 text-center",children:'"'.concat(e.tagline,'"')})]}),Object(_.jsx)(A,{src:e.backdrop_url,title:e.title,type:"backdrop"}),Object(_.jsxs)("div",{className:"p-3 text-end",children:[Object(_.jsxs)("div",{children:["View movie at",Object(_.jsx)(C.a,{className:"ms-1 small",icon:"external-link-alt"})]}),Object(_.jsx)("ul",{className:"list-inline",children:[{href:"LetterboxdURI",name:"Letterboxd"},{href:"tmdbURI",name:"TMDb"}].map((function(t){var a=t.href,r=t.name;return Object(_.jsx)("li",{className:"list-inline-item",children:Object(_.jsx)("a",{className:"btn btn-danger btn-sm",href:e[a],target:"_blank",rel:"noopener noreferrer",children:r})},r)}))})]}),Object(_.jsx)(F,{})]})},z=function(){var e=k().movieDetails;return Object(_.jsxs)("div",{className:"bg-secondary p-3",children:[Object(_.jsxs)("h1",{className:"h3",children:[e.title,Object(_.jsxs)("span",{className:"font-italic ms-2 small",children:["(".concat(e.release_year),e.title!==e.original_title&&', "'.concat(e.original_title,'"'),")"]})]}),Object(_.jsxs)("div",{className:"small",children:[e.Rating," of 5",Object(_.jsx)(C.a,{className:"mx-1 text-warning",icon:"star"}),Object(_.jsx)("span",{className:"small",children:"by me"})]}),Object(_.jsxs)("div",{className:"small",children:[e.vote_average," of 10",Object(_.jsx)(C.a,{className:"mx-1 text-warning",icon:"star"}),Object(_.jsx)("span",{className:"small",children:"by ".concat(e.vote_count," TMDb users")})]})]})},B=function(){var e=k(),t=e.movieDetails,a=e.movieDetailsStatus;return Object(_.jsx)(q.a,{dataStatus:a,hasData:""!==t.id,children:Object(_.jsxs)("div",{className:"border border-secondary mb-3 rounded",children:[Object(_.jsx)(z,{}),Object(_.jsx)(J,{})]})})};t.default=function(){var e=Object(U.b)().movieDiary,t=Object(M.b)().movieRatings,a=Object(i.g)().movieId,r=[].concat(c(e),c(t)).find((function(e){return e.Id===a}));return Object(_.jsx)(S,{movie:r,children:Object(_.jsx)(B,{})})}}}]);
//# sourceMappingURL=3.6b29c545.chunk.js.map