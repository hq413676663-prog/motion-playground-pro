MotionAnimations.tab = [
  {
    name: 'Slide Indicator',
    duration: '280ms',
    curve: 'cubic-bezier(0.22,1,0.36,1)',
    css: 'transition: transform .28s cubic-bezier(0.22,1,0.36,1)',
    desc: 'active 背景块平滑移动',
    preview: function(container) {
      container.innerHTML = `<div class="tab-demo" id="tabSlide">
        <div class="tab-bar"><div class="tab-indicator"></div><span class="tab-item active">概述</span><span class="tab-item">详情</span><span class="tab-item">设置</span></div>
      </div>`;
      let active = 0; const items = container.querySelectorAll('.tab-item');
      const ind = container.querySelector('.tab-indicator');
      items.forEach((el,i)=>{
        el.addEventListener('click',()=>{
          items.forEach(e=>e.classList.remove('active'));
          el.classList.add('active'); active = i;
          const l = el.offsetLeft, w = el.offsetWidth;
          ind.style.transform = `translateX(${l}px)`;
          ind.style.width = w + 'px';
        });
      });
      const first = items[0];
      ind.style.transform = `translateX(${first.offsetLeft}px)`;
      ind.style.width = first.offsetWidth + 'px';
      setInterval(()=>{
        const next = (active + 1) % items.length;
        items[next].click();
      }, 2200);
    }
  },
  {
    name: 'Morph Capsule',
    duration: '320ms',
    curve: 'cubic-bezier(.22,1,.36,1)',
    css: 'transition: transform .32s cubic-bezier(.22,1,.36,1), width .32s cubic-bezier(.22,1,.36,1)',
    desc: '背景块移动同时改变宽度',
    preview: function(container) {
      container.innerHTML = `<div class="tab-demo" id="tabMorph">
        <div class="tab-bar morph"><div class="tab-indicator"></div><span class="tab-item active">短</span><span class="tab-item">中等长度</span><span class="tab-item">长标签</span></div>
      </div>`;
      const items = container.querySelectorAll('.tab-item');
      const ind = container.querySelector('.tab-indicator');
      items.forEach(el=>{
        el.addEventListener('click',()=>{
          items.forEach(e=>e.classList.remove('active'));
          el.classList.add('active');
          ind.style.transform = `translateX(${el.offsetLeft}px)`;
          ind.style.width = el.offsetWidth + 'px';
        });
      });
      const first = items[0];
      ind.style.transform = `translateX(${first.offsetLeft}px)`;
      ind.style.width = first.offsetWidth + 'px';
      let idx = 0;
      setInterval(()=>{ idx = (idx+1)%items.length; items[idx].click(); }, 2400);
    }
  },
  {
    name: 'Elastic',
    duration: '380ms',
    curve: 'cubic-bezier(.34,1.56,.64,1)',
    css: 'transition: transform .38s cubic-bezier(.34,1.56,.64,1)',
    desc: '移动结束轻微弹性',
    preview: function(container) {
      container.innerHTML = `<div class="tab-demo" id="tabElastic">
        <div class="tab-bar"><div class="tab-indicator elastic"></div><span class="tab-item active">A</span><span class="tab-item">B</span><span class="tab-item">C</span><span class="tab-item">D</span></div>
      </div>`;
      const items = container.querySelectorAll('.tab-item');
      const ind = container.querySelector('.tab-indicator');
      items.forEach(el=>{
        el.addEventListener('click',()=>{
          items.forEach(e=>e.classList.remove('active'));
          el.classList.add('active');
          ind.style.transform = `translateX(${el.offsetLeft}px)`;
          ind.style.width = el.offsetWidth + 'px';
        });
      });
      const first = items[0];
      ind.style.transform = `translateX(${first.offsetLeft}px)`;
      ind.style.width = first.offsetWidth + 'px';
      let idx = 0;
      setInterval(()=>{ idx = (idx+1)%items.length; items[idx].click(); }, 2000);
    }
  },
  {
    name: 'Fade Switch',
    duration: '220ms',
    curve: 'ease',
    css: 'transition: opacity .22s ease',
    desc: '1 → 0 → 1 淡入淡出切换',
    preview: function(container) {
      container.innerHTML = `<div class="tab-fade-demo" id="tabFade">
        <div class="fade-stage"><div class="fade-pane active">面板 A</div><div class="fade-pane">面板 B</div><div class="fade-pane">面板 C</div></div>
        <div class="fade-dots"></div>
      </div>`;
      const panes = container.querySelectorAll('.fade-pane');
      const dotWrap = container.querySelector('.fade-dots');
      let cur = 0;
      panes.forEach((_,i)=>{ const d = document.createElement('span'); d.className='fade-dot'+(i===0?' active':''); dotWrap.appendChild(d); });
      const dots = dotWrap.querySelectorAll('.fade-dot');
      setInterval(()=>{
        panes[cur].classList.remove('active');
        dots[cur].classList.remove('active');
        cur = (cur+1)%panes.length;
        panes[cur].classList.add('active');
        dots[cur].classList.add('active');
      }, 1800);
    }
  },
  {
    name: 'Slide Fade',
    duration: '280ms',
    curve: 'cubic-bezier(0.25,0.1,0.25,1)',
    css: 'transition: transform .28s cubic-bezier(0.25,0.1,0.25,1), opacity .28s ease',
    desc: '旧内容左滑淡出，新内容右滑淡入',
    preview: function(container) {
      container.innerHTML = `<div class="tab-slide-fade" id="tabSlideFade">
        <div class="sf-stage"><div class="sf-pane active">步骤 1</div><div class="sf-pane">步骤 2</div><div class="sf-pane">步骤 3</div></div>
        <div class="sf-controls"><button class="sf-btn prev">‹</button><span class="sf-label">1/3</span><button class="sf-btn next">›</button></div>
      </div>`;
      const panes = container.querySelectorAll('.sf-pane');
      const label = container.querySelector('.sf-label');
      let cur = 0;
      const go = (i)=>{
        panes.forEach(p=>p.classList.remove('active','prev'));
        if(i>cur) panes[cur].classList.add('prev');
        cur = i;
        panes[cur].classList.add('active');
        label.textContent = (cur+1)+'/'+panes.length;
      };
      container.querySelector('.next').addEventListener('click',()=>go((cur+1)%panes.length));
      container.querySelector('.prev').addEventListener('click',()=>go((cur-1+panes.length)%panes.length));
      setInterval(()=>go((cur+1)%panes.length), 2200);
    }
  },
  {
    name: 'Scale',
    duration: '200ms',
    curve: 'cubic-bezier(0.2,0.9,0.4,1)',
    css: 'transition: transform .2s cubic-bezier(0.2,0.9,0.4,1)',
    desc: '0.96 → 1 缩放切换',
    preview: function(container) {
      container.innerHTML = `<div class="tab-scale-demo" id="tabScale">
        <div class="scale-stage"><div class="scale-pane active">首页</div><div class="scale-pane">探索</div><div class="scale-pane">我的</div></div>
      </div>`;
      const panes = container.querySelectorAll('.scale-pane');
      let cur = 0;
      setInterval(()=>{
        panes.forEach(p=>p.classList.remove('active'));
        cur = (cur+1)%panes.length;
        panes[cur].classList.add('active');
      }, 2000);
    }
  },
  {
    name: 'Underline',
    duration: '250ms',
    curve: 'cubic-bezier(0.22,1,0.36,1)',
    css: 'transition: width .25s cubic-bezier(0.22,1,0.36,1), transform .25s cubic-bezier(0.22,1,0.36,1)',
    desc: '下划线宽度动画',
    preview: function(container) {
      container.innerHTML = `<div class="tab-underline-demo" id="tabUnderline">
        <div class="uline-bar"><span class="uline-item active">精选</span><span class="uline-item">关注</span><span class="uline-item">推荐</span><div class="uline-indicator"></div></div>
      </div>`;
      const items = container.querySelectorAll('.uline-item');
      const ind = container.querySelector('.uline-indicator');
      items.forEach(el=>{
        el.addEventListener('click',()=>{
          items.forEach(e=>e.classList.remove('active'));
          el.classList.add('active');
          ind.style.transform = `translateX(${el.offsetLeft}px)`;
          ind.style.width = el.offsetWidth + 'px';
        });
      });
      const first = items[0]; first.classList.add('active');
      ind.style.transform = `translateX(${first.offsetLeft}px)`;
      ind.style.width = first.offsetWidth + 'px';
      let idx = 0;
      setInterval(()=>{ idx = (idx+1)%items.length; items[idx].click(); }, 2000);
    }
  },
  {
    name: 'Liquid',
    duration: '400ms',
    curve: 'cubic-bezier(0.34,1.56,0.64,1)',
    css: 'transition: border-radius .4s cubic-bezier(0.34,1.56,0.64,1)',
    desc: 'border-radius 弹性形变',
    preview: function(container) {
      container.innerHTML = `<div class="tab-liquid-demo" id="tabLiquid">
        <div class="liquid-shape"><span>点击变形</span></div>
      </div>`;
      const shape = container.querySelector('.liquid-shape');
      let morph = false;
      shape.addEventListener('click',()=>{
        morph = !morph;
        shape.style.borderRadius = morph ? '50%' : '20px';
        shape.style.width = morph ? '80px' : '120px';
        shape.style.height = morph ? '80px' : '48px';
      });
      setInterval(()=>{ shape.click(); }, 2000);
    }
  },
  {
    name: 'Material Ripple',
    duration: '500ms',
    curve: 'cubic-bezier(0.2,0,0,1)',
    css: 'ripple animation 500ms cubic-bezier(0.2,0,0,1)',
    desc: '点击产生涟漪扩散效果',
    preview: function(container) {
      container.innerHTML = `<div class="tab-ripple-demo" id="tabRipple">
        <div class="ripple-btn">点击涟漪</div>
      </div>`;
      const btn = container.querySelector('.ripple-btn');
      btn.addEventListener('click', function(e){
        const rect = this.getBoundingClientRect();
        const r = document.createElement('span');
        r.className = 'ripple-effect';
        const d = Math.max(rect.width, rect.height);
        r.style.width = r.style.height = d+'px';
        r.style.left = (e.clientX - rect.left - d/2)+'px';
        r.style.top = (e.clientY - rect.top - d/2)+'px';
        this.appendChild(r);
        setTimeout(()=>r.remove(), 600);
      });
    }
  },
  {
    name: 'Blur Reveal',
    duration: '300ms',
    curve: 'cubic-bezier(0.25,0.46,0.45,0.94)',
    css: 'transition: filter .3s cubic-bezier(0.25,0.46,0.45,0.94), opacity .3s ease',
    desc: 'blur 6px → 0 清晰显现',
    preview: function(container) {
      container.innerHTML = `<div class="tab-blur-demo" id="tabBlur">
        <div class="blur-stage"><div class="blur-pane active">内容 A</div><div class="blur-pane">内容 B</div><div class="blur-pane">内容 C</div></div>
      </div>`;
      const panes = container.querySelectorAll('.blur-pane');
      let cur = 0;
      setInterval(()=>{
        panes.forEach(p=>p.classList.remove('active'));
        cur = (cur+1)%panes.length;
        panes[cur].classList.add('active');
      }, 2200);
    }
  }
];
