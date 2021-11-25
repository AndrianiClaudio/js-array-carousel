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
// Creazione div.main-img
const mainImg = document.createElement('div');
mainImg.classList.add('main-img');
// Creazione div.thumbmails-menu
const thumbnailsMenu = document.createElement('div');
thumbnailsMenu.classList.add('thumbnails-menu');
// Creazione div.arrow-up
const arrowUp = document.createElement('div');
arrowUp.classList.add('arrow-up');
// Creazione div.arrow-down
const arrowDown = document.createElement('div');
arrowDown.classList.add('arrow-down');

//creo il mio DOM
body.prepend(container);
container.append(mainImg,thumbnailsMenu);
// Creazione e inserimento nel dom div.thumbnails-item
for(let i = 0; i<items.length;i++) {
    const thumbnailsItem = document.createElement('div');
    thumbnailsItem.classList.add('thumbnails-item');
    // console.log(i,thumbnailsItem);
    thumbnailsMenu.innerHTML += thumbnailsItem.outerHTML;
}
thumbnailsMenu.append(arrowUp,arrowDown);
arrowUp.innerHTML = '<i class="fas fa-chevron-up"></i>';
arrowDown.innerHTML = '<i class="fas fa-chevron-down"></i>';
// inserisco le immagini negli appositi contenitori
