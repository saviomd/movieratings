import{c as l,d as r,j as i,b as v,a as e,S as n,i as s}from"./index.bcedc8c5.js";function h(){const{moviesPerYearWatched:t,movieDiaryStatus:o}=l(),{moviesPerDecadeReleased:c,moviesPerRatingGiven:m,movieRatingsStatus:a}=r();return i(v,{children:[e("h1",{className:"h4",children:"Stats"}),i(n,{children:[e("div",{className:"col-9 col-sm-5 col-md-4",children:e(s,{movies:t,moviesStatus:o,type:"moviesPerYearWatched"})}),e("div",{className:"col-9 col-sm-5 col-md-4",children:e(s,{movies:m,moviesStatus:a,type:"moviesPerRatingGiven"})}),e("div",{className:"col-9 col-sm-5 col-md-4",children:e(s,{movies:c,moviesStatus:a,type:"moviesPerDecadeReleased"})})]})]})}export{h as default};
