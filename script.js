/* ===== Motion Playground Pro — Animation Data ===== */
const MotionAnimations = {};
(function() {
/* ----- Tab (10) ----- */
MotionAnimations.tab = [
{name:'滑动切换',duration:'300ms',curve:'cubic-bezier(0.22,1,0.36,1)',css:'transition: transform .3s cubic-bezier(0.22,1,0.36,1)',desc:'active 背景块平滑移动',preview:function(c){c.innerHTML='<div class="tab-demo" id="tabSlide"><div class="tab-bar"><div class="tab-indicator"></div><span class="tab-item active">概述</span><span class="tab-item">详情</span><span class="tab-item">设置</span></div></div>';var a=0,i=c.querySelectorAll('.tab-item'),d=c.querySelector('.tab-indicator');i.forEach(function(e,j){e.addEventListener('click',function(){i.forEach(function(e){e.classList.remove('active')});this.classList.add('active');a=j;d.style.transform='translateX('+this.offsetLeft+'px)';d.style.width=this.offsetWidth+'px'})});var f=i[0];d.style.transform='translateX('+f.offsetLeft+'px)';d.style.width=f.offsetWidth+'px';setInterval(function(){var n=(a+1)%i.length;i[n].click()},2200)}},
{name:'Morph Capsule',duration:'320ms',curve:'cubic-bezier(.22,1,.36,1)',css:'transition: transform .32s cubic-bezier(.22,1,.36,1), width .32s cubic-bezier(.22,1,.36,1)',desc:'背景块移动同时改变宽度',preview:function(c){c.innerHTML='<div class="tab-demo" id="tabMorph"><div class="tab-bar morph"><div class="tab-indicator"></div><span class="tab-item active">短</span><span class="tab-item">中等长度</span><span class="tab-item">长标签</span></div></div>';var i=c.querySelectorAll('.tab-item'),d=c.querySelector('.tab-indicator');i.forEach(function(e){e.addEventListener('click',function(){i.forEach(function(e){e.classList.remove('active')});this.classList.add('active');d.style.transform='translateX('+this.offsetLeft+'px)';d.style.width=this.offsetWidth+'px'})});var f=i[0];d.style.transform='translateX('+f.offsetLeft+'px)';d.style.width=f.offsetWidth+'px';var x=0;setInterval(function(){x=(x+1)%i.length;i[x].click()},2400)}},
{name:'Elastic',duration:'380ms',curve:'cubic-bezier(.34,1.56,.64,1)',css:'transition: transform .38s cubic-bezier(.34,1.56,.64,1)',desc:'移动结束轻微弹性',preview:function(c){c.innerHTML='<div class="tab-demo" id="tabElastic"><div class="tab-bar"><div class="tab-indicator elastic"></div><span class="tab-item active">A</span><span class="tab-item">B</span><span class="tab-item">C</span><span class="tab-item">D</span></div></div>';var i=c.querySelectorAll('.tab-item'),d=c.querySelector('.tab-indicator');i.forEach(function(e){e.addEventListener('click',function(){i.forEach(function(e){e.classList.remove('active')});this.classList.add('active');d.style.transform='translateX('+this.offsetLeft+'px)';d.style.width=this.offsetWidth+'px'})});var f=i[0];d.style.transform='translateX('+f.offsetLeft+'px)';d.style.width=f.offsetWidth+'px';var x=0;setInterval(function(){x=(x+1)%i.length;i[x].click()},2000)}},
{name:'Fade Switch',duration:'220ms',curve:'ease',css:'transition: opacity .22s ease',desc:'1 → 0 → 1 淡入淡出切换',preview:function(c){c.innerHTML='<div class="tab-fade-demo" id="tabFade"><div class="fade-stage"><div class="fade-pane active">面板 A</div><div class="fade-pane">面板 B</div><div class="fade-pane">面板 C</div></div><div class="fade-dots"></div></div>';var p=c.querySelectorAll('.fade-pane'),w=c.querySelector('.fade-dots'),u=0;p.forEach(function(_,i){var d=document.createElement('span');d.className='fade-dot'+(i===0?' active':'');w.appendChild(d)});var o=w.querySelectorAll('.fade-dot');setInterval(function(){p[u].classList.remove('active');o[u].classList.remove('active');u=(u+1)%p.length;p[u].classList.add('active');o[u].classList.add('active')},1800)}},
{name:'Scale',duration:'200ms',curve:'cubic-bezier(0.2,0.9,0.4,1)',css:'transition: transform .2s cubic-bezier(0.2,0.9,0.4,1)',desc:'0.96 → 1 缩放切换',preview:function(c){c.innerHTML='<div class="tab-scale-demo" id="tabScale"><div class="scale-stage"><div class="scale-pane active">首页</div><div class="scale-pane">探索</div><div class="scale-pane">我的</div></div></div>';var p=c.querySelectorAll('.scale-pane'),u=0;setInterval(function(){p.forEach(function(e){e.classList.remove('active')});u=(u+1)%p.length;p[u].classList.add('active')},2000)}},
{name:'Underline',duration:'250ms',curve:'cubic-bezier(0.22,1,0.36,1)',css:'transition: width .25s cubic-bezier(0.22,1,0.36,1), transform .25s cubic-bezier(0.22,1,0.36,1)',desc:'下划线宽度动画',preview:function(c){c.innerHTML='<div class="tab-underline-demo" id="tabUnderline"><div class="uline-bar"><span class="uline-item active">精选</span><span class="uline-item">关注</span><span class="uline-item">推荐</span><div class="uline-indicator"></div></div></div>';var i=c.querySelectorAll('.uline-item'),d=c.querySelector('.uline-indicator');i.forEach(function(e){e.addEventListener('click',function(){i.forEach(function(e){e.classList.remove('active')});this.classList.add('active');d.style.transform='translateX('+this.offsetLeft+'px)';d.style.width=this.offsetWidth+'px'})});var f=i[0];f.classList.add('active');d.style.transform='translateX('+f.offsetLeft+'px)';d.style.width=f.offsetWidth+'px';var x=0;setInterval(function(){x=(x+1)%i.length;i[x].click()},2000)}},
{name:'Liquid',duration:'400ms',curve:'cubic-bezier(0.34,1.56,0.64,1)',css:'transition: border-radius .4s cubic-bezier(0.34,1.56,0.64,1)',desc:'border-radius 弹性形变',preview:function(c){c.innerHTML='<div class="tab-liquid-demo" id="tabLiquid" style="height:80px;display:flex;align-items:center;justify-content:center"><div class="liquid-shape"><span>点击变形</span></div></div>';var s=c.querySelector('.liquid-shape'),m=!1;s.addEventListener('click',function(){m=!m;s.style.borderRadius=m?'50%':'20px';s.style.width=m?'80px':'120px';s.style.height=m?'80px':'48px'});setInterval(function(){s.click()},2000)}},
{name:'Material Ripple',duration:'500ms',curve:'cubic-bezier(0.2,0,0,1)',css:'ripple animation 500ms cubic-bezier(0.2,0,0,1)',desc:'点击产生涟漪扩散效果',preview:function(c){c.innerHTML='<div class="tab-ripple-demo" id="tabRipple"><div class="ripple-btn">点击涟漪</div></div>';var b=c.querySelector('.ripple-btn');b.addEventListener('click',function(e){var r=this.getBoundingClientRect(),s=document.createElement('span');s.className='ripple-effect';var d=Math.max(r.width,r.height);s.style.width=s.style.height=d+'px';s.style.left=(e.clientX-r.left-d/2)+'px';s.style.top=(e.clientY-r.top-d/2)+'px';this.appendChild(s);setTimeout(function(){s.remove()},600)})}}
];
/* ----- Text (10) ----- */
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
{name:'Apple Hero',duration:'700ms',curve:'cubic-bezier(0.2,0.9,0.4,1)',css:'animation: appleHero .7s cubic-bezier(0.2,0.9,0.4,1) both',desc:'放大 + 字距变化',preview:function(c){c.innerHTML='<div class="text-demo" id="textHero"><div class="text-anim-wrap"><span class="t-hero t-line">Apple Hero</span></div></div>';var e=c.querySelector('.t-hero');var o=function(){e.style.animation='none';void e.offsetWidth;e.style.animation='appleHero .7s cubic-bezier(0.2,0.9,0.4,1) both'};o();setInterval(o,2500)}}
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
/* ----- Card (6) ----- */
MotionAnimations.card = [
{name:'分享动画',duration:'200ms',curve:'cubic-bezier(.08,.82,.17,1)',exitCurve:'cubic-bezier(.78,.14,.15,.86)',css:'transform-origin: right top; animation: sharePopoverIn .2s cubic-bezier(.08,.82,.17,1) both; @keyframes sharePopoverIn { from { opacity: 0; transform: scale(.8); } to { opacity: 1; transform: scale(1); } } @keyframes sharePopoverOut { from { opacity: 1; transform: scale(1); } to { opacity: 0; transform: scale(.8); } }',desc:'右上角缩放淡入，点击再次缩放淡出',preview:function(c){c.innerHTML='<div class="share-motion-demo"><button class="share-motion-trigger" aria-label="分享"><img src="assets/share.svg" alt=""></button><div class="share-motion-popover"><div class="share-motion-title">分享</div><div class="share-motion-subtitle">分享链接，与他人一起查看</div><div class="share-motion-link"><i class="fas fa-link"></i><span>iflyrec.com/share/meeting</span><button class="share-motion-copy">复制</button></div></div></div>';var b=c.querySelector('.share-motion-trigger'),p=c.querySelector('.share-motion-popover'),opened=false,restoreTimer=null,thisDemo=MotionAnimations.card.find(function(item){return item.name==='分享动画'});function playPopover(leaving){var seconds=(parseInt(thisDemo.duration)||200)/1000,curve=leaving?thisDemo.exitCurve:thisDemo.curve;p.style.animation='none';void p.offsetWidth;p.style.animation=(leaving?'sharePopoverOut ':'sharePopoverIn ')+seconds+'s '+curve+' both';p.style.animationPlayState='running'}b.addEventListener('click',function(){clearTimeout(restoreTimer);var leaving=opened&&thisDemo.exitEnabled;playPopover(leaving);opened=!leaving;if(leaving){restoreTimer=setTimeout(function(){if(!p.isConnected)return;playPopover(false);opened=true},8000)}})}},
{name:'Hover Lift',duration:'300ms',curve:'cubic-bezier(0.2,0.9,0.4,1)',css:'transition: transform .3s cubic-bezier(0.2,0.9,0.4,1), box-shadow .3s ease',desc:'悬浮上移 8px',preview:function(c){c.innerHTML='<div class="card-demo" id="cardLift"><div class="demo-card-el"><div class="card-visual"></div><div class="card-info"><div class="card-title">Card Title</div><div class="card-sub">悬浮上移</div></div></div></div>';var e=c.querySelector('.demo-card-el');e.addEventListener('mouseenter',function(){e.style.transform='translateY(-6px)';e.style.boxShadow='0 16px 40px rgba(0,0,0,0.4)'});e.addEventListener('mouseleave',function(){e.style.transform='';e.style.boxShadow=''})}},
{name:'Glass Blur',duration:'300ms',curve:'ease',css:'transition: backdrop-filter .3s ease, background .3s ease',desc:'悬浮毛玻璃模糊',preview:function(c){c.innerHTML='<div class="card-demo" id="cardGlass"><div class="demo-card-el glass-card"><div class="card-visual" style="background:linear-gradient(135deg,#6c5ce7,#a29bfe)"></div><div class="card-info"><div class="card-title">Glass</div><div class="card-sub">悬浮模糊</div></div></div></div>';var e=c.querySelector('.demo-card-el');e.addEventListener('mouseenter',function(){e.style.backdropFilter='blur(8px)';e.style.background='rgba(255,255,255,0.12)'});e.addEventListener('mouseleave',function(){e.style.backdropFilter='';e.style.background=''})}},
{name:'Tilt',duration:'300ms',curve:'cubic-bezier(0.34,1.56,0.64,1)',css:'transition: transform .3s cubic-bezier(0.34,1.56,0.64,1)',desc:'3D 倾斜跟随鼠标',preview:function(c){c.innerHTML='<div class="card-demo" id="cardTilt"><div class="demo-card-el tilt-card"><div class="card-visual" style="background:linear-gradient(135deg,#fd79a8,#e84393)"></div><div class="card-info"><div class="card-title">Tilt</div><div class="card-sub">3D 倾斜</div></div></div></div>';var e=c.querySelector('.demo-card-el');e.addEventListener('mousemove',function(ev){var r=this.getBoundingClientRect();this.style.transform='perspective(400px) rotateY('+((ev.clientX-r.left)/r.width-0.5)*12+'deg) rotateX('+((0.5-(ev.clientY-r.top)/r.height)*12)+'deg)'});e.addEventListener('mouseleave',function(){this.style.transform=''})}},
{name:'Spotlight',duration:'300ms',curve:'ease-out',css:'transition: box-shadow .3s ease-out',desc:'聚光灯阴影效果',preview:function(c){c.innerHTML='<div class="card-demo" id="cardSpot"><div class="demo-card-el spot-card"><div class="card-visual" style="background:linear-gradient(135deg,#00cec9,#00b894)"></div><div class="card-info"><div class="card-title">Spotlight</div><div class="card-sub">聚光灯</div></div></div></div>';var e=c.querySelector('.demo-card-el');e.addEventListener('mouseenter',function(){e.style.boxShadow='0 0 40px rgba(108,92,231,0.3), 0 0 80px rgba(108,92,231,0.1)'});e.addEventListener('mouseleave',function(){e.style.boxShadow=''})}},
{name:'Shadow Grow',duration:'250ms',curve:'cubic-bezier(0.25,0.46,0.45,0.94)',css:'transition: box-shadow .25s cubic-bezier(0.25,0.46,0.45,0.94), transform .25s ease',desc:'阴影扩大加深',preview:function(c){c.innerHTML='<div class="card-demo" id="cardShadow"><div class="demo-card-el shadow-card"><div class="card-visual" style="background:linear-gradient(135deg,#fab1a0,#e17055)"></div><div class="card-info"><div class="card-title">Shadow</div><div class="card-sub">阴影扩大</div></div></div></div>';var e=c.querySelector('.demo-card-el');e.addEventListener('mouseenter',function(){e.style.boxShadow='0 24px 48px -8px rgba(0,0,0,0.5)';e.style.transform='translateY(-2px)'});e.addEventListener('mouseleave',function(){e.style.boxShadow='';e.style.transform=''})}},
{name:'Float',duration:'800ms',curve:'cubic-bezier(0.2,0.9,0.4,1)',css:'animation: floatCard .8s cubic-bezier(0.2,0.9,0.4,1) infinite alternate',desc:'持续浮动',preview:function(c){c.innerHTML='<div class="card-demo" id="cardFloat"><div class="demo-card-el" style="animation:floatCard .8s cubic-bezier(0.2,0.9,0.4,1) infinite alternate;"><div class="card-visual" style="background:linear-gradient(135deg,#81ecec,#00cec9)"></div><div class="card-info"><div class="card-title">Float</div><div class="card-sub">持续浮动</div></div></div></div>'}}
];
/* ----- List (3) ----- */
MotionAnimations.list = [
{name:'Stagger Fade · 30ms',duration:'250ms',curve:'ease-out',delay:'30ms',css:'animation: fadeUp .25s ease-out both',desc:'逐项淡入，间隔 30ms',preview:function(c){c.innerHTML='<div class="list-demo" id="listFade30"><div class="list-items"></div></div>';var w=c.querySelector('.list-items'),its=['项目 A','项目 B','项目 C','项目 D','项目 E'];its.forEach(function(t,i){var el=document.createElement('div');el.className='list-item';el.textContent=t;el.style.animation='fadeUp .25s ease-out both';el.style.animationDelay=(i*0.03)+'s';w.appendChild(el)});setInterval(function(){var all=w.querySelectorAll('.list-item');all.forEach(function(el,i){el.style.animation='none';void el.offsetWidth;el.style.animation='fadeUp .25s ease-out both';el.style.animationDelay=(i*0.03)+'s'})},3000)}},
{name:'Stagger Slide · 60ms',duration:'300ms',curve:'ease-out',delay:'60ms',css:'animation: slideIn .3s ease-out both',desc:'逐项滑入，间隔 60ms',preview:function(c){c.innerHTML='<div class="list-demo" id="listSlide60"><div class="list-items"></div></div>';var w=c.querySelector('.list-items'),its=['项目 A','项目 B','项目 C','项目 D','项目 E'];its.forEach(function(t,i){var el=document.createElement('div');el.className='list-item';el.textContent=t;el.style.animation='slideIn .3s ease-out both';el.style.animationDelay=(i*0.06)+'s';w.appendChild(el)});setInterval(function(){var all=w.querySelectorAll('.list-item');all.forEach(function(el,i){el.style.animation='none';void el.offsetWidth;el.style.animation='slideIn .3s ease-out both';el.style.animationDelay=(i*0.06)+'s'})},3200)}},
{name:'Stagger Blur · 90ms',duration:'350ms',curve:'ease-out',delay:'90ms',css:'animation: blurReveal .35s ease-out both',desc:'逐项模糊清晰，间隔 90ms',preview:function(c){c.innerHTML='<div class="list-demo" id="listBlur90"><div class="list-items"></div></div>';var w=c.querySelector('.list-items'),its=['项目 A','项目 B','项目 C','项目 D','项目 E'];its.forEach(function(t,i){var el=document.createElement('div');el.className='list-item';el.textContent=t;el.style.animation='blurReveal .35s ease-out both';el.style.animationDelay=(i*0.09)+'s';w.appendChild(el)});setInterval(function(){var all=w.querySelectorAll('.list-item');all.forEach(function(el,i){el.style.animation='none';void el.offsetWidth;el.style.animation='blurReveal .35s ease-out both';el.style.animationDelay=(i*0.09)+'s'})},3500)}}
];
})();

/* ===== Motion Playground Pro — Main App ===== */
(function(){'use strict';
var categoryMeta={tab:{title:'选项卡动效'},text:{title:'文字动效'},button:{title:'按钮动效'},card:{title:'卡片动效'},list:{title:'列表动效'}};
var animationNameZh={
  'Morph Capsule':'滑动变形切换','Elastic':'弹性切换','Fade Switch':'淡入淡出切换','Scale':'缩放切换','Underline':'下划线滑动','Liquid':'液态变形','Material Ripple':'材质涟漪',
  'Fade Up':'向上淡入','Blur Reveal':'模糊显现','Character Stagger':'字符错落','Word Stagger':'词语错落','Gradient Flow':'渐变流动','Mask Reveal':'遮罩显现','Typewriter':'打字机','Glow':'文字发光','Rotate In':'旋转进入','Apple Hero':'主视觉缩放',
  'Hover Lift':'悬浮抬升','Glow Border':'边框发光','Shine Sweep':'光泽扫过','Press Scale':'按压缩放','Magnetic':'磁性跟随','Pulse':'脉冲呼吸','Ripple':'点击涟漪',
  'Glass Blur':'毛玻璃模糊','Tilt':'三维倾斜','Spotlight':'聚光灯','Shadow Grow':'阴影扩展','Float':'持续浮动',
  'Stagger Fade · 30ms':'错落淡入 · 30ms','Stagger Slide · 60ms':'错落滑入 · 60ms','Stagger Blur · 90ms':'错落模糊 · 90ms'
};
MotionAnimations.getDisplayName=function(demo){return animationNameZh[demo.name]||demo.name};
var currentCategory='tab',navItems,demoGrid,headerTitle,demoCounter;
var groupsKey='motion-playground-pro-groups-v1',customKey='motion-playground-pro-custom-demos-v1';
var groupState={},customDemos={};
try{groupState=JSON.parse(localStorage.getItem(groupsKey)||'{}')}catch(e){groupState={}}
try{customDemos=JSON.parse(localStorage.getItem(customKey)||'{}')}catch(e){customDemos={}}
var bundledDefaults={'tab::Liquid':{duration:'300ms',curve:'cubic-bezier(0.34,1.56,0.64,1)',css:'transition: border-radius .3s cubic-bezier(0.34,1.56,0.64,1)',cancelExit:true},'tab::Morph Capsule':{duration:'300ms',curve:'cubic-bezier(.22,1,.36,1)',css:'transition: transform .3s cubic-bezier(.22,1,.36,1), width .3s cubic-bezier(.22,1,.36,1)',cancelExit:false}};
var defaultsKey='motion-playground-pro-animation-defaults-v1';try{var storedDefaults=JSON.parse(localStorage.getItem(defaultsKey)||'{}');if(!Object.keys(storedDefaults).length){localStorage.setItem(defaultsKey,JSON.stringify(bundledDefaults))}}catch(e){}
/* Seed the shared layout for first-time visitors. Existing browser data remains unchanged. */
var bundledGroups={tab:[{id:'tab-default',title:'默认分组',collapsed:true,demos:['tab-builtin-0','tab-builtin-1','tab-builtin-2','tab-builtin-5','tab-builtin-6']},{id:'tab-group-1784960903636',title:'待调整',collapsed:true,demos:['tab-builtin-4','tab-builtin-7','tab-builtin-3']}],text:[{id:'text-default',title:'默认分组',collapsed:true,demos:['text-builtin-0','text-builtin-1','text-builtin-2','text-builtin-3','text-builtin-4','text-builtin-5','text-builtin-6','text-builtin-7','text-builtin-9','text-builtin-8']}],button:[{id:'button-group-1784954858315',title:'已使用动效🐘',collapsed:false,demos:['button-builtin-0']},{id:'button-default',title:'默认分组',collapsed:true,demos:['button-builtin-1','button-builtin-2','button-builtin-3','button-builtin-4','button-builtin-5','button-builtin-6','button-builtin-7','button-builtin-8']}],card:[{id:'card-group-1784961899915',title:'已使用动效🐄',collapsed:false,demos:['card-builtin-0']},{id:'card-default',title:'默认分组',collapsed:true,demos:['card-builtin-1','card-builtin-2','card-builtin-3','card-builtin-4','card-builtin-5','card-builtin-6']}],list:[{id:'list-default',title:'默认分组',collapsed:false,demos:['list-builtin-0','list-builtin-1','list-builtin-2']}]};
if(!Object.keys(groupState).length){groupState=JSON.parse(JSON.stringify(bundledGroups));try{localStorage.setItem(groupsKey,JSON.stringify(groupState))}catch(e){}}
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
    if(typeof importedPreview==='function')return {_id:data._id,_sourceData:data,name:data.name,duration:data.duration||'300ms',curve:data.curve||'ease-out',exitCurve:data.exitCurve,delay:data.delay||'0s',css:data.css||'',exitEnabled:data.cancelExit!==true,desc:data.desc||'导入的动效卡片',preview:importedPreview};
  }
  return {_id:data._id,_sourceData:data,name:data.name,duration:data.duration||'300ms',curve:data.curve||'ease-out',css:data.css||'animation: fadeUp .3s ease-out both',exitEnabled:data.cancelExit!==true,desc:data.fileName?'上传文件 · '+data.fileName:'自定义动效',preview:function(c){
    if(data.previewType==='html'&&data.fileContent){var f=document.createElement('iframe');f.className='uploaded-preview';f.sandbox='allow-scripts';f.srcdoc=data.fileContent;c.replaceChildren(f);return}
    if(data.previewType==='image'&&data.fileContent){var im=document.createElement('img');im.className='uploaded-media';im.src=data.fileContent;im.alt=data.name;c.replaceChildren(im);return}
    if(data.previewType==='video'&&data.fileContent){var v=document.createElement('video');v.className='uploaded-media';v.src=data.fileContent;v.muted=true;v.loop=true;v.playsInline=true;v.addEventListener('mouseenter',function(){v.play().catch(function(){})});v.addEventListener('mouseleave',function(){v.pause();v.currentTime=0});c.replaceChildren(v);return}
    if(data.fileName){c.innerHTML='<div class="uploaded-file-placeholder"><i class="far fa-file-code"></i><span></span></div>';c.querySelector('span').textContent=data.fileName;return}
    c.innerHTML='<div class="text-demo"><div class="text-anim-wrap"><span class="t-line" style="animation:fadeUp .3s ease-out both"></span></div></div>';c.querySelector('.t-line').textContent=data.name;
  }};
}
function demoId(cat,demo,idx){if(!demo._id)demo._id=cat+'-builtin-'+idx;return demo._id}
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
  demoGrid=document.getElementById('demoGrid');
  headerTitle=document.getElementById('headerTitle');
  demoCounter=document.getElementById('demoCounter');
  var pageMore=document.getElementById('pageMore'),pageMenu=document.getElementById('pageActionMenu');
  function closeMenus(except){document.querySelectorAll('.action-menu.open').forEach(function(m){if(m!==except){m.classList.remove('open');var section=m.closest('.motion-group');if(section)section.classList.remove('menu-open')}});if(except!==pageMenu)pageMore.classList.remove('active')}
  pageMore.addEventListener('click',function(e){e.stopPropagation();var opening=!pageMenu.classList.contains('open');closeMenus(opening?pageMenu:null);pageMenu.classList.toggle('open',opening);pageMore.classList.toggle('active',opening)});
  pageMenu.addEventListener('pointerdown',function(e){e.stopPropagation()});
  pageMenu.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;b.dataset.action==='add-demo'?addDemo():addGroup();pageMenu.classList.remove('open');pageMore.classList.remove('active')});
  document.addEventListener('pointerdown',function(e){if(!e.target.closest('.action-menu')&&!e.target.closest('.group-more'))closeMenus(null)});
  MotionAnimations.closeMenus=closeMenus;
  navItems.forEach(function(item){
    item.addEventListener('click',function(){
      var cat=this.dataset.category;
      if(cat&&cat!==currentCategory)switchCategory(cat);
    });
  });
  render('tab');
}
function addDemo(){
  window.MotionAddDialog.open();
}
function addGroup(){
  var name=prompt('请输入分组名称','新分组');if(!name||!name.trim())return;
  ensureGroups(currentCategory).push({id:currentCategory+'-group-'+Date.now(),title:name.trim(),collapsed:false,demos:[]});saveGroups();render(currentCategory);
}
function showCopySuccess(btn){
    clearTimeout(btn.copyFeedbackTimer);
    btn.classList.remove('copy-success');
    void btn.offsetWidth;
    btn.innerHTML='<i class="fas fa-check"></i>复制成功';
    btn.classList.add('copy-success');
    btn.copyFeedbackTimer=setTimeout(function(){
      btn.innerHTML='<i class="fas fa-copy"></i>复制 CSS';
      btn.classList.remove('copy-success');
    },1400);
}
function syncDemoPreview(container,demo){
  var ms=parseInt(demo.duration)||300;
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
function bindPreviewInteraction(container,demo,key){
  var selector=previewHoverSelector(key,demo);
  if(selector){
    var blockHover=function(e){if(!e._motionClickTrigger)e.stopImmediatePropagation()};
    container.addEventListener('mouseenter',blockHover,true);container.addEventListener('mouseleave',blockHover,true);
    container.addEventListener('mousemove',function(e){if(!container._previewActive)e.stopImmediatePropagation()},true);
    container.addEventListener('click',function(e){
      var target=e.target.closest(selector);if(!target||!container.contains(target))return;
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
  container.addEventListener('click',function(e){if(e.target.closest('.fade-stage,.scale-stage,.blur-stage'))advancePanePreview(container)});
}
function render(key){
  var demos=MotionAnimations[key];
  if(!demos||!demos.length)return;
  headerTitle.textContent=categoryMeta[key].title;
  demoCounter.textContent=demos.length+' 个动效';
  demoGrid.innerHTML='';
  var groups=ensureGroups(key);
  groups.forEach(function(group){
    var section=document.createElement('section');section.className='motion-group'+(group.collapsed?' collapsed':'');section.dataset.groupId=group.id;
    var header=document.createElement('div');header.className='group-header';header.innerHTML='<span class="group-drag" title="拖动排序"><i class="fas fa-grip-lines"></i></span><button class="group-toggle" title="折叠或展开"><i class="fas fa-caret-down"></i></button><span class="group-title">'+group.title+'</span><span class="group-count">'+group.demos.length+' 个</span><span class="group-menu-wrap"><button class="group-more" title="分组功能"><i class="fas fa-ellipsis-h"></i></button><span class="action-menu group-menu"><button data-group-action="rename"><i class="fas fa-pen"></i>重命名</button><button data-group-action="delete"><i class="fas fa-trash"></i>删除分组</button></span></span>';
    var body=document.createElement('div');body.className='group-body';section.appendChild(header);section.appendChild(body);demoGrid.appendChild(section);
    header.querySelector('.group-toggle').addEventListener('click',function(){group.collapsed=!group.collapsed;saveGroups();section.classList.toggle('collapsed',group.collapsed)});
    var groupMenu=header.querySelector('.group-menu');
    header.querySelector('.group-more').addEventListener('click',function(e){e.stopPropagation();var opening=!groupMenu.classList.contains('open');if(MotionAnimations.closeMenus)MotionAnimations.closeMenus(opening?groupMenu:null);groupMenu.classList.toggle('open',opening);section.classList.toggle('menu-open',opening)});
    groupMenu.addEventListener('pointerdown',function(e){e.stopPropagation()});
    header.querySelector('.group-menu').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;if(b.dataset.groupAction==='rename'){var n=prompt('重命名分组',group.title);if(n&&n.trim())group.title=n.trim();saveGroups();render(key);return}if(b.dataset.groupAction==='delete'&&groups.length>1){window.MotionDeleteConfirm.open(group.title,function(){var target=groups.find(function(item){return item!==group});target.demos=target.demos.concat(group.demos);groups.splice(groups.indexOf(group),1);saveGroups();render(key)})}});
    group.demos.forEach(function(id){var idx=demos.findIndex(function(d,i){return demoId(key,d,i)===id});if(idx<0)return;createDemoCard(demos[idx],idx,key,body)});
    if(!group.demos.length)body.innerHTML='<div class="empty-group">暂无动效</div>';
    var dragHandle=header.querySelector('.group-drag');dragHandle.draggable=true;
    dragHandle.addEventListener('dragstart',function(e){section.classList.add('dragging');e.dataTransfer.effectAllowed='move'});dragHandle.addEventListener('dragend',function(){section.classList.remove('dragging');document.querySelectorAll('.drag-over').forEach(function(x){x.classList.remove('drag-over')})});
    section.addEventListener('dragover',function(e){e.preventDefault();if(document.querySelector('.demo-card.card-dragging'))section.classList.add('card-drop-target');else section.classList.add('drag-over')});
    section.addEventListener('dragleave',function(e){if(!section.contains(e.relatedTarget)){section.classList.remove('drag-over');section.classList.remove('card-drop-target')}});
    section.addEventListener('drop',function(e){
      e.preventDefault();e.stopPropagation();
      var draggedCard=document.querySelector('.demo-card.card-dragging');
      if(draggedCard){
        var movedId=draggedCard.dataset.demoId;
        groups.forEach(function(g){g.demos=g.demos.filter(function(id){return id!==movedId})});
        if(group.demos.indexOf(movedId)<0)group.demos.push(movedId);
        saveGroups();render(key);return;
      }
      var from=document.querySelector('.motion-group.dragging');if(!from||from===section)return;
      var fromIndex=groups.findIndex(function(g){return g.id===from.dataset.groupId}),toIndex=groups.indexOf(group),moved=groups.splice(fromIndex,1)[0];
      groups.splice(toIndex,0,moved);saveGroups();render(key);
    });
  });
}
function createDemoCard(demo,idx,key,parent){
    var card=document.createElement('div');card.className='demo-card';card.dataset.demoIndex=idx;card.dataset.demoId=demoId(key,demo,idx);card.draggable=true;
    card.addEventListener('dragstart',function(e){card.classList.add('card-dragging');e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',card.dataset.demoId)});
    card.addEventListener('dragend',function(){card.classList.remove('card-dragging');card.dataset.justDragged='1';setTimeout(function(){delete card.dataset.justDragged},150);document.querySelectorAll('.card-drop-target,.drag-over').forEach(function(el){el.classList.remove('card-drop-target');el.classList.remove('drag-over')})});
    var preview=document.createElement('div');preview.className='demo-preview';
    var badge=document.createElement('div');badge.className='demo-badge';badge.textContent=key;preview.appendChild(badge);
    var pc=document.createElement('div');pc.className='anim-target';preview.appendChild(pc);card.appendChild(preview);
    var info=document.createElement('div');info.className='demo-info';
    var nameRow=document.createElement('div');nameRow.className='demo-name';nameRow.innerHTML='<span>'+MotionAnimations.getDisplayName(demo)+'</span>';info.appendChild(nameRow);
    var params=document.createElement('div');params.className='demo-params';
    params.innerHTML='<span><i class="fas fa-clock"></i> '+demo.duration+'</span><span><i class="fas fa-hourglass-start"></i> '+(demo.delay||'0s')+'</span>'+(demo.exitEnabled?'<span><i class="fas fa-rotate-left"></i> 回退</span>':'')+'<span class="curve-badge"><i class="fas fa-chart-line"></i> '+demo.curve+'</span>';
    info.appendChild(params);
    var actions=document.createElement('div');actions.className='demo-actions';
    var cssTag=document.createElement('span');cssTag.className='css-tag';cssTag.style.cssText='font-size:11px;color:#a29bfe;background:rgba(108,92,231,0.12);padding:2px 10px;border-radius:30px;';cssTag.textContent='CSS';actions.appendChild(cssTag);
    var copyBtn=document.createElement('button');copyBtn.className='btn-copy';copyBtn.innerHTML='<i class="fas fa-copy"></i>复制 CSS';
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
function switchCategory(key){
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
var nameInput=document.getElementById('motionName'),durationInput=document.getElementById('motionDuration'),curveInput=document.getElementById('motionCurve'),cssInput=document.getElementById('motionCss'),error=document.getElementById('addMotionError');
var selectedFile=null,fileContent='',previewType='',importedCard=null;
function reset(){form.reset();durationInput.value=300;curveInput.value='ease-out';selectedFile=null;fileContent='';previewType='';importedCard=null;fileName.textContent='';upload.classList.remove('has-file','drag-over');error.textContent=''}
function close(){overlay.classList.remove('active');reset()}
function loadFile(file){
  if(!file)return;
  if(file.size>10*1024*1024){error.textContent='文件不能超过 10 MB';return}
  selectedFile=file;fileName.textContent=file.name;upload.classList.add('has-file');error.textContent='';
  if(!nameInput.value.trim())nameInput.value=file.name.replace(/\.[^.]+$/,'');
  var ext=(file.name.split('.').pop()||'').toLowerCase(),reader=new FileReader();
  previewType=['html','htm','svg'].indexOf(ext)>-1?'html':['gif','webp','png','jpg','jpeg'].indexOf(ext)>-1?'image':['mp4','webm'].indexOf(ext)>-1?'video':'file';
  reader.onload=function(){
    fileContent=String(reader.result||'');
    if(ext==='json'){
      try{
        var payload=JSON.parse(fileContent);
        if(payload&&payload.format==='motion-playground-card'&&payload.card){
          importedCard=payload.card;previewType='motion-card';
          nameInput.value=importedCard.name||nameInput.value;
          durationInput.value=parseInt(importedCard.duration)||300;
          curveInput.value=importedCard.curve||'ease-out';cssInput.value=importedCard.css||'';
          error.textContent='已识别动效卡片文件';
        }
      }catch(err){}
    }
  };
  if(previewType==='html')reader.readAsText(file);else if(previewType==='image'||previewType==='video')reader.readAsDataURL(file);else reader.readAsText(file);
}
window.MotionAddDialog={open:function(){reset();overlay.classList.add('active');setTimeout(function(){nameInput.focus()},50)}};
fileInput.addEventListener('change',function(){loadFile(this.files[0])});
['dragenter','dragover'].forEach(function(type){upload.addEventListener(type,function(e){e.preventDefault();upload.classList.add('drag-over')})});
['dragleave','drop'].forEach(function(type){upload.addEventListener(type,function(e){e.preventDefault();upload.classList.remove('drag-over')})});
upload.addEventListener('drop',function(e){loadFile(e.dataTransfer.files[0])});
document.getElementById('addMotionClose').addEventListener('click',close);document.getElementById('addMotionCancel').addEventListener('click',close);
overlay.addEventListener('click',function(e){if(e.target===overlay)close()});
form.addEventListener('submit',function(e){
  e.preventDefault();var name=nameInput.value.trim();if(!name){error.textContent='请输入动效名称';nameInput.focus();return}
  var ms=Math.max(0,Math.min(10000,parseInt(durationInput.value,10)||300));
  var data=importedCard?Object.assign({},importedCard):{};
  data._id=currentCategory+'-custom-'+Date.now();data.name=name;data.duration=ms+'ms';data.curve=curveInput.value.trim()||'ease-out';data.css=cssInput.value.trim()||'animation: fadeUp '+(ms/1000)+'s '+data.curve+' both';data.fileName=importedCard?(importedCard.fileName||selectedFile.name):(selectedFile?selectedFile.name:'');data.fileContent=importedCard?(importedCard.fileContent||''):fileContent;data.previewType=importedCard?(importedCard.previewType||'motion-card'):previewType;
  var demo=makeCustomDemo(data);MotionAnimations[currentCategory].push(demo);
  if(!customDemos[currentCategory])customDemos[currentCategory]=[];customDemos[currentCategory].push(data);
  try{localStorage.setItem(customKey,JSON.stringify(customDemos))}catch(err){customDemos[currentCategory].pop();MotionAnimations[currentCategory].pop();error.textContent='文件较大，浏览器本地空间不足';return}
  ensureGroups(currentCategory);saveGroups();render(currentCategory);close();
});
})();

/* ===== Editor Panel ===== */
(function(){
var overlay=document.getElementById('editorOverlay');
var title=document.getElementById('editorTitle');
var durSlider=document.getElementById('editorDuration');
var durInput=document.getElementById('editorDurationInput');
var unitBtn=document.getElementById('editorUnitToggle');
var curveInput=document.getElementById('editorCurve');
var exitToggle=document.getElementById('editorExitToggle');
var cssBox=document.getElementById('editorCss');
var presets=document.getElementById('editorPresets');
var liveStage=document.getElementById('editorLiveStage');
var curveHelp=document.querySelector('.curve-help'),curveHelpPopover=curveHelp?curveHelp.querySelector('.curve-help-popover'):null;
var card=null,demo=null,key=null,idx=null;
var origDuration='',origCurve='',origCss='',origExitEnabled=true,origSavedDefault=null,origOriginalData=null;
var unit='ms';
var storageKey='motion-playground-pro-animation-defaults-v1';
var savedDefaults={};
try{savedDefaults=JSON.parse(localStorage.getItem(storageKey)||'{}')}catch(e){savedDefaults={}}
function demoStorageId(cat,item){return cat+'::'+item.name}
Object.keys(MotionAnimations).forEach(function(cat){
  if(!Array.isArray(MotionAnimations[cat]))return;
  MotionAnimations[cat].forEach(function(item){
    item.exitEnabled=true;
    var saved=savedDefaults[demoStorageId(cat,item)];
    if(!saved)return;
    var rebuiltShare=cat==='card'&&item.name==='分享动画';
    if(!rebuiltShare&&typeof saved.duration==='string')item.duration=saved.duration;
    if(!rebuiltShare&&typeof saved.curve==='string')item.curve=saved.curve;
    if(!rebuiltShare&&typeof saved.css==='string')item.css=saved.css;
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

function positionCurveHelp(){
  if(!curveHelp||!curveHelpPopover)return;
  var rect=curveHelp.getBoundingClientRect(),bubbleHeight=curveHelpPopover.offsetHeight||520;
  var top=Math.max(12,Math.min(window.innerHeight-12,bubbleHeight/2+Math.max(0,Math.min(rect.top+rect.height/2-bubbleHeight/2,window.innerHeight-bubbleHeight-24))));
  curveHelpPopover.style.setProperty('--curve-popover-left',(rect.right+12)+'px');
  curveHelpPopover.style.setProperty('--curve-popover-top',top+'px');
}
if(curveHelp){curveHelp.addEventListener('mouseenter',positionCurveHelp);curveHelp.addEventListener('focusin',positionCurveHelp);window.addEventListener('resize',positionCurveHelp)}

function open(cardEl,demoObj,cat,i){
  card=cardEl;demo=demoObj;key=cat;idx=i;
  origDuration=demo.duration;origCurve=demo.curve;origCss=demo.css;origExitEnabled=!!demo.exitEnabled;
  var savedId=demoStorageId(key,demo);origSavedDefault=Object.prototype.hasOwnProperty.call(savedDefaults,savedId)?JSON.parse(JSON.stringify(savedDefaults[savedId])):null;
  origOriginalData=OriginalData[key]&&OriginalData[key][idx]?JSON.parse(JSON.stringify(OriginalData[key][idx])):null;
  var ms=parseInt(demo.duration)||300;
  unit='ms';
  unitBtn.textContent='ms';
  title.textContent=MotionAnimations.getDisplayName(demo);
  durSlider.value=ms;
  durSlider.max=3000;durSlider.step=10;
  durInput.value=ms;
  curveInput.value=demo.curve;
  updateExitToggle();
  cssBox.textContent=demo.css;
  updatePresetHighlight();
  overlay.classList.add('active');
  renderLivePreview();
}

function close(commit){
  var renderKey=key;
  if(!commit&&demo){
    demo.duration=origDuration;demo.curve=origCurve;demo.css=origCss;demo.exitEnabled=origExitEnabled;
    if(origOriginalData&&OriginalData[key])OriginalData[key][idx]=origOriginalData;
    var savedId=demoStorageId(key,demo);
    if(origSavedDefault===null)delete savedDefaults[savedId];else savedDefaults[savedId]=origSavedDefault;
    try{localStorage.setItem(storageKey,JSON.stringify(savedDefaults))}catch(e){}
  }
  overlay.classList.remove('active');
  liveStage.innerHTML='';
  card=null;demo=null;
  if(!commit&&renderKey&&typeof MotionAnimations.render==='function')MotionAnimations.render(renderKey);
}

function renderLivePreview(){
  if(!demo||typeof demo.preview!=='function')return;
  liveStage.innerHTML='';
  var target=document.createElement('div');target.className='anim-target';liveStage.appendChild(target);
  MotionAnimations.buildPausedPreview(target,demo);
  MotionAnimations.bindPreviewInteraction(target,demo,key);
}

function msToNumber(s){return parseInt(s)||0}

function apply(){
  if(!card||!demo)return;
  var raw=parseFloat(durInput.value)||0;
  var ms=unit==='s'?Math.round(raw*1000):Math.round(raw/10)*10;
  if(ms<0)ms=0;
  var curve=curveInput.value.trim()||'ease';
  var durStr=msToCss(ms);
  demo.duration=ms+'ms';
  demo.curve=curve;
  var newCss=demo.css.replace(/\s*animation-direction:\s*reverse;?/g,'').replace(/\n?\/\* 回退动效：[^*]+\*\//g,'').replace(/\d+\.?\d*s/g,durStr).replace(/cubic-bezier\([^)]+\)|ease-in-out|ease-out|ease-in|ease|linear|steps\([^)]+\)/g,curve);
  if(demo.exitEnabled)newCss=newCss.replace(/\s*$/,'')+'\n/* 回退动效：使用相同参数反向播放 */';
  demo.css=newCss;
  cssBox.textContent=newCss;
  if(unit==='ms'){durSlider.value=ms;durInput.value=ms}
  else{durSlider.value=ms;durInput.value=(ms/1000).toFixed(2).replace(/\.?0+$/,'')}
  updPreview(ms,curve);
  renderLivePreview();
  var params=card.querySelector('.demo-params');
  if(params)params.innerHTML='<span><i class="fas fa-clock"></i> '+(ms+'ms')+'</span><span><i class="fas fa-hourglass-start"></i> '+(demo.delay||'0s')+'</span>'+(demo.exitEnabled?'<span><i class="fas fa-rotate-left"></i> 回退</span>':'')+'<span class="curve-badge"><i class="fas fa-chart-line"></i> '+curve+'</span>';
  updatePresetHighlight();
}

function updPreview(ms,curve){
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
      el.style.animationDirection='normal';
    }
  });
}

function reset(){
  if(!card||!demo||!key||idx==null)return;
  var orig=OriginalData[key][idx];
  if(!orig)return;
  demo.duration=orig.duration;
  demo.curve=orig.curve;
  demo.css=orig.css;
  demo.exitEnabled=!!orig.exitEnabled;
  var ms=parseInt(orig.duration)||300;
  unit='ms';unitBtn.textContent='ms';
  durSlider.max=3000;durSlider.step=10;
  durSlider.value=ms;
  durInput.value=ms;
  curveInput.value=orig.curve;
  cssBox.textContent=orig.css;
  updateExitToggle();
  apply();
}

function setDefault(){
  if(!demo||!key||idx==null)return;
  apply();
  var saved={duration:demo.duration,curve:demo.curve,css:demo.css,cancelExit:!demo.exitEnabled};
  savedDefaults[demoStorageId(key,demo)]=saved;
  try{localStorage.setItem(storageKey,JSON.stringify(savedDefaults))}catch(e){}
  OriginalData[key][idx]=JSON.parse(JSON.stringify(demo));
  var button=document.getElementById('editorSetDefault');
  button.textContent='已设为默认';button.classList.add('saved');
  setTimeout(function(){button.textContent='设为默认';button.classList.remove('saved')},1200);
}

function exportCard(){
  if(!demo||!key)return;
  apply();
  var cardData=demo._sourceData?JSON.parse(JSON.stringify(demo._sourceData)):{};
  cardData.name=demo.name;cardData.duration=demo.duration;cardData.curve=demo.curve;cardData.css=demo.css;cardData.desc=demo.desc||'';cardData.delay=demo.delay||'0s';cardData.exitCurve=demo.exitCurve||'';cardData.cancelExit=!demo.exitEnabled;
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
  durInput.value=unit==='s'?(this.value/1000).toFixed(2).replace(/\.?0+$/,''):this.value;
  apply();
});
durInput.addEventListener('change',function(){apply()});
durInput.addEventListener('blur',function(){if(!this.value.trim())this.value=0;apply()});
unitBtn.addEventListener('click',function(){
  if(unit==='ms'){
    var curMs=parseFloat(durSlider.value)||0;
    unit='s';unitBtn.textContent='s';
    durSlider.max=3;durSlider.step=0.01;durSlider.value=curMs;
    durInput.value=(curMs/1000).toFixed(2).replace(/\.?0+$/,'');
  }else{
    var curS=parseFloat(durInput.value)||0;
    unit='ms';unitBtn.textContent='ms';
    durSlider.max=3000;durSlider.step=10;durSlider.value=Math.round(curS*1000);
    durInput.value=Math.round(curS*1000);
  }
});
curveInput.addEventListener('input',function(){apply()});
presets.addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  curveInput.value=b.dataset.curve;
  apply();
});
exitToggle.addEventListener('click',function(){if(!demo)return;demo.exitEnabled=!demo.exitEnabled;updateExitToggle();apply()});
document.getElementById('editorClose').addEventListener('click',function(){close(false)});
document.getElementById('editorClose2').addEventListener('click',function(){close(true)});
document.getElementById('editorReset').addEventListener('click',reset);
document.getElementById('editorSetDefault').addEventListener('click',setDefault);
document.getElementById('editorExport').addEventListener('click',exportCard);
overlay.addEventListener('click',function(e){if(e.target===overlay)close(false)});

/* Open editor on card info click (not on preview area) */
document.addEventListener('click',function(e){
  var c=e.target.closest('.demo-card');
  if(!c||c.dataset.justDragged||e.target.closest('.btn-copy')||e.target.closest('.anim-target'))return;
  var i=parseInt(c.dataset.demoIndex);
  var a=document.querySelector('#navList li.active');
  var k=a?a.dataset.category:'tab';
  var d=MotionAnimations[k][i];
  if(d)open(c,d,k,i);
});
})();

/* ===== Delete Group Confirmation ===== */
(function(){
var overlay=document.getElementById('deleteGroupOverlay'),name=document.getElementById('deleteGroupName'),submit=document.getElementById('deleteGroupSubmit'),cancel=document.getElementById('deleteGroupCancel'),onConfirm=null;
function close(){overlay.classList.remove('active');onConfirm=null}
window.MotionDeleteConfirm={open:function(groupName,callback){name.textContent=groupName;onConfirm=callback;overlay.classList.add('active');setTimeout(function(){cancel.focus()},20)}};
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
  button.addEventListener('click',function(){var next=document.body.classList.contains('light-theme')?'dark':'light';applyTheme(next);try{localStorage.setItem(key,next)}catch(e){}});
})();
