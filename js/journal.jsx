// ─── Journal list page ────────────────────────────────
function JournalPage({ navigate }) {
  return (
    <PageWrapper>
      <PageHero label="journal" title="news & stories." subtitle="k.e.y からのお知らせ" dark/>
      <section style={{ padding:'80px', maxWidth:1280, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }} className="grid-responsive-3">
          {KEY_DATA.journal.map((p, i) => (
            <Reveal key={p.slug} delay={i*0.08}>
              <JournalCard post={p} onClick={() => navigate(`/journal/${p.slug}`)}/>
            </Reveal>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

// ─── Journal post page ────────────────────────────────
function JournalPostPage({ slug, navigate }) {
  const post = KEY_DATA.journal.find(p => p.slug === slug) || KEY_DATA.journal[0];
  const others = KEY_DATA.journal.filter(p => p.slug !== post.slug).slice(0, 3);

  // Parse body: \n\n = paragraph, 【...】 = callout block
  function renderBody(text) {
    const paras = text.split('\n\n');
    return paras.map((p, i) => {
      if (p.startsWith('【')) {
        const lines = p.split('\n');
        return (
          <div key={i} style={{
            background:'#FAFAFA', border:'1px solid #e8e8e8',
            padding:'20px 24px', margin:'32px 0',
          }}>
            {lines.map((l, li) => (
              <div key={li} className="jp" style={{ fontSize:13, lineHeight:2, color: li===0 ? '#0A0A0A' : '#555' }}>{l}</div>
            ))}
          </div>
        );
      }
      return (
        <p key={i} className="jp" style={{ fontSize:15, lineHeight:2.2, color:'#333', marginBottom:28 }}>{p}</p>
      );
    });
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <div style={{ background:'#0A0A0A', color:'#fff', padding:'140px 80px 60px', position:'relative', overflow:'hidden' }}>
        <div style={{
          position:'absolute', width:'40vw', height:'40vw', right:'-5%', top:'0%',
          background:'linear-gradient(135deg,#8FB8E6,#F4C4D1,#C8B4E0)',
          filter:'blur(80px)', opacity:0.1, borderRadius:'50%',
        }}/>
        <div style={{ maxWidth:760, position:'relative', zIndex:1 }}>
          <div style={{ display:'flex', gap:12, alignItems:'center', marginBottom:24 }}>
            <a onClick={e => { e.preventDefault(); navigate('/journal'); }} href="#/journal"
              style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', opacity:0.4, cursor:'pointer', transition:'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity=0.9}
              onMouseLeave={e => e.currentTarget.style.opacity=0.4}>
              ← journal
            </a>
          </div>
          <div style={{ fontFamily:'Courier New,monospace', fontSize:12, opacity:0.45, marginBottom:20, letterSpacing:'0.08em' }}>{post.date}</div>
          <h1 className="jp" style={{ fontSize:'clamp(24px,3.5vw,48px)', fontWeight:300, lineHeight:1.4, letterSpacing:'-0.01em', marginBottom:12 }}>{post.title}</h1>
          <p style={{ fontSize:13, opacity:0.45, letterSpacing:'0.08em' }}>{post.titleEn}</p>
        </div>
      </div>

      {/* Hero thumbnail */}
      <div style={{ background:'#0A0A0A' }}>
        <Placeholder label={`article hero\n${post.titleEn}`} dark aspect="21/9"/>
      </div>

      {/* Article body */}
      <article style={{ padding:'80px', maxWidth:760, margin:'0 auto' }}>
        {renderBody(post.body)}

        {/* Back link */}
        <div style={{ marginTop:64, paddingTop:40, borderTop:'1px solid #ebebeb' }}>
          <ArrowLink onClick={e => { e.preventDefault(); navigate('/journal'); }} href="#/journal"
            style={{ transform:'rotate(180deg) scaleX(-1)', display:'inline-flex' }}>
          </ArrowLink>
          <a onClick={e => { e.preventDefault(); navigate('/journal'); }} href="#/journal"
            style={{ fontSize:11, letterSpacing:'0.12em', textTransform:'lowercase', display:'inline-flex', alignItems:'center', gap:8, color:'#888', transition:'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color='#0A0A0A'}
            onMouseLeave={e => e.currentTarget.style.color='#888'}>
            ← back to journal
          </a>
        </div>
      </article>

      {/* Related posts */}
      {others.length > 0 && (
        <section style={{ padding:'0 80px 100px', background:'#FAFAFA' }}>
          <div style={{ padding:'64px 0 0' }}>
            <Reveal><h3 style={{ fontSize:20, fontWeight:300, letterSpacing:'-0.01em', textTransform:'lowercase', marginBottom:32 }}>more from journal.</h3></Reveal>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }} className="grid-responsive-3">
              {others.map((p, i) => (
                <Reveal key={p.slug} delay={i*0.1}>
                  <JournalCard post={p} onClick={() => navigate(`/journal/${p.slug}`)}/>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageWrapper>
  );
}

Object.assign(window, { JournalPage, JournalPostPage });
