MotionAnimations.list = [
  {
    name: 'Stagger Fade · 30ms',
    duration: '250ms',
    curve: 'ease-out',
    delay: '30ms',
    css: 'animation: fadeUp .25s ease-out both',
    desc: '逐项淡入，间隔 30ms',
    preview: function(container) {
      container.innerHTML = `<div class="list-demo" id="listFade30"><div class="list-items"></div></div>`;
      const wrap = container.querySelector('.list-items');
      const items = ['项目 A','项目 B','项目 C','项目 D','项目 E'];
      items.forEach((t,i)=>{
        const el = document.createElement('div'); el.className='list-item'; el.textContent=t;
        el.style.animation=`fadeUp .25s ease-out both`;
        el.style.animationDelay=(i*0.03)+'s';
        wrap.appendChild(el);
      });
      setInterval(()=>{
        const all = wrap.querySelectorAll('.list-item');
        all.forEach((el,i)=>{
          el.style.animation='none';
          void el.offsetWidth;
          el.style.animation=`fadeUp .25s ease-out both`;
          el.style.animationDelay=(i*0.03)+'s';
        });
      }, 3000);
    }
  },
  {
    name: 'Stagger Slide · 60ms',
    duration: '300ms',
    curve: 'ease-out',
    delay: '60ms',
    css: 'animation: slideIn .3s ease-out both',
    desc: '逐项滑入，间隔 60ms',
    preview: function(container) {
      container.innerHTML = `<div class="list-demo" id="listSlide60"><div class="list-items"></div></div>`;
      const wrap = container.querySelector('.list-items');
      const items = ['项目 A','项目 B','项目 C','项目 D','项目 E'];
      items.forEach((t,i)=>{
        const el = document.createElement('div'); el.className='list-item'; el.textContent=t;
        el.style.animation=`slideIn .3s ease-out both`;
        el.style.animationDelay=(i*0.06)+'s';
        wrap.appendChild(el);
      });
      setInterval(()=>{
        const all = wrap.querySelectorAll('.list-item');
        all.forEach((el,i)=>{
          el.style.animation='none';
          void el.offsetWidth;
          el.style.animation=`slideIn .3s ease-out both`;
          el.style.animationDelay=(i*0.06)+'s';
        });
      }, 3200);
    }
  },
  {
    name: 'Stagger Blur · 90ms',
    duration: '350ms',
    curve: 'ease-out',
    delay: '90ms',
    css: 'animation: blurReveal .35s ease-out both',
    desc: '逐项模糊清晰，间隔 90ms',
    preview: function(container) {
      container.innerHTML = `<div class="list-demo" id="listBlur90"><div class="list-items"></div></div>`;
      const wrap = container.querySelector('.list-items');
      const items = ['项目 A','项目 B','项目 C','项目 D','项目 E'];
      items.forEach((t,i)=>{
        const el = document.createElement('div'); el.className='list-item'; el.textContent=t;
        el.style.animation=`blurReveal .35s ease-out both`;
        el.style.animationDelay=(i*0.09)+'s';
        wrap.appendChild(el);
      });
      setInterval(()=>{
        const all = wrap.querySelectorAll('.list-item');
        all.forEach((el,i)=>{
          el.style.animation='none';
          void el.offsetWidth;
          el.style.animation=`blurReveal .35s ease-out both`;
          el.style.animationDelay=(i*0.09)+'s';
        });
      }, 3500);
    }
  }
];
