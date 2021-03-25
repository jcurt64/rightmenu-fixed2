
// ---------- SCROLL HEADER --------------------

window.addEventListener("scroll", function() {
    const logoImage = document.querySelector('.logo__majelink-1');
    const mainNavi = document.querySelector('#navigation__menu');
    const heightHeader = document.querySelector('#navigation__menu');

    if (window.pageYOffset > 0) {
        logoImage.style.height = "30px";
        mainNavi.classList.add('bcg-scrollHeader');
        heightHeader.style.height = '65px';
        heightHeader.style.marginTop = '0px';

    } else {
        logoImage.style.height = "45px"
        mainNavi.classList.remove('bcg-scrollHeader');
        heightHeader.style.marginTop = '20px';
    }
});

// ANIMATION LOGO + MENU

window.onload = function() {
    TweenMax.fromTo('#navigation__menu', 1.5, {
        y: -200
    },
    {
        y: 0,
        ease : Power2.easeOut
    }
    )  
}  

// ---------- ANIMATION ECRITURE MAJELINK ------------------

const textAnim = document.querySelector('.majelink__banner');
const majeAnim = document.querySelector('.majelink__subject1');

let typewriter = new Typewriter(textAnim, {
    loop: false, 
    deleteSpeed: 20
})

typewriter
.pauseFor(2000)
.changeDelay(50)
.typeString('MAJE<span style ="color: rgb(128, 128, 128);">LINK')
.start()

let typewriter2 = new Typewriter(majeAnim, {
    loop: false, 
    deleteSpeed: 20
})

typewriter2
.pauseFor(3800)
.changeDelay(35)
.typeString('Rendez votre activité <br>conforme au <span style ="color: rgb(184, 68, 54);"> RGPD<span style ="color: white;">.')
// .pauseFor(2600)
// .deleteChars(100)
// .typeString('Développez votre application respectueuse des données personnelles.')
.start()

// ANIMATION FORMULAIRE DE CONTACT 

const input_fields = document.querySelectorAll('input');
for (let i = 0; i < input_fields.length; i++) {
    let field = input_fields[i];
    field.addEventListener('input', function(e){

        if(e.target.value != ""){
            e.target.parentNode.classList.add('animation');
        } else if (e.target.value == "") {
            e.target.parentNode.classList.remove('animation');
        }
    })
}

//  -------- ANIMATION MODAL prestation + BACKDROP -------
// const modalPresta = document.querySelector('.modal-prestation');
// const backdroppresta =  document.querySelector('.backdrop-prestation');
// const prestaPriceA = document.querySelector('.subscribe-titleA');
// const prestaPriceB = document.querySelector('.subscribe-titleB');
// const buttonCloseModal = document.querySelector('.closeModal');
// // const imagePaiement = document.querySelector('.image-paiement');


// prestaPriceA.addEventListener('click', openModalPresta);
// prestaPriceB.addEventListener('click', openModalPresta);

// function openModalPresta() {
//     modalPresta.style.display = 'inlineBlock';
//     modalPresta.style.zIndex = '100';
//     backdroppresta.style.display = 'block';
//     // imagePaiement.style.zIndex = '100';    
// }

// // buttonCloseModal.addEventListener('click', closeModalPresta);

// function closeModalPresta() {
//     modalPresta.style.display = 'none';
//     backdroppresta.style.display = 'none';   
// }

// backdroppresta.addEventListener('click', closeModalPresta);


//  -------- FIN ANIMATION MODAL prestation + BACKDROP -------

// ----------- ANIMATION MODAL + BACKDROP --------
const modal = document.querySelector('.modal');
const backdrop =  document.querySelector('.backdrop');
const setTemps = setTimeout(function() {
    modal.style.display = "block";
    // modal.style.transition: transform 0.5s ease-in-out;
    backdrop.style.display = "block";
    }, 9000)


const acceptCookie = document.querySelector('.cookie-option');

acceptCookie.addEventListener('click', closeCookie);

function closeCookie() {
    modal.style.display = 'none';
    modal.style.zIndex = '200';
    backdrop.style.display = 'none';
    
}

// ---------- FIN ANIMATION ECRITURE ------------------


// ---------- VALIDATION FORMULAIRE 1---------------------

var firebaseConfig = {
    apiKey: "AIzaSyBR6oSR8t18zeBT4-OrvdxjkAQAlZi1-bQ",
    authDomain: "contact-mjlk.firebaseapp.com",
    projectId: "contact-mjlk",
    storageBucket: "contact-mjlk.appspot.com",
    messagingSenderId: "664700742329",
    appId: "1:664700742329:web:a130a0bd432acd2f894968",
    measurementId: "G-7G19BW8YSR"
    };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


//   reference messages collection

let messagesRef = firebase.database().ref('messages');

document.getElementById('formContact-majelink').addEventListener('submit', submitForm);

//  submit form
function submitForm(e) {
    e.preventDefault();
    
    // get values
    let utilisateur = getInputVal('client');
    let telephoneClient = getInputVal('phone');
    let mailClient = getInputVal('email');
    let messageClient = getInputVal('message-formulaire');

    // save message
    saveMessage(utilisateur, telephoneClient, mailClient, messageClient);

    // SHOW ALERT SUCCESS
    document.querySelector('.sucess-form1').style.display = 'block';

    // HIDE ALERT SUCCESS
    setTimeout(function() {
        document.querySelector('.sucess-form1').style.display = 'none';
    },3000);

    // CLEAR FORM
    document.querySelecto('.formBloc').reset();

}

// function to get input values

function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage(utilisateur, telephoneClient, mailClient, messageClient) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        utilisateur : utilisateur,
        telephoneClient : telephoneClient,
        mailClient : mailClient,
        messageClient : messageClient
    });
}

// ---------- FIN VALIDATION FORMULAIRE -----------------

// ----------- FIREBASE NEWSLETTER -----------------------
var firebaseConfig = {
    apiKey: "AIzaSyBrE7mp-JG0UvMw1BOXoI3VoRE7JxOwXaI",
    authDomain: "newsletterform-d9681.firebaseapp.com",
    projectId: "newsletterform-d9681",
    storageBucket: "newsletterform-d9681.appspot.com",
    messagingSenderId: "556460060094",
    appId: "1:556460060094:web:0ea13f8e5915a1d6129def",
    measurementId: "G-FN2DJLWHXD"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

//   reference messages collection

let messagesRef1 = firebase.database().ref('mails');


document.getElementById('news-form').addEventListener('submit', submitForm1);

//  submit form
function submitForm1(e) {
    e.preventDefault();
  

    // get values
    let mailNewsLetter = getInputVal('field-news');

    // save message
    saveMessage1(mailNewsLetter);

    // SHOW ALERT SUCCESS
    document.querySelector('.sucess-form2').style.display = 'block';

    // HIDE ALERT SUCCESS
    setTimeout(function() {
        document.querySelector('.sucess-form2').style.display = 'none';
    },3000);

    // CLEAR FORM
    document.querySelector('.formBloc2').reset();

}

// function to get input values

function getInputVal1(id) {
    return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage1(mailNewsLetter) {
    let newMessageRef1 = messagesRef1.push();
    newMessageRef1.set({
        mailNewsLetter : mailNewsLetter
    });
}
// FIN FIREBASE NEWSLETTER


// ----------  APPARITION QUESTIONNAIRE RGPD ------------------
    
// const buttonRgpdPrinciple = document.querySelector('.test-rgpd');
// const rgpdPrinciple = document.querySelector('.allQuestion');

// buttonRgpdPrinciple.addEventListener('click', showRgpdPrinciple);

// function showRgpdPrinciple (e) {
//     rgpdPrinciple.style.display = "block";
//     e.preventDefault();
// }
// const discoverRgpd = document.querySelector('.test-discover');

// const down1 = document.querySelector('.down1');
// const down2 = document.querySelector('.down2');
// const down3 = document.querySelector('.down3');

// const right1 = document.querySelector('.right1');
// const right2 = document.querySelector('.right2');
// const right3 = document.querySelector('.right3');

// const flecheRgpd1 = document.querySelector('.direction-rgpd1');
// const testa = flecheRgpd1.children[0];
// console.log(testa);
// const flecheRgpd2 = document.querySelector('.direction-rgpd2');
// const flecheRgpd3 = document.querySelector('.direction-rgpd3');

// // const true1

// const quest1 = document.querySelector('.quest1');
// const quest2 = document.querySelector('.quest2');
// const quest3 = document.querySelector('.quest3');

// const rgpdTrue1 = document.querySelector('.rgpd-true1');
// const rgpdTrue2 = document.querySelector('.rgpd-true2');
// const rgpdTrue3 = document.querySelector('.rgpd-true3');

// const rgpdFalse1 = document.querySelector('.rgpd-false1');
// const rgpdFalse2 = document.querySelector('.rgpd-false2');
// const rgpdFalse3 = document.querySelector('.rgpd-false3');

// const applyRgpd1 = document.querySelector('.apply-rgpd1');
// const applyRgpd2 = document.querySelector('.apply-rgpd2');
// const applyRgpd3 = document.querySelector('.apply-rgpd3');

// const inputYes1 = document.querySelector('.Yes1');
// const inputYes2 = document.querySelector('.Yes2');
// const inputYes3 = document.querySelector('.Yes3');
// const inputNo1 = document.querySelector('.No1');
// const inputNo2 = document.querySelector('.No2');
// const inputNo3 = document.querySelector('.No3');



// verifRgpd.addEventListener('click', showQuest1);

// function showQuest1(e) {
//     quest1.style.display = 'initial';

//     e.preventDefault();
// }

// inputYes1.addEventListener('change', showArrow1);

// function showArrow1() {
//     testa.style.display = 'block';
//     // down1.style.display = 'initial';
//     // right1.style.display = 'initial';

//     quest2.style.display = 'initial';
// }

// inputYes2.addEventListener('change', showArrow2);

// function showArrow2() {
//     flecheRgpd2.style.display = 'initial';
// }

// inputYes3.addEventListener('change', showArrow3);

// function showArrow3() {
//     rgpdTrue3.style.display = 'initial';
    
// }

// discoverRgpd.addEventListener('click', showQuestions);

// function showQuestions(e) {
//     quest1.style.display = 'initial';
//     e.preventDefault();
//     quest2.style.display = 'initial';
//     e.preventDefault();
//     quest3.style.display = 'initial';
//     e.preventDefault();
//     flecheRgpd1.style.display = 'initial';
//     e.preventDefault();
//     flecheRgpd2.style.display = 'initial';
//     e.preventDefault();
//     flecheRgpd3.style.display = 'initial';
//     e.preventDefault();
//     rgpdTrue1.style.display = 'initial';
//     e.preventDefault();
//     rgpdTrue2.style.display = 'initial';
//     e.preventDefault();
//     rgpdTrue3.style.display = 'initial';
//     e.preventDefault();
//     rgpdFalse1.style.display = 'initial';
//     e.preventDefault();
//     rgpdFalse2.style.display = 'initial';
//     e.preventDefault();
//     rgpdFalse3.style.display = 'initial';
//     e.preventDefault();
//     applyRgpd1.style.display = 'initial';
//     e.preventDefault();
//     applyRgpd2.style.display = 'initial';
//     e.preventDefault();
//     applyRgpd3.style.display = 'initial';
//     e.preventDefault();
// }



// ----------  FIN APPARITION QUESTIONNAIRE RGPD ------------------

// ---------- ANIMATION RIGHT MENU ------------------

// document.querySelector('.right-menu').addEventListener(
// 'click', () => document.querySelector('.navigation__item').classList.toggle('show'));

// option 2

const menuDroit = document.querySelector('.right-menu');
const navMenu = document.querySelector('.navigation__item');

menuDroit.addEventListener('click', function(){
    navMenu.classList.toggle('show');
})

// fin option 2

const allLinks = document.querySelectorAll('.menu-link');
allLinks.forEach(function(item){

    item.addEventListener('click', function(){
        navMenu.classList.toggle('show');
    })
})

// document.querySelector('.right-menu').addEventListener(
//     'click', () => document.querySelector('body').classList.remove('.right-menu'));

// body.addEventListener('click', outsideclick);
// function outsideclick() {
//     document.querySelector('.right-menu').classList.remove('show');
// }

// window.addEventListener('click', outsideclick);
// function outsideclick(e) {
//     if(e.target == ('.right-menu')) {
//         ('.right-menu').style.display = 'none';
//     } 
// }
// ---------- FIN ANIMATION RIGHT MENU ----------------
    