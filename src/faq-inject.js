const faqs = [
  {
    question: 'What is Ark of Bones?',
    answer: 'Ark of Bones is a domino culture platform centered on game-night literacy, community, competitive play, official merch, and the history of dominoes and related games.'
  },
  {
    question: 'What games are covered on the app?',
    answer: 'The education hub covers Dominoes, Big Six Bones, Spades, Euchre, Booray, Tonk, and Poker.'
  },
  {
    question: 'Where do I learn how to play?',
    answer: 'Use the Learn and Games sections. Each guide explains the objective, setup, play sequence, scoring, and strategic etiquette for that game.'
  },
  {
    question: 'Where can I shop Ark of Bones products?',
    answer: 'Use the Shop section or the Store button. The app links to the confirmed Ark of Bones merch catalog only.'
  },
  {
    question: 'What does the app promote?',
    answer: 'The app promotes confirmed merch, education, events, media, community, contact information, and official Ark of Bones links only.'
  },
  {
    question: 'How do I contact Ark of Bones?',
    answer: 'Email info@arkofbones.com or call the listed office number in the Contact section.'
  },
  {
    question: 'Where can I follow Ark of Bones?',
    answer: 'The footer links to the live site, Instagram, and YouTube. Use those official channels for updates, videos, and community activity.'
  },
  {
    question: 'Is the education section official gameplay law?',
    answer: 'No. The guides are practical player primers. House rules, event rules, and tournament rules should always be confirmed before play starts.'
  }
];

function createFaqSection() {
  if (document.getElementById('qa')) return;

  const contact = document.getElementById('contact');
  const targetParent = contact?.parentElement || document.querySelector('main');
  if (!targetParent) return;

  const section = document.createElement('section');
  section.className = 'section qa-section';
  section.id = 'qa';

  section.innerHTML = `
    <p class="eyebrow">Q&A</p>
    <h2>Have Questions? We Have Answers.</h2>
    <p>Fast answers for players, shoppers, and people finding Ark of Bones for the first time.</p>
    <div class="faq-list">
      ${faqs.map(({ question, answer }) => `
        <article class="faq-card">
          <h3>${question}</h3>
          <p>${answer}</p>
        </article>
      `).join('')}
    </div>
  `;

  targetParent.insertBefore(section, contact);

  const nav = document.querySelector('.nav div');
  if (nav && !nav.querySelector('a[href="#qa"]')) {
    const contactLink = nav.querySelector('a[href="#contact"]');
    const qaLink = document.createElement('a');
    qaLink.href = '#qa';
    qaLink.textContent = 'Q&A';
    nav.insertBefore(qaLink, contactLink || null);
  }
}

const timer = window.setInterval(() => {
  createFaqSection();
  if (document.getElementById('qa')) window.clearInterval(timer);
}, 100);

window.addEventListener('DOMContentLoaded', createFaqSection);
