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
// FINE dati ricevuti
// Acquisisco body
const body = document.querySelector('body');
// Creazione div.container
const container = document.createElement('div');
container.classList.add('container');
// Creazione div.main-img-container
const mainImgContainer = document.createElement('div');
mainImgContainer.classList.add('main-img-container');
mainImgContainer.style.backgroundImage = `url(${items[0]})`;
// Creazione img.main-img
// const mainImg = document.createElement('img');
// mainImg.classList.add('main-img');
// Creazione titolo
const h1 = document.createElement('h1');
h1.innerHTML = title[0];
// Creazione text
const p = document.createElement('p');
p.innerHTML = text[0];
// Creazione div.thumbmails-menu
const thumbnailsMenu = document.createElement('div');
thumbnailsMenu.classList.add('thumbnails-menu');
// inserimento nel DOM degli elementi creati
body.prepend(container);
container.append(mainImgContainer,thumbnailsMenu);
mainImgContainer.append(h1,p);
// mainImgContainer.append(mainImg);
// Creazione e inserimento nel dom div.thumbnails-item
for(let i = 0; i<items.length;i++) {
    // Creazione item Thumbnails
    const thumbnailsItem = document.createElement('img');
    thumbnailsItem.classList.add('thumbnails-item');
    thumbnailsItem.src=items[i];
    thumbnailsMenu.innerHTML += thumbnailsItem.outerHTML;
    // Creazione img Thumbnails
}
// Creazione div.arrow-up/arrow-down
const arrowUp = document.createElement('div');
arrowUp.classList.add('arrow-up');
const arrowDown = document.createElement('div');
arrowDown.classList.add('arrow-down');
arrowUp.innerHTML = '<i class="fas fa-chevron-up"></i>';
arrowDown.innerHTML = '<i class="fas fa-chevron-down"></i>';
thumbnailsMenu.append(arrowUp,arrowDown);