function e(e,n,t){return fetch(n+`?bread_ids=${e}`,{headers:{"x-api-key":t}}).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const n=document.querySelector(".breed-select"),t=document.querySelector(".loader"),r=document.querySelector(".error"),i=document.querySelector(".cat-info");var o,a;t.hidden=!0,r.hidden=!0,(o="https://api.thecatapi.com/v1/breeds",a="live_56u4qZvUIrHjhxiTu1SE4yfg1ZrFNbVxDAI5Ukoi1SzrlcxkQYjymljiMumVZeEa",fetch(o,{headers:{"x-api-key":a}}).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>{!function(e){n.innerHTML=function(e){return e.map((({id:e,name:n})=>`<option value='${e}'> ${n}</option>`))}(e)}(e)})).catch((e=>e.hidden=!1)),n.addEventListener("change",(n=>{t.hidden=!1;e(n.target.value,"https://api.thecatapi.com/v1/images/search","live_56u4qZvUIrHjhxiTu1SE4yfg1ZrFNbVxDAI5Ukoi1SzrlcxkQYjymljiMumVZeEa").then((e=>{!function(e){i.innerHTML=function(e){return e.map((({url:e,name:n,description:r,temperament:i})=>(t.hidden=!0,`<img src="${e}" width=300px">\n    <div class="infoAboutCat">\n    <h2 class ="second-header">${n}</h2>\n    <p>${r}</p>\n <p>${i}</p>\n  <div>`)))}(e)}(e)})).catch((e=>e.hidden=!1))}));
//# sourceMappingURL=index.ce24fcb7.js.map
