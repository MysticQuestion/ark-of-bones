import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const siteBase = 'https://www.arkofbones.com';
const bookUrl = 'https://www.lulu.com/shop/anthony-covington/ark-of-bones-origins-evolution-and-cultural-legacy-of-dominoes-spades-euchre-and-booray/paperback/product-zm72q7d.html?page=1&pageSize=4&q=ark+of+bones';

const socialLinks = [
  ['Facebook', 'https://www.facebook.com/profile.php?id=61572983318608'],
  ['Instagram', 'https://www.instagram.com/ark.of.bones/'],
  ['TikTok', 'https://www.tiktok.com/@arkofbones'],
  ['YouTube', 'https://www.youtube.com/@Ark_of_Bones']
];

const products = [
  {
    name: 'Ark of Bones - Embroidered Sweatshirt',
    category: 'Merch',
    price: '$90.00',
    image: 'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/9d5984b4-40fc-4481-b388-49dbc00bc6ea/11.png',
    description: 'Elevate your casual wardrobe with the Ark of Bones sweatshirt. Made from a soft cotton and polyester blend, this unisex sweatshirt features a standard collar and a relaxed fit for maximum comfort. The iconic Ark of Bones logo is embroidered on the front, adding a premium, long-lasting touch to a classic staple.',
    details: [
      'Type: Sweatshirt',
      'Brand: Vantage Varsity',
      'Gender: Unisex',
      'Collar Type: Standard collar',
      'Height: 26.5 in',
      'Width: 18.5 in',
      'Weight: 1.3 lbs',
      'Material: Cotton and polyester blend',
      'Embroidered front logo'
    ],
    note: 'A versatile, durable essential — perfect for layering, lounging, or showing off your Ark of Bones pride.'
  },
  {
    name: 'Big Six Bones - Long Sleeve Crew Neck',
    category: 'Big Six Bones Merch',
    price: '$40.00',
    image: 'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/49624525-9541-4009-afcd-7fc9ae785f0a/13.png',
    description: 'Stay comfortable and showcase your Ark of Bones pride with this classic long sleeve T-shirt. Made from 100% cotton, this shirt features a crew neck, long sleeves, and a relaxed unisex fit. The Big Six Bones logo is printed on the front, while the Ark of Bones logo is featured on the back, giving a bold, head-turning look.',
    details: [
      'Type: Long Sleeve T-Shirt',
      'Brand: Port & Company',
      'Gender: Men / Unisex',
      'Material: 100% Cotton'
    ]
  },
  {
    name: 'Domino Mother Fucker - Graphic Tee',
    category: 'Domino Mother Fucker Merch',
    price: '$25.00',
    image: 'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/8b08d37a-9290-48fa-96ae-cf535cc8e608/8.png',
    description: 'Soft, breathable 100% cotton tee with a crew neck and tear-away label for a clean, comfortable fit. A durable everyday essential featuring a bold printed design.',
    details: [
      'Unisex fit',
      'Taped neck and shoulders',
      'Printed front design',
      'Machine washable'
    ]
  },
  {
    name: 'Big Six Bones - Short Sleeved Tee',
    category: 'Big Six Bones Merch',
    price: '$25.00',
    image: 'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/7ee6ab93-5e51-40df-a118-7873f7686555/Add%2Ba%2Bheading%2B%283%2Bx%2B5%2Bin%29%2B%282000%2Bx%2B2000%2Bpx%29%2B%282%29.png',
    description: 'Soft, breathable 100% cotton tee with a crew neck and tear-away label for a clean, comfortable fit. A durable everyday essential featuring a bold printed design.',
    details: [
      'Unisex fit',
      'Taped neck and shoulders',
      'Printed front design',
      'Machine washable'
    ]
  },
  {
    name: 'Domino Mother Fucker - Embroidered Beanie',
    category: 'Domino Mother Fucker Merch',
    price: '$32.00',
    image: 'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/ab6fe276-cfd5-4f82-833c-769e7e82245f/download.png',
    description: 'Stay warm in style with the DMF embroidered beanie. Made from 100% acrylic with a soft, insulated 3M™ Thinsulate™ lining, this cuffed beanie combines comfort and function. The front features logo in detailed embroidery for a clean, elevated finish.',
    details: [
      'Exterior: 100% acrylic',
      'Internal lining: 3M™ Thinsulate™, insulated',
      'Embroidered front logo',
      'Cuffed design',
      'One size fits most'
    ],
    note: 'An essential piece for streetwear, merch, or casual style — loud, bold, and unapologetically DMF.'
  },
  {
    name: 'Ark of Bones - Beanie',
    category: 'Merch',
    price: '$32.00',
    image: 'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/6b49d4b7-231a-4d22-858a-0972410377ea/preview.jpeg',
    description: 'Stay warm in style with the Ark of Bones embroidered beanie. Made from 100% acrylic with a soft, insulated 3M™ Thinsulate™ lining, this cuffed beanie combines comfort and function. The front features the Ark of Bones logo in detailed embroidery for a clean, elevated finish.',
    details: [
      'Exterior: 100% acrylic',
      'Internal lining: 3M™ Thinsulate™, insulated',
      'Embroidered front logo',
      'Cuffed design',
      'One size fits most'
    ],
    note: 'An easy everyday essential that pairs perfectly with any outfit — understated, warm, and unmistakably Ark of Bones.'
  }
];

const faqs = [
  ['What is the Ark of Bones?', 'Not just a table. A whole cultural broadcast studio where domino legends are born and trash talk is archived for future generations. Think ESPN meets cookout'],
  ['What makes it different from a regular domino table?', 'Cameras under each player. Mics for that juicy table talk. LED glow. Cup holders for spirits and soda. This table got more features than your ex got excuses.'],
  ['Why\'s it called "Ark of Bones"?', 'Because it carries the truth. Just like the Ark of the Covenant carried law, this Ark carries laughs, legacy, and the last domino you should\'ve never played.'],
  ['Got payment plans?', 'Yes. Financing that won\'t leave your wallet wheezing. \'Cause everybody deserves a seat at the table.'],
  ['Can I customize mine?', 'Choose your colors, engrave your nickname, add custom lighting, logos, or even a phrase like: \'Don\'t Talk Across the Table, Fool.\''],
  ['How do I order one?', 'Slide into our DMs or go to arkofbones.com. Drop a deposit, and we\'ll get to building. Serious inquiries only-this ain\'t Craigslist.'],
  ['How long until I get it?', 'Around 4-6 weeks. We don\'t rush greatness-this ain\'t no microwave pizza table.'],
  ['Is the table handmade or custom made?', 'Each Ark of Bones table is handcrafted like a grandma\'s quilt-built with precision, care, and pride. Every screw got a story.'],
  ['Do y\'all ship across the U.S.?', 'From ATL to L.A.-if your address got a zip code, we got you.'],
  ['Can I play Spades or other games on it?', 'Yes indeed. Spades, Tonk, Booray, Poker, or even just use it to eat wings while y\'all argue about who really won last time.'],
  ['Can I move it around?', 'It\'s portable with a squad, but not lightweight. Built for big moments, not bachelor pads with wobbly floors.'],
  ['Can I take it outside?', 'Yes sir. Cookouts, family reunions, parking lots-just don\'t leave it in the rain unless you name it Noah.'],
  ['Can I see one before I buy?', 'Catch us at vendor events, private demos, or pop-ups. Bring your eyes. And maybe your bones.'],
  ['Will it make me better at dominoes?', 'No. But you gon\' look cold-blooded. And sometimes, that\'s enough.']
];

const videoTitles = [
  'Sunday Nights with AOB',
  'AOB Game Night',
  'What is Ark of Bones?',
  'How Ark of Bones Works',
  'Game Night'
];

function ContactBlock() {
  return (
    <section className="contact-block" id="contact">
      <h2>Contact Us:</h2>
      <p><a href="mailto:info@arkofbones.com">info@arkofbones.com</a></p>
      <p><a href="tel:+19515990214">(951)599--0214 (office)</a></p>
      <h3>Follow Us:</h3>
      <div className="socials">
        {socialLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} loading="lazy" />
      <div className="product-body">
        <p className="eyebrow">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <ul>
          {product.details.map(detail => <li key={detail}>{detail}</li>)}
        </ul>
        {product.note ? <p>{product.note}</p> : null}
        <strong>{product.price}</strong>
        <a className="button secondary" href={`${siteBase}/merch`}>Merch</a>
      </div>
    </article>
  );
}

function App() {
  return (
    <main>
      <header className="hero" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a href="#home" className="brand">Ark of Bones</a>
          <div>
            <a href="#ark-of-bones">Ark of Bones</a>
            <a href="#domino-mother-fucker">Domino Mother Fucker</a>
            <a href="#big-six-bones">Big Six Bones</a>
            <a href="#events">Events</a>
            <a href="#watch">Watch</a>
            <a href="#merch">Merch</a>
            <a href={bookUrl}>Books</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <section className="hero-grid">
          <div>
            <h1>Redefining the Game.Dominating the World.</h1>
            <p>For over 900 years, dominoes have brought people together—across cultures, continents, and communities. From its origins in ancient China to the tables of the Caribbean, the porches of the American South, and cafés throughout Europe and Latin America, the game has always lived where people gather. In barbershops, community centers, backyards, and street corners, dominoes has thrived as a shared language of competition, tradition, and connection.</p>
            <p>Ark of Bones is the umbrella for multiple domino communities and platforms, including Domino MF and Big Six Bones. Each represents a different expression of the same culture—live and recorded play, events, competition, and the stories that surround the game.</p>
            <p>Whether you’re here to watch, follow events, or engage with the broader domino community, this space exists to honor the history of the game while supporting the people who keep it alive today.</p>
            <p>Pull up a seat, follow the action, and be part of the culture.</p>
            <div className="actions">
              <a className="button primary" href="#contact">Contact Us</a>
              <a className="button secondary" href="#ark-of-bones">Learn More</a>
            </div>
          </div>
        </section>
      </header>

      <section className="section split" id="ark-of-bones">
        <div>
          <p className="eyebrow">Ark of Bones</p>
          <h2>Friends, Family, and Fun ReDiscovered</h2>
          <h3>Elevate the Game</h3>
          <p>Ark of Bones isn’t just a place to play—it’s a reimagining of how domino culture is experienced. Rooted in centuries of tradition and shaped by modern storytelling, Ark of Bones exists to honor the strategy, competition, and community that surround the game.</p>
          <p>Through live play, recorded matches, events, and shared moments, Ark of Bones connects players and fans across generations and geographies. It’s a space where the game is respected, the culture is preserved, and the experience continues to evolve.</p>
          <p>Whether you’re a lifelong player or just learning the rhythm of the tiles, Ark of Bones is about more than the table—it’s about the people around it.</p>
          <p>A tribute to the past. A bridge to the future. Built for the culture.</p>
          <h3>Honor the Culture</h3>
          <p>Make your event unforgettable with the ultimate domino experience. Whether it’s a big celebration or an intimate gathering, our high-tech table sets the perfect mood. Connect multiple screens, stream live games, and bring friends and family together—no matter where they are.</p>
          <h3>Elevate the Fun.</h3>
          <a className="button primary" href="#contact">Contact Us</a>
        </div>
        <img src="https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/3395c4cf-2c85-4047-afee-12412bba1003/AOB-55.jpg" alt="Handcrafted Ark of Bones domino table at popular tournament" loading="lazy" />
      </section>

      <section className="section split alternate" id="about">
        <img src="https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/1741547436771-12219F2375LS9PLQXXZV/ark%2Bof%2Bbones%2Bwood%2Blogo%2Bon%2Ban%2Boffice%2Bwall.jpg" alt="The Ark of Bones custom made wood logo" loading="lazy" />
        <div>
          <h2>It’s More Than a Game. It’s a Legacy</h2>
          <p>The Ark of Bones isn't just a domino table—it's a symbol of history, culture, and competition. Inspired by the sacred meaning of “Ark” across Judaism, Christianity, and Islam, it carries the spirit of preservation, protection, and generational wisdom.</p>
          <p>Just as ancient arks safeguarded sacred treasures, The Ark of Bones protects the legacy of dominoes—a game of skill, strategy, and community. In this arena, "bones" are more than game pieces—they're stories, rivalries, and tradition.</p>
          <p>Whether you're trading laughter or laying down fierce moves, The Ark transforms every match into a moment worth remembering. It’s not just a table—it’s a tribute, a battleground, and a gathering place. The game of bones has never had a home quite like this.</p>
          <a className="button primary" href="#contact">Join the Movement</a>
        </div>
      </section>

      <section className="section" id="domino-mother-fucker">
        <p className="eyebrow">Domino Mother Fucker</p>
        <h2>Domino Mother Fucker</h2>
        <p>Ark of Bones continues to connect, create, and play — with Domino Mother Fucker leading the charge.</p>
        <p>When the last bone hits and the world tilts for a second, call it like it happened: Domino Mother Fucker. For the winners who slam the table, the friends who laugh, and the rivals who can’t help but clap this phrase is the unofficial anthem of every comeback, blowout, and perfect play. Stick it on a tee, drop it in the chat, and never apologize for a victory.</p>
        <div className="actions">
          <a className="button primary" href="#merch">Merch</a>
          <a className="button secondary" href="#watch">Watch</a>
          <a className="button secondary" href="#events">Events</a>
        </div>
      </section>

      <section className="section" id="big-six-bones">
        <p className="eyebrow">Big Six Bones</p>
        <h2>BIG SIX BONES</h2>
        <p>Ark of Bones keeps the games rolling — presenting Big Six Bones.</p>
        <p>Classic, loud, and beloved,  that’s Big Six Bones the American domino game that turns living rooms into arenas. Whether you’re playing family-style at Sunday dinner or going toe-to-toe in a backyard showdown, Big Six Bones brings the rules everyone knows and the drama everyone loves. Tap in for quick rounds, big plays, and that perfect double-six flex, this is dominoes done right.</p>
        <div className="actions">
          <a className="button primary" href="#events">Events</a>
          <a className="button secondary" href="#watch">Watch</a>
          <a className="button secondary" href="#merch">Merch</a>
        </div>
      </section>

      <section className="section" id="events">
        <p className="eyebrow">Events</p>
        <h2>Upcoming Events</h2>
        <div className="event-grid">
          <article className="event-card">
            <span>Jan</span>
            <strong>1</strong>
            <h3>Join Us Live</h3>
            <p>Thursday, January 1, 2026</p>
            <p>4:30 PM 5:30 PM</p>
            <p>Information coming soon</p>
            <a className="button secondary" href={`${siteBase}/events`}>View Event →</a>
          </article>
          <article className="event-card">
            <h3>Events</h3>
            <p>Date: 02.01.26</p>
            <p>Ark of Bones Production Studio, Inland Empire, CA</p>
            <a className="button secondary" href={`${siteBase}/events-1`}>RSVP</a>
          </article>
          <article className="event-card">
            <h3>Events</h3>
            <p>Date: 02.22.26</p>
            <p>Ark of Bones Production Studio, Inland Empire, CA</p>
            <a className="button secondary" href={`${siteBase}/events-2`}>RSVP</a>
          </article>
        </div>
      </section>

      <section className="section" id="watch">
        <p className="eyebrow">Watch</p>
        <h2>Watch Live</h2>
        <p>Tune in Every Sunday for 6p - 9p to watch live domino action! Catch every play, every win, and every moment.</p>
        <a className="button primary" href={`${siteBase}/videos-2`}>Join Us</a>
        <div className="watch-grid">
          <article>
            <h3>Player & Game Stats</h3>
            <table>
              <thead><tr><th>Player</th><th>Wins</th><th>Losses</th><th>Points</th></tr></thead>
              <tbody>
                <tr><td>Alice</td><td>8</td><td>4</td><td>32</td></tr>
                <tr><td>Bob</td><td>5</td><td>5</td><td>20</td></tr>
                <tr><td>Carlos</td><td>6</td><td>3</td><td>25</td></tr>
              </tbody>
            </table>
          </article>
          <article>
            <h3>Video Archive</h3>
            <ul>
              {videoTitles.map(title => <li key={title}>{title}</li>)}
            </ul>
          </article>
          <article>
            <h3>Big Six Bones Fucker Watch</h3>
            <p>Your front-row seat to every game.</p>
            <h4>COMING SOON</h4>
          </article>
        </div>
      </section>

      <section className="section" id="qa">
        <p className="eyebrow">Q&A</p>
        <h2>Have Questions? We Have Answers!</h2>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="merch">
        <p className="eyebrow">Store</p>
        <h2>Shop the Collection</h2>
        <h3>Merch</h3>
        <div className="filters">
          <span>All</span>
          <span>Domino Mother Fucker Merch</span>
          <span>Big Six Bones Merch</span>
        </div>
        <div className="products">
          {products.map(product => <ProductCard key={product.name} product={product} />)}
        </div>
      </section>

      <section className="section split" id="books">
        <div>
          <p className="eyebrow">Books</p>
          <h2>Books</h2>
          <a className="button primary" href={bookUrl}>Books</a>
        </div>
      </section>

      <section className="section split alternate" id="contact-page">
        <img src="https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/3395c4cf-2c85-4047-afee-12412bba1003/AOB-55.jpg" alt="Ark of bones domino table in action" loading="lazy" />
        <div>
          <h2>Let’s Connect. Let’s Play.</h2>
          <p>Have questions or ready to bring the Ark of Bones to your next event? Reach out today and let’s make it happen!</p>
        </div>
      </section>

      <ContactBlock />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
