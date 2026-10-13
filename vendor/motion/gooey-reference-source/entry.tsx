import React from 'react';
import {createRoot} from 'react-dom/client';
import {GooeyInput} from './gooey-input';
import styles from './reference.css';
window.AceternityGooeyReference = function(host: HTMLElement) {
  const shadow=host.attachShadow({mode:'open'});
  const style=document.createElement('style');style.textContent=styles;shadow.append(style);
  const mount=document.createElement('div');shadow.append(mount);
  const root=createRoot(mount);
  root.render(<div className="flex h-40 w-full items-center justify-center"><GooeyInput placeholder="Search..." /></div>);
  return ()=>root.unmount();
};
