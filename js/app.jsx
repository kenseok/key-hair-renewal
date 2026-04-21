// ─── App — hash router ────────────────────────────────
const { useState: useAppState, useEffect: useAppEffect } = React;

function parseRoute(hash) {
  const path = hash.replace(/^#/, '') || '/';
  // /salon/:id
  const salonMatch = path.match(/^\/salon\/(.+)$/);
  if (salonMatch) return { page:'salon', param: salonMatch[1] };
  // /stylists/:id
  const stylistMatch = path.match(/^\/stylists\/(.+)$/);
  if (stylistMatch) return { page:'stylist-profile', param: stylistMatch[1] };
  // /journal/:slug
  const journalMatch = path.match(/^\/journal\/(.+)$/);
  if (journalMatch) return { page:'journal-post', param: journalMatch[1] };
  // static routes
  const map = {
    '/':          'home',
    '/about':     'about',
    '/gallery':   'gallery',
    '/stylists':  'stylists',
    '/price':     'price',
    '/journal':   'journal',
    '/access':    'access',
    '/contact':   'contact',
  };
  return { page: map[path] || 'home', param: null };
}

function App() {
  const [route, setRoute] = useAppState(() => parseRoute(window.location.hash));
  const [transitioning, setTransitioning] = useAppState(false);

  // Read/persist scroll position per route in localStorage
  useAppEffect(() => {
    const saved = sessionStorage.getItem('key_scroll_' + JSON.stringify(route));
    if (saved) window.scrollTo(0, parseInt(saved));
    else window.scrollTo(0, 0);
    return () => {
      sessionStorage.setItem('key_scroll_' + JSON.stringify(route), window.scrollY);
    };
  }, [route.page, route.param]);

  // Hash change listener
  useAppEffect(() => {
    const handler = () => {
      const newRoute = parseRoute(window.location.hash);
      setTransitioning(true);
      setTimeout(() => {
        setRoute(newRoute);
        setTransitioning(false);
      }, 200);
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  function navigate(path) {
    window.location.hash = path;
  }

  function renderPage() {
    switch (route.page) {
      case 'home':            return <HomePage navigate={navigate}/>;
      case 'salon':           return <SalonPage salonId={route.param || 'harajuku'} navigate={navigate}/>;
      case 'price':           return <PricePage navigate={navigate}/>;
      case 'gallery':         return <GalleryPage navigate={navigate}/>;
      case 'stylists':        return <StylistsPage navigate={navigate}/>;
      case 'stylist-profile': return <StylistProfilePage stylistId={route.param} navigate={navigate}/>;
      case 'journal':         return <JournalPage navigate={navigate}/>;
      case 'journal-post':    return <JournalPostPage slug={route.param} navigate={navigate}/>;
      case 'about':           return <AboutPage navigate={navigate}/>;
      case 'access':          return <AccessPage navigate={navigate}/>;
      case 'contact':         return <ContactPage navigate={navigate}/>;
      default:                return <HomePage navigate={navigate}/>;
    }
  }

  const routePath = (route.param ? `/${route.page.replace('-profile','').replace('-post','')}/${route.param}` : `/${route.page === 'home' ? '' : route.page}`);

  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
      <Nav route={routePath} navigate={navigate}/>
      <div style={{
        flex:1,
        opacity: transitioning ? 0 : 1,
        transition:'opacity 0.2s ease',
      }}>
        {renderPage()}
      </div>
      <Footer navigate={navigate}/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
