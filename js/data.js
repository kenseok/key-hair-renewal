// ─── K.e.y hair & make — shared data ───────────────
window.KEY_DATA = {

  salons: [
    {
      id: 'harajuku',
      name: 'Harajuku',
      nameJp: '原宿',
      address: '〒150-0001 東京都渋谷区神宮前6-8-7 2F',
      addressShort: '渋谷区神宮前6-8-7 2F',
      tel: '03-3499-5237',
      access: '明治神宮前駅 徒歩2分',
      hours: '平日 10:00–20:00 / 土日祝 9:00–19:00',
      holiday: '月曜定休',
      concept: '表参道の路地裏。色と個性が交差する場所。',
      conceptLong: 'ストリートとハイファッションが交差する原宿。その喧騒から一歩入った静かな路地に、k.e.y の原点があります。ここから生まれたカラーの哲学が、今も三店舗を貫いています。',
      hotpepperUrl: 'https://beauty.hotpepper.jp',
      markerColor: '#8FB8E6',
      mapSvg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="80" y1="0" x2="80" y2="250" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="160" y1="0" x2="160" y2="250" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="240" y1="0" x2="240" y2="250" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="320" y1="0" x2="320" y2="250" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="0" y1="125" x2="400" y2="125" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
        <line x1="200" y1="0" x2="200" y2="250" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
        <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
        <line x1="120" y1="0" x2="120" y2="250" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
        <circle cx="200" cy="125" r="6" fill="#8FB8E6"/>
        <circle cx="200" cy="125" r="14" stroke="#8FB8E6" stroke-width="1" fill="none" opacity="0.5"/>
        <circle cx="200" cy="125" r="22" stroke="#8FB8E6" stroke-width="0.5" fill="none" opacity="0.25"/>
      </svg>`,
    },
    {
      id: 'kachidoki',
      name: 'Kachidoki',
      nameJp: '勝どき',
      address: '〒104-0054 東京都中央区勝どき4-1-2 103',
      addressShort: '中央区勝どき4-1-2 103',
      tel: '03-6685-7223',
      access: '勝どき駅 徒歩3分',
      hours: '平日 11:00–20:00 / 土日祝 10:00–19:00',
      holiday: '火曜定休',
      concept: '下町と現代が溶け合う、新しいオルタナティブ。',
      conceptLong: '隅田川に近い勝どきは、東京の新旧が交差するエリア。k.e.y kachidoki はその空気を吸収しながら、よりローカルで親密なスタイルを提案します。',
      hotpepperUrl: 'https://beauty.hotpepper.jp',
      markerColor: '#F4C4D1',
      mapSvg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="80" y1="0" x2="80" y2="250" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="160" y1="0" x2="160" y2="250" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="240" y1="0" x2="240" y2="250" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="320" y1="0" x2="320" y2="250" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="0" y1="125" x2="400" y2="125" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
        <line x1="160" y1="0" x2="160" y2="250" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
        <line x1="0" y1="170" x2="400" y2="170" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
        <circle cx="160" cy="125" r="6" fill="#F4C4D1"/>
        <circle cx="160" cy="125" r="14" stroke="#F4C4D1" stroke-width="1" fill="none" opacity="0.5"/>
        <circle cx="160" cy="125" r="22" stroke="#F4C4D1" stroke-width="0.5" fill="none" opacity="0.25"/>
      </svg>`,
    },
    {
      id: 'ginza',
      name: 'GINZA_maison',
      nameJp: '銀座',
      address: '〒104-0061 東京都中央区銀座3-10-7 9F',
      addressShort: '中央区銀座3-10-7 9F',
      tel: '03-3543-7252',
      access: '東銀座駅 徒歩2分 / 銀座駅 徒歩5分',
      hours: '平日 11:00–21:00 / 土日祝 10:00–20:00',
      holiday: '水曜定休',
      concept: '銀座の9階。都市の光が差し込むアトリエ。',
      conceptLong: '銀座3丁目の9階から見下ろす東京の景色とともに、k.e.y の最新コレクションを体験できる旗艦店。大きな窓から差し込む光が、カラーの発色を最大限に引き出します。',
      hotpepperUrl: 'https://beauty.hotpepper.jp',
      markerColor: '#C8B4E0',
      mapSvg: `<svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="80" y1="0" x2="80" y2="250" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="160" y1="0" x2="160" y2="250" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="240" y1="0" x2="240" y2="250" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="320" y1="0" x2="320" y2="250" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="0" y1="125" x2="400" y2="125" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
        <line x1="240" y1="0" x2="240" y2="250" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
        <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
        <circle cx="240" cy="125" r="6" fill="#C8B4E0"/>
        <circle cx="240" cy="125" r="14" stroke="#C8B4E0" stroke-width="1" fill="none" opacity="0.5"/>
        <circle cx="240" cy="125" r="22" stroke="#C8B4E0" stroke-width="0.5" fill="none" opacity="0.25"/>
      </svg>`,
    },
  ],

  stylists: [
    {
      id: 'yui-nakamura',
      nameEn: 'Yui Nakamura',
      nameJp: '中村 結',
      rank: 'Director',
      salon: 'harajuku',
      tags: ['gradation color', 'bleach', 'hi-tone design'],
      message: 'カラーは、鏡に映る自分を変える力があると信じています。初めてのお客様も、長年通ってくださる方も、毎回「この色にしてよかった」と思っていただけるよう、一つ一つのカラーと向き合っています。',
      instagram: '@yui_key_hair',
    },
    {
      id: 'kenta-saito',
      nameEn: 'Kenta Saito',
      nameJp: '斉藤 健太',
      rank: 'Top Designer',
      salon: 'kachidoki',
      tags: ['cut', 'perm', 'design cut'],
      message: 'カットはすべての基本です。どんなに美しいカラーも、骨格に合ったカットがあってこそ活きてくる。お客様の骨格、ライフスタイル、なりたいイメージを丁寧にヒアリングして、最適なスタイルをご提案します。',
      instagram: '@kenta_key_hair',
    },
    {
      id: 'mika-hoshino',
      nameEn: 'Mika Hoshino',
      nameJp: '星野 美香',
      rank: 'Designer',
      salon: 'ginza',
      tags: ['treatment', 'color', 'natural style'],
      message: '髪のダメージを最小限に抑えながら、なりたい色を実現する。それが私のテーマです。トリートメントとカラーを組み合わせた独自のアプローチで、健康的でツヤのある仕上がりを追求しています。',
      instagram: '@mika_key_hair',
    },
  ],

  works: [
    { id: 1, category: 'gradation', length: 'long',  salon: 'harajuku',  stylist: 'yui-nakamura',  label: 'blue gradation',  color: '#8FB8E6' },
    { id: 2, category: 'bleach',    length: 'medium', salon: 'ginza',     stylist: 'mika-hoshino', label: 'hi-tone bleach',  color: '#F4C4D1' },
    { id: 3, category: 'color',     length: 'short',  salon: 'kachidoki', stylist: 'kenta-saito',  label: 'ash color',       color: '#C8B4E0' },
    { id: 4, category: 'gradation', length: 'long',   salon: 'harajuku',  stylist: 'yui-nakamura', label: 'lavender grad',   color: '#C8B4E0' },
    { id: 5, category: 'color',     length: 'bob',    salon: 'ginza',     stylist: 'mika-hoshino', label: 'pink ash',        color: '#F4C4D1' },
    { id: 6, category: 'bleach',    length: 'long',   salon: 'kachidoki', stylist: 'kenta-saito',  label: 'smoke bleach',    color: '#8FB8E6' },
    { id: 7, category: 'gradation', length: 'medium', salon: 'harajuku',  stylist: 'yui-nakamura', label: 'pearl gradation', color: '#F4C4D1' },
    { id: 8, category: 'color',     length: 'long',   salon: 'ginza',     stylist: 'mika-hoshino', label: 'vivid blue',      color: '#8FB8E6' },
    { id: 9, category: 'cut',       length: 'bob',    salon: 'kachidoki', stylist: 'kenta-saito',  label: 'design cut',      color: '#C8B4E0' },
    { id:10, category: 'perm',      length: 'long',   salon: 'harajuku',  stylist: 'yui-nakamura', label: 'wave perm',       color: '#F4C4D1' },
    { id:11, category: 'gradation', length: 'short',  salon: 'ginza',     stylist: 'mika-hoshino', label: 'aqua gradation',  color: '#8FB8E6' },
    { id:12, category: 'bleach',    length: 'medium', salon: 'kachidoki', stylist: 'kenta-saito',  label: 'platinum bleach', color: '#C8B4E0' },
    { id:13, category: 'color',     length: 'long',   salon: 'harajuku',  stylist: 'yui-nakamura', label: 'rose beige',      color: '#F4C4D1' },
    { id:14, category: 'gradation', length: 'bob',    salon: 'ginza',     stylist: 'mika-hoshino', label: 'twilight grad',   color: '#C8B4E0' },
    { id:15, category: 'cut',       length: 'short',  salon: 'kachidoki', stylist: 'kenta-saito',  label: 'texture cut',     color: '#8FB8E6' },
    { id:16, category: 'bleach',    length: 'long',   salon: 'harajuku',  stylist: 'yui-nakamura', label: 'ice blonde',      color: '#8FB8E6' },
    { id:17, category: 'color',     length: 'medium', salon: 'ginza',     stylist: 'mika-hoshino', label: 'moss ash',        color: '#C8B4E0' },
    { id:18, category: 'perm',      length: 'long',   salon: 'kachidoki', stylist: 'kenta-saito',  label: 'digital perm',    color: '#F4C4D1' },
    { id:19, category: 'gradation', length: 'long',   salon: 'harajuku',  stylist: 'yui-nakamura', label: 'midnight grad',   color: '#8FB8E6' },
    { id:20, category: 'bleach',    length: 'bob',    salon: 'ginza',     stylist: 'mika-hoshino', label: 'champagne',       color: '#F4C4D1' },
  ],

  journal: [
    {
      slug: 'new-graduate-2026',
      date: '2026.04.08',
      title: '新卒採用のご案内',
      titleEn: 'Graduate Recruitment 2026',
      body: `k.e.y hair & make では、2027年度の新卒スタイリストを募集しています。\n\n私たちは「カラーの専門家」として東京で活動する三店舗のサロンです。原宿・勝どき・銀座という異なる個性を持つ三つのロケーションで、それぞれの土地に根ざしたスタイルを提案しています。\n\n髪色を通じて人の生き方に関わる仕事。それがk.e.yのスタイリストです。ご興味のある方は、採用ページまたはインスタグラムのDMにてご連絡ください。`,
    },
    {
      slug: 'stylist-oshiro-media',
      date: '2026.03.25',
      title: 'スタイリスト大城出演メディア情報',
      titleEn: 'Stylist Oshiro — Media Appearance',
      body: `k.e.y hair & make 原宿店のスタイリスト、大城が雑誌『HAIR CATALOG TOKYO 2026 Spring』に掲載されました。\n\n今回のフィーチャーでは、k.e.y のシグネチャーテクニックであるグラデーションカラーを中心に、10スタイルを提案しています。\n\n書店・コンビニエンスストアにて好評発売中です。`,
    },
    {
      slug: 'cancel-policy',
      date: '2026.02.15',
      title: 'キャンセルポリシーのご案内',
      titleEn: 'Cancellation Policy Update',
      body: `平素よりk.e.y hair & make をご利用いただきありがとうございます。\n\n誠に勝手ながら、2026年3月1日よりキャンセルポリシーを改定いたします。\n\n【改定内容】\n・前日キャンセル：施術料金の30%\n・当日キャンセル・無断キャンセル：施術料金の50%\n\nご予約のお客様には、前日にリマインドのLINEメッセージをお送りしています。何卒ご理解のほどよろしくお願いいたします。`,
    },
    {
      slug: 'year-end-2025',
      date: '2025.11.21',
      title: '年末年始の営業のお知らせ',
      titleEn: 'Year-End Holiday Hours',
      body: `年末年始の営業時間についてお知らせします。\n\n【全店共通】\n・12月28日（土）：通常営業\n・12月29日（日）〜1月3日（金）：休業\n・1月4日（土）：通常営業再開\n\nご予約はホットペッパービューティーまたはLINEにてお受けしております。年内のご予約はお早めに。`,
    },
    {
      slug: 'ginza-maison-open',
      date: '2024.02.14',
      title: '新店舗「k.e.y GINZA_maison」オープンのお知らせ',
      titleEn: 'k.e.y GINZA_maison Opening',
      body: `2024年3月1日（金）、k.e.y hair & make の三店舗目となる「k.e.y GINZA_maison」が銀座3丁目にオープンします。\n\n銀座3-10-7ビルの9階、大きな窓から東京の街を望むこの場所は、k.e.y が考える「カラーをまとう体験」を最も純粋に体現した空間です。\n\nオープン記念として、3月中のご予約を承り中です。詳しくはホットペッパービューティーをご確認ください。`,
    },
  ],

  prices: {
    categories: ['Cut', 'Cut + Color', 'Gradation Color', 'Bleach Color', 'Premium Bleach', 'Treatment', 'Head Spa', 'Perm', 'Straightening', "Men's Cut"],
    ranks: ['Designer', 'Top Designer', 'Director'],
    table: {
      'Cut':               ['¥6,600', '¥7,150', '¥7,700'],
      'Cut + Color':       ['¥14,300~', '¥14,850~', '¥15,400~'],
      'Gradation Color':   ['¥18,000~', '¥19,000~', '¥20,000~'],
      'Bleach Color':      ['¥8,800~', '¥9,350~', '¥9,900~'],
      'Premium Bleach':    ['¥11,000~', '¥11,550~', '¥12,100~'],
      'Treatment':         ['¥3,300~', '¥6,050~', '¥11,000~'],
      'Head Spa':          ['¥4,400~', '¥4,400~', '¥4,400~'],
      'Perm':              ['¥15,400~', '¥15,950~', '¥16,500~'],
      'Straightening':     ['¥23,100~', '¥23,650~', '¥24,200~'],
      "Men's Cut":         ['¥5,500~', '¥6,050~', '¥6,600~'],
    },
    notes: [
      '表示価格はすべて税込みです。',
      'ロングヘアー（鎖骨以上）は別途¥1,100~の追加料金が発生します。',
      '学生の方は学生証をご提示いただくと10%オフになります（一部メニュー対象外）。',
      '薬剤・施術の組み合わせによって価格は変動します。詳しくはカウンセリング時にご確認ください。',
    ],
  },
};
