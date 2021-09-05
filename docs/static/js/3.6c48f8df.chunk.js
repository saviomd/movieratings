(this.webpackJsonpmovieratings=this.webpackJsonpmovieratings||[]).push([[3],{52:function(e,t,a){"use strict";a.r(t);var r=a(22);var n=a(30);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=a(0),i=a(14),l=a(3),o=a(28),d=function(e){var t=e.path,a=e.queryString,r=void 0===a?"":a,n=o.a.url,c=o.a.key;return fetch("".concat(n).concat(t,"?api_key=").concat(c).concat(r)).then((function(e){if(!e.ok)throw Error(e.status);return e.json()}))},u=o.a.methods,m=u.movieDetails,b=u.searchMovies,j=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),v=function(e){var t=e.value;return t?"US".concat(j.format(t)):"--"},h=a(23),p=function(e){var t=e.credits;return Object(l.a)(Object(l.a)({},t),{},{cast:null===t||void 0===t?void 0:t.cast.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{tmdbURI:"https://www.themoviedb.org/person/".concat(e.id)})})),crew:null===t||void 0===t?void 0:t.crew.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{tmdbURI:"https://www.themoviedb.org/person/".concat(e.id)})}))})},O=o.a.img.poster,f=function(e){return e.movies.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{poster_url:O({path:e.poster_path}),tmdbURI:"https://www.themoviedb.org/movie/".concat(e.id)})}))},x=o.a.img,g=x.backdrop,y=x.poster,N=function(e){var t=e.movie,a=e.movieDetails;return Object(l.a)(Object(l.a)({},a),{},{backdrop_url:g({path:a.backdrop_path}),budget:v({value:a.budget}),credits:p({credits:a.credits}),LetterboxdURI:t.LetterboxdURI,original_language:a.original_language.toUpperCase(),poster_url:y({path:a.poster_path}),Rating:t.Rating,recommendations:f({movies:a.recommendations.results}),release_date:Object(h.a)({date:a.release_date}),release_year:a.release_date.split("-")[0],revenue:v({value:a.revenue}),tmdbURI:"https://www.themoviedb.org/movie/".concat(a.id)})},w=a(1),_=Object(s.createContext)(),D=function(){return Object(s.useContext)(_)},k={movieDetails:{},movieDetailsStatus:""};function I(e,t){switch(t.type){case"setMovieDetails":return Object(l.a)(Object(l.a)({},e),{},{movieDetails:t.payload,movieDetailsStatus:"loaded"});case"setMovieDetailsStatus":return Object(l.a)(Object(l.a)({},e),{},{movieDetailsStatus:t.payload});default:throw new Error}}var R=function(e){var t=e.children,a=e.movie,r=Object(s.useReducer)(I,k),n=Object(i.a)(r,2),c=n[0],l=n[1],o=Object(s.useCallback)((function(){if(void 0!==a){var e=a.Name,t=a.Year;l({type:"setMovieDetailsStatus",payload:"loading"}),function(e){var t=e.Name,a=e.Year;return d({path:b(),queryString:"&query=".concat(t,"&year=").concat(a)})}({Name:e,Year:t}).then((function(r){if(!r.results.length)throw Error("No movie found");var n=r.results.find((function(a){return a.title===e&&a.release_date.indexOf(t)>-1}));if(void 0===n)throw Error("No movie found");(function(e){var t=e.movieId;return d({path:m({movieId:t}),queryString:"&append_to_response=credits,recommendations"})})({movieId:n.id}).then((function(e){l({type:"setMovieDetails",payload:N({movie:a,movieDetails:e})})}))})).catch((function(){l({type:"setMovieDetailsStatus",payload:"error"})}))}else l({type:"setMovieDetailsStatus",payload:"error"})}),[a]);Object(s.useEffect)((function(){o()}),[o]);var u=Object(s.useMemo)((function(){return c}),[c]);return Object(w.jsx)(_.Provider,{value:u,children:t})};R.defaultProps={movie:void 0};var S=a(26),U=a(27),M=a(29),q=a(10),C=function(e){var t=e.src,a=e.title,r=e.type,n={backdrop:{height:300,width:533},poster:{height:450,width:300}}[r],c={paddingTop:"".concat(n.height/n.width*100,"%")};return Object(w.jsx)("div",{className:"bg-secondary ratio text-white",style:c,children:t?Object(w.jsx)("img",{alt:"".concat(r," for ").concat(a),loading:"lazy",src:t}):Object(w.jsx)("div",{className:"p-3 text-center",children:"No ".concat(r," available for ").concat(a)})})};C.defaultProps={src:null};var E=C,A=function(e){var t=e.children;return Object(w.jsx)("ul",{className:"flex-nowrap g-3 list-unstyled row",style:{overflowX:"scroll",WebkitOverflowScrolling:"touch"},children:t})},P=function(){var e=D().movieDetails;return e.credits?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("h2",{className:"h4",children:["Cast",Object(w.jsx)(q.a,{className:"ms-1 small",icon:"external-link-alt"})]}),e.credits.cast.length?Object(w.jsx)(A,{children:e.credits.cast.map((function(e){return Object(w.jsx)("li",{className:"col-auto",children:Object(w.jsxs)("a",{className:"btn btn-secondary btn-sm",href:e.tmdbURI,rel:"noopener noreferrer",target:"_blank",children:[e.name,Object(w.jsx)("div",{className:"small",children:e.character})]})},e.credit_id)}))}):Object(w.jsx)("p",{children:"No data available"}),Object(w.jsxs)("h2",{className:"h4",children:["Crew",Object(w.jsx)(q.a,{className:"ms-1 small",icon:"external-link-alt"})]}),e.credits.crew.length?Object(w.jsx)(A,{children:e.credits.crew.map((function(e){return Object(w.jsx)("li",{className:"col-auto",children:Object(w.jsxs)("a",{className:"btn btn-secondary btn-sm",href:e.tmdbURI,rel:"noopener noreferrer",target:"_blank",children:[e.name,Object(w.jsx)("div",{className:"small",children:e.job})]})},e.credit_id)}))}):Object(w.jsx)("p",{children:"No data available"})]}):null},L=a(16),T=function(){var e=D().movieDetails;return e.recommendations.length?Object(w.jsxs)("div",{className:"p-3",children:[Object(w.jsxs)("h2",{className:"h4",children:["Recommendations",Object(w.jsx)(q.a,{className:"ms-1 small",icon:"external-link-alt"})]}),Object(w.jsx)(A,{children:e.recommendations.map((function(e){return Object(w.jsx)("li",{className:"col-5 col-md-3 col-lg-2",children:Object(w.jsxs)(L.a,{href:e.tmdbURI,target:"_blank",children:[Object(w.jsx)(E,{src:e.poster_url,title:e.title,type:"poster"}),e.title]})},e.id)}))})]}):null},F=function(){var e=D().movieDetails,t=e.runtime,a=e.release_date,r=e.genres,n=e.budget,c=e.revenue,s=e.production_companies,i=e.production_countries,l=e.spoken_languages,o=[{title:"Runtime",value:"".concat(t," minutes")},{title:"Release date",value:a},{title:"Genres",value:r.map((function(e){return e.name}))},{title:"Budget",value:n},{title:"Revenue",value:c},{title:"Production companies",value:s.map((function(e){return e.name}))},{title:"Production countries",value:i.map((function(e){return e.name}))},{title:"Spoken languages",value:l.map((function(e){return e.english_name}))}];return Object(w.jsx)(A,{children:o.map((function(e){var t=e.title,a=e.value;return Object(w.jsxs)("li",{className:"col-auto",children:[Object(w.jsx)("div",{children:t}),Array.isArray(a)?Object(w.jsx)("ul",{className:"fw-bold list-unstyled mb-0",children:a.map((function(e){return Object(w.jsx)("li",{children:Object(w.jsx)("span",{className:"badge bg-secondary",children:e})},e)}))}):Object(w.jsx)("div",{className:"fw-bold",children:a})]},t)}))})},Y=function(){var e=D().movieDetails;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"p-3",children:[Object(w.jsxs)("div",{className:"animate__animated animate__fadeInUp mb-3 row",children:[Object(w.jsx)("div",{className:"col-6 col-lg-4",children:Object(w.jsx)(E,{src:e.poster_url,title:e.title,type:"poster"})}),Object(w.jsx)("div",{className:"col-12 col-sm-6 col-lg-8 lead",children:e.overview})]}),Object(w.jsx)(F,{}),Object(w.jsx)(P,{}),e.tagline&&Object(w.jsx)("blockquote",{className:"blockquote px-5 text-center",children:'"'.concat(e.tagline,'"')})]}),Object(w.jsx)(E,{src:e.backdrop_url,title:e.title,type:"backdrop"}),Object(w.jsxs)("div",{className:"p-3 text-end",children:[Object(w.jsxs)("div",{children:["View movie at",Object(w.jsx)(q.a,{className:"ms-1 small",icon:"external-link-alt"})]}),Object(w.jsx)("ul",{className:"list-inline",children:[{href:"LetterboxdURI",name:"Letterboxd"},{href:"tmdbURI",name:"TMDb"}].map((function(t){var a=t.href,r=t.name;return Object(w.jsx)("li",{className:"list-inline-item",children:Object(w.jsx)("a",{className:"btn btn-danger btn-sm",href:e[a],target:"_blank",rel:"noopener noreferrer",children:r})},r)}))})]}),Object(w.jsx)(T,{})]})},J=function(){var e=D().movieDetails;return Object(w.jsxs)("div",{className:"bg-secondary p-3",children:[Object(w.jsxs)("h1",{className:"h3",children:[e.title,Object(w.jsxs)("span",{className:"font-italic ms-2 small",children:["(".concat(e.release_year),e.title!==e.original_title&&', "'.concat(e.original_title,'"'),")"]})]}),Object(w.jsxs)("div",{className:"small",children:[e.Rating," of 5",Object(w.jsx)(q.a,{className:"mx-1 text-warning",icon:"star"}),Object(w.jsx)("span",{className:"small",children:"by me"})]}),Object(w.jsxs)("div",{className:"small",children:[e.vote_average," of 10",Object(w.jsx)(q.a,{className:"mx-1 text-warning",icon:"star"}),Object(w.jsx)("span",{className:"small",children:"by ".concat(e.vote_count," TMDb users")})]})]})},z=function(){var e=D(),t=e.movieDetails,a=e.movieDetailsStatus;return Object(w.jsx)(M.a,{dataStatus:a,hasData:""!==t.id,children:Object(w.jsxs)("div",{className:"border border-secondary mb-3 rounded",children:[Object(w.jsx)(J,{}),Object(w.jsx)(Y,{})]})})};t.default=function(e){var t=e.match,a=Object(S.b)().movieDiary,r=Object(U.b)().movieRatings,n=t.params.movieId,s=[].concat(c(a),c(r)).find((function(e){return e.Id===n}));return Object(w.jsx)(R,{movie:s,children:Object(w.jsx)(z,{})})}}}]);
//# sourceMappingURL=3.6c48f8df.chunk.js.map