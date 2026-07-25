MotionAnimations.button = [
  {
    name: 'Hover Lift',
    duration: '200ms',
    curve: 'cubic-bezier(0.2,0.9,0.4,1)',
    css: 'transition: transform .2s cubic-bezier(0.2,0.9,0.4,1), box-shadow .2s ease',
    desc: '悬浮上移 + 阴影加深',
    preview: function(container) {
      container.innerHTML = `<div class="btn-demo" id="btnLift"><button class="demo-btn lift-btn">Hover me</button></div>`;
      const btn = container.querySelector('.demo-btn');
      btn.addEventListener('mouseenter',()=>{ btn.style.transform='translateY(-4px)'; btn.style.boxShadow='0 8px 24px rgba(108,92,231,0.35)'; });
      btn.addEventListener('mouseleave',()=>{ btn.style.transform=''; btn.style.boxShadow=''; });
    }
  },
  {
    name: 'Glow Border',
    duration: '400ms',
    curve: 'ease-in-out',
    css: 'transition: border-color .4s ease-in-out, box-shadow .4s ease-in-out',
    desc: '悬浮边框发光',
    preview: function(container) {
      container.innerHTML = `<div class="btn-demo" id="btnGlow"><button class="demo-btn glow-border-btn">Glow</button></div>`;
      const btn = container.querySelector('.demo-btn');
      btn.addEventListener('mouseenter',()=>{ btn.style.borderColor='#6c5ce7'; btn.style.boxShadow='0 0 20px rgba(108,92,231,0.4), inset 0 0 20px rgba(108,92,231,0.1)'; });
      btn.addEventListener('mouseleave',()=>{ btn.style.borderColor='rgba(255,255,255,0.15)'; btn.style.boxShadow=''; });
    }
  },
  {
    name: 'Gradient Flow',
    duration: '1500ms',
    curve: 'linear',
    css: 'background-size: 200% 100%; animation: gradientFlow 1.5s linear infinite',
    desc: '渐变背景流动',
    preview: function(container) {
      container.innerHTML = `<div class="btn-demo" id="btnGrad"><button class="demo-btn grad-flow-btn">Flow</button></div>`;
    }
  },
  {
    name: 'Shine Sweep',
    duration: '600ms',
    curve: 'ease-in-out',
    css: 'background: linear-gradient(120deg, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.05) 70%); background-size: 200% 100%; transition: background-position .6s ease-in-out;',
    desc: '光泽扫过按钮表面',
    preview: function(container) {
      container.innerHTML = `<div class="btn-demo" id="btnShine"><button class="demo-btn shine-btn">Shine</button></div>`;
      const btn = container.querySelector('.demo-btn');
      btn.addEventListener('mouseenter',()=>{ btn.style.backgroundPosition='100% 0'; });
      btn.addEventListener('mouseleave',()=>{ btn.style.backgroundPosition='0% 0'; });
    }
  },
  {
    name: 'Press Scale',
    duration: '120ms',
    curve: 'cubic-bezier(0.2,0.9,0.4,1)',
    css: 'transition: transform .12s cubic-bezier(0.2,0.9,0.4,1)',
    desc: '按下缩放 0.94',
    preview: function(container) {
      container.innerHTML = `<div class="btn-demo" id="btnPress"><button class="demo-btn press-btn">Press me</button></div>`;
      const btn = container.querySelector('.demo-btn');
      btn.addEventListener('mousedown',()=>{ btn.style.transform='scale(0.94)'; });
      btn.addEventListener('mouseup',()=>{ btn.style.transform=''; });
      btn.addEventListener('mouseleave',()=>{ btn.style.transform=''; });
    }
  },
  {
    name: 'Magnetic',
    duration: '300ms',
    curve: 'cubic-bezier(0.34,1.56,0.64,1)',
    css: 'transition: transform .3s cubic-bezier(0.34,1.56,0.64,1)',
    desc: '按钮跟随鼠标偏移',
    preview: function(container) {
      container.innerHTML = `<div class="btn-demo" id="btnMagnet"><button class="demo-btn magnet-btn">Magnetic</button></div>`;
      const btn = container.querySelector('.demo-btn');
      btn.addEventListener('mousemove', function(e){
        const r = this.getBoundingClientRect();
        const x = e.clientX - r.left - r.width/2;
        const y = e.clientY - r.top - r.height/2;
        this.style.transform = `translate(${x*0.3}px, ${y*0.3}px)`;
      });
      btn.addEventListener('mouseleave', function(){ this.style.transform = ''; });
    }
  },
  {
    name: 'Pulse',
    duration: '600ms',
    curve: 'ease-in-out',
    css: 'animation: pulseBtn .6s ease-in-out infinite',
    desc: '呼吸脉冲缩放',
    preview: function(container) {
      container.innerHTML = `<div class="btn-demo" id="btnPulse"><button class="demo-btn pulse-btn" style="animation:pulseBtn .6s ease-in-out infinite;">Pulse</button></div>`;
    }
  },
  {
    name: 'Ripple',
    duration: '500ms',
    curve: 'cubic-bezier(0,0,0.2,1)',
    css: 'position: relative; overflow: hidden;',
    desc: '点击涟漪扩散',
    preview: function(container) {
      container.innerHTML = `<div class="btn-demo" id="btnRipple"><button class="demo-btn ripple-demo-btn">Ripple</button></div>`;
      const btn = container.querySelector('.ripple-demo-btn');
      btn.addEventListener('click', function(e){
        const r = this.getBoundingClientRect();
        const sp = document.createElement('span');
        sp.className = 'ripple-effect';
        const d = Math.max(r.width, r.height);
        sp.style.width = sp.style.height = d+'px';
        sp.style.left = (e.clientX - r.left - d/2)+'px';
        sp.style.top = (e.clientY - r.top - d/2)+'px';
        this.appendChild(sp);
        setTimeout(()=>sp.remove(), 600);
      });
    }
  }
];
