const quotes = [
  {
    quote: '삶이 있는 한 희망은 있다.',
    author: '키케로',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    quote:
      'The world is a book and those who do not travel read only one page.',
    author: 'Saint Augustine',
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    quote: 'To Travel is to Live',
    author: 'Hans Christian Andersen',
  },
  {
    quote: 'Only a life lived for others is a life worthwhile.',
    author: 'Albert Einstein',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    quote: 'Never go on trips with anyone you do ntot love.',
    author: 'Hemmingway',
  },
  {
    quote: '자신감 있는 표정을 지으면 자신감이 생긴다.',
    author: '찰스 다윈',
  },
  {
    quote: '랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.',
    author: '앙드레 말로',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
