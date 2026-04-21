// ─── Home page ────────────────────────────────────────
const { useState: useHomeState, useEffect: useHomeEffect, useRef: useHomeRef } = React;

function HomePage({ navigate }) {

  // ── Hero ─────────────────────────────────────────────
  function Hero() {
    return (
      <div style={{ position:'relative', height:'180vh' }}>
        <div style={{
          position:'sticky', top:0, height:'100vh',
          display:'flex', alignItems:'center', justifyContent:'center',
          overflow:'hidden',
        }}>
          {/* Blob */}
          <div style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none' }}>
            <div style={{
              position:'absolute', width:'70vw', height:'70vw', maxWidth:900, maxHeight:900,
              left:'50%', top:'50%', transform:'translate(-50%,-50%)',
              background:'linear-gradient(135deg,#8FB8E6,#F4C4D1,#C8B4E0)',
              filter:'blur(120px)', opacity:0.35,
              borderRadius:'60% 40% 30% 70% / 60% 30% 70% 40%',
              animation:'blobMorph 20s ease-in-out infinite',
            }}/>
          </div>

          {/* Location badges */}
          <div style={{ position:'absolute', top:80, right:40, display:'flex', flexDirection:'column', gap:8, alignItems:'flex-end', zIndex:3 }}>
            {KEY_DATA.salons.map(s => (
              <a key={s.id} href={`#/salon/${s.id}`}
                onClick={e => { e.preventDefault(); navigate(`/salon/${s.id}`); }}
                style={{
                  fontSize:10, fontWeight:500, letterSpacing:'0.15em',
                  padding:'5px 12px', border:'1px solid rgba(10,10,10,0.2)',
                  transition:'border-color 0.2s', cursor:'pointer',
                  color:'#0A0A0A',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor='#0A0A0A'}
                onMouseLeave={e => e.currentTarget.style.borderColor='rgba(10,10,10,0.2)'}>
                {s.name.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Headline */}
          <div style={{ textAlign:'center', position:'relative', zIndex:2, pointerEvents:'none' }}>
            <h1 style={{
              fontSize:'clamp(56px,9.5vw,130px)', fontWeight:300,
              letterSpacing:'-0.03em', lineHeight:0.9,
              textTransform:'lowercase', color:'#0A0A0A', mixBlendMode:'multiply',
            }}>color as identity</h1>
            <p className="jp" style={{ marginTop:28, fontSize:16, fontWeight:300, letterSpacing:'0.08em', opacity:0.65 }}>
              髪色で、自分を描く。
            </p>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position:'absolute', bottom:40, left:'50%', transform:'translateX(-50%)',
            display:'flex', flexDirection:'column', alignItems:'center', gap:10, zIndex:3,
          }}>
            <span style={{ fontSize:9, letterSpacing:'0.25em', textTransform:'uppercase', opacity:0.35 }}>scroll</span>
            <div style={{
              width:1, height:60,
              background:'linear-gradient(to bottom,#0A0A0A,transparent)',
              animation:'scrollLine 2s ease-in-out infinite', transformOrigin:'top',
            }}/>
          </div>
        </div>
      </div>
    );
  }

  // ── Salons ───────────────────────────────────────────
  function SalonsSection() {
    return (
      <section style={{ padding:'120px 80px', background:'#FAFAFA' }}>
        <Reveal><SectionLabel>our salons</SectionLabel></Reveal>
        <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(36px,4vw,56px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', lineHeight:1, marginBottom:56 }}>three spaces,<br/>one vision.</h2></Reveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }} className="grid-responsive-3">
          {KEY_DATA.salons.map((s, i) => (
            <Reveal key={s.id} delay={i*0.12}>
              <SalonCard salon={s} onClick={() => navigate(`/salon/${s.id}`)}/>
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  // ── Featured works ───────────────────────────────────
  function WorksSection() {
    const [lightbox, setLightbox] = useHomeState(null);
    const featured = KEY_DATA.works.slice(0, 9);
    const aspects = ['3/4','3/4','3/4','1/1','1/1','1/1','3/4','3/4','3/4'];
    return (
      <section style={{ padding:'120px 80px' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:48 }}>
          <div>
            <Reveal><SectionLabel>featured works</SectionLabel></Reveal>
            <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(36px,4vw,56px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', lineHeight:1 }}>hair as canvas.</h2></Reveal>
          </div>
          <Reveal><ArrowLink onClick={e => { e.preventDefault(); navigate('/gallery'); }} href="#/gallery">view all works</ArrowLink></Reveal>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }} className="grid-responsive-3">
          {featured.map((w, i) => (
            <Reveal key={w.id} delay={(i%3)*0.1}>
              <WorkCard work={w} onClick={() => setLightbox(w)} style={{ aspectRatio: aspects[i] }}/>
            </Reveal>
          ))}
        </div>
        {lightbox && <Lightbox work={lightbox} onClose={() => setLightbox(null)}/>}
      </section>
    );
  }

  // ── Philosophy teaser ────────────────────────────────
  function PhilosophySection() {
    return (
      <section style={{
        background:'#0A0A0A', color:'#fff',
        display:'grid', gridTemplateColumns:'1fr 1fr', gap:80,
        alignItems:'center', padding:'140px 80px',
      }} className="grid-responsive-2">
        <Reveal>
          <div style={{
            aspectRatio:'1', position:'relative', overflow:'hidden',
          }}>
            <div style={{ position:'absolute', inset:0, animation:'swatchShift 6s ease-in-out infinite' }}/>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,#8FB8E6,#F4C4D1,#C8B4E0)', animation:'swatchShift 6s ease-in-out infinite' }}/>
          </div>
        </Reveal>
        <div>
          <Reveal><SectionLabel light>color philosophy</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(32px,3.5vw,52px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', lineHeight:1.05, marginBottom:36 }}>hair color is<br/>self-expression.</h2></Reveal>
          <Reveal delay={0.1}><p className="jp" style={{ fontSize:14, fontWeight:300, lineHeight:2, color:'rgba(255,255,255,0.6)', marginBottom:20, maxWidth:480 }}>わたしたちは、カラーを単なるサービスとして捉えていません。色は、あなたの内面を外側に映し出す言語です。今日のあなたを、髪で語る。</p></Reveal>
          <Reveal delay={0.15}><p className="jp" style={{ fontSize:14, fontWeight:300, lineHeight:2, color:'rgba(255,255,255,0.6)', marginBottom:40, maxWidth:480 }}>グラデーションカラー、ハイトーンデザイン、そしてオリジナルの配色提案。k.e.y のカラリストは、ひとりひとりの「色のことば」を一緒につくります。</p></Reveal>
          <Reveal delay={0.2}><ArrowLink light onClick={e => { e.preventDefault(); navigate('/about'); }} href="#/about">read our philosophy</ArrowLink></Reveal>
        </div>
      </section>
    );
  }

  // ── Stylists preview ─────────────────────────────────
  function StylistsSection() {
    return (
      <section style={{ padding:'120px 80px' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:48 }}>
          <div>
            <Reveal><SectionLabel>our stylists</SectionLabel></Reveal>
            <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(36px,4vw,56px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', lineHeight:1 }}>color specialists.</h2></Reveal>
          </div>
          <Reveal><ArrowLink onClick={e => { e.preventDefault(); navigate('/stylists'); }} href="#/stylists">all stylists</ArrowLink></Reveal>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }} className="grid-responsive-3">
          {KEY_DATA.stylists.map((s, i) => (
            <Reveal key={s.id} delay={i*0.1}>
              <StylistCard stylist={s} onClick={() => navigate(`/stylists/${s.id}`)}/>
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  // ── Journal preview ──────────────────────────────────
  function JournalSection() {
    return (
      <section style={{ padding:'120px 80px', background:'#FAFAFA' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:48 }}>
          <div>
            <Reveal><SectionLabel>journal</SectionLabel></Reveal>
            <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(36px,4vw,56px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', lineHeight:1 }}>latest news.</h2></Reveal>
          </div>
          <Reveal><ArrowLink onClick={e => { e.preventDefault(); navigate('/journal'); }} href="#/journal">all posts</ArrowLink></Reveal>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }} className="grid-responsive-3">
          {KEY_DATA.journal.slice(0,3).map((p,i) => (
            <Reveal key={p.slug} delay={i*0.1}>
              <JournalCard post={p} onClick={() => navigate(`/journal/${p.slug}`)}/>
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  // ── Instagram strip ──────────────────────────────────
  function InstagramSection() {
    return (
      <section style={{ padding:'80px' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20 }}>
          <Reveal><SectionLabel>instagram</SectionLabel></Reveal>
          <Reveal><ArrowLink href="https://instagram.com" target="_blank">@k.e.y_harajuku on instagram</ArrowLink></Reveal>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:3 }} className="grid-ig">
          {Array.from({length:6},(_,i) => {
            const [hov, setHov] = useHomeState(false);
            return (
              <div key={i}
                onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
                style={{ aspectRatio:'1', position:'relative', overflow:'hidden', cursor:'pointer',
                  background:`repeating-linear-gradient(0deg,#f0f0f0 0,#f0f0f0 1px,#f8f8f8 1px,#f8f8f8 10px)` }}>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,#8FB8E6,#F4C4D1,#C8B4E0)', opacity: hov ? 0.45 : 0, transition:'opacity 0.35s' }}/>
                <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Courier New,monospace', fontSize:8, color:'rgba(10,10,10,0.18)', letterSpacing:'0.1em' }}>IG post</div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  // ── CTA ──────────────────────────────────────────────
  function HomeCTA() {
    return (
      <div style={{
        background:'#0A0A0A', color:'#fff',
        padding:'140px 80px', textAlign:'center',
        position:'relative', overflow:'hidden',
      }}>
        <div style={{
          position:'absolute', width:'60vw', height:'60vw',
          left:'50%', top:'50%', transform:'translate(-50%,-50%)',
          background:'linear-gradient(135deg,#8FB8E6,#F4C4D1,#C8B4E0)',
          filter:'blur(100px)', opacity:0.1, borderRadius:'50%',
          animation:'blobMorph 18s ease-in-out infinite',
        }}/>
        <div style={{ position:'relative', zIndex:1 }}>
          <Reveal><h2 style={{ fontSize:'clamp(40px,6vw,80px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', lineHeight:1, marginBottom:16 }}>book your color.</h2></Reveal>
          <Reveal delay={0.08}><p className="jp" style={{ fontSize:13, opacity:0.45, marginBottom:56, letterSpacing:'0.05em' }}>ご予約はホットペッパービューティーより</p></Reveal>
          <Reveal delay={0.12}>
            <div style={{ display:'flex', gap:2, justifyContent:'center', marginBottom:28, flexWrap:'wrap' }}>
              {KEY_DATA.salons.map(s => (
                <a key={s.id} href={s.hotpepperUrl} target="_blank"
                  style={{ padding:'16px 32px', border:'1px solid rgba(255,255,255,0.25)', color:'#fff', fontSize:12, letterSpacing:'0.1em', textTransform:'lowercase', transition:'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                  {s.name.toLowerCase()} →
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div style={{ fontSize:11, opacity:0.3, letterSpacing:'0.12em', display:'flex', alignItems:'center', justifyContent:'center', gap:12 }}>
              <span style={{ width:40, height:1, background:'rgba(255,255,255,0.3)', display:'block' }}/>
              or contact via LINE
              <span style={{ width:40, height:1, background:'rgba(255,255,255,0.3)', display:'block' }}/>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  return (
    <PageWrapper>
      <Hero/>
      <SalonsSection/>
      <WorksSection/>
      <PhilosophySection/>
      <StylistsSection/>
      <JournalSection/>
      <InstagramSection/>
      <HomeCTA/>
    </PageWrapper>
  );
}

window.HomePage = HomePage;
