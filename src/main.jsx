import React from 'react';
import { createRoot } from 'react-dom/client';
import { BookOpen, ShoppingBag, Trophy, Users, ScrollText, Flame } from 'lucide-react';
import './styles.css';

const shopBase = 'https://arkofbones.com';

const games = [
  {
    name: 'Dominoes',
    summary: 'The foundation: matching tiles, reading the board, managing tempo, and scoring through disciplined placement.',
    players: '2–4 players, usually singles or partners',
    objective: 'Empty your hand first or hold the lowest pip count when the round blocks.',
    setup: [
      'Place all dominoes facedown and shuffle them into the boneyard.',
      'Each player draws the agreed hand size. With a double-six set, 2 players commonly draw 7 tiles each; 4 players commonly draw 5–7 depending on house rules.',
      'The player with the highest double usually opens. If no one has a double, use the highest tile or redraw by agreement.'
    ],
    howToPlay: [
      'Play proceeds clockwise unless your house rule says otherwise.',
      'A legal play connects a tile to an open end with the same pip value.',
      'Doubles are usually placed crosswise and may create a strategic branch point depending on variant.',
      'If you cannot play, draw from the boneyard if drawing is allowed; otherwise pass.',
      'The round ends when one player dominoes, or when the board is blocked and no one can make a legal play.'
    ],
    scoring: [
      'In simple block dominoes, the winner scores the total remaining pips in opposing hands, or the lowest hand wins a blocked round.',
      'In point variants, scores may be awarded when open ends total a multiple such as 5.',
      'Set a target score before the match, commonly 100, 150, or 250.'
    ],
    strategy: [
      'Track suits that have already appeared so you know which numbers are scarce.',
      'Control board ends rather than simply dumping high tiles.',
      'Do not expose your only safe exit unless it materially improves your position.',
      'In partners, read your partner’s passes and protect their likely numbers.'
    ]
  },
  {
    name: 'Big Six Bones',
    summary: 'Ark of Bones’ signature culture game: fast table pressure, domino literacy, table talk, and competitive social rhythm.',
    players: 'Best with 2–4 players or partner teams',
    objective: 'Win rounds through legal tile play, board control, and clean scoring under the agreed Big Six house rules.',
    setup: [
      'Use a double-six domino set unless the event host specifies another set.',
      'Shuffle facedown and draw hands according to the table format.',
      'Agree on the scoring target, drawing rules, blocking rules, and whether table talk is limited before the first tile is played.'
    ],
    howToPlay: [
      'Open with the designated starter tile under house rules, often the highest double.',
      'Players connect matching ends and attempt to force opponents into passes or inefficient plays.',
      'A player unable to move must draw or pass according to the rule set announced before play.',
      'The round ends when a player goes out or the board locks.',
      'Tournament play should use a visible scorekeeper and consistent penalties for illegal plays, exposed tiles, or missed turns.'
    ],
    scoring: [
      'Use the official event score target or house target before play begins.',
      'A player or team that goes out usually collects the pips remaining in opposing hands.',
      'On a blocked board, lowest pip count takes the round; ties should be replayed or split according to the host rule.'
    ],
    strategy: [
      'Keep pressure on numbers opponents have already passed on.',
      'Preserve doubles until they either open the board or trap a player with poor distribution.',
      'Do not mistake speed for dominance; a fast hand can still lose control if it opens both opponent suits.',
      'Respect table etiquette: clean calls, no angle-shooting, no hidden tiles, no fake confusion.'
    ]
  },
  {
    name: 'Spades',
    summary: 'A contract-taking card game built on bidding accuracy, partner trust, and controlled aggression.',
    players: '4 players in two partnerships',
    objective: 'Bid how many tricks your team will win, then meet or exceed that contract without accumulating excessive bags.',
    setup: [
      'Use a standard 52-card deck. Spades are always trump.',
      'Deal all cards so each player receives 13.',
      'Each player bids a number of tricks. Partners’ bids combine into one team contract.'
    ],
    howToPlay: [
      'The player left of the dealer leads first. Players must follow suit if able.',
      'If unable to follow suit, a player may play any card, including a spade.',
      'Spades cannot be led until broken unless a player has only spades.',
      'Highest card in the led suit wins unless a spade is played; highest spade wins the trick.',
      'The trick winner leads the next trick.'
    ],
    scoring: [
      'A team that makes its bid scores 10 points per bid trick plus 1 point for each overtrick.',
      'Overtricks are bags; commonly, 10 bags create a 100-point penalty.',
      'A failed contract loses 10 points per bid trick.',
      'Nil bids usually score +100 if successful and -100 if failed, subject to house rules.'
    ],
    strategy: [
      'Bid your hand, not your ego.',
      'Protect your partner’s nil before chasing extra tricks.',
      'Count spades and track high cards in every suit.',
      'Avoid reckless bags when your team is near the bag penalty.'
    ]
  },
  {
    name: 'Euchre',
    summary: 'A compact trump game where five-card hands create sharp decisions and fast reversals.',
    players: '4 players in two partnerships',
    objective: 'Win at least three of five tricks after trump is established.',
    setup: [
      'Use a 24-card deck: 9, 10, J, Q, K, A in each suit.',
      'Deal five cards to each player. Turn one card face up as the proposed trump suit.',
      'Players decide whether to order up the turned suit or pass. If all pass, a second naming round begins.'
    ],
    howToPlay: [
      'The suit named as trump outranks all others.',
      'The jack of trump is the right bower, highest card in the game.',
      'The jack of the same color suit is the left bower, second highest, and counts as trump.',
      'Players must follow suit if able. Highest card in suit wins unless trump is played.',
      'The team that names trump must take at least three tricks.'
    ],
    scoring: [
      'Making three or four tricks earns 1 point.',
      'Taking all five earns 2 points, or 4 if playing alone under common rules.',
      'If the makers fail, the defenders score 2 points.',
      'Games commonly go to 10 points.'
    ],
    strategy: [
      'Trump strength matters more than general high cards.',
      'Know when to order thin because position and partner strength can compensate.',
      'Lead trump when your team needs control; avoid draining your partner when defense is fragile.',
      'Track bowers constantly. Misreading the left bower loses games.'
    ]
  },
  {
    name: 'Booray',
    summary: 'A trick-taking gambling game from Louisiana table culture, marked by risk, forfeiture, and hand judgment.',
    players: '3–7 players',
    objective: 'Win the most tricks in a hand, or avoid being forced to match the pot after taking no tricks.',
    setup: [
      'Use a standard 52-card deck. Antes create the pot.',
      'Deal five cards to each player and reveal or determine trump according to the house rule.',
      'Players decide whether to stay in or fold after seeing their hands.'
    ],
    howToPlay: [
      'A player who stays in competes for the pot and must win at least one trick.',
      'Players must follow suit if able and must play trump under common Louisiana rules when void, though house rules vary.',
      'The highest card of the led suit wins unless trump is played; highest trump wins.',
      'The player taking the most tricks wins the pot.',
      'A player who stays in and takes no tricks goes bourré and usually must match or replenish the pot.'
    ],
    scoring: [
      'The pot goes to the player with the most tricks.',
      'Ties may split the pot or carry it forward depending on house rules.',
      'Going bourré creates the signature penalty and fuels the next pot.'
    ],
    strategy: [
      'Do not stay in because a hand looks attractive; stay in because it can take at least one trick and plausibly compete.',
      'Trump control is decisive. Weak off-suit high cards are often liabilities.',
      'Respect position and pot size. The same hand can be correct or reckless depending on exposure.',
      'Clarify house rules before money hits the table.'
    ]
  },
  {
    name: 'Tonk',
    summary: 'A fast rummy-family card game based on sets, runs, knocking, and reading opponents’ unfinished hands.',
    players: '2–4 players commonly',
    objective: 'Create melds, reduce deadwood, and win by tonking, going out, or knocking with the lowest count.',
    setup: [
      'Use a standard 52-card deck. Deal five cards to each player in the common version.',
      'Place the remaining deck facedown as the stock and turn one card face up as the discard pile.',
      'Agree on automatic tonk rules before play, commonly 49 or 50 points in the opening hand.'
    ],
    howToPlay: [
      'On your turn, draw from the stock or discard pile.',
      'Lay down valid melds: three or four of a kind, or suited runs of three or more cards.',
      'You may add cards to your own or others’ melds when house rules allow spreading.',
      'Discard to end your turn.',
      'A player wins by emptying their hand, showing an opening tonk, or knocking when they believe they have the lowest count.'
    ],
    scoring: [
      'Card values vary by house rule; face cards commonly count 10, aces 1 or 11 by agreement.',
      'A successful tonk or going out wins the stake from each opponent.',
      'A failed knock can pay the player with the lower hand, often at an increased penalty.'
    ],
    strategy: [
      'Watch discards to identify what opponents are building.',
      'Do not feed a visible run unless the tempo demands it.',
      'Knock only when the table texture supports the risk.',
      'Clarify payout rules because Tonk becomes chaotic when money rules are assumed rather than stated.'
    ]
  },
  {
    name: 'Poker',
    summary: 'A family of betting games built on hand rankings, position, pot odds, probability, and controlled deception.',
    players: '2–10 depending on variant',
    objective: 'Win the pot by holding the best hand at showdown or making opponents fold before showdown.',
    setup: [
      'Choose the variant before play: Texas Hold’em, Five-Card Draw, Seven-Card Stud, or another house format.',
      'Set blinds, antes, buy-ins, betting limits, and re-buy rules.',
      'Use one standard 52-card deck and a clear dealer button or dealer rotation.'
    ],
    howToPlay: [
      'Cards are dealt according to the selected variant.',
      'Players act in order, choosing to check, bet, call, raise, or fold as allowed.',
      'Betting rounds continue until all remaining players have matched the highest bet or folded.',
      'At showdown, the best ranked hand wins unless everyone but one player folded earlier.',
      'Standard rankings from high to low: royal flush, straight flush, four of a kind, full house, flush, straight, three of a kind, two pair, one pair, high card.'
    ],
    scoring: [
      'Poker usually uses chips rather than cumulative score.',
      'Tournament play ends when one player holds all chips or when prizes are awarded by finishing position.',
      'Cash games allow players to join or leave according to table rules.'
    ],
    strategy: [
      'Position is power: later action gives more information.',
      'Play fewer weak hands, especially out of position.',
      'Bet for a reason: value, protection, bluff equity, or information denial.',
      'Bankroll discipline matters more than a brilliant single hand.'
    ]
  }
];

const products = [
  {
    name: 'Ark of Bones Embroidered Sweatshirt',
    type: 'Premium sweatshirt',
    description: 'Core brand layer for competitive game nights, pop-ups, and winter table culture.',
    href: `${shopBase}/shop`,
    image: ''
  },
  {
    name: 'Big Six Bones Long Sleeve',
    type: 'Long sleeve shirt',
    description: 'Signature Big Six identity piece for players who want the table to know the code.',
    href: `${shopBase}/shop`,
    image: ''
  },
  {
    name: 'Domino Mother Fucker Graphic Tee',
    type: 'Graphic tee',
    description: 'Loud, funny, competitive tablewear built for personality, not politeness.',
    href: `${shopBase}/shop`,
    image: ''
  },
  {
    name: 'Big Six Bones Short Sleeve Tee',
    type: 'Short sleeve tee',
    description: 'Everyday merch for domino players, spectators, and tournament regulars.',
    href: `${shopBase}/shop`,
    image: ''
  },
  {
    name: 'Domino Mother Fucker Embroidered Beanie',
    type: 'Embroidered beanie',
    description: 'Cold-weather table talk with a direct competitive edge.',
    href: `${shopBase}/shop`,
    image: ''
  },
  {
    name: 'Ark of Bones Beanie',
    type: 'Beanie',
    description: 'A clean brand accessory for crews, organizers, and loyal players.',
    href: `${shopBase}/shop`,
    image: ''
  }
];

function ProductImage({ product }) {
  if (product.image) {
    return <img src={product.image} alt={product.name} loading="lazy" />;
  }

  return (
    <div className="product-fallback" aria-label={`${product.name} product image pending`}>
      <span>{product.name}</span>
      <small>Replace image field with live arkofbones.com product CDN asset</small>
    </div>
  );
}

function App() {
  return (
    <main>
      <header className="hero" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a href="#home" className="brand">Ark of Bones</a>
          <div>
            <a href="#education">Learn</a>
            <a href="#games">Games</a>
            <a href="#shop">Shop</a>
            <a href="https://arkofbones.com/shop">Store</a>
          </div>
        </nav>
        <section className="hero-grid">
          <div>
            <p className="eyebrow">Domino culture • Premium table goods • Game-night literacy</p>
            <h1>Learn the games. Respect the table. Bring better bones.</h1>
            <p className="lede">Ark of Bones now has a practical education section for every game offered through the platform, paired with live commerce paths for official merch and accessories.</p>
            <div className="actions">
              <a className="button primary" href="#education"><BookOpen size={18}/> Start learning</a>
              <a className="button secondary" href="https://arkofbones.com/shop"><ShoppingBag size={18}/> Shop official goods</a>
            </div>
          </div>
          <aside className="hero-card">
            <Trophy size={34}/>
            <h2>Table-ready education</h2>
            <p>Rules, setup, scoring, etiquette, and strategy for Dominoes, Big Six Bones, Spades, Euchre, Booray, Tonk, and Poker.</p>
          </aside>
        </section>
      </header>

      <section className="section intro" id="education">
        <p className="eyebrow">Education hub</p>
        <h2>How to play each Ark of Bones game</h2>
        <p>Use this as a player primer, tournament handout, SEO landing section, and cultural onboarding system. Each guide is written to reduce confusion at the table before competition begins.</p>
        <div className="stats">
          <span><Users/> 7 games covered</span>
          <span><ScrollText/> Setup, rules, scoring</span>
          <span><Flame/> Strategy and etiquette</span>
        </div>
      </section>

      <section className="game-list" id="games">
        {games.map((game) => (
          <article className="game-card" key={game.name}>
            <div className="game-head">
              <div>
                <p className="eyebrow">{game.players}</p>
                <h3>{game.name}</h3>
              </div>
              <a href={`#${game.name.toLowerCase().replaceAll(' ', '-')}`}>Guide</a>
            </div>
            <p className="summary">{game.summary}</p>
            <div className="rule-grid" id={game.name.toLowerCase().replaceAll(' ', '-')}>
              <div><h4>Objective</h4><p>{game.objective}</p></div>
              <div><h4>Setup</h4><ul>{game.setup.map(item => <li key={item}>{item}</li>)}</ul></div>
              <div><h4>How play works</h4><ul>{game.howToPlay.map(item => <li key={item}>{item}</li>)}</ul></div>
              <div><h4>Scoring</h4><ul>{game.scoring.map(item => <li key={item}>{item}</li>)}</ul></div>
              <div className="wide"><h4>Table strategy</h4><ul>{game.strategy.map(item => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </article>
        ))}
      </section>

      <section className="section shop" id="shop">
        <div className="shop-head">
          <div>
            <p className="eyebrow">Official products</p>
            <h2>Merch and accessories available through Ark of Bones</h2>
            <p>The buttons now route shoppers to the active Ark of Bones storefront. The product data layer is structured so exact product-image URLs can be inserted without redesigning the page.</p>
          </div>
          <a className="button primary" href="https://arkofbones.com/shop"><ShoppingBag size={18}/> View full store</a>
        </div>
        <div className="products">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <ProductImage product={product} />
              <div className="product-body">
                <p className="eyebrow">{product.type}</p>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <a className="button secondary" href={product.href}>Shop item</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <strong>Ark of Bones</strong>
        <p>Premium domino culture, competitive game-night education, and official table goods.</p>
        <div>
          <a href="#education">Education</a>
          <a href="#shop">Products</a>
          <a href="https://arkofbones.com">Live site</a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
