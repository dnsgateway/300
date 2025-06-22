/* Smooth-scroll to phone */
document.querySelector('.scroll-btn').addEventListener('click',()=>{
  document.querySelector('#demo').scrollIntoView({behavior:'smooth'});
});

/* Hamburger toggle */
const navBar = document.querySelector('.app-nav');
document.querySelector('.hamburger').addEventListener('click',()=>{
  navBar.classList.toggle('open');
});

/* Dropdown inside nav */
document.querySelectorAll('.drop-toggle').forEach(tog=>{
  tog.addEventListener('click',e=>{
    e.preventDefault();
    tog.parentElement.classList.toggle('open');
  });
});

/* Horizontal scroll controls */
document.querySelectorAll('[data-row]').forEach(row=>{
  const track = row.querySelector('.cards');
  const left  = row.querySelector('.left');
  const right = row.querySelector('.right');
  const STEP  = 170;

  function updateArrows(){
    left.disabled  = track.scrollLeft<=4;
    right.disabled = track.scrollLeft>=track.scrollWidth-track.clientWidth-4;
  }
  updateArrows();

  left && left.addEventListener('click',()=>{track.scrollBy({left:-STEP,behavior:'smooth'})});
  right&& right.addEventListener('click',()=>{track.scrollBy({left: STEP,behavior:'smooth'})});
  track.addEventListener('scroll',updateArrows);
});

/* Like buttons */
document.querySelectorAll('.like').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const span = btn.querySelector('span');
    let n = +span.textContent;
    if(btn.classList.toggle('active')) n++; else n--;
    span.textContent = n;
  });
});

/* Comment modal */
const modal = document.getElementById('modal');
document.querySelectorAll('.comment').forEach(btn=>{
  btn.addEventListener('click',()=> modal.classList.remove('hidden'));
});
modal.querySelector('.close').addEventListener('click',()=> modal.classList.add('hidden'));
modal.addEventListener('click',e=>{ if(e.target===modal) modal.classList.add('hidden'); });
modal.querySelector('.submit').addEventListener('click',()=>{
  modal.classList.add('hidden');
  modal.querySelector('textarea').value='';
  alert('Thanks for your feedback!');
});
