
const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
const cardlocal =  document.getElementById("cards");
let w = 300;
let h = 507;

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

    showImage()
    {
        addCardAttrib(this);
        this.img.src = this.src;
        return this.img;
    }

}

class CardB extends Card{
    constructor(qt,upright,reversed,index){
        super(qt,upright,reversed);
        this.index = index;
        this.src = "bees/combee.png";

    }

    showBVarImage()
    {
        let bl = document.createElement("div");
        bl.setAttribute("id","card_beeBlock")

        let img = this.showImage();
        img.setAttribute("id","card_beeImage");
        bl.appendChild(img);

        let text = document.createElement("p");
        text.innerHTML = abc[this.index - 1];
        text.setAttribute("id","card_beeLetters");
        bl.appendChild(text);

        return bl;
    }
}



// deck related

function drawCard()
{
    if (activeDeck.length == 0) return;
    
    let t = getRandomInt(0,activeDeck.length);
    let chance = Math.floor(Math.random() * 10);

    // see if normal or different card;
    if (activeDeck[t].index > -1)
        img = activeDeck[t].showBVarImage();
    else
        img = activeDeck[t].showImage();

    //reverse?
    if (chance < 3)
        img.style.transform = "rotate("+ 180 +"deg)";


    cardlocal.appendChild(img);
    activeDeck.splice(t,1);

}

function loadDeck()
{
    activeDeck = [];
    for (let i = 0; i < Deck.length; i++)
    {
        activeDeck.push(Deck[i]);
    }
}

function addCardAttrib(card)
{
    
    card.img.setAttribute("width" ,w);
    card.img.setAttribute("height",h);
}

// animations

const fadeIn = [
    {transform: "trans"}
];


// other

function getRandomInt(min, max) 
{
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

