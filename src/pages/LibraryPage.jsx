import SEO from '../components/SEO';
import { books } from '../data/library';

export default function LibraryPage() {
  return (
    <>
      <SEO
        title="Library"
        description="The verified Anthony Covington title, Ark of Bones, in the paperback and ebook editions published on Lulu."
        path="/library"
      />

      <header className="editorial-mast">
        <p className="eyebrow">Library</p>
        <h1>Tony's books.</h1>
        <p className="table-mast-copy">Only the verified title is listed. Paperback and ebook are the same book. This page is not checkout.</p>
        <div className="editorial-rule" aria-hidden="true"><span /></div>
      </header>

      <section className="content-band library-list">
        {books.map((book) => (
          <article className="library-entry" key={book.id}>
            <img
              src={book.cover}
              alt={book.coverAlt}
              width={book.coverWidth}
              height={book.coverHeight}
            />
            <div>
              <p className="eyebrow">{book.author}</p>
              <h2>{book.title}</h2>
              <p>{book.summary}</p>
              {book.editions.map((edition) => (
                <section className="library-edition" key={edition.format}>
                  <h3>{edition.format}</h3>
                  <dl className="editorial-spec-list">
                    <div><dt>Published</dt><dd>{edition.published}</dd></div>
                    <div><dt>Pages</dt><dd>{edition.pages}</dd></div>
                    <div><dt>Binding</dt><dd>{edition.binding}</dd></div>
                    {edition.dimensions ? <div><dt>Size</dt><dd>{edition.dimensions}</dd></div> : null}
                    <div><dt>Language</dt><dd>{edition.language}</dd></div>
                    <div><dt>ISBN</dt><dd>{edition.isbn}</dd></div>
                  </dl>
                  <a className="button button--gold" href={edition.href} target="_blank" rel="noopener noreferrer">{edition.linkLabel}</a>
                </section>
              ))}
              <p className="editorial-caption">No second title is listed. Price stays on the publisher page.</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
