export const games = [
  {
    slug: 'dominoes',
    name: 'Dominoes',
    summary:
      'The foundation: matching tiles, reading the board, managing tempo, and scoring through disciplined placement.',
    players: '2-4 players, usually singles or partners',
    objective:
      'Empty your hand first or hold the lowest pip count when the round blocks.',
    setup: [
      'Place all dominoes facedown and shuffle them into the boneyard.',
      'Each player draws the agreed hand size. With a double-six set, two players commonly draw seven tiles each; four players commonly draw five to seven depending on house rules.',
      'The player with the highest double usually opens. If no one has a double, use the highest tile or redraw by agreement.',
    ],
    gameplay: [
      'Play proceeds clockwise unless your house rule says otherwise.',
      'A legal play connects a tile to an open end with the same pip value.',
      'Doubles are usually placed crosswise and may create a strategic branch point depending on the variant.',
      'If you cannot play, draw from the boneyard if drawing is allowed; otherwise pass.',
      'The round ends when one player dominoes, or when the board is blocked and no one can make a legal play.',
    ],
    scoring: [
      'In simple block dominoes, the winner scores the remaining pips in opposing hands, or the lowest hand wins a blocked round.',
      'In point variants, scores may be awarded when open ends total a multiple such as five.',
      'Set a target score before the match, commonly 100, 150, or 250.',
    ],
    strategy: [
      'Track suits that have appeared so you know which numbers are scarce.',
      'Control board ends instead of simply dumping high tiles.',
      'In partners, read your partner’s passes and protect their likely numbers.',
    ],
    etiquette: [
      'Keep tiles visible, announce passes clearly, and agree on drawing and scoring rules before the opening play.',
    ],
  },
  {
    slug: 'big-six-bones',
    name: 'Big Six Bones',
    summary: 'An Ark of Bones domino game identity currently documented as a player primer, not a canonical ruleset.',
    players: 'Best with 2-4 players or partner teams',
    objective:
      'Win rounds through legal tile play, board control, and clean scoring under the agreed Big Six house rules.',
    setup: [
      'Use a double-six domino set unless the event host specifies another set.',
      'Shuffle facedown and draw hands according to the table format.',
      'Agree on the score target, drawing rules, blocking rules, and table-talk limits before play.',
    ],
    gameplay: [
      'Open with the designated starter tile under house rules, often the highest double.',
      'Players connect matching ends and attempt to force opponents into passes or inefficient plays.',
      'A player unable to move draws or passes according to the announced rule set.',
      'The round ends when a player goes out or the board locks.',
      'Tournament play should use a visible scorekeeper and consistent penalties for illegal plays, exposed tiles, or missed turns.',
    ],
    scoring: [
      'Use the official event score target or house target announced before play.',
      'A player or team that goes out usually collects the pips remaining in opposing hands.',
      'On a blocked board, the lowest pip count takes the round; ties follow the host rule.',
    ],
    strategy: [
      'Keep pressure on numbers opponents have already passed on.',
      'Preserve doubles until they can open the board or trap a player with poor distribution.',
      'Do not mistake speed for dominance; a fast hand can still lose board control.',
    ],
    etiquette: [
      'Use clean calls, no hidden tiles, no fake confusion, and respect the tournament or house ruling at the table.',
    ],
  },
  {
    slug: 'spades',
    name: 'Spades',
    summary:
      'A contract-taking card game built on bidding accuracy, partner trust, and controlled aggression.',
    players: '4 players in two partnerships',
    objective:
      'Bid how many tricks your team will win, then meet or exceed that contract without collecting excessive bags.',
    setup: [
      'Use a standard 52-card deck. Spades are always trump.',
      'Deal all cards so each player receives 13.',
      'Each player bids a number of tricks. Partners’ bids combine into one team contract.',
    ],
    gameplay: [
      'The player left of the dealer leads first. Players must follow suit when able.',
      'If unable to follow suit, a player may play any card, including a spade.',
      'Spades cannot be led until broken unless a player holds only spades.',
      'The highest card in the led suit wins unless a spade is played; the highest spade wins the trick.',
    ],
    scoring: [
      'A team that makes its bid scores 10 points per bid trick plus one point per overtrick.',
      'Overtricks are bags; commonly, 10 bags create a 100-point penalty.',
      'A failed contract loses 10 points per bid trick.',
      'Nil bids commonly score plus or minus 100, subject to house rules.',
    ],
    strategy: [
      'Bid your hand rather than your ego.',
      'Protect your partner’s nil before chasing extra tricks.',
      'Count spades and track high cards in every suit.',
    ],
    etiquette: [
      'Do not signal your hand outside legal play, and establish bag, nil, and reneging rules before the deal.',
    ],
  },
  {
    slug: 'euchre',
    name: 'Euchre',
    summary:
      'A compact trump game where five-card hands create sharp decisions and fast reversals.',
    players: '4 players in two partnerships',
    objective: 'Win at least three of five tricks after trump is established.',
    setup: [
      'Use a 24-card deck: 9, 10, J, Q, K, and A in each suit.',
      'Deal five cards to each player and turn one card face up as the proposed trump suit.',
      'Players decide whether to order up the turned suit or pass. If all pass, a second naming round begins.',
    ],
    gameplay: [
      'The suit named as trump outranks all others.',
      'The jack of trump is the right bower, the highest card in the game.',
      'The jack of the same-color suit is the left bower, second highest, and counts as trump.',
      'Players must follow suit if able. The highest card in suit wins unless trump is played.',
    ],
    scoring: [
      'Making three or four tricks earns one point.',
      'Taking all five earns two points, or four when playing alone under common rules.',
      'If the makers fail, the defenders score two points. Games commonly go to 10.',
    ],
    strategy: [
      'Trump strength matters more than general high cards.',
      'Lead trump when your team needs control.',
      'Track both bowers constantly.',
    ],
    etiquette: [
      'Name trump clearly and avoid table talk or gestures that reveal partner information.',
    ],
  },
  {
    slug: 'booray',
    name: 'Booray',
    summary:
      'A trick-taking card game from Louisiana play culture, marked by risk, forfeiture, and hand judgment.',
    players: '3-7 players',
    objective:
      'Win the most tricks in a hand while avoiding a zero-trick result after choosing to stay in.',
    setup: [
      'Use a standard 52-card deck and deal five cards to each player.',
      'Reveal or determine trump according to the house rule.',
      'Players decide whether to stay in or fold after seeing their hands.',
    ],
    gameplay: [
      'A player who stays in competes for the hand and must win at least one trick.',
      'Players must follow suit if able and commonly must play trump when void, though house rules vary.',
      'The highest card of the led suit wins unless trump is played; the highest trump wins.',
      'A player who stays in and takes no tricks goes bourré under common rules.',
    ],
    scoring: [
      'The hand goes to the player with the most tricks.',
      'Ties may split or carry forward depending on house rules.',
      'Going bourré creates the signature penalty under the agreed rule set.',
    ],
    strategy: [
      'Stay in only when a hand can take at least one trick and plausibly compete.',
      'Trump control is decisive; weak off-suit high cards can be liabilities.',
      'Respect position and score context.',
    ],
    etiquette: [
      'Clarify stay-in, trump, tie, and bourré penalties before the first hand.',
    ],
  },
  {
    slug: 'tonk',
    name: 'Tonk',
    summary:
      'A fast rummy-family card game based on sets, runs, knocking, and reading opponents’ unfinished hands.',
    players: '2-4 players commonly',
    objective:
      'Create melds, reduce deadwood, and win by tonking, going out, or knocking with the lowest count.',
    setup: [
      'Use a standard 52-card deck and deal five cards to each player in the common version.',
      'Place the remaining deck facedown as stock and turn one card face up as the discard pile.',
      'Agree on automatic tonk rules before play, commonly 49 or 50 points in the opening hand.',
    ],
    gameplay: [
      'On your turn, draw from the stock or discard pile.',
      'Lay down valid melds: three or four of a kind, or suited runs of three or more cards.',
      'You may add cards to existing melds when house rules allow spreading.',
      'Discard to end your turn.',
      'A player wins by emptying their hand, showing an opening tonk, or knocking with the lowest count.',
    ],
    scoring: [
      'Card values vary by house rule; face cards commonly count 10 and aces count one or 11 by agreement.',
      'A successful tonk or going out wins the agreed round value from each opponent.',
      'A failed knock can award the round to a lower hand, often at an increased penalty.',
    ],
    strategy: [
      'Watch discards to identify what opponents are building.',
      'Do not feed a visible run unless the tempo demands it.',
      'Knock only when the game texture supports the risk.',
    ],
    etiquette: [
      'State opening-tonk, spreading, knocking, and card-value rules before the first hand.',
    ],
  },
  {
    slug: 'poker',
    name: 'Poker',
    summary:
      'A family of card games built on hand rankings, position, probability, and controlled deception.',
    players: '2-10 depending on the variant',
    objective:
      'Win the hand by holding the best cards at showdown or making opponents fold before showdown.',
    setup: [
      'Choose the variant before play: Texas Hold’em, Five-Card Draw, Seven-Card Stud, or another house format.',
      'Set house rules, limits, turn order, and re-entry rules before the first deal.',
      'Use one standard 52-card deck and a clear dealer button or dealer rotation.',
    ],
    gameplay: [
      'Cards are dealt according to the selected variant.',
      'Players act in order, choosing to check, continue, raise, or fold as allowed.',
      'Rounds continue until remaining players match the current action or fold.',
      'At showdown, the best ranked hand wins unless everyone but one player folded earlier.',
      'Standard rankings descend from royal flush through high card.',
    ],
    scoring: [
      'Poker usually uses chips rather than cumulative score.',
      'Tournament play ends when one player holds all chips or prizes are awarded by finishing position.',
      'Open games allow players to join or leave according to agreed rules.',
    ],
    strategy: [
      'Position is power because later action provides more information.',
      'Play fewer weak hands, especially out of position.',
      'Act for a reason: value, protection, pressure, or information denial.',
    ],
    etiquette: [
      'Act in turn, protect your cards, keep chips visible, and follow the declared table-stakes rules.',
    ],
  },
];
