/* ===== Motion Playground Pro — Animation Data ===== */
const MotionAnimations = {};
(function() {
/* ----- Tab (10) ----- */
MotionAnimations.tab = [
{name:'滑动切换',duration:'300ms',curve:'cubic-bezier(0.22,1,0.36,1)',css:'transition: transform .3s cubic-bezier(0.22,1,0.36,1)',desc:'active 背景块平滑移动',preview:function(c){c.innerHTML='<div class="tab-demo" id="tabSlide"><div class="tab-bar"><div class="tab-indicator"></div><span class="tab-item active">概述</span><span class="tab-item">详情</span><span class="tab-item">设置</span></div></div>';var i=c.querySelectorAll('.tab-item'),d=c.querySelector('.tab-indicator');i.forEach(function(e){e.addEventListener('click',function(ev){ev._motionPreviewHandled=true;i.forEach(function(e){e.classList.remove('active')});this.classList.add('active');d.style.transform='translateX('+this.offsetLeft+'px)';d.style.width=this.offsetWidth+'px'})});var f=i[0];d.style.transform='translateX('+f.offsetLeft+'px)';d.style.width=f.offsetWidth+'px'}},
{name:'Morph Capsule',duration:'250ms',curve:'cubic-bezier(.22,1,.36,1)',css:':root { --tabs-dur:250ms; --tabs-ease:cubic-bezier(.22,1,.36,1); --tabs-text-muted:rgba(15,15,15,.8); --tabs-text-active:#0f0f0f; --tabs-bar-bg:#f1f1f1; --tabs-pill-bg:#fff; } .t-tabs { position:relative; display:inline-flex; align-items:center; gap:3px; padding:3px; border-radius:48px; background:var(--tabs-bar-bg); } .t-tab { position:relative; appearance:none; border:0; background:transparent; height:30px; padding:4px 12px; color:var(--tabs-text-muted); cursor:pointer; border-radius:48px; z-index:1; transition:color var(--tabs-dur) var(--tabs-ease); } .t-tabs-pill { position:absolute; top:3px; left:0; height:30px; width:0; background:var(--tabs-pill-bg); border-radius:48px; transform:translateX(0); transition:transform var(--tabs-dur) var(--tabs-ease),width var(--tabs-dur) var(--tabs-ease); will-change:transform,width; z-index:0; pointer-events:none; }',desc:'按标签实际宽度滑动的胶囊切换',preview:function(c){c.innerHTML='<div class="tab-demo" id="tabMorph"><div class="t-tabs" role="tablist"><span class="t-tabs-pill" aria-hidden="true"></span><button type="button" class="t-tab" role="tab" aria-selected="true">短</button><button type="button" class="t-tab" role="tab" aria-selected="false">中等长度</button><button type="button" class="t-tab" role="tab" aria-selected="false">长标签</button></div></div>';var tabs=Array.from(c.querySelectorAll('.t-tab')),pill=c.querySelector('.t-tabs-pill'),index=0;function place(tab,animate){if(!animate){pill.style.transition='none';pill.style.transform='translateX('+tab.offsetLeft+'px)';pill.style.width=tab.offsetWidth+'px';void pill.offsetWidth;pill.style.transition=''}else{pill.style.transform='translateX('+tab.offsetLeft+'px)';pill.style.width=tab.offsetWidth+'px'}}function activate(tab,animate){tabs.forEach(function(item){item.setAttribute('aria-selected',String(item===tab))});place(tab,animate)}tabs.forEach(function(tab){tab.addEventListener('click',function(e){e._motionPreviewHandled=true;index=tabs.indexOf(tab);activate(tab,true)})});place(tabs[0],false);window.addEventListener('resize',function(){if(c.isConnected)place(tabs[index],false)},{signal:(new AbortController()).signal});setInterval(function(){index=(index+1)%tabs.length;activate(tabs[index],true)},2400)}},
{name:'Elastic',duration:'380ms',curve:'cubic-bezier(.34,1.56,.64,1)',css:'transition: transform .38s cubic-bezier(.34,1.56,.64,1)',desc:'移动结束轻微弹性',preview:function(c){c.innerHTML='<div class="tab-demo" id="tabElastic"><div class="tab-bar"><div class="tab-indicator elastic"></div><span class="tab-item active">A</span><span class="tab-item">B</span><span class="tab-item">C</span><span class="tab-item">D</span></div></div>';var i=c.querySelectorAll('.tab-item'),d=c.querySelector('.tab-indicator');i.forEach(function(e){e.addEventListener('click',function(ev){ev._motionPreviewHandled=true;i.forEach(function(e){e.classList.remove('active')});this.classList.add('active');d.style.transform='translateX('+this.offsetLeft+'px)';d.style.width=this.offsetWidth+'px'})});var f=i[0];d.style.transform='translateX('+f.offsetLeft+'px)';d.style.width=f.offsetWidth+'px'}},
{name:'Fade Switch',duration:'220ms',curve:'ease',css:'transition: opacity .22s ease',desc:'1 → 0 → 1 淡入淡出切换',preview:function(c){c.innerHTML='<div class="tab-fade-demo" id="tabFade"><div class="fade-stage"><div class="fade-pane active">面板 A</div><div class="fade-pane">面板 B</div><div class="fade-pane">面板 C</div></div><div class="fade-dots"></div></div>';var p=c.querySelectorAll('.fade-pane'),w=c.querySelector('.fade-dots'),u=0;p.forEach(function(_,i){var d=document.createElement('span');d.className='fade-dot'+(i===0?' active':'');w.appendChild(d)});var o=w.querySelectorAll('.fade-dot');setInterval(function(){p[u].classList.remove('active');o[u].classList.remove('active');u=(u+1)%p.length;p[u].classList.add('active');o[u].classList.add('active')},1800)}},
{name:'Scale',duration:'200ms',curve:'cubic-bezier(0.2,0.9,0.4,1)',css:'transition: transform .2s cubic-bezier(0.2,0.9,0.4,1)',desc:'0.96 → 1 缩放切换',preview:function(c){c.innerHTML='<div class="tab-scale-demo" id="tabScale"><div class="scale-stage"><div class="scale-pane active">首页</div><div class="scale-pane">探索</div><div class="scale-pane">我的</div></div></div>';var p=c.querySelectorAll('.scale-pane'),u=0;setInterval(function(){p.forEach(function(e){e.classList.remove('active')});u=(u+1)%p.length;p[u].classList.add('active')},2000)}},
{name:'Underline',duration:'250ms',curve:'cubic-bezier(0.22,1,0.36,1)',css:'transition: width .25s cubic-bezier(0.22,1,0.36,1), transform .25s cubic-bezier(0.22,1,0.36,1)',desc:'下划线宽度动画',preview:function(c){c.innerHTML='<div class="tab-underline-demo" id="tabUnderline"><div class="uline-bar"><span class="uline-item active">精选</span><span class="uline-item">关注</span><span class="uline-item">推荐</span><div class="uline-indicator"></div></div></div>';var i=c.querySelectorAll('.uline-item'),d=c.querySelector('.uline-indicator');i.forEach(function(e){e.addEventListener('click',function(ev){ev._motionPreviewHandled=true;i.forEach(function(e){e.classList.remove('active')});this.classList.add('active');d.style.transform='translateX('+this.offsetLeft+'px)';d.style.width=this.offsetWidth+'px'})});var f=i[0];f.classList.add('active');d.style.transform='translateX('+f.offsetLeft+'px)';d.style.width=f.offsetWidth+'px'}},
{name:'Liquid',duration:'400ms',curve:'cubic-bezier(0.34,1.56,0.64,1)',css:'border-radius: 999px; transition: border-radius .4s cubic-bezier(0.34,1.56,0.64,1), width .4s cubic-bezier(0.34,1.56,0.64,1), height .4s cubic-bezier(0.34,1.56,0.64,1)',desc:'胶囊变圆形，圆形直径等于胶囊宽度',preview:function(c){c.innerHTML='<div class="btn-demo" id="tabLiquid"><button type="button" class="demo-btn liquid-shape" style="width:104px;height:42px;padding:0;font-size:13px;line-height:20px;touch-action:manipulation;">点击变形</button></div>';var s=c.querySelector('.liquid-shape'),m=!1,w=s.getBoundingClientRect().width,h=s.getBoundingClientRect().height;s.addEventListener('click',function(e){e._motionPreviewHandled=true;m=!m;s.style.borderRadius=m?'50%':'999px';s.style.width=m?w+'px':'104px';s.style.setProperty('--liquid-height',m?w+'px':'42px')});}},
{name:'Material Ripple',duration:'500ms',curve:'cubic-bezier(0.2,0,0,1)',css:'ripple animation 500ms cubic-bezier(0.2,0,0,1)',desc:'点击产生涟漪扩散效果',preview:function(c){c.innerHTML='<div class="tab-ripple-demo" id="tabRipple"><div class="ripple-btn">点击涟漪</div></div>';var b=c.querySelector('.ripple-btn');b.addEventListener('click',function(e){var r=this.getBoundingClientRect(),s=document.createElement('span');s.className='ripple-effect';var d=Math.max(r.width,r.height);s.style.width=s.style.height=d+'px';s.style.left=(e.clientX-r.left-d/2)+'px';s.style.top=(e.clientY-r.top-d/2)+'px';this.appendChild(s);setTimeout(function(){s.remove()},600)})}}
];
/* ----- Text (11) ----- */
MotionAnimations.text = [
{name:'Fade Up',duration:'400ms',curve:'cubic-bezier(0.25,0.46,0.45,0.94)',css:'animation: fadeUp .4s cubic-bezier(0.25,0.46,0.45,0.94) both',desc:'文字从下往上淡入',preview:function(c){c.innerHTML='<div class="text-demo" id="textFadeUp"><div class="text-anim-wrap"><span class="t-fadeup t-line">Fade</span><span class="t-fadeup t-line" style="animation-delay:.12s">Up</span></div></div>';var l=c.querySelectorAll('.t-fadeup');var o=function(){l.forEach(function(e,i){e.style.animation='none';void e.offsetWidth;e.style.animation='fadeUp .4s cubic-bezier(0.25,0.46,0.45,0.94) both '+(i*0.12)+'s'})};o();setInterval(o,2500)}},
{name:'Blur Reveal',duration:'500ms',curve:'cubic-bezier(0.2,0.9,0.4,1)',css:'animation: blurReveal .5s cubic-bezier(0.2,0.9,0.4,1) both',desc:'模糊到清晰',preview:function(c){c.innerHTML='<div class="text-demo" id="textBlur"><div class="text-anim-wrap"><span class="t-blur t-line">Blur Reveal</span></div></div>';var e=c.querySelector('.t-blur');var o=function(){e.style.animation='none';void e.offsetWidth;e.style.animation='blurReveal .5s cubic-bezier(0.2,0.9,0.4,1) both'};o();setInterval(o,2200)}},
{name:'Character Stagger',duration:'400ms',curve:'cubic-bezier(0.25,0.46,0.45,0.94)',css:'animation: fadeUp .4s cubic-bezier(0.25,0.46,0.45,0.94) both',desc:'逐字符错落淡入',preview:function(c){c.innerHTML='<div class="text-demo" id="textChar"><div class="text-anim-wrap char-stagger">Stagger</div></div>';var w=c.querySelector('.char-stagger'),t=w.textContent;w.textContent='';[...t].forEach(function(ch,i){var s=document.createElement('span');s.textContent=ch===' '?'\u00A0':ch;s.style.animation='fadeUp .4s cubic-bezier(0.25,0.46,0.45,0.94) both';s.style.animationDelay=(i*0.06)+'s';s.style.display='inline-block';w.appendChild(s)});setInterval(function(){var sp=w.querySelectorAll('span');sp.forEach(function(s,i){s.style.animation='none';void s.offsetWidth;s.style.animation='fadeUp .4s cubic-bezier(0.25,0.46,0.45,0.94) both';s.style.animationDelay=(i*0.06)+'s'})},2500)}},
{name:'Word Stagger',duration:'450ms',curve:'cubic-bezier(0.34,1.56,0.64,1)',css:'animation: fadeUp .45s cubic-bezier(0.34,1.56,0.64,1) both',desc:'逐词弹性淡入',preview:function(c){c.innerHTML='<div class="text-demo" id="textWord"><div class="text-anim-wrap word-stagger">Word Stagger Demo</div></div>';var w=c.querySelector('.word-stagger'),ws=w.textContent.split(' ');w.textContent='';ws.forEach(function(word,i){var s=document.createElement('span');s.textContent=word;s.style.animation='fadeUp .45s cubic-bezier(0.34,1.56,0.64,1) both';s.style.animationDelay=(i*0.15)+'s';s.style.display='inline-block';s.style.marginRight='8px';w.appendChild(s)});setInterval(function(){var sp=w.querySelectorAll('span');sp.forEach(function(s,i){s.style.animation='none';void s.offsetWidth;s.style.animation='fadeUp .45s cubic-bezier(0.34,1.56,0.64,1) both';s.style.animationDelay=(i*0.15)+'s'})},2800)}},
{name:'Gradient Flow',duration:'2000ms',curve:'linear',css:'animation: gradientFlow 2s linear infinite',desc:'渐变色流动',preview:function(c){c.innerHTML='<div class="text-demo" id="textGrad"><div class="text-anim-wrap"><span class="t-grad t-line" style="background:linear-gradient(90deg,#6c5ce7,#a29bfe,#6c5ce7);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:gradientFlow 2s linear infinite;">Gradient Flow</span></div></div>'}},
{name:'Mask Reveal',duration:'600ms',curve:'cubic-bezier(0.77,0,0.18,1)',css:'animation: maskReveal .6s cubic-bezier(0.77,0,0.18,1) both',desc:'遮罩从左到右揭示',preview:function(c){c.innerHTML='<div class="text-demo" id="textMask"><div class="text-anim-wrap"><span class="t-mask t-line">Mask Reveal</span></div></div>';var e=c.querySelector('.t-mask');var o=function(){e.style.animation='none';void e.offsetWidth;e.style.animation='maskReveal .6s cubic-bezier(0.77,0,0.18,1) both'};o();setInterval(o,2200)}},
{name:'Typewriter',duration:'1200ms',curve:'steps(12)',css:'animation: typewriter 1.2s steps(12) both',desc:'逐字打印效果',preview:function(c){c.innerHTML='<div class="text-demo" id="textType"><div class="text-anim-wrap"><span class="t-type" style="display:inline-block;overflow:hidden;white-space:nowrap;border-right:2px solid #6c5ce7;">Typewriter</span></div></div>';var e=c.querySelector('.t-type');var o=function(){e.style.animation='none';void e.offsetWidth;e.style.width='0';e.style.animation='typewriter 1.2s steps(12) both'};o();setInterval(o,2400)}},
{name:'Glow',duration:'1200ms',curve:'ease-in-out',css:'animation: textGlow 1.2s ease-in-out infinite alternate',desc:'文字发光呼吸',preview:function(c){c.innerHTML='<div class="text-demo" id="textGlow"><div class="text-anim-wrap"><span class="t-glow-text" style="animation:textGlow 1.2s ease-in-out infinite alternate;">Glow</span></div></div>'}},
{name:'Rotate In',duration:'400ms',curve:'cubic-bezier(0.34,1.56,0.64,1)',css:'animation: rotateIn .4s cubic-bezier(0.34,1.56,0.64,1) both',desc:'旋转 + 弹性入场',preview:function(c){c.innerHTML='<div class="text-demo" id="textRotate"><div class="text-anim-wrap"><span class="t-rotate t-line">Rotate In</span></div></div>';var e=c.querySelector('.t-rotate');var o=function(){e.style.animation='none';void e.offsetWidth;e.style.animation='rotateIn .4s cubic-bezier(0.34,1.56,0.64,1) both'};o();setInterval(o,2200)}},
{name:'Apple Hero',duration:'700ms',curve:'cubic-bezier(0.2,0.9,0.4,1)',css:'animation: appleHero .7s cubic-bezier(0.2,0.9,0.4,1) both',desc:'放大 + 字距变化',preview:function(c){c.innerHTML='<div class="text-demo" id="textHero"><div class="text-anim-wrap"><span class="t-hero t-line">Apple Hero</span></div></div>';var e=c.querySelector('.t-hero');var o=function(){e.style.animation='none';void e.offsetWidth;e.style.animation='appleHero .7s cubic-bezier(0.2,0.9,0.4,1) both'};o();setInterval(o,2500)}},
{name:'跟随移动',duration:'600ms',curve:'cubic-bezier(0.25,0.46,0.45,0.94)',delay:'55ms',css:'animation: followMotionTrack .6s cubic-bezier(.25,.46,.45,.94) both; /* 所有字母依次淡入，回退时完整倒放 */ animation: followMotionLetter .32s ease-out both',desc:'首字母先淡入，整组左移时其余字母依次出现',preview:function(c){c.innerHTML='<div class="text-demo" id="textFollowMotion"><div class="text-anim-wrap follow-motion-track">FOLLOW</div></div>';var w=c.querySelector('.follow-motion-track'),text=w.textContent;w.textContent='';[...text].forEach(function(ch){var s=document.createElement('span');s.textContent=ch;w.appendChild(s)});var sp=w.querySelectorAll('span');var o=function(){w.style.animation='none';sp.forEach(function(s){s.style.animation='none';s.style.opacity=''});void w.offsetWidth;w.style.animation='followMotionTrack .6s cubic-bezier(.25,.46,.45,.94) both';sp.forEach(function(s,i){s.style.animation='followMotionLetter .32s ease-out both';s.style.animationDelay=(i===0?0:(.06+(i-1)*.055))+'s'})};o();setInterval(o,2500)}},
{name:'文字揭晓',duration:'500ms',curve:'cubic-bezier(0.22,1,0.36,1)',delay:'40ms',exitEnabled:true,preserveTransition:true,css:':root { --stagger-dur:500ms; --stagger-distance:12px; --stagger-stagger:40ms; --stagger-blur:3px; --stagger-ease:cubic-bezier(.22,1,.36,1); } .t-stagger-line { display:block; opacity:0; transform:translateY(var(--stagger-distance)); filter:blur(var(--stagger-blur)); transition:opacity var(--stagger-dur) var(--stagger-ease),transform var(--stagger-dur) var(--stagger-ease),filter var(--stagger-dur) var(--stagger-ease); will-change:transform,opacity,filter; } .t-stagger-line--2 { transition-delay:var(--stagger-stagger); } .t-stagger.is-shown .t-stagger-line { opacity:1; transform:translateY(0); filter:blur(0); } .t-stagger.is-hiding .t-stagger-line { opacity:0; transform:translateY(0); filter:blur(0); transition:opacity 200ms ease,transform 0s linear,filter 0s linear; transition-delay:0s; } @media (prefers-reduced-motion:reduce) { .t-stagger-line { transition:none !important; } }',desc:'两行文字错落上移、模糊显现，回退时同步淡出',preview:function(c){c.innerHTML='<div class="text-demo"><div class="text-anim-wrap t-stagger" style="--stagger-dur:500ms;--stagger-distance:12px;--stagger-stagger:40ms;--stagger-blur:3px;--stagger-ease:cubic-bezier(.22,1,.36,1)"><strong class="t-stagger-line t-stagger-line--1">Texts reveal</strong><span class="t-stagger-line t-stagger-line--2">Texts reveal</span></div></div>';var stagger=c.querySelector('.t-stagger'),hideTimer=null;function show(){clearTimeout(hideTimer);stagger.classList.remove('is-hiding');void stagger.offsetWidth;stagger.classList.add('is-shown')}function hide(){stagger.classList.remove('is-shown');stagger.classList.add('is-hiding');hideTimer=setTimeout(function(){if(stagger.isConnected)stagger.classList.remove('is-hiding')},200)}requestAnimationFrame(show);stagger.addEventListener('click',function(e){e._motionPreviewHandled=true;if(stagger.classList.contains('is-shown'))hide();else show()})}},
{_id:'text-builtin-shimmer',name:'扫光文字',duration:'1800ms',curve:'linear',autoplayPreview:true,desc:'高光从文字表面横向扫过',css:'background:linear-gradient(110deg,var(--shimmer-base,#777) 0%,var(--shimmer-base,#777) 42%,#fff 50%,var(--shimmer-base,#777) 58%,var(--shimmer-base,#777) 100%);background-size:250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shimmerText 1.8s linear infinite',preview:function(c){c.innerHTML='<div class="text-demo" id="textShimmer"><div class="text-anim-wrap shimmer-text-wrap"><span class="shimmer-text">Shimmering Text</span></div></div>';var e=c.querySelector('.shimmer-text');e.style.animation='shimmerText 1.8s linear infinite';}},
];
/* ----- Number (1) ----- */
MotionAnimations.number = [
{name:'数字弹出',duration:'500ms',curve:'cubic-bezier(0.34,1.45,0.64,1)',delay:'70ms',css:'--digit-dur:500ms; --digit-distance:8px; --digit-stagger:70ms; --digit-blur:2px; --digit-ease:cubic-bezier(0.34,1.45,0.64,1); --digit-dir-x:0; --digit-dir-y:1; animation:t-digit-pop-in var(--digit-dur) var(--digit-ease) both;',desc:'字符依次从下方弹出并由模糊变清晰',preview:function(c){c.innerHTML='<div class="number-pop-demo"><span class="t-digit-group"><span class="t-digit">1</span><span class="t-digit">2</span><span class="t-digit" data-stagger="1">.</span><span class="t-digit" data-stagger="2">3</span></span></div>';var g=c.querySelector('.t-digit-group'),play=function(){g.classList.remove('is-animating');void g.offsetWidth;g.classList.add('is-animating')};play();setInterval(play,2600)}}
];
/* ----- Button (9) ----- */
MotionAnimations.button = [
{name:'Hover Lift',duration:'200ms',curve:'cubic-bezier(0.2,0.9,0.4,1)',css:'transition: transform .2s cubic-bezier(0.2,0.9,0.4,1), box-shadow .2s ease',desc:'悬浮上移 + 阴影加深',preview:function(c){c.innerHTML='<div class="btn-demo" id="btnLift"><button class="demo-btn lift-btn">Hover me</button></div>';var b=c.querySelector('.demo-btn');b.addEventListener('mouseenter',function(){b.style.transform='translateY(-4px)';b.style.boxShadow='0 8px 24px rgba(108,92,231,0.35)'});b.addEventListener('mouseleave',function(){b.style.transform='';b.style.boxShadow=''})}},
{name:'Glow Border',duration:'400ms',curve:'ease-in-out',css:'transition: border-color .4s ease-in-out, box-shadow .4s ease-in-out',desc:'悬浮边框发光',preview:function(c){c.innerHTML='<div class="btn-demo" id="btnGlow"><button class="demo-btn glow-border-btn">Glow</button></div>';var b=c.querySelector('.demo-btn');b.addEventListener('mouseenter',function(){b.style.borderColor='#6c5ce7';b.style.boxShadow='0 0 20px rgba(108,92,231,0.4), inset 0 0 20px rgba(108,92,231,0.1)'});b.addEventListener('mouseleave',function(){b.style.borderColor='rgba(255,255,255,0.15)';b.style.boxShadow=''})}},
{name:'Gradient Flow',duration:'1500ms',curve:'linear',css:'background-size: 200% 100%; animation: gradientFlow 1.5s linear infinite',desc:'渐变背景流动',preview:function(c){c.innerHTML='<div class="btn-demo" id="btnGrad"><button class="demo-btn grad-flow-btn">Flow</button></div>'}},
{name:'Shine Sweep',duration:'600ms',curve:'ease-in-out',css:'background: linear-gradient(120deg, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.05) 70%); background-size: 200% 100%; transition: background-position .6s ease-in-out;',desc:'光泽扫过按钮表面',preview:function(c){c.innerHTML='<div class="btn-demo" id="btnShine"><button class="demo-btn shine-btn">Shine</button></div>';var b=c.querySelector('.demo-btn');b.addEventListener('mouseenter',function(){b.style.backgroundPosition='100% 0'});b.addEventListener('mouseleave',function(){b.style.backgroundPosition='0% 0'})}},
{name:'Press Scale',duration:'120ms',curve:'cubic-bezier(0.2,0.9,0.4,1)',css:'transition: transform .12s cubic-bezier(0.2,0.9,0.4,1)',desc:'按下缩放 0.94',preview:function(c){c.innerHTML='<div class="btn-demo" id="btnPress"><button class="demo-btn press-btn">Press me</button></div>';var b=c.querySelector('.demo-btn');b.addEventListener('mousedown',function(){b.style.transform='scale(0.94)'});b.addEventListener('mouseup',function(){b.style.transform=''});b.addEventListener('mouseleave',function(){b.style.transform=''})}},
{name:'Magnetic',duration:'300ms',curve:'cubic-bezier(0.34,1.56,0.64,1)',css:'transition: transform .3s cubic-bezier(0.34,1.56,0.64,1)',desc:'按钮跟随鼠标偏移',preview:function(c){c.innerHTML='<div class="btn-demo" id="btnMagnet"><button class="demo-btn magnet-btn">Magnetic</button></div>';var b=c.querySelector('.demo-btn');b.addEventListener('mousemove',function(e){var r=this.getBoundingClientRect();this.style.transform='translate('+((e.clientX-r.left-r.width/2)*0.3)+'px,'+((e.clientY-r.top-r.height/2)*0.3)+'px)'});b.addEventListener('mouseleave',function(){this.style.transform=''})}},
{name:'Pulse',duration:'600ms',curve:'ease-in-out',css:'animation: pulseBtn .6s ease-in-out infinite',desc:'呼吸脉冲缩放',preview:function(c){c.innerHTML='<div class="btn-demo" id="btnPulse"><button class="demo-btn pulse-btn" style="animation:pulseBtn .6s ease-in-out infinite;">Pulse</button></div>'}},
{name:'Ripple',duration:'500ms',curve:'cubic-bezier(0,0,0.2,1)',css:'position: relative; overflow: hidden;',desc:'点击涟漪扩散',preview:function(c){c.innerHTML='<div class="btn-demo" id="btnRipple"><button class="demo-btn ripple-demo-btn">Ripple</button></div>';var b=c.querySelector('.ripple-demo-btn');b.addEventListener('click',function(e){var r=this.getBoundingClientRect(),s=document.createElement('span');s.className='ripple-effect';var d=Math.max(r.width,r.height);s.style.width=s.style.height=d+'px';s.style.left=(e.clientX-r.left-d/2)+'px';s.style.top=(e.clientY-r.top-d/2)+'px';this.appendChild(s);setTimeout(function(){s.remove()},600)})}},
{name:'按钮缩放',duration:'120ms',curve:'ease-out',css:'transform: scaleX(calc((var(--dls-button-or-anchor-width-px, 100) - 2) / var(--dls-button-or-anchor-width-px, 100))) scaleY(calc((var(--dls-button-or-anchor-height-px, 98) - 2) / var(--dls-button-or-anchor-height-px, 100)));',desc:'按实际宽高各收缩 2px',preview:function(c){c.innerHTML='<div class="btn-demo" id="btnDimensionScale"><button class="demo-btn dimension-scale-btn" style="width:104px;height:42px;padding:0;font-size:14px;line-height:22px;transition:transform 120ms ease-out;touch-action:manipulation;">按钮缩放</button></div>';var b=c.querySelector('.dimension-scale-btn'),down=function(){var r=b.getBoundingClientRect();b.style.setProperty('--dls-button-or-anchor-width-px',r.width);b.style.setProperty('--dls-button-or-anchor-height-px',r.height);b.style.transform='scaleX(calc((var(--dls-button-or-anchor-width-px, 100) - 2) / var(--dls-button-or-anchor-width-px, 100))) scaleY(calc((var(--dls-button-or-anchor-height-px, 98) - 2) / var(--dls-button-or-anchor-height-px, 100)))'},up=function(){b.style.transform=''};b.addEventListener('pointerdown',down);b.addEventListener('pointerup',up);b.addEventListener('pointercancel',up);b.addEventListener('pointerleave',up)}}
];
var buttonScaleIndex=MotionAnimations.button.findIndex(function(item){return item.name==='按钮缩放'});
if(buttonScaleIndex>0)MotionAnimations.button.unshift(MotionAnimations.button.splice(buttonScaleIndex,1)[0]);
MotionAnimations.button.push(
{_id:'button-extra-notification-badge',name:'信息通知',duration:'500ms',curve:'cubic-bezier(.34,1.36,.64,1)',preserveTransition:true,desc:'点击圆形闹钟按钮，右上角红点滑入并弹出；再次点击收起',css:'.t-badge[data-open="true"] { animation:t-badge-slide-in 260ms cubic-bezier(.22,1,.36,1); } @keyframes t-badge-slide-in { from { transform:translate(-8.2px,12.4px); } to { transform:translate(0,0); } } .t-badge { position:absolute; top:-5px; right:-6px; } .t-badge-dot { display:grid; place-items:center; width:20px; height:20px; border-radius:50%; background:#ff1744; color:#fff; font:700 12px/1 sans-serif; transform:scale(1); opacity:1; filter:blur(0); transition:transform 500ms cubic-bezier(.34,1.36,.64,1),opacity 400ms cubic-bezier(.34,1.36,.64,1),filter 500ms cubic-bezier(.34,1.36,.64,1); } .t-badge[data-open="false"] .t-badge-dot { transform:scale(0); opacity:0; filter:blur(2px); transition:transform 180ms cubic-bezier(.4,0,.2,1),opacity 180ms cubic-bezier(.4,0,.2,1),filter 180ms cubic-bezier(.4,0,.2,1); } @media(prefers-reduced-motion:reduce) { .t-badge,.t-badge-dot { animation:none!important; transition:none!important; } }',preview:function(c){c.innerHTML='<button type="button" class="notification-badge-trigger" aria-label="信息通知" aria-pressed="false"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l3 2M5 3 2 6M19 3l3 3M6 20l-1 2M18 20l1 2"></path></svg><span class="t-badge" data-open="false" aria-hidden="true"><span class="t-badge-dot">1</span></span></button>';var button=c.firstElementChild,badge=button.querySelector('.t-badge');button.addEventListener('click',function(e){e._motionPreviewHandled=true;var open=badge.dataset.open!=='true';badge.dataset.open=String(open);button.setAttribute('aria-pressed',String(open))})}},
{_id:'button-builtin-category-dropdown',name:'Category Dropdown',duration:'280ms',curve:'cubic-bezier(.22,1,.36,1)',preserveTransition:true,css:'.category-dropdown-menu { transform:translateY(-6px) scale(.96); opacity:0; transition:transform .28s cubic-bezier(.22,1,.36,1),opacity .2s ease; } .is-open .category-dropdown-menu { transform:none; opacity:1; }',desc:'分类选择器展开、选中与收起',preview:function(c){c.innerHTML='<div class="anime-category"><button type="button" class="anime-category-trigger"><span>Design</span><i class="fas fa-chevron-down"></i></button><div class="anime-category-menu"><button type="button" class="active" data-value="Design">Design</button><button type="button" data-value="Motion">Motion</button><button type="button" data-value="Code">Code</button></div></div>';var root=c.querySelector('.anime-category'),trigger=c.querySelector('.anime-category-trigger'),label=trigger.querySelector('span');function setOpen(open){root.classList.toggle('is-open',open);trigger.setAttribute('aria-expanded',String(open))}function dismiss(e){if(!root.isConnected){document.removeEventListener('pointerdown',dismiss,true);document.removeEventListener('keydown',dismiss,true);return}if(e.type==='keydown'){if(e.key==='Escape')setOpen(false);return}if(!root.contains(e.target))setOpen(false)}document.addEventListener('pointerdown',dismiss,true);document.addEventListener('keydown',dismiss,true);trigger.addEventListener('click',function(e){e._motionPreviewHandled=true;setOpen(!root.classList.contains('is-open'))});root.querySelector('.anime-category-menu').addEventListener('click',function(e){var option=e.target.closest('button');if(!option)return;e._motionPreviewHandled=true;label.textContent=option.dataset.value;root.querySelectorAll('.anime-category-menu button').forEach(function(item){item.classList.toggle('active',item===option)});setOpen(false)})}},
{_id:'button-builtin-morph-action-pill',name:'Morph Action Expand Pill',duration:'360ms',curve:'cubic-bezier(.22,1,.36,1)',preserveTransition:true,css:'.morph-action-pill { width:42px; height:42px; padding:4px; gap:4px; background:#3a3a3a; transition:width .36s cubic-bezier(.22,1,.36,1); } .morph-action-pill.is-open { width:156px; } .morph-action-pill > button { flex:0 0 34px; width:34px; height:34px; background:#fff; border:1px solid rgba(0,0,0,.12); border-radius:50%; }',desc:'主操作按钮形变展开为操作胶囊',preview:function(c){c.innerHTML='<div class="anime-morph-pill"><button type="button" class="anime-morph-main" aria-label="展开操作"><i class="fas fa-plus"></i></button><div class="anime-morph-actions"><button type="button"><i class="fas fa-pen"></i></button><button type="button"><i class="fas fa-link"></i></button><button type="button"><i class="fas fa-trash"></i></button></div></div>';var root=c.querySelector('.anime-morph-pill'),main=c.querySelector('.anime-morph-main');main.addEventListener('click',function(e){e._motionPreviewHandled=true;var open=!root.classList.contains('is-open');root.classList.toggle('is-open',open);main.setAttribute('aria-expanded',String(open))});root.querySelector('.anime-morph-actions').addEventListener('click',function(e){if(e.target.closest('button')){e._motionPreviewHandled=true;root.classList.remove('is-open')}})}},
{_id:'button-builtin-actions-context-menu',name:'Actions Context Menu',duration:'260ms',curve:'cubic-bezier(.22,1,.36,1)',preserveTransition:true,css:'.actions-context-menu { transform-origin:top right; transform:translateY(-5px) scale(.96); opacity:0; transition:transform .26s cubic-bezier(.22,1,.36,1),opacity .18s ease; } .is-open .actions-context-menu { transform:none; opacity:1; }',desc:'操作按钮弹出上下文菜单',preview:function(c){c.innerHTML='<div class="anime-context"><button type="button" class="anime-context-trigger" aria-label="打开操作菜单"><i class="fas fa-ellipsis-h"></i></button><div class="anime-context-menu"><button type="button"><i class="fas fa-copy"></i><span>Duplicate</span></button><button type="button"><i class="fas fa-pen"></i><span>Rename</span></button><button type="button" class="danger"><i class="fas fa-trash"></i><span>Delete</span></button></div></div>';var root=c.querySelector('.anime-context'),trigger=c.querySelector('.anime-context-trigger');function setOpen(open){root.classList.toggle('is-open',open);trigger.setAttribute('aria-expanded',String(open))}function dismiss(e){if(!root.isConnected){document.removeEventListener('pointerdown',dismiss,true);document.removeEventListener('keydown',dismiss,true);return}if(e.type==='keydown'){if(e.key==='Escape')setOpen(false);return}if(!root.contains(e.target))setOpen(false)}document.addEventListener('pointerdown',dismiss,true);document.addEventListener('keydown',dismiss,true);trigger.addEventListener('click',function(e){e._motionPreviewHandled=true;setOpen(!root.classList.contains('is-open'))});root.querySelector('.anime-context-menu').addEventListener('click',function(e){if(e.target.closest('button')){e._motionPreviewHandled=true;setOpen(false)}})}}
);
/* ----- Card (6) ----- */
MotionAnimations.card = [
{name:'滑动切换',duration:'400ms',curve:'cubic-bezier(.22,1,.36,1)',css:'.cards-switch-demo .swiper-slide { background:#fff; border:1px solid rgba(0,0,0,.08); border-radius:14px; box-shadow:0 4px 12px rgba(0,0,0,.06); transition-timing-function:cubic-bezier(.22,1,.36,1); }',desc:'三张白色卡片左右滑动，以 Swiper Cards 堆叠切换',preview:function(c){
  var demo=this;
  c.innerHTML='<div class="swiper cards-switch-demo" tabindex="0" role="region" aria-roledescription="轮播" aria-label="滑动切换卡片"><div class="swiper-wrapper"><div class="swiper-slide cards-switch-card"></div><div class="swiper-slide cards-switch-card"></div><div class="swiper-slide cards-switch-card"></div></div></div>';
  var stage=c.querySelector('.cards-switch-demo');
  function duration(){var value=String(demo.duration||'400ms'),number=parseFloat(value);return isFinite(number)?Math.max(0,/ms$/i.test(value)?number:number*1000):400}
  function syncParameters(swiper){swiper.params.speed=duration();stage.style.setProperty('--cards-switch-ease',demo.curve||'ease')}
  stage.style.setProperty('--cards-switch-ease',demo.curve||'ease');
  var swiper=new Swiper(stage,{
    effect:'cards',cardsEffect:{slideShadows:false},speed:duration(),initialSlide:1,
    rewind:true,grabCursor:true,slideToClickedSlide:true,
    a11y:{containerMessage:'滑动切换卡片',itemRoleDescriptionMessage:'卡片',slideLabelMessage:'第 {{index}} 张，共 {{slidesLength}} 张'},
    on:{touchStart:syncParameters}
  });
  stage.addEventListener('pointerdown',function(e){e.stopPropagation()});
  stage.addEventListener('click',function(e){e._motionPreviewHandled=true;e.stopPropagation()});
  stage.addEventListener('keydown',function(e){
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
    e.preventDefault();e.stopPropagation();syncParameters(swiper);
    if(e.key==='ArrowLeft')swiper.slidePrev();
    else if(e.key==='ArrowRight')swiper.slideNext();
    else swiper.slideTo(e.key==='Home'?0:2);
  });
  // Previews are rebuilt when switching categories or updating editor parameters.
  var observer=new MutationObserver(function(){if(!stage.isConnected){observer.disconnect();swiper.destroy(true,true)}});
  observer.observe(document.body,{childList:true,subtree:true});
}},
{name:'舞台互动',duration:'450ms',curve:'cubic-bezier(.22,1,.36,1)',css:'.stage-cover-card { background: rgba(0,0,0,.1); transition: transform .45s cubic-bezier(.22,1,.36,1), opacity .45s ease; }',desc:'点击左右侧卡片切换的单色 Cover Flow',preview:function(c){c.innerHTML='<div class="stage-cover-demo" role="group" aria-label="舞台互动"><button type="button" class="stage-cover-card" aria-label="卡片一"></button><button type="button" class="stage-cover-card" aria-label="卡片二"></button><button type="button" class="stage-cover-card" aria-label="卡片三"></button><button type="button" class="stage-cover-card" aria-label="卡片四"></button><button type="button" class="stage-cover-card" aria-label="卡片五"></button></div>';var stage=c.querySelector('.stage-cover-demo'),cards=Array.from(c.querySelectorAll('.stage-cover-card')),active=2,startX=null,startCard=null,deltaX=0,dragged=false;function shortest(index){var distance=index-active;if(distance>cards.length/2)distance-=cards.length;if(distance<-cards.length/2)distance+=cards.length;return distance}function render(offset){cards.forEach(function(card,index){var distance=shortest(index),drag=(offset||0),x=distance*38+drag,y=Math.abs(distance)*3,scale=distance===0?1:Math.abs(distance)===1?.82:.72,rotate=-distance*18;card.dataset.distance=String(distance);card.style.zIndex=String(10-Math.abs(distance));card.style.opacity=Math.abs(distance)>2?'0':distance===0?'1':Math.abs(distance)===1?'.78':'.52';card.style.transform='translateX('+x+'px) translateY('+y+'px) scale('+scale+') rotateY('+rotate+'deg)';card.style.pointerEvents=Math.abs(distance)<=2?'auto':'none';card.tabIndex=Math.abs(distance)===1?0:-1})}function move(direction){active=(active+(direction>0?1:cards.length-1))%cards.length;render(0)}stage.addEventListener('pointerdown',function(e){startX=e.clientX;startCard=e.target.closest('.stage-cover-card');deltaX=0;dragged=false;stage.setPointerCapture(e.pointerId)});stage.addEventListener('pointermove',function(e){if(startX===null)return;deltaX=e.clientX-startX;if(Math.abs(deltaX)>4)dragged=true;render(deltaX*.45)});stage.addEventListener('pointerup',function(e){if(startX===null)return;stage.releasePointerCapture(e.pointerId);if(dragged&&Math.abs(deltaX)>24)move(deltaX<0?1:-1);else{var distance=Number(startCard&&startCard.dataset.distance);if(distance<0)move(-1);else if(distance>0)move(1);else render(0)}startX=null;startCard=null;deltaX=0;dragged=false});stage.addEventListener('pointercancel',function(){startX=null;startCard=null;deltaX=0;dragged=false;render(0)});render(0)}},
{name:'下拉菜单形变',duration:'250ms',curve:'cubic-bezier(.22,1,.36,1)',preserveTransition:true,css:':root { --dropdown-open-dur:250ms; --dropdown-close-dur:150ms; --dropdown-pre-scale:.97; --dropdown-closing-scale:.99; --dropdown-ease:cubic-bezier(.22,1,.36,1); } .t-dropdown { transform-origin:top center; transform:scale(var(--dropdown-pre-scale)) translateZ(0); opacity:0; pointer-events:none; transition:transform var(--dropdown-open-dur) var(--dropdown-ease),opacity var(--dropdown-open-dur) var(--dropdown-ease); will-change:transform,opacity; } .t-dropdown.is-open { transform:scale(1) translateZ(0); opacity:1; pointer-events:auto; } .t-dropdown.is-closing { transform:scale(var(--dropdown-closing-scale)) translateZ(0); opacity:0; pointer-events:none; transition:transform var(--dropdown-close-dur) var(--dropdown-ease),opacity var(--dropdown-close-dur) var(--dropdown-ease); }',desc:'由触发按钮原点展开与收拢的菜单',preview:function(c){c.innerHTML='<div class="dropdown-morph-demo"><button type="button" class="dropdown-morph-trigger">切换菜单</button><div class="t-dropdown dropdown-morph-surface is-open"><span class="dropdown-morph-line line-1"></span><span class="dropdown-morph-line line-2"></span><span class="dropdown-morph-line line-3"></span></div></div>';var trigger=c.querySelector('.dropdown-morph-trigger'),menu=c.querySelector('.t-dropdown'),closeTimer=null;function toggle(){clearTimeout(closeTimer);if(menu.classList.contains('is-open')){menu.classList.remove('is-open');menu.classList.add('is-closing');closeTimer=setTimeout(function(){if(menu.isConnected)menu.classList.remove('is-closing')},150)}else{menu.classList.remove('is-closing');menu.classList.add('is-open')}}trigger.addEventListener('click',function(e){e._motionPreviewHandled=true;toggle()});menu.addEventListener('click',function(e){e._motionPreviewHandled=true;toggle()})}},
{name:'分享动画',duration:'200ms',curve:'cubic-bezier(.08,.82,.17,1)',exitCurve:'cubic-bezier(.78,.14,.15,.86)',direction:45,css:'transform-origin: var(--share-origin-x) var(--share-origin-y); animation: sharePopoverDirectionalIn .2s cubic-bezier(.08,.82,.17,1) both; @keyframes sharePopoverDirectionalIn { from { opacity: 0; transform: translate(var(--share-x),var(--share-y)) scale(.8); } to { opacity: 1; transform: translate(0,0) scale(1); } }',desc:'沿方向缩放淡入，点击再次反向淡出',preview:function(c){c.innerHTML='<div class="share-motion-demo"><div class="share-motion-popover" role="button" tabindex="0" aria-label="播放分享动画"><div class="share-motion-title">分享</div><div class="share-motion-link"><svg class="share-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg><span>iflyrec.com/share/meeting</span><button class="share-motion-copy">复制</button></div></div></div>';var p=c.querySelector('.share-motion-popover'),opened=false,restoreTimer=null,thisDemo=MotionAnimations.card.find(function(item){return item.name==='分享动画'}),angle=Number(thisDemo.direction);if(!isFinite(angle))angle=45;var rad=angle*Math.PI/180,dx=Math.sin(rad)*18,dy=-Math.cos(rad)*18,originX=Math.abs(dx)<1?'50%':(dx>0?'100%':'0%'),originY=Math.abs(dy)<1?'50%':(dy>0?'100%':'0%');p.style.setProperty('--share-x',dx.toFixed(2)+'px');p.style.setProperty('--share-y',dy.toFixed(2)+'px');p.style.setProperty('--share-origin-x',originX);p.style.setProperty('--share-origin-y',originY);function playPopover(leaving){var seconds=(parseInt(thisDemo.duration)||200)/1000,curve=leaving?thisDemo.exitCurve:thisDemo.curve;p.style.animation='none';void p.offsetWidth;p.style.animation=(leaving?'sharePopoverDirectionalOut ':'sharePopoverDirectionalIn ')+seconds+'s '+curve+' both';p.style.animationPlayState='running'}function trigger(e){if(e&&e.target.closest('.share-motion-copy'))return;clearTimeout(restoreTimer);var leaving=opened&&thisDemo.exitEnabled;playPopover(leaving);opened=!leaving;if(leaving){restoreTimer=setTimeout(function(){if(!p.isConnected)return;playPopover(false);opened=true},8000)}}p.addEventListener('click',trigger);p.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();trigger(e)}})}},
{name:'Hover Lift',duration:'300ms',curve:'cubic-bezier(0.2,0.9,0.4,1)',css:'transition: transform .3s cubic-bezier(0.2,0.9,0.4,1), box-shadow .3s ease',desc:'悬浮上移 8px',preview:function(c){c.innerHTML='<div class="card-demo" id="cardLift"><div class="demo-card-el"><div class="card-visual"></div><div class="card-info"><div class="card-title">Card Title</div><div class="card-sub">悬浮上移</div></div></div></div>';var e=c.querySelector('.demo-card-el');e.addEventListener('mouseenter',function(){e.style.transform='translateY(-6px)';e.style.boxShadow='0 16px 40px rgba(0,0,0,0.4)'});e.addEventListener('mouseleave',function(){e.style.transform='';e.style.boxShadow=''})}},
{name:'Glass Blur',duration:'300ms',curve:'ease',css:'transition: backdrop-filter .3s ease, background .3s ease',desc:'悬浮毛玻璃模糊',preview:function(c){c.innerHTML='<div class="card-demo" id="cardGlass"><div class="demo-card-el glass-card"><div class="card-visual" style="background:linear-gradient(135deg,#6c5ce7,#a29bfe)"></div><div class="card-info"><div class="card-title">Glass</div><div class="card-sub">悬浮模糊</div></div></div></div>';var e=c.querySelector('.demo-card-el');e.addEventListener('mouseenter',function(){e.style.backdropFilter='blur(8px)';e.style.background='rgba(255,255,255,0.12)'});e.addEventListener('mouseleave',function(){e.style.backdropFilter='';e.style.background=''})}},
{name:'Tilt',duration:'300ms',curve:'cubic-bezier(0.34,1.56,0.64,1)',css:'transition: transform .3s cubic-bezier(0.34,1.56,0.64,1)',desc:'3D 倾斜跟随鼠标',preview:function(c){c.innerHTML='<div class="card-demo" id="cardTilt"><div class="demo-card-el tilt-card"><div class="card-visual" style="background:linear-gradient(135deg,#fd79a8,#e84393)"></div><div class="card-info"><div class="card-title">Tilt</div><div class="card-sub">3D 倾斜</div></div></div></div>';var e=c.querySelector('.demo-card-el');e.addEventListener('mousemove',function(ev){var r=this.getBoundingClientRect();this.style.transform='perspective(400px) rotateY('+((ev.clientX-r.left)/r.width-0.5)*12+'deg) rotateX('+((0.5-(ev.clientY-r.top)/r.height)*12)+'deg)'});e.addEventListener('mouseleave',function(){this.style.transform=''})}},
{name:'Spotlight',duration:'300ms',curve:'ease-out',css:'transition: box-shadow .3s ease-out',desc:'聚光灯阴影效果',preview:function(c){c.innerHTML='<div class="card-demo" id="cardSpot"><div class="demo-card-el spot-card"><div class="card-visual" style="background:linear-gradient(135deg,#00cec9,#00b894)"></div><div class="card-info"><div class="card-title">Spotlight</div><div class="card-sub">聚光灯</div></div></div></div>';var e=c.querySelector('.demo-card-el');e.addEventListener('mouseenter',function(){e.style.boxShadow='0 0 40px rgba(108,92,231,0.3), 0 0 80px rgba(108,92,231,0.1)'});e.addEventListener('mouseleave',function(){e.style.boxShadow=''})}},
{name:'Shadow Grow',duration:'250ms',curve:'cubic-bezier(0.25,0.46,0.45,0.94)',css:'transition: box-shadow .25s cubic-bezier(0.25,0.46,0.45,0.94), transform .25s ease',desc:'阴影扩大加深',preview:function(c){c.innerHTML='<div class="card-demo" id="cardShadow"><div class="demo-card-el shadow-card"><div class="card-visual" style="background:linear-gradient(135deg,#fab1a0,#e17055)"></div><div class="card-info"><div class="card-title">Shadow</div><div class="card-sub">阴影扩大</div></div></div></div>';var e=c.querySelector('.demo-card-el');e.addEventListener('mouseenter',function(){e.style.boxShadow='0 24px 48px -8px rgba(0,0,0,0.5)';e.style.transform='translateY(-2px)'});e.addEventListener('mouseleave',function(){e.style.boxShadow='';e.style.transform=''})}},
{name:'Float',duration:'800ms',curve:'cubic-bezier(0.2,0.9,0.4,1)',css:'animation: floatCard .8s cubic-bezier(0.2,0.9,0.4,1) infinite alternate',desc:'持续浮动',preview:function(c){c.innerHTML='<div class="card-demo" id="cardFloat"><div class="demo-card-el" style="animation:floatCard .8s cubic-bezier(0.2,0.9,0.4,1) infinite alternate;"><div class="card-visual" style="background:linear-gradient(135deg,#81ecec,#00cec9)"></div><div class="card-info"><div class="card-title">Float</div><div class="card-sub">持续浮动</div></div></div></div>'}}
,
{name:'卡片堆叠悬停',duration:'500ms',curve:'cubic-bezier(.34,1.56,.64,1)',preserveTransition:true,css:'.card-stack-hover-card { transition: transform .5s cubic-bezier(.34,1.56,.64,1); } .card-stack-hover:hover .card-stack-hover-card--left { transform: translateX(-34px) rotate(-14deg); } .card-stack-hover:hover .card-stack-hover-card--right { transform: translateX(34px) rotate(10deg); }',desc:'悬停时三张卡片以弹性曲线向左右展开',preview:function(c){c.innerHTML='<div class="card-stack-hover" role="group" aria-label="卡片堆叠悬停"><div class="card-stack-hover-card card-stack-hover-card--left" aria-hidden="true"></div><div class="card-stack-hover-card card-stack-hover-card--right" aria-hidden="true"></div><div class="card-stack-hover-card card-stack-hover-card--front" aria-hidden="true"></div></div>'}}
];
MotionAnimations.card.forEach(function(item,index){item._id=item.name==='滑动切换'?'card-builtin-swiper-cards':item.name==='舞台互动'?'card-builtin-stage-cover':item.name==='下拉菜单形变'?'card-builtin-dropdown-morph':item.name==='卡片堆叠悬停'?'card-builtin-stack-hover':'card-builtin-'+(index-3)});
var stageCoverDemo=MotionAnimations.card.find(function(item){return item._id==='card-builtin-stage-cover'});
if(stageCoverDemo)stageCoverDemo.preview=function(c){
  c.innerHTML='<div class="stage-cover-demo" role="group" aria-label="舞台互动"><button type="button" class="stage-cover-card" aria-label="卡片一"></button><button type="button" class="stage-cover-card" aria-label="卡片二"></button><button type="button" class="stage-cover-card" aria-label="卡片三"></button><button type="button" class="stage-cover-card" aria-label="卡片四"></button><button type="button" class="stage-cover-card" aria-label="卡片五"></button></div>';
  var stage=c.querySelector('.stage-cover-demo'),cards=Array.from(c.querySelectorAll('.stage-cover-card')),active=2,startX=null,startCard=null,deltaX=0,dragged=false;
  function render(offset){cards.forEach(function(card,index){var distance=index-active,drag=offset||0,x=distance*38+drag,y=Math.abs(distance)*3,scale=distance===0?1:Math.abs(distance)===1?.82:.72,rotate=-distance*18;card.dataset.distance=String(distance);card.style.zIndex=String(10-Math.abs(distance));card.style.opacity=Math.abs(distance)>2?'0':'1';card.style.transform='translateX('+x+'px) translateY('+y+'px) scale('+scale+') rotateY('+rotate+'deg)';card.style.pointerEvents=Math.abs(distance)<=2?'auto':'none';card.tabIndex=Math.abs(distance)===1?0:-1})}
  function move(direction){active=Math.max(0,Math.min(cards.length-1,active+(direction>0?1:-1)));render(0)}
  stage.addEventListener('pointerdown',function(e){startX=e.clientX;startCard=e.target.closest('.stage-cover-card');deltaX=0;dragged=false;stage.setPointerCapture(e.pointerId)});
  stage.addEventListener('pointermove',function(e){if(startX===null)return;deltaX=e.clientX-startX;if(Math.abs(deltaX)>4)dragged=true;render(deltaX*.45)});
  stage.addEventListener('pointerup',function(e){if(startX===null)return;stage.releasePointerCapture(e.pointerId);if(dragged&&Math.abs(deltaX)>24)move(deltaX<0?1:-1);else{var distance=Number(startCard&&startCard.dataset.distance);if(distance<0)move(-1);else if(distance>0)move(1);else render(0)}startX=null;startCard=null;deltaX=0;dragged=false});
  stage.addEventListener('pointercancel',function(){startX=null;startCard=null;deltaX=0;dragged=false;render(0)});render(0);
};
/* Amicro Card Spreads collection. Each spread keeps the original interaction model: hover or drag to deploy, click side cards to navigate. */
(function(){
  var spreadSpecs=[
    ['ARC (5 Cards)','Fanned card layout forming a neat curved arc with 5 items.','arc5'],
    ['ARC (7 Cards)','Expanded card arc layout accommodating 7 items cleanly.','arc7'],
    ['Long ARC (5 Cards)','Wide, sweeping card arc extending translations laterally.','longArc'],
    ['Linear Spread','Slides cards horizontally in a linear row without rotations.','linear'],
    ['Corner Fan','Fans elements radially from a fixed bottom-left origin anchor.','corner'],
    ['Stamp Arc (Adjustable)','Perforated stamp cards with dynamic arc, gap, and offset slider controls.','stamp'],
    ['Cascade Stagger Fan','Deploys 5 cards vertically and staggered in a diagonal cascade stack.','cascade'],
    ['Scatter Desk Deal','Scatters cards into an overlapping dealt hand layout on hover.','scatter'],
    ['Wheel Radial Fan','Fans cards outward in a radial semi-circle around a bottom-center anchor.','wheel'],
    ['Interactive Carousel (Monochrome)','An interactive arc-based 3D motion carousel rendering clean monochrome cards.','carousel'],
    ['CoverFlow Carousel (Monochrome)','A premium 3D CoverFlow carousel rendering clean monochrome cards.','coverflow'],
    ['Time Machine Stack (Monochrome)','Apple-style perspective depth card stack rendering monochrome cards.','timemachine']
  ];
  function makeSpread(spec){
    var name=spec[0],desc=spec[1],kind=spec[2];
    return {_id:'card-amicro-'+kind,name:name,duration:kind==='stamp'?'500ms':'450ms',curve:'cubic-bezier(.22,1,.36,1)',css:'transition: transform .45s cubic-bezier(.22,1,.36,1), opacity .45s ease;',desc:desc,preview:function(c){
      var count=kind==='arc7'?7:5, html='<div class="amicro-spread amicro-'+kind+'" role="group" aria-label="'+name+'">';
      for(var i=0;i<count;i++)html+='<button type="button" class="amicro-spread-card" aria-label="Card '+(i+1)+'"></button>';
      html+='</div>';c.innerHTML=html;
      var root=c.firstElementChild,cards=Array.from(root.querySelectorAll('.amicro-spread-card')),active=Math.floor(count/2),startX=null,delta=0;
      function render(offset){cards.forEach(function(card,i){var d=i-active;card.dataset.distance=String(d);if(kind==='carousel'||kind==='coverflow'||kind==='timemachine'){card.style.transform='translateX('+(d*34+(offset||0))+'px) translateZ('+(-Math.abs(d)*22)+'px) rotateY('+(d*-24)+'deg) scale('+(d===0?1:.78)+')'}else if(kind==='linear'){card.style.transform='translateX('+(d*38+(offset||0))+'px) rotate(0deg)'}else if(kind==='longArc'){card.style.transform='translateX('+(d*40+(offset||0))+'px) translateY('+(Math.abs(d)*10)+'px) rotate('+(d*8)+'deg)'}else if(kind==='scatter'){card.style.transform='translate('+(d*33+(offset||0))+'px,'+((i%2?1:-1)*Math.abs(d)*6)+'px) rotate('+(d*13+(i%2?2:-2))+'deg)'}else if(kind==='corner'){card.style.transform='translate('+(d*20+(offset||0))+'px,'+Math.abs(d)*-10+'px) rotate('+(d*14)+'deg)'}else if(kind==='cascade'){card.style.transform='translate('+(d*20+(offset||0))+'px,'+(Math.abs(d)*14)+'px) rotate('+(d*5)+'deg)'}else if(kind==='wheel'){card.style.transform='translateX('+(d*30+(offset||0))+'px) translateY('+(Math.abs(d)*10)+'px) rotate('+(d*16)+'deg)'}else{card.style.transform='translateX('+(d*30+(offset||0))+'px) translateY('+(Math.abs(d)*7)+'px) rotate('+(d*10)+'deg)'}card.style.zIndex=String(20-Math.abs(d));card.style.opacity=Math.abs(d)>3?'0':'1';card.style.pointerEvents=Math.abs(d)<=2?'auto':'none'});}
      function move(dir){active=Math.max(0,Math.min(count-1,active+dir));render(0)}
      root.addEventListener('pointerdown',function(e){startX=e.clientX;delta=0;root.setPointerCapture(e.pointerId)});root.addEventListener('pointermove',function(e){if(startX===null)return;delta=e.clientX-startX;render(delta*.5)});root.addEventListener('pointerup',function(e){if(startX===null)return;root.releasePointerCapture(e.pointerId);if(Math.abs(delta)>20)move(delta<0?1:-1);else if(e.target.closest('.amicro-spread-card')){var d=Number(e.target.closest('.amicro-spread-card').dataset.distance||0);if(d<0)move(-1);else if(d>0)move(1);else move(1)}startX=null;delta=0;render(0)});root.addEventListener('pointercancel',function(){startX=null;delta=0;render(0)});render(0);
    }};
  }
  spreadSpecs.forEach(function(spec){if(!MotionAnimations.card.some(function(item){return item.name===spec[0]}))MotionAnimations.card.push(makeSpread(spec));});
MotionAnimations.tab.push(
{_id:'tab-extra-fold',name:'折叠标签切换',duration:'280ms',curve:'cubic-bezier(.22,1,.36,1)',desc:'激活标签展开文字，其他标签折叠',css:'transition:width .28s cubic-bezier(.22,1,.36,1)',preview:function(c){c.innerHTML='<div class="extra-fold-tabs"><button class="active"><img src="assets/tab-home.svg" alt=""><em>首页</em></button><button><img src="assets/tab-favorite.svg" alt=""><em>收藏</em></button><button><img src="assets/tab-settings.svg" alt=""><em>设置</em></button></div>';var a=Array.from(c.querySelectorAll('button'));a.forEach(function(x){x.onclick=function(e){e._motionPreviewHandled=true;a.forEach(function(y){y.classList.toggle('active',x===y)})}})}},
{_id:'tab-extra-liquid-line',name:'液态下划线',duration:'320ms',curve:'cubic-bezier(.22,1,.36,1)',desc:'下划线沿横向平滑切换',css:'transition:transform .32s cubic-bezier(.22,1,.36,1)',preview:function(c){c.innerHTML='<div class="extra-liquid-tabs"><i></i><button class="active">作品</button><button>灵感</button><button>收藏</button></div>';var r=c.firstElementChild,line=r.querySelector('i'),a=Array.from(r.querySelectorAll('button'));function go(x){a.forEach(function(y){y.classList.toggle('active',x===y)});line.style.width=x.offsetWidth+'px';line.style.transform='translateX('+x.offsetLeft+'px)'}a.forEach(function(x){x.onclick=function(e){e._motionPreviewHandled=true;go(x)}});go(a[0])}},
{_id:'tab-extra-vertical',name:'垂直轨道切换',duration:'320ms',curve:'cubic-bezier(.22,1,.36,1)',desc:'垂直指示块跟随选项移动',css:'transition:transform .32s cubic-bezier(.22,1,.36,1)',preview:function(c){c.innerHTML='<div class="extra-vertical-tabs"><i></i><button class="active">概览</button><button>数据</button><button>设置</button></div>';var r=c.firstElementChild,p=r.querySelector('i'),a=Array.from(r.querySelectorAll('button'));function go(x){a.forEach(function(y){y.classList.toggle('active',x===y)});p.style.transform='translateY('+x.offsetTop+'px)'}a.forEach(function(x){x.onclick=function(e){e._motionPreviewHandled=true;go(x)}});go(a[0])}},
{_id:'tab-extra-bounce-pill',name:'弹跳胶囊切换',duration:'460ms',curve:'cubic-bezier(.34,1.56,.64,1)',desc:'选中胶囊移动结束后轻微弹跳',css:'transition:transform .46s cubic-bezier(.34,1.56,.64,1)',preview:function(c){c.innerHTML='<div class="extra-bounce-tabs"><i></i><button class="active">A</button><button>B</button><button>C</button><button>D</button></div>';var r=c.firstElementChild,p=r.querySelector('i'),a=Array.from(r.querySelectorAll('button'));function go(x){a.forEach(function(y){y.classList.toggle('active',x===y)});p.style.transform='translateX('+x.offsetLeft+'px)'}a.forEach(function(x){x.onclick=function(e){e._motionPreviewHandled=true;go(x)}});go(a[0])}},
{_id:'tab-extra-fade-content',name:'内容淡换标签',duration:'260ms',curve:'ease-out',desc:'标签与内容区域同步淡入淡出',css:'transition:opacity .26s ease-out',preview:function(c){c.innerHTML='<div class="extra-content-tabs"><nav><button class="active">图片</button><button>视频</button><button>文件</button></nav><p>图片内容</p></div>';var a=Array.from(c.querySelectorAll('button')),p=c.querySelector('p');a.forEach(function(x){x.onclick=function(e){e._motionPreviewHandled=true;a.forEach(function(y){y.classList.toggle('active',x===y)});p.style.opacity='0';setTimeout(function(){p.textContent=x.textContent+'内容';p.style.opacity='1'},130)}})}}
);
MotionAnimations.text.push(
{_id:'text-builtin-gradient-text',name:'渐变文字',duration:'1600ms',curve:'linear',css:'.gradient-text { background:linear-gradient(90deg,#6c5ce7 0%,#a29bfe 50%,#6c5ce7 100%); background-size:200% 100%; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; animation:gradientTextFlow 1.6s linear infinite; } @keyframes gradientTextFlow { from { background-position:0% 50%; } to { background-position:200% 50%; } }',desc:'渐变色沿文字表面持续流动',preview:function(c){c.innerHTML='<div class="text-demo" id="textGradientText"><div class="text-anim-wrap"><span class="gradient-text t-line" style="-webkit-text-fill-color:transparent;color:transparent;">Gradient Text</span></div></div>'}},
{_id:'text-extra-flip-chars',name:'字符翻转',duration:'700ms',curve:'cubic-bezier(.22,1,.36,1)',desc:'字符依次沿 X 轴翻转进入',css:'animation:extraCharFlip .7s cubic-bezier(.22,1,.36,1) both',preview:function(c){c.innerHTML='<div class="extra-char-flip">FLIP</div>';var r=c.firstElementChild,t=r.textContent;r.textContent='';Array.from(t).forEach(function(ch,i){var s=document.createElement('span');s.textContent=ch;s.style.animationDelay=i*90+'ms';r.appendChild(s)})}},
{_id:'text-extra-blur-stagger',name:'错落清晰',duration:'650ms',curve:'cubic-bezier(.22,1,.36,1)',desc:'单词从模糊状态依次变清晰',css:'animation:extraBlurWord .65s cubic-bezier(.22,1,.36,1) both',preview:function(c){c.innerHTML='<div class="extra-blur-words"><span>Make</span><span>Motion</span><span>Clear</span></div>'}},
{_id:'text-extra-outline-fill',name:'描边填充',duration:'1600ms',curve:'ease-in-out',desc:'文字从描边逐渐填充为实心',css:'animation:extraOutlineFill 1.6s ease-in-out infinite alternate',preview:function(c){c.innerHTML='<div class="extra-outline-text">MOTION</div>'}},
{_id:'text-extra-type-erase',name:'输入删除循环',duration:'2200ms',curve:'steps(8)',desc:'文字逐字输入后反向删除',css:'animation:extraTypeErase 2.2s steps(8) infinite',preview:function(c){c.innerHTML='<div class="extra-type-erase">Animation</div>'}},
{_id:'text-extra-rolling',name:'反转文字',duration:'700ms',curve:'cubic-bezier(.22,1,.36,1)',delay:'70ms',desc:'字符依次沿 X 轴翻转进入，形成滚动文字效果',css:'animation:rollingText .7s cubic-bezier(.22,1,.36,1) both',preview:function(c){c.innerHTML='<div class="rolling-text-demo" aria-label="Rolling Text"></div>';var w=c.firstElementChild,t='Rolling Text';Array.from(t).forEach(function(ch,i){var s=document.createElement('span');s.className='rolling-text-char';s.textContent=ch===' '?'\u00a0':ch;s.style.setProperty('--rolling-delay',(i*70)+'ms');w.appendChild(s)});function play(){w.classList.remove('is-playing');void w.offsetWidth;w.classList.add('is-playing')}play();setInterval(play,2600)}}
);
MotionAnimations.button.push(
{_id:'button-error-shake',name:'错误抖动',duration:'280ms',curve:'cubic-bezier(.22,1,.36,1)',desc:'点击后输入框抖动并显示错误提示',css:'animation:tInputShake 280ms linear; transition:border-color 150ms ease-out',preview:function(c){c.innerHTML='<div class="error-shake-demo"><button type="button" class="error-shake-input" aria-describedby="error-shake-message">请输入邮箱地址</button><p id="error-shake-message" class="error-shake-message" role="status">请输入有效的邮箱地址</p></div>';var wrap=c.firstElementChild,input=wrap.querySelector('button'),timer;input.addEventListener('click',function(e){e._motionPreviewHandled=true;clearTimeout(timer);wrap.classList.add('is-error');input.classList.remove('is-shaking');void input.offsetWidth;input.classList.add('is-shaking');timer=setTimeout(function(){wrap.classList.remove('is-error');input.classList.remove('is-shaking')},3000)})}},
{_id:'button-extra-fill',name:'背景填充推进',duration:'320ms',curve:'cubic-bezier(.22,1,.36,1)',desc:'背景色从左向右填充按钮',css:'transition:transform .32s cubic-bezier(.22,1,.36,1)',preview:function(c){c.innerHTML='<button class="extra-fill-btn"><i></i><span>开始体验</span></button>'}},
{_id:'button-extra-icon-swap',name:'图标交换',duration:'250ms',curve:'ease-in-out',preserveTransition:true,desc:'点击按钮后图标淡入淡出并完成交换',css:':root { --icon-swap-dur:250ms; --icon-swap-blur:2px; --icon-swap-start-scale:.25; --icon-swap-ease:ease-in-out; } .t-icon-swap { position:relative; display:inline-grid; } .t-icon-swap .t-icon { grid-area:1 / 1; transition:opacity var(--icon-swap-dur) var(--icon-swap-ease),filter var(--icon-swap-dur) var(--icon-swap-ease),transform var(--icon-swap-dur) var(--icon-swap-ease); will-change:opacity,filter,transform; } .t-icon-swap[data-state="a"] .t-icon[data-icon="a"], .t-icon-swap[data-state="b"] .t-icon[data-icon="b"] { opacity:1; filter:blur(0); transform:scale(1); } .t-icon-swap[data-state="a"] .t-icon[data-icon="b"], .t-icon-swap[data-state="b"] .t-icon[data-icon="a"] { opacity:0; filter:blur(var(--icon-swap-blur)); transform:scale(var(--icon-swap-start-scale)); } @media (prefers-reduced-motion:reduce) { .t-icon-swap .t-icon { transition:none!important; } }',preview:function(c){c.innerHTML='<button type="button" class="extra-icon-swap t-icon-swap" data-state="a" aria-label="图标交换"><i class="t-icon" data-icon="a" aria-hidden="true">＋</i><i class="t-icon" data-icon="b" aria-hidden="true">✓</i></button>';var b=c.firstElementChild;b.onclick=function(e){e._motionPreviewHandled=true;b.dataset.state=b.dataset.state==='a'?'b':'a'}}},
{_id:'button-extra-hold',name:'长按进度',duration:'900ms',curve:'linear',desc:'按住按钮时进度从左向右增长',css:'transition:width .9s linear',preview:function(c){c.innerHTML='<button class="extra-hold-btn"><i></i><span>长按确认</span></button>';var b=c.firstElementChild;function on(){b.classList.add('holding')}function off(){b.classList.remove('holding')}b.onpointerdown=function(e){e._motionPreviewHandled=true;on()};b.onpointerup=off;b.onpointerleave=off;b.onpointercancel=off}},
{_id:'button-extra-spring',name:'弹簧反馈',duration:'480ms',curve:'cubic-bezier(.34,1.56,.64,1)',desc:'点击按钮产生压缩与弹簧回弹',css:'animation:extraSpringPress .48s cubic-bezier(.34,1.56,.64,1)',preview:function(c){c.innerHTML='<button class="extra-spring-btn">点击反馈</button>';var b=c.firstElementChild;b.onclick=function(e){e._motionPreviewHandled=true;b.classList.remove('play');void b.offsetWidth;b.classList.add('play')}}}
);
MotionAnimations.card.push(
{_id:'card-extra-layer-parallax',name:'分层视差卡片',duration:'300ms',curve:'ease-out',desc:'指针移动时卡片内容产生分层视差',css:'transition:transform .3s ease-out',preview:function(c){c.innerHTML='<div class="extra-parallax-card"><i></i><b>PARALLAX</b><span>Layer motion</span></div>';var d=c.firstElementChild;d.onpointermove=function(e){var r=d.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;d.style.transform='perspective(500px) rotateY('+(x*12)+'deg) rotateX('+(-y*12)+'deg)';d.querySelector('b').style.transform='translate('+x*8+'px,'+y*8+'px)'};d.onpointerleave=function(){d.style.transform='';d.querySelector('b').style.transform=''}}},
{_id:'card-extra-stack-hover',name:'卡片堆叠展开',duration:'420ms',curve:'cubic-bezier(.22,1,.36,1)',desc:'悬浮时堆叠卡片向两侧展开',css:'transition:transform .42s cubic-bezier(.22,1,.36,1)',preview:function(c){c.innerHTML='<div class="extra-stack-cards"><i></i><i></i><i></i></div>'}},
{_id:'card-extra-swipe-dismiss',name:'滑动移除卡片',duration:'360ms',curve:'cubic-bezier(.22,1,.36,1)',desc:'拖动卡片超过阈值后滑出并复位',css:'transition:transform .36s cubic-bezier(.22,1,.36,1)',preview:function(c){c.innerHTML='<div class="extra-dismiss-card">拖动移除</div>';var d=c.firstElementChild,s=null,x=0;d.onpointerdown=function(e){s=e.clientX;d.setPointerCapture(e.pointerId)};d.onpointermove=function(e){if(s===null)return;x=e.clientX-s;d.style.transform='translateX('+x+'px) rotate('+(x/12)+'deg)';d.style.opacity=String(1-Math.min(Math.abs(x)/150,.65))};d.onpointerup=function(e){if(s===null)return;d.releasePointerCapture(e.pointerId);if(Math.abs(x)>55){d.style.transform='translateX('+(x>0?220:-220)+'px) rotate('+(x>0?18:-18)+'deg)';d.style.opacity='0';setTimeout(function(){d.style.transition='none';d.style.transform='translateX(0)';requestAnimationFrame(function(){d.style.transition='';d.style.opacity='1'})},420)}else{d.style.transform='';d.style.opacity='1'}s=null;x=0}}},
{_id:'card-extra-border-glow',name:'边缘流光卡片',duration:'1800ms',curve:'linear',desc:'渐变光沿卡片边缘持续流动',css:'animation:extraCardGlow 1.8s linear infinite',preview:function(c){c.innerHTML='<div class="extra-glow-card"><span>GLOW</span></div>'}},
{_id:'card-extra-banner-stacking',name:'横幅叠加',duration:'350ms',curve:'cubic-bezier(.22,1,.36,1)',preserveTransition:true,desc:'每次点击在按钮上方加入一条横幅，旧横幅依次后退并在悬停时展开',css:':root { --stack-open:350ms; --stack-close:250ms; --stack-rise:60px; --stack-blur:2px; --stack-scale:.97; --stack-peek:8px; --stack-spread-gap:4px; --stack-depth-scale:.06; --stack-depth-fade:.4; --stack-ease:cubic-bezier(.22,1,.36,1); } .t-stack-banner { width:210px; height:30px; border-radius:52px; transition:transform var(--stack-open) var(--stack-ease),opacity var(--stack-open) var(--stack-ease),filter var(--stack-open) var(--stack-ease); } .t-stack-banner[data-depth="1"] { transform:translateY(-8px) scale(.94); opacity:.6; filter:blur(1px); } .t-stack-banner[data-depth="2"] { transform:translateY(-16px) scale(.88); opacity:.36; filter:blur(2px); } .t-stack.is-spread .t-stack-banner[data-depth="1"] { transform:translateY(-34px) scale(1); opacity:1; filter:blur(0); } .t-stack.is-spread .t-stack-banner[data-depth="2"] { transform:translateY(-68px) scale(1); opacity:1; filter:blur(0); }',preview:function(c){c.innerHTML='<div class="banner-stack-demo"><div class="t-stack" aria-live="polite"></div><button type="button" class="banner-stack-trigger">添加横幅</button></div>';var root=c.firstElementChild,trigger=root.querySelector('.banner-stack-trigger'),stack=root.querySelector('.t-stack'),active=[];function banner(){var el=document.createElement('div');el.className='t-stack-banner is-enter';el.dataset.depth='0';el.innerHTML='<span class="banner-stack-mark" aria-hidden="true"></span><span class="banner-stack-bar" aria-hidden="true"></span>';return el}function depths(){active.forEach(function(el,index){el.dataset.depth=String(index)})}function add(e){if(e)e._motionPreviewHandled=true;var el=banner();stack.appendChild(el);active.forEach(function(item){item.dataset.depth=String(Number(item.dataset.depth||0)+1)});active.unshift(el);if(active.length>3){var oldest=active.pop();oldest.classList.add('is-leaving');setTimeout(function(){if(oldest.isConnected)oldest.remove()},250)}depths();void el.offsetWidth;el.classList.remove('is-enter')}for(var initial=0;initial<3;initial++){var initialBanner=banner();initialBanner.classList.remove('is-enter');stack.appendChild(initialBanner);active.push(initialBanner)}depths();trigger.addEventListener('click',add);root.addEventListener('pointermove',function(e){var r=stack.getBoundingClientRect(),within=e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top-68&&e.clientY<=r.bottom;stack.classList.toggle('is-spread',within&&active.length>1)});root.addEventListener('pointerleave',function(){stack.classList.remove('is-spread')})}},
{_id:'card-panel-reveal',name:'面板弹出',duration:'400ms',curve:'cubic-bezier(.22,1,.36,1)',preserveTransition:true,css:'.t-panel-slide { transform:translateY(calc(187px * .5)); opacity:0; filter:blur(2px); pointer-events:none; transition:transform 350ms cubic-bezier(.22,1,.36,1),opacity 350ms cubic-bezier(.22,1,.36,1),filter 350ms cubic-bezier(.22,1,.36,1); } .t-panel-slide[data-open="true"] { transform:translateY(0); opacity:1; filter:blur(0); pointer-events:auto; transition-duration:400ms; }',desc:'面板向上归位、淡入并从轻微模糊中变清晰',preview:function(c){c.innerHTML='<div style="height:116px;display:grid;place-items:center;overflow:hidden"><button type="button" style="position:absolute;z-index:1;border:0;border-radius:999px;padding:7px 12px;background:#f1f1f1;color:#171717;font:600 11px Inter,sans-serif;cursor:pointer">打开面板</button><div class="t-panel-slide" data-open="false" style="width:150px;padding:12px 14px;border-radius:14px;background:rgba(25,25,25,.94);color:#fff;box-shadow:0 12px 28px rgba(0,0,0,.24);font:600 12px Inter,sans-serif;text-align:center">Panel reveal</div></div>';var button=c.querySelector('button'),panel=c.querySelector('.t-panel-slide');function toggle(e){if(e)e._motionPreviewHandled=true;panel.dataset.open=panel.dataset.open==='true'?'false':'true';button.textContent=panel.dataset.open==='true'?'收起面板':'打开面板'}button.addEventListener('click',toggle);c.addEventListener('click',function(e){if(e.target===c.firstElementChild)toggle(e)});requestAnimationFrame(function(){toggle()})}}
);
MotionAnimations.list=MotionAnimations.list||[];
MotionAnimations.list.push(
{_id:'list-extra-check',name:'勾选级联',duration:'300ms',curve:'cubic-bezier(.22,1,.36,1)',delay:'80ms',desc:'点击首项后勾选状态依次传递',css:'transition:transform .3s cubic-bezier(.22,1,.36,1)',preview:function(c){c.innerHTML='<div class="extra-check-list"><button><i></i>准备素材</button><button><i></i>设置参数</button><button><i></i>完成动效</button></div>';var a=Array.from(c.querySelectorAll('button')),on=false;c.firstElementChild.onclick=function(e){if(!e.target.closest('button'))return;e._motionPreviewHandled=true;on=!on;a.forEach(function(x,i){setTimeout(function(){x.classList.toggle('checked',on)},i*80)})}}},
{_id:'list-extra-reveal',name:'悬浮操作显现',duration:'220ms',curve:'ease-out',desc:'悬浮列表项时右侧操作滑入',css:'transition:opacity .22s ease-out,transform .22s ease-out',preview:function(c){c.innerHTML='<div class="extra-reveal-list"><div>项目 Alpha <i>•••</i></div><div>项目 Beta <i>•••</i></div><div>项目 Gamma <i>•••</i></div></div>'}},
{_id:'list-extra-filter',name:'筛选重排',duration:'380ms',curve:'cubic-bezier(.22,1,.36,1)',desc:'点击筛选按钮让项目淡出并重排',css:'transition:transform .38s cubic-bezier(.22,1,.36,1),opacity .2s',preview:function(c){c.innerHTML='<div class="extra-filter-list"><button>切换筛选</button><section><i>A</i><i>B</i><i>C</i><i>D</i></section></div>';var r=c.firstElementChild;r.querySelector('button').onclick=function(e){e._motionPreviewHandled=true;r.classList.toggle('filtered')}}},
{_id:'list-extra-timeline',name:'时间线展开',duration:'320ms',curve:'cubic-bezier(.22,1,.36,1)',desc:'时间线节点点击后展开详情',css:'transition:max-height .32s cubic-bezier(.22,1,.36,1)',preview:function(c){c.innerHTML='<div class="extra-timeline-list"><button aria-expanded="false"><i></i><b class="timeline-title">创建项目</b><span class="timeline-subtitle">项目已建立</span></button><button aria-expanded="false"><i></i><b class="timeline-title">添加动效</b><span class="timeline-subtitle">参数已保存</span></button></div>';c.querySelectorAll('button').forEach(function(b){b.onclick=function(e){e.preventDefault();e.stopPropagation();e._motionPreviewHandled=true;b.classList.toggle('open');b.setAttribute('aria-expanded',b.classList.contains('open')?'true':'false')}})}}
);
var dotLoaderSpecs=[
  ['Pulse Dots','pulse-dots','三个圆点依次缩放呼吸'],['Bounce Dots','bounce-dots','三个圆点依次向上弹跳'],['Liquid Dots','liquid-dots','圆点相互靠近并产生液态融合'],['Fade Dots','fade-dots','圆点依次淡入淡出'],
  ['Swapping Dots','swapping-dots','圆点交错换位'],['Bouncing Dots','bouncing-dots','连续圆点错落弹跳'],['Bobbing Dots','bobbing-dots','圆点轻柔上下浮动'],['Pulse Dot','pulse-dot','单个圆点扩散脉冲'],
  ['Wave Dots','wave-dots','五个圆点形成波浪'],['Grid Dots','grid-dots','九宫格圆点依次缩放'],['Pulsating Dots','pulsating-dots','双层圆点持续律动'],['Triple Dot','triple-dot','三点循环切换'],
  ['Ripple Effect','ripple-effect-loader','圆环连续向外扩散'],['Breathing Glow','breathing-glow','圆点明暗呼吸'],['Apple Breathe','apple-breathe','苹果式三段呼吸'],['Apple Pulse','apple-pulse','苹果式柔和脉冲'],
  ['Smooth Shift','smooth-shift','圆点在轨道内平滑往返'],['Spring Matrix','spring-matrix','点阵按弹簧节奏起伏'],['Fluid Orbit','fluid-orbit','圆点围绕中心流动'],['Magnetic Dots','magnetic-dots','两个圆点相互吸引'],
  ['Drop Dot','drop-dot','圆点落下并回弹'],['Morph Ring','morph-ring','圆环持续形变旋转'],['Scale Pulse','scale-pulse','多层圆环缩放扩散'],['Trailing Dots','trailing-dots','圆点形成旋转拖尾']
];
MotionAnimations.loader=dotLoaderSpecs.map(function(spec,index){return{_id:'loader-dots-'+spec[1],name:spec[0],duration:(index===16?'1400ms':'1000ms'),curve:'ease-in-out',autoplayPreview:true,desc:spec[2],css:'.amicro-loader--'+spec[1]+' i { animation: am-'+spec[1]+' 1s ease-in-out infinite; }',preview:function(c){var count=spec[1]==='grid-dots'||spec[1]==='spring-matrix'?9:spec[1]==='pulse-dot'||spec[1]==='drop-dot'||spec[1]==='morph-ring'||spec[1]==='breathing-glow'?1:spec[1]==='ripple-effect-loader'||spec[1]==='apple-pulse'||spec[1]==='scale-pulse'?3:spec[1]==='trailing-dots'?6:spec[1]==='wave-dots'||spec[1]==='bouncing-dots'?5:3;c.innerHTML='<div class="amicro-loader amicro-loader--'+spec[1]+'">'+new Array(count+1).join('<i></i>')+'</div>'}}});
MotionAnimations.loader.push(
{_id:'loader-extra-conic',name:'圆锥渐变环',duration:'900ms',curve:'linear',autoplayPreview:true,desc:'圆锥渐变形成旋转缺口圆环',css:'animation:extraConicSpin .9s linear infinite',preview:function(c){c.innerHTML='<div class="extra-conic-loader"></div>'}},
{_id:'loader-extra-cubes',name:'立方体接力',duration:'1100ms',curve:'cubic-bezier(.65,0,.35,1)',autoplayPreview:true,desc:'三个方块依次翻转前进',css:'animation:extraCubeRelay 1.1s cubic-bezier(.65,0,.35,1) infinite',preview:function(c){c.innerHTML='<div class="extra-cube-loader"><i></i><i></i><i></i></div>'}},
{_id:'loader-extra-typing',name:'输入气泡',duration:'1000ms',curve:'ease-in-out',autoplayPreview:true,desc:'聊天气泡中的圆点依次跳动',css:'animation:extraTypingDot 1s ease-in-out infinite',preview:function(c){c.innerHTML='<div class="extra-typing-loader"><i></i><i></i><i></i></div>'}},
{_id:'loader-extra-pendulum',name:'摆锤加载',duration:'1000ms',curve:'ease-in-out',autoplayPreview:true,desc:'两侧圆点像摆锤一样交替运动',css:'animation:extraPendulum 1s ease-in-out infinite alternate',preview:function(c){c.innerHTML='<div class="extra-pendulum-loader"><i></i><i></i><i></i><i></i><i></i></div>'}}
);
})();
/* ----- List (3) ----- */
MotionAnimations.list = (MotionAnimations.list||[]).concat([
{name:'Stagger Fade · 30ms',duration:'250ms',curve:'ease-out',delay:'30ms',css:'animation: fadeUp .25s ease-out both',desc:'逐项淡入，间隔 30ms',preview:function(c){c.innerHTML='<div class="list-demo" id="listFade30"><div class="list-items"></div></div>';var w=c.querySelector('.list-items'),its=['项目 A','项目 B','项目 C','项目 D','项目 E','项目 G'];its.forEach(function(t,i){var el=document.createElement('div');el.className='list-item';el.textContent=t;el.style.animation='fadeUp .25s ease-out both';el.style.animationDelay=(i*0.03)+'s';w.appendChild(el)});setInterval(function(){var all=w.querySelectorAll('.list-item');all.forEach(function(el,i){el.style.animation='none';void el.offsetWidth;el.style.animation='fadeUp .25s ease-out both';el.style.animationDelay=(i*0.03)+'s'})},3000)}},
{name:'Stagger Slide · 60ms',duration:'300ms',curve:'ease-out',delay:'60ms',css:'animation: slideIn .3s ease-out both',desc:'逐项滑入，间隔 60ms',preview:function(c){c.innerHTML='<div class="list-demo" id="listSlide60"><div class="list-items"></div></div>';var w=c.querySelector('.list-items'),its=['项目 A','项目 B','项目 C','项目 D','项目 E','项目 G'];its.forEach(function(t,i){var el=document.createElement('div');el.className='list-item';el.textContent=t;el.style.animation='slideIn .3s ease-out both';el.style.animationDelay=(i*0.06)+'s';w.appendChild(el)});setInterval(function(){var all=w.querySelectorAll('.list-item');all.forEach(function(el,i){el.style.animation='none';void el.offsetWidth;el.style.animation='slideIn .3s ease-out both';el.style.animationDelay=(i*0.06)+'s'})},3200)}},
{name:'Stagger Blur · 90ms',duration:'350ms',curve:'ease-out',delay:'90ms',css:'animation: blurReveal .35s ease-out both',desc:'逐项模糊清晰，间隔 90ms',preview:function(c){c.innerHTML='<div class="list-demo" id="listBlur90"><div class="list-items"></div></div>';var w=c.querySelector('.list-items'),its=['项目 A','项目 B','项目 C','项目 D','项目 E','项目 G'];its.forEach(function(t,i){var el=document.createElement('div');el.className='list-item';el.textContent=t;el.style.animation='blurReveal .35s ease-out both';el.style.animationDelay=(i*0.09)+'s';w.appendChild(el)});setInterval(function(){var all=w.querySelectorAll('.list-item');all.forEach(function(el,i){el.style.animation='none';void el.offsetWidth;el.style.animation='blurReveal .35s ease-out both';el.style.animationDelay=(i*0.09)+'s'})},3500)}}
]);
})();

/* ===== Motion Playground Pro — Main App ===== */
(function(){'use strict';
var categoryMeta={tab:{title:'选项卡动效'},text:{title:'文字动效'},number:{title:'数字动效'},button:{title:'按钮动效'},card:{title:'卡片动效'},list:{title:'列表动效'},loader:{title:'加载动效'},recycle:{title:'回收站'}};
var animationNameZh={
  'Morph Capsule':'滑动变形切换','Elastic':'弹性切换','Fade Switch':'淡入淡出切换','Scale':'缩放切换','Underline':'下划线滑动','Liquid':'液态变形','Material Ripple':'材质涟漪',
  'Fade Up':'向上淡入','Blur Reveal':'模糊显现','Character Stagger':'字符错落','Word Stagger':'词语错落','Gradient Flow':'渐变流动','Mask Reveal':'遮罩显现','Typewriter':'打字机','Glow':'文字发光','Rotate In':'旋转进入','Apple Hero':'主视觉缩放',
  'Hover Lift':'悬浮抬升','Glow Border':'边框发光','Shine Sweep':'光泽扫过','Press Scale':'按压缩放','Magnetic':'磁性跟随','Pulse':'脉冲呼吸','Ripple':'点击涟漪','Category Dropdown':'分类下拉菜单','Morph Action Expand Pill':'形变操作展开胶囊',
  'Glass Blur':'毛玻璃模糊','Tilt':'三维倾斜','Spotlight':'聚光灯','Shadow Grow':'阴影扩展','Float':'持续浮动',
  'Stagger Fade · 30ms':'错落淡入 · 30ms','Stagger Slide · 60ms':'错落滑入 · 60ms','Stagger Blur · 90ms':'错落模糊 · 90ms',
  'Pulse Dots':'脉冲圆点','Bounce Dots':'弹跳圆点','Liquid Dots':'液态圆点','Fade Dots':'淡隐圆点','Swapping Dots':'交错圆点','Bouncing Dots':'连续弹跳圆点','Bobbing Dots':'浮动圆点','Pulse Dot':'单点脉冲','Wave Dots':'波浪圆点','Grid Dots':'网格圆点','Pulsating Dots':'律动圆点','Triple Dot':'三点循环','Ripple Effect':'波纹扩散','Breathing Glow':'呼吸光晕','Apple Breathe':'苹果式呼吸','Apple Pulse':'苹果式脉冲','Smooth Shift':'平滑位移','Spring Matrix':'弹簧矩阵','Fluid Orbit':'流体环绕','Magnetic Dots':'磁吸圆点','Drop Dot':'下落圆点','Morph Ring':'形变圆环','Scale Pulse':'缩放脉冲','Trailing Dots':'拖尾圆点'
};
var nameOverrides={};try{nameOverrides=JSON.parse(localStorage.getItem('motion-playground-pro-name-overrides-v1')||'{}')}catch(e){nameOverrides={}}
MotionAnimations.getDisplayName=function(demo){return demo&&demo._id&&nameOverrides[demo._id]||demo.displayName||animationNameZh[demo.name]||demo.name};
var currentCategory='tab',lastCategory='tab',navItems,demoGrid,headerTitle,demoCounter,selectedDemoIds=new Set();
var groupsKey='motion-playground-pro-groups-v1',customKey='motion-playground-pro-custom-demos-v1';
var categoryMovesKey='motion-playground-pro-category-moves-v1',removedDemosKey='motion-playground-pro-removed-demos-v1',recycleDemosKey='motion-playground-pro-recycle-demos-v1';
var groupState={},customDemos={},categoryMoves={},removedDemoIds={},recycleDemos=[];
try{groupState=JSON.parse(localStorage.getItem(groupsKey)||'{}')}catch(e){groupState={}}
try{customDemos=JSON.parse(localStorage.getItem(customKey)||'{}')}catch(e){customDemos={}}
try{categoryMoves=JSON.parse(localStorage.getItem(categoryMovesKey)||'{}')}catch(e){categoryMoves={}}
try{removedDemoIds=JSON.parse(localStorage.getItem(removedDemosKey)||'{}')}catch(e){removedDemoIds={}}
try{recycleDemos=JSON.parse(localStorage.getItem(recycleDemosKey)||'[]')}catch(e){recycleDemos=[]}
var bundledDefaults={'tab::Liquid':{duration:'300ms',curve:'cubic-bezier(0.34,1.56,0.64,1)',css:'transition: border-radius .3s cubic-bezier(0.34,1.56,0.64,1)',cancelExit:true},'tab::Morph Capsule':{duration:'300ms',curve:'cubic-bezier(.22,1,.36,1)',css:'transition: transform .3s cubic-bezier(.22,1,.36,1), width .3s cubic-bezier(.22,1,.36,1)',cancelExit:false}};
var defaultsKey='motion-playground-pro-animation-defaults-v1';try{var storedDefaults=JSON.parse(localStorage.getItem(defaultsKey)||'{}');if(!Object.keys(storedDefaults).length){localStorage.setItem(defaultsKey,JSON.stringify(bundledDefaults))}}catch(e){}
/* Apply each bundled group layout once, including for visitors with older local data. */
var bundledGroups={tab:[{id:'tab-default',title:'默认分组🐼',collapsed:false,demos:['tab-builtin-0','tab-builtin-1','tab-builtin-2','tab-builtin-5','tab-builtin-6']},{id:'tab-group-1784960903636',title:'待调整',collapsed:true,demos:['tab-builtin-4','tab-builtin-7','tab-builtin-3']}],text:[{id:'text-default',title:'默认分组🐱',collapsed:false,demos:['text-builtin-0','text-builtin-2','text-builtin-5','text-builtin-6','text-builtin-9','text-builtin-10']},{id:'text-group-1785053388545',title:'待调整',collapsed:false,demos:['text-builtin-4','text-builtin-1','text-builtin-3','text-builtin-7','text-builtin-8']}],number:[{id:'number-default',title:'默认分组',collapsed:false,demos:['number-builtin-0']}],button:[{id:'button-group-1784954858315',title:'已使用动效🐘',collapsed:false,demos:['button-builtin-0']},{id:'button-default',title:'默认分组',collapsed:true,demos:['button-builtin-1','button-builtin-2','button-builtin-3','button-builtin-4','button-builtin-5','button-builtin-6','button-builtin-7','button-builtin-8']}],card:[{id:'card-group-1784961899915',title:'已使用动效🐄',collapsed:false,demos:['card-builtin-0']},{id:'card-default',title:'默认分组',collapsed:false,demos:['card-builtin-1','card-builtin-2','card-builtin-3','card-builtin-4','card-builtin-5','card-builtin-6']}],list:[{id:'list-default',title:'默认分组',collapsed:false,demos:['list-builtin-0','list-builtin-1','list-builtin-2']}]};
var bundledGroupsVersion=4,groupsVersionKey='motion-playground-pro-groups-seed-version';
try{if(parseInt(localStorage.getItem(groupsVersionKey)||'0',10)<bundledGroupsVersion){groupState=JSON.parse(JSON.stringify(bundledGroups));localStorage.setItem(groupsKey,JSON.stringify(groupState));localStorage.setItem(groupsVersionKey,String(bundledGroupsVersion))}}catch(e){if(!Object.keys(groupState).length)groupState=JSON.parse(JSON.stringify(bundledGroups))}
Object.keys(customDemos).forEach(function(cat){
  if(!Array.isArray(MotionAnimations[cat]))return;
  customDemos[cat].forEach(function(data){
    if(MotionAnimations[cat].some(function(item){return item._id===data._id}))return;
    MotionAnimations[cat].push(makeCustomDemo(data));
  });
});
function makeCustomDemo(data){
  if(data.previewSource){
    var importedPreview=null;
    try{importedPreview=(new Function('return ('+data.previewSource+')'))()}catch(e){}
    if(typeof importedPreview==='function')return {_id:data._id,_sourceData:data,name:data.name,duration:data.duration||'300ms',curve:data.curve||'ease-out',direction:Object.prototype.hasOwnProperty.call(data,'direction')?Number(data.direction):null,exitCurve:data.exitCurve,delay:data.delay||'0s',css:data.css||'',exitEnabled:data.cancelExit!==true,desc:data.desc||'导入的动效卡片',preview:importedPreview};
  }
  return {_id:data._id,_sourceData:data,name:data.name,duration:data.duration||'300ms',curve:data.curve||'ease-out',direction:Object.prototype.hasOwnProperty.call(data,'direction')?Number(data.direction):null,delay:data.delay||'0s',css:data.css||'animation: fadeUp .3s ease-out both',exitEnabled:data.cancelExit!==true,desc:data.fileName?'上传文件 · '+data.fileName:'自定义动效',preview:function(c){
    if(data.previewType==='html'&&data.fileContent){var f=document.createElement('iframe');f.className='uploaded-preview';f.sandbox='allow-scripts';f.srcdoc=data.fileContent;c.replaceChildren(f);return}
    if(data.previewType==='image'&&data.fileContent){var im=document.createElement('img');im.className='uploaded-media';im.src=data.fileContent;im.alt=data.name;c.replaceChildren(im);return}
    if(data.previewType==='video'&&data.fileContent){var v=document.createElement('video');v.className='uploaded-media';v.src=data.fileContent;v.muted=true;v.loop=true;v.playsInline=true;v.addEventListener('mouseenter',function(){v.play().catch(function(){})});v.addEventListener('mouseleave',function(){v.pause();v.currentTime=0});c.replaceChildren(v);return}
    if(data.fileName){c.innerHTML='<div class="uploaded-file-placeholder"><i class="far fa-file-code"></i><span></span></div>';c.querySelector('span').textContent=data.fileName;return}
    c.innerHTML='<div class="text-demo"><div class="text-anim-wrap"><span class="t-line" style="animation:fadeUp .3s ease-out both"></span></div></div>';c.querySelector('.t-line').textContent=data.name;
  }};
}
function serializeRecycleDemo(d,cat){
  var snapshot={_id:d._id,category:cat,name:d.name,duration:d.duration,curve:d.curve,direction:d.direction,exitCurve:d.exitCurve,delay:d.delay,css:d.css,exitEnabled:d.exitEnabled,desc:d.desc};
  if(d._sourceData){snapshot.sourceData=d._sourceData}
  else {try{snapshot.previewSource=d.preview&&d.preview.toString()}catch(e){}}
  return snapshot;
}
function hydrateRecycleDemo(data){
  if(data.sourceData){var custom=makeCustomDemo(data.sourceData);custom._id=data._id;custom._sourceData=data.sourceData;custom.name=data.name||custom.name;custom.duration=data.duration||custom.duration;custom.curve=data.curve||custom.curve;custom.direction=data.direction;custom.exitCurve=data.exitCurve;custom.delay=data.delay||custom.delay;custom.css=data.css||custom.css;custom.exitEnabled=data.exitEnabled!==false;custom.desc=data.desc||custom.desc;return custom}
  var preview=null;
  if(data.previewSource){try{preview=(new Function('return ('+data.previewSource+')'))()}catch(e){preview=null}}
  return {_id:data._id,name:data.name||'已删除动效',duration:data.duration||'300ms',curve:data.curve||'ease-out',direction:data.direction,exitCurve:data.exitCurve,delay:data.delay||'0s',css:data.css||'',exitEnabled:data.exitEnabled!==false,desc:data.desc||'已删除的动效',preview:typeof preview==='function'?preview:function(c){c.innerHTML='<div class="recycle-placeholder"><i class="fas fa-trash-can"></i><span></span></div>';c.querySelector('span').textContent=data.name||'已删除动效'}};
}
function demoId(cat,demo,idx){if(!demo._id)demo._id=cat+'-builtin-'+idx;return demo._id}
function saveCategoryState(){try{localStorage.setItem(categoryMovesKey,JSON.stringify(categoryMoves));localStorage.setItem(removedDemosKey,JSON.stringify(removedDemoIds));localStorage.setItem(recycleDemosKey,JSON.stringify(recycleDemos))}catch(e){}}
/* Introduce the new card once even when this browser has older hidden/moved state. */
function seedSwiperCardsRelease(){
  var releaseKey='motion-playground-pro-swiper-cards-release-20261009-v2';
  try{if(localStorage.getItem(releaseKey)==='1')return}catch(e){}
  var id='card-builtin-swiper-cards';
  delete removedDemoIds[id];delete categoryMoves[id];
  recycleDemos=recycleDemos.filter(function(d){return d._id!==id});
  Object.keys(groupState).forEach(function(cat){(groupState[cat]||[]).forEach(function(g){g.demos=(g.demos||[]).filter(function(item){return item!==id})})});
  var groups=groupState.card;
  if(!Array.isArray(groups)||!groups.length)groups=groupState.card=[{id:'card-default',title:'默认分组',collapsed:false,demos:[]}];
  groups[0].demos.unshift(id);groups[0].collapsed=false;
  saveCategoryState();saveGroups();
  try{localStorage.setItem(releaseKey,'1')}catch(e){}
}
seedSwiperCardsRelease();
function applyStoredCategoryState(){
  Object.keys(MotionAnimations).forEach(function(cat){if(Array.isArray(MotionAnimations[cat]))MotionAnimations[cat].forEach(function(d,i){demoId(cat,d,i)})});
  var bundledRemoved={'tab-builtin-3':true,'tab-builtin-4':true,'tab-builtin-7':true,'text-builtin-4':true};
  Object.keys(MotionAnimations).forEach(function(cat){if(Array.isArray(MotionAnimations[cat]))MotionAnimations[cat]=MotionAnimations[cat].filter(function(d){return !bundledRemoved[d._id]})});
  Object.keys(categoryMoves).forEach(function(id){
    var target=categoryMoves[id],item=null;if(!Array.isArray(MotionAnimations[target]))return;
    Object.keys(MotionAnimations).some(function(cat){if(!Array.isArray(MotionAnimations[cat]))return false;var i=MotionAnimations[cat].findIndex(function(d){return d._id===id});if(i>-1){item=MotionAnimations[cat].splice(i,1)[0];return true}return false});
    if(item&&MotionAnimations[target].indexOf(item)<0)MotionAnimations[target].push(item);
  });
  Object.keys(MotionAnimations).forEach(function(cat){if(Array.isArray(MotionAnimations[cat]))MotionAnimations[cat]=MotionAnimations[cat].filter(function(d){return !removedDemoIds[d._id]})});
}
applyStoredCategoryState();
MotionAnimations.recycle=recycleDemos.map(hydrateRecycleDemo);
function saveGroups(){try{localStorage.setItem(groupsKey,JSON.stringify(groupState))}catch(e){}}
function ensureGroups(cat){
  var demos=MotionAnimations[cat],ids=demos.map(function(d,i){return demoId(cat,d,i)}),groups=groupState[cat];
  if(!Array.isArray(groups)||!groups.length)groups=[{id:cat+'-default',title:'默认分组',collapsed:false,demos:ids.slice()}];
  groups.forEach(function(g){g.demos=(g.demos||[]).filter(function(id){return ids.indexOf(id)>-1})});
  var assigned=[];groups.forEach(function(g){assigned=assigned.concat(g.demos)});
  ids.forEach(function(id){if(assigned.indexOf(id)<0)groups[0].demos.push(id)});
  groupState[cat]=groups;saveGroups();return groups;
}
function init(){
  navItems=document.querySelectorAll('#navList li');
  var navList=document.getElementById('navList');
  var navOrderKey='motion-playground-pro-sidebar-order-v1';
  try{
    var savedNavOrder=JSON.parse(localStorage.getItem(navOrderKey)||'[]');
    if(Array.isArray(savedNavOrder)&&savedNavOrder.length){
      savedNavOrder.forEach(function(id){var item=document.getElementById(id);if(item&&item.dataset.category)navList.appendChild(item)});
    }
  }catch(e){}
  navItems=document.querySelectorAll('#navList li');
  var navDragging=null,navReorderToken=0,navReorderCleanup=0,navPointerState=null;
  function saveNavOrder(){var ids=Array.from(navList.querySelectorAll('li[data-category]')).map(function(item){return item.id||item.dataset.category});try{localStorage.setItem(navOrderKey,JSON.stringify(ids))}catch(e){}}
  function animateNavMove(moved,reference){
    if(!moved||reference===moved||reference===moved.nextElementSibling)return;
    var items=Array.from(navList.querySelectorAll('li[data-category]'));
    moved.style.transition='none';
    var first=new Map(items.map(function(item){return[item,item.getBoundingClientRect()]}));
    navList.insertBefore(moved,reference||null);
    var token=++navReorderToken;
    if(navReorderCleanup){clearTimeout(navReorderCleanup);navReorderCleanup=0}
    requestAnimationFrame(function(){
      if(token!==navReorderToken)return;
      items.forEach(function(item){
        if(item===moved)return;
        if(!item.isConnected)return;
        var from=first.get(item),to=item.getBoundingClientRect();
        if(!from)return;
        var dx=from.left-to.left,dy=from.top-to.top;
        if(!dx&&!dy)return;
        item.style.transition='none';item.style.transform='translate3d('+dx+'px,'+dy+'px,0)';
      });
      requestAnimationFrame(function(){
        if(token!==navReorderToken)return;
        items.forEach(function(item){if(item===moved||!item.isConnected)return;item.style.transition='transform 180ms cubic-bezier(.22,1,.36,1)';item.style.transform=''});
        navReorderCleanup=setTimeout(function(){if(token!==navReorderToken)return;items.forEach(function(item){item.style.transition='';item.style.transform=''});navReorderCleanup=0},210);
      });
    });
  }
  navItems.forEach(function(item){
    if(!item.dataset.category)return;
    item.draggable=false;
    item.addEventListener('pointerdown',function(e){
      if(e.button!==0||e.target.closest('button,a'))return;
      var rect=item.getBoundingClientRect();
      navPointerState={item:item,pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,offsetX:e.clientX-rect.left,offsetY:e.clientY-rect.top,dragging:false,placeholder:null};
      try{item.setPointerCapture(e.pointerId)}catch(_){}
    });
    item.addEventListener('pointermove',function(e){
      var state=navPointerState;if(!state||state.item!==item)return;
      if(!state.dragging){
        if(Math.hypot(e.clientX-state.startX,e.clientY-state.startY)<5)return;
        state.dragging=true;navDragging=item;navReorderToken++;
        var rect=item.getBoundingClientRect(),placeholder=item.cloneNode(true);
        placeholder.removeAttribute('id');placeholder.removeAttribute('data-category');placeholder.classList.add('nav-drag-placeholder');
        placeholder.style.opacity='.36';placeholder.style.pointerEvents='none';
        item.parentNode.insertBefore(placeholder,item);state.placeholder=placeholder;
        item.classList.add('nav-dragging');item.style.position='fixed';item.style.left=rect.left+'px';item.style.top=rect.top+'px';item.style.width=rect.width+'px';item.style.margin='0';item.style.zIndex='100';item.style.pointerEvents='none';item.style.transition='none';
      }
      e.preventDefault();
      item.style.left=(e.clientX-state.offsetX)+'px';item.style.top=(e.clientY-state.offsetY)+'px';
      var target=Array.from(navList.querySelectorAll('li[data-category]')).filter(function(node){return node!==item}).find(function(node){var r=node.getBoundingClientRect();return e.clientY>=r.top&&e.clientY<=r.bottom});
      if(!target)return;
      var reference=e.clientY<target.getBoundingClientRect().top+target.getBoundingClientRect().height/2?target:target.nextElementSibling;
      if(reference===state.placeholder||reference===item)return;
      var reorderToken=++navReorderToken;
      var movingNodes=Array.from(navList.querySelectorAll('li[data-category]')).filter(function(node){return node!==item});
      movingNodes.forEach(function(node){node.style.transition='none';node.style.transform=''});
      var before=new Map(movingNodes.map(function(node){return[node,node.getBoundingClientRect()]}));
      navList.insertBefore(state.placeholder,reference||null);
      movingNodes.forEach(function(node){var from=before.get(node),to=node.getBoundingClientRect();if(!from)return;var dx=from.left-to.left,dy=from.top-to.top;if(!dx&&!dy)return;node.style.transform='translate3d('+dx+'px,'+dy+'px,0)';requestAnimationFrame(function(){if(reorderToken!==navReorderToken)return;node.style.transition='transform 180ms cubic-bezier(.22,1,.36,1)';node.style.transform=''})});
    });
    item.addEventListener('pointerup',function(e){
      var state=navPointerState;if(!state||state.item!==item)return;
      if(!state.dragging){navPointerState=null;try{item.releasePointerCapture(e.pointerId)}catch(_){}return}
      e.preventDefault();var placeholder=state.placeholder;
      ++navReorderToken;
      navList.querySelectorAll('li[data-category]').forEach(function(node){if(node!==item){node.style.transition='none';node.style.transform=''}});
      var target=placeholder.getBoundingClientRect(),current=item.getBoundingClientRect();
      var dx=target.left-current.left,dy=target.top-current.top;
      navList.insertBefore(item,placeholder);
      item.style.opacity='.36';
      item.style.transition='none';
      item.style.transform='translate3d(0,0,0)';
      void item.offsetWidth;
      item.style.transition='transform 180ms cubic-bezier(.22,1,.36,1), opacity 180ms ease-out';
      item.style.transform='translate3d('+dx+'px,'+dy+'px,0)';
      item.style.opacity='0';
      navPointerState=null;navDragging=null;saveNavOrder();item.dataset.navJustDragged='1';
      setTimeout(function(){
        if(placeholder.parentNode)placeholder.parentNode.insertBefore(item,placeholder);
        if(placeholder.parentNode)placeholder.parentNode.removeChild(placeholder);
        item.classList.remove('nav-dragging');item.style.position='';item.style.left='';item.style.top='';item.style.width='';item.style.margin='';item.style.zIndex='';item.style.pointerEvents='';item.style.opacity='';item.style.transition='';item.style.transform='';
        navList.querySelectorAll('li[data-category]').forEach(function(node){node.style.transition='';node.style.transform=''});
      },190);
      try{item.releasePointerCapture(e.pointerId)}catch(_){}
    });
    item.addEventListener('pointercancel',function(e){
      var state=navPointerState;if(!state||state.item!==item)return;
      if(state.placeholder&&state.placeholder.parentNode)state.placeholder.parentNode.removeChild(state.placeholder);
      item.classList.remove('nav-dragging');item.style.position='';item.style.left='';item.style.top='';item.style.width='';item.style.margin='';item.style.zIndex='';item.style.pointerEvents='';item.style.opacity='';item.style.transition='';item.style.transform='';navPointerState=null;navDragging=null;try{item.releasePointerCapture(e.pointerId)}catch(_){}
    });
  });
  demoGrid=document.getElementById('demoGrid');
  demoGrid.addEventListener('click',function(e){
    if(e.shiftKey||e.target.closest('.demo-card')||!selectedDemoIds.size)return;
    selectedDemoIds.clear();
    demoGrid.querySelectorAll('.demo-card.card-selected').forEach(function(card){card.classList.remove('card-selected')});
  });
  headerTitle=document.getElementById('headerTitle');
  demoCounter=document.getElementById('demoCounter');
  var pageMore=document.getElementById('pageMore'),pageMenu=document.getElementById('pageActionMenu');
  var recycleNav=document.getElementById('navRecycle');
  function closeMenus(except){document.querySelectorAll('.action-menu.open').forEach(function(m){if(m!==except){m.classList.remove('open');var card=m.closest('.demo-card'),section=m.closest('.motion-group');if(card)card.classList.remove('card-menu-open');if(section)section.classList.remove('menu-open')}});if(except!==pageMenu)pageMore.classList.remove('active')}
  pageMore.addEventListener('click',function(e){e.stopPropagation();var opening=!pageMenu.classList.contains('open');closeMenus(opening?pageMenu:null);pageMenu.classList.toggle('open',opening);pageMore.classList.toggle('active',opening)});
  pageMenu.addEventListener('pointerdown',function(e){e.stopPropagation()});
  pageMenu.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var action=b.dataset.action;if(action==='add-demo')addDemo();else if(action==='add-group')addGroup();else if(action==='recycle-bin'){if(recycleNav)recycleNav.hidden=false;switchCategory('recycle')}pageMenu.classList.remove('open');pageMore.classList.remove('active')});
  // Keep trigger clicks inside the menu interaction: pointerdown runs before
  // click, so treating the ellipsis button as an outside click would close
  // the menu first and make a second click reopen it instead of hiding it.
  document.addEventListener('pointerdown',function(e){if(!e.target.closest('.action-menu')&&!e.target.closest('.group-more')&&!e.target.closest('.card-more'))closeMenus(null)});
  MotionAnimations.closeMenus=closeMenus;
  navItems.forEach(function(item){
    item.addEventListener('click',function(){
      if(this.dataset.navJustDragged){delete this.dataset.navJustDragged;return;}
      var cat=this.dataset.category;
      if(cat&&cat!==currentCategory)switchCategory(cat);
    });
  });
  if(recycleNav){recycleNav.addEventListener('click',function(e){if(e.target.closest('.recycle-close'))return;lastCategory=currentCategory==='recycle'?lastCategory:currentCategory;switchCategory('recycle')});recycleNav.querySelector('.recycle-close').addEventListener('click',function(e){e.stopPropagation();recycleNav.hidden=true;if(currentCategory==='recycle')switchCategory(lastCategory||'tab')})}
  navItems.forEach(function(item){
    var cat=item.dataset.category;if(!cat)return;
    item.addEventListener('dragover',function(e){if(!document.querySelector('.demo-card.card-dragging'))return;e.preventDefault();item.classList.add('category-drop-target')});
    item.addEventListener('dragleave',function(e){if(!item.contains(e.relatedTarget))item.classList.remove('category-drop-target')});
    item.addEventListener('drop',function(e){
      if(!document.querySelector('.demo-card.card-dragging'))return;e.preventDefault();item.classList.remove('category-drop-target');
      var ids=getSelectedDemoIds(),dragged=document.querySelector('.demo-card.card-dragging');if(!ids.length&&dragged)ids=[dragged.dataset.demoId];
      moveDemosToCategory(ids,cat);switchCategory(cat);
    });
  });
  render('tab');
}
function getSelectedDemoIds(){return Array.from(selectedDemoIds)}
function removeIdsFromGroups(ids){Object.keys(groupState).forEach(function(cat){(groupState[cat]||[]).forEach(function(group){group.demos=(group.demos||[]).filter(function(id){return ids.indexOf(id)<0})})})}
function moveDemosToCategory(ids,target){
  if(!Array.isArray(MotionAnimations[target])||!ids.length)return;
  ids.forEach(function(id){var item=null;Object.keys(MotionAnimations).some(function(cat){if(!Array.isArray(MotionAnimations[cat]))return false;var at=MotionAnimations[cat].findIndex(function(d){return d._id===id});if(at>-1){item=MotionAnimations[cat].splice(at,1)[0];return true}return false});if(item&&MotionAnimations[target].indexOf(item)<0){MotionAnimations[target].push(item);categoryMoves[id]=target}});
  removeIdsFromGroups(ids);selectedDemoIds.clear();saveCategoryState();Object.keys(MotionAnimations).forEach(function(cat){if(Array.isArray(MotionAnimations[cat]))ensureGroups(cat)});saveGroups();render(currentCategory);showToast('已移动 '+ids.length+' 个动效','fas fa-arrow-right-arrow-left');
}
function moveDemosToGroup(ids,cat,groupId){var target=ensureGroups(cat).find(function(g){return g.id===groupId});if(!target)return;removeIdsFromGroups(ids);ids.forEach(function(id){if(target.demos.indexOf(id)<0)target.demos.push(id)});selectedDemoIds.clear();saveGroups();render(currentCategory);showToast('已移动到“'+target.title+'”','fas fa-layer-group')}
function deleteDemos(ids){
  if(!ids.length)return;
  var count=ids.length;
  window.MotionDeleteConfirm.open({title:'删除动效',message:'确定删除选中的 '+count+' 个动效吗？',submitLabel:'删除动效'},function(){
    var removed=[];
    Object.keys(MotionAnimations).forEach(function(cat){if(cat==='recycle'||!Array.isArray(MotionAnimations[cat]))return;MotionAnimations[cat]=MotionAnimations[cat].filter(function(d){if(ids.indexOf(d._id)<0)return true;removedDemoIds[d._id]=true;removed.push(serializeRecycleDemo(d,cat));return false})});
    if(removed.length){recycleDemos=recycleDemos.concat(removed);MotionAnimations.recycle=recycleDemos.map(hydrateRecycleDemo)}
    removeIdsFromGroups(ids);selectedDemoIds.clear();saveCategoryState();saveGroups();var recycleNav=document.getElementById('navRecycle');if(recycleNav)recycleNav.hidden=!recycleDemos.length;render(currentCategory);showToast('已删除 '+count+' 个动效','fas fa-trash');
  });
}
function addDemo(){
  window.MotionAddDialog.open();
}
function addGroup(){
  var name=prompt('请输入分组名称','新分组');if(!name||!name.trim())return;
  ensureGroups(currentCategory).push({id:currentCategory+'-group-'+Date.now(),title:name.trim(),collapsed:false,demos:[]});saveGroups();render(currentCategory);
}
function showToast(message,icon){
  var toast=document.getElementById('globalToast');if(!toast)return;
  clearTimeout(showToast.timer);toast.querySelector('span').textContent=message;toast.querySelector('i').className=icon||'fas fa-check';toast.classList.remove('show');void toast.offsetWidth;toast.classList.add('show');
  showToast.timer=setTimeout(function(){toast.classList.remove('show')},1800);
}
function showCopySuccess(btn){
  clearTimeout(btn.copyFeedbackTimer);btn.dataset.copied='false';void btn.offsetWidth;btn.dataset.copied='true';
  btn.copyFeedbackTimer=setTimeout(function(){btn.dataset.copied='false'},1400);
}
function bindDlsPressScale(btn){
  if(!btn||btn.dataset.dlsPressBound)return;
  btn.dataset.dlsPressBound='1';
  function press(){
    var r=btn.getBoundingClientRect();
    btn.style.setProperty('--dls-button-or-anchor-width-px',r.width);
    btn.style.setProperty('--dls-button-or-anchor-height-px',r.height);
    btn.classList.add('is-pressed');
  }
  function release(){btn.classList.remove('is-pressed');}
  btn.addEventListener('pointerdown',press);
  btn.addEventListener('pointerup',release);
  btn.addEventListener('pointercancel',release);
  btn.addEventListener('pointerleave',release);
}
function syncDemoPreview(container,demo){
  var value=String(demo.duration||'300ms').trim(),number=parseFloat(value)||300;
  var ms=/ms$/i.test(value)?number:number*1000;
  var dur=ms>=1000?(ms/1000).toFixed(3).replace(/0+$/,'').replace(/\.$/,'')+'s':(ms/1000).toFixed(3).replace(/^0/,'').replace(/0+$/,'').replace(/\.$/,'')+'s';
  container.querySelectorAll('*').forEach(function(el){
    var cs=getComputedStyle(el);
    if(cs.transitionProperty&&cs.transitionProperty!=='none'&&cs.transitionDuration!=='0s'){
      el.style.transition=cs.transitionProperty.split(', ').map(function(prop){return prop+' '+dur+' '+demo.curve}).join(', ');
    }
    if(cs.animationName&&cs.animationName!=='none'){
      el.style.animationDuration=dur;
      el.style.animationTimingFunction=demo.curve;
    }
  });
}
function buildPausedPreview(container,demo){
  container._previewActive=false;
  var nativeSetInterval=window.setInterval;
  window.setInterval=function(){return 0};
  try{demo.preview(container)}finally{window.setInterval=nativeSetInterval}
  syncDemoPreview(container,demo);
  if(demo.autoplayPreview){
    container._motionAnimations=[];
    return;
  }
  container._motionAnimations=Array.prototype.map.call(container.querySelectorAll('*'),function(el){var cs=getComputedStyle(el);return{el:el,animation:cs.animation,name:cs.animationName,duration:cs.animationDuration,timing:cs.animationTimingFunction,delay:cs.animationDelay,iteration:cs.animationIterationCount,fill:cs.animationFillMode}}).filter(function(rec){return rec.name&&rec.name!=='none'});
  container._motionAnimations.forEach(function(rec){
    rec.el.style.animationDirection='normal';rec.el.style.animationPlayState='paused';
    Array.prototype.forEach.call(rec.el.getAnimations?rec.el.getAnimations():[],function(anim){try{anim.pause();var timing=anim.effect.getComputedTiming(),end=timing.endTime;if(!isFinite(end)){var seconds=parseFloat(rec.duration)||.3;end=Math.max(1,seconds*1000*.999)}anim.currentTime=end}catch(e){}});
  });
}
function triggerPreviewAnimations(container){
  (container._motionAnimations||[]).forEach(function(rec){if(!rec.el.isConnected)return;rec.el.style.animation='none';void rec.el.offsetWidth;rec.el.style.animation=rec.animation;rec.el.style.animationDirection='normal';rec.el.style.animationPlayState='running'});
}
function playExitAnimations(container,demo){
  (container._motionAnimations||[]).forEach(function(rec){if(!rec.el.isConnected)return;rec.el.style.animation='none';void rec.el.offsetWidth;rec.el.style.animationName=rec.name;rec.el.style.animationDuration=rec.duration;rec.el.style.animationTimingFunction=rec.timing;rec.el.style.animationDelay=rec.delay;rec.el.style.animationIterationCount=rec.iteration;rec.el.style.animationFillMode=rec.fill;rec.el.style.animationDirection='reverse';rec.el.style.animationPlayState='running'});
  clearTimeout(container._exitTimer);
}
function advancePanePreview(container){
  var panes=container.querySelectorAll('.fade-pane,.scale-pane,.blur-pane');
  if(panes.length){
    var current=Array.prototype.indexOf.call(panes,container.querySelector('.fade-pane.active,.scale-pane.active,.blur-pane.active'));
    panes.forEach(function(p){p.classList.remove('active')});
    panes[(current+1)%panes.length].classList.add('active');
    var dots=container.querySelectorAll('.fade-dot');if(dots.length){dots.forEach(function(d){d.classList.remove('active')});dots[(current+1)%dots.length].classList.add('active')}
  }
}
function previewHoverSelector(key,demo){
  if(key==='text')return'.text-anim-wrap';
  if(key==='button')return'.demo-btn';
  if(key==='card'&&demo.name!=='分享动画')return'.demo-card-el';
  if(key==='list')return'.list-items';
  return'';
}
function triggerEditorPreview(container,demo,key,selector){
  clearTimeout(container._exitTimer);
  var target=selector?container.querySelector(selector):container;
  if(container._previewActive&&demo.exitEnabled){
    if(target){var leaveEvent=new MouseEvent('mouseleave',{bubbles:false});leaveEvent._motionClickTrigger=true;target.dispatchEvent(leaveEvent)}
    playExitAnimations(container,demo);container._previewActive=false;
    container._exitTimer=setTimeout(function(){if(!container.isConnected)return;if(target){var restoreEvent=new MouseEvent('mouseenter',{bubbles:false});restoreEvent._motionClickTrigger=true;target.dispatchEvent(restoreEvent)}triggerPreviewAnimations(container);container._previewActive=true},8000);
    return;
  }
  if(container._previewActive){var resetEvent=new MouseEvent('mouseleave',{bubbles:false});resetEvent._motionClickTrigger=true;if(target)target.dispatchEvent(resetEvent);void container.offsetWidth}
  var playEnter=function(){if(target){var enterEvent=new MouseEvent('mouseenter',{bubbles:false});enterEvent._motionClickTrigger=true;target.dispatchEvent(enterEvent)}triggerPreviewAnimations(container);container._previewActive=true};
  requestAnimationFrame(playEnter);
  var switchItems=container.querySelectorAll('.tab-item,.uline-item,.t-tab');
  if(switchItems.length){var active=container.querySelector('.tab-item.active,.uline-item.active,.t-tab[aria-selected="true"]'),index=Array.prototype.indexOf.call(switchItems,active);var next=switchItems[(index+1+switchItems.length)%switchItems.length];if(next){var switchEvent=new MouseEvent('click',{bubbles:true,cancelable:true,view:window});switchEvent._motionEditorSynthetic=true;next.dispatchEvent(switchEvent)}}
  if(key==='tab')advancePanePreview(container);
}
function bindPreviewInteraction(container,demo,key){
  var selector=previewHoverSelector(key,demo);
  if(selector){
    var blockHover=function(e){if(!e._motionClickTrigger)e.stopImmediatePropagation()};
    container.addEventListener('mouseenter',blockHover,true);container.addEventListener('mouseleave',blockHover,true);
    container.addEventListener('mousemove',function(e){if(!container._previewActive)e.stopImmediatePropagation()},true);
    container.addEventListener('click',function(e){
      var target=e.target.closest(selector);if(!target||!container.contains(target))return;
      e._motionPreviewHandled=true;
      clearTimeout(container._exitTimer);
      if(container._previewActive&&demo.exitEnabled){
        var leaveEvent=new MouseEvent('mouseleave',{bubbles:false});leaveEvent._motionClickTrigger=true;target.dispatchEvent(leaveEvent);
        playExitAnimations(container,demo);container._previewActive=false;
        container._exitTimer=setTimeout(function(){if(!target.isConnected)return;var restoreEvent=new MouseEvent('mouseenter',{bubbles:false});restoreEvent._motionClickTrigger=true;target.dispatchEvent(restoreEvent);triggerPreviewAnimations(container);container._previewActive=true},8000);return;
      }
      var playEnter=function(){var enterEvent=new MouseEvent('mouseenter',{bubbles:false});enterEvent._motionClickTrigger=true;target.dispatchEvent(enterEvent);triggerPreviewAnimations(container);container._previewActive=true};
      if(container._previewActive){var resetEvent=new MouseEvent('mouseleave',{bubbles:false});resetEvent._motionClickTrigger=true;target.dispatchEvent(resetEvent);void target.offsetWidth;requestAnimationFrame(playEnter)}else playEnter();
    });
  }
  container.addEventListener('click',function(e){
    if(e._motionPreviewHandled||e._motionEditorSynthetic)return;
    /* Tab controls already own their click. Do not let the preview-level replay
       handler advance them a second time after the requested tab is selected. */
    // Let tab controls handle their own click first; controls that do not
    // define a handler fall through to the card's in-place preview replay.
    if(e.target.closest('[data-editor-control],button,input,select,textarea,a,[role="button"]')&&!e.target.closest('.anim-target'))return;
    e._motionPreviewHandled=true;
    triggerEditorPreview(container,demo,key,selector);
  });
  container.addEventListener('click',function(e){if(e.target.closest('.fade-stage,.scale-stage,.blur-stage'))advancePanePreview(container)});
}
function render(key){
  var demos=MotionAnimations[key];
  if(!demos)return;
  headerTitle.textContent=categoryMeta[key].title;
  demoCounter.textContent=demos.length+' 个动效';
  demoGrid.innerHTML='';
  if(key==='recycle'&&!demos.length){demoGrid.innerHTML='<div class="recycle-empty"><i class="fas fa-trash-can"></i><strong>回收站为空</strong><span>删除的动效会显示在这里</span></div>';return}
  var groups=ensureGroups(key);
  groups.forEach(function(group){
    var section=document.createElement('section');section.className='motion-group'+(group.collapsed?' collapsed':'');section.dataset.groupId=group.id;
    var header=document.createElement('div');header.className='group-header';header.innerHTML='<span class="group-drag" title="拖动排序"><i class="fas fa-grip-lines"></i></span><button class="group-toggle" title="折叠或展开"><i class="fas fa-caret-down"></i></button><span class="group-title">'+group.title+'</span><span class="group-count">'+group.demos.length+' 个</span><span class="group-menu-wrap"><button class="group-more" title="分组功能"><i class="fas fa-ellipsis-h"></i></button><span class="action-menu group-menu"><button data-group-action="rename"><i class="fas fa-pen"></i>重命名</button><button data-group-action="delete"><i class="fas fa-trash"></i>删除分组</button></span></span>';
    var body=document.createElement('div');body.className='group-body';section.appendChild(header);section.appendChild(body);demoGrid.appendChild(section);
    header.querySelector('.group-toggle').addEventListener('click',function(){group.collapsed=!group.collapsed;saveGroups();section.classList.toggle('collapsed',group.collapsed)});
    var groupMenu=header.querySelector('.group-menu');
    header.querySelector('.group-more').addEventListener('click',function(e){e.stopPropagation();var opening=!groupMenu.classList.contains('open');if(MotionAnimations.closeMenus)MotionAnimations.closeMenus(opening?groupMenu:null);groupMenu.classList.toggle('open',opening);section.classList.toggle('menu-open',opening)});
    groupMenu.addEventListener('pointerdown',function(e){e.stopPropagation()});
    header.querySelector('.group-menu').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;if(b.dataset.groupAction==='rename'){var n=prompt('重命名分组',group.title);if(n&&n.trim())group.title=n.trim();saveGroups();render(key);return}if(b.dataset.groupAction==='delete'&&groups.length>1){window.MotionDeleteConfirm.open({title:'删除分组',message:'确定删除分组“'+group.title+'”吗？其中的动效将移入其他分组，',submitLabel:'删除分组'},function(){var target=groups.find(function(item){return item!==group});target.demos=target.demos.concat(group.demos);groups.splice(groups.indexOf(group),1);saveGroups();render(key)})}});
    group.demos.forEach(function(id){var idx=demos.findIndex(function(d,i){return demoId(key,d,i)===id});if(idx<0)return;createDemoCard(demos[idx],idx,key,body)});
    if(!group.demos.length)body.innerHTML='<div class="empty-group">暂无动效</div>';
    var dragHandle=header.querySelector('.group-drag');dragHandle.draggable=true;
    var reorderFrame=0,reorderEvent=null,reorderSignature='',reorderAnimationFrame=0,reorderToken=0,reorderPendingSignature='',reorderPendingSince=0;
    dragHandle.addEventListener('dragstart',function(e){section.classList.add('dragging');e.dataTransfer.effectAllowed='move'});dragHandle.addEventListener('dragend',function(){section.classList.remove('dragging');document.querySelectorAll('.drag-over').forEach(function(x){x.classList.remove('drag-over')});reorderSignature='';reorderEvent=null;reorderToken++;if(reorderFrame){cancelAnimationFrame(reorderFrame);reorderFrame=0}if(reorderAnimationFrame){cancelAnimationFrame(reorderAnimationFrame);reorderAnimationFrame=0}});
    section.addEventListener('dragover',function(e){
      e.preventDefault();
      reorderEvent={clientX:e.clientX,clientY:e.clientY};
      if(reorderFrame)return;
      reorderFrame=requestAnimationFrame(function(){
      reorderFrame=0;
      var pointer=reorderEvent;reorderEvent=null;
      if(!pointer)return;
      var dragged=document.querySelector('.demo-card.card-dragging');
      if(!dragged){section.classList.add('drag-over');return}
      section.classList.add('card-drop-target');
      var body=section.querySelector('.group-body');
      if(!body||dragged===body)return;
      var cards=Array.from(body.querySelectorAll(':scope > .demo-card:not(.drag-placeholder)'));
      var movingCards=cards.filter(function(card){return card===dragged||card.classList.contains('card-batch-dragging')});
      if(!movingCards.length)return;
      var candidates=cards.filter(function(card){return movingCards.indexOf(card)<0});
      if(!candidates.length)return;
      var desiredIndex=candidates.length;
      for(var ci=0;ci<candidates.length;ci++){
        var candidateRect=candidates[ci].getBoundingClientRect();
        var candidateCenterX=candidateRect.left+candidateRect.width/2;
        var candidateCenterY=candidateRect.top+candidateRect.height/2;
        var candidateXMargin=Math.min(18,candidateRect.width*.1);
        var candidateYMargin=Math.min(18,candidateRect.height*.08);
        var candidateSameRow=Math.abs(pointer.clientY-candidateCenterY)<candidateRect.height*.62;
        if(pointer.clientY<candidateCenterY-candidateYMargin || (candidateSameRow&&pointer.clientX<candidateCenterX-candidateXMargin)){desiredIndex=ci;break}
      }
      var firstMovingIndex=cards.indexOf(movingCards[0]),currentIndex=0;
      for(var oi=0;oi<firstMovingIndex;oi++)if(movingCards.indexOf(cards[oi])<0)currentIndex++;
      var contiguous=true,firstIndex=cards.indexOf(movingCards[0]);
      movingCards.forEach(function(card,index){if(cards.indexOf(card)!==firstIndex+index)contiguous=false});
      if(contiguous&&desiredIndex===currentIndex){reorderPendingSignature='';reorderPendingSince=0;return}
      var signature=movingCards.map(function(card){return card.dataset.demoId}).join(',')+'@'+desiredIndex;
      if(signature===reorderSignature){reorderPendingSignature='';reorderPendingSince=0;return}
      var now=typeof performance!=='undefined'&&performance.now?performance.now():Date.now();
      if(signature!==reorderPendingSignature){
        reorderPendingSignature=signature;
        reorderPendingSince=now;
        return;
      }
      if(now-reorderPendingSince<55)return;
      reorderPendingSignature='';
      reorderPendingSince=0;
      reorderSignature=signature;
      var target=candidates[desiredIndex]||null;
      var first=new Map(cards.map(function(card){return[card,card.getBoundingClientRect()]}));
      reorderToken++;
      if(reorderAnimationFrame){cancelAnimationFrame(reorderAnimationFrame);reorderAnimationFrame=0}
      cards.forEach(function(card){
        if(card!==dragged){
          card.style.transition='none';
          card.style.transform='';
        }
      });
      movingCards.forEach(function(card){body.insertBefore(card,target||null)});
      var token=reorderToken;
      reorderAnimationFrame=requestAnimationFrame(function(){
        reorderAnimationFrame=0;
        if(token!==reorderToken)return;
        cards.forEach(function(card){
          if(card===dragged||!card.isConnected)return;
          var from=first.get(card),to=card.getBoundingClientRect();
          if(!from)return;
          var dx=from.left-to.left,dy=from.top-to.top;
          if(!dx&&!dy)return;
          card.style.transition='none';
          card.style.transform='translate3d('+dx+'px,'+dy+'px,0)';
          requestAnimationFrame(function(){
            if(token!==reorderToken)return;
            card.style.transition='transform 180ms cubic-bezier(.22,1,.36,1)';
            card.style.transform='';
            setTimeout(function(){if(token===reorderToken)card.style.transition=''},210);
          });
        });
      });
      });
    });
    section.addEventListener('dragleave',function(e){if(!section.contains(e.relatedTarget)){section.classList.remove('drag-over');section.classList.remove('card-drop-target');reorderSignature='';reorderPendingSignature='';reorderPendingSince=0;reorderToken++;reorderEvent=null;if(reorderFrame){cancelAnimationFrame(reorderFrame);reorderFrame=0}if(reorderAnimationFrame){cancelAnimationFrame(reorderAnimationFrame);reorderAnimationFrame=0}}});
    section.addEventListener('drop',function(e){
      e.preventDefault();e.stopPropagation();
      var draggedCard=document.querySelector('.demo-card.card-dragging');
      if(draggedCard){
        var movedId=draggedCard.dataset.demoId,ids=selectedDemoIds.has(movedId)?getSelectedDemoIds():[movedId];
        groups.forEach(function(item){item.demos=item.demos.filter(function(id){return ids.indexOf(id)<0})});
        var ordered=Array.from(section.querySelectorAll('.group-body > .demo-card:not(.drag-placeholder)')).map(function(card){return card.dataset.demoId}).filter(function(id){return ids.indexOf(id)<0});
        var position=Array.from(section.querySelectorAll('.group-body > .demo-card:not(.drag-placeholder)')).findIndex(function(card){return card.dataset.demoId===movedId});
        if(position<0)position=ordered.length;
        position=Math.max(0,Math.min(position,ordered.length));
        ordered.splice.apply(ordered,[position,0].concat(ids));
        group.demos=ordered;selectedDemoIds.clear();saveGroups();document.querySelectorAll('.drag-placeholder,.drag-ghost').forEach(function(item){item.remove()});render(key);showToast('已移动 '+ids.length+' 个动效','fas fa-layer-group');return;
      }
      var from=document.querySelector('.motion-group.dragging');if(!from||from===section)return;
      var fromIndex=groups.findIndex(function(g){return g.id===from.dataset.groupId}),toIndex=groups.indexOf(group),moved=groups.splice(fromIndex,1)[0];
      groups.splice(toIndex,0,moved);saveGroups();render(key);
    });
  });
}
function createDemoCard(demo,idx,key,parent){
    var card=document.createElement('div');card.className='demo-card';card.dataset.demoIndex=idx;card.dataset.demoId=demoId(key,demo,idx);card.dataset.groupId=(parent.closest('.motion-group')||{}).dataset?parent.closest('.motion-group').dataset.groupId:'';card.draggable=false;card.style.touchAction='none';
    if(selectedDemoIds.has(card.dataset.demoId))card.classList.add('card-selected');
    var holdTimer=null,holdStart=null,lastPointer=null,dragArmed=false,dragging=false,dragOffsetX=0,dragOffsetY=0,dragPlaceholder=null;
    function clearHold(){clearTimeout(holdTimer);holdTimer=null;card.classList.remove('card-ready-to-drag')}
    function finishPointerDrag(e){
      if(!dragging)return;
      window.__motionCardDragBlockUntil=Date.now()+1000;
      var body=dragPlaceholder&&dragPlaceholder.parentNode,section=body&&body.closest('.motion-group');
      var fromRect=card.getBoundingClientRect();
      card.style.position='';card.style.zIndex='';card.style.left='';card.style.top='';card.style.transform='';card.style.pointerEvents='';card.style.width='';card.style.height='';
      if(dragPlaceholder&&dragPlaceholder.parentNode){dragPlaceholder.parentNode.insertBefore(card,dragPlaceholder);}
      if(dragPlaceholder){dragPlaceholder.remove();dragPlaceholder=null;}
      var toRect=card.getBoundingClientRect(),dx=fromRect.left-toRect.left,dy=fromRect.top-toRect.top;
      if(dx||dy){card.style.transition='none';card.style.transform='translate('+dx+'px,'+dy+'px)';requestAnimationFrame(function(){card.style.transition='transform .28s cubic-bezier(.22,1,.36,1)';card.style.transform='';setTimeout(function(){card.style.transition='';},300);});}
      if(body&&section){var ordered=Array.from(body.children).filter(function(item){return item.classList.contains('demo-card')}).map(function(item){return item.dataset.demoId}).filter(Boolean),targetGroup=groups.find(function(item){return item.id===section.dataset.groupId}),movedId=card.dataset.demoId;groups.forEach(function(group){group.demos=group.demos.filter(function(id){return id!==movedId});});if(targetGroup){targetGroup.demos=ordered;saveGroups();}}
      dragging=false;dragArmed=false;card.classList.remove('card-dragging','pointer-dragging');
      card.dataset.justDragged='1';
      card.dataset.dragClickBlockUntil=String(Date.now()+600);
      if(e){e.preventDefault();e.stopPropagation();}
    }
    card.addEventListener('pointerdown',function(e){
      if(e.button&&e.button!==0||e.target.closest('button,input,select,textarea,a'))return;
      if(e.target.closest('.anim-target'))return;
      dragArmed=false;dragging=false;holdStart={x:e.clientX,y:e.clientY};lastPointer={x:e.clientX,y:e.clientY};
      holdTimer=setTimeout(function(){dragArmed=true;card.classList.add('card-ready-to-drag')},350);
      card.setPointerCapture(e.pointerId);
    });
    card.addEventListener('pointermove',function(e){
      if(!holdStart)return;lastPointer={x:e.clientX,y:e.clientY};
      if(!dragArmed&&!dragging){if(Math.hypot(e.clientX-holdStart.x,e.clientY-holdStart.y)>8)clearHold();return;}
      if(dragArmed&&!dragging&&Math.hypot(e.clientX-holdStart.x,e.clientY-holdStart.y)>6){
        dragging=true;clearHold();card.classList.add('card-dragging','pointer-dragging');
        var rect=card.getBoundingClientRect();dragOffsetX=e.clientX-rect.left;dragOffsetY=e.clientY-rect.top;
        dragPlaceholder=document.createElement('div');dragPlaceholder.className='demo-card drag-placeholder pointer-drag-placeholder';dragPlaceholder.style.width=Math.round(rect.width)+'px';dragPlaceholder.style.height=Math.round(rect.height)+'px';card.parentNode.insertBefore(dragPlaceholder,card);
        card.style.position='fixed';card.style.zIndex='1000';card.style.width=rect.width+'px';card.style.height=rect.height+'px';card.style.pointerEvents='none';
      }
      if(dragging){
        card.style.left=(e.clientX-dragOffsetX)+'px';card.style.top=(e.clientY-dragOffsetY)+'px';
        var container=dragPlaceholder.parentNode,over=document.elementFromPoint(e.clientX,e.clientY),overCard=over&&over.closest('.demo-card'),overBody=over&&over.closest('.group-body');
        if(overBody&&overBody!==container){
          var targetCards=Array.from(overBody.children).filter(function(item){return item!==card&&item!==dragPlaceholder&&item.classList.contains('demo-card')});
          if(targetCards.length){
            var firstTarget=targetCards[0],lastTarget=targetCards[targetCards.length-1],targetRect=lastTarget.getBoundingClientRect();
            if(e.clientX>targetRect.right||e.clientY>targetRect.bottom)overBody.appendChild(dragPlaceholder);else overBody.insertBefore(dragPlaceholder,firstTarget);
          }else overBody.appendChild(dragPlaceholder);
          container=dragPlaceholder.parentNode;
          overCard=over&&over.closest('.demo-card');
        }
        var items=Array.from(container.children).filter(function(item){return item!==card&&item!==dragPlaceholder&&item.classList.contains('demo-card')});
        var target=overCard&&overCard.parentNode===container?overCard:null;
        if(!target&&over&&container.contains(over)){var last=items[items.length-1];if(last){var lr=last.getBoundingClientRect();if(e.clientX>lr.right||e.clientY>lr.bottom)container.appendChild(dragPlaceholder);}}
        else if(target&&target!==card&&target!==dragPlaceholder){
          var r=target.getBoundingClientRect(),before=e.clientX<r.left+r.width/2;
          var beforeRects=new Map(items.map(function(item){return [item,item.getBoundingClientRect()]}));
          if(before)container.insertBefore(dragPlaceholder,target);else container.insertBefore(dragPlaceholder,target.nextSibling);
          items.forEach(function(item){var after=item.getBoundingClientRect(),beforeRect=beforeRects.get(item),dx=beforeRect.left-after.left,dy=beforeRect.top-after.top;if(dx||dy){item.style.transition='none';item.style.transform='translate('+dx+'px,'+dy+'px)';requestAnimationFrame(function(){item.style.transition='transform .24s cubic-bezier(.22,1,.36,1)';item.style.transform='';});}});
        }
      }
    });
    card.addEventListener('pointerup',function(e){if(dragging){finishPointerDrag(e);}else{clearHold();dragArmed=false;card.classList.remove('card-ready-to-drag');}holdStart=null;lastPointer=null;try{card.releasePointerCapture(e.pointerId)}catch(_){} });
    card.addEventListener('pointercancel',function(){finishPointerDrag();clearHold();holdStart=null;lastPointer=null});
    document.addEventListener('pointerup',function(e){if(dragging){finishPointerDrag(e);holdStart=null;lastPointer=null;}},{capture:true});
    document.addEventListener('pointercancel',function(){if(dragging){finishPointerDrag();holdStart=null;lastPointer=null;}},{capture:true});
    document.addEventListener('pointerup',function(){
      document.querySelectorAll('.pointer-drag-placeholder').forEach(function(node){node.remove();});
      document.querySelectorAll('.demo-card.pointer-dragging,.demo-card.card-dragging').forEach(function(node){
        node.classList.remove('pointer-dragging','card-dragging','card-batch-dragging');
        node.style.position='';node.style.zIndex='';node.style.left='';node.style.top='';node.style.transform='';node.style.pointerEvents='';node.style.width='';node.style.height='';
      });
    },{capture:false});
    card.addEventListener('click',function(e){
      if(card.dataset.justDragged||Number(card.dataset.dragClickBlockUntil)>Date.now()){delete card.dataset.justDragged;e.preventDefault();e.stopPropagation();return;}
      if(!e.shiftKey||e.target.closest('button,.action-menu'))return;e.preventDefault();e.stopPropagation();
      if(selectedDemoIds.has(card.dataset.demoId)){selectedDemoIds.delete(card.dataset.demoId);card.classList.remove('card-selected')}else{selectedDemoIds.add(card.dataset.demoId);card.classList.add('card-selected')}
    });
    card.addEventListener('dragstart',function(e){
      if(!dragArmed){e.preventDefault();return}
      card.classList.add('card-dragging');
      var moving=selectedDemoIds.has(card.dataset.demoId)?Array.from(document.querySelectorAll('.demo-card.card-selected')):[card];
      moving.forEach(function(item){
        var rect=item.getBoundingClientRect(),originParent=item.parentNode,parentRect=originParent.getBoundingClientRect(),placeholder=document.createElement('div');
        placeholder.className='demo-card drag-placeholder drag-origin-placeholder';
        placeholder.setAttribute('aria-hidden','true');
        placeholder.style.width=Math.round(rect.width)+'px';placeholder.style.height=Math.round(rect.height)+'px';
        placeholder.style.left=(rect.left-parentRect.left+originParent.scrollLeft)+'px';
        placeholder.style.top=(rect.top-parentRect.top+originParent.scrollTop)+'px';
        originParent.appendChild(placeholder);
        item._dragPlaceholder=placeholder;
        item.classList.add(item===card?'card-dragging':'card-batch-dragging');
      });
      var ghost=card.cloneNode(true);ghost.classList.remove('card-dragging','card-batch-dragging','card-selected');ghost.classList.add('drag-ghost');ghost.style.cssText='position:fixed;left:-10000px;top:-10000px;width:'+Math.round(card.getBoundingClientRect().width)+'px;height:'+Math.round(card.getBoundingClientRect().height)+'px;opacity:.94;pointer-events:none;';
      document.body.appendChild(ghost);
      if(e.dataTransfer&&e.dataTransfer.setDragImage)e.dataTransfer.setDragImage(ghost,Math.round(card.getBoundingClientRect().width/2),Math.round(card.getBoundingClientRect().height/2));
      card._dragGhost=ghost;
      e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',card.dataset.demoId)
    });
    card.addEventListener('dragend',function(){
      dragArmed=false;card.draggable=false;clearHold();
      if(card._dragGhost){card._dragGhost.remove();card._dragGhost=null}
      document.querySelectorAll('.demo-card').forEach(function(item){
        item.classList.remove('card-dragging','card-batch-dragging');
        if(item._dragPlaceholder){item._dragPlaceholder.remove();item._dragPlaceholder=null}
        item.style.transition='';item.style.transform='';
      });
      card.dataset.justDragged='1';setTimeout(function(){delete card.dataset.justDragged},150);document.querySelectorAll('.card-drop-target,.drag-over').forEach(function(el){el.classList.remove('card-drop-target');el.classList.remove('drag-over')})
    });
    var preview=document.createElement('div');preview.className='demo-preview demo-preview-'+key;
    var pc=document.createElement('div');pc.className='anim-target';preview.appendChild(pc);card.appendChild(preview);
    var info=document.createElement('div');info.className='demo-info';
    var nameRow=document.createElement('div');nameRow.className='demo-name';
    var nameLabel=document.createElement('span');nameLabel.textContent=MotionAnimations.getDisplayName(demo);nameLabel.contentEditable='true';nameLabel.spellcheck=false;nameLabel.setAttribute('role','textbox');nameLabel.setAttribute('aria-label','修改动效名称');
    function saveInlineName(){var value=nameLabel.textContent.trim();if(!value)value=MotionAnimations.getDisplayName(demo);nameLabel.textContent=value;nameOverrides[demo._id||demoId(key,demo,idx)]=value;demo.displayName=value;try{localStorage.setItem('motion-playground-pro-name-overrides-v1',JSON.stringify(nameOverrides))}catch(e){}}
    nameLabel.addEventListener('click',function(e){e.stopPropagation()});
    nameLabel.addEventListener('pointerdown',function(e){e.stopPropagation()});
    nameLabel.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();nameLabel.blur()}e.stopPropagation()});
    nameLabel.addEventListener('blur',saveInlineName);
    nameRow.appendChild(nameLabel);info.appendChild(nameRow);
    var params=document.createElement('div');params.className='demo-params';
    params.innerHTML='<span><i class="fas fa-clock"></i> '+demo.duration+'</span><span><i class="fas fa-hourglass-start"></i> '+(demo.delay||'0s')+'</span>'+(demo.exitEnabled?'<span><i class="fas fa-rotate-left"></i> 回退</span>':'');
    info.appendChild(params);
    var actions=document.createElement('div');actions.className='demo-actions';
    var menuWrap=document.createElement('span');menuWrap.className='card-menu-wrap';
    var moreBtn=document.createElement('button');moreBtn.className='card-more';moreBtn.type='button';moreBtn.title='更多操作';moreBtn.setAttribute('aria-label','更多操作');moreBtn.innerHTML='<i class="fas fa-ellipsis-h"></i>';
    var menu=document.createElement('span');menu.className='action-menu card-action-menu';
    function baseMenu(){menu.innerHTML='<button data-card-action="group"><i class="fas fa-layer-group"></i>移动到分组</button><button data-card-action="category"><i class="fas fa-arrow-right-arrow-left"></i>移动到类目</button><button data-card-action="delete" class="danger"><i class="fas fa-trash"></i>删除动效</button>'}
    function selectedForCard(){return selectedDemoIds.has(card.dataset.demoId)?getSelectedDemoIds():[card.dataset.demoId]}
    function updateMenuPlacement(){
      if(!menu.classList.contains('open'))return;
      menu.style.maxHeight='';
      var wrapRect=menuWrap.getBoundingClientRect(),menuHeight=menu.scrollHeight,gap=6,viewportHeight=window.innerHeight||document.documentElement.clientHeight;
      var spaceBelow=viewportHeight-wrapRect.bottom-gap,spaceAbove=wrapRect.top-gap;
      var upward=spaceBelow<menuHeight;
      menu.classList.toggle('menu-up',upward);
      menu.style.maxHeight=Math.max(0,Math.floor(upward?spaceAbove:spaceBelow))+'px';
    }
    function openMenu(){var opening=!menu.classList.contains('open');if(MotionAnimations.closeMenus)MotionAnimations.closeMenus(opening?menu:null);menu.classList.toggle('open',opening);card.classList.toggle('card-menu-open',opening);moreBtn.classList.toggle('active',opening);if(opening)requestAnimationFrame(updateMenuPlacement);else{menu.classList.remove('menu-up');menu.style.maxHeight=''}}
    baseMenu();
    moreBtn.addEventListener('click',function(e){e.stopPropagation();openMenu()});
    menu.addEventListener('pointerdown',function(e){e.stopPropagation()});
    menu.addEventListener('click',function(e){
      e.stopPropagation();var button=e.target.closest('button');if(!button)return;var ids=selectedForCard(),action=button.dataset.cardAction;
      if(action==='group'){var groups=ensureGroups(key);menu.innerHTML='<button data-card-action="back"><i class="fas fa-arrow-left"></i>返回</button>'+groups.map(function(g){return '<button data-group-id="'+g.id+'"><i class="fas fa-layer-group"></i>'+g.title+'</button>'}).join('');requestAnimationFrame(updateMenuPlacement);return}
      if(action==='category'){menu.innerHTML='<button data-card-action="back"><i class="fas fa-arrow-left"></i>返回</button>'+Object.keys(categoryMeta).map(function(cat){return '<button data-category-id="'+cat+'"><i class="fas fa-folder"></i>'+categoryMeta[cat].title+'</button>'}).join('');requestAnimationFrame(updateMenuPlacement);return}
      if(action==='back'){baseMenu();requestAnimationFrame(updateMenuPlacement);return}
      if(button.dataset.groupId){moveDemosToGroup(ids,key,button.dataset.groupId);return}
      if(button.dataset.categoryId){moveDemosToCategory(ids,button.dataset.categoryId);return}
      if(action==='delete')deleteDemos(ids);
    });
    menuWrap.appendChild(moreBtn);menuWrap.appendChild(menu);actions.appendChild(menuWrap);
    var copyBtn=document.createElement('button');copyBtn.className='btn-copy dls-press-scale';copyBtn.type='button';copyBtn.setAttribute('aria-label','复制 CSS');copyBtn.dataset.copied='false';copyBtn.innerHTML='<svg class="icon-copy" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><svg class="icon-check" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    bindDlsPressScale(copyBtn);
    copyBtn.addEventListener('click',function(e){e.stopPropagation();copyToClipboard(demo.css);showCopySuccess(copyBtn)});
    actions.appendChild(copyBtn);info.appendChild(actions);card.appendChild(info);parent.appendChild(card);
    if(typeof demo.preview==='function'){
      buildPausedPreview(pc,demo);
      bindPreviewInteraction(pc,demo,key);
    }
}
MotionAnimations.render=render;
MotionAnimations.buildPausedPreview=buildPausedPreview;
MotionAnimations.bindPreviewInteraction=bindPreviewInteraction;
MotionAnimations.triggerEditorPreview=triggerEditorPreview;
MotionAnimations.previewHoverSelector=previewHoverSelector;
MotionAnimations.addCustomMotion=function(data){
  var category=currentCategory,demo;
  data._id=category+'-custom-'+Date.now();
  demo=makeCustomDemo(data);
  MotionAnimations[category].push(demo);
  if(!customDemos[category])customDemos[category]=[];
  customDemos[category].push(data);
  try{localStorage.setItem(customKey,JSON.stringify(customDemos))}catch(err){
    customDemos[category].pop();MotionAnimations[category].pop();
    return{ok:false,error:'文件较大，浏览器本地空间不足'};
  }
  ensureGroups(category);saveGroups();render(category);
  return{ok:true,category:category};
};
function switchCategory(key){
  if(key!=='recycle'&&currentCategory!=='recycle')lastCategory=key;
  currentCategory=key;
  navItems.forEach(function(item){item.classList.toggle('active',item.dataset.category===key)});
  render(key);
}
function copyToClipboard(text){
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).catch(function(){})}
  else{var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy')}catch(e){}document.body.removeChild(ta)}
}
init();
})();

/* ===== Add Motion Dialog ===== */
(function(){
var overlay=document.getElementById('addMotionOverlay'),form=document.getElementById('addMotionForm');
var upload=document.getElementById('motionUpload'),fileInput=document.getElementById('motionFile'),fileName=document.getElementById('motionFileName');
var nameInput=document.getElementById('motionName'),error=document.getElementById('addMotionError');
var selectedFile=null,fileContent='',previewType='',importedCard=null;
function reset(){form.reset();selectedFile=null;fileContent='';previewType='';importedCard=null;fileName.textContent='';upload.classList.remove('has-file','drag-over');error.textContent=''}
function close(){overlay.classList.remove('active');reset()}
function loadFile(file){
  if(!file)return;
  if(file.size>10*1024*1024){error.textContent='文件不能超过 10 MB';return}
  selectedFile=file;fileName.textContent=file.name;upload.classList.add('has-file');error.textContent='';
  if(!nameInput.value.trim())nameInput.value=file.name.replace(/\.[^.]+$/,'');
  var ext=(file.name.split('.').pop()||'').toLowerCase(),reader=new FileReader();
  var supported=['html','htm','json'];
  if(supported.indexOf(ext)<0){error.textContent='不支持该文件格式';upload.classList.remove('has-file');selectedFile=null;return}
  previewType=['html','htm'].indexOf(ext)>-1?'html':'file';
  reader.onload=function(){
    fileContent=String(reader.result||'');
    if(ext==='json'){
      try{
        var payload=JSON.parse(fileContent);
        if(payload&&payload.format==='motion-playground-card'&&payload.card){
          importedCard=payload.card;previewType='motion-card';
          nameInput.value=importedCard.name||nameInput.value;
          error.textContent='已识别动效卡片文件';
        }else error.textContent='JSON 中未找到可导入的动效卡片';
      }catch(err){error.textContent='JSON 文件格式无法识别'}
    }
  };
  reader.readAsText(file);
}
window.MotionAddDialog={open:function(){reset();overlay.classList.add('active');setTimeout(function(){nameInput.focus()},50)}};
fileInput.addEventListener('change',function(){loadFile(this.files[0])});
['dragenter','dragover'].forEach(function(type){upload.addEventListener(type,function(e){e.preventDefault();upload.classList.add('drag-over')})});
['dragleave','drop'].forEach(function(type){upload.addEventListener(type,function(e){e.preventDefault();upload.classList.remove('drag-over')})});
upload.addEventListener('drop',function(e){loadFile(e.dataTransfer.files[0])});
document.getElementById('addMotionClose').addEventListener('click',close);
overlay.addEventListener('click',function(e){if(e.target===overlay)close()});
form.addEventListener('submit',function(e){
  e.preventDefault();var name=nameInput.value.trim();if(!name){error.textContent='请输入动效名称';nameInput.focus();return}if(!selectedFile&&!importedCard){error.textContent='请先上传动效文件';return}
  var data=importedCard?Object.assign({},importedCard):{};
  data.name=name;data.duration=data.duration||'300ms';data.curve=data.curve||'ease-out';data.css=data.css||'animation: fadeUp .3s ease-out both';data.fileName=importedCard?(importedCard.fileName||(selectedFile&&selectedFile.name)||''):(selectedFile?selectedFile.name:'');data.fileContent=importedCard?(importedCard.fileContent||''):fileContent;data.previewType=importedCard?(importedCard.previewType||'motion-card'):previewType;
  var result=MotionAnimations.addCustomMotion(data);
  if(!result.ok){error.textContent=result.error;return}
  close();
});
})();

/* ===== Editor Panel ===== */
(function(){
var overlay=document.getElementById('editorOverlay');
var title=document.getElementById('editorTitle'),nameInput=document.getElementById('editorName');
var durSlider=document.getElementById('editorDuration');
var durInput=document.getElementById('editorDurationInput');
var unitBtn=document.getElementById('editorUnitToggle');
var delaySlider=document.getElementById('editorDelay');
var delayInput=document.getElementById('editorDelayInput');
var delayUnitBtn=document.getElementById('editorDelayUnitToggle');
var curveInput=document.getElementById('editorCurve');
var exitToggle=document.getElementById('editorExitToggle');
var cssBox=document.getElementById('editorCss');
var cssText=cssBox?cssBox.querySelector('.editor-css-text'):null;
var presets=document.getElementById('editorPresets');
var liveStage=document.getElementById('editorLiveStage');
var directionInput=document.getElementById('editorDirection'),directionDial=document.getElementById('directionDial'),directionNeedle=directionDial.querySelector('.direction-needle');
var curveHelp=document.querySelector('.curve-help'),curveHelpPopover=curveHelp?curveHelp.querySelector('.curve-help-popover'):null;
var card=null,demo=null,key=null,idx=null;
var directionRenderFrame=0;
var origDuration='',origDelay='0s',origCurve='',origCss='',origDirection=null,origExitEnabled=true,origSavedDefault=null,origOriginalData=null;
var unit='ms',delayUnit='ms';
var storageKey='motion-playground-pro-animation-defaults-v1';
var savedDefaults={};
var cssFitFrame=0;
try{savedDefaults=JSON.parse(localStorage.getItem(storageKey)||'{}')}catch(e){savedDefaults={}}
function demoStorageId(cat,item){return cat+'::'+item.name}
Object.keys(MotionAnimations).forEach(function(cat){
  if(!Array.isArray(MotionAnimations[cat]))return;
  MotionAnimations[cat].forEach(function(item){
    item.exitEnabled=true;
    item.direction=typeof item.direction==='number'&&isFinite(item.direction)?item.direction:null;
    var saved=savedDefaults[demoStorageId(cat,item)];
    if(!saved)return;
    var rebuiltShare=cat==='card'&&item.name==='分享动画';
    if(!rebuiltShare&&typeof saved.duration==='string')item.duration=saved.duration;
    if(!rebuiltShare&&typeof saved.delay==='string')item.delay=saved.delay;
    if(!rebuiltShare&&typeof saved.curve==='string')item.curve=saved.curve;
    if(!rebuiltShare&&typeof saved.css==='string')item.css=saved.css;
    if(typeof saved.direction==='number')item.direction=saved.direction;
    if(typeof saved.cancelExit==='boolean')item.exitEnabled=!saved.cancelExit;
  });
});
/* Reset restores the persisted defaults, or the built-in values when none exist. */
var OriginalData=JSON.parse(JSON.stringify(MotionAnimations));
if(typeof MotionAnimations.render==='function')MotionAnimations.render('tab');

function msToCss(ms){
  if(ms<=0)return'0s';
  if(ms>=1000)return(ms/1000).toFixed(1).replace('.0','')+'s';
  return (ms/1000).toFixed(3).replace(/^0/,'').replace(/0+$/,'').replace(/\.$/,'')+'s';
}
function parseTimeMs(value){
  var raw=String(value||'0').trim(),num=parseFloat(raw)||0;
  return /ms$/i.test(raw)?Math.max(0,Math.round(num)):Math.max(0,Math.round(num*1000));
}

/* Keep the CSS preview readable without changing the full value used by copy/export. */
function fitEditorCssBox(){
  if(!cssBox||!cssText||!cssBox.isConnected)return;
  var body=cssBox.closest('.editor-body');
  if(!body||!body.clientHeight)return;
  cssBox.classList.remove('is-clamped');
  cssBox.style.removeProperty('--editor-css-lines');
  cssBox.style.height='auto';
  cssBox.style.maxHeight='none';
  var css=getComputedStyle(cssBox),lineHeight=parseFloat(css.lineHeight)||19.2;
  var verticalPadding=(parseFloat(css.paddingTop)||0)+(parseFloat(css.paddingBottom)||0)+(parseFloat(css.borderTopWidth)||0)+(parseFloat(css.borderBottomWidth)||0);
  var naturalHeight=cssBox.scrollHeight;
  var bodyRect=body.getBoundingClientRect(),boxRect=cssBox.getBoundingClientRect();
  /* Convert the viewport distance back to the body's content coordinates. */
  var visibleRemaining=bodyRect.bottom-boxRect.top-body.scrollTop;
  var available=Math.max(0,Math.min(body.clientHeight,visibleRemaining));
  if(naturalHeight<=available){return}
  var lines=Math.max(1,Math.floor((available-verticalPadding)/lineHeight));
  var displayHeight=Math.max(lineHeight+verticalPadding,lines*lineHeight+verticalPadding);
  cssBox.style.setProperty('--editor-css-lines',String(lines));
  cssBox.style.height=displayHeight+'px';
  cssBox.classList.add('is-clamped');
}
function scheduleEditorCssFit(){
  if(cssFitFrame)return;
  cssFitFrame=requestAnimationFrame(function(){cssFitFrame=0;fitEditorCssBox()});
}
function setEditorCss(value){
  var full=String(value==null?'':value);
  if(!cssBox)return;
  if(!cssText){cssText=document.createElement('span');cssText.className='editor-css-text';cssBox.replaceChildren(cssText)}
  cssText.textContent=full;
  cssBox.dataset.fullText=full;
  scheduleEditorCssFit();
}
var editorBody=cssBox?cssBox.closest('.editor-body'):null;
if(editorBody){
  editorBody.addEventListener('scroll',scheduleEditorCssFit,{passive:true});
  if(typeof ResizeObserver==='function')new ResizeObserver(scheduleEditorCssFit).observe(editorBody);
}
if(cssBox)cssBox.addEventListener('copy',function(e){
  if(!e.clipboardData)return;
  e.preventDefault();
  e.clipboardData.setData('text/plain',cssBox.dataset.fullText||'');
});
window.addEventListener('resize',scheduleEditorCssFit);

function positionCurveHelp(){
  if(!curveHelp||!curveHelpPopover)return;
  var rect=curveHelp.getBoundingClientRect(),bubbleHeight=curveHelpPopover.offsetHeight||520;
  var top=Math.max(12,Math.min(window.innerHeight-12,bubbleHeight/2+Math.max(0,Math.min(rect.top+rect.height/2-bubbleHeight/2,window.innerHeight-bubbleHeight-24))));
  curveHelpPopover.style.setProperty('--curve-popover-left',(rect.right+12)+'px');
  curveHelpPopover.style.setProperty('--curve-popover-top',top+'px');
}
if(curveHelp){curveHelp.addEventListener('mouseenter',positionCurveHelp);curveHelp.addEventListener('focusin',positionCurveHelp);window.addEventListener('resize',positionCurveHelp)}

function rotateTransform(transform,angle){
  if(!transform||transform==='none'||!angle)return transform;
  var rad=angle*Math.PI/180,cos=Math.cos(rad),sin=Math.sin(rad);
  function point(x,y){return[(x*cos-y*sin).toFixed(3).replace(/\.000$/,''),(x*sin+y*cos).toFixed(3).replace(/\.000$/,'')]}
  transform=transform.replace(/matrix\(([^)]+)\)/g,function(all,body){var values=body.split(',').map(Number);if(values.length!==6||values.some(function(v){return!isFinite(v)}))return all;var p=point(values[4],values[5]);values[4]=p[0];values[5]=p[1];return'matrix('+values.join(', ')+')'});
  transform=transform.replace(/matrix3d\(([^)]+)\)/g,function(all,body){var values=body.split(',').map(Number);if(values.length!==16||values.some(function(v){return!isFinite(v)}))return all;var p=point(values[12],values[13]);values[12]=p[0];values[13]=p[1];return'matrix3d('+values.join(', ')+')'});
  transform=transform.replace(/translate3d\(\s*(-?\d*\.?\d+)px\s*,\s*(-?\d*\.?\d+)px\s*,\s*([^)]+)\)/g,function(all,a,b,z){var p=point(Number(a),Number(b));return'translate3d('+p[0]+'px, '+p[1]+'px, '+z+')'});
  return transform.replace(/translate(X|Y)?\(\s*(-?\d*\.?\d+)px(?:\s*,\s*(-?\d*\.?\d+)px)?\s*\)/g,function(all,axis,a,b){var x=axis==='Y'?0:Number(a),y=axis==='Y'?Number(a):(axis==='X'?0:Number(b||0)),p=point(x,y);return'translate('+p[0]+'px, '+p[1]+'px)'})
}
function transformPoint(transform){
  if(!transform||transform==='none')return{x:0,y:0};
  var m3=transform.match(/matrix3d\(([^)]+)\)/);if(m3){var v3=m3[1].split(',').map(Number);if(v3.length===16)return{x:v3[12]||0,y:v3[13]||0}}
  var m=transform.match(/matrix\(([^)]+)\)/);if(m){var v=m[1].split(',').map(Number);if(v.length===6)return{x:v[4]||0,y:v[5]||0}}
  var t3=transform.match(/translate3d\(\s*(-?\d*\.?\d+)px\s*,\s*(-?\d*\.?\d+)px/);if(t3)return{x:Number(t3[1]),y:Number(t3[2])};
  var tx=transform.match(/translateX\(\s*(-?\d*\.?\d+)px/),ty=transform.match(/translateY\(\s*(-?\d*\.?\d+)px/),t=transform.match(/translate\(\s*(-?\d*\.?\d+)px(?:\s*,\s*(-?\d*\.?\d+)px)?/);
  return{x:tx?Number(tx[1]):(t?Number(t[1]):0),y:ty?Number(ty[1]):(t?Number(t[2]||0):0)}
}
function animationVector(frames){
  var spatial=frames.filter(function(frame){return typeof frame.transform==='string'});if(!spatial.length)return null;
  var first=transformPoint(spatial[0].transform),last=transformPoint(spatial[spatial.length-1].transform),dx=last.x-first.x,dy=last.y-first.y,mag=Math.sqrt(dx*dx+dy*dy);
  return mag>.5?{x:dx,y:dy,mag:mag,angle:normalizeAngle(Math.atan2(dx,-dy)*180/Math.PI)}:null
}
function inferDemoNativeDirection(item){
  if(!item)return null;
  var source=(item.css||'')+' '+(typeof item.preview==='function'?item.preview.toString():'');
  var candidates=[],match;
  var rx=/translateX\(\s*(-?\d*\.?\d+)px/g;while((match=rx.exec(source)))candidates.push({x:Number(match[1]),y:0});
  var ry=/translateY\(\s*(-?\d*\.?\d+)px/g;while((match=ry.exec(source)))candidates.push({x:0,y:Number(match[1])});
  var rt=/translate\(\s*(-?\d*\.?\d+)px\s*,\s*(-?\d*\.?\d+)px/g;while((match=rt.exec(source)))candidates.push({x:Number(match[1]),y:Number(match[2])});
  if(!candidates.length){if(/translateX\(/.test(source))return 90;if(/translateY\(/.test(source))return 0;return null}
  var primary=candidates.sort(function(a,b){return Math.hypot(b.x,b.y)-Math.hypot(a.x,a.y)})[0];
  return Math.hypot(primary.x,primary.y)>.1?normalizeAngle(Math.atan2(primary.x,-primary.y)*180/Math.PI):null
}
function directionDelta(){
  var native=liveStage._motionNativeAngle;if(native===null||native===undefined||!demo||demo.direction===null)return 0;
  var delta=normalizeAngle(Number(demo.direction)-native);return delta>180?delta-360:delta
}
function isLayoutPositionTransform(el){
  return !!(el&&el.matches&&el.matches('.t-tabs-pill,.tab-indicator,.uline-indicator,.stage-cover-card'));
}
function installInlineDirectionObserver(){
  if(liveStage._motionDirectionObserver)liveStage._motionDirectionObserver.disconnect();
  liveStage._motionInlineRaw=new WeakMap();liveStage._motionInlineApplied=new WeakMap();
  liveStage._motionDirectionObserver=new MutationObserver(function(mutations){
    var delta=directionDelta();if(!delta)return;
    mutations.forEach(function(m){
      var el=m.target;if(isLayoutPositionTransform(el))return;var current=el.style&&el.style.transform;if(!current)return;
      if(liveStage._motionInlineApplied.get(el)===current)return;
      liveStage._motionInlineRaw.set(el,current);
      var mapped=rotateTransform(current,delta);if(mapped!==current){liveStage._motionInlineApplied.set(el,mapped);el.style.transform=mapped}
    })
  });
  liveStage._motionDirectionObserver.observe(liveStage,{subtree:true,attributes:true,attributeFilter:['style']})
}
function mapExistingInlineTransforms(delta){
  if(!delta)return;
  liveStage.querySelectorAll('[style]').forEach(function(el){
    if(isLayoutPositionTransform(el))return;var current=el.style.transform;if(!current||liveStage._motionInlineApplied.get(el)===current)return;
    liveStage._motionInlineRaw.set(el,current);var mapped=rotateTransform(current,delta);
    if(mapped!==current){liveStage._motionInlineApplied.set(el,mapped);el.style.transform=mapped}
  })
}
function collectDirectionAnimations(){
  var records=[],primary=null;
  Array.prototype.forEach.call(liveStage.getAnimations?liveStage.getAnimations({subtree:true}):[],function(anim){
    if(!anim.effect||!anim.effect.getKeyframes||!anim.effect.setKeyframes)return;
    if(isLayoutPositionTransform(anim.effect.target))return;
    try{var frames=anim._motionDirectionFrames||(anim._motionDirectionFrames=anim.effect.getKeyframes().map(function(frame){return Object.assign({},frame)})),vector=animationVector(frames);records.push({anim:anim,frames:frames,vector:vector});if(vector&&(!primary||vector.mag>primary.mag))primary=vector}catch(e){}
  });
  liveStage._motionDirectionRecords=records;liveStage._motionNativeAngle=primary?primary.angle:null;return records
}
function applyDirectionToLive(replay){
  if(!liveStage||!demo)return;
  var records=liveStage._motionDirectionRecords&&liveStage._motionDirectionRecords.length?liveStage._motionDirectionRecords:collectDirectionAnimations(),native=liveStage._motionNativeAngle;
  if(native===null){native=inferDemoNativeDirection(demo);liveStage._motionNativeAngle=native}
  if(native===null)return;
  if(demo.direction===null){demo.direction=native;updateDirectionControl(native)}
  var delta=directionDelta();
  mapExistingInlineTransforms(delta);
  records.forEach(function(rec){try{rec.anim.effect.setKeyframes(rec.frames.map(function(frame){var next=Object.assign({},frame);if(next.transform)next.transform=rotateTransform(next.transform,delta);return next}));if(replay){rec.anim.currentTime=0;rec.anim.play()}}catch(e){}});
  if(replay){var target=liveStage.querySelector('.anim-target');if(target)target._previewActive=true}
}
function updateDirectionControl(angle){directionInput.value=Math.round(angle);directionNeedle.style.transform='translateX(-50%) rotate('+angle+'deg)'}
function setDirection(value,replay){
  var angle=Math.max(-360,Math.min(360,Number(value)||0));
  updateDirectionControl(angle);
  if(demo)demo.direction=angle;
  if(replay){cancelAnimationFrame(directionRenderFrame);directionRenderFrame=requestAnimationFrame(function(){renderLivePreview(true)})}
  else requestAnimationFrame(function(){applyDirectionToLive(false)})
}

function open(cardEl,demoObj,cat,i){
  card=cardEl;demo=demoObj;key=cat;idx=i;
  overlay.dataset.category=cat;
  origDuration=demo.duration;origDelay=demo.delay||'0s';origCurve=demo.curve;origCss=demo.css;origDirection=demo.direction;origExitEnabled=!!demo.exitEnabled;
  var savedId=demoStorageId(key,demo);origSavedDefault=Object.prototype.hasOwnProperty.call(savedDefaults,savedId)?JSON.parse(JSON.stringify(savedDefaults[savedId])):null;
  origOriginalData=OriginalData[key]&&OriginalData[key][idx]?JSON.parse(JSON.stringify(OriginalData[key][idx])):null;
  var ms=parseTimeMs(demo.duration||'300ms')||300;
  unit='ms';
  unitBtn.textContent='ms';
  title.textContent=MotionAnimations.getDisplayName(demo);
  nameInput.value=MotionAnimations.getDisplayName(demo);
  durSlider.value=ms;
  durSlider.max=3000;durSlider.step=10;
  durInput.value=ms;
  var delayMs=parseTimeMs(demo.delay||'0s');delayUnit='ms';delayUnitBtn.textContent='ms';delaySlider.value=Math.min(3000,delayMs);delayInput.value=delayMs;
  curveInput.value=demo.curve;
  updateExitToggle();
  setEditorCss(demo.css);
  updatePresetHighlight();
  overlay.classList.add('active');
  scheduleEditorCssFit();
  renderLivePreview();
  updateDirectionControl(demo.direction===null?0:demo.direction);
}

function close(commit){
  var renderKey=key;
  /* Closing the editor keeps the live changes. Reset is the explicit rollback action. */
  if(commit&&demo&&nameInput){var nextName=nameInput.value.trim();if(nextName){nameOverrides[demo._id||demoId(key,demo,idx)]=nextName;demo.displayName=nextName;try{localStorage.setItem('motion-playground-pro-name-overrides-v1',JSON.stringify(nameOverrides))}catch(e){}}}
  overlay.classList.remove('active');
  delete overlay.dataset.category;
  liveStage.innerHTML='';
  card=null;demo=null;
  if(commit&&renderKey&&typeof MotionAnimations.render==='function')MotionAnimations.render(renderKey);
  if(!commit&&renderKey&&typeof MotionAnimations.render==='function')MotionAnimations.render(renderKey);
}

function renderLivePreview(replayDirection){
  if(!demo||typeof demo.preview!=='function')return;
  if(liveStage._motionDirectionObserver)liveStage._motionDirectionObserver.disconnect();
  liveStage.innerHTML='';
  liveStage._motionDirectionRecords=null;liveStage._motionNativeAngle=null;
  var preview=document.createElement('div');preview.className='demo-preview demo-preview-'+key;
  var target=document.createElement('div');target.className='anim-target';target.dataset.category=key;preview.appendChild(target);liveStage.appendChild(preview);
  MotionAnimations.buildPausedPreview(target,demo);
  MotionAnimations.bindPreviewInteraction(target,demo,key);
  installInlineDirectionObserver();
  requestAnimationFrame(function(){requestAnimationFrame(function(){applyDirectionToLive(!!replayDirection)})});
}

function msToNumber(s){return parseInt(s)||0}

function apply(){
  if(!card||!demo)return;
  var raw=parseFloat(durInput.value)||0;
  var ms=unit==='s'?Math.round(raw*1000):Math.round(raw/10)*10;
  if(ms<0)ms=0;
  var delayRaw=parseFloat(delayInput.value)||0;
  var delayMs=delayUnit==='s'?Math.round(delayRaw*1000):Math.round(delayRaw/10)*10;
  if(delayMs<0)delayMs=0;
  var curve=curveInput.value.trim()||'ease';
  var durStr=msToCss(ms);
  demo.duration=ms+'ms';
  demo.delay=delayMs===0?'0s':delayMs+'ms';
  demo.curve=curve;
  var delayStr=msToCss(delayMs);
  var newCss=demo.css.replace(/\s*animation-direction:\s*reverse;?/g,'').replace(/\n?\/\* 回退动效：[^*]+\*\//g,'').replace(/\d+\.?\d*s/g,durStr).replace(/cubic-bezier\([^)]+\)|ease-in-out|ease-out|ease-in|ease|linear|steps\([^)]+\)/g,curve).replace(/(animation-delay\s*:\s*)[^;]+/g,'$1'+delayStr);
  if(demo.exitEnabled)newCss=newCss.replace(/\s*$/,'')+'\n/* 回退动效：使用相同参数反向播放 */';
  demo.css=newCss;
  setEditorCss(newCss);
  if(unit==='ms'){durSlider.value=ms;durInput.value=ms}
  else{durSlider.value=Math.min(3,ms/1000);durInput.value=(ms/1000).toFixed(2).replace(/\.?0+$/,'')}
  if(delayUnit==='ms'){delaySlider.value=Math.min(3000,delayMs);delayInput.value=delayMs}else{delaySlider.value=Math.min(3,delayMs/1000);delayInput.value=(delayMs/1000).toFixed(2).replace(/\.?0+$/,'')}
  updPreview(ms,curve,delayMs);
  renderLivePreview();
  var params=card.querySelector('.demo-params');
  if(params)params.innerHTML='<span><i class="fas fa-clock"></i> '+(ms+'ms')+'</span><span><i class="fas fa-hourglass-start"></i> '+(demo.delay||'0s')+'</span>'+(demo.exitEnabled?'<span><i class="fas fa-rotate-left"></i> 回退</span>':'');
  updatePresetHighlight();
}

function updPreview(ms,curve,delayMs){
  var c=card.querySelector('.anim-target');if(!c)return;
  var dur=msToCss(ms);
  var els=c.querySelectorAll('*');
  els.forEach(function(el){
    var cs=getComputedStyle(el);
    var tp=cs.transitionProperty;
    var td=cs.transitionDuration;
    if(tp&&tp!=='none'&&td&&td!=='0s'&&!td.startsWith('0')){
      var props=tp.split(', ');
      var newT=[];
      for(var i=0;i<props.length;i++)newT.push(props[i]+' '+dur+' '+curve);
      el.style.transition=newT.join(', ');
    }
    var an=cs.animationName;
    var ad=cs.animationDuration;
    if(an&&an!=='none'&&ad&&ad!=='0s'&&ad!=='0ms'){
      el.style.animationDuration=dur;
      el.style.animationTimingFunction=curve;
      if(delayMs!==undefined)el.style.animationDelay=msToCss(delayMs);
      el.style.animationDirection='normal';
    }
  });
}

function reset(){
  if(!card||!demo||!key||idx==null)return;
  var saved=savedDefaults[demoStorageId(key,demo)],orig=saved||OriginalData[key][idx];
  if(!orig)return;
  demo.duration=orig.duration;
  demo.delay=orig.delay||'0s';
  demo.curve=orig.curve;
  demo.css=orig.css;
  demo.exitEnabled=saved? !saved.cancelExit : !!orig.exitEnabled;
  demo.direction=typeof orig.direction==='number'&&isFinite(orig.direction)?orig.direction:null;
  var ms=parseTimeMs(orig.duration||'300ms')||300;
  unit='ms';unitBtn.textContent='ms';
  durSlider.max=3000;durSlider.step=10;
  durSlider.value=ms;
  durInput.value=ms;
  var resetDelay=parseTimeMs(demo.delay);delayUnit='ms';delayUnitBtn.textContent='ms';delaySlider.value=Math.min(3000,resetDelay);delayInput.value=resetDelay;
  curveInput.value=orig.curve;
  setEditorCss(orig.css);
  updateExitToggle();
  if(demo.direction===null)updateDirectionControl(0);else setDirection(demo.direction,false);
  apply();
}

function setDefault(){
  if(!demo||!key||idx==null)return;
  apply();
  var saved={duration:demo.duration,delay:demo.delay||'0ms',curve:demo.curve,css:demo.css,direction:Number(demo.direction)||0,cancelExit:!demo.exitEnabled};
  savedDefaults[demoStorageId(key,demo)]=saved;
  try{localStorage.setItem(storageKey,JSON.stringify(savedDefaults))}catch(e){}
  demo.duration=saved.duration;
  demo.delay=saved.delay;
  demo.curve=saved.curve;
  demo.css=saved.css;
  demo.exitEnabled=!saved.cancelExit;
  OriginalData[key][idx]=JSON.parse(JSON.stringify(demo));
  if(typeof MotionAnimations.render==='function')MotionAnimations.render(key);
  var button=document.getElementById('editorSetDefault');
  button.textContent='已设为默认';button.classList.add('saved');
  setTimeout(function(){button.textContent='设为默认';button.classList.remove('saved')},1200);
}

function exportCard(){
  if(!demo||!key)return;
  apply();
  var cardData=demo._sourceData?JSON.parse(JSON.stringify(demo._sourceData)):{};
  cardData.name=demo.name;cardData.duration=demo.duration;cardData.curve=demo.curve;cardData.css=demo.css;cardData.direction=Number(demo.direction)||0;cardData.desc=demo.desc||'';cardData.delay=demo.delay||'0s';cardData.exitCurve=demo.exitCurve||'';cardData.cancelExit=!demo.exitEnabled;
  if(!cardData.previewSource&&typeof demo.preview==='function')cardData.previewSource=demo.preview.toString();
  delete cardData._id;
  var payload={format:'motion-playground-card',version:1,app:'Motion Playground Pro',exportedAt:new Date().toISOString(),category:key,card:cardData};
  var blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json;charset=utf-8'}),url=URL.createObjectURL(blob),link=document.createElement('a');
  link.href=url;link.download=(MotionAnimations.getDisplayName(demo)||demo.name||'motion-card').replace(/[\\/:*?"<>|]/g,'-')+'.motion.json';document.body.appendChild(link);link.click();link.remove();setTimeout(function(){URL.revokeObjectURL(url)},1000);
}

function updatePresetHighlight(){
  var v=curveInput.value.trim();
  presets.querySelectorAll('button').forEach(function(b){
    b.classList.toggle('active',b.dataset.curve===v);
  });
}
function updateExitToggle(){var on=!!(demo&&!demo.exitEnabled);exitToggle.classList.toggle('active',on);exitToggle.setAttribute('aria-checked',String(on))}

/* Events */
durSlider.addEventListener('input',function(){
  durInput.value=unit==='s'?Number(this.value).toFixed(2).replace(/\.?0+$/,''):this.value;
  apply();
});
durInput.addEventListener('change',function(){apply()});
durInput.addEventListener('blur',function(){if(!this.value.trim())this.value=0;apply()});
delaySlider.addEventListener('input',function(){delayInput.value=delayUnit==='s'?Number(this.value).toFixed(2).replace(/\.?0+$/,''):this.value;apply()});
delayInput.addEventListener('change',function(){apply()});
delayInput.addEventListener('blur',function(){if(!this.value.trim())this.value=0;apply()});
unitBtn.addEventListener('click',function(){
  if(unit==='ms'){
    var curMs=parseFloat(durSlider.value)||0;
    unit='s';unitBtn.textContent='s';
    durSlider.max=3;durSlider.step=0.01;durSlider.value=Math.min(3,curMs/1000);
    durInput.value=(curMs/1000).toFixed(2).replace(/\.?0+$/,'');
  }else{
    var curS=parseFloat(durInput.value)||0;
    unit='ms';unitBtn.textContent='ms';
    durSlider.max=3000;durSlider.step=10;durSlider.value=Math.round(curS*1000);
    durInput.value=Math.round(curS*1000);
  }
});
delayUnitBtn.addEventListener('click',function(){
  if(delayUnit==='ms'){
    var curDelayMs=parseFloat(delaySlider.value)||0;
    delayUnit='s';delayUnitBtn.textContent='s';delaySlider.max=3;delaySlider.step=0.01;delaySlider.value=Math.min(3,curDelayMs/1000);delayInput.value=(curDelayMs/1000).toFixed(2).replace(/\.?0+$/,'');
  }else{
    var curDelayS=parseFloat(delayInput.value)||0;
    delayUnit='ms';delayUnitBtn.textContent='ms';delaySlider.max=3000;delaySlider.step=10;delaySlider.value=Math.min(3000,Math.round(curDelayS*1000));delayInput.value=Math.round(curDelayS*1000);
  }
  apply();
});
curveInput.addEventListener('input',function(){apply()});
presets.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  curveInput.value=b.dataset.curve;
  apply();
});
exitToggle.addEventListener('click',function(){if(!demo)return;demo.exitEnabled=!demo.exitEnabled;updateExitToggle();apply()});
directionInput.addEventListener('input',function(){setDirection(this.value,true)});
function normalizeAngle(angle){angle=angle%360;return angle<0?angle+360:angle}
function pointerAngle(e){var rect=directionDial.getBoundingClientRect(),x=e.clientX-(rect.left+rect.width/2),y=e.clientY-(rect.top+rect.height/2);return normalizeAngle(Math.atan2(x,-y)*180/Math.PI)}
function directionFromPointer(e){var angle=pointerAngle(e);if(e.shiftKey)angle=normalizeAngle(Math.round(angle/45)*45);setDirection(angle,true)}
directionDial.addEventListener('pointerdown',function(e){this.setPointerCapture(e.pointerId);directionFromPointer(e)});
directionDial.addEventListener('pointermove',function(e){if(this.hasPointerCapture(e.pointerId))directionFromPointer(e)});
directionDial.addEventListener('pointerup',function(e){if(this.hasPointerCapture(e.pointerId))this.releasePointerCapture(e.pointerId)});
liveStage.addEventListener('click',function(e){
  if(!demo||e.target.closest('.direction-control'))return;
  setTimeout(applyDirectionToLive,0);
  if(e._motionPreviewHandled)return;
  var target=liveStage.querySelector('.anim-target');
  if(!target)return;
  e._motionPreviewHandled=true;
  MotionAnimations.triggerEditorPreview(target,demo,key,MotionAnimations.previewHoverSelector(key,demo));
});
document.getElementById('editorClose').addEventListener('click',function(){close(false)});
document.getElementById('editorReset').addEventListener('click',reset);
document.getElementById('editorSetDefault').addEventListener('click',setDefault);
document.getElementById('editorExport').addEventListener('click',exportCard);
overlay.addEventListener('click',function(e){if(e.target===overlay)close(false)});

/* Open editor on card info click (not on preview area) */
document.addEventListener('click',function(e){
  if(Number(window.__motionCardDragBlockUntil)>Date.now()){e.preventDefault();e.stopPropagation();return;}
  var c=e.target.closest('.demo-card');
  if(!c||e.shiftKey||c.dataset.justDragged||Number(c.dataset.dragClickBlockUntil)>Date.now()||e.target.closest('.btn-copy')||e.target.closest('.demo-preview,.anim-target'))return;
  var i=parseInt(c.dataset.demoIndex);
  var a=document.querySelector('#navList li.active');
  var k=a?a.dataset.category:'tab';
  var d=MotionAnimations[k][i];
  if(d)open(c,d,k,i);
});
})();

/* ===== Delete Group Confirmation ===== */
(function(){
var overlay=document.getElementById('deleteGroupOverlay'),title=document.getElementById('deleteGroupTitle'),message=document.getElementById('deleteGroupMessage'),submit=document.getElementById('deleteGroupSubmit'),cancel=document.getElementById('deleteGroupCancel'),onConfirm=null;
function close(){overlay.classList.remove('active');onConfirm=null}
window.MotionDeleteConfirm={open:function(options,callback){if(typeof options==='string')options={title:'删除分组',message:'确定删除分组“'+options+'”吗？其中的动效将移入其他分组，',submitLabel:'删除分组'};title.textContent=options.title||'确认删除';message.textContent=options.message||'';submit.textContent=options.submitLabel||'删除';onConfirm=callback;overlay.classList.add('active');setTimeout(function(){cancel.focus()},20)}};
cancel.addEventListener('click',close);
submit.addEventListener('click',function(){var callback=onConfirm;close();if(callback)callback()});
overlay.addEventListener('click',function(e){if(e.target===overlay)close()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&overlay.classList.contains('active'))close()});
})();

/* ===== Help Overlay ===== */
(function(){
var overlay=document.getElementById('helpOverlay');
var closeBtn=document.getElementById('helpClose');
var navHelp=document.getElementById('navHelp');
function open(){overlay.classList.add('active')}
function close(){overlay.classList.remove('active')}
navHelp.addEventListener('click',function(e){e.stopPropagation();open()});
closeBtn.addEventListener('click',close);
overlay.addEventListener('click',function(e){if(e.target===overlay)close()});
})();

(function(){
  var key='motion-playground-pro-theme',button=document.getElementById('themeToggle');
  function applyTheme(theme){
    var light=theme==='light';
    document.body.classList.toggle('light-theme',light);
    button.classList.toggle('is-light',light);
    button.setAttribute('aria-pressed',light?'true':'false');
  }
  var saved='dark';try{saved=localStorage.getItem(key)||'dark'}catch(e){}
  applyTheme(saved);
  button.addEventListener('click',function(){
    var next=document.body.classList.contains('light-theme')?'dark':'light',reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches,x=0,y=window.innerHeight,radius=Math.hypot(window.innerWidth,window.innerHeight);
    document.documentElement.style.setProperty('--theme-reveal-x',x+'px');document.documentElement.style.setProperty('--theme-reveal-y',y+'px');document.documentElement.style.setProperty('--theme-reveal-radius',radius+'px');
    document.documentElement.dataset.themeReveal=next==='light'?'contract':'expand';
    if(!reduced&&document.startViewTransition){var transition=document.startViewTransition(function(){applyTheme(next)});transition.finished.finally(function(){delete document.documentElement.dataset.themeReveal})}else{applyTheme(next);delete document.documentElement.dataset.themeReveal}
    try{localStorage.setItem(key,next)}catch(e){}
  });
})();

/* ===== Launch Loader ===== */
(function(){
  var loader=document.getElementById('launchLoader');
  if(!loader)return;
  document.body.classList.add('is-launching');
  var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var exitDelay=reduced?120:2780;
  window.setTimeout(function(){
    loader.classList.add('is-exiting');
    window.setTimeout(function(){
      document.body.classList.remove('is-launching');
      loader.remove();
    },reduced?220:850);
  },exitDelay);
})();
