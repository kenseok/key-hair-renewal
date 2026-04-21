// ─── Gallery page ─────────────────────────────────────
const { useState: useGalleryState, useMemo: useGalleryMemo } = React;

function GalleryPage({ navigate }) {
  const [filters, setFilters] = useGalleryState({ category:'all', length:'all', salon:'all', stylist:'all' });
  const [lightbox, setLightbox] = useGalleryState(null);

  const set = (key, val) => setFilters(f => ({ ...f, [key]: val }));

  const filtered = useGalleryMemo(() => {
    return KEY_DATA.works.filter(w => {
      if (filters.category !== 'all' && w.category !== filters.category) return false;
      if (filters.length   !== 'all' && w.length   !== filters.length)   return false;
      if (filters.salon    !== 'all' && w.salon    !== filters.salon)     return false;
      if (filters.stylist  !== 'all' && w.stylist  !== filters.stylist)   return false;
      return true;
    });
  }, [filters]);

  const categories = ['all','cut','color','gradation','bleach','perm'];
  const lengths    = ['all','short','bob','medium','long'];

  return (
    <PageWrapper>
      <PageHero label="gallery" title="all works." subtitle="k.e.y のカラーワークス" dark/>

      {/* Filter bar */}
      <div style={{
        position:'sticky', top:64, zIndex:50,
        background:'rgba(255,255,255,0.96)',
        backdropFilter:'blur(12px)',
        WebkitBackdropFilter:'blur(12px)',
        borderBottom:'1px solid rgba(10,10,10,0.08)',
        padding:'16px 80px',
        display:'flex', gap:32, flexWrap:'wrap', alignItems:'center',
      }}>
        {/* Category filter */}
        <div style={{ display:'flex', gap:2, alignItems:'center' }}>
          <span style={{ fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginRight:8 }}>category</span>
          {categories.map(c => (
            <FilterChip key={c} label={c} active={filters.category===c} onClick={() => set('category',c)}/>
          ))}
        </div>
        {/* Length filter */}
        <div style={{ display:'flex', gap:2, alignItems:'center' }}>
          <span style={{ fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginRight:8 }}>length</span>
          {lengths.map(l => (
            <FilterChip key={l} label={l} active={filters.length===l} onClick={() => set('length',l)}/>
          ))}
        </div>
        {/* Salon filter */}
        <div style={{ display:'flex', gap:2, alignItems:'center' }}>
          <span style={{ fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginRight:8 }}>salon</span>
          <FilterChip label="all" active={filters.salon==='all'} onClick={() => set('salon','all')}/>
          {KEY_DATA.salons.map(s => (
            <FilterChip key={s.id} label={s.name.toLowerCase()} active={filters.salon===s.id} onClick={() => set('salon',s.id)}/>
          ))}
        </div>

        {/* Count */}
        <span style={{ fontSize:11, color:'#aaa', marginLeft:'auto', fontFamily:'Courier New,monospace' }}>
          {filtered.length} works
        </span>
      </div>

      {/* Grid */}
      <div style={{ padding:'60px 80px', maxWidth:1280, margin:'0 auto' }}>
        {filtered.length === 0 ? (
          <div style={{ padding:'100px 0', textAlign:'center', color:'#aaa', fontSize:14 }}>
            <div style={{ fontSize:32, marginBottom:16, opacity:0.3 }}>—</div>
            <p className="jp">該当するスタイルが見つかりませんでした。</p>
          </div>
        ) : (
          <div style={{
            columns: 3, columnGap:3,
            /* masonry via CSS columns */
          }} className="masonry-grid">
            {filtered.map((w, i) => (
              <div key={w.id} style={{ breakInside:'avoid', marginBottom:3, display:'block', opacity:1, animation:`fadeIn 0.4s ${i*0.03}s both` }}>
                <WorkCard
                  work={w}
                  onClick={() => setLightbox(w)}
                  style={{ aspectRatio: ['3/4','1/1','4/5','2/3'][i%4], width:'100%' }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {lightbox && <Lightbox work={lightbox} onClose={() => setLightbox(null)}/>}

      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }
        @media(max-width:768px) {
          .masonry-grid { columns:2 !important; }
          div[style*="position:sticky"][style*="top:64px"] { padding:12px 20px !important; gap:16px !important; }
        }
        @media(max-width:480px) { .masonry-grid { columns:1 !important; } }
      `}</style>
    </PageWrapper>
  );
}

function FilterChip({ label, active, onClick }) {
  const [hov, setHov] = useGalleryState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        fontSize:10, letterSpacing:'0.1em', textTransform:'lowercase',
        padding:'5px 12px',
        background: active ? '#0A0A0A' : (hov ? '#f0f0f0' : '#fff'),
        color: active ? '#fff' : '#0A0A0A',
        border: `1px solid ${active ? '#0A0A0A' : '#e0e0e0'}`,
        cursor:'pointer', transition:'all 0.15s',
      }}>{label}</button>
  );
}

window.GalleryPage = GalleryPage;
