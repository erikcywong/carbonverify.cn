/* Carbon Verify — bilingual chrome, page guides and interactions */
(function(){
'use strict';
var PAGE=window.ZCV_I18N||{},SHARED=window.ZCV_SHARED||{strings:{}};
var originalTitle=document.title;
var lang='en';
try{lang=new URLSearchParams(location.search).get('lang')||localStorage.getItem('zcv_lang')||'en'}catch(e){}
if(lang!=='zh')lang='en';
function T(text){return lang==='zh'?(SHARED.strings[text]||text):text}
function PT(text){return lang==='zh'?((PAGE.strings&&PAGE.strings[text])||text):text}
var fav=document.createElement('link');fav.rel='icon';fav.type='image/svg+xml';fav.href='/assets/favicon.svg';document.head.appendChild(fav);
var logo='<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect x="1.5" y="1.5" width="37" height="37" rx="6" stroke="#00205b" stroke-width="1.6"/><path d="M11 25.5a4 4 0 0 1 .4-8 5.8 5.8 0 0 1 11.2-1.5 4.2 4.2 0 0 0 .8 8.3" stroke="#00958f" stroke-width="1.9" stroke-linecap="round"/><path d="M14.4 23.6l3.2 3.2 6.2-6.7" stroke="#00958f" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 32h18" stroke="#00205b" stroke-width="1.6" stroke-linecap="round" opacity=".45"/></svg>';
var chev='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M6 9l6 6 6-6"/></svg>';
var groups=[
 {id:'products',label:'Products',href:'verified-unit.html',links:[
  ['verified-unit.html','Verified Unit','Batch-level, evidence-graded product carbon record'],
  ['eudr.html','EUDR / CBAM Packs','Shipment evidence through forwarders and customs brokers'],
  ['timestamp.html','Timestamp Anchoring','Public proof that a record existed at a stated time'],
  ['warranty.html','Label Performance Warranty','Financial protection if a label is later revoked']]},
 {id:'solutions',label:'Solutions',href:'programmes.html',links:[
  ['programmes.html','Supplier Evidence Programmes','Comparable scope-3 data across a supplier pool'],
  ['registry-eaas.html','Registry as a Service','White-label public register for accredited bodies'],
  ['claims.html','Green Claims Assurance','Audit the buyer\'s public claim, not only its suppliers'],
  ['bureau.html','Evidence Data Bureau','Sector and origin distributions under entity separation'],
  ['autograde.html','Autograde API','Meter-to-grade automation at ¥2–5 per batch']]},
 {id:'method',label:'Method',href:'methodology.html',links:[
  ['methodology.html','CJV-MTH-2.0 Specification','Numbered rules, test vectors and challenge window'],
  ['registry.html','Public Registry','Recompute records independently in your browser'],
  ['governance.html','Independence & Governance','Veto rights, conflicts, appeals and related parties'],
  ['pricing.html','Services & Fees','One published schedule; no outcome fees']]},
 {id:'company',label:'Company',href:'about.html',links:[
  ['about.html','About & Accreditation','What exists, what is pending, what we never claim'],
  ['examples.html','Industry Chains','Coffee, insurance and beverage worked examples'],
  ['platform.html','Platform & API','Issue, read, anchor, revoke and export'],
  ['contact.html','Contact','Scope review, pilot and partnership enquiries']]}
];
function header(){
 var page=document.body.dataset.page||'';
 var nav=groups.map(function(g){
  return '<div class="nav-item"><a class="nav-link '+(page===g.id?'active':'')+'" href="/'+g.href+'">'+T(g.label)+chev+'</a><div class="dropdown">'+g.links.map(function(l){return '<a href="/'+l[0]+'"><b>'+T(l[1])+'</b><span>'+T(l[2])+'</span></a>'}).join('')+'</div></div>'
 }).join('');
 return '<div class="utility"><div class="wrap"><span>'+T('Methodology & public evidence registry · Hong Kong')+'</span><span class="status">'+T('Not a certification body · no certification conclusions')+'</span><div class="right"><a href="/registry.html">'+T('Registry')+'</a><a href="/scan/">'+T('Scan')+'</a><a href="/pricing.html">'+T('Fees')+'</a><div class="lang-switch" role="group" aria-label="Language / 语言"><button type="button" data-set-lang="en" aria-pressed="'+(lang==='en')+'">EN</button><i>/</i><button type="button" data-set-lang="zh" aria-pressed="'+(lang==='zh')+'">普通话</button></div></div></div></div>'+
 '<header class="site-header"><div class="wrap nav-in"><a class="brand" href="/index.html">'+logo+'<span><b>CARBONVERIFY<sup>™</sup></b><span>'+T('zero-carbon assurance')+'</span></span></a><button class="menu-btn" aria-label="'+T('Open navigation')+'">'+T('Menu')+'</button><nav class="main-nav">'+nav+'<a class="nav-link nav-scan '+(page==='scan'?'active':'')+'" href="/scan/">'+T('Scan')+'</a><a class="nav-link nav-team '+(page==='my-team'?'active':'')+'" href="/my-team/">'+T('My Team')+'</a><a class="nav-cta" href="/contact.html">'+T('Request scope review')+'</a></nav></div></header>';
}
function footer(){return '<div class="wrap"><div class="footer-grid"><div class="footer-brand"><b>Carbon Verify</b><p>'+T('Product carbon evidence, shipment-grade documentation and public recomputation. Certification conclusions, where required, are signed by an appropriately accredited partner.')+'</p></div><div class="footer-col"><h2>'+T('Products')+'</h2><a href="/verified-unit.html">'+T('Verified Unit')+'</a><a href="/eudr.html">'+T('EUDR / CBAM Packs')+'</a><a href="/timestamp.html">'+T('Timestamp Anchoring')+'</a><a href="/warranty.html">'+T('Performance Warranty')+'</a></div><div class="footer-col"><h2>'+T('Infrastructure')+'</h2><a href="/registry-eaas.html">'+T('Registry as a Service')+'</a><a href="/autograde.html">'+T('Autograde API')+'</a><a href="/scan/">'+T('Scan to verify')+'</a><a href="/bureau.html">'+T('Evidence Data Bureau')+'</a><a href="/platform.html">'+T('Developer API')+'</a></div><div class="footer-col"><h2>'+T('Trust')+'</h2><a href="/methodology.html">'+T('Published method')+'</a><a href="/governance.html">'+T('Independence')+'</a><a href="/pricing.html">'+T('Public fees')+'</a><a href="/contact.html">'+T('Contact')+'</a><a href="/my-team/">'+T('My Team')+'</a></div></div><div class="footer-bottom"><div class="warn-text">'+T('Carbon Verify is not an accredited certification body. Records, grades and assurance reports are not certification conclusions and must not be represented as regulatory approval. Related-party cases are labelled and excluded from independent validation metrics.')+'</div><div>© 2026 Carbon Verify (HK) · v2.0</div></div></div>'}
function renderChrome(){
 var h=document.getElementById('site-header');if(h)h.innerHTML=header();
 var f=document.getElementById('site-footer');if(f)f.innerHTML=footer();
 var btn=document.querySelector('.menu-btn'),mn=document.querySelector('.main-nav');
 if(btn)btn.addEventListener('click',function(){var open=mn.classList.toggle('open');btn.setAttribute('aria-label',T(open?'Close navigation':'Open navigation'))});
}
function insertGuide(){
 var base=document.body.dataset.content;if(!base||!PAGE.video)return;
 var anchor=document.querySelector('.page-head')||document.querySelector('.hero');if(!anchor)return;
 var section=document.createElement('section');section.className='page-guide';section.id='page-guide';
 section.innerHTML='<div class="wrap"><div class="guide-heading"><div><div class="kicker" id="guide-kicker">'+T('Page guide')+'</div><h2 id="guide-title"></h2></div><p id="guide-note"></p></div><div class="guide-grid"><div class="video-shell"><video id="guide-video" controls playsinline preload="metadata"></video><div class="video-caption"><span id="guide-voice"></span><span>16:9 · CC</span></div></div><aside class="guide-points"><div class="code" id="guide-kicker-2">'+T('Page guide')+'</div><h3 id="guide-watch">'+T('Watch this page explained')+'</h3><ol id="guide-point-list"></ol><details><summary id="guide-read">'+T('Read transcript')+'</summary><p id="guide-transcript"></p></details></aside></div></div>';
 anchor.insertAdjacentElement('afterend',section);
}
function updateGuide(initial){
 var base=document.body.dataset.content,v=document.getElementById('guide-video');if(!base||!PAGE.video||!v)return;
 var meta=PAGE.video[lang]||PAGE.video.en;
 document.getElementById('guide-kicker').textContent=T('Page guide');document.getElementById('guide-kicker-2').textContent=T('Page guide');document.getElementById('guide-watch').textContent=T('Watch this page explained');document.getElementById('guide-read').textContent=T('Read transcript');
 document.getElementById('guide-title').textContent=meta.title;
 document.getElementById('guide-note').textContent=T(lang==='zh'?'A plain-language tour with professional female narration and synchronised captions. Select English to switch both the video and narration.':'A plain-language tour with professional female narration and synchronised captions. Select 普通话 to switch both the video and narration.');
 document.getElementById('guide-voice').textContent=T(lang==='zh'?'Mandarin narration':'English narration');
 document.getElementById('guide-point-list').innerHTML=meta.points.map(function(p){return '<li>'+p+'</li>'}).join('');
 document.getElementById('guide-transcript').textContent=meta.narration;
 v.setAttribute('aria-label',meta.title+' — '+T('Play video'));
 if(initial||v.dataset.lang!==lang){
  var wasPlaying=!v.paused&&!v.ended,ratio=v.duration?v.currentTime/v.duration:0;
  v.dataset.lang=lang;v.poster='/assets/media/'+base+'-'+lang+'.jpg';v.src='/assets/media/'+base+'-'+lang+'.mp4';
  var old=v.querySelector('track');if(old)old.remove();
  var track=document.createElement('track');track.kind='subtitles';track.label=lang==='zh'?'普通话':'English';track.srclang=lang;var caption=window.CV_CAPTIONS&&window.CV_CAPTIONS[base+'-'+lang];track.src=caption?'data:text/vtt;base64,'+caption:'/assets/media/'+base+'-'+lang+'.vtt';track.default=true;v.appendChild(track);
  v.addEventListener('loadedmetadata',function once(){v.removeEventListener('loadedmetadata',once);if(ratio>0)v.currentTime=Math.min(ratio*v.duration,Math.max(0,v.duration-.1));if(v.textTracks[0])v.textTracks[0].mode='showing';if(wasPlaying){var p=v.play();if(p)p.catch(function(){})}});
  v.load();
 }
}
function translatePage(){
 document.documentElement.lang=lang==='zh'?'zh-CN':'en';
 document.title=lang==='zh'?(PAGE.title||originalTitle):originalTitle;
 var desc=document.querySelector('meta[name="description"]');if(desc)desc.content=lang==='zh'?(desc.dataset.zh||desc.dataset.en||desc.content):(desc.dataset.en||desc.content);
 document.querySelectorAll('[data-i18n],[data-i18n-self]').forEach(function(el){var en=el.dataset.en||el.textContent;el.textContent=lang==='zh'?PT(en):en});
 document.querySelectorAll('[data-en-placeholder]').forEach(function(el){el.placeholder=lang==='zh'?(el.dataset.zhPlaceholder||el.dataset.enPlaceholder):el.dataset.enPlaceholder});
 document.querySelectorAll('[data-en-aria-label]').forEach(function(el){el.setAttribute('aria-label',lang==='zh'?(el.dataset.zhAriaLabel||el.dataset.enAriaLabel):el.dataset.enAriaLabel)});
 document.querySelectorAll('[data-en-data-label]').forEach(function(el){el.dataset.label=lang==='zh'?(el.dataset.zhDataLabel||el.dataset.enDataLabel):el.dataset.enDataLabel});
}
function money(n){return '¥'+Math.round(n).toLocaleString('en-US')}
var quoteFn=null;
function initQuote(){
 var q=document.getElementById('quotebox');if(!q)return;
 var sites=document.getElementById('q-sites'),batches=document.getElementById('q-batches');
 var addons=[].slice.call(document.querySelectorAll('.q-addon'));
 quoteFn=function(){var s=+sites.value,b=+batches.value,total=s*28000+b*40,lines=[[T('First-year verification'),s*28000],[T('Registry issuance'),b*40]];
  addons.forEach(function(a){if(a.checked){var v=+a.value;total+=v*(a.dataset.per==='batch'?b:s);lines.push([a.dataset.label,v*(a.dataset.per==='batch'?b:s)])}});
  document.getElementById('q-sites-v').textContent=lang==='zh'?s+' '+T(s>1?'sites':'site'):s+' site'+(s>1?'s':'');
  document.getElementById('q-batches-v').textContent=lang==='zh'?b.toLocaleString()+' '+T('batches'):b.toLocaleString()+' batches';
  document.getElementById('q-lines').innerHTML=lines.map(function(l){return '<div class="quote-line"><span>'+l[0]+'</span><b>'+money(l[1])+'</b></div>'}).join('');
  document.getElementById('q-total').textContent=money(total);
 };
 sites.addEventListener('input',quoteFn);batches.addEventListener('input',quoteFn);addons.forEach(function(a){a.addEventListener('change',quoteFn)});
}
function initForm(){
 var form=document.getElementById('enquiry');if(!form)return;
 form.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(form);var subject=T('Scope review — ')+(d.get('company')||T('New enquiry'));
  var body=[T('Company: ')+(d.get('company')||''),T('Contact: ')+(d.get('name')||''),T('Email: ')+(d.get('email')||''),T('Product: ')+(d.get('product')||''),T('Shipment / supplier volume: ')+(d.get('volume')||''),'',T('Scope and timing:'),''+(d.get('message')||'')].join('\n');
  window.location.href='mailto:erik.cywong@live.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  document.getElementById('form-status').textContent=T('Your email client has opened with a pre-filled enquiry. Nothing was submitted by this website.');
 });
}
function initHash(){
 var vf=document.getElementById('hash-check');if(!vf)return;
 vf.addEventListener('click',async function(){var p=document.getElementById('hash-payload').value.trim(),out=document.getElementById('hash-result');if(!p){out.textContent=T('Enter a canonical payload first.');return}
  try{var buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(p));var hex=Array.from(new Uint8Array(buf)).map(function(b){return b.toString(16).padStart(2,'0')}).join('');out.innerHTML='<span class="teal">SHA-256</span><br>'+hex+'<br><span class="muted">'+T('Computed locally. No payload left this browser.')+'</span>'}catch(e){out.textContent=T('Secure browser context required for WebCrypto.')}
 });
}
function setLanguage(next,initial){
 lang=next==='zh'?'zh':'en';
 try{localStorage.setItem('zcv_lang',lang)}catch(e){}
 renderChrome();translatePage();updateGuide(initial);if(quoteFn)quoteFn();
 document.dispatchEvent(new CustomEvent('langchange',{detail:{lang:lang}}));
}
document.addEventListener('click',function(e){var b=e.target.closest('[data-set-lang]');if(b)setLanguage(b.dataset.setLang,false)});
renderChrome();insertGuide();initQuote();initForm();initHash();setLanguage(lang,true);
var els=document.querySelectorAll('.reveal');if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.07});els.forEach(function(e){io.observe(e)})}else els.forEach(function(e){e.classList.add('in')});
})();
