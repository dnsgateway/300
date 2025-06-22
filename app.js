// Smooth-scroll to demo
document.querySelector('.scroll-demo').addEventListener('click', () => {
  document.querySelector('#demo').scrollIntoView({behavior:'smooth'});
});

/* ── Dropdown menu ── */
document.querySelectorAll('.drop-btn').forEach(btn=>{
  btn.addEventListener('click',e=>{
    e.stopPropagation();
    btn.parentElement.classList.toggle('open');
  });
});
window.addEventListener('click',()=>{ document.querySelectorAll('.dropdown').forEach(d=>d.classList.remove('open')); });

/* ── Horizontal scrollers ── */
document.querySelectorAll('[data-row]').forEach(row=>{
  const track=row.querySelector('.cards'),
        left=row.querySelector('.left'),
        right=row.querySelector('.right'),
        STEP=180;
  const update=()=>{left.disabled=track.scrollLeft<=4; right.disabled=track.scrollLeft>=track.scrollWidth-track.clientWidth-4;};
  update();
  left .addEventListener('click',()=>{track.scrollBy({left:-STEP,behavior:'smooth'})});
  right.addEventListener('click',()=>{track.scrollBy({left: STEP,behavior:'smooth'})});
  track.addEventListener('scroll',update);
});

/* ── Like buttons ── */
document.querySelectorAll('.like').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const span=btn.querySelector('span');
    let n=+span.textContent;
    btn.classList.toggle('active')?n++:n--;
    span.textContent=n;
  });
});

/* ── Comment modal ── */
const modal=document.getElementById('modal');
document.querySelectorAll('.comment').forEach(btn=>btn.onclick=()=>modal.classList.remove('hidden'));
modal.querySelector('.close').onclick=()=>modal.classList.add('hidden');
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.add('hidden')});
modal.querySelector('.submit').onclick=()=>{
  modal.querySelector('textarea').value='';
  modal.classList.add('hidden');
  alert('Thanks for your feedback!');
};

/* ── Bottom nav active state ── */
document.querySelectorAll('.bottom-nav .tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelector('.tab.active').classList.remove('active');
    tab.classList.add('active');
  });
});
