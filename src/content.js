export const contactLinks = {
  email: { label: 'Email Michael', href: 'mailto:michael.muniz94@gmail.com' },
  linkedin: { label: 'LinkedIn', href: 'https://linkedin.com/in/michael-muniz94', external: true },
  github: { label: 'GitHub', href: 'https://github.com/michaelm3', external: true },
  resume: { label: 'Download resume', href: '/michael-muniz-resume.pdf', download: true },
}

export const impactStories = [
  {
    index: '01', eyebrow: 'OnSched / delivery', title: 'OnSched v2 delivery and client migrations',
    summary: 'Leading backend delivery on a three-engineer team, turning product requirements into API architecture, reviews, and sprint execution.',
    outcomes: [{ value: '20+', label: 'production features and endpoints shipped' }, { value: '100+', label: 'clients migrated to OnSched v2' }],
    detail: 'The work spans scheduling and availability, advanced SQL CTE availability queries, and Google Cloud CI/CD across development, staging, and production.',
  },
  {
    index: '02', eyebrow: 'OnSched / efficiency', title: 'Database and cloud cost-performance work',
    summary: 'Moved Azure and MSSQL monthly spend from about $10K to $5.5K while improving CPU and query performance.',
    outcomes: [{ value: '~$10K', label: 'previous monthly spend' }, { value: '$5.5K', label: 'new monthly spend' }],
    detail: 'A production-minded balance of database performance, operational cost, and reliable delivery at OnSched.',
  },
  {
    index: '03', eyebrow: 'Media / event systems', title: 'Event-driven media systems',
    summary: 'Built backend APIs and asynchronous media workflows across two distinct products and cloud environments.',
    systems: [
      { name: 'SpeakSynk · AWS', detail: 'Node.js and TypeScript APIs with Kafka, Step Functions, Lambda, and real-time status updates for AI video translation used by 15–20 beta users.' },
      { name: 'Arbelos Interactive · Google Cloud', detail: 'NestJS and TypeScript APIs with Pub/Sub and Cloud Functions pipelines for media processing, database synchronization, and Contentful integration.' },
    ],
  },
]

export const careerTracks = {
  primary: {
    label: 'Primary · full-time / contract',
    entries: [
      { role: 'Lead Software Engineer', employer: 'OnSched', dates: 'Dec 2025–present', mode: 'Remote · full-time / contract', summary: 'Leads v2 backend delivery, API architecture, reviews, and sprint execution on a three-engineer team.' },
      { role: 'Software Developer', employer: 'OnSched', dates: 'Jun 2024–Dec 2025', mode: 'Remote · full-time / contract', summary: 'Served as sole backend owner for v2 during acquisition, designing Node.js and Express APIs and migration workflows while resolving 50+ client support tickets monthly and shipping urgent fixes and scheduling features.' },
      { role: 'Software Developer', employer: 'SpeakSynk', dates: 'Jun 2023–Apr 2024', mode: 'Remote · full-time / contract', summary: 'Built Node.js and TypeScript APIs and AWS event-processing workflows for AI video translation used by 15–20 beta users.' },
    ],
  },
  concurrent: {
    label: 'Concurrent part-time contract', note: 'This ongoing role overlaps the primary roles shown above.',
    entries: [{ role: 'Software Developer', employer: 'Arbelos Interactive', dates: 'Apr 2023–present', mode: 'Remote · part-time / contract', summary: 'Builds NestJS and TypeScript APIs for a multi-tenant content streaming platform, with Google Cloud Pub/Sub and Cloud Functions pipelines for media processing, database synchronization, and Contentful integration.' }],
  },
  education: { role: 'Fullstack Web Development / Computer Programming', employer: 'Flatiron School', dates: 'Nov 2018–Mar 2019' },
}

export const capabilityGroups = [
  { label: 'Languages / frameworks', items: ['JavaScript/TypeScript', 'SQL', 'Python', 'React/Next.js', 'Express', 'NestJS'] },
  { label: 'Cloud / delivery', items: ['Google Cloud', 'AWS', 'Firebase', 'Git', 'Docker', 'Terraform'] },
  { label: 'Data / systems / integrations', items: ['PostgreSQL', 'MySQL', 'NoSQL', 'Kafka', 'Redis', 'Stripe'] },
]

export const personalSignals = [
  { label: 'Daily driver', title: 'Arch Linux', detail: 'I enjoy understanding and shaping the systems I use every day.' },
  { label: 'Knowledge shared', title: 'Teaching coding', detail: 'I like helping others make difficult technical ideas feel approachable.' },
  { label: 'Off the clock', title: 'Playing video games', detail: 'A favorite way to reset, explore, and spend time with friends.' },
]
