

function delta()
{
    for (let i = 0; i < Deck.length; i++)
    {
        let chance = Math.floor(Math.random() * 10);
        Deck[i].showImage(chance);
    }
}

function randomCard()
{
    let t = getRandomInt(0,deck.length);
    deck.splice(t,1);
    return deck[t];
}

function loadDeck()
{
    deck = [];
    deck[0] = the_paradox;
    deck[1] = the_mailman;
}

function setCard(card)
{
    var img = new Image();
    img.src = card.src;

    let chance = Math.floor(Math.random() * 10);
    if (chance < 2)
        img.setAttribute("id","reversed");
    
    img.setAttribute("width" ,w);
    img.setAttribute("height",h);

    return img
}

function addCard(card)
{
    let t = document.createElement("div");
    t.setAttribute("class","column");

    let img = setCard(card);

    let qt = document.createTextNode(card.qt);
    let upright_desc = document.createTextNode(card.upright);
    
    t.appendChild(img);
    //t.AppendChild(qt);
    //t.AppendChild(upright_desc);

    cardlocal.appendChild(t);
}