(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a.n(o),c=a(33),s=a(4),m=a(34),l=a(18),u=a(10),d=a(8),v=a(2);function g(e,t){return e.filter(function(e){return e.Name.toLowerCase().includes(t.toLowerCase())})}function f(e){return e.reverse(),e=e.map(function(e,t){return e.Id=e.LetterboxdURI.length?e.LetterboxdURI.split("/film/")[1].split("/")[0]:t.toString(),e.Name=e.Name.toString(),e.DateFormatted=new Date(e.Date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),e.WatchedDate&&(e.WatchedDateFormatted=new Date(e.WatchedDate).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})),e})}var b=function(){return fetch("https://saviomd.com/movieratings/data/diary.json").then(function(e){if(!e.ok)throw Error(e.status);return e.json()})},h=r.a.createContext(),E={movieDiary:[],movieDiaryPage:1,movieDiarySearchString:"",movieDiaryStatus:""},p=function(e){var t=e.children,a=Object(n.useState)(E),o=Object(s.a)(a,2),i=o[0],c=o[1];function m(){return g(i.movieDiary,i.movieDiarySearchString)}function l(){var e=100*i.movieDiaryPage;return m().slice(0,e)}function u(){var e=i.movieDiary.reduce(function(e,t){var a=t.WatchedDate.split("-")[0];return e[a]?e[a]++:e[a]=1,e},{}),t=0;for(var a in e)t=e[a]>t?e[a]:t;return{groups:e,max:t}}function d(){var e=i.movieDiaryPage;c(function(t){return Object(v.a)({},t,{movieDiaryPage:e+1})})}function p(e){e.trim().toLowerCase(),c(function(t){return Object(v.a)({},t,{movieDiarySearchString:e})})}Object(n.useEffect)(function(){c(function(e){return Object(v.a)({},e,{movieDiaryStatus:"loading"})}),b().then(function(e){var t=f(e);return c(function(e){return Object(v.a)({},e,{movieDiary:t,movieDiaryStatus:"loaded"})}),t}).catch(function(e){c(function(e){return Object(v.a)({},e,{movieDiaryStatus:"error"})}),console.log(e.message)})},[]);var y=Object(n.useMemo)(function(){return Object(v.a)({},i,{getMovieDiaryFiltered:m,getMovieDiaryPaginated:l,getMoviesPerYearWatched:u,increaseMovieDiaryPage:d,setMovieDiarySearchString:p})},[i]);return r.a.createElement(h.Provider,{value:y},t)},y=function(){return fetch("https://saviomd.com/movieratings/data/ratings.json").then(function(e){if(!e.ok)throw Error(e.status);return e.json()})},S=r.a.createContext(),N={movieRatings:[],movieRatingsPage:1,movieRatingsSearchString:"",movieRatingsStatus:""},w=function(e){var t=e.children,a=Object(n.useState)(N),o=Object(s.a)(a,2),i=o[0],c=o[1];function m(){return g(i.movieRatings,i.movieRatingsSearchString)}function l(){var e=100*i.movieRatingsPage;return m().slice(0,e)}function u(){var e=i.movieRatings.reduce(function(e,t){var a="".concat(t.Year.toString().substr(0,3),"0");return e[a]?e[a]++:e[a]=1,e},{}),t=0;for(var a in e)t=e[a]>t?e[a]:t;return{groups:e,max:t}}function d(){var e=i.movieRatings.reduce(function(e,t){var a=t.Rating;return e[a]?e[a]++:e[a]=1,e},{}),t=0;for(var a in e)t=e[a]>t?e[a]:t;return{groups:e,max:t}}function b(){var e=i.movieRatingsPage;c(function(t){return Object(v.a)({},t,{movieRatingsPage:e+1})})}function h(e){e.trim().toLowerCase(),c(function(t){return Object(v.a)({},t,{movieRatingsSearchString:e})})}Object(n.useEffect)(function(){c(function(e){return Object(v.a)({},e,{movieRatingsStatus:"loading"})}),y().then(function(e){var t=f(e);return c(function(e){return Object(v.a)({},e,{movieRatings:t,movieRatingsStatus:"loaded"})}),t}).catch(function(e){c(function(e){return Object(v.a)({},e,{movieRatingsStatus:"error"})}),console.log(e.message)})},[]);var E=Object(n.useMemo)(function(){return Object(v.a)({},i,{getMovieRatingsFiltered:m,getMovieRatingsPaginated:l,getMoviesPerDecadeReleased:u,getMoviesPerRatingGiven:d,increaseMovieRatingsPage:b,setMovieRatingsSearchString:h})},[i]);return r.a.createElement(S.Provider,{value:E},t)},D=Object(n.memo)(function(){var e=Object(n.useMemo)(function(){return(new Date).getFullYear()});return r.a.createElement("footer",{className:"border-secondary border-top mb-3 pt-3 small text-center"},"\xa9 2017-",e,r.a.createElement("a",{className:"ml-1 text-danger",href:"http://saviomd.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"saviomd.com",className:"mr-1",src:"https://saviomd.com/img/favicon.png",height:"15",width:"15"}),"S\xe1vio Mendes"))}),j=a(32),x=a(5),O=function(e){var t=e.link;return r.a.createElement(j.a,{to:t.path,exact:!0,activeClassName:"active",className:"btn btn-danger btn-sm"},r.a.createElement(x.a,{icon:t.icon}),r.a.createElement("span",{className:"d-none d-sm-inline-block ml-1"},t.name))},R=function(e){var t=e.navLinks;return r.a.createElement("nav",{className:"btn-group"},t.map(function(e){return r.a.createElement(O,{key:e.path,link:e})}))},M=function(e){var t=e.navLinks;return r.a.createElement("header",{className:"border-bottom border-secondary mb-3"},r.a.createElement("div",{className:"align-items-center my-2 row"},r.a.createElement("h1",{className:"col-auto h5 mb-0"},r.a.createElement(j.a,{to:"/",exact:!0,className:"text-white"},"Movie Ratings")),r.a.createElement("div",{className:"col text-right"},r.a.createElement(R,{navLinks:t}))))},P={img:{attributionUrl:"https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png",baseUrl:"https://image.tmdb.org/t/p/",backdropSize:"w1280",fallbackUrl:"https://www.themoviedb.org/assets/1/v4/logos/293x302-powered-by-square-blue-ee05c47ab249273a6f9f1dcafec63daba386ca30544567629deb1809395d8516.png",posterSize:"w780"},key:"api_key=6f875d4fba2e999f480afa6275a08f75",pathSearchMovies:"search/movie",url:"https://api.themoviedb.org/3/"},k=function(e){return fetch("".concat(P.url).concat(P.pathSearchMovies,"?").concat(P.key,"&query=").concat(e.Name,"&year=").concat(e.Year)).then(function(e){if(!e.ok)throw Error(e.status);return e.json()})},F=r.a.createContext(),C={movieInfo:{backdrop_url:P.img.fallbackUrl,id:"",LetterboxdURI:"",overview:"",poster_url:P.img.fallbackUrl,Rating:"",title:"",vote_average:""},movieInfoStatus:""},I=function(e){var t=e.children,a=e.movie,o=Object(n.useState)(C),i=Object(s.a)(o,2),c=i[0],m=i[1];Object(n.useEffect)(function(){!function(e){void 0!==e&&(m(function(e){return Object(v.a)({},e,{movieInfoStatus:"loading"})}),k(e).then(function(t){if(!t.results.length)throw Error("No movie found");var a=t.results.find(function(t){return t.title===e.Name&&t.release_date.indexOf(e.Year)>-1});if(void 0===a)throw Error("No movie found");m(function(t){return Object(v.a)({},t,{movieInfoStatus:"loaded",movieInfo:{backdrop_url:P.img.baseUrl+P.img.backdropSize+a.backdrop_path,id:a.id,LetterboxdURI:e.LetterboxdURI,overview:a.overview,poster_url:P.img.baseUrl+P.img.posterSize+a.poster_path,Rating:e.Rating,title:a.title,vote_average:a.vote_average}})})}).catch(function(e){m(function(e){return Object(v.a)({},e,{movieInfoStatus:"error"})}),console.log(e.message)}))}(a)},[a]);var l=Object(n.useMemo)(function(){return c},[c]);return r.a.createElement(F.Provider,{value:l},t)},L=Object(n.memo)(function(e){var t=e.type,a={error:{icon:"sad-tear",text:"An error has ocurred"},loading:{icon:"hourglass-half",text:"Loading..."},noData:{icon:"frown",text:"No data to show"},noMovies:{icon:"frown",text:"No movies to show"},noStats:{icon:"frown",text:"No stats to show"},pageNotFound:{icon:"dizzy",text:"Page not found"}};return r.a.createElement("div",{className:"lead p-3 text-center"},r.a.createElement("div",{className:"h3 mb-3"},r.a.createElement("span",{className:"bg-secondary p-2 rounded"},r.a.createElement(x.a,{icon:a[t].icon}))),a[t].text)}),_=Object(n.memo)(function(e){var t=e.children,a=e.dataStatus,n=e.hasData,o=e.messageNoData;return r.a.createElement(r.a.Fragment,null,"loaded"===a&&n&&r.a.createElement(r.a.Fragment,null,t),"loaded"===a&&!n&&r.a.createElement(L,{type:o}),("loading"===a||"error"===a)&&r.a.createElement(L,{type:a}))});_.defaultProps={dataStatus:"",hasData:!0,messageNoData:"noData"};var U=_,W=function(){var e=Object(n.useContext)(F).movieInfo;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"p-3"},r.a.createElement("p",{className:"lead"},e.overview),r.a.createElement("div",{className:"text-right"},r.a.createElement("div",{className:"mb-3"},r.a.createElement("a",{className:"btn btn-danger btn-sm",href:e.LetterboxdURI,target:"_blank",rel:"noopener noreferrer"},"View movie at Letterboxd")),r.a.createElement("div",{className:"mb-3"},r.a.createElement("a",{className:"btn btn-danger btn-sm",href:"https://www.themoviedb.org/movie/".concat(e.id),target:"_blank",rel:"noopener noreferrer"},"View movie at TMDB")))),r.a.createElement("img",{alt:"backdrop for ".concat(e.title),className:"img-fluid rounded-bottom",src:e.backdrop_url}))},A=function(){var e=Object(n.useContext)(F).movieInfo;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"p-3 row"},r.a.createElement("div",{className:"col-6 col-sm-4"},r.a.createElement("img",{alt:"poster for ".concat(e.title),className:"img-fluid",src:e.poster_url})),r.a.createElement("div",{className:"col-6 col-sm-8 text-right"},r.a.createElement("div",{className:"mb-3"},e.Rating," of 5",r.a.createElement(x.a,{className:"ml-1 text-warning",icon:"star"}),r.a.createElement("div",{className:"small"},"by me")),r.a.createElement("div",{className:"mb-3"},e.vote_average," of 10",r.a.createElement(x.a,{className:"ml-1 text-warning",icon:"star"}),r.a.createElement("div",{className:"small"},"by TMDb users")))),r.a.createElement("h1",{className:"bg-secondary h3 mb-0 p-3"},e.title))},T=function(){var e=Object(n.useContext)(F),t=e.movieInfo,a=e.movieInfoStatus;return r.a.createElement(U,{dataStatus:a,hasData:""!==t.id},r.a.createElement("div",{className:"border border-secondary mb-3 rounded"},r.a.createElement(A,null),r.a.createElement(W,null)))},Y=function(e){var t=e.match,a=Object(n.useContext)(S),o=a.movieRatings,i=a.movieRatingsStatus,c=t.params.movieId,s=o.find(function(e){return e.Id===c});return r.a.createElement(U,{dataStatus:i},r.a.createElement(I,{movie:s},r.a.createElement(T,null)))},z=a(14),B=Object(n.memo)(function(e){var t,a=e.movie,n=e.type;return"Diary"===n&&a.WatchedDateFormatted?t="watched in ".concat(a.WatchedDateFormatted):"Ratings"===n&&a.DateFormatted&&(t="rated in ".concat(a.DateFormatted)),r.a.createElement(z.a,{className:"btn btn-secondary btn-block",to:"/movie/".concat(a.Id)},r.a.createElement("div",{className:"text-left text-truncate"},a.Name,r.a.createElement("span",{className:"ml-1 small"},"(",a.Year,")")),r.a.createElement("div",{className:"align-items-end row small"},r.a.createElement("div",{className:"col text-left text-warning"},Array.from(Array(a.Rating)).map(function(e,t){return r.a.createElement(x.a,{key:t,className:"mr-1",icon:"star"})})),r.a.createElement("div",{className:"col small text-right"},t)))}),G=Object(n.memo)(function(e){var t=e.type,a=Object(n.useState)({increasePage:null,moviesFiltered:[],moviesPaginated:[],moviesStatus:null}),o=Object(s.a)(a,2),i=o[0],c=o[1],m=Object(n.useContext)(h),l=m.getMovieDiaryFiltered,u=m.getMovieDiaryPaginated,d=m.increaseMovieDiaryPage,g=m.movieDiaryPage,f=m.movieDiarySearchString,b=m.movieDiaryStatus,E=Object(n.useContext)(S),p=E.getMovieRatingsFiltered,y=E.getMovieRatingsPaginated,N=E.increaseMovieRatingsPage,w=E.movieRatingsPage,D=E.movieRatingsSearchString,j=E.movieRatingsStatus;Object(n.useEffect)(function(){"Diary"===t?c(function(e){return Object(v.a)({},e,{increasePage:d,moviesFiltered:l(),moviesPaginated:u(),moviesStatus:b})}):"Ratings"===t&&c(function(e){return Object(v.a)({},e,{increasePage:N,moviesFiltered:p(),moviesPaginated:y(),moviesStatus:j})})},[g,f,b,w,D,j,t]);var x=i.increasePage,O=i.moviesFiltered,R=i.moviesPaginated,M=i.moviesStatus;return r.a.createElement(U,{dataStatus:M,hasData:!!O.length,messageNoData:"noMovies"},r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"list-unstyled"},R.map(function(e){return r.a.createElement("li",{className:"mb-3",key:e.Id},r.a.createElement(B,{movie:e,type:t}))})),R.length<O.length&&r.a.createElement("div",{className:"mb-3 text-center"},r.a.createElement("button",{className:"btn btn-danger",type:"button",onClick:x},"Show more"))))}),q=function(e){var t=e.type,a=Object(n.useState)({movieSearchString:"",moviesFiltered:[],setMovieSearchString:null}),o=Object(s.a)(a,2),i=o[0],c=o[1],m=Object(n.useContext)(h),l=m.getMovieDiaryFiltered,u=m.movieDiarySearchString,d=m.movieDiaryStatus,g=m.setMovieDiarySearchString,f=Object(n.useContext)(S),b=f.getMovieRatingsFiltered,E=f.movieRatingsSearchString,p=f.movieRatingsStatus,y=f.setMovieRatingsSearchString;Object(n.useEffect)(function(){"Diary"===t?c(function(e){return Object(v.a)({},e,{movieSearchString:u,moviesFiltered:l(),setMovieSearchString:g})}):"Ratings"===t&&c(function(e){return Object(v.a)({},e,{movieSearchString:E,moviesFiltered:b(),setMovieSearchString:y})})},[u,d,E,p,t]);var N=i.movieSearchString,w=i.moviesFiltered,D=i.setMovieSearchString;return r.a.createElement("div",{className:"mb-3"},r.a.createElement("div",{className:"input-group input-group-sm mb-1"},r.a.createElement("input",{id:"search-movie",className:"form-control",placeholder:"Search...",type:"text",value:N,onChange:function(e){return D(e.target.value)}}),r.a.createElement("span",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:function(){return D("")}},r.a.createElement(x.a,{icon:"times"})))),r.a.createElement("p",{className:"small text-right"},w.length," movies"))},J=function(e){var t=e.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"h4"},t),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-4"},r.a.createElement(q,{type:t})),r.a.createElement("div",{className:"col-12 col-sm-8"},r.a.createElement(G,{type:t}))))},V=function(){return r.a.createElement(L,{type:"pageNotFound"})},$=Object(n.memo)(function(e){var t=e.width;return r.a.createElement("div",{className:"bg-secondary rounded"},r.a.createElement("div",{className:"bg-danger pb-2 rounded",style:{width:"".concat(t,"%")}}))}),H=Object(n.memo)(function(e){var t=e.getMovies,a=e.moviesStatus,n=e.type,o=t();return r.a.createElement(U,{dataStatus:a,hasData:!!o.groups,messageNoData:"noStats"},r.a.createElement("ul",{className:"list-unstyled"},Object.entries(o.groups).reverse().map(function(e){var t=Object(s.a)(e,2),a=t[0],i=t[1],c=100*i/o.max;return r.a.createElement("li",{className:"mb-2",key:a},r.a.createElement("div",{className:"no-gutters row"},r.a.createElement("div",{className:"col-auto"},function(){if("moviesPerRatingGiven"===n){for(var e=[],t=0;t<a;t++)e.push(r.a.createElement(x.a,{key:t,className:"mr-1 text-warning",icon:"star"}));return e}return a}()),r.a.createElement("div",{className:"col font-weight-bold text-right"},i)),r.a.createElement($,{width:c}))})))}),K=function(){var e=Object(n.useContext)(h),t=e.getMoviesPerYearWatched,a=e.movieDiaryStatus,o=Object(n.useContext)(S),i=o.getMoviesPerDecadeReleased,c=o.getMoviesPerRatingGiven,s=o.movieRatingsStatus;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"h4"},"Stats"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 mb-3"},r.a.createElement("div",{className:"border border-secondary p-3 rounded"},r.a.createElement("h1",{className:"h5"},"Per year watched"),r.a.createElement(H,{getMovies:t,moviesStatus:a,type:"moviesPerYearWatched"}))),r.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 mb-3"},r.a.createElement("div",{className:"border border-secondary p-3 rounded"},r.a.createElement("h1",{className:"h5"},"Per rating given"),r.a.createElement(H,{getMovies:c,moviesStatus:s,type:"moviesPerRatingGiven"}))),r.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 mb-3"},r.a.createElement("div",{className:"border border-secondary p-3 rounded"},r.a.createElement("h1",{className:"h5"},"Per decade released"),r.a.createElement(H,{getMovies:i,moviesStatus:s,type:"moviesPerDecadeReleased"})))))},Q=Object(n.memo)(function(){return r.a.createElement("div",{className:"border-secondary border-top pt-3 small text-center"},r.a.createElement("div",{className:"mb-3"},"My Ratings and Diary data are exported from Letterboxd from time to time.",r.a.createElement("br",null),"So my ",r.a.createElement("a",{className:"text-danger",href:"https://letterboxd.com/saviomd",target:"_blank",rel:"noopener noreferrer"},"profile")," will have more up to date information."),r.a.createElement("div",{className:"mb-3"},r.a.createElement("img",{alt:"Powered by TMDB",src:P.img.attributionUrl,height:"38"}),r.a.createElement("br",null),"This product uses the TMDb API but is not endorsed or certified by TMDb."))});a(30);u.b.add(d.a,d.b,d.c,d.d,d.e,d.f,d.g,d.h);var X=function(){var e=Object(n.useState)({navLinks:[{icon:"star",name:"Ratings",path:"/"},{icon:"calendar-alt",name:"Diary",path:"/diary"},{icon:"chart-bar",name:"Stats",path:"/stats"}]}),t=Object(s.a)(e,1)[0];return r.a.createElement(p,null,r.a.createElement(w,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"justify-content-center row"},r.a.createElement("div",{className:"col-12 col-md-10"},r.a.createElement(M,{navLinks:t.navLinks}),r.a.createElement(m.a,null,r.a.createElement(l.a,{path:"/",exact:!0,render:function(){return r.a.createElement(J,{type:"Ratings"})}}),r.a.createElement(l.a,{path:"/diary",render:function(){return r.a.createElement(J,{type:"Diary"})}}),r.a.createElement(l.a,{path:"/movie/:movieId",render:function(e){var t=e.match;return r.a.createElement(Y,{match:t})}}),r.a.createElement(l.a,{path:"/stats",component:K}),r.a.createElement(l.a,{component:V})),r.a.createElement(Q,null),r.a.createElement(D,null))))))},Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var te=r.a.createElement(c.a,null,r.a.createElement(X,null));i.a.render(te,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/movieratings",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/movieratings","/service-worker.js");Z?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ee(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ee(t,e)})}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.acdcf38d.chunk.js.map