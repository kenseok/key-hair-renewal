// ─── Stylists list page ───────────────────────────────
const { useState: useStyleState } = React;

function StylistsPage({ navigate }) {
  const [filter, setFilter] = useStyleState('all');

  const filtered = filter === 'all'
    ? KEY_DATA.stylists
    : KEY_DATA.stylists.filter(s => s.salon === filter);

  return (
    <PageWrapper>
      <PageHero label="stylists" title="our team." subtitle="カラーの専門家たち" dark/>

      {/* Filter */}
      <div style={{
        position:'sticky', top:64, zIndex:50,
        background:'rgba(255,255,255,0.96)', backdropFilter:'blur(12px)',
        WebkitBackdropFilter:'blur(12px)',
        borderBottom:'1px solid rgba(10,10,10,0.08)',
        padding:'16px 80px',
        display:'flex', gap:2, alignItems:'center',
      }}>
        <span style={{ fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginRight:12 }}>salon</span>
        {[{id:'all',name:'all'},...KEY_DATA.salons].map(s => {
          const active = filter === s.id;
          return (
            <button key={s.id} onClick={() => setFilter(s.id)}
              style={{
                fontSize:10, letterSpacing:'0.1em', textTransform:'lowercase',
                padding:'5px 14px', cursor:'pointer', transition:'all 0.15s',
                background: active ? '#0A0A0A' : '#fff',
                color: active ? '#fff' : '#0A0A0A',
                border: `1px solid ${active ? '#0A0A0A' : '#e0e0e0'}`,
              }}>{s.name.toLowerCase()}</button>
          );
        })}
      </div>

      <section style={{ padding:'80px', maxWidth:1280, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }} className="grid-responsive-3">
          {filtered.map((s, i) => (
            <Reveal key={s.id} delay={i*0.1}>
              <StylistCard stylist={s} onClick={() => navigate(`/stylists/${s.id}`)}/>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ padding:'80px 0', textAlign:'center', color:'#aaa', fontSize:14 }}>
            <p className="jp">このサロンのスタイリスト情報は近日公開予定です。</p>
          </div>
        )}
      </section>
    </PageWrapper>
  );
}

// ─── Stylist profile page ─────────────────────────────
function StylistProfilePage({ stylistId, navigate }) {
  const stylist = KEY_DATA.stylists.find(s => s.id === stylistId) || KEY_DATA.stylists[0];
  const salon = KEY_DATA.salons.find(s => s.id === stylist.salon);
  const works = KEY_DATA.works.filter(w => w.stylist === stylist.id);
  const [lightbox, setLightbox] = useStyleState(null);

  return (
    <PageWrapper>
      {/* Hero */}
      <div style={{
        background:'#0A0A0A', color:'#fff',
        padding:'120px 80px 80px',
        display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:80, alignItems:'end',
      }} className="grid-responsive-2">
        {/* Portrait */}
        <div style={{ position:'relative' }}>
          <div style={{
            aspectRatio:'3/4',
            background:`repeating-linear-gradient(90deg,#1a1a1a 0,#1a1a1a 1px,#222 1px,#222 16px)`,
            filter:'grayscale(1)',
            position:'relative', overflow:'hidden',
          }}>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,#8FB8E6,#F4C4D1,#C8B4E0)', opacity:0.15 }}/>
            <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <div style={{ fontFamily:'Courier New,monospace', fontSize:9, color:'rgba(255,255,255,0.15)', letterSpacing:'0.12em', textAlign:'center', lineHeight:2 }}>portrait<br/>{stylist.nameEn}</div>
            </div>
          </div>
          {/* Instagram handle */}
          <div style={{ position:'absolute', bottom:16, left:16, fontSize:10, letterSpacing:'0.1em', color:'rgba(255,255,255,0.5)' }}>{stylist.instagram}</div>
        </div>

        <div style={{ paddingBottom:24 }}>
          <div style={{ display:'flex', gap:10, alignItems:'center', marginBottom:24 }}>
            <RankBadge rank={stylist.rank}/>
            <span style={{ fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)' }}>{salon?.name}</span>
          </div>
          <h1 style={{ fontSize:'clamp(36px,4.5vw,64px)', fontWeight:300, letterSpacing:'-0.02em', lineHeight:1, marginBottom:10 }}>
            {stylist.nameEn}
          </h1>
          <div className="jp" style={{ fontSize:18, fontWeight:300, opacity:0.5, marginBottom:32, letterSpacing:'0.05em' }}>{stylist.nameJp}</div>

          <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:40 }}>
            {stylist.tags.map(t => <DarkTag key={t}>{t}</DarkTag>)}
          </div>

          <p className="jp" style={{ fontSize:14, fontWeight:300, lineHeight:2.2, color:'rgba(255,255,255,0.65)', maxWidth:480, marginBottom:40 }}>
            {stylist.message}
          </p>

          <a href={salon?.hotpepperUrl || '#'} target="_blank"
            style={{
              display:'inline-block', padding:'14px 32px',
              border:'1px solid rgba(255,255,255,0.3)', color:'#fff',
              fontSize:12, letterSpacing:'0.12em', textTransform:'lowercase',
              transition:'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background='transparent'}>
            book with {stylist.nameEn.split(' ')[0].toLowerCase()} →
          </a>
        </div>
      </div>

      {/* Works */}
      {works.length > 0 && (
        <section style={{ padding:'100px 80px' }}>
          <Reveal><SectionLabel>works</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(32px,3.5vw,48px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', marginBottom:48 }}>
            {stylist.nameEn.split(' ')[0].toLowerCase()}'s portfolio.
          </h2></Reveal>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }} className="grid-responsive-3">
            {works.map((w, i) => (
              <Reveal key={w.id} delay={i*0.08}>
                <WorkCard work={w} onClick={() => setLightbox(w)} style={{ aspectRatio:'3/4' }}/>
              </Reveal>
            ))}
          </div>
          {lightbox && <Lightbox work={lightbox} onClose={() => setLightbox(null)}/>}
        </section>
      )}

      {/* Other stylists */}
      <section style={{ padding:'0 80px 100px', background:'#FAFAFA' }}>
        <div style={{ padding:'80px 0 0' }}>
          <Reveal><SectionLabel>team</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(28px,3vw,40px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', marginBottom:40 }}>other stylists.</h2></Reveal>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }} className="grid-responsive-3">
            {KEY_DATA.stylists.filter(s => s.id !== stylist.id).map((s, i) => (
              <Reveal key={s.id} delay={i*0.1}>
                <StylistCard stylist={s} onClick={() => navigate(`/stylists/${s.id}`)}/>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection salonId={stylist.salon}/>
    </PageWrapper>
  );
}

Object.assign(window, { StylistsPage, StylistProfilePage });
