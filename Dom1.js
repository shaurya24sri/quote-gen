
var quotes=[
   "The greatest glory in living lies not in never falling, but in rising every time we fall.",
"The way to get started is to quit talking and begin doing.",
"Your time is limited, so do no t waste it living someone else life. Do not be trapped by dogma – which is living with the results of other people thinking.",
"If life were predictable it would cease to be life, and be without flavor.",
"If you look at what you have in life, you will always have more. If you look at what you do not  have in life, you will never have enough.",
"If you set your goals ridiculously high and it is a failure, you will fail above everyone else success.",
"Life is what happens when you are busy making other plans." 
]
function getQuote(){
    var randomQuote=Math.floor(Math.random() * quotes.length);
    document.getElementById('new').innerHTML = quotes[randomQuote];
}