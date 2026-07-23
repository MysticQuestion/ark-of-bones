export default function PageHero({ eyebrow, title, description, image, children, compact = false, theme = 'dark' }) {
  const style = image ? { '--page-hero-image': `url("${image}")` } : undefined;

  return (
    <section className={`page-hero page-hero--${theme}${compact ? ' page-hero--compact' : ''}`} style={style}>
      <div className="page-hero-content">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <p className="page-hero-description">{description}</p> : null}
        {children ? <div className="hero-actions">{children}</div> : null}
      </div>
    </section>
  );
}
