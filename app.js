// Smooth-scroll to demo
document.querySelector('.scroll-demo').addEventListener('click', () => {
  document.querySelector('#demo').scrollIntoView({behavior: 'smooth'});
});

/* ---------- nav interactions ---------- */
const navToggle = document.querySelector('.nav-toggle');
const appNav   = document.querySelector('.app-nav');
navToggle?.addEventListener('click', () => appNav.classList.toggle('open'));

document.querySelectorAll('.dropdown .drop-btn').forEach(btn=>{
  btn.addEventListener('click', e=>{
    e.preventDefault();
    btn.parentElement.classList.toggle('open');
  });
});

/* ---------- scrolling rows ---------- */
document.querySelectorAll('[data-row]').forEach(row=>{
  const left  = row.querySelector('.left');
  const right = row.querySelector('.right');
  const track = row.querySelector('.cards');
  const step  = 160;

  const update = () => {
    left.disabled  = track.scrollLeft <= 4;
    right.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
  };
  update();

  left && left.addEventListener('click', ()=>{track.scrollBy({left:-step,behavior:'smooth'});});
  right&& right.addEventListener('click', ()=>{track.scrollBy({left: step,behavior:'smooth'});});
  track.addEventListener('scroll', update);
});

/* ---------- like & comment ---------- */
document.querySelectorAll('.thumb').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const span = btn.querySelector('span');
    let count  = +span.textContent;
    if(btn.classList.toggle('active')) count++; else count--;
    span.textContent = count;
  });
});

const modal = document.getElementById('commentModal');
const close = modal.querySelector('.close');
document.querySelectorAll('.comment').forEach(btn=>{
  btn.addEventListener('click', ()=>{ modal.classList.remove('hidden'); });
});
close.addEventListener('click', ()=> modal.classList.add('hidden'));
modal.addEventListener('click', e=>{ if(e.target===modal) modal.classList.add('hidden'); });

document.querySelector('.submit-comment').addEventListener('click', ()=>{
  modal.querySelector('textarea').value='';
  modal.classList.add('hidden');
  alert('Thanks for your feedback!');
});
