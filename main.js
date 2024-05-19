var usedQuotes = [];

function generateQuote() {
  var quote = [
    "“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“If you tell the truth, you don't have to remember anything.”",
    "“A friend is someone who knows all about you and still loves you.”",
    "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
    "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
    "“Life is what happens to us while we are making other plans.”",
    "“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”",
    "“I have not failed. I've just found 10,000 ways that won't work.”",
    "“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”",
    "“A day without sunshine is like, you know, night.”",
    "“A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.”",
    "“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.”",
    "“That which does not kill us makes us stronger.”",
    "“It is never too late to be what you might have been.”",
    "“For every minute you are angry you lose sixty seconds of happiness.”",
    "“If you judge people, you have no time to love them.”",
    "“There is no greater agony than bearing an untold story inside you.”",
  ];
  var quoteAuth = [
    "― Oscar Wilde",
    "― Frank Zappa",
    "― Marcus Tullius Cicero",
    "― Mae West",
    "― Mark Twain",
    "― Elbert Hubbard",
    "― Albert Einstein",
    "― Mark Twain",
    "― Allen Saunders",
    "― Bill Keane",
    "― Thomas A. Edison",
    "― Dr. Seuss",
    "― Steve Martin",
    "― George R.R. Martin",
    "― Lao Tzu",
    "― Friedrich Nietzsche",
    "― George Eliot",
    "― Ralph Waldo Emerson",
    "― Mother Teresa",
    "― Maya Angelou",
  ];

  //I used this to make sure the random number wasn't repeated

  if (usedQuotes.length === quote.length) {
    usedQuotes = [];
  }

  var quoteNumber;
  //I used this to make sure the random number wasn't repeated
  do {
    quoteNumber = Math.floor(Math.random() * quote.length);
  } while (usedQuotes.includes(quoteNumber));

  usedQuotes.push(quoteNumber);

  document.getElementById("quo").innerHTML = quote[quoteNumber];
  document.getElementById("quoAut").innerHTML = quoteAuth[quoteNumber];
  console.log(quote[quoteNumber]);
  console.log(quoteAuth[quoteNumber]);
}
