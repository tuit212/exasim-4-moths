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



  let header__loginLink = document.querySelector(".header__login-link");

  function userNames() {

    let userNamesRes = " "

    userNamesRes += `
    <p> My content </p>

    `
    header__loginLink.innerHTML = userNamesRes
  }

  userNames();


  let section__modal = document.querySelector(".section-modal");
  header__loginLink.addEventListener("click", (e) => {
    e.preventDefault();

    let body = document.querySelector("body")

    section__modal.style.display = "block";
    body.style.backgroundColor = "#000aa";
    

  });






  
var firebaseConfig = {
    apiKey: "AIzaSyDWslmRhJ8Bq3E_4qX3WIewRJJTo-g4Ybo",
    authDomain: "singup-ccddb.firebaseapp.com",
    databaseURL: "https://singup-ccddb-default-rtdb.firebaseio.com",
    projectId: "singup-ccddb",
    storageBucket: "singup-ccddb.appspot.com",
    messagingSenderId: "200245720914",
    appId: "1:200245720914:web:0e355d6483e250b838ac8b",
    measurementId: "G-CH3L9B0Y1H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}