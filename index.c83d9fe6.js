!function(){function n(n,e,t){return fetch(e+"?bread_ids=".concat(n),{headers:{"x-api-key":t}}).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}var e,t,r="live_56u4qZvUIrHjhxiTu1SE4yfg1ZrFNbVxDAI5Ukoi1SzrlcxkQYjymljiMumVZeEa",c=document.querySelector(".breed-select"),o=document.querySelector(".loader"),i=document.querySelector(".error"),a=document.querySelector(".cat-info");o.hidden=!0,i.hidden=!0,(e="https://api.thecatapi.com/v1/breeds",t=r,fetch(e,{headers:{"x-api-key":t}}).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))).then((function(n){!function(n){c.innerHTML=function(n){return n.map((function(n){var e=n.id,t=n.name;return"<option value='".concat(e,"'> ").concat(t,"</option>")}))}(n)}(n)})).catch((function(n){return n.hidden=!1})),c.addEventListener("change",(function(e){o.hidden=!1,n(e.target.value,"https://api.thecatapi.com/v1/images/search",r).then((function(n){!function(n){a.innerHTML=function(n){return n.map((function(n){var e=n.url,t=n.name,r=n.description,c=n.temperament;return o.hidden=!0,'<img src="'.concat(e,'" width=300px">\n    <div class="infoAboutCat">\n    <h2 class ="second-header">').concat(t,"</h2>\n    <p>").concat(r,"</p>\n <p>").concat(c,"</p>\n  <div>")}))}(n)}(n)})).catch((function(n){return n.hidden=!1}))}))}();
//# sourceMappingURL=index.c83d9fe6.js.map
