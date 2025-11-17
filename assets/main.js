(function(){
  const q = document.getElementById('search');
  const list = document.getElementById('tool-list');
  if(q && list){
    q.addEventListener('input', ()=>{
      const s = q.value.toLowerCase();
      for(const li of list.querySelectorAll('li')){
        const text = li.textContent.toLowerCase();
        const tags = (li.getAttribute('data-tags')||'').toLowerCase();
        li.style.display = (text.includes(s) || tags.includes(s)) ? '' : 'none';
      }
    });
  }
  // Monetization links (replace with your own)
  const A = [
    ['aff-1','https://www.namecheap.com/?aff=XXXX'],
    ['aff-2','https://vercel.com?ref=yourid'],
    ['aff-3','https://plausible.io?ref=yourid'],
    ['donate','https://wise.com/pay/me/pattamak22']
  ];
  for(const [id, href] of A){const el=document.getElementById(id); if(el) el.href=href}
})();
