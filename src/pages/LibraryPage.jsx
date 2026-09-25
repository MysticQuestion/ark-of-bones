import SEO from '../components/SEO';
import { ASSETS } from '../config/brand';
import { books } from '../data/library';

export default function LibraryPage() {
  return (
    <>
      <SEO
        title="Library"
        description="Books written by Anthony Covington and published under Ark of Bones. Only verified titles are listed."
        path="/library"
      />

      <header className="editorial-mast">
        <p className="eyebrow">Library</p>
        <h1>Tony's books.</h1>
        <p className="table-mast-copy">Only titles that can be verified are listed. This is not a merchandise catalog and it is not checkout.</p>
        <div className="editorial-rule" aria-hidden="true"><span /></div>
      </header>

      <section className="content-band library-list">
        {books.map((book) => (
          <article className="library-entry" key={book.id}>
            <img
              src={ASSETS.mark}
              alt="Ark of Bones mark. A book cover is not stored for this title."
              width="384"
              height="284"
            />
            <div>
              <p className="eyebrow">{book.author}</p>
              <h2>{book.title}</h2>
              <p>{book.summary}</p>
              <dl className="editorial-spec-list">
                <div><dt>Published</dt><dd>{book.published}</dd></div>
                <div><dt>Pages</dt><dd>{book.pages}</dd></div>
                <div><dt>Binding</dt><dd>{book.binding}</dd></div>
                <div><dt>Size</dt><dd>{book.dimensions}</dd></div>
                <div><dt>Language</dt><dd>{book.language}</dd></div>
              </dl>
              <a className="button button--gold" href={book.href} target="_blank" rel="noopener noreferrer">View the publisher page</a>
              <p className="editorial-caption">Cover art and an ISBN are not in the site archive. No price is shown here because this page is not the seller.</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
