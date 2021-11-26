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
let startIndex = 3;
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
    // console.log('entrato in arrowUp.addEvent');
    // const thumb = document.querySelector('.thumbnails-item.active');
    // console.log(thumb);
    const actualImage = document.querySelector('.main-img-container img');
    const actualThumb = document.querySelector('.thumbnails-item.active');
    console.log(actualImage,actualThumb);
    //trova classe img--${valore} 
    const imageClassPrefix = 'img--';
    for(let i = 0; i < actualImage.classList.length;i++) {
        const imageClassValue = parseInt(actualImage.classList[i].slice(5, actualImage.classList[i].length));
        if(actualImage.classList[i].startsWith(imageClassPrefix)){
            // const imageClassPrefix = actualImage.classList[i].slice(0,5);
            // console.log(imageClassPrefix,imageClassValue);
            //nuova classe
            console.log(imageClassPrefix,imageClassValue);
            let newClassValue = (imageClassValue -1);
            let newClass = (imageClassPrefix + newClassValue);
            actualThumb.classList.remove('active');
            (actualThumb.previousSibling).classList.add('active');
            actualImage.src = items[newClassValue];
            actualImage.classList[i].replace(newClass);
            span.innerHTML = title[newClassValue];
            p.innerHTML = text[newClassValue];
        }
    }
});
// click su arrow down
arrowDown.addEventListener('click',function() {
    const actualImage = document.querySelector('.main-img-container img');
    const actualThumb = document.querySelector('.thumbnails-item.active');
    //trova classe img--${valore} 
    const imageClassPrefix = 'img--';
    for (let i = 0; i < actualImage.classList.length; i++) {
        if (actualImage.classList[i].startsWith(imageClassPrefix)) {
            // const imageClassPrefix = actualImage.classList[i].slice(0,5);
            const imageClassValue = parseInt(actualImage.classList[i].slice(5, actualImage.classList[i].length));
            // console.log(imageClassPrefix,imageClassValue);
            //nuova classe
            const newClassValue = (imageClassValue + 1);
            const newClass = (imageClassPrefix + newClassValue);
            actualThumb.classList.remove('active');
            (actualThumb.nextSibling).classList.add('active');
            actualImage.src = items[newClassValue];
            actualImage.classList[i].replace(newClass);
            span.innerHTML = title[newClassValue];
            p.innerHTML = text[newClassValue];
        }
    }
});