

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

