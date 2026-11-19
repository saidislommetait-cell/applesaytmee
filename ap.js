
/* ===== MA’LUMOTLAR =====
 C(nom, wikiSahifa, tur, toifa, narx$, ot kuchi, moment Nm, 0-100 s, maks km/s, yoqilg‘i, dvigatel, uzatma, yuritma, sarf/masofa, o‘rindiq, yukxona, rang, tavsif)
 Barcha raqamlar taxminiy. Narxni/ma’lumotni shu yerda o‘zgartiring. */
const C=(n,w,t,c,p,hp,tq,acc,top,fuel,eng,tr,dr,cons,seat,trunk,col,d)=>({n,w,t,c,p,hp,tq,acc,top,fuel,eng,tr,dr,cons,seat,trunk,col,d,ev:fuel==="Elektr"});
const CARS=[
C("BMW 118i","BMW_1_Series","Hatchback","Sedan",36900,136,220,8.5,213,"Benzin","1.5L 3-silindrli turbo","7 pog‘onali DCT","Old","5.7 L/100 km",5,"380 L","#c9d1dc","Shahar uchun ixcham va chaqqon premium hatchback."),
C("BMW 220i Gran Coupé","BMW_2_Series","Sedan","Sedan",39900,156,230,7.9,225,"Benzin","1.5L 3-silindrli turbo","7 pog‘onali DCT","Old","6.0 L/100 km",5,"430 L","#2b4a8f","Kupe siluetidagi to‘rt eshikli, yoshlar uchun sport avtomobil."),
C("BMW 330i","BMW_3_Series","Sedan","Sedan",45900,255,400,5.6,250,"Benzin","2.0L 4-silindrli turbo","8 pog‘onali avtomat","Orqa","6.8 L/100 km",5,"480 L","#d8dde4","Sport sedanlar etalon­i: ideal boshqaruv va qulaylik."),
C("BMW 530i","BMW_5_Series","Sedan","Sedan",56900,255,400,6.1,250,"Benzin","2.0L 4-silindrli turbo","8 pog‘onali avtomat","Orqa","7.0 L/100 km",5,"530 L","#1a1d21","Biznes-klass: keng salon va ilg‘or yordamchi tizimlar."),
C("BMW 740i","BMW_7_Series","Sedan","Sedan",99900,375,520,5.1,250,"Benzin","3.0L 6-silindrli turbo (mild-hybrid)","8 pog‘onali avtomat","Orqa / xDrive","8.5 L/100 km",5,"515 L","#8f98a6","Flagman sedan: hashamat, massaj o‘rindiqlari, kinoteatr ekrani."),
C("BMW 430i Coupé","BMW_4_Series","Coupe","Coupe",52500,255,400,5.5,250,"Benzin","2.0L 4-silindrli turbo","8 pog‘onali avtomat","Orqa","7.0 L/100 km",4,"440 L","#c8472f","Ikki eshikli kupe — jozibali dizayn va sport xarakter."),
C("BMW 840i Coupé","BMW_8_Series","Coupe","Coupe",90900,335,500,4.9,250,"Benzin","3.0L 6-silindrli turbo","8 pog‘onali avtomat","Orqa / xDrive","8.5 L/100 km",4,"420 L","#6b7a8f","Gran turismo: yirik kupe, hashamat va tezlik uyg‘unligi."),
C("BMW Z4 sDrive30i","BMW_Z4","Roadster","Coupe",55200,255,400,5.1,250,"Benzin","2.0L 4-silindrli turbo","8 pog‘onali avtomat","Orqa","7.2 L/100 km",2,"281 L","#e5b100","Ochiq tomli ikki o‘rinli roadster — ozodlik tuyg‘usi."),
C("BMW X1","BMW_X1","SUV","SUV",41500,241,350,6.3,240,"Benzin","2.0L 4-silindrli turbo","7 pog‘onali DCT","xDrive (to‘liq)","7.5 L/100 km",5,"540 L","#9aa7b4","Ixcham krossover: yuqori o‘tirish va tejamkorlik."),
C("BMW X3","BMW_X3","SUV","SUV",49900,248,350,6.1,240,"Benzin","2.0L 4-silindrli turbo","8 pog‘onali avtomat","xDrive (to‘liq)","8.0 L/100 km",5,"570 L","#2e3a52","O‘rta o‘lchamli SUV: oila va sarguzasht uchun."),
C("BMW X5 xDrive40i","BMW_X5","SUV","SUV",68500,375,520,5.3,250,"Benzin","3.0L 6-silindrli turbo","8 pog‘onali avtomat","xDrive (to‘liq)","9.0 L/100 km",5,"650 L","#b9c4bd","Premium SUV: keng salon, kuchli dvigatel va qulaylik."),
C("BMW X6","BMW_X6","SUV Coupe","SUV",77900,375,520,5.2,250,"Benzin","3.0L 6-silindrli turbo","8 pog‘onali avtomat","xDrive (to‘liq)","9.3 L/100 km",5,"580 L","#4a1f2a","SUV va kupe aralashmasi — jasur, yarqiroq dizayn."),
C("BMW X7 xDrive40i","BMW_X7","SUV","SUV",88000,375,520,5.8,250,"Benzin","3.0L 6-silindrli turbo","8 pog‘onali avtomat","xDrive (to‘liq)","9.5 L/100 km",7,"326 L","#d8d2c6","Eng katta BMW: 7 o‘rinli, hashamatli SUV."),
C("BMW i4 eDrive35","BMW_i4","Elektr Gran Coupé","Elektr",52200,281,400,5.7,190,"Elektr","Elektr motor (orqa)","1 pog‘onali","Orqa","Masofa: ~483 km",5,"470 L","#5aa0e6","Elektr Gran Coupé: nol emissiya, BMW dinamikasi."),
C("BMW i5 eDrive40","BMW_i5","Elektr sedan","Elektr",67100,335,430,5.7,193,"Elektr","Elektr motor (orqa)","1 pog‘onali","Orqa","Masofa: ~582 km",5,"490 L","#e8edf5","5 Series ning to‘liq elektr varianti."),
C("BMW i7 xDrive60","BMW_i7","Elektr sedan","Elektr",124200,536,745,4.5,240,"Elektr","Ikki elektr motor","1 pog‘onali","To‘liq (AWD)","Masofa: ~625 km",5,"500 L","#3d4450","Elektr flagman: hashamat va ulkan 31.3″ orqa ekran."),
C("BMW iX xDrive50","BMW_iX","Elektr SUV","Elektr",87100,516,765,4.4,200,"Elektr","Ikki elektr motor","1 pog‘onali","To‘liq (AWD)","Masofa: ~630 km",5,"500 L","#7fa8a0","Kelajak dizayndagi elektr SUV."),
C("BMW M2","BMW_M2","Coupe","M",64000,453,550,4.1,250,"Benzin","3.0L 6-silindrli twin-turbo (S58)","8 pog‘onali M avtomat","Orqa","9.6 L/100 km",4,"390 L","#ff6a13","Eng ixcham M: sof haydash zavqi."),
C("BMW M3 Competition","BMW_M3","Sedan","M",82000,503,650,3.5,250,"Benzin","3.0L 6-silindrli twin-turbo (S58)","8 pog‘onali M avtomat","Orqa / M xDrive","10.2 L/100 km",5,"480 L","#2fa36b","Kundalik sedan ko‘rinishidagi poyga mashinasi."),
C("BMW M4 Competition","BMW_M4","Coupe","M",85000,503,650,3.5,250,"Benzin","3.0L 6-silindrli twin-turbo (S58)","8 pog‘onali M avtomat","Orqa / M xDrive","10.2 L/100 km",4,"440 L","#e0152f","Sport kupe: ulkan burilish barqarorligi va tovush."),
C("BMW M5","BMW_M5","Sedan","M",119500,717,1000,3.5,250,"Gibrid","4.4L V8 twin-turbo + elektr motor","8 pog‘onali M avtomat","To‘liq (M xDrive)","~3.3 L/100 km (gibrid)",5,"466 L","#1c69d4","Eng kuchli M sedan: 717 ot kuchi, V8 + gibrid.")
];
const RATE=12700; /* 1$ = so‘m (taxminiy, o‘zingiz yangilang) */

/* ===== YORDAMCHILAR ===== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const MEM={};const S=(k,v)=>{try{if(v===undefined)return JSON.parse(localStorage.getItem(k));localStorage.setItem(k,JSON.stringify(v))}catch(e){if(v!==undefined)MEM[k]=v;return MEM[k]}};
const st={f:"all",sort:"def",max:130000,q:"",cur:S("cur")||"USD",fav:S("fav")||[],cmp:[],mode:"reg"};
const money=n=>st.cur==="USD"?"$"+n.toLocaleString("en-US"):(n*RATE/1e6).toFixed(0)+" mln so‘m";
const moneyF=n=>st.cur==="USD"?"$"+Math.round(n).toLocaleString("en-US"):Math.round(n*RATE).toLocaleString("ru-RU")+" so‘m";
const shape=c=>/SUV/.test(c.t)?"suv":(c.c==="Coupe"&&c.n!=="BMW M3 Competition")?"coupe":"sedan";
function toast(m){const t=$("#toast");t.textContent=m;t.style.display="block";clearTimeout(toast.t);toast.t=setTimeout(()=>t.style.display="none",2200)}

/* ===== SVG ZAXIRA RASM (foto yuklanmasa) ===== */
const BODY={sedan:"M14 84 L24 66 Q34 60 66 56 L98 38 Q152 28 204 38 L240 56 Q272 60 284 72 L288 84 Z",suv:"M14 84 L22 60 L66 54 L88 30 Q150 24 218 30 L248 54 L282 62 L288 84 Z",coupe:"M14 84 L28 68 L80 58 L120 40 Q166 32 206 44 L252 60 L284 70 L288 84 Z"};
function carSVG(k,c,id){return`<svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="${c}" stop-opacity=".62"/></linearGradient></defs><ellipse cx="150" cy="98" rx="132" ry="6" fill="rgba(0,0,0,.25)"/><path d="${BODY[k]}" fill="url(#g${id})"/><path d="M104 54 L124 40 Q150 34 150 38 L150 54Z M156 38 Q190 36 206 42 L236 54 L156 54Z" fill="#0f1a2b" opacity=".85"/><rect x="262" y="70" width="22" height="5" rx="2" fill="#fff"/><rect x="16" y="70" width="14" height="5" rx="2" fill="#ff3b30"/><g><circle cx="78" cy="84" r="17" fill="#111"/><circle cx="78" cy="84" r="9" fill="#c5cbd3"/><circle cx="228" cy="84" r="17" fill="#111"/><circle cx="228" cy="84" r="9" fill="#c5cbd3"/></g></svg>`}

/* ===== HAQIQIY FOTOLAR (Wikipedia REST API, brauzerda yuklanadi) ===== */
const PH={};
function photo(w,sz){const k=w+sz;return PH[k]||(PH[k]=fetch("https://en.wikipedia.org/api/rest_v1/page/summary/"+w).then(r=>r.json()).then(j=>j.thumbnail?j.thumbnail.source.replace(/\/\d+px-/,"/"+sz+"px-"):null).catch(()=>null))}
function hydrate(root){$$("[data-w]",root).forEach(el=>{
 if(el.dataset.svg&&!el.firstChild)el.innerHTML=carSVG(el.dataset.svg,el.dataset.color,Math.random().toString(36).slice(2,7));
 photo(el.dataset.w,el.dataset.sz||"500").then(u=>{if(!u)return;const im=new Image();im.alt=el.dataset.alt||"BMW";im.onload=()=>{el.innerHTML="";el.appendChild(im);el.classList.add("photo")};im.src=u})})}
hydrate(document);

/* ===== KARUSEL ===== */
const slides=$$(".slide"),dots=$("#dots");let cur=0,timer;
slides.forEach((_,i)=>{const b=document.createElement("button");b.setAttribute("aria-label","Slayd "+(i+1));b.onclick=()=>{go(i);auto()};dots.appendChild(b)});
function go(i){cur=(i+slides.length)%slides.length;slides.forEach((s,k)=>s.classList.toggle("on",k===cur));[...dots.children].forEach((d,k)=>d.classList.toggle("on",k===cur))}
function auto(){clearInterval(timer);timer=setInterval(()=>go(cur+1),5500)}
$("#next").onclick=()=>{go(cur+1);auto()};$("#prev").onclick=()=>{go(cur-1);auto()};
let sx=0;const hero=$(".hero");hero.addEventListener("touchstart",e=>sx=e.touches[0].clientX,{passive:true});
hero.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50){go(cur+(d<0?1:-1));auto()}});
go(0);auto();

/* ===== MODELLAR RO‘YXATI ===== */
const cats={all:"Barchasi",Sedan:"Sedan",SUV:"SUV",Coupe:"Kupe",Elektr:"Elektr",M:"BMW M"};
Object.entries(cats).forEach(([k,v])=>{const b=document.createElement("button");b.textContent=v;b.dataset.f=k;$("#filters").appendChild(b)});
function render(){
 $$("#filters button").forEach(b=>b.classList.toggle("on",b.dataset.f===st.f));
 let a=CARS.map((x,i)=>({x,i})).filter(({x})=>(st.f==="all"||x.c===st.f)&&x.p<=st.max&&(!st.q||x.n.toLowerCase().includes(st.q)));
 const so={pa:(a,b)=>a.x.p-b.x.p,pd:(a,b)=>b.x.p-a.x.p,hp:(a,b)=>b.x.hp-a.x.hp,ac:(a,b)=>a.x.acc-b.x.acc}[st.sort];if(so)a.sort(so);
 $("#maxv").textContent=money(st.max);
 $("#grid").innerHTML=a.length?a.map(({x,i})=>`<article class="card">
  ${x.ev?'<span class="tag">Elektr</span>':x.c==="M"?'<span class="tag" style="background:#c8102e">M Power</span>':''}
  <button class="heart" data-fav="${i}" aria-label="Sevimli">♥</button>
  <button class="b3d" data-open3d="${i}">🧊 3D</button>
  <div class="pic" data-det="${i}" data-w="${x.w}" data-sz="500" data-svg="${shape(x)}" data-color="${x.col}" data-alt="${x.n}"></div>
  <div class="info"><h3>${x.n}</h3><div class="meta">${x.t} · ${x.hp} ot kuchi · ${x.fuel}</div>
  <div class="price">${money(x.p)}<small>dan boshlab · 0–100 km/soat: ${x.acc} s</small></div>
  <button class="cmpb" data-cmp="${i}">⇄ Solishtirishga qo‘shish</button>
  <div class="row"><button class="btn line" data-det="${i}">Batafsil</button><button class="btn" data-reg data-model="${x.n}">Buyurtma</button></div></div></article>`).join(""):`<p class="sub">Hech narsa topilmadi. Filtrni o‘zgartiring.</p>`;
 hydrate($("#grid"));sync();
}
function sync(){
 $$("[data-fav]").forEach(b=>b.classList.toggle("on",st.fav.includes(+b.dataset.fav)));
 $$("[data-cmp]").forEach(b=>{const on=st.cmp.includes(+b.dataset.cmp);b.classList.toggle("on",on);if(b.classList.contains("cmpb"))b.textContent=on?"✓ Solishtirishda":"⇄ Solishtirishga qo‘shish"});
 $("#favN").textContent=st.fav.length;$("#cmpN").textContent=st.cmp.length;
}
$("#filters").onclick=e=>{const b=e.target.closest("button");if(b){st.f=b.dataset.f;render()}};
$("#sort").onchange=e=>{st.sort=e.target.value;render()};
$("#max").oninput=e=>{st.max=+e.target.value;render()};

/* ===== MODAL ===== */
function openM(html,w){stop3D();$("#mbox").innerHTML='<button class="close" data-close aria-label="Yopish">×</button>'+html;$("#mbox").style.maxWidth=w||"440px";$("#modal").classList.add("open");hydrate($("#mbox"))}
function closeM(){stop3D();$("#modal").classList.remove("open")}
const opts=sel=>CARS.map((c,i)=>`<option value="${i}" ${i===sel?"selected":""}>${c.n}</option>`).join("");

/* --- batafsil (ot kuchi va h.k.) --- */
function detail(i){
 const x=CARS[i],on=st.fav.includes(i);st.i3=i;
 const bar=(l,v,t)=>`<div class="bar"><span>${l}</span><i><span style="width:${v}%"></span></i><em>${t}</em></div>`;
 openM(`<div class="media"><div class="pic big" data-w="${x.w}" data-sz="960" data-svg="${shape(x)}" data-color="${x.col}" data-alt="${x.n}"></div><div class="v3d" id="v3d"></div>
 <div class="vt"><button class="on" data-view="photo">📷 Foto</button><button data-view="3d">🧊 3D 360°</button></div></div>
 <div class="sw" id="sw"><span>Rang:</span>${[x.col,...PAINT.map(p=>p[0])].map((c,k)=>`<button data-paint="${c}" title="${k?PAINT[k-1][1]:"Standart"}" style="background:${c}"></button>`).join("")}<span>· sichqoncha bilan aylantiring, g‘ildirak bilan yaqinlashtiring</span></div>
 <h3><b>${x.n}</b></h3><p class="sub" style="margin-bottom:10px">${x.t} — ${x.d}</p>
 <div class="spec"><div>Dvigatel<b>${x.eng}</b></div><div>Quvvat<b>${x.hp} ot kuchi (${Math.round(x.hp*.7355)} kVt)</b></div>
 <div>Burovchi moment<b>${x.tq} Nm</b></div><div>0–100 km/soat<b>${x.acc} soniya</b></div>
 <div>Maksimal tezlik<b>${x.top} km/soat</b></div><div>Uzatma<b>${x.tr}</b></div>
 <div>Yuritma<b>${x.dr}</b></div><div>${x.ev?"Yurish masofasi":"Yoqilg‘i sarfi"}<b>${x.cons.replace("Masofa: ","")}</b></div>
 <div>O‘rindiqlar<b>${x.seat} ta</b></div><div>Yukxona<b>${x.trunk}</b></div></div>
 ${bar("Quvvat",x.hp/7.17,x.hp+" o.k.")}${bar("Tezlanish",Math.max(8,100-(x.acc-3)*15),x.acc+" s")}${bar("Maks. tezlik",x.top/2.5,x.top+" km/s")}
 <div class="bigprice">${money(x.p)}</div><p class="meta" style="margin-bottom:12px">Boshlang‘ich narx (taxminiy). Oyiga ~${moneyF(pmt(x.p*.85,.9,60))} dan (kredit, 60 oy).</p>
 <div class="row"><button class="btn" data-reg data-model="${x.n}">Buyurtma</button><button class="btn line" data-act="drive" data-i="${i}">Sinov haydovi</button><button class="btn line" data-act="credit" data-i="${i}">Kredit</button></div>
 <div class="row"><button class="btn line heartb" data-fav="${i}">${on?"♥ Sevimlilarda":"♡ Sevimlilarga"}</button><button class="btn line" data-cmp="${i}">⇄ Solishtirish</button></div>`,"600px");
}
const pmt=(P,r,n)=>{const m=r/1200;return m?P*m/(1-Math.pow(1+m,-n)):P/n};

/* --- kredit kalkulyatori --- */
function credit(i=10){
 openM(`<h3>Kredit <b>kalkulyatori</b></h3><p class="sub">BMW Finance taxminiy hisob-kitobi</p>
 <label class="f">Model</label><select id="cm">${opts(i)}</select>
 <label class="f">Dastlabki to‘lov: <b id="dpv"></b></label><input type="range" id="dp" min="10" max="70" value="15">
 <label class="f">Muddat: <b id="nv"></b> oy</label><input type="range" id="nn" min="12" max="84" step="6" value="60">
 <label class="f">Yillik foiz: <b id="rv"></b>%</label><input type="range" id="rr" min="0.9" max="18" step="0.1" value="0.9">
 <div class="res">Oylik to‘lov<b id="r1"></b><span class="meta" id="r2"></span></div>
 <div class="row"><button class="btn" data-act="drive" id="crbtn">Kredit uchun ariza</button></div>`);
 const calc=()=>{const x=CARS[+$("#cm").value],dp=+$("#dp").value,n=+$("#nn").value,r=+$("#rr").value,P=x.p*(1-dp/100),m=pmt(P,r,n);
  $("#dpv").textContent=dp+"% ("+money(Math.round(x.p*dp/100))+")";$("#nv").textContent=n;$("#rv").textContent=r.toFixed(1);
  $("#r1").textContent=moneyF(m);$("#r2").textContent="Jami: "+moneyF(m*n)+" · Ortiqcha: "+moneyF(m*n-P)};
 $$("#mbox input,#mbox select").forEach(e=>e.oninput=calc);calc();
}

/* --- sinov haydovi / trade-in --- */
function lead(type,i=0){
 const tr=type==="trade";
 openM(`<h3>${tr?"Trade-in <b>baholash</b>":"Sinov <b>haydovi</b>"}</h3><p class="sub">${tr?"Eski mashinangizni bepul baholaymiz va +$3 000 bonus beramiz.":"Menejerimiz sizga qo‘ng‘iroq qilib, vaqtni kelishadi."}</p>
 <form id="lf" data-type="${type}" novalidate><label class="f">Ism</label><input id="ln"><div class="err" id="e-ln"></div>
 <label class="f">Telefon</label><input id="lp" placeholder="+998 90 123 45 67"><div class="err" id="e-lp"></div>
 <label class="f">${tr?"Qiziqtirgan yangi model":"Model"}</label><select id="lm">${opts(+i)}</select>
 ${tr?'<label class="f">Eski mashina (marka, yil)</label><input id="lo" placeholder="Chevrolet Malibu, 2018">':'<label class="f">Qulay sana</label><input id="ld" type="date">'}
 <button class="btn" type="submit">Yuborish</button><div class="ok" id="ok"></div></form>`);
 if($("#ld"))$("#ld").min=new Date().toISOString().slice(0,10);
}

/* --- solishtirish --- */
function compare(){
 if(st.cmp.length<2){openM(`<h3><b>Solishtirish</b></h3><p class="sub">Kamida 2 ta modelni tanlang (kartadagi “Solishtirishga qo‘shish”). Hozir: ${st.cmp.length} ta.</p>`);return}
 const L=st.cmp.map(i=>CARS[i]);
 const rows=[["Narx",x=>money(x.p),"p",-1],["Quvvat",x=>x.hp+" o.k.","hp",1],["Moment",x=>x.tq+" Nm","tq",1],["0–100 km/s",x=>x.acc+" s","acc",-1],["Maks. tezlik",x=>x.top+" km/s","top",1],["Dvigatel",x=>x.eng],["Uzatma",x=>x.tr],["Yuritma",x=>x.dr],["Sarf / masofa",x=>x.cons],["O‘rindiq",x=>x.seat],["Yukxona",x=>x.trunk]];
 openM(`<h3><b>Solishtirish</b></h3><div style="overflow-x:auto"><table><tr><th></th>${L.map(x=>`<th>${x.n}</th>`).join("")}</tr>
 ${rows.map(([l,f,k,d])=>{const best=k?(d>0?Math.max:Math.min)(...L.map(x=>x[k])):null;return`<tr><td>${l}</td>${L.map(x=>`<td class="${k&&x[k]===best?"best":""}">${f(x)}</td>`).join("")}</tr>`}).join("")}</table></div>
 <p class="meta" style="margin-top:10px">Yashil — eng yaxshi ko‘rsatkich.</p><div class="row"><button class="btn line" data-act="clearcmp">Tozalash</button></div>`,"860px");
}

/* --- sevimlilar --- */
function favs(){
 openM(`<h3><b>Sevimlilar</b></h3>`+(st.fav.length?st.fav.map(i=>{const x=CARS[i];return`<div class="fav" data-det="${i}"><div class="pic" data-w="${x.w}" data-sz="500" data-svg="${shape(x)}" data-color="${x.col}"></div><div style="flex:1"><b>${x.n}</b><div class="meta">${x.hp} o.k. · ${money(x.p)}</div></div><button class="close" style="position:static" data-fav="${i}" data-refresh aria-label="Olib tashlash">×</button></div>`}).join(""):`<p class="sub">Hozircha bo‘sh. Kartadagi ♥ tugmasini bosing.</p>`),"520px");
}

/* --- ro‘yxatdan o‘tish / kirish --- */
function regModal(model,mode="reg"){
 st.mode=mode;const r=mode==="reg";
 openM(`<h3>BMW <b>akkaunt</b></h3><div class="tabs"><button class="${r?"on":""}" data-tab="reg">Ro‘yxatdan o‘tish</button><button class="${r?"":"on"}" data-tab="log">Kirish</button></div>
 <form id="rf" novalidate>${r?'<label class="f">Ism va familiya</label><input id="fn" autocomplete="name"><div class="err" id="e-fn"></div>':''}
 <label class="f">Email</label><input id="em" type="email" autocomplete="email"><div class="err" id="e-em"></div>
 ${r?'<label class="f">Telefon</label><input id="ph" placeholder="+998 90 123 45 67"><div class="err" id="e-ph"></div><label class="f">Qiziqtirgan model</label><select id="md">'+opts(Math.max(0,CARS.findIndex(c=>c.n===model)))+'</select>':''}
 <label class="f">Parol (kamida 6 belgi)</label><input id="pw" type="password"><div class="err" id="e-pw"></div>
 <button class="btn" type="submit">${r?"Ro‘yxatdan o‘tish":"Kirish"}</button><div class="ok" id="ok"></div></form>`);
}
function renderUser(){const u=S("bmwUser"),b=$("#userbox");
 if(u&&u.session){b.innerHTML=`<span style="font-size:14px">Salom, <b>${u.name.split(" ")[0]}</b></span> <button class="btn line" id="lo" style="padding:8px 12px">Chiqish</button>`;$("#openReg").style.display="none";$("#lo").onclick=()=>{u.session=false;S("bmwUser",u);renderUser()}}
 else{b.innerHTML="";$("#openReg").style.display=""}}

/* ===== 3D (o‘z dvigatelimiz: faqat Canvas — hech qanday kutubxona yoki internet kerak emas) ===== */
const PAINT=[["#f2f2f2","Alpine White"],["#14171c","Black Sapphire"],["#1c4fa8","Portimao Blue"],["#8a919a","Brooklyn Grey"],["#b3122a","Toronto Red"],["#1f6b4a","Isle of Man Green"]];
const P3={
 sedan:{body:[[-2.3,.38],[-2.3,.9],[-1.6,.98],[-1,1],[.9,1],[1.5,.98],[2.3,.8],[2.3,.38]],cab:[[-1.25,1],[-.8,1.42],[.5,1.44],[1.05,1]],r:.4,wx:1.4},
 coupe:{body:[[-2.3,.38],[-2.3,.88],[-1.5,.98],[-.9,1],[.9,1],[1.6,.94],[2.3,.78],[2.3,.38]],cab:[[-1,1],[-.5,1.36],[.4,1.38],[1,1]],r:.4,wx:1.4},
 suv:{body:[[-2.3,.5],[-2.3,1.2],[.9,1.22],[1.6,1.15],[2.3,.95],[2.3,.5]],cab:[[-2.2,1.2],[-2,1.78],[.6,1.8],[1.2,1.22]],r:.47,wx:1.45}
};
let T3=null;
function stop3D(){if(T3){cancelAnimationFrame(T3.raf);T3.ro.disconnect();T3=null}}
const hex2=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
const chaikin=(pts,n)=>{for(let k=0;k<n;k++){const o=[];pts.forEach((a,i)=>{const b=pts[(i+1)%pts.length];o.push([.75*a[0]+.25*b[0],.75*a[1]+.25*b[1]],[.25*a[0]+.75*b[0],.25*a[1]+.75*b[1]])});pts=o}return pts};
function model(x){
 const P=P3[shape(x)],F=[],H=.9;
 const add=(p,n,c,t,b)=>F.push({p,n,c,t:t||"paint",b:b||0});
 const area=pl=>pl.reduce((s,a,i)=>{const b=pl[(i+1)%pl.length];return s+a[0]*b[1]-b[0]*a[1]},0);
 const extrude=(pl,hz,cab)=>{
  const sg=area(pl)>0?1:-1,n=pl.length,capT=cab?"glass":"paint";
  add(pl.map(q=>[q[0],q[1],hz]),[0,0,1],null,capT);
  add(pl.map(q=>[q[0],q[1],-hz]),[0,0,-1],null,capT);
  for(let i=0;i<n;i++){const a=pl[i],b=pl[(i+1)%n],dx=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dx,dy)||1,nx=sg*dy/l,ny=-sg*dx/l;
   if(ny<-.7)continue;
   add([[a[0],a[1],hz],[b[0],b[1],hz],[b[0],b[1],-hz],[a[0],a[1],-hz]],[nx,ny,0],null,(!cab||ny>.8)?"paint":"glass")}
 };
 const box=(cx,cy,cz,sx,sy,sz,t,b,col)=>{const x0=cx-sx/2,x1=cx+sx/2,y0=cy-sy/2,y1=cy+sy/2,z0=cz-sz/2,z1=cz+sz/2,q=(p,n)=>add(p,n,col||null,t,b);
  q([[x1,y0,z1],[x1,y0,z0],[x1,y1,z0],[x1,y1,z1]],[1,0,0]);q([[x0,y0,z0],[x0,y0,z1],[x0,y1,z1],[x0,y1,z0]],[-1,0,0]);
  q([[x0,y1,z1],[x1,y1,z1],[x1,y1,z0],[x0,y1,z0]],[0,1,0]);q([[x0,y0,z0],[x1,y0,z0],[x1,y0,z1],[x0,y0,z1]],[0,-1,0]);
  q([[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]],[0,0,1]);q([[x1,y0,z0],[x0,y0,z0],[x0,y1,z0],[x1,y1,z0]],[0,0,-1])};
 const disc=(cx,cy,z,r,nz,col,t,b,n=22)=>add(Array.from({length:n},(_,k)=>{const a=k*2*Math.PI/n;return[cx+r*Math.cos(a),cy+r*Math.sin(a),z]}),[0,0,nz],col,t,b);
 const tube=(cx,cy,r,z0,z1,col,b,n=22)=>{for(let k=0;k<n;k++){const a0=k*2*Math.PI/n,a1=(k+1)*2*Math.PI/n,am=(a0+a1)/2,c0=Math.cos(a0),s0=Math.sin(a0),c1=Math.cos(a1),s1=Math.sin(a1);
  add([[cx+r*c0,cy+r*s0,z0],[cx+r*c1,cy+r*s1,z0],[cx+r*c1,cy+r*s1,z1],[cx+r*c0,cy+r*s0,z1]],[Math.cos(am),Math.sin(am),0],col,"matte",b)}};
 extrude(chaikin(P.body,2),H,false);
 extrude(chaikin(P.cab,1),.8,true);
 const belt=P.cab[0][1],roof=P.cab[1][1],r=P.r;
 box(-.1,(belt+roof)/2,0,.09,roof-belt-.03,1.62,"paint",.4);
 const fy=(P.body[P.body.length-1][1]+P.body[P.body.length-2][1])/2,by=(P.body[0][1]+P.body[1][1])/2;
 [-1,1].forEach(s=>{
  box(2.32,fy+.05,s*.62,.06,.1,.4,"emit",.9,[235,243,255]);
  box(-2.32,by+.02,s*.65,.06,.1,.46,"emit",.9,[255,40,40]);
  box(2.32,fy-.04,s*.17,.05,.2,.24,"matte",.9,[8,9,11]);
  box(P.cab[3][0]-.12,belt+.06,s*.97,.14,.1,.16,"paint",.6);
  [-.2,.95].forEach(lx=>add([[lx,r+.15,s*(H+.012)],[lx,belt-.02,s*(H+.012)]],[0,0,s],null,"line",.5));
  [-1,1].forEach(fx=>{const cx=fx*P.wx,z=s;
   disc(cx,r,z*(H+.012),r+.08,s,[5,5,6],"matte",1,26);
   tube(cx,r,r,z*.7,z*.98,[18,19,22],1.3);
   disc(cx,r,z*.98,r,s,[24,25,29],"matte",1.4,26);
   disc(cx,r,z*.985,r*.66,s,[205,210,218],"metal",1.5,26);
   for(let k=0;k<5;k++){const a=k*2*Math.PI/5+.3,px=-Math.sin(a),py=Math.cos(a),tx=Math.cos(a)*r*.62,ty=Math.sin(a)*r*.62;
    add([[cx+px*.04,r+py*.04,z*.99],[cx+tx+px*.03,r+ty+py*.03,z*.99],[cx+tx-px*.03,r+ty-py*.03,z*.99],[cx-px*.04,r-py*.04,z*.99]],[0,0,s],[40,43,50],"metal",1.6)}
   disc(cx,r,z*.995,r*.2,s,[28,105,212],"metal",1.7,16)})
 });
 box(2.33,fy-.04,0,.04,.22,.04,"metal",.95,[200,205,212]);
 return F;
}
const LV=(()=>{const v=[.5,.8,.62],l=Math.hypot(...v);return v.map(a=>a/l)})();
function render(T){
 const cv=T.cv,V=T.V,ctx=cv.getContext("2d"),W=cv.width,H=cv.height;
 ctx.clearRect(0,0,W,H);
 const cy=Math.cos(V.el),sy=Math.sin(V.el),cr=Math.cos(V.ry),sr=Math.sin(V.ry),f=W*1.12;
 const pr=p=>{const x=p[0],y=p[1]-.7,z=p[2],x1=x*cr+z*sr,z1=-x*sr+z*cr,y2=y*cy-z1*sy,z2=y*sy+z1*cy,d=V.d-z2;return[W/2+x1*f/d,H*.56-y2*f/d,d,x1,y2,z2]};
 const ring=(rx,rz,n=60)=>Array.from({length:n},(_,k)=>{const a=k*2*Math.PI/n;return pr([rx*Math.cos(a),0,rz*Math.sin(a)])});
 const path=pts=>{ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath()};
 path(ring(3.1,3.1));ctx.fillStyle="rgba(255,255,255,.05)";ctx.fill();ctx.strokeStyle="rgba(255,255,255,.2)";ctx.lineWidth=Math.max(1,W/700);ctx.stroke();
 [1,.82,.64].forEach(k=>{path(ring(2.65*k,1.25*k));ctx.fillStyle="rgba(0,0,0,.2)";ctx.fill()});
 const hv=[0,sy,cy],hl=[LV[0]+hv[0],LV[1]+hv[1],LV[2]+hv[2]],hn=Math.hypot(...hl),HV=hl.map(a=>a/hn);
 const vis=[];
 for(const fc of T.F){
  const n=fc.n,n1x=n[0]*cr+n[2]*sr,n1z=-n[0]*sr+n[2]*cr,n1y=n[1],vy=n1y*cy-n1z*sy,vz=n1y*sy+n1z*cy;
  const q=fc.p.map(pr);let mx=0,my=0,mz=0,md=0;q.forEach(a=>{mx+=a[3];my+=a[4];mz+=a[5];md+=a[2]});const m=q.length;mx/=m;my/=m;mz/=m;md/=m;
  if(n1x*(0-mx)+vy*(0-my)+vz*(V.d-mz)<=0)continue;
  const diff=Math.max(0,n1x*LV[0]+n1y*LV[1]+n1z*LV[2]),sp=Math.pow(Math.max(0,n1x*HV[0]+n1y*HV[1]+n1z*HV[2]),fc.t==="glass"?60:30);
  let base=fc.t==="paint"?T.paint:fc.t==="glass"?[16,26,40]:fc.c||[0,0,0],col;
  if(fc.t==="emit")col=base;
  else{const sh=.3+.8*diff+.12*Math.max(0,n1y),k=fc.t==="glass"?1:fc.t==="paint"?.5:fc.t==="metal"?.7:0;col=base.map(c=>Math.min(255,c*sh+sp*k*255))}
  vis.push({q,d:md-fc.b,col,line:fc.t==="line"})}
 vis.sort((a,b)=>b.d-a.d);
 for(const v of vis){
  const s=`rgb(${v.col[0]|0},${v.col[1]|0},${v.col[2]|0})`;
  if(v.line){ctx.beginPath();ctx.moveTo(v.q[0][0],v.q[0][1]);ctx.lineTo(v.q[1][0],v.q[1][1]);ctx.strokeStyle="rgba(0,0,0,.45)";ctx.lineWidth=Math.max(1,W/600);ctx.stroke();continue}
  path(v.q);ctx.fillStyle=s;ctx.fill();ctx.strokeStyle=s;ctx.lineWidth=1;ctx.stroke()}
}
function build3D(i){
 const box=$("#v3d"),x=CARS[i];box.innerHTML="";
 const cv=document.createElement("canvas");box.appendChild(cv);
 const V={ry:.8,el:.2,d:9.5,drag:false,lx:0,ly:0,t:0},still=matchMedia("(prefers-reduced-motion:reduce)").matches;
 const fit=()=>{const dpr=Math.min(devicePixelRatio||1,2);cv.width=Math.max(10,Math.round(box.clientWidth*dpr));cv.height=Math.max(10,Math.round(box.clientHeight*dpr))};
 fit();
 cv.onpointerdown=e=>{V.drag=true;V.lx=e.clientX;V.ly=e.clientY;cv.setPointerCapture(e.pointerId)};
 cv.onpointermove=e=>{if(!V.drag)return;V.ry+=(e.clientX-V.lx)*.01;V.el=Math.min(.9,Math.max(.02,V.el+(e.clientY-V.ly)*.004));V.lx=e.clientX;V.ly=e.clientY};
 cv.onpointerup=cv.onpointercancel=()=>V.drag=false;
 cv.onwheel=e=>{e.preventDefault();V.d=Math.min(14,Math.max(6,V.d+e.deltaY*.006))};
 const ro=new ResizeObserver(fit);ro.observe(box);
 T3={cv,V,ro,raf:0,F:model(x),paint:hex2(x.col),setPaint(h){this.paint=hex2(h)}};
 (function loop(){if(!T3)return;T3.raf=requestAnimationFrame(loop);if(!V.drag&&!still)V.ry+=.008;
  try{render(T3)}catch(e){box.textContent="3D xatolik: "+e.message;stop3D()}})();
}

function view(v){const d=v==="3d";
 $("#v3d").style.display=d?"block":"none";$(".media .pic").style.display=d?"none":"";$("#sw").style.display=d?"flex":"none";
 $$(".vt button").forEach(b=>b.classList.toggle("on",b.dataset.view===v));
 if(d){if(!T3)build3D(st.i3)}else stop3D()}
function paint(el){if(T3)T3.setPaint(el.dataset.paint);$$("[data-paint]").forEach(b=>b.classList.toggle("on",b===el))}

/* ===== HODISALAR (bitta joyda) ===== */
document.addEventListener("click",e=>{
 const t=e.target;let el;
 if(t.id==="modal"||t.closest("[data-close]"))return closeM();
 if(el=t.closest("[data-open3d]")){e.stopPropagation();detail(+el.dataset.open3d);return view("3d")}
 if(el=t.closest("[data-view]"))return view(el.dataset.view);
 if(el=t.closest("[data-paint]"))return paint(el);
 if(el=t.closest("[data-fav]")){e.stopPropagation();const i=+el.dataset.fav,k=st.fav.indexOf(i);k<0?(st.fav.push(i),toast("Sevimlilarga qo‘shildi")):st.fav.splice(k,1);S("fav",st.fav);
  $$(".heartb").forEach(b=>b.textContent=st.fav.includes(+b.dataset.fav)?"♥ Sevimlilarda":"♡ Sevimlilarga");sync();if(el.hasAttribute("data-refresh"))favs();return}
 if(el=t.closest("[data-cmp]")){const i=+el.dataset.cmp,k=st.cmp.indexOf(i);if(k<0){if(st.cmp.length>=3)return toast("Ko‘pi bilan 3 ta model");st.cmp.push(i);toast("Solishtirishga qo‘shildi")}else st.cmp.splice(k,1);return sync()}
 if(el=t.closest("[data-act]")){const a=el.dataset.act,i=el.dataset.i;
  ({credit:()=>credit(i===undefined?10:+i),drive:()=>lead("drive",i||0),trade:()=>lead("trade"),showroom:()=>{detail(14);view("3d")},cmp:compare,fav:favs,clearcmp:()=>{st.cmp=[];sync();closeM()}})[a]();$("#menu").classList.remove("show");return}
 if(el=t.closest("[data-tab]"))return regModal(null,el.dataset.tab);
 if(el=t.closest("[data-reg]"))return regModal(el.dataset.model);
 if(el=t.closest("[data-det]"))return detail(+el.dataset.det);
 if(el=t.closest(".menu [data-f]")){st.f=el.dataset.f;render();$("#menu").classList.remove("show");$("#models").scrollIntoView();return}
 if(!t.closest(".search"))$("#sug").style.display="none";
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeM()});

document.addEventListener("submit",e=>{
 e.preventDefault();const f=e.target,v=id=>($("#"+id)||{value:""}).value.trim();
 $$(".err",f).forEach(x=>x.textContent="");let bad=0;const er=(k,m)=>{$("#e-"+k).textContent=m;bad=1};
 const okm=m=>{const o=$("#ok");o.textContent=m;o.style.display="block"};
 if(f.id==="rf"){const r=st.mode==="reg";
  if(r&&v("fn").length<3)er("fn","Ism va familiyangizni kiriting");
  if(!/^\S+@\S+\.\S+$/.test(v("em")))er("em","Email noto‘g‘ri");
  if(r&&!/^\+?\d[\d\s-]{8,14}$/.test(v("ph")))er("ph","Telefon raqamni to‘g‘ri kiriting");
  if(v("pw").length<6)er("pw","Parol kamida 6 belgi bo‘lsin");if(bad)return;
  if(r){S("bmwUser",{name:v("fn"),email:v("em"),phone:v("ph"),model:CARS[+v("md")].n,pw:v("pw"),session:true});okm(`Tabriklaymiz, ${v("fn")}! Menejer tez orada bog‘lanadi.`);renderUser();setTimeout(closeM,2000)}
  else{const u=S("bmwUser");if(u&&u.email===v("em")&&u.pw===v("pw")){u.session=true;S("bmwUser",u);okm("Xush kelibsiz, "+u.name+"!");renderUser();setTimeout(closeM,1300)}else er("pw","Email yoki parol noto‘g‘ri (avval ro‘yxatdan o‘ting)")}}
 if(f.id==="lf"){if(v("ln").length<2)er("ln","Ismingizni kiriting");if(!/^\+?\d[\d\s-]{8,14}$/.test(v("lp")))er("lp","Telefon raqamni to‘g‘ri kiriting");if(bad)return;
  const L=S("leads")||[];L.push({type:f.dataset.type,name:v("ln"),phone:v("lp"),model:CARS[+v("lm")].n,date:v("ld"),old:v("lo")});S("leads",L);
  okm("Rahmat, "+v("ln")+"! So‘rovingiz qabul qilindi.");setTimeout(closeM,2000)}
});

/* ===== NAVBAR: qidiruv, valyuta, tungi rejim ===== */
const q=$("#q"),sug=$("#sug");
q.oninput=()=>{const s=q.value.trim().toLowerCase();st.q=s;
 const a=s?CARS.map((x,i)=>({x,i})).filter(({x})=>x.n.toLowerCase().includes(s)).slice(0,6):[];
 sug.innerHTML=a.map(({x,i})=>`<div data-det="${i}"><span>${x.n}</span><b>${money(x.p)}</b></div>`).join("");sug.style.display=a.length?"block":"none"};
q.onkeydown=e=>{if(e.key==="Enter"){sug.style.display="none";render();$("#models").scrollIntoView()}};
q.onblur=()=>setTimeout(()=>{if(!q.value){st.q="";render()}},200);
function setCur(){$("#cur").textContent=st.cur==="USD"?"USD":"UZS";render()}
$("#cur").onclick=()=>{st.cur=st.cur==="USD"?"UZS":"USD";S("cur",st.cur);setCur()};
const setDark=on=>{document.body.classList.toggle("dark",on);$("#dark").textContent=on?"☀️":"🌙";S("dark",on)};
$("#dark").onclick=()=>setDark(!document.body.classList.contains("dark"));
$("#burger").onclick=()=>$("#menu").classList.toggle("show");
setDark(!!S("dark"));setCur();renderUser();

/* ===== TAYMER ===== */
const end=Date.now()+5*864e5+3*36e5;
function tick(){const t=Math.max(0,end-Date.now()),p=n=>String(n).padStart(2,"0");
 $("#d").textContent=Math.floor(t/864e5);$("#h").textContent=p(Math.floor(t%864e5/36e5));$("#m").textContent=p(Math.floor(t%36e5/6e4));$("#s").textContent=p(Math.floor(t%6e4/1e3))}
tick();setInterval(tick,1000);
