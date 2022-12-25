let card__edit = document.querySelector(".card__edit");

function cardEdit() {
    let cardrRes = ""

    cardrRes += `

        Card( 1 )

    ` 
    card__edit.innerHTML = cardrRes
}

cardEdit();

let cards = document.querySelector('#boxLeftCar');
let card = document.querySelector('#boxLeftCard');
let btn1 = document.querySelector('#boxLeftBtn1');
let btn2 = document.querySelector('#boxLeftBtn2');
let list = document.querySelector('#boxRightList');


let arr = [
    {
        book:'./img/image.svg',
        title:'The Three Musketeers, by Alexandre Dumas',
        price:'$39.00'
    },
    {
        book:'./img/image.svg',
        title:'The Three Musketeers, by Alexandre Dumas',
        price:'$39.00'
    },
    {
        book:'./img/image.svg',
        title:'The Three Musketeers, by Alexandre Dumas',
        price:'$39.00'
    },
    {
        book:'./img/image.svg',
        title:'The Three Musketeers, by Alexandre Dumas',
        price:'$39.00'
    },
    {
        book:'./img/image.svg',
        title:'The Three Musketeers, by Alexandre Dumas',
        price:'$39.00'
    },
    {
        book:'./img/image.svg',
        title:'The Three Musketeers, by Alexandre Dumas',
        price:'$39.00'
    },
 
];

function addCard(){
    let result = ' '

    for (let i = 0; i <arr.length; i++) {
        result += `
        <div class="box__left__car" >
        <div class="box__left__car__left">
    <img src="${arr[i].book}" alt="" class="box__left__car__left__img">
</div>
<div class="box__left__car__right">
    <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
    <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
    <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
    <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
    <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
    <h3 class="box__left__car__left__title1">
        ${arr[i].title}
    </h3>
    <h4 class="box__left__car__left__title2">
        ${arr[i].price}
    </h4>
</div>
</div>

        `
    }

    cards.innerHTML = result
}

// addCard()



let arr2 = [
    {
        book:'./img/image.svg',
        title:'The Three Musketeers, by Alexandre Dumas',
        price:'$39.00'
    },
    {
        book:'./img/image.svg',
        title:'The Three Musketeers, by Alexandre Dumas',
        price:'$39.00'
    },
    {
        book:'./img/image.svg',
        title:'The Three Musketeers, by Alexandre Dumas',
        price:'$39.00'
    },
    {
        book:'./img/image.svg',
        title:'The Three Musketeers, by Alexandre Dumas',
        price:'$39.00'
    },
    {
        book:'./img/image.svg',
        title:'The Three Musketeers, by Alexandre Dumas',
        price:'$39.00'
    },
    {
        book:'./img/image.svg',
        title:'The Three Musketeers, by Alexandre Dumas',
        price:'$39.00'
    },
 
];

function aCard(){
    let result = ' '

    for (let i = 0; i <arr.length; i++) {
        result += `
        <div class="box__left__car" >
        <div class="box__left__car__left">
    <img src="${arr2[i].book}" alt="" class="box__left__car__left__img">
</div>
<div class="box__left__car__right">
    <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
    <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
    <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
    <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
    <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
    <h3 class="box__left__car__left__title1">
        ${arr[i].title}
    </h3>
    <h4 class="box__left__car__left__title2">
        ${arr2[i].price}
    </h4>
</div>
</div>

        `
    }

    card.innerHTML = result
}
let cardf= [
    {
        kitob:'./img/fop123.svg',
        bookName: 'The Three Musketeers',
        price : '$40.00'
    },
    {
        kitob:'./img/fop123.svg',
        bookName: 'The Three Musketeers',
        price : '$40.00'
    },
    {
        kitob:'./img/fop123.svg',
        bookName: 'The Three Musketeers',
        price : '$40.00'
    },
    {
        kitob:'./img/fop123.svg',
        bookName: 'The Three Musketeers',
        price : '$40.00'
    },
    {
        kitob:'./img/fop123.svg',
        bookName: 'The Three Musketeers',
        price : '$40.00'
    },  {
        kitob:'./img/fop123.svg',
        bookName: 'The Three Musketeers',
        price : '$40.00'
    },
]



function searchBook(){
    let res = " "
    for (let i = 0; i < cardf.length; i++) {

        res +=  `
        <li class="box__right__item">
        <img src="${cardf[i].kitob}" alt="" class="box__right__item__img">
        <h3 class="box__right__item__title">
                ${cardf[i].bookName}
        </h3>
        <div class="box__right__item__car">
            <p class="box__right__item__car__text">
                ${cardf[i].price}
            </p>
           <span>
            <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
            <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
            <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
            <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
            <i class="fa-sharp fa-solid fa-star box__left__car__left__icon"></i>
           </span>
        </div>
        <button class="box__right__item__btn" id="boxRightItem">Sotib olish</button>
    </li>
        `
    }

    list.innerHTML = res
}


searchBook()


btn2.addEventListener('click', addCard,)
btn1.addEventListener('click', aCard,)




let box__right__books = document.querySelector(".books-active");

for (let i = 0; i < box__right__books.length; i++) {
    box__right__books[i].addEventListener('click', function() {
      for (let x = 0; x < box__right__books.length; x++) {
        if (box__right__books[x] == this) {
            box__right__books[x].classList.add('booksActive');
            // box__right__books.style.background = "#FF6652"
        } else {
            box__right__books[x].classList.remove('booksActive');
            // box__right__books.style.background = "#FF6652"
        }
      }
    });
  }