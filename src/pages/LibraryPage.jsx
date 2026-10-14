import SEO from '../components/SEO';
import { books } from '../data/library';

export default function LibraryPage() {
  return (
    <>
      <SEO
        title="Library"
        description="Books by Anthony Covington, including Ark of Bones: Origins, Evolution, and Cultural Legacy of Dominoes, Spades, Euchre, and Booray."
        path="/library"
      />
      <header className="editorial-mast">
        <h1>Books by Anthony Covington</h1>
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
                  <a className="button button--gold" href={edition.href} target="_blank" rel="noopener noreferrer">{edition.format}</a>
                </section>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
