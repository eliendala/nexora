
const btn = document.getElementById('menuButton');
const nav = document.getElementById('navLinks');
if(btn && nav){
  btn.addEventListener('click', ()=>{
    const open = nav.classList.toggle('active');
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    nav.classList.remove('active'); btn.textContent='☰'; btn.setAttribute('aria-expanded','false');
  }));
  document.addEventListener('click', e=>{
    if(!nav.contains(e.target) && !btn.contains(e.target)){
      nav.classList.remove('active'); btn.textContent='☰'; btn.setAttribute('aria-expanded','false');
    }
  });
  document.addEventListener('keydown', e=>{
    if(e.key==='Escape'){ nav.classList.remove('active'); btn.textContent='☰'; }
  });
}
// Contact form -> WhatsApp
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const d = new FormData(form);
    const nom = d.get('nom')||''; const service = d.get('service')||''; const budget = d.get('budget')||''; const msg = d.get('message')||'';
    const text = `Bonjour NEXORA, je veux un site web:%0A- Nom: ${nom}%0A- Service: ${service}%0A- Budget: ${budget}%0A- Message: ${msg}%0A%0AEnvoyé depuis nexora.digital`;
    const url = `https://wa.me/243839580341?text=${encodeURIComponent(decodeURIComponent(text))}`;
    window.open(url, '_blank');
  });
}
// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', ()=>{
  let cur=''; sections.forEach(s=>{ if(window.scrollY >= s.offsetTop-120) cur=s.id; });
  navLinks.forEach(a=>{ a.style.color=''; if(a.getAttribute('href')==='#'+cur) a.style.color='var(--t)'; });
});
