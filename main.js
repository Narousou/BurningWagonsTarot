

function delta()
{
    performFortune(3);
}


function performFortune(size)
{
    loadDeck()
    cardlocal.innerHTML = "";
    for (let i = 0; i < size; i++)
    {
        drawCard();
    }
}

function drawCard()
{
    if (activeDeck.length == 0) return;
    let t = getRandomInt(0,activeDeck.length);
    let chance = Math.floor(Math.random() * 10);

    activeDeck[t].showImage(chance);
    activeDeck.splice(t,1);

}