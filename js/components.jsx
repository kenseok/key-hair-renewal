// ─── Shared UI components — exported to window ───────
const { useState, useEffect, useRef } = React;

// ── Striped placeholder ──────────────────────────────
function Placeholder({ label, aspect = '1/1', dark = true, accentColor }) {
  const bg = dark
    ? `repeating-linear-gradient(45deg,#111 0,#111 1px,#1a1a1a 1px,#1a1a1a 20px)`
    : `repeating-linear-gradient(45deg,#e8e8e8 0,#e8e8e8 1px,#f2f2f2 1px,#f2f2f2 16px)`;
  return (
    <div style={{
      width:'100%', aspectRatio: aspect, background: bg,
      display:'flex', alignItems:'center', justifyContent:'center',
      position:'relative', overflow:'hidden',
    }}>
      {accentColor && (
        <div style={{
          position:'absolute', inset:0,
          background: `linear-gradient(135deg, ${accentColor}22, transparent)`,
        }}/>
      )}
      <span style={{
        fontFamily:'Courier New, monospace', fontSize:9,
        color: dark ? 'rgba(255,255,255,0.18)' : 'rgba(10,10,10,0.2)',
        letterSpacing:'0.12em', textAlign:'center', lineHeight:2,
        position:'relative', zIndex:1,
        whiteSpace:'pre-line',
      }}>{label}</span>
    </div>
  );
}

// ── Section label ────────────────────────────────────
function SectionLabel({ children, light = false }) {
  return (
    <div style={{
      fontSize:10, letterSpacing:'0.3em', textTransform:'uppercase',
      opacity:0.4, marginBottom:20, display:'flex', alignItems:'center', gap:16,
      color: light ? '#fff' : '#0A0A0A',
    }}>
      <span style={{ width:32, height:1, background: light ? '#fff' : '#0A0A0A', opacity:0.4, display:'block', flexShrink:0 }}/>
      {children}
    </div>
  );
}

// ── Reveal wrapper (IntersectionObserver) ────────────
function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ── Gradient text ────────────────────────────────────
function GradText({ children, style = {} }) {
  return (
    <span style={{
      background:'linear-gradient(90deg,#8FB8E6,#F4C4D1,#C8B4E0)',
      WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
      backgroundClip:'text', ...style,
    }}>{children}</span>
  );
}

// ── Arrow link ───────────────────────────────────────
function ArrowLink({ children, href, onClick, light = false, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        fontSize:11, letterSpacing:'0.1em', textTransform:'lowercase',
        display:'inline-flex', alignItems:'center',
        gap: hov ? 14 : 8,
        transition:'gap 0.2s',
        color: light ? 'rgba(255,255,255,0.7)' : '#0A0A0A',
        cursor:'pointer', ...style,
      }}>
      {children} →
    </a>
  );
}

// ── Tag pill ─────────────────────────────────────────
function Tag({ children, grad = false }) {
  if (grad) return (
    <span style={{
      fontSize:9, letterSpacing:'0.15em', textTransform:'uppercase',
      padding:'3px 8px', border:'1px solid transparent',
      background:'linear-gradient(#fff,#fff) padding-box, linear-gradient(90deg,#8FB8E6,#C8B4E0) border-box',
      color:'#0A0A0A',
    }}>{children}</span>
  );
  return (
    <span style={{
      fontSize:9, letterSpacing:'0.15em', textTransform:'uppercase',
      padding:'3px 8px', border:'1px solid rgba(10,10,10,0.2)', color:'#0A0A0A',
    }}>{children}</span>
  );
}

// ── Dark tag ─────────────────────────────────────────
function DarkTag({ children }) {
  return (
    <span style={{
      fontSize:9, letterSpacing:'0.15em', textTransform:'uppercase',
      padding:'3px 8px', border:'1px solid rgba(255,255,255,0.25)', color:'rgba(255,255,255,0.7)',
    }}>{children}</span>
  );
}

// ── Rank badge ───────────────────────────────────────
function RankBadge({ rank }) {
  const colors = { Director:'#0A0A0A', 'Top Designer':'#444', Designer:'#888' };
  return (
    <span style={{
      fontSize:9, letterSpacing:'0.15em', textTransform:'uppercase',
      padding:'3px 10px', background: colors[rank] || '#888', color:'#fff',
    }}>{rank}</span>
  );
}

// ── Nav link helper ──────────────────────────────────
function NavLink({ href, children, active, light }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        fontSize:11, letterSpacing:'0.1em', textTransform:'lowercase',
        color: light ? (hov ? '#fff' : 'rgba(255,255,255,0.6)') : (hov || active ? '#0A0A0A' : 'rgba(10,10,10,0.5)'),
        transition:'color 0.2s', cursor:'pointer',
        borderBottom: active ? `1px solid ${light ? '#fff' : '#0A0A0A'}` : '1px solid transparent',
        paddingBottom:1,
      }}>{children}</a>
  );
}

// ── Salon card ───────────────────────────────────────
function SalonCard({ salon, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{
        background:'#0A0A0A', position:'relative', overflow:'hidden',
        cursor:'pointer',
        transform: hov ? 'rotateZ(1deg) scale(1.02)' : 'none',
        transition:'transform 0.4s cubic-bezier(.34,1.56,.64,1)',
        transformOrigin:'center bottom',
      }}>
      <div style={{ aspectRatio:'3/4' }}>
        <Placeholder label={`interior photo\n${salon.name}`} dark />
      </div>
      <div style={{
        position:'absolute', bottom:0, left:0, right:0,
        padding:28,
        background:'linear-gradient(transparent, rgba(10,10,10,0.92))',
        color:'#fff',
      }}>
        <div style={{ fontSize:20, fontWeight:400, letterSpacing:'0.05em', textTransform:'lowercase', marginBottom:8 }}>{salon.name}</div>
        <div className="jp" style={{ fontSize:12, opacity:0.55, lineHeight:1.7, marginBottom:16 }}>{salon.concept}</div>
        <ArrowLink light style={{ fontSize:11, gap: hov ? 12 : 6, transition:'gap 0.2s' }}>view salon</ArrowLink>
      </div>
    </div>
  );
}

// ── Work card ────────────────────────────────────────
function WorkCard({ work, onClick, style: extraStyle = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{
        position:'relative', overflow:'hidden',
        background:'#111', cursor:'pointer', ...extraStyle,
      }}>
      <div style={{ width:'100%', height:'100%',
        background:`repeating-linear-gradient(-45deg,#161616 0,#161616 1px,#1e1e1e 1px,#1e1e1e 18px)`,
        transform: hov ? 'scale(1.04)' : 'scale(1)',
        transition:'transform 0.6s cubic-bezier(.16,1,.3,1)',
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>
        <div style={{
          width:40, height:40, borderRadius:'50%',
          background: work.color, opacity:0.5,
        }}/>
        <span style={{ position:'absolute', fontFamily:'Courier New,monospace', fontSize:9,
          color:'rgba(255,255,255,0.15)', letterSpacing:'0.1em', textAlign:'center',
          lineHeight:2, bottom:60, left:0, right:0, textAlign:'center' }}>
          {work.label}
        </span>
      </div>
      <div style={{
        position:'absolute', inset:0,
        background:'linear-gradient(to top,rgba(10,10,10,0.85) 0%,rgba(10,10,10,0.2) 50%,transparent 100%)',
        opacity: hov ? 0 : 1, transition:'opacity 0.4s',
      }}/>
      <div style={{
        position:'absolute', bottom:16, left:16, right:16, color:'#fff',
        opacity: hov ? 0 : 1, transition:'opacity 0.4s',
      }}>
        <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:6 }}>
          <Tag>{work.category}</Tag>
          <Tag>{work.length}</Tag>
        </div>
        <div style={{ fontSize:11, opacity:0.6, fontFamily:'Courier New,monospace' }}>
          {(KEY_DATA.stylists.find(s=>s.id===work.stylist)||{}).nameEn || work.stylist}
        </div>
      </div>
    </div>
  );
}

// ── Lightbox ─────────────────────────────────────────
function Lightbox({ work, onClose }) {
  useEffect(() => {
    const h = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);
  const stylist = KEY_DATA.stylists.find(s => s.id === work.stylist);
  return (
    <div onClick={onClose} style={{
      position:'fixed', inset:0, background:'rgba(10,10,10,0.92)',
      zIndex:9000, display:'flex', alignItems:'center', justifyContent:'center',
      padding:40,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background:'#0A0A0A', maxWidth:600, width:'100%',
        border:'1px solid rgba(255,255,255,0.1)',
      }}>
        <Placeholder label={`hair photo\n${work.label}`} dark aspect="4/5" accentColor={work.color}/>
        <div style={{ padding:28 }}>
          <div style={{ display:'flex', gap:8, marginBottom:16, flexWrap:'wrap' }}>
            <Tag>{work.category}</Tag><Tag>{work.length}</Tag>
          </div>
          <div style={{ fontSize:18, fontWeight:300, color:'#fff', marginBottom:8, textTransform:'lowercase', letterSpacing:'-0.01em' }}>{work.label}</div>
          {stylist && <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)', marginBottom:20 }}>
            {stylist.nameEn} — <span style={{ textTransform:'capitalize' }}>{KEY_DATA.salons.find(s=>s.id===stylist.salon)?.name}</span>
          </div>}
          <a href={KEY_DATA.salons.find(s=>s.id===stylist?.salon)?.hotpepperUrl || '#'}
            target="_blank"
            style={{
              display:'inline-block', padding:'12px 24px',
              border:'1px solid rgba(255,255,255,0.3)', color:'#fff',
              fontSize:11, letterSpacing:'0.12em', textTransform:'lowercase',
            }}>book this style →</a>
        </div>
        <button onClick={onClose} style={{
          position:'absolute', top:16, right:16, background:'none', border:'none',
          color:'rgba(255,255,255,0.5)', fontSize:20, cursor:'pointer', lineHeight:1,
        }}>✕</button>
      </div>
    </div>
  );
}

// ── Stylist card ─────────────────────────────────────
function StylistCard({ stylist, onClick }) {
  const [hov, setHov] = useState(false);
  const salon = KEY_DATA.salons.find(s => s.id === stylist.salon);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{ cursor:'pointer' }}>
      <div style={{
        aspectRatio:'3/4', position:'relative', overflow:'hidden',
        background:`repeating-linear-gradient(90deg,#e8e8e8 0,#e8e8e8 1px,#f0f0f0 1px,#f0f0f0 16px)`,
        filter: hov ? 'grayscale(0)' : 'grayscale(1)',
        transition:'filter 0.5s ease',
      }}>
        <div style={{
          position:'absolute', inset:0,
          background:'linear-gradient(135deg,#8FB8E6,#F4C4D1,#C8B4E0)',
          opacity: hov ? 0.35 : 0, transition:'opacity 0.5s',
          mixBlendMode:'multiply',
        }}/>
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:8 }}>
          <div style={{ fontFamily:'Courier New,monospace', fontSize:9, color:'rgba(10,10,10,0.2)', letterSpacing:'0.1em', textAlign:'center' }}>portrait<br/>{stylist.nameEn}</div>
        </div>
      </div>
      <div style={{ padding:'18px 0 24px', borderBottom:'1px solid #e8e8e8' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10 }}>
          <div>
            <div style={{ fontSize:15, fontWeight:400, marginBottom:3 }}>{stylist.nameEn}</div>
            <div className="jp" style={{ fontSize:11, color:'#888' }}>{stylist.nameJp}</div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:4 }}>
            <RankBadge rank={stylist.rank}/>
            <span style={{ fontSize:9, letterSpacing:'0.12em', textTransform:'uppercase', color:'#aaa' }}>{salon?.name}</span>
          </div>
        </div>
        <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
          {stylist.tags.map(t => (
            <span key={t} style={{
              fontSize:10, letterSpacing:'0.05em', color: hov ? 'transparent' : '#888',
              background: hov ? 'linear-gradient(90deg,#8FB8E6,#F4C4D1,#C8B4E0)' : 'none',
              WebkitBackgroundClip: hov ? 'text' : 'none',
              WebkitTextFillColor: hov ? 'transparent' : '#888',
              transition:'color 0.3s',
            }}>{t}{t !== stylist.tags[stylist.tags.length-1] ? ' /' : ''}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Journal card ─────────────────────────────────────
function JournalCard({ post, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{
        cursor:'pointer', background:'#fff',
        border: hov ? '1px solid #0A0A0A' : '1px solid transparent',
        transition:'border-color 0.2s',
      }}>
      <div style={{ aspectRatio:'16/9', overflow:'hidden' }}>
        <Placeholder label="thumbnail" dark={false} aspect="16/9"/>
      </div>
      <div style={{ padding:22 }}>
        <div style={{ fontFamily:'Courier New,monospace', fontSize:11, color:'#888', marginBottom:10, letterSpacing:'0.05em' }}>{post.date}</div>
        <div className="jp" style={{ fontSize:14, fontWeight:400, lineHeight:1.7, letterSpacing:'0.02em' }}>{post.title}</div>
      </div>
    </div>
  );
}

// ── Page wrapper with scroll-to-top ──────────────────
function PageWrapper({ children, bg = '#fff', color = '#0A0A0A' }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ background: bg, color, minHeight:'100vh' }}>
      {children}
    </div>
  );
}

// ── Page hero (reusable for inner pages) ─────────────
function PageHero({ label, title, subtitle, dark = true, children }) {
  return (
    <div style={{
      background: dark ? '#0A0A0A' : '#fff',
      color: dark ? '#fff' : '#0A0A0A',
      padding:'160px 80px 80px',
      position:'relative', overflow:'hidden',
    }}>
      {dark && <div style={{
        position:'absolute', width:'50vw', height:'50vw',
        left:'60%', top:'50%', transform:'translate(-50%,-50%)',
        background:'linear-gradient(135deg,#8FB8E6,#F4C4D1,#C8B4E0)',
        filter:'blur(80px)', opacity:0.12, borderRadius:'50%',
        animation:'blobMorph 20s ease-in-out infinite',
      }}/>}
      <div style={{ maxWidth:1280, margin:'0 auto', position:'relative', zIndex:1 }}>
        {label && <SectionLabel light={dark}>{label}</SectionLabel>}
        <h1 style={{
          fontSize:'clamp(48px,6vw,80px)', fontWeight:300,
          letterSpacing:'-0.025em', lineHeight:1,
          textTransform:'lowercase', marginBottom:20,
        }}>{title}</h1>
        {subtitle && <p className="jp" style={{ fontSize:14, opacity:0.5, letterSpacing:'0.05em' }}>{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}

// ── CTA section ──────────────────────────────────────
function CTASection({ salonId }) {
  const salon = KEY_DATA.salons.find(s => s.id === salonId) || KEY_DATA.salons[0];
  return (
    <div style={{
      background:'#0A0A0A', color:'#fff',
      padding:'100px 80px', textAlign:'center',
      position:'relative', overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', width:'50vw', height:'50vw',
        left:'50%', top:'50%', transform:'translate(-50%,-50%)',
        background:'linear-gradient(135deg,#8FB8E6,#F4C4D1,#C8B4E0)',
        filter:'blur(90px)', opacity:0.1, borderRadius:'50%',
        animation:'blobMorph 18s ease-in-out infinite',
      }}/>
      <div style={{ position:'relative', zIndex:1 }}>
        <h2 style={{ fontSize:'clamp(36px,5vw,64px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', marginBottom:16 }}>book your color.</h2>
        <p className="jp" style={{ fontSize:13, opacity:0.45, marginBottom:48 }}>ご予約はホットペッパービューティーより</p>
        <a href={salon.hotpepperUrl} target="_blank" style={{
          display:'inline-block', padding:'16px 40px',
          border:'1px solid rgba(255,255,255,0.3)', color:'#fff',
          fontSize:12, letterSpacing:'0.12em', textTransform:'lowercase',
          transition:'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          {salon.name} →
        </a>
      </div>
    </div>
  );
}

Object.assign(window, {
  Placeholder, SectionLabel, Reveal, GradText, ArrowLink,
  Tag, DarkTag, RankBadge, NavLink, SalonCard, WorkCard,
  Lightbox, StylistCard, JournalCard, PageWrapper, PageHero, CTASection,
});
