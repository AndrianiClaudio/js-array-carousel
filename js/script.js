// INIZIO dati ricevuti
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
let startIndex = 1;
// FINE dati ricevuti
const body = document.querySelector('body'); //seleziono body
// creo div.container
const container = document.createElement('div');
container.classList.add('container','d-flex');
// BODY > CONTAINER
body.prepend(container);
// creo div.main-img-container
const mainImgContainer = document.createElement('div');
mainImgContainer.classList.add('main-img-container','d-flex');
// CONTAINER > MAIN-IMG-CONTAINER
container.append(mainImgContainer);
// MAIN-IMG-CONTAINER > IMG
mainImgContainer.innerHTML = `<img class='img--${startIndex}' src = ${items[startIndex]} alt=''>`;
// creo div.text-div
const textDiv = document.createElement('div');
textDiv.classList.add('text-div','d-flex');
// creo span.title
const span = document.createElement('span');
span.classList.add('title')
span.innerHTML = title[startIndex];
// creo paragrafo
const p = document.createElement('p');
p.innerHTML = text[startIndex];
// MAIN-IMG-CONTAINER > TEXT-DIV
mainImgContainer.append(textDiv);
/*  TEXT-DIV > SPAN,
    TEXT-DIV > P*/
textDiv.append(span,p);
// creo div.container-thumbails
const thumbnailsMenu = document.createElement('div');
thumbnailsMenu.classList.add('thumbnails-menu','d-flex');
// CONTAINER > THUMBANAILS-MENU
container.append(thumbnailsMenu);
//scorro la lista (items.lenght = qualsiasi lista assegnata.lenght ... necessita controllo in caso di usi futuri)
//lunghezza in caso di aggiunta/rimozione img future
let thItemLen = 100/items.length;
// console.log(thItemLen);
for(let i = 0; i<items.length;i++) {
    // Creo div.thumbnails-item
    const thumbnailsItem = document.createElement('img');
    thumbnailsItem.classList.add('thumbnails-item',`img-thumb--${i}`);
    thumbnailsItem.style.height = `${thItemLen}%`;
    if(i == startIndex) {
        thumbnailsItem.classList.add('active');
    }
    //associo src immagine a seconda dell'indice
    thumbnailsItem.src=items[i];
    thumbnailsMenu.innerHTML += thumbnailsItem.outerHTML;
}
// Creazione div.arrow-up
const arrowUp = document.createElement('div');
arrowUp.classList.add('arrow-up');
arrowUp.innerHTML = '<i class="fas fa-chevron-up"></i>';
// Creazione div.arrow-down
const arrowDown = document.createElement('div');
arrowDown.classList.add('arrow-down');
arrowDown.innerHTML = '<i class="fas fa-chevron-down"></i>';
/* THUMBNAILS > ARROW-UP
THUMBNAILS > ARROW-DOWN
*/
thumbnailsMenu.append(arrowUp,arrowDown);

// click su arrow up
arrowUp.addEventListener('click',function(){
    // if(actualImageIndex > 0) {
    //     console.log(actualImage.classList,actualThumb.classList);
    // } else {
    //     console.log('non puoi andare piu sopra');
    // }
    const actualImage = document.querySelector('.main-img-container img');
    const actualThumb = document.querySelector('.thumbnails-item.active');
    //trova classe img--${valore} 
    const imageClassPrefix = 'img--';
    const thumbClassPrefix = 'img-thumb--';
    for(let i = 0; i < actualImage.classList.length;i++) {
        if(actualImage.classList[i].startsWith(imageClassPrefix)){
            // const imageClassPrefix = actualImage.classList[i].slice(0,5);
            const imageClassValue = parseInt(actualImage.classList[i].slice(5, actualImage.classList[i].length));
            // console.log(imageClassPrefix,imageClassValue);
            //nuova classe
            const newClassValue = (imageClassValue -1);
            const newClass = (imageClassPrefix + newClassValue);
            actualThumb.classList.remove('active');
            (actualThumb.previousSibling).classList.add('active');
            actualImage.src = items [newClassValue];
            actualImage.classList[i].replace(newClass);
        }
    }
    // const thumbClassPrefix = 'img-thumb--';
    // for(let i = 0; i < actualThumb.classList.length;i++) {
    // }
});
// click su arrow down
arrowDown.addEventListener('click',function() {
    // const actualImage = document.querySelector('.main-img-container img');
    // //in caso ci fossero piu di 9 img ci sarebbe bisogno di altri controlli, per ora appare ok pre ricavare l'indice della foto attualmente visualizzata
    // const actualImageIndex = actualImage.classList[0].slice(actualImage.classList[0].length - 1, actualImage.classList[0].length);
    // if (actualImageIndex == items.length-1) {
    //     console.log('non puoi andare piu sotto');
    // } else {
    //     console.log('Andremo sotto');
    // }
});