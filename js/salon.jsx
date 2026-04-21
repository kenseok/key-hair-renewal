// ─── Salon page ───────────────────────────────────────
const { useState: useSalonState } = React;

function SalonPage({ salonId, navigate }) {
  const salon = KEY_DATA.salons.find(s => s.id === salonId) || KEY_DATA.salons[0];
  const stylists = KEY_DATA.stylists.filter(s => s.salon === salon.id);
  const works = KEY_DATA.works.filter(w => w.salon === salon.id).slice(0, 6);
  const [lightbox, setLightbox] = useSalonState(null);

  return (
    <PageWrapper>
      {/* Hero */}
      <div style={{
        background:'#0A0A0A', color:'#fff',
        padding:'160px 80px 80px', position:'relative', overflow:'hidden', minHeight:520,
        display:'flex', alignItems:'flex-end',
      }}>
        {/* BG placeholder */}
        <div style={{ position:'absolute', inset:0 }}>
          <Placeholder label={`interior hero\n${salon.name}`} dark aspect="auto"/>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(10,10,10,0.92) 0%,rgba(10,10,10,0.4) 60%,rgba(10,10,10,0.2) 100%)' }}/>
        </div>
        {/* Accent blob */}
        <div style={{
          position:'absolute', width:'40vw', height:'40vw',
          right:'-5%', top:'10%',
          background: salon.markerColor,
          filter:'blur(80px)', opacity:0.12, borderRadius:'50%',
        }}/>
        <div style={{ position:'relative', zIndex:2, maxWidth:1280, width:'100%', margin:'0 auto' }}>
          <SectionLabel light>our salons</SectionLabel>
          <h1 style={{
            fontSize:'clamp(52px,7vw,96px)', fontWeight:300,
            letterSpacing:'-0.03em', lineHeight:0.95,
            textTransform:'lowercase', marginBottom:20,
          }}>{salon.name}</h1>
          <p className="jp" style={{ fontSize:15, opacity:0.6, maxWidth:520, lineHeight:1.8 }}>{salon.conceptLong}</p>
          {/* Salon tabs */}
          <div style={{ display:'flex', gap:2, marginTop:40 }}>
            {KEY_DATA.salons.map(s => (
              <a key={s.id} href={`#/salon/${s.id}`}
                onClick={e => { e.preventDefault(); navigate(`/salon/${s.id}`); }}
                style={{
                  fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase',
                  padding:'8px 16px',
                  background: s.id === salon.id ? '#fff' : 'transparent',
                  color: s.id === salon.id ? '#0A0A0A' : 'rgba(255,255,255,0.45)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition:'background 0.2s,color 0.2s',
                  cursor:'pointer',
                }}>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Interior gallery */}
      <section style={{ padding:'100px 80px' }}>
        <Reveal><SectionLabel>interior</SectionLabel></Reveal>
        <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(32px,3.5vw,48px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', marginBottom:48 }}>the space.</h2></Reveal>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:2, marginBottom:2 }} className="grid-salon-gallery">
          <div style={{ gridRow:'span 2' }}><Placeholder label={`interior photo\n${salon.name} 01`} dark aspect="auto" style={{ height:'100%' }}/></div>
          <div><Placeholder label={`interior photo\n${salon.name} 02`} dark aspect="4/3"/></div>
          <div><Placeholder label={`interior photo\n${salon.name} 03`} dark aspect="4/3"/></div>
          <div><Placeholder label={`interior photo\n${salon.name} 04`} dark aspect="4/3"/></div>
          <div><Placeholder label={`interior photo\n${salon.name} 05`} dark aspect="4/3"/></div>
        </div>
      </section>

      {/* Works */}
      <section style={{ padding:'0 80px 100px' }}>
        <Reveal><SectionLabel>works</SectionLabel></Reveal>
        <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(32px,3.5vw,48px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', marginBottom:48 }}>from this salon.</h2></Reveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }} className="grid-responsive-3">
          {works.map((w, i) => (
            <Reveal key={w.id} delay={i*0.08}>
              <WorkCard work={w} onClick={() => setLightbox(w)} style={{ aspectRatio:'3/4' }}/>
            </Reveal>
          ))}
        </div>
        {lightbox && <Lightbox work={lightbox} onClose={() => setLightbox(null)}/>}
      </section>

      {/* Stylists */}
      {stylists.length > 0 && (
        <section style={{ padding:'0 80px 100px' }}>
          <Reveal><SectionLabel>stylists</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(32px,3.5vw,48px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', marginBottom:48 }}>your specialists.</h2></Reveal>
          <div style={{ display:'grid', gridTemplateColumns:`repeat(${Math.min(stylists.length,3)},1fr)`, gap:2 }} className="grid-responsive-3">
            {stylists.map((s, i) => (
              <Reveal key={s.id} delay={i*0.1}>
                <StylistCard stylist={s} onClick={() => navigate(`/stylists/${s.id}`)}/>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Menu & prices */}
      <section style={{ padding:'0 80px 100px', background:'#FAFAFA' }}>
        <div style={{ padding:'100px 0 0' }}>
          <Reveal><SectionLabel>menu & price</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(32px,3.5vw,48px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', marginBottom:48 }}>signature menu.</h2></Reveal>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2 }} className="grid-responsive-2">
            {/* Signature services */}
            <div style={{ background:'#0A0A0A', color:'#fff', padding:40 }}>
              <div style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginBottom:24 }}>signature</div>
              {[
                { name:'Gradation Color', price:'¥18,000~', desc:'k.e.y のシグネチャー。自然な色の流れを表現します。' },
                { name:'Hi-tone Design Color', price:'¥20,000~', desc:'ブリーチを駆使した、大胆なカラーデザイン。' },
                { name:'Premium Bleach', price:'¥11,000~', desc:'ダメージを最小限に抑えた高品質ブリーチ。' },
              ].map(item => (
                <div key={item.name} style={{ borderBottom:'1px solid rgba(255,255,255,0.08)', padding:'20px 0' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:8 }}>
                    <span style={{ fontSize:14, fontWeight:400, letterSpacing:'0.02em' }}>{item.name}</span>
                    <span style={{ fontSize:13, fontFamily:'Courier New,monospace', background:'linear-gradient(90deg,#8FB8E6,#C8B4E0)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{item.price}</span>
                  </div>
                  <p className="jp" style={{ fontSize:12, opacity:0.5, lineHeight:1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            {/* Standard services */}
            <div style={{ background:'#fff', border:'1px solid #e8e8e8', padding:40 }}>
              <div style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginBottom:24 }}>standard</div>
              {Object.entries(KEY_DATA.prices.table).slice(0,5).map(([name, prices]) => (
                <div key={name} style={{ borderBottom:'1px solid #f0f0f0', padding:'16px 0', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontSize:13 }}>{name}</span>
                  <span style={{ fontSize:12, fontFamily:'Courier New,monospace', color:'#888' }}>{prices[0]}</span>
                </div>
              ))}
              <a href="#/price"
                onClick={e => { e.preventDefault(); navigate('/price'); }}
                style={{ display:'inline-block', marginTop:24, fontSize:11, letterSpacing:'0.1em' }}>
                <ArrowLink>full price list</ArrowLink>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Access */}
      <section style={{ padding:'100px 80px', background:'#0A0A0A', color:'#fff' }}>
        <Reveal><SectionLabel light>access</SectionLabel></Reveal>
        <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(32px,3.5vw,48px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', color:'#fff', marginBottom:56 }}>find us.</h2></Reveal>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:60, alignItems:'start' }} className="grid-responsive-2">
          <div>
            {/* Map */}
            <div style={{ aspectRatio:'16/10', background:'#161616', border:'1px solid rgba(255,255,255,0.08)', position:'relative', overflow:'hidden', marginBottom:32 }}>
              <div dangerouslySetInnerHTML={{ __html: salon.mapSvg }} style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}/>
              <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', pointerEvents:'none' }}>
                <div style={{ fontFamily:'Courier New,monospace', fontSize:9, color:'rgba(255,255,255,0.15)', letterSpacing:'0.12em', textAlign:'center', lineHeight:2 }}>map placeholder<br/>{salon.name}</div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginBottom:8 }}>address</div>
              <div className="jp" style={{ fontSize:14, opacity:0.8, lineHeight:1.8 }}>{salon.address}</div>
            </div>
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginBottom:8 }}>tel</div>
              <div style={{ fontSize:14, opacity:0.8, fontFamily:'Courier New,monospace' }}>{salon.tel}</div>
            </div>
            {salon.access && <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginBottom:8 }}>access</div>
              <div className="jp" style={{ fontSize:14, opacity:0.8, lineHeight:1.8 }}>{salon.access}</div>
            </div>}
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginBottom:8 }}>hours</div>
              <div className="jp" style={{ fontSize:13, opacity:0.7, lineHeight:2 }}>{salon.hours}</div>
            </div>
            <div>
              <div style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginBottom:8 }}>定休日</div>
              <div className="jp" style={{ fontSize:13, opacity:0.7 }}>{salon.holiday}</div>
            </div>
            <div style={{ marginTop:40 }}>
              <a href={salon.hotpepperUrl} target="_blank"
                style={{
                  display:'inline-block', padding:'14px 32px',
                  border:'1px solid rgba(255,255,255,0.3)', color:'#fff',
                  fontSize:12, letterSpacing:'0.12em', textTransform:'lowercase',
                }}>
                reserve at {salon.name.toLowerCase()} →
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .grid-salon-gallery > div:first-child { height: 100%; min-height: 400px; }
        .grid-salon-gallery > div:first-child > div { height: 100% !important; aspect-ratio: unset !important; }
        @media(max-width:768px) {
          .grid-salon-gallery { grid-template-columns: 1fr !important; }
          .grid-salon-gallery > div:first-child { height: auto; min-height: auto; }
        }
      `}</style>
    </PageWrapper>
  );
}

window.SalonPage = SalonPage;
