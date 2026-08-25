import './App.css'
import portrait from './me.jpg'
import { capabilityGroups, careerTracks, contactLinks, impactStories, personalSignals } from './content'

const externalProps = (link) => link.external ? { target: '_blank', rel: 'noreferrer noopener' } : {}

function SectionHeading({ route, title, intro, titleId = `${route}-title` }) {
  return <div className="section-heading"><p className="route-label">GET /portfolio/{route}</p><div className="section-heading__copy"><h2 id={titleId}>{title}</h2>{intro && <p>{intro}</p>}</div></div>
}

function ContactLink({ link, className = '' }) {
  return <a className={className} href={link.href} download={link.download || undefined} {...externalProps(link)}>{link.label}<span aria-hidden="true">{link.external ? ' ↗' : ' →'}</span></a>
}

function ImpactStory({ story, featured }) {
  return <article className={`impact-card${featured ? ' impact-card--featured' : ''}`}>
    <div className="card-topline"><span>{story.index}</span><span>{story.eyebrow}</span></div>
    <h3>{story.title}</h3><p className="impact-card__summary">{story.summary}</p>
    {story.outcomes && <dl className="metrics">{story.outcomes.map((item) => <div className="metric" key={item.label}><dt>{item.value}</dt><dd>{item.label}</dd></div>)}</dl>}
    {story.systems && <div className="system-list">{story.systems.map((system) => <div className="system" key={system.name}><p className="system__name">{system.name}</p><p>{system.detail}</p></div>)}</div>}
    {story.detail && <p className="impact-card__detail">{story.detail}</p>}
  </article>
}

function TimelineEntry({ entry }) {
  return <li className="timeline-entry"><div className="timeline-entry__marker" aria-hidden="true" /><div className="timeline-entry__head"><div><p className="timeline-entry__employer">{entry.employer}</p><h3>{entry.role}</h3></div><time>{entry.dates}</time></div><p className="timeline-entry__mode">{entry.mode}</p><p>{entry.summary}</p></li>
}

function RequestPath() {
  return <div className="request-path" aria-hidden="true"><span className="request-path__label request-path__label--start">request</span><span className="request-path__node request-path__node--start" /><span className="request-path__line"><span className="request-path__packet" /></span><span className="request-path__node request-path__node--middle" /><span className="request-path__label request-path__label--middle">query</span><span className="request-path__line request-path__line--second"><span className="request-path__packet request-path__packet--second" /></span><span className="request-path__node request-path__node--end" /><span className="request-path__label request-path__label--end">response</span></div>
}

function App() {
  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header className="site-header"><div className="shell site-header__inner">
      <a className="wordmark" href="#top" aria-label="Michael Muniz, back to top"><span className="wordmark__mark" aria-hidden="true">MM</span><span className="wordmark__name">Michael Muniz</span></a>
      <p className="header-status"><span className="status-dot" aria-hidden="true" />Available now</p>
      <nav aria-label="Primary navigation"><a href="#impact">Impact</a><a href="#timeline">Timeline</a><a href="#capabilities">Capabilities</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
    </div></header>

    <main id="main-content" tabIndex="-1">
      <section className="hero shell" id="top" aria-labelledby="hero-title">
        <div className="hero__content"><p className="eyebrow">Backend systems / platform engineering</p><h1 id="hero-title">Michael Muniz builds the backend systems products rely on.</h1><p className="hero__lede">Senior backend and platform engineer focused on APIs, data systems, cloud delivery, and the operational details that keep software moving.</p>
          <div className="availability-panel"><span className="status-dot" aria-hidden="true" /><p><strong>Immediately available</strong><span>for backend/platform roles and select contract work.</span></p></div>
          <div className="hero__actions" aria-label="Primary contact actions"><ContactLink link={contactLinks.email} className="button button--primary" /><ContactLink link={contactLinks.resume} className="button button--secondary" /></div>
          <div className="hero__socials"><span>Elsewhere</span><ContactLink link={contactLinks.linkedin} /><ContactLink link={contactLinks.github} /></div>
        </div>
        <div className="hero__visual"><RequestPath /><figure className="portrait-card"><div className="portrait-card__toolbar" aria-hidden="true"><span>profile.image</span><span className="portrait-card__state">ready</span></div><img src={portrait} alt="Michael Muniz, backend software engineer" width="800" height="800" /><figcaption><span>Backend &amp; platform</span><span>Remote</span></figcaption></figure></div>
      </section>

      <section className="section shell" id="impact" aria-labelledby="impact-title"><SectionHeading route="impact" title="Impact Stories" intro="Professional outcomes shaped by technical ownership, practical tradeoffs, and production delivery." /><div className="impact-grid">{impactStories.map((story, index) => <ImpactStory story={story} featured={index === 0} key={story.title} />)}</div></section>

      <section className="section shell" id="timeline" aria-labelledby="timeline-title"><SectionHeading route="timeline" title="Career Timeline" intro="A concise view of full-time and contract work, with concurrent engagements kept explicit." /><div className="timeline-console">
        <div className="timeline-track timeline-track--primary"><div className="track-label"><span className="track-label__index">A</span><div><h3>{careerTracks.primary.label}</h3><p>Primary role sequence</p></div></div><ol className="timeline-list">{careerTracks.primary.entries.map((entry) => <TimelineEntry entry={entry} key={`${entry.employer}-${entry.dates}`} />)}</ol></div>
        <div className="timeline-track timeline-track--concurrent"><div className="track-label"><span className="track-label__index">B</span><div><h3>{careerTracks.concurrent.label}</h3><p>{careerTracks.concurrent.note}</p></div></div><ol className="timeline-list">{careerTracks.concurrent.entries.map((entry) => <TimelineEntry entry={entry} key={`${entry.employer}-${entry.dates}`} />)}</ol></div>
        <div className="education-record"><p className="route-label">EDU / foundation</p><div><p className="timeline-entry__employer">{careerTracks.education.employer}</p><h3>{careerTracks.education.role}</h3></div><time>{careerTracks.education.dates}</time></div>
      </div></section>

      <section className="section shell" id="capabilities" aria-labelledby="capabilities-title"><SectionHeading route="capabilities" title="Capabilities" intro="Tools used to build, move, and operate backend systems—grouped by where they create leverage." /><div className="capability-grid">{capabilityGroups.map((group, index) => <article className="capability-group" key={group.label}><div className="card-topline"><span>0{index + 1}</span><span>{group.label}</span></div><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

      <section className="section shell" id="about" aria-labelledby="about-title"><SectionHeading route="personal-signals" title="Personal Signals" titleId="about-title" intro="A few details from outside the delivery queue." /><div className="signal-grid">{personalSignals.map((signal, index) => <article className="signal-card" key={signal.title}><span className="signal-card__number">0{index + 1}</span><p className="route-label">{signal.label}</p><h3>{signal.title}</h3><p>{signal.detail}</p></article>)}</div></section>
    </main>

    <footer className="site-footer" id="contact"><div className="shell footer-grid"><div><p className="eyebrow">Connection ready</p><h2>Have a backend challenge worth untangling?</h2><p>I’m immediately available for backend/platform roles and select contract work. Let’s talk about what needs to ship.</p></div><div className="footer-actions" aria-label="Contact links"><ContactLink link={contactLinks.email} /><ContactLink link={contactLinks.linkedin} /><ContactLink link={contactLinks.github} /><ContactLink link={contactLinks.resume} /></div><p className="footer-meta"><span>Michael Muniz</span><span>Backend &amp; Platform Engineer</span></p></div></footer>
  </>
}

export default App
