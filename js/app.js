const cardArray = [
    {
        name: 'aranha',
        img: 'img/aranha.png'
    },
    {
        name: 'bombom',
        img: 'img/bombom.png'
    },
    {
        name: 'castelo',
        img: 'img/castelo.png'
    },
    {
        name: 'caveira',
        img: 'img/caveira_velas.png'
    },
    {
        name: 'cerebro',
        img: 'img/cerebro.png'
    },
    {
        name: 'chapeu',
        img: 'img/chapeu.png'
    },
    {
        name: 'cobrinha',
        img: 'img/cobrinha.png'
    },
    {
        name: 'dentes',
        img: 'img/dentes.png'
    },
    {
        name: 'doces',
        img: 'img/doces.png'
    },
    {
        name: 'fantasma',
        img: 'img/fantasma.png'
    },
    {
        name: 'lanterna_verde',
        img: 'img/lanterna_verde.png'
    },
    {
        name: 'lapide',
        img: 'img/lapide.png'
    },
    {
        name: 'lobisomem',
        img: 'img/lobisomem.png'
    },
    {
        name: 'mao_zumbi',
        img: 'img/mao_zumbi.png'
    },
    {
        name: 'pirulito',
        img: 'img/pirulito.png'
    },
    {
        name: 'pocao',
        img: 'img/pocao.png'
    },
    {
        name: 'sacola',
        img: 'img/sacola.png'
    },
    {
        name: 'suspiro',
        img: 'img/suspiro.png'
    },
    {
        name: 'aranha',
        img: 'img/aranha.png'
    },
    {
        name: 'bombom',
        img: 'img/bombom.png'
    },
    {
        name: 'castelo',
        img: 'img/castelo.png'
    },
    {
        name: 'caveira',
        img: 'img/caveira_velas.png'
    },
    {
        name: 'cerebro',
        img: 'img/cerebro.png'
    },
    {
        name: 'chapeu',
        img: 'img/chapeu.png'
    },
    {
        name: 'cobrinha',
        img: 'img/cobrinha.png'
    },
    {
        name: 'dentes',
        img: 'img/dentes.png'
    },
    {
        name: 'doces',
        img: 'img/doces.png'
    },
    {
        name: 'fantasma',
        img: 'img/fantasma.png'
    },
    {
        name: 'lanterna_verde',
        img: 'img/lanterna_verde.png'
    },
    {
        name: 'lapide',
        img: 'img/lapide.png'
    },
    {
        name: 'lobisomem',
        img: 'img/lobisomem.png'
    },
    {
        name: 'mao_zumbi',
        img: 'img/mao_zumbi.png'
    },
    {
        name: 'pirulito',
        img: 'img/pirulito.png'
    },
    {
        name: 'pocao',
        img: 'img/pocao.png'
    },
    {
        name: 'sacola',
        img: 'img/sacola.png'
    },
    {
        name: 'suspiro',
        img: 'img/suspiro.png'
    }
];

cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray)

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];



function createBoard() {
    cardArray.forEach((element, index)=>{
        const card = document.createElement('img');
        card.setAttribute('src', 'img/back.png');
        card.setAttribute('data-id', index);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    });
};
createBoard();


function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log('cardsChosen', cardsChosen)
    console.log('cardsChosenIds', cardsChosenIds)
    if(optionOneId == optionTwoId){
        cardsChosen.pop();
        cardsChosenIds.pop();

    }
    if(cardsChosen[0] == cardsChosen[1]){
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);

        cardsWon.push(cardsChosen);

    } else{
        cards[optionOneId].setAttribute('src', 'img/back.png');
        cards[optionTwoId].setAttribute('src', 'img/back.png');

    };
    
    resultDisplay.textContent = cardsWon.length;

    cardsChosen = [];
    cardsChosenIds = [];
    
    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'You won!!!'
    }
};


function flipCard() {
    const cardId = this.getAttribute('data-id');

    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);

    this.setAttribute('src', cardArray[cardId].img);

    if(cardsChosen.length == 2){
        setTimeout(checkMatch, 500);
    }
};