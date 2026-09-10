const header=document.querySelector('.header'),menu=document.querySelector('.menu'),nav=document.querySelector('.header nav'),progress=document.querySelector('.progress');
addEventListener('scroll',()=>{header.classList.toggle('scrolled',scrollY>20);const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h?scrollY/h*100:0)+'%'});
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);document.body.classList.toggle('nav-open',!open)});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{menu?.setAttribute('aria-expanded','false');nav?.classList.remove('open');document.body.classList.remove('nav-open')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('section:not(.hero):not(.page-hero),article').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
document.querySelector('#contact-form')?.addEventListener('submit',e=>{e.preventDefault();const msg=e.currentTarget.querySelector('.form-success');msg.hidden=false;msg.scrollIntoView({behavior:'smooth',block:'nearest'})});
