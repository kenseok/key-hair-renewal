// ─── Access page ──────────────────────────────────────
function AccessPage({ navigate }) {
  return (
    <PageWrapper bg="#0A0A0A" color="#fff">
      <PageHero label="access" title="find us." subtitle="三店舗のアクセス情報" dark/>

      <section style={{ padding:'80px', maxWidth:1280, margin:'0 auto' }}>
        {KEY_DATA.salons.map((salon, idx) => (
          <Reveal key={salon.id} delay={idx * 0.1}>
            <div style={{
              display:'grid', gridTemplateColumns:'1fr 1.4fr',
              gap:0,
              borderTop: idx === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              borderBottom:'1px solid rgba(255,255,255,0.1)',
              padding:'64px 0',
              alignItems:'start',
            }} className="grid-responsive-2">
              {/* Map */}
              <div style={{ paddingRight:60 }}>
                <div style={{
                  aspectRatio:'16/10', background:'#161616',
                  border:'1px solid rgba(255,255,255,0.08)',
                  position:'relative', overflow:'hidden',
                  marginBottom:20,
                }}>
                  <div dangerouslySetInnerHTML={{ __html: salon.mapSvg }}
                    style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}/>
                  <div style={{
                    position:'absolute', inset:0, display:'flex', alignItems:'center',
                    justifyContent:'center', pointerEvents:'none',
                  }}>
                    <div style={{
                      fontFamily:'Courier New,monospace', fontSize:9,
                      color:'rgba(255,255,255,0.12)', letterSpacing:'0.12em',
                      textAlign:'center', lineHeight:2,
                    }}>map placeholder<br/>{salon.name}</div>
                  </div>
                </div>
                <a href={`#/salon/${salon.id}`}
                  onClick={e => { e.preventDefault(); navigate(`/salon/${salon.id}`); }}
                  style={{ fontSize:11, letterSpacing:'0.1em', color:'rgba(255,255,255,0.45)', transition:'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color='rgba(255,255,255,0.9)'}
                  onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.45)'}>
                  view salon page →
                </a>
              </div>

              {/* Details */}
              <div>
                <div style={{
                  display:'flex', alignItems:'center', gap:16,
                  marginBottom:32,
                }}>
                  <h2 style={{
                    fontSize:'clamp(24px,3vw,40px)', fontWeight:300,
                    letterSpacing:'0.05em', textTransform:'lowercase',
                    color:'#fff',
                  }}>{salon.name}</h2>
                  <div style={{ flex:1, height:1, background:'linear-gradient(to right,rgba(255,255,255,0.15),transparent)' }}/>
                </div>

                {[
                  { key:'address', label:'addr', val: salon.address, jp: true },
                  { key:'tel',     label:'tel',  val: salon.tel,     jp: false },
                  { key:'access',  label:'アクセス', val: salon.access,  jp: true },
                  { key:'hours',   label:'hours', val: salon.hours,   jp: true },
                  { key:'holiday', label:'定休日',  val: salon.holiday, jp: true },
                ].filter(r => r.val).map(row => (
                  <div key={row.key} style={{ display:'flex', gap:20, marginBottom:18, alignItems:'flex-start' }}>
                    <div style={{
                      fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase',
                      opacity:0.35, paddingTop:3, minWidth:52, flexShrink:0,
                    }}>{row.label}</div>
                    <div className={row.jp ? 'jp' : ''} style={{
                      fontSize:14, opacity:0.8, lineHeight:1.8,
                      fontFamily: row.jp ? undefined : 'Courier New,monospace',
                    }}>{row.val}</div>
                  </div>
                ))}

                <div style={{ marginTop:32 }}>
                  <a href={salon.hotpepperUrl} target="_blank"
                    style={{
                      display:'inline-block', padding:'13px 28px',
                      border:'1px solid rgba(255,255,255,0.25)',
                      color:'#fff', fontSize:11, letterSpacing:'0.12em',
                      textTransform:'lowercase', transition:'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.08)'}
                    onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                    reserve at {salon.name.toLowerCase()} →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </PageWrapper>
  );
}

window.AccessPage = AccessPage;
