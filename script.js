
document.addEventListener('DOMContentLoaded', ()=>{
  const toolsGrid = document.getElementById('toolsGrid');
  const searchInput = document.getElementById('searchInput');
  const categoryBar = document.getElementById('categoryBar');
  const seeMoreBtn = document.getElementById('seeMore');
  let showingAll = false;

  function renderTools(list){
    toolsGrid.innerHTML = '';
    if(list.length===0){
      toolsGrid.innerHTML = '<div class="col-12 text-center text-muted">No tools found.</div>';
      return;
    }
    list.forEach(t=>{
      const col = document.createElement('div');
      col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
      col.innerHTML = `
        <a class="text-decoration-none" href="${t.href}">
          <div class="card h-100 p-3">
            <div class="d-flex align-items-center gap-3">
              <div class="icon-wrap"><i class="bi ${t.icon}"></i></div>
              <div>
                <h6 class="card-title mb-1">${t.title}</h6>
                <div class="card-text small">${t.desc}</div>
              </div>
            </div>
            <div class="mt-3">
              <span class="btn btn-sm btn-outline-primary">Open</span>
            </div>
          </div>
        </a>`;
      toolsGrid.appendChild(col);
    });
  }

  function filterByCategory(cat){
    if(cat === 'all') return TOOLS_ALL.slice(0,12);
    return TOOLS_ALL.filter(t => t.cat === cat).slice(0,12);
  }

  // initial render
  renderTools(filterByCategory('all'));

  // category clicks
  categoryBar.addEventListener('click', (e)=>{
    const btn = e.target.closest('button');
    if(!btn) return;
    [...categoryBar.querySelectorAll('button')].forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    showingAll = false;
    seeMoreBtn.textContent = 'See More Tools';
    renderTools(filterByCategory(cat));
  });

  // search
  searchInput.addEventListener('input', ()=>{
    const q = searchInput.value.trim().toLowerCase();
    if(!q){ 
      const active = categoryBar.querySelector('button.active')?.dataset.cat || 'all';
      renderTools(filterByCategory(active));
      return; 
    }
    const res = TOOLS_ALL.filter(t => (t.title + ' ' + t.desc).toLowerCase().includes(q));
    renderTools(res);
  });

  // see more toggles
  seeMoreBtn.addEventListener('click', ()=>{
    showingAll = !showingAll;
    if(showingAll){
      renderTools(TOOLS_ALL);
      seeMoreBtn.textContent = 'Show Less';
    } else {
      const active = categoryBar.querySelector('button.active')?.dataset.cat || 'all';
      renderTools(filterByCategory(active));
      seeMoreBtn.textContent = 'See More Tools';
    }
  });
});
