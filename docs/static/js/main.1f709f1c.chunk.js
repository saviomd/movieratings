(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),i=a.n(o),c=a(9),s=a(3),m=a(11),l=a(14),u=a(10),d=a(1);function v(e,t){return e.filter(function(e){return e.Name.toLowerCase().includes(t.toLowerCase())})}function g(e){return e.reverse(),e=e.map(function(e,t){return e.Id=e.LetterboxdURI.length?e.LetterboxdURI.split("/film/")[1].split("/")[0]:t.toString(),e.Name=e.Name.toString(),e.DateFormatted=new Date(e.Date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),e.WatchedDate&&(e.WatchedDateFormatted=new Date(e.WatchedDate).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})),e})}var f=function(){return fetch("https://saviomd.com/movieratings/data/diary.json").then(function(e){if(!e.ok)throw Error(e.status);return e.json()})},b=function(){return fetch("https://saviomd.com/movieratings/data/ratings.json").then(function(e){if(!e.ok)throw Error(e.status);return e.json()})},h=r.a.createContext(),p={movieDiary:[],movieDiaryPage:1,movieDiarySearchString:"",movieDiaryStatus:""},E=function(e){var t=e.children,a=Object(n.useState)(p),o=Object(s.a)(a,2),i=o[0],c=o[1],m=Object(n.useMemo)(function(){return v(i.movieDiary,i.movieDiarySearchString)},[i.movieDiary,i.movieDiarySearchString]),l=Object(n.useMemo)(function(){var e=100*i.movieDiaryPage;return m.slice(0,e)},[m,i.movieDiaryPage]),u=Object(n.useMemo)(function(){var e=i.movieDiary.reduce(function(e,t){var a=t.WatchedDate.split("-")[0];return e[a]?e[a]++:e[a]=1,e},{}),t=0;for(var a in e)t=e[a]>t?e[a]:t;return{groups:e,max:t}},[i.movieDiary]);function b(){var e=i.movieDiaryPage;c(function(t){return Object(d.a)({},t,{movieDiaryPage:e+1})})}function E(e){e.trim().toLowerCase(),c(function(t){return Object(d.a)({},t,{movieDiarySearchString:e})})}Object(n.useEffect)(function(){c(function(e){return Object(d.a)({},e,{movieDiaryStatus:"loading"})}),f().then(function(e){var t=g(e);return c(function(e){return Object(d.a)({},e,{movieDiary:t,movieDiaryStatus:"loaded"})}),t}).catch(function(e){c(function(e){return Object(d.a)({},e,{movieDiaryStatus:"error"})}),console.log(e.message)})},[]);var y=Object(n.useMemo)(function(){return Object(d.a)({},i,{increaseMovieDiaryPage:b,movieDiaryFiltered:m,movieDiaryPaginated:l,moviesPerYearWatched:u,setMovieDiarySearchString:E})},[i]);return r.a.createElement(h.Provider,{value:y},t)},y=r.a.createContext(),S={movieRatings:[],movieRatingsPage:1,movieRatingsSearchString:"",movieRatingsStatus:""},N=function(e){var t=e.children,a=Object(n.useState)(S),o=Object(s.a)(a,2),i=o[0],c=o[1],m=Object(n.useMemo)(function(){return v(i.movieRatings,i.movieRatingsSearchString)},[i.movieRatings,i.movieRatingsSearchString]),l=Object(n.useMemo)(function(){var e=100*i.movieRatingsPage;return m.slice(0,e)},[m,i.movieRatingsPage]),u=Object(n.useMemo)(function(){var e=i.movieRatings.reduce(function(e,t){var a="".concat(t.Year.toString().substr(0,3),"0");return e[a]?e[a]++:e[a]=1,e},{}),t=0;for(var a in e)t=e[a]>t?e[a]:t;return{groups:e,max:t}},[i.movieRatings]),f=Object(n.useMemo)(function(){var e=i.movieRatings.reduce(function(e,t){var a=t.Rating;return e[a]?e[a]++:e[a]=1,e},{}),t=0;for(var a in e)t=e[a]>t?e[a]:t;return{groups:e,max:t}},[i.movieRatings]);function h(){var e=i.movieRatingsPage;c(function(t){return Object(d.a)({},t,{movieRatingsPage:e+1})})}function p(e){e.trim().toLowerCase(),c(function(t){return Object(d.a)({},t,{movieRatingsSearchString:e})})}Object(n.useEffect)(function(){c(function(e){return Object(d.a)({},e,{movieRatingsStatus:"loading"})}),b().then(function(e){var t=g(e);return c(function(e){return Object(d.a)({},e,{movieRatings:t,movieRatingsStatus:"loaded"})}),t}).catch(function(e){c(function(e){return Object(d.a)({},e,{movieRatingsStatus:"error"})}),console.log(e.message)})},[]);var E=Object(n.useMemo)(function(){return Object(d.a)({},i,{increaseMovieRatingsPage:h,movieRatingsFiltered:m,movieRatingsPaginated:l,moviesPerDecadeReleased:u,moviesPerRatingGiven:f,setMovieRatingsSearchString:p})},[i]);return r.a.createElement(y.Provider,{value:E},t)},w=Object(n.memo)(function(){var e=Object(n.useMemo)(function(){return(new Date).getFullYear()});return r.a.createElement("footer",{className:"border-secondary border-top mb-3 pt-3 small text-center"},"\xa9 2017-",e,r.a.createElement("a",{className:"ml-1 text-danger",href:"http://saviomd.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"saviomd.com",className:"mr-1",src:"https://saviomd.com/img/favicon.png",height:"15",width:"15"}),"S\xe1vio Mendes"))}),j=a(5),O=function(e){var t=e.link;return r.a.createElement(c.c,{to:t.path,exact:!0,activeClassName:"active",className:"btn btn-danger btn-sm"},r.a.createElement(j.a,{icon:t.icon}),r.a.createElement("span",{className:"d-none d-sm-inline-block ml-1"},t.name))},R=function(e){var t=e.navLinks;return r.a.createElement("nav",{className:"btn-group"},t.map(function(e){return r.a.createElement(O,{key:e.path,link:e})}))},D=function(e){var t=e.navLinks;return r.a.createElement("header",{className:"border-bottom border-secondary mb-3"},r.a.createElement("div",{className:"align-items-center my-2 row"},r.a.createElement("h1",{className:"col-auto h5 mb-0"},r.a.createElement(c.c,{to:"/",exact:!0,className:"text-white"},"Movie Ratings")),r.a.createElement("div",{className:"col text-right"},r.a.createElement(R,{navLinks:t}))))},x={img:{attributionUrl:"https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png",baseUrl:"https://image.tmdb.org/t/p/",backdropSize:"w1280",fallbackUrl:"https://www.themoviedb.org/assets/1/v4/logos/293x302-powered-by-square-blue-ee05c47ab249273a6f9f1dcafec63daba386ca30544567629deb1809395d8516.png",posterSize:"w780"},key:"api_key=6f875d4fba2e999f480afa6275a08f75",pathMovieCredits:"movie/{movie_id}/credits",pathMovieRecommendations:"movie/{movie_id}/recommendations",pathSearchMovies:"search/movie",url:"https://api.themoviedb.org/3/"},k=function(e){var t="".concat(x.url).concat(x.pathMovieCredits,"?").concat(x.key).replace("{movie_id}",e);return fetch(t).then(function(e){if(!e.ok)throw Error(e.status);return e.json()})},P=function(e){return fetch("".concat(x.url).concat(x.pathSearchMovies,"?").concat(x.key,"&query=").concat(e.Name,"&year=").concat(e.Year)).then(function(e){if(!e.ok)throw Error(e.status);return e.json()})},M=function(e){var t="".concat(x.url).concat(x.pathMovieRecommendations,"?").concat(x.key).replace("{movie_id}",e);return fetch(t).then(function(e){if(!e.ok)throw Error(e.status);return e.json()})},C=r.a.createContext(),_={movieInfo:{backdrop_url:x.img.fallbackUrl,id:"",LetterboxdURI:"",overview:"",poster_url:x.img.fallbackUrl,Rating:"",title:"",vote_average:""},movieInfoStatus:""},I=function(e){var t=e.children,a=e.movie,o=Object(n.useState)(_),i=Object(s.a)(o,2),c=i[0],m=i[1];Object(n.useEffect)(function(){!function(e){void 0!==e&&(m(function(e){return Object(d.a)({},e,{movieInfoStatus:"loading"})}),P(e).then(function(t){if(!t.results.length)throw Error("No movie found");var a=t.results.find(function(t){return t.title===e.Name&&t.release_date.indexOf(e.Year)>-1});if(void 0===a)throw Error("No movie found");m(function(t){return Object(d.a)({},t,{movieInfoStatus:"loaded",movieInfo:{backdrop_url:a.backdrop_path?x.img.baseUrl+x.img.backdropSize+a.backdrop_path:null,id:a.id,LetterboxdURI:e.LetterboxdURI,overview:a.overview,poster_url:a.poster_path?x.img.baseUrl+x.img.posterSize+a.poster_path:null,Rating:e.Rating,title:a.title,tmdbURI:"https://www.themoviedb.org/movie/".concat(a.id),vote_average:a.vote_average}})})}).catch(function(e){m(function(e){return Object(d.a)({},e,{movieInfoStatus:"error"})}),console.log(e.message)}))}(a)},[a]);var l=Object(n.useMemo)(function(){return c},[c]);return r.a.createElement(C.Provider,{value:l},t)},F=Object(n.memo)(function(e){var t=e.type,a={error:{icon:"sad-tear",text:"An error has ocurred"},loading:{icon:"hourglass-half",text:"Loading..."},noData:{icon:"frown",text:"No data to show"},noMovies:{icon:"frown",text:"No movies to show"},noStats:{icon:"frown",text:"No stats to show"},pageNotFound:{icon:"dizzy",text:"Page not found"}};return r.a.createElement("div",{className:"lead p-3 text-center"},r.a.createElement("div",{className:"h3 mb-3"},r.a.createElement("span",{className:"bg-secondary p-2 rounded"},r.a.createElement(j.a,{icon:a[t].icon}))),a[t].text)}),U=Object(n.memo)(function(e){var t=e.children,a=e.dataStatus,n=e.hasData,o=e.messageNoData;return r.a.createElement(r.a.Fragment,null,"loaded"===a&&n&&r.a.createElement(r.a.Fragment,null,t),"loaded"===a&&!n&&r.a.createElement(F,{type:o}),("loading"===a||"error"===a)&&r.a.createElement(F,{type:a}))});U.defaultProps={dataStatus:"",hasData:!0,messageNoData:"noData"};var L=U,W=r.a.createContext(),T={movieCredits:{cast:[],crew:[],id:""},movieCreditsStatus:""},A=function(e){var t=e.children,a=e.movieId,o=Object(n.useState)(T),i=Object(s.a)(o,2),c=i[0],m=i[1];Object(n.useEffect)(function(){!function(e){m(function(e){return Object(d.a)({},e,{movieCreditsStatus:"loading"})}),k(e).then(function(e){e.cast.forEach(function(e){e.tmdbURI="https://www.themoviedb.org/person/".concat(e.id)}),e.crew.forEach(function(e){e.tmdbURI="https://www.themoviedb.org/person/".concat(e.id)}),m(function(t){return Object(d.a)({},t,{movieCredits:e,movieCreditsStatus:"loaded"})})}).catch(function(e){m(function(e){return Object(d.a)({},e,{movieCreditsStatus:"error"})}),console.log(e.message)})}(a)},[a]);var l=Object(n.useMemo)(function(){return Object(d.a)({},c)},[c]);return r.a.createElement(W.Provider,{value:l},t)},Y=r.a.createContext(),z={movieRecommendations:[],movieRecommendationsStatus:""},B=function(e){var t=e.children,a=e.movieId,o=Object(n.useState)(z),i=Object(s.a)(o,2),c=i[0],m=i[1];Object(n.useEffect)(function(){!function(e){m(function(e){return Object(d.a)({},e,{movieRecommendationsStatus:"loading"})}),M(e).then(function(e){e.results.forEach(function(e){e.poster_url=e.poster_path?x.img.baseUrl+x.img.posterSize+e.poster_path:null,e.tmdbURI="https://www.themoviedb.org/movie/".concat(e.id)}),m(function(t){return Object(d.a)({},t,{movieRecommendations:e.results,movieRecommendationsStatus:"loaded"})})}).catch(function(e){m(function(e){return Object(d.a)({},e,{movieRecommendationsStatus:"error"})}),console.log(e.message)})}(a)},[a]);var l=Object(n.useMemo)(function(){return Object(d.a)({},c)},[c]);return r.a.createElement(Y.Provider,{value:l},t)},G=function(e){var t=e.backdrop_url,a=e.title,n={paddingTop:"".concat(300/533*100,"%")};return r.a.createElement("div",{className:"bg-secondary embed-responsive text-white",style:n},t?r.a.createElement("img",{alt:"Backdrop for ".concat(a),className:"embed-responsive-item",src:t}):r.a.createElement("div",{className:"embed-responsive-item text-center"},"No backdrop available for ".concat(a)))},q=function(){var e=Object(n.useContext)(W),t=e.movieCredits,a=e.movieCreditsStatus,o={overflowX:"scroll",WebkitOverflowScrolling:"touch"};return r.a.createElement(L,{dataStatus:a,hasData:!!t.id},r.a.createElement("h2",{className:"h4"},"Cast"),t.cast.length?r.a.createElement("ul",{className:"flex-nowrap form-row list-unstyled mb-0",style:o},t.cast.map(function(e){return r.a.createElement("li",{className:"col-auto mb-3",key:e.credit_id},r.a.createElement("a",{className:"btn btn-secondary btn-sm",href:e.tmdbURI,rel:"noopener noreferrer",target:"_blank"},e.name,r.a.createElement("div",{className:"small"},e.character)))})):r.a.createElement("p",null,"No data available"),r.a.createElement("h2",{className:"h4"},"Crew"),t.crew.length?r.a.createElement("ul",{className:"flex-nowrap form-row list-unstyled mb-0",style:o},t.crew.map(function(e){return r.a.createElement("li",{className:"col-auto mb-3",key:e.credit_id},r.a.createElement("a",{className:"btn btn-secondary btn-sm",href:e.tmdbURI,rel:"noopener noreferrer",target:"_blank"},e.name,r.a.createElement("div",{className:"small"},e.job)))})):r.a.createElement("p",null,"No data available"))},J=function(e){var t=e.poster_url,a=e.title,n={paddingTop:"".concat(150,"%")};return r.a.createElement("div",{className:"bg-secondary embed-responsive text-white",style:n},t?r.a.createElement("img",{alt:"Poster for ".concat(a),className:"embed-responsive-item",src:t}):r.a.createElement("div",{className:"embed-responsive-item text-center"},"No poster available for ".concat(a)))},V=function(){var e=Object(n.useContext)(Y),t=e.movieRecommendations,a=e.movieRecommendationsStatus;return r.a.createElement(L,{dataStatus:a,hasData:!!t.length},r.a.createElement("div",{className:"p-3"},r.a.createElement("h2",{className:"h4"},"Recommendations"),r.a.createElement("ul",{className:"flex-nowrap form-row list-unstyled mb-0",style:{overflowX:"scroll",WebkitOverflowScrolling:"touch"}},t.map(function(e){return r.a.createElement("li",{className:"col-5 col-md-3 col-lg-2 mb-3",key:e.id},r.a.createElement("a",{className:"text-danger",href:e.tmdbURI,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(J,{poster_url:e.poster_url,title:e.title}),e.title))}))))},X=function(){var e=Object(n.useContext)(C).movieInfo;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"p-3"},r.a.createElement("p",{className:"lead"},e.overview),r.a.createElement(A,{movieId:e.id},r.a.createElement(q,null)),r.a.createElement("div",{className:"text-right"},r.a.createElement("div",{className:"mb-3"},r.a.createElement("a",{className:"btn btn-danger btn-sm",href:e.LetterboxdURI,target:"_blank",rel:"noopener noreferrer"},"View movie at Letterboxd")),r.a.createElement("div",{className:"mb-3"},r.a.createElement("a",{className:"btn btn-danger btn-sm",href:e.tmdbURI,target:"_blank",rel:"noopener noreferrer"},"View movie at TMDB")))),r.a.createElement(G,{backdrop_url:e.backdrop_url,title:e.title}),r.a.createElement(B,{movieId:e.id},r.a.createElement(V,null)))},$=function(){var e=Object(n.useContext)(C).movieInfo;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"p-3 row"},r.a.createElement("div",{className:"col-6 col-md-4 col-lg-3"},r.a.createElement(J,{poster_url:e.poster_url,title:e.title})),r.a.createElement("div",{className:"col text-right"},r.a.createElement("div",{className:"mb-3"},e.Rating," of 5",r.a.createElement(j.a,{className:"ml-1 text-warning",icon:"star"}),r.a.createElement("div",{className:"small"},"by me")),r.a.createElement("div",{className:"mb-3"},e.vote_average," of 10",r.a.createElement(j.a,{className:"ml-1 text-warning",icon:"star"}),r.a.createElement("div",{className:"small"},"by TMDb users")))),r.a.createElement("h1",{className:"bg-secondary h3 mb-0 p-3"},e.title))},H=function(){var e=Object(n.useContext)(C),t=e.movieInfo,a=e.movieInfoStatus;return r.a.createElement(L,{dataStatus:a,hasData:""!==t.id},r.a.createElement("div",{className:"border border-secondary mb-3 rounded"},r.a.createElement($,null),r.a.createElement(X,null)))},K=function(e){var t=e.match,a=Object(n.useContext)(y),o=a.movieRatings,i=a.movieRatingsStatus,c=t.params.movieId,s=o.find(function(e){return e.Id===c});return r.a.createElement(L,{dataStatus:i},r.a.createElement(I,{movie:s},r.a.createElement(H,null)))},Q=Object(n.memo)(function(e){var t,a=e.movie,n=e.type;return"Diary"===n&&a.WatchedDateFormatted?t="watched in ".concat(a.WatchedDateFormatted):"Ratings"===n&&a.DateFormatted&&(t="rated in ".concat(a.DateFormatted)),r.a.createElement(c.b,{className:"btn btn-secondary btn-block",to:"/movie/".concat(a.Id)},r.a.createElement("div",{className:"text-left text-truncate"},a.Name,r.a.createElement("span",{className:"ml-1 small"},"(",a.Year,")")),r.a.createElement("div",{className:"align-items-end row small"},r.a.createElement("div",{className:"col text-left text-warning"},Array.from(Array(a.Rating)).map(function(e,t){return r.a.createElement(j.a,{key:t,className:"mr-1",icon:"star"})})),r.a.createElement("div",{className:"col small text-right"},t)))}),Z=Object(n.memo)(function(e){var t=e.type,a=Object(n.useState)({increasePage:null,moviesFiltered:[],moviesPaginated:[],moviesStatus:null}),o=Object(s.a)(a,2),i=o[0],c=o[1],m=Object(n.useContext)(h),l=m.increaseMovieDiaryPage,u=m.movieDiaryFiltered,v=m.movieDiaryPage,g=m.movieDiaryPaginated,f=m.movieDiarySearchString,b=m.movieDiaryStatus,p=Object(n.useContext)(y),E=p.increaseMovieRatingsPage,S=p.movieRatingsFiltered,N=p.movieRatingsPage,w=p.movieRatingsPaginated,j=p.movieRatingsSearchString,O=p.movieRatingsStatus;Object(n.useEffect)(function(){"Diary"===t?c(function(e){return Object(d.a)({},e,{increasePage:l,moviesFiltered:u,moviesPaginated:g,moviesStatus:b})}):"Ratings"===t&&c(function(e){return Object(d.a)({},e,{increasePage:E,moviesFiltered:S,moviesPaginated:w,moviesStatus:O})})},[v,f,b,N,j,O,t]);var R=i.increasePage,D=i.moviesFiltered,x=i.moviesPaginated,k=i.moviesStatus;return r.a.createElement(L,{dataStatus:k,hasData:!!D.length,messageNoData:"noMovies"},r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"list-unstyled"},x.map(function(e){return r.a.createElement("li",{className:"mb-3",key:e.Id},r.a.createElement(Q,{movie:e,type:t}))})),x.length<D.length&&r.a.createElement("div",{className:"mb-3 text-center"},r.a.createElement("button",{className:"btn btn-danger",type:"button",onClick:R},"Show more"))))}),ee=function(e){var t=e.type,a=Object(n.useState)({movieSearchString:"",moviesFiltered:[],setMovieSearchString:null}),o=Object(s.a)(a,2),i=o[0],c=o[1],m=Object(n.useContext)(h),l=m.movieDiaryFiltered,u=m.movieDiarySearchString,v=m.movieDiaryStatus,g=m.setMovieDiarySearchString,f=Object(n.useContext)(y),b=f.movieRatingsFiltered,p=f.movieRatingsSearchString,E=f.movieRatingsStatus,S=f.setMovieRatingsSearchString;Object(n.useEffect)(function(){"Diary"===t?c(function(e){return Object(d.a)({},e,{movieSearchString:u,moviesFiltered:l,setMovieSearchString:g})}):"Ratings"===t&&c(function(e){return Object(d.a)({},e,{movieSearchString:p,moviesFiltered:b,setMovieSearchString:S})})},[u,v,p,E,t]);var N=i.movieSearchString,w=i.moviesFiltered,O=i.setMovieSearchString;return r.a.createElement("div",{className:"mb-3"},r.a.createElement("div",{className:"input-group mb-1"},r.a.createElement("input",{id:"search-movie",className:"form-control",placeholder:"Search...",type:"text",value:N,onChange:function(e){return O(e.target.value)}}),r.a.createElement("span",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:function(){return O("")}},r.a.createElement(j.a,{icon:"times"})))),r.a.createElement("p",{className:"small text-right"},w.length," movies"))},te=function(e){var t=e.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"h4"},t),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-4"},r.a.createElement(ee,{type:t})),r.a.createElement("div",{className:"col-12 col-sm-8"},r.a.createElement(Z,{type:t}))))},ae=function(){return r.a.createElement(F,{type:"pageNotFound"})},ne=Object(n.memo)(function(e){var t=e.width;return r.a.createElement("div",{className:"bg-secondary rounded"},r.a.createElement("div",{className:"bg-danger pb-2 rounded",style:{width:"".concat(t,"%")}}))}),re=Object(n.memo)(function(e){var t=e.movies,a=e.moviesStatus,n=e.type;return r.a.createElement(L,{dataStatus:a,hasData:!!t.groups,messageNoData:"noStats"},r.a.createElement("ul",{className:"list-unstyled"},Object.entries(t.groups).reverse().map(function(e){var a=Object(s.a)(e,2),o=a[0],i=a[1],c=100*i/t.max;return r.a.createElement("li",{className:"mb-2",key:o},r.a.createElement("div",{className:"no-gutters row"},r.a.createElement("div",{className:"col-auto"},function(){if("moviesPerRatingGiven"===n){for(var e=[],t=0;t<o;t++)e.push(r.a.createElement(j.a,{key:t,className:"mr-1 text-warning",icon:"star"}));return e}return o}()),r.a.createElement("div",{className:"col font-weight-bold text-right"},i)),r.a.createElement(ne,{width:c}))})))}),oe=function(){var e=Object(n.useContext)(h),t=e.moviesPerYearWatched,a=e.movieDiaryStatus,o=Object(n.useContext)(y),i=o.moviesPerDecadeReleased,c=o.moviesPerRatingGiven,s=o.movieRatingsStatus;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"h4"},"Stats"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 mb-3"},r.a.createElement("div",{className:"border border-secondary p-3 rounded"},r.a.createElement("h1",{className:"h5"},"Per year watched"),r.a.createElement(re,{movies:t,moviesStatus:a,type:"moviesPerYearWatched"}))),r.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 mb-3"},r.a.createElement("div",{className:"border border-secondary p-3 rounded"},r.a.createElement("h1",{className:"h5"},"Per rating given"),r.a.createElement(re,{movies:c,moviesStatus:s,type:"moviesPerRatingGiven"}))),r.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 mb-3"},r.a.createElement("div",{className:"border border-secondary p-3 rounded"},r.a.createElement("h1",{className:"h5"},"Per decade released"),r.a.createElement(re,{movies:i,moviesStatus:s,type:"moviesPerDecadeReleased"})))))},ie=Object(n.memo)(function(){return r.a.createElement("div",{className:"border-secondary border-top pt-3 small text-center"},r.a.createElement("div",{className:"mb-3"},"My Ratings and Diary data are exported from Letterboxd from time to time.",r.a.createElement("br",null),"So my ",r.a.createElement("a",{className:"text-danger",href:"https://letterboxd.com/saviomd",target:"_blank",rel:"noopener noreferrer"},"profile")," will have more up to date information."),r.a.createElement("div",{className:"mb-3"},r.a.createElement("img",{alt:"Powered by TMDB",src:x.img.attributionUrl,height:"38"}),r.a.createElement("br",null),"This product uses the TMDb API but is not endorsed or certified by TMDb."))});a(38);l.b.add(u.a,u.b,u.c,u.d,u.e,u.f,u.g,u.h);var ce=function(){var e=Object(n.useState)({navLinks:[{icon:"star",name:"Ratings",path:"/"},{icon:"calendar-alt",name:"Diary",path:"/diary"},{icon:"chart-bar",name:"Stats",path:"/stats"}]}),t=Object(s.a)(e,1)[0];return r.a.createElement(E,null,r.a.createElement(N,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"justify-content-center row"},r.a.createElement("div",{className:"col-12 col-md-10"},r.a.createElement(D,{navLinks:t.navLinks}),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,render:function(){return r.a.createElement(te,{type:"Ratings"})}}),r.a.createElement(m.a,{path:"/diary",render:function(){return r.a.createElement(te,{type:"Diary"})}}),r.a.createElement(m.a,{path:"/movie/:movieId",render:function(e){var t=e.match;return r.a.createElement(K,{match:t})}}),r.a.createElement(m.a,{path:"/stats",component:oe}),r.a.createElement(m.a,{component:ae})),r.a.createElement(ie,null),r.a.createElement(w,null))))))},se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var le=r.a.createElement(c.a,null,r.a.createElement(ce,null));i.a.render(le,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/movieratings",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/movieratings","/service-worker.js");se?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):me(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):me(t,e)})}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.1f709f1c.chunk.js.map