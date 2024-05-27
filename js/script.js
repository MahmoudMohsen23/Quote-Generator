var quotee = [`“Be yourself; everyone else is already taken.”`,
    `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    `“So many books, so little time.”`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    `“A room without books is like a body without a soul.”`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    `“You only live once, but if you do it right, once is enough.”`];

var writer = [`― Oscar Wilde`,
    `― Marilyn Monroe`,
    `― Frank Zappa`,
    `― Albert Einstein`,
    `― Marcus Tullius Ciceo`,
    `― Bernard M. Baruch`,
    `― Mae West`];



function generate() {
    var num = Math.floor(Math.random() * quotee.length);
    document.getElementById("quote").innerHTML = quotee[num];
    document.getElementById("writer").innerHTML = writer[num];
}