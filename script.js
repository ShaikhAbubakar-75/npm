import quotesy from 'quotesy'

const randomQuote = quotesy.random();

document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = `
      <blockquote>${randomQuote.text}</blockquote>
      <p>- ${randomQuote.author}</p>
    `;
});

const quoteCard = document.getElementById('quote-card')

quoteCard.addEventListener('click', () => {
    location.reload()
})