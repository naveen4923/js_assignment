var quotes =[
    "“Happiness is not something ready made. It comes from your own actions.” ― Dalai Lama XIV.\"<br>-  Jake <small><em>(Adventure Time)</em></small>",
    "\"Either I will find a way, or I will make one.\"<br> - Philip Sidney",
    "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br>- Thomas A. Edison",
    "\"You are never too old to set another goal or to dream a new dream.\"<br>- C.S Lewis",
    "\"“You can either experience the pain of discipline or the pain of regret. The choice is yours.”  – Unknown",
    "\"Never give up, for that is just the place and time that the tide will turn.\"<br>- Harriet Beecher Stowe",
    "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali", 
    "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br>- Bruce Lee"
]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('Display').innerHTML = quotes[randomNumber];

}