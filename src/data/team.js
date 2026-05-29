/*
 * ─── TEAM DATA ───────────────────────────────────────────────────────────────
 * To add a new department: push a new object to `departments`.
 * To add a member inside a department: push to that department's `members` array.
 * Each member must have: initials, name, role, bio.
 * Optional: image (path to /images/...) — if provided, shown instead of initials.
 *
 * To add a thesis / research entry, push to the `theses` array at the bottom.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const departments = [
  {
    title: 'الإدارة التنفيذية',
    color: '#7B35D0',
    desc: 'يقود الأكاديمية فريق من القادة المتخصصين الذين يجمعون بين الخبرة الأكاديمية والرؤية الاستراتيجية.',
    members: [
      { initials: 'م.ع', name: 'المدير التنفيذي',    role: 'CEO / Founder',   bio: 'خبرة واسعة في الإرشاد الأكاديمي والتعليم الدولي.' },
      { initials: 'ن.م', name: 'نائب المدير العام',  role: 'Deputy Director', bio: 'متخصص في بناء الشراكات والعلاقات الدولية.' },
    ],
  },
  {
    title: 'المستشارون الأكاديميون',
    color: '#1B87E4',
    desc: 'فريق من المستشارين الأكاديميين المتخصصين في توجيه الطلاب نحو التخصصات والجامعات المناسبة.',
    members: [
      { initials: 'م.أ', name: 'مستشار أكاديمي أول', role: 'Senior Academic Advisor', bio: 'متخصص في قبولات الجامعات الأوروبية والآسيوية.' },
      { initials: 'س.ر', name: 'مستشار التخصصات',   role: 'Specialization Advisor',  bio: 'خبير في تحليل مسارات التخصص واحتياجات سوق العمل.' },
      { initials: 'ه.م', name: 'مستشارة أكاديمية',  role: 'Academic Advisor',        bio: 'خبرة في الإرشاد الطلابي وبناء الملفات الأكاديمية.' },
    ],
  },
  {
    title: 'فريق القبولات والمنح',
    color: '#00C9C8',
    desc: 'فريق متخصص في إدارة ملفات التقديم والبحث عن المنح الدراسية المناسبة.',
    members: [
      { initials: 'ق.م', name: 'مسؤول القبولات', role: 'Admissions Officer',    bio: 'متخصص في متابعة طلبات القبول لدى الجامعات الدولية.' },
      { initials: 'م.م', name: 'مسؤول المنح',    role: 'Scholarships Officer', bio: 'خبير في البحث عن المنح الدراسية وإعداد ملفاتها.' },
    ],
  },
  {
    title: 'فريق الدعم الطلابي',
    color: '#9B59B6',
    desc: 'فريق مكرس لمتابعة الطلاب ودعمهم من التسجيل حتى الاستقرار في وجهتهم الدراسية.',
    members: [
      { initials: 'د.ط', name: 'مسؤول دعم طلابي', role: 'Student Support',    bio: 'يتابع الطلاب ويقدم الدعم في كل مراحل رحلتهم.' },
      { initials: 'إ.م', name: 'مسؤولة متابعة',   role: 'Follow-up Officer', bio: 'متخصصة في تنسيق السفر والترتيبات اللوجستية.' },
    ],
  },
  {
    title: 'فريق العلاقات والشراكات',
    color: '#E67E22',
    desc: 'يبني هذا الفريق جسور التعاون مع الجامعات الدولية والمؤسسات التعليمية.',
    members: [
      { initials: 'ع.ش', name: 'مدير الشراكات',          role: "Partnerships Manager", bio: 'بناء وتطوير شبكة الشراكات مع المؤسسات الدولية.' },
      { initials: 'ت.د', name: 'مسؤول العلاقات الدولية', role: "Int'l Relations",      bio: 'التواصل مع الجامعات الدولية وإدارة الاتفاقيات.' },
    ],
  },
  {
    title: 'فريق الإعلام والتسويق',
    color: '#16A085',
    desc: 'يُعرِّف هذا الفريق بخدمات الأكاديمية ويبني حضورها الرقمي المتميز.',
    members: [
      { initials: 'ت.م', name: 'مدير التسويق',          role: 'Marketing Manager', bio: 'استراتيجيات الإعلام الرقمي وبناء الهوية البصرية.' },
      { initials: 'م.ر', name: 'مسؤول المحتوى الرقمي', role: 'Content Creator',   bio: 'إنتاج المحتوى التعليمي والتسويقي للأكاديمية.' },
    ],
  },
];

/*
 * ─── THESES / RESEARCH ───────────────────────────────────────────────────────
 * Add published theses, research papers, or academic outputs here.
 * Fields: title, author, year, category, desc, link (optional)
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const theses = [
  // Example entry — delete or replace:
  // {
  //   title: 'أثر برامج الإرشاد الأكاديمي على معدلات القبول الجامعي',
  //   author: 'فريق البحث — Global Gate Academy',
  //   year: '2024',
  //   category: 'إرشاد أكاديمي',
  //   desc: 'دراسة تحليلية لنتائج برامج الإرشاد الأكاديمي وأثرها على تحسين فرص قبول الطلاب.',
  //   link: '',
  // },
];
