import{c as g,d as p,k as M,r as P,j as R,b as f,a as e,l as x,L as D,M as y}from"./index-b78403e9.js";function j(){const{moviesPerYearWatched:v,movieDiaryStatus:d}=g(),{moviesPerDecadeReleased:c,moviesPerRatingGiven:l,movieRatings:r,movieRatingsStatus:o}=p(),{loadRandomMovies:n,randomMovies:m,randomMoviesStatus:i}=M(),u=[{movies:v,moviesStatus:d,type:"moviesPerYearWatched"},{movies:l,moviesStatus:o,type:"moviesPerRatingGiven"},{movies:c,moviesStatus:o,type:"moviesPerDecadeReleased"}];return P.useEffect(()=>{if(o==="loaded"&&i===""){const t=r.sort(()=>.5-Math.random()).slice(0,6).map(({LetterboxdURI:s,Name:a,Rating:h,Year:S})=>({LetterboxdURI:s,Name:a,Rating:h,Year:S}));n({movies:t})}},[n,r,o,i]),R(f,{children:[e("h1",{className:"h4",children:"Stats"}),u.map(({movies:t,moviesStatus:s,type:a})=>e("div",{className:"mb-3",children:e(x,{movies:t,moviesStatus:s,type:a})},a)),e(D,{dataStatus:i,hasData:!!m.length,children:e("div",{className:"row",children:m.map(({movie_path:t,Name:s,poster_url:a})=>e("div",{className:"col-6 col-sm-4 mb-3",children:e(y,{href:t,posterUrl:a,title:s})},s))})})]})}export{j as default};
