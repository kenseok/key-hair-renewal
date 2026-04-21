// ─── Footer ───────────────────────────────────────────
function Footer({ navigate }) {
  return (
    <footer style={{
      background:'#0A0A0A',
      borderTop:'1px solid rgba(255,255,255,0.07)',
      padding:'48px 80px',
      display:'grid',
      gridTemplateColumns:'1fr 2fr 1fr',
      gap:40,
      alignItems:'start',
      color:'rgba(255,255,255,0.4)',
    }}>
      <div>
        <a onClick={e=>{e.preventDefault();navigate('/')}} href="#/"
          style={{fontSize:14,fontWeight:500,letterSpacing:'0.15em',color:'rgba(255,255,255,0.7)',display:'block',marginBottom:6}}>
          k.e.y
        </a>
        <div className="jp" style={{fontSize:11,opacity:0.5}}>hair & make</div>
        <div style={{marginTop:16,fontSize:10,letterSpacing:'0.08em',opacity:0.35}}>
          "color as identity"<br/>髪色で、自分を描く。
        </div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
        {KEY_DATA.salons.map(s => (
          <div key={s.id}>
            <div style={{fontSize:10,letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(255,255,255,0.5)',marginBottom:10}}>
              {s.name}
            </div>
            <div className="jp" style={{fontSize:11,fontWeight:300,lineHeight:2,opacity:0.5}}>
              {s.addressShort}<br/>{s.tel}
            </div>
          </div>
        ))}
      </div>

      <div style={{textAlign:'right'}}>
        <div style={{display:'flex',gap:14,justifyContent:'flex-end',marginBottom:20,flexWrap:'wrap'}}>
          {['IG_Harajuku','IG_Kachidoki','IG_Ginza','LINE'].map(l => (
            <a key={l} href="#"
              style={{
                fontSize:10,letterSpacing:'0.1em',textTransform:'uppercase',
                paddingBottom:1,borderBottom:'1px solid rgba(255,255,255,0.15)',
                transition:'color 0.2s,border-color 0.2s',
              }}
              onMouseEnter={e=>{e.currentTarget.style.color='rgba(255,255,255,0.8)';e.currentTarget.style.borderColor='rgba(255,255,255,0.5)'}}
              onMouseLeave={e=>{e.currentTarget.style.color='';e.currentTarget.style.borderColor='rgba(255,255,255,0.15)'}}>
              {l}
            </a>
          ))}
        </div>
        <div style={{fontSize:10,letterSpacing:'0.06em'}}>© 2025 k.e.y hair & make</div>
      </div>

      <style>{`
        @media(max-width:768px){
          footer { grid-template-columns:1fr !important; padding:40px 24px !important; }
          footer > div:last-child { text-align:left; }
          footer > div:last-child > div:first-child { justify-content:flex-start; }
        }
      `}</style>
    </footer>
  );
}

window.Footer = Footer;
