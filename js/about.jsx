// ─── About page ───────────────────────────────────────
function AboutPage({ navigate }) {
  return (
    <PageWrapper>
      <PageHero label="about" title="color as identity." subtitle="髪色で、自分を描く。" dark/>

      {/* Brand story */}
      <section style={{ padding:'120px 80px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, maxWidth:1280, margin:'0 auto' }} className="grid-responsive-2">
        <Reveal>
          <div style={{ aspectRatio:'3/4', background:'#0A0A0A', position:'relative', overflow:'hidden' }}>
            <Placeholder label="brand story\nphoto" dark aspect="3/4"/>
            <div style={{
              position:'absolute', inset:0,
              background:'linear-gradient(135deg,#8FB8E6,#F4C4D1,#C8B4E0)',
              opacity:0.15, mixBlendMode:'screen',
            }}/>
          </div>
        </Reveal>
        <div style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <Reveal><SectionLabel>our story</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(32px,3.5vw,48px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', lineHeight:1.05, marginBottom:32 }}>born in harajuku.<br/>rooted in color.</h2></Reveal>
          <Reveal delay={0.1}><p className="jp" style={{ fontSize:14, lineHeight:2.2, color:'#444', marginBottom:24 }}>k.e.y は、原宿でひとりのカラリストが「自分の好きな色を、お客様と一緒につくりたい」という思いから生まれたサロンです。2015年の創業以来、グラデーションカラーとハイトーンデザインを専門とし、東京の三つのロケーションで活動しています。</p></Reveal>
          <Reveal delay={0.15}><p className="jp" style={{ fontSize:14, lineHeight:2.2, color:'#444', marginBottom:40 }}>わたしたちにとって、カラーはサービスではなく、コミュニケーションです。あなたが今どんな自分でありたいか。その感覚を、一緒に言語化して、色に落とし込む。それが k.e.y のアプローチです。</p></Reveal>
        </div>
      </section>

      {/* Philosophy cards */}
      <section style={{ background:'#0A0A0A', color:'#fff', padding:'120px 80px' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <Reveal><SectionLabel light>philosophy</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(32px,4vw,56px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', marginBottom:64 }}>how we think<br/>about color.</h2></Reveal>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }} className="grid-responsive-3">
            {[
              { num:'01', title:'identity first', body:'カラーを決める前に、あなたのことを知ることから始めます。ライフスタイル、ファッション、なりたいイメージ。すべてがカラーの設計図になります。' },
              { num:'02', title:'technique as craft', body:'グラデーション、ブリーチ、ハイライト。わたしたちのテクニックは長年の研究と実践から生まれています。一本一本の毛束に意図があります。' },
              { num:'03', title:'color that lasts', body:'美しい色は、翌日も、一週間後も、一ヶ月後も美しくあるべき。ケアとトリートメントまで含めた提案が、k.e.y のカラーです。' },
            ].map((c, i) => (
              <Reveal key={c.num} delay={i*0.12}>
                <div style={{ padding:'40px', border:'1px solid rgba(255,255,255,0.08)', height:'100%' }}>
                  <div style={{
                    fontSize:11, fontFamily:'Courier New,monospace', letterSpacing:'0.15em',
                    background:'linear-gradient(90deg,#8FB8E6,#C8B4E0)',
                    WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                    marginBottom:20,
                  }}>{c.num}</div>
                  <h3 style={{ fontSize:18, fontWeight:300, letterSpacing:'-0.01em', textTransform:'lowercase', marginBottom:20 }}>{c.title}</h3>
                  <p className="jp" style={{ fontSize:13, lineHeight:2, color:'rgba(255,255,255,0.55)' }}>{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature techniques */}
      <section style={{ padding:'120px 80px', maxWidth:1280, margin:'0 auto' }}>
        <Reveal><SectionLabel>techniques</SectionLabel></Reveal>
        <Reveal delay={0.05}><h2 style={{ fontSize:'clamp(32px,4vw,48px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', marginBottom:64 }}>our signature<br/>methods.</h2></Reveal>
        {[
          {
            title:'Gradation Color',
            titleJp:'グラデーションカラー',
            desc:'根元から毛先へ、色が自然にグラデートするk.e.y のシグネチャーカラー。「どこから色が変わるのか分からない」という境界線のなさが特徴です。一人ひとりの骨格と毛量に合わせて、デザインをオーダーメイドします。',
            color:'#8FB8E6',
          },
          {
            title:'Hi-tone Design Color',
            titleJp:'ハイトーンデザインカラー',
            desc:'ブリーチを用いて明度を高め、鮮やかな発色を実現するカラーデザイン。ダメージを最小限に抑えるプレックス剤の活用と、精密なブリーチコントロールが k.e.y の強みです。',
            color:'#F4C4D1',
          },
          {
            title:'Bleach Technique',
            titleJp:'ブリーチテクニック',
            desc:'ハイライト、バレイヤージュ、リフトアップ。目的に応じてブリーチの塗布方法を変え、最も自然で美しい仕上がりを目指します。繰り返しのブリーチによる傷みを防ぐケアプロセスも重要です。',
            color:'#C8B4E0',
          },
        ].map((t, i) => (
          <Reveal key={t.title} delay={0.05}>
            <div style={{
              display:'grid', gridTemplateColumns:'1fr 2fr',
              gap:60, borderTop:'1px solid #ebebeb', padding:'48px 0',
              alignItems:'start',
            }} className="grid-technique">
              <div>
                <div style={{ width:48, height:4, background:t.color, marginBottom:20 }}/>
                <h3 style={{ fontSize:22, fontWeight:400, letterSpacing:'-0.01em', marginBottom:6, textTransform:'lowercase' }}>{t.title}</h3>
                <div className="jp" style={{ fontSize:12, color:'#888', letterSpacing:'0.05em' }}>{t.titleJp}</div>
              </div>
              <p className="jp" style={{ fontSize:14, lineHeight:2.2, color:'#444', paddingTop:8 }}>{t.desc}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Large gradient visual */}
      <div style={{ height:320, position:'relative', overflow:'hidden', background:'#0A0A0A' }}>
        <div style={{
          position:'absolute', inset:0,
          background:'linear-gradient(135deg,#8FB8E6 0%,#F4C4D1 50%,#C8B4E0 100%)',
          opacity:0.7,
          animation:'swatchShift 8s ease-in-out infinite',
        }}/>
        <div style={{
          position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
          flexDirection:'column', gap:12,
        }}>
          <div style={{ fontSize:'clamp(32px,5vw,64px)', fontWeight:300, letterSpacing:'-0.02em', textTransform:'lowercase', color:'rgba(10,10,10,0.8)', mixBlendMode:'multiply' }}>
            color as identity.
          </div>
          <div className="jp" style={{ fontSize:16, fontWeight:300, color:'rgba(10,10,10,0.6)', mixBlendMode:'multiply' }}>
            髪色で、自分を描く。
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px) {
          .grid-technique { grid-template-columns:1fr !important; gap:20px !important; }
        }
      `}</style>
    </PageWrapper>
  );
}

window.AboutPage = AboutPage;
