// ─── Contact page ─────────────────────────────────────
const { useState: useContactState } = React;

function ContactPage({ navigate }) {
  const [form, setForm] = useContactState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [salon, setSalon] = useContactState('harajuku');
  const [sent, setSent] = useContactState(false);

  const subjects = [
    'ご予約について', 'メニュー・価格について', 'カラーのご相談',
    'サロン見学', '採用について', 'その他',
  ];
  const [subjectIdx, setSubjectIdx] = useContactState(0);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  const inp = (field) => ({
    value: form[field],
    onChange: e => setForm(f => ({ ...f, [field]: e.target.value })),
    style: inputStyle,
    onFocus: e => e.target.style.borderColor = '#0A0A0A',
    onBlur:  e => e.target.style.borderColor = '#e0e0e0',
  });

  const inputStyle = {
    width:'100%', padding:'14px 0', background:'transparent',
    border:'none', borderBottom:'1px solid #e0e0e0',
    fontSize:14, outline:'none', color:'#0A0A0A',
    fontFamily:'inherit', transition:'border-color 0.2s',
    letterSpacing:'0.02em',
  };
  const labelStyle = {
    fontSize:9, letterSpacing:'0.25em', textTransform:'uppercase',
    opacity:0.4, display:'block', marginBottom:8,
  };

  return (
    <PageWrapper>
      <PageHero label="contact" title="get in touch." subtitle="ご予約・お問い合わせ" dark={false}>
        <div style={{ marginTop:24, fontSize:13, color:'#888', letterSpacing:'0.05em' }}>
          ご予約はホットペッパービューティーからも承っております。
        </div>
      </PageHero>

      <div style={{ padding:'80px', maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80 }} className="grid-responsive-2">

        {/* Form */}
        <div>
          {sent ? (
            <div style={{ padding:'60px 0' }}>
              <div style={{
                width:48, height:48, marginBottom:24,
                background:'linear-gradient(135deg,#8FB8E6,#C8B4E0)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:20, color:'#fff',
              }}>✓</div>
              <h3 style={{ fontSize:24, fontWeight:300, letterSpacing:'-0.01em', textTransform:'lowercase', marginBottom:16 }}>message sent.</h3>
              <p className="jp" style={{ fontSize:14, color:'#888', lineHeight:2, marginBottom:32 }}>お問い合わせありがとうございます。2〜3営業日以内にご返信いたします。</p>
              <button onClick={() => setSent(false)}
                style={{ fontSize:11, letterSpacing:'0.1em', background:'none', border:'1px solid #0A0A0A', padding:'10px 20px', cursor:'pointer' }}>
                send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0 40px', marginBottom:32 }}>
                <div>
                  <label style={labelStyle}>name</label>
                  <input {...inp('name')} placeholder="山田 花子" required/>
                </div>
                <div>
                  <label style={labelStyle}>phone</label>
                  <input {...inp('phone')} placeholder="090-0000-0000" type="tel"/>
                </div>
              </div>

              <div style={{ marginBottom:32 }}>
                <label style={labelStyle}>email</label>
                <input {...inp('email')} placeholder="email@example.com" type="email" required/>
              </div>

              <div style={{ marginBottom:32 }}>
                <label style={labelStyle}>salon</label>
                <div style={{ display:'flex', gap:2, marginTop:4 }}>
                  {KEY_DATA.salons.map(s => (
                    <button key={s.id} type="button" onClick={() => setSalon(s.id)}
                      style={{
                        fontSize:10, letterSpacing:'0.1em', textTransform:'lowercase',
                        padding:'6px 14px', cursor:'pointer', transition:'all 0.15s',
                        background: salon===s.id ? '#0A0A0A' : '#fff',
                        color: salon===s.id ? '#fff' : '#0A0A0A',
                        border: `1px solid ${salon===s.id ? '#0A0A0A' : '#e0e0e0'}`,
                      }}>{s.name.toLowerCase()}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom:32 }}>
                <label style={labelStyle}>subject</label>
                <div style={{ display:'flex', gap:2, flexWrap:'wrap', marginTop:4 }}>
                  {subjects.map((s, i) => (
                    <button key={s} type="button" onClick={() => setSubjectIdx(i)}
                      style={{
                        fontSize:10, letterSpacing:'0.05em',
                        padding:'6px 12px', cursor:'pointer', transition:'all 0.15s',
                        background: subjectIdx===i ? '#0A0A0A' : '#fff',
                        color: subjectIdx===i ? '#fff' : '#0A0A0A',
                        border: `1px solid ${subjectIdx===i ? '#0A0A0A' : '#e0e0e0'}`,
                        fontFamily:'Noto Sans JP,sans-serif',
                      }}>{s}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom:40 }}>
                <label style={labelStyle}>message</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="ご質問・ご要望をご記入ください"
                  rows={5}
                  required
                  style={{ ...inputStyle, resize:'vertical', borderBottom:'1px solid #e0e0e0', paddingTop:14 }}
                  onFocus={e => e.target.style.borderBottomColor='#0A0A0A'}
                  onBlur={e => e.target.style.borderBottomColor='#e0e0e0'}
                />
              </div>

              <button type="submit"
                style={{
                  width:'100%', padding:'16px', background:'#0A0A0A', color:'#fff',
                  border:'none', fontSize:12, letterSpacing:'0.15em', textTransform:'lowercase',
                  cursor:'pointer', transition:'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity='0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity='1'}>
                send message →
              </button>
            </form>
          )}
        </div>

        {/* Alternative contact */}
        <div>
          <div style={{ marginBottom:48 }}>
            <div style={{ fontSize:10, letterSpacing:'0.25em', textTransform:'uppercase', opacity:0.35, marginBottom:20 }}>alternative contact</div>

            {[
              { label:'LINE', desc:'各店舗の公式LINEからご予約・ご相談が可能です。', action:'LINE で開く →' },
              { label:'Instagram DM', desc:'インスタグラムのDMでも受け付けております。スタイルの参考画像もお気軽にどうぞ。', action:'@k.e.y_harajuku' },
              { label:'Hot Pepper Beauty', desc:'ホットペッパービューティーからのご予約は24時間受け付けております。', action:'予約ページへ →' },
            ].map(item => (
              <div key={item.label} style={{ borderBottom:'1px solid #ebebeb', padding:'24px 0' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:8 }}>
                  <span style={{ fontSize:13, fontWeight:500, letterSpacing:'0.05em' }}>{item.label}</span>
                  <a href="#" style={{ fontSize:11, letterSpacing:'0.08em', color:'#888', transition:'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color='#0A0A0A'}
                    onMouseLeave={e => e.currentTarget.style.color='#888'}>
                    {item.action}
                  </a>
                </div>
                <p className="jp" style={{ fontSize:12, color:'#888', lineHeight:1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Salon quick links */}
          <div>
            <div style={{ fontSize:10, letterSpacing:'0.25em', textTransform:'uppercase', opacity:0.35, marginBottom:20 }}>salon direct lines</div>
            {KEY_DATA.salons.map(s => (
              <div key={s.id} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid #ebebeb', padding:'16px 0' }}>
                <div>
                  <div style={{ fontSize:12, letterSpacing:'0.08em', textTransform:'lowercase', marginBottom:4 }}>{s.name}</div>
                  <div className="jp" style={{ fontSize:11, color:'#888' }}>{s.addressShort}</div>
                </div>
                <a href={`tel:${s.tel}`} style={{ fontFamily:'Courier New,monospace', fontSize:12, color:'#888', letterSpacing:'0.05em', transition:'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color='#0A0A0A'}
                  onMouseLeave={e => e.currentTarget.style.color='#888'}>
                  {s.tel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

window.ContactPage = ContactPage;
