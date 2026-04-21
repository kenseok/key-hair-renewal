// ─── Price page ───────────────────────────────────────
const { useState: usePriceState } = React;

function PricePage({ navigate }) {
  const [activeSalon, setActiveSalon] = usePriceState(0);
  const { categories, ranks, table, notes } = KEY_DATA.prices;

  return (
    <PageWrapper>
      <PageHero label="menu & price" title="price list." subtitle="すべての価格は税込み表示です。" dark>
        {/* Salon tabs */}
        <div style={{ display:'flex', gap:2, marginTop:40 }}>
          {KEY_DATA.salons.map((s, i) => (
            <button key={s.id} onClick={() => setActiveSalon(i)}
              style={{
                fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase',
                padding:'8px 20px', background: activeSalon===i ? '#fff' : 'transparent',
                color: activeSalon===i ? '#0A0A0A' : 'rgba(255,255,255,0.45)',
                border:'1px solid rgba(255,255,255,0.2)', cursor:'pointer',
                transition:'background 0.2s,color 0.2s',
              }}>
              {s.name}
            </button>
          ))}
        </div>
      </PageHero>

      <section style={{ padding:'80px', maxWidth:1280, margin:'0 auto' }}>
        {/* Rank legend */}
        <div style={{ display:'flex', gap:24, marginBottom:48, alignItems:'center' }}>
          {ranks.map(r => (
            <div key={r} style={{ display:'flex', alignItems:'center', gap:10 }}>
              <RankBadge rank={r}/>
              <span style={{ fontSize:11, color:'#888', letterSpacing:'0.05em' }}>{r}</span>
            </div>
          ))}
          <span style={{ fontSize:11, color:'#aaa', marginLeft:'auto' }}>
            {KEY_DATA.salons[activeSalon].name}
          </span>
        </div>

        {/* Price table */}
        <div style={{ border:'1px solid #e8e8e8', overflow:'hidden' }}>
          {/* Header */}
          <div style={{
            display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr',
            background:'#0A0A0A', color:'#fff',
          }}>
            <div style={{ padding:'14px 24px', fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.5 }}>menu</div>
            {ranks.map(r => (
              <div key={r} style={{ padding:'14px 24px', fontSize:10, letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.7, textAlign:'right' }}>{r}</div>
            ))}
          </div>

          {/* Rows */}
          {categories.map((cat, idx) => {
            const isSignature = ['Gradation Color','Hi-tone Design Color','Premium Bleach','Bleach Color'].includes(cat);
            return (
              <div key={cat}
                style={{
                  display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr',
                  borderBottom: idx < categories.length-1 ? '1px solid #f0f0f0' : 'none',
                  background: isSignature ? 'rgba(143,184,230,0.04)' : '#fff',
                  transition:'background 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#f9f9f9'}
                onMouseLeave={e => e.currentTarget.style.background = isSignature ? 'rgba(143,184,230,0.04)' : '#fff'}>
                <div style={{ padding:'20px 24px', display:'flex', alignItems:'center', gap:10 }}>
                  <span style={{ fontSize:14, fontWeight: isSignature ? 500 : 400 }}>{cat}</span>
                  {isSignature && (
                    <span style={{
                      fontSize:8, letterSpacing:'0.15em', textTransform:'uppercase',
                      padding:'2px 6px',
                      background:'linear-gradient(90deg,#8FB8E6,#C8B4E0)',
                      color:'#fff',
                    }}>signature</span>
                  )}
                </div>
                {(table[cat] || ['—','—','—']).map((price, pi) => (
                  <div key={pi} style={{
                    padding:'20px 24px', textAlign:'right',
                    fontSize:13, fontFamily:'Courier New,monospace',
                    color: isSignature ? '#0A0A0A' : '#444',
                  }}>{price}</div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Notes */}
        <div style={{ marginTop:48, padding:32, background:'#FAFAFA', border:'1px solid #ebebeb' }}>
          <div style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, marginBottom:20 }}>notes</div>
          {notes.map((n, i) => (
            <div key={i} style={{ display:'flex', gap:12, marginBottom:12, alignItems:'flex-start' }}>
              <span style={{ fontSize:9, letterSpacing:'0.1em', opacity:0.35, marginTop:2, flexShrink:0 }}>{String(i+1).padStart(2,'0')}</span>
              <p className="jp" style={{ fontSize:12, color:'#555', lineHeight:1.8 }}>{n}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop:64, textAlign:'center', padding:'64px 0', borderTop:'1px solid #ebebeb' }}>
          <p className="jp" style={{ fontSize:13, color:'#888', marginBottom:32 }}>ご不明な点はカウンセリングにてご確認いただけます。</p>
          <div style={{ display:'flex', gap:2, justifyContent:'center', flexWrap:'wrap' }}>
            {KEY_DATA.salons.map(s => (
              <a key={s.id} href={s.hotpepperUrl} target="_blank"
                style={{
                  padding:'14px 28px', border:'1px solid #0A0A0A',
                  fontSize:11, letterSpacing:'0.1em', textTransform:'lowercase', color:'#0A0A0A',
                  transition:'background 0.2s,color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background='#0A0A0A'; e.currentTarget.style.color='#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#0A0A0A'; }}>
                reserve {s.name.toLowerCase()} →
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

window.PricePage = PricePage;
