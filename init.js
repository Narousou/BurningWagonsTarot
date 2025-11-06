cardlocal =  document.getElementById("cards");
var w = 300;
var h = 507;

Deck = [];
activeDeck = [];

class Card {

    constructor(src,qt,upright,reversed) {
        this.img = new Image();
        this.src = src;
        
        this.qt = qt;
        this.upright = upright;
        this.reversed = reversed;
        Deck.push(this);
    }

    showImage(chance)
    {
        this.img.src = this.src;
        if (chance < 3)
            this.img.setAttribute("id","reversed");
        else
            this.img.removeAttribute("id","upright");

        this.img.setAttribute("width" ,w);
        this.img.setAttribute("height",h);

        cardlocal.appendChild(this.img);
    }

}



function loadDeck()
{
    activeDeck = [];
    for (let i = 0; i < Deck.length; i++)
    {
        activeDeck.push(Deck[i]);
    }
}

function getRandomInt(min, max) 
{
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

