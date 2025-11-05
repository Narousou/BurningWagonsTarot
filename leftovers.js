cardlocal =  document.getElementById("cards");
desclocal = document.getElementById("descriptions");

const deckLoaded = [];

const deck = [];
deck[0] = "the_paradox.png";
deck[1] = "the_mailman.png";
deck[2] = "the_lorekeeper.png";


class Card {

    constructor(src,qt,upright,reversed) {
        this.src = src;
        this.qt = qt;
        this.upright;
        this.reversed;
    }

    createImage()
    {
        var img = new Image();
        img.src = this.src;
    }

    createDesc()
    {
        let a = document.createTextNode(this.qt);
    }

}


function loadCards()
{
    for (let i = 0; i < deck.length; i++)
    {
        deckLoaded[i] = preload(deck[i]);
    }
}

function preload(url)
{
    var img = new Image();
    img.src = "cards/" + url;

    return img;
}

function presentDesc()
{
    let desc = document.createTextNode("Hey, this is the description");
}

var cardLimit = 3;
const fortuneStack = [];

var w = 300;
var h = 507;

function newFortune()
{
    clearCards()

    for (let i = 0; i < cardLimit; i++)
    {
        let t = newCard();
        cardlocal.appendChild(t);
    }
}



function newCard()
{
    
    // This is the card block set up
    let cardBlock = document.createElement("div")
    
    cardBlock.setAttribute("id","cardBlock");
    cardBlock.setAttribute("class","column");

    // randomize the choice
    let choice = getRandomInt(0,deckLoaded.length);
    let new_card = deckLoaded[choice];

    createCard(new_card);
    

    if (isReversed()) 
    {
        new_card.setAttribute("id","inverse");
    }

    let desc = document.createTextNode(the_paradox.qt);
    //desc.setAttribute("class","column");

    cardBlock.appendChild(new_card);
    cardBlock.appendChild(desc)

    deckLoaded.splice(choice,1);
    return cardBlock;
    
    
}


function clearCards()
{
    cardlocal.innerHTML = "";
    //deckLoaded = [];
    loadCards();
}

function isReversed()
{
    let chance = Math.floor(Math.random() * 10);
    if (chance < 2)
        return true;
    else
        return false;
}

function createCard(t)
{
    t.setAttribute("width" ,w);
    t.setAttribute("height",h);
    t.setAttribute("title", t.src);

}

function createCardDesc(id)
{

    for (let i = 0; i < cardLimit; i++)
    {}
}

function getRandomInt(min, max) 
{
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

