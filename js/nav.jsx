// ─── Nav component ────────────────────────────────────
const { useState: useNavState, useEffect: useNavEffect } = React;

function Nav({ route, navigate }) {
  const [scrolled, setScrolled] = useNavState(false);
  const [salonsOpen, setSalonsOpen] = useNavState(false);
  const [menuOpen, setMenuOpen] = useNavState(false);

  useNavEffect(() => {
    const h = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  // close dropdown on route change
  useNavEffect(() => { setSalonsOpen(false); setMenuOpen(false); }, [route]);

  const isHome = route === '/';
  const solid = scrolled || !isHome;
  const light = isHome && !scrolled;

  const go = (path) => { navigate(path); };

  return (
    <>
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:1000,
        padding:'0 40px',
        height:64,
        display:'flex', alignItems:'center', justifyContent:'space-between',
        background: solid ? 'rgba(255,255,255,0.94)' : 'transparent',
        backdropFilter: solid ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(12px)' : 'none',
        borderBottom: solid ? '1px solid rgba(10,10,10,0.08)' : '1px solid transparent',
        transition:'background 0.4s, border-color 0.4s',
        color: '#0A0A0A',
      }}>
        {/* Logo */}
        <a onClick={e => { e.preventDefault(); go('/'); }}
          href="#/"
          style={{ fontSize:15, fontWeight:500, letterSpacing:'0.15em', cursor:'pointer', color:'#0A0A0A' }}>
          k.e.y
        </a>

        {/* Desktop links */}
        <div style={{ display:'flex', gap:28, alignItems:'center' }} className="nav-desktop">
          <NavLink href="#/about" active={route==='/about'} light={false}>about</NavLink>

          {/* Salons dropdown */}
          <div style={{ position:'relative' }}
            onMouseEnter={() => setSalonsOpen(true)}
            onMouseLeave={() => setSalonsOpen(false)}>
            <NavLink href="#/salon/harajuku" active={route.startsWith('/salon')} light={false}>salons</NavLink>
            {salonsOpen && (
              <div style={{
                position:'absolute', top:'100%', left:-12, paddingTop:12,
                zIndex:100,
              }}>
                <div style={{
                  background:'#fff', border:'1px solid rgba(10,10,10,0.1)',
                  minWidth:160, boxShadow:'0 8px 32px rgba(0,0,0,0.08)',
                }}>
                  {KEY_DATA.salons.map(s => (
                    <a key={s.id} href={`#/salon/${s.id}`}
                      onClick={e => { e.preventDefault(); go(`/salon/${s.id}`); setSalonsOpen(false); }}
                      style={{
                        display:'block', padding:'12px 20px',
                        fontSize:11, letterSpacing:'0.1em', textTransform:'lowercase',
                        color:'#0A0A0A', transition:'background 0.15s',
                        borderBottom:'1px solid rgba(10,10,10,0.06)',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background='#f6f6f6'}
                      onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink href="#/gallery" active={route==='/gallery'} light={false}>gallery</NavLink>
          <NavLink href="#/stylists" active={route==='/stylists'} light={false}>stylists</NavLink>
          <NavLink href="#/price" active={route==='/price'} light={false}>price</NavLink>
          <NavLink href="#/journal" active={route==='/journal'} light={false}>journal</NavLink>
          <NavLink href="#/access" active={route==='/access'} light={false}>access</NavLink>
          <NavLink href="#/contact" active={route==='/contact'} light={false}>contact</NavLink>
        </div>

        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <a href="#/contact"
            onClick={e => { e.preventDefault(); go('/contact'); }}
            style={{
              fontSize:11, fontWeight:500, letterSpacing:'0.12em', textTransform:'lowercase',
              border:'1px solid #0A0A0A', padding:'8px 18px',
              display:'flex', alignItems:'center', gap:6,
              color:'#0A0A0A', transition:'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background='#0A0A0A'; e.currentTarget.style.color='#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#0A0A0A'; }}>
            reservation →
          </a>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(o => !o)}
            style={{
              display:'none', background:'none', border:'none', cursor:'pointer',
              flexDirection:'column', gap:5, padding:4,
            }}
            className="nav-hamburger">
            <span style={{ width:22, height:1, background:'#0A0A0A', display:'block' }}/>
            <span style={{ width:22, height:1, background:'#0A0A0A', display:'block' }}/>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div style={{
          position:'fixed', inset:0, zIndex:999,
          background:'rgba(255,255,255,0.98)',
          backdropFilter:'blur(8px)',
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:36,
        }}>
          <button onClick={() => setMenuOpen(false)} style={{
            position:'absolute', top:20, right:24,
            background:'none', border:'none', fontSize:22, cursor:'pointer', color:'#0A0A0A',
          }}>✕</button>
          {[
            ['/', 'home'],
            ['/about', 'about'],
            ['/salon/harajuku', 'harajuku'],
            ['/salon/kachidoki', 'kachidoki'],
            ['/salon/ginza', 'ginza'],
            ['/gallery', 'gallery'],
            ['/stylists', 'stylists'],
            ['/price', 'price'],
            ['/journal', 'journal'],
            ['/access', 'access'],
            ['/contact', 'contact / reservation'],
          ].map(([path, label]) => (
            <a key={path} href={`#${path}`}
              onClick={e => { e.preventDefault(); go(path); setMenuOpen(false); }}
              style={{
                fontSize:24, fontWeight:300, letterSpacing:'-0.01em',
                textTransform:'lowercase', color:'#0A0A0A',
              }}>{label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

window.Nav = Nav;
