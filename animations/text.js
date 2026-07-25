MotionAnimations.text = [
  {
    name: 'Fade Up',
    duration: '400ms',
    curve: 'cubic-bezier(0.25,0.46,0.45,0.94)',
    css: 'animation: fadeUp .4s cubic-bezier(0.25,0.46,0.45,0.94) both',
    desc: '文字从下往上淡入',
    preview: function(container) {
      container.innerHTML = `<div class="text-demo" id="textFadeUp"><div class="text-anim-wrap"><span class="t-fadeup t-line">Fade</span><span class="t-fadeup t-line" style="animation-delay:.12s">Up</span></div></div>`;
      const lines = container.querySelectorAll('.t-fadeup');
      const loop = ()=>{ lines.forEach((l,i)=>{ l.style.animation='none'; void l.offsetWidth; l.style.animation=`fadeUp .4s cubic-bezier(0.25,0.46,0.45,0.94) both ${i*0.12}s`; }); };
      loop(); setInterval(loop, 2500);
    }
  },
  {
    name: 'Blur Reveal',
    duration: '500ms',
    curve: 'cubic-bezier(0.2,0.9,0.4,1)',
    css: 'animation: blurReveal .5s cubic-bezier(0.2,0.9,0.4,1) both',
    desc: '模糊到清晰',
    preview: function(container) {
      container.innerHTML = `<div class="text-demo" id="textBlur"><div class="text-anim-wrap"><span class="t-blur t-line">Blur Reveal</span></div></div>`;
      const el = container.querySelector('.t-blur');
      const loop = ()=>{ el.style.animation='none'; void el.offsetWidth; el.style.animation='blurReveal .5s cubic-bezier(0.2,0.9,0.4,1) both'; };
      loop(); setInterval(loop, 2200);
    }
  },
  {
    name: 'Character Stagger',
    duration: '400ms',
    curve: 'cubic-bezier(0.25,0.46,0.45,0.94)',
    css: 'animation: fadeUp .4s cubic-bezier(0.25,0.46,0.45,0.94) both',
    desc: '逐字符错落淡入',
    preview: function(container) {
      container.innerHTML = `<div class="text-demo" id="textChar"><div class="text-anim-wrap char-stagger" style="font-size:28px;font-weight:700;">Stagger</div></div>`;
      const wrap = container.querySelector('.char-stagger');
      const txt = wrap.textContent;
      wrap.textContent = '';
      [...txt].forEach((c,i)=>{
        const s = document.createElement('span');
        s.textContent = c === ' ' ? '\u00A0' : c;
        s.style.animation = `fadeUp .4s cubic-bezier(0.25,0.46,0.45,0.94) both`;
        s.style.animationDelay = (i*0.06)+'s';
        s.style.display = 'inline-block';
        wrap.appendChild(s);
      });
      setInterval(()=>{
        const spans = wrap.querySelectorAll('span');
        spans.forEach((s,i)=>{
          s.style.animation='none';
          void s.offsetWidth;
          s.style.animation=`fadeUp .4s cubic-bezier(0.25,0.46,0.45,0.94) both`;
          s.style.animationDelay=(i*0.06)+'s';
        });
      }, 2500);
    }
  },
  {
    name: 'Word Stagger',
    duration: '450ms',
    curve: 'cubic-bezier(0.34,1.56,0.64,1)',
    css: 'animation: fadeUp .45s cubic-bezier(0.34,1.56,0.64,1) both',
    desc: '逐词弹性淡入',
    preview: function(container) {
      container.innerHTML = `<div class="text-demo" id="textWord"><div class="text-anim-wrap word-stagger" style="font-size:22px;font-weight:600;">Word Stagger Demo</div></div>`;
      const wrap = container.querySelector('.word-stagger');
      const words = wrap.textContent.split(' ');
      wrap.textContent = '';
      words.forEach((w,i)=>{
        const s = document.createElement('span');
        s.textContent = w;
        s.style.animation = `fadeUp .45s cubic-bezier(0.34,1.56,0.64,1) both`;
        s.style.animationDelay = (i*0.15)+'s';
        s.style.display = 'inline-block';
        s.style.marginRight = '8px';
        wrap.appendChild(s);
      });
      setInterval(()=>{
        const spans = wrap.querySelectorAll('span');
        spans.forEach((s,i)=>{
          s.style.animation='none';
          void s.offsetWidth;
          s.style.animation=`fadeUp .45s cubic-bezier(0.34,1.56,0.64,1) both`;
          s.style.animationDelay=(i*0.15)+'s';
        });
      }, 2800);
    }
  },
  {
    name: 'Gradient Flow',
    duration: '2000ms',
    curve: 'linear',
    css: 'animation: gradientFlow 2s linear infinite',
    desc: '渐变色流动',
    preview: function(container) {
      container.innerHTML = `<div class="text-demo" id="textGrad"><div class="text-anim-wrap"><span class="t-grad t-line" style="font-size:28px;font-weight:700;background:linear-gradient(90deg,#6c5ce7,#a29bfe,#6c5ce7);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:gradientFlow 2s linear infinite;">Gradient Flow</span></div></div>`;
    }
  },
  {
    name: 'Mask Reveal',
    duration: '600ms',
    curve: 'cubic-bezier(0.77,0,0.18,1)',
    css: 'animation: maskReveal .6s cubic-bezier(0.77,0,0.18,1) both',
    desc: '遮罩从左到右揭示',
    preview: function(container) {
      container.innerHTML = `<div class="text-demo" id="textMask"><div class="text-anim-wrap"><span class="t-mask t-line" style="font-size:28px;font-weight:700;">Mask Reveal</span></div></div>`;
      const el = container.querySelector('.t-mask');
      const loop = ()=>{ el.style.animation='none'; void el.offsetWidth; el.style.animation='maskReveal .6s cubic-bezier(0.77,0,0.18,1) both'; };
      loop(); setInterval(loop, 2200);
    }
  },
  {
    name: 'Typewriter',
    duration: '1200ms',
    curve: 'steps(12)',
    css: 'animation: typewriter 1.2s steps(12) both',
    desc: '逐字打印效果',
    preview: function(container) {
      container.innerHTML = `<div class="text-demo" id="textType"><div class="text-anim-wrap"><span class="t-type" style="font-size:24px;font-weight:600;display:inline-block;overflow:hidden;white-space:nowrap;border-right:2px solid #6c5ce7;">Typewriter</span></div></div>`;
      const el = container.querySelector('.t-type');
      const loop = ()=>{ el.style.animation='none'; void el.offsetWidth; el.style.width='0'; el.style.animation='typewriter 1.2s steps(12) both'; };
      loop(); setInterval(loop, 2400);
    }
  },
  {
    name: 'Glow',
    duration: '1200ms',
    curve: 'ease-in-out',
    css: 'animation: textGlow 1.2s ease-in-out infinite alternate',
    desc: '文字发光呼吸',
    preview: function(container) {
      container.innerHTML = `<div class="text-demo" id="textGlow"><div class="text-anim-wrap"><span class="t-glow-text" style="font-size:32px;font-weight:700;">Glow</span></div></div>`;
    }
  },
  {
    name: 'Rotate In',
    duration: '400ms',
    curve: 'cubic-bezier(0.34,1.56,0.64,1)',
    css: 'animation: rotateIn .4s cubic-bezier(0.34,1.56,0.64,1) both',
    desc: '旋转 + 弹性入场',
    preview: function(container) {
      container.innerHTML = `<div class="text-demo" id="textRotate"><div class="text-anim-wrap"><span class="t-rotate t-line" style="font-size:28px;font-weight:700;">Rotate In</span></div></div>`;
      const el = container.querySelector('.t-rotate');
      const loop = ()=>{ el.style.animation='none'; void el.offsetWidth; el.style.animation='rotateIn .4s cubic-bezier(0.34,1.56,0.64,1) both'; };
      loop(); setInterval(loop, 2200);
    }
  },
  {
    name: 'Apple Hero',
    duration: '700ms',
    curve: 'cubic-bezier(0.2,0.9,0.4,1)',
    css: 'animation: appleHero .7s cubic-bezier(0.2,0.9,0.4,1) both',
    desc: '放大 + 字距变化',
    preview: function(container) {
      container.innerHTML = `<div class="text-demo" id="textHero"><div class="text-anim-wrap"><span class="t-hero t-line" style="font-size:28px;font-weight:700;">Apple Hero</span></div></div>`;
      const el = container.querySelector('.t-hero');
      const loop = ()=>{ el.style.animation='none'; void el.offsetWidth; el.style.animation='appleHero .7s cubic-bezier(0.2,0.9,0.4,1) both'; };
      loop(); setInterval(loop, 2500);
    }
  }
];
