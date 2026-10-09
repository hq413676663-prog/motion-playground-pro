MotionAnimations.card = [
  {
    name: 'Hover Lift',
    duration: '300ms',
    curve: 'cubic-bezier(0.2,0.9,0.4,1)',
    css: 'transition: transform .3s cubic-bezier(0.2,0.9,0.4,1), box-shadow .3s ease',
    desc: '悬浮上移 8px',
    preview: function(container) {
      container.innerHTML = `<div class="card-demo" id="cardLift"><div class="demo-card-el"><div class="card-visual"></div><div class="card-info"><div class="card-title">Card Title</div><div class="card-sub">悬浮上移</div></div></div></div>`;
      const card = container.querySelector('.demo-card-el');
      card.addEventListener('mouseenter',()=>{ card.style.transform='translateY(-6px)'; card.style.boxShadow='0 16px 40px rgba(0,0,0,0.4)'; });
      card.addEventListener('mouseleave',()=>{ card.style.transform=''; card.style.boxShadow=''; });
    }
  },
  {
    name: 'Glass Blur',
    duration: '300ms',
    curve: 'ease',
    css: 'transition: backdrop-filter .3s ease, background .3s ease',
    desc: '悬浮毛玻璃模糊',
    preview: function(container) {
      container.innerHTML = `<div class="card-demo" id="cardGlass"><div class="demo-card-el glass-card"><div class="card-visual" style="background:linear-gradient(135deg,#6c5ce7,#a29bfe)"></div><div class="card-info"><div class="card-title">Glass</div><div class="card-sub">悬浮模糊</div></div></div></div>`;
      const card = container.querySelector('.demo-card-el');
      card.addEventListener('mouseenter',()=>{ card.style.backdropFilter='blur(8px)'; card.style.background='rgba(255,255,255,0.12)'; });
      card.addEventListener('mouseleave',()=>{ card.style.backdropFilter=''; card.style.background=''; });
    }
  },
  {
    name: 'Tilt',
    duration: '300ms',
    curve: 'cubic-bezier(0.34,1.56,0.64,1)',
    css: 'transition: transform .3s cubic-bezier(0.34,1.56,0.64,1)',
    desc: '3D 倾斜跟随鼠标',
    preview: function(container) {
      container.innerHTML = `<div class="card-demo" id="cardTilt"><div class="demo-card-el tilt-card"><div class="card-visual" style="background:linear-gradient(135deg,#fd79a8,#e84393)"></div><div class="card-info"><div class="card-title">Tilt</div><div class="card-sub">3D 倾斜</div></div></div></div>`;
      const card = container.querySelector('.demo-card-el');
      card.addEventListener('mousemove', function(e){
        const r = this.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        this.style.transform = `perspective(400px) rotateY(${(x-0.5)*12}deg) rotateX(${(0.5-y)*12}deg)`;
      });
      card.addEventListener('mouseleave', function(){ this.style.transform = ''; });
    }
  },
  {
    name: 'Spotlight',
    duration: '300ms',
    curve: 'ease-out',
    css: 'transition: box-shadow .3s ease-out',
    desc: '聚光灯阴影效果',
    preview: function(container) {
      container.innerHTML = `<div class="card-demo" id="cardSpot"><div class="demo-card-el spot-card"><div class="card-visual" style="background:linear-gradient(135deg,#00cec9,#00b894)"></div><div class="card-info"><div class="card-title">Spotlight</div><div class="card-sub">聚光灯</div></div></div></div>`;
      const card = container.querySelector('.demo-card-el');
      card.addEventListener('mouseenter',()=>{ card.style.boxShadow='0 0 40px rgba(108,92,231,0.3), 0 0 80px rgba(108,92,231,0.1)'; });
      card.addEventListener('mouseleave',()=>{ card.style.boxShadow=''; });
    }
  },
  {
    name: 'Shadow Grow',
    duration: '250ms',
    curve: 'cubic-bezier(0.25,0.46,0.45,0.94)',
    css: 'transition: box-shadow .25s cubic-bezier(0.25,0.46,0.45,0.94), transform .25s ease',
    desc: '阴影扩大加深',
    preview: function(container) {
      container.innerHTML = `<div class="card-demo" id="cardShadow"><div class="demo-card-el shadow-card"><div class="card-visual" style="background:linear-gradient(135deg,#fab1a0,#e17055)"></div><div class="card-info"><div class="card-title">Shadow</div><div class="card-sub">阴影扩大</div></div></div></div>`;
      const card = container.querySelector('.demo-card-el');
      card.addEventListener('mouseenter',()=>{ card.style.boxShadow='0 24px 48px -8px rgba(0,0,0,0.5)'; card.style.transform='translateY(-2px)'; });
      card.addEventListener('mouseleave',()=>{ card.style.boxShadow=''; card.style.transform=''; });
    }
  },
  {
    name: 'Float',
    duration: '800ms',
    curve: 'cubic-bezier(0.2,0.9,0.4,1)',
    css: 'animation: floatCard .8s cubic-bezier(0.2,0.9,0.4,1) infinite alternate',
    desc: '持续浮动',
    preview: function(container) {
      container.innerHTML = `<div class="card-demo" id="cardFloat"><div class="demo-card-el" style="animation:floatCard .8s cubic-bezier(0.2,0.9,0.4,1) infinite alternate;"><div class="card-visual" style="background:linear-gradient(135deg,#81ecec,#00cec9)"></div><div class="card-info"><div class="card-title">Float</div><div class="card-sub">持续浮动</div></div></div></div>`;
    }
  }
];
