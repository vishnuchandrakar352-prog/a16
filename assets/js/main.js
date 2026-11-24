(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var ap=3,sz=1,wr=0;function grp(id,fn,cb){var bs=[].slice.call(document.querySelectorAll('#'+id+' button'));bs.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){fn(+b.dataset.v);bs.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});cb();});});}
function r(x,s){return Math.round(x/s)*s;}
function bt(){var g=+$('bt-g').value,n=Math.ceil(g*ap/6)*6,M=[1.5,2,3][sz],Fm=[1.5,2,3][sz];$('bt-gv').textContent=g;$('bt-n').textContent=n;
 var masaCups=n*M/8,harina=masaCups*.55,lard=masaCups*.18,broth=masaCups*.5,fill=n*Fm/16,wrap=wr?Math.ceil(n/4)+' leaves (cut into ~'+n+' squares)':Math.ceil(n*1.25)+' husks', pots=Math.ceil(n/[60,48,30][sz]),time=['about 1 hour','1 to 1½ hours','1½ to 2 hours'][sz];
 var it=[['Masa harina',r(harina,.5)+' cups','about '+Math.round(harina*120/1000*10)/10+' kg'],['Lard or shortening',r(lard,.25)+' cups','beaten until fluffy'],['Warm broth',r(broth,.5)+' cups','add a little at a time'],['Filling',r(fill,.5)+' cups','cooked and cooled'],[wr?'Banana leaves':'Corn husks',wrap,'plus extras to line the pot'],['Steamer pots',pots+(pots>1?' large pots':' large pot'),'steam '+time]];
 $('bt-l').innerHTML=it.map(function(x){return '<li><b>'+x[1]+'</b>'+x[0]+'<br><span>'+x[2]+'</span></li>';}).join('');
 var v='',k=Math.min(n,72);for(var i=0;i<k;i++)v+='<i class="'+(wr?'lf':'')+'" style="animation-delay:'+(i*.012)+'s"></i>';$('bt-viz').innerHTML=v+(n>72?'<span style="font-size:.9rem;align-self:center;margin-left:6px">+'+(n-72)+'</span>':'');
 $('bt-note').textContent=n>=48?'A big batch: invite friends for an assembly line, and start the filling the day before.':'A cozy batch: perfect for one afternoon in the kitchen.';}
if($('bt-g')){$('bt-g').addEventListener('input',bt);grp('bt-a',function(v){ap=v;},bt);grp('bt-s',function(v){sz=v;},bt);grp('bt-w',function(v){wr=v;},bt);bt();}
var P=[['rojo','Pork in red chile','Salsa roja made with guajillo and ancho chiles','Corn husks','Mexican rice, refried beans','Use some of the chile cooking liquid in the masa for colour and flavour.','Medium heat'],
['verde','Chicken in salsa verde','Bright tomatillo salsa verde','Corn husks','Black beans, pickled onions','Swap some broth for the chicken stock you poached with.','Mild heat'],
['rajas','Rajas con queso','Fresh pico de gallo or crema','Corn husks','Elote salad, avocado slices','Keep the masa plain so the roasted peppers shine.','Mild to medium'],
['frijol','Black bean &amp; cheese','Smoky chipotle salsa','Banana leaves','Cabbage slaw, lime wedges','A pinch of cumin in the masa matches the beans.','Medium heat'],
['dulce','Sweet pineapple','None needed, or a little cajeta','Corn husks, tinted pink if you like','Hot chocolate or atole','Add sugar and a little cinnamon to the masa; skip the chile.','No heat'],
['hongos','Mushroom &amp; squash','Roasted tomato salsa','Banana leaves','Beans and greens','Vegetable broth with a little dried chile keeps it savoury.','Mild heat']];
function pr(i){var p=P[i];$('pr-k').textContent=p[0];$('pr-t').innerHTML=p[1];$('pr-s').textContent=p[2];$('pr-w').textContent=p[3];$('pr-sd').textContent=p[4];$('pr-m').textContent=p[5];$('pr-h').textContent=p[6];var c=document.querySelector('.tm-plate-c');c.style.animation='none';c.offsetHeight;c.style.animation='';}
if($('pr-t')){grp('pr-f',pr,function(){});pr(0);}
})();
