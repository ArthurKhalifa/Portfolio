/*===================== ANIMATION =====================*/

const menu = document.getElementById("botao");

menu.onclick = function () {
    menu.classList.toggle("openmenu");
}

// ============================ CHANGE THEME ============================ //
/*
function themeToggle() {
    return document.documentElement.classList.toggle('light');
}

// ============================ CHANGE ABOUT IMG ============================ //
function changeMe() {
    const aboutImg = document.getElementById('me-img')
    if (aboutImg.src.match('img/imgCont/meL.svg')) {
        aboutImg.src = 'img/imgCont/meD.svg'
    } else {
        aboutImg.src = 'img/imgCont/meL.svg'
    }
}

// ============================ CHANGE CONTACT IMG ============================ //
function changeCall() {
    const callImg = document.getElementById('img-right')
    if (callImg.src.match('img/imgCont/callL.svg')) {
        callImg.src = 'img/imgCont/callD.svg'
    } else {
        callImg.src = 'img/imgCont/callL.svg'
    }
}

// ============================ CHANGE TOP ICON ============================ //
function changeTop() {
    const weather = document.getElementById('top')
    if (weather.src.match('img/icon/topM.png')) {
        weather.src = 'img/icon/topG.png'
    } else {
        weather.src = 'img/icon/topM.png'
    }
}

// ============================ CHANGE ICON WEATHER ============================ //
function changeWeather() {
    const weather = document.getElementById('moon')
    if (weather.src.match('img/Weather/moon.png')) {
        weather.src = 'img/Weather/sunny.png'
    } else {
        weather.src = 'img/Weather/moon.png'
    }
}

// ============================ CHANGE ICON ABOUT ============================ //
function changeAbt() {
    const abt = document.getElementById('eml')
    if (abt.src.match("img/icon-about/emailBLACK.png")) {
        abt.src = "img/icon-about/emailWHITE.png"
    } else {
        abt.src = "img/icon-about/emailBLACK.png"
    }
}
// ==================================
function changeAbt2() {
    const tba = document.getElementById('calender')
    if (tba.src.match("img/icon-about/calendarBLACK.png")) {
        tba.src = "img/icon-about/calendarWHITE.png"
    } else {
        tba.src = "img/icon-about/calendarBLACK.png"
    }
}
// ==================================
function changeAbt3() {
    const bat = document.getElementById('zaap')
    if (bat.src.match("img/icon-about/zapBLACK.png")) {
        bat.src = "img/icon-about/zapWHITE.png"
    } else {
        bat.src = "img/icon-about/zapBLACK.png"
    }
}
// ==================================
function changeAbt4() {
    const tab = document.getElementById('location')
    if (tab.src.match("img/icon-about/locationBLACK.png")) {
        tab.src = "img/icon-about/locationWHITE.png"
    } else {
        tab.src = "img/icon-about/locationBLACK.png"
    }
}
// ==================================
function changeAbt5() {
    const ttab = document.getElementById('education')
    if (ttab.src.match("img/icon-about/mortarboardBLACK.png")) {
        ttab.src = "img/icon-about/mortarboardWHITE.png"
    } else {
        ttab.src = "img/icon-about/mortarboardBLACK.png"
    }
}

*/

// ============================ TOP BUTTON  ============================ //

const toTop = document.querySelector(".top")
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1500) {
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
})

// ============================ ACTIVE HEADER BY SCROLL ============================ //
const actInicio = document.querySelector("#inicio")
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 0 && window.pageYOffset < 700) {
        actInicio.classList.add("active")
    } else {
        actInicio.classList.remove("active")
    }
})
//===========================
const actSobre = document.querySelector("#sobre")
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 700 && window.pageYOffset < 1600) {
        actSobre.classList.add("active")
    } else {
        actSobre.classList.remove("active")
    }
})
// =========================
const actProjetos = document.querySelector("#projetos")
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 1600 && window.pageYOffset < 3800) {
        actProjetos.classList.add("active")
    } else {
        actProjetos.classList.remove("active")
    }
})
// =========================
const actContato = document.querySelector("#contato")
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 3800) {
        actContato.classList.add("active")
    } else {
        actContato.classList.remove("active")
    }
})

// ============================= HAMBURGUER ACTION ============================== //
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('header-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

// ============================ DATA ANIMATION ============================ //
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.scrollY;
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        }
    });
}

window.addEventListener('scroll', function () {
    animeScroll();
});

// ========== ACTIVE HEADER LINKS ========== // 
$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
})

// ============================ CHANGE LANGUAGE ============================ // 
/*

const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.im');
const inicio = document.querySelector('#inicio');
const sobre = document.querySelector('#sobre');
const projetos = document.querySelector('#projetos');
const contato = document.querySelector('#contato');
//=====
const aboutP = document.querySelector('.about_personal');
//=====
const desc = document.querySelector('#desc');
const contactMe = document.querySelector('#contact_me');
const send = document.querySelector('#send');
const msg = document.querySelector('#msg');
const tu = document.querySelector('.tu');
const emaill = document.querySelector('#emaill'); 
const comment = document.querySelector('#comment'); 
//======================
const welcome = document.querySelector('.welcome'); 
const btnCV = document.querySelector('.btnCV');
const age = document.querySelector('.age');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');
const localizacao = document.querySelector('.localizacao');
const educacao = document.querySelector('.educacao');
const projectTT = document.querySelector('.project_tt');
const projectDescription = document.querySelector('.project_description');
const projectDescription2 = document.querySelector('.project_description2');
const projectTitle2 = document.querySelector('.project_title2');
const btn = document.querySelector('.btn');
const descrEl = document.querySelector('.mim');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].im;
        inicio.textContent = data[attr].inicio;
        sobre.textContent = data[attr].sobre;
        projetos.textContent = data[attr].projetos;
        contato.textContent = data[attr].contato;
        //=====
        aboutP.textContent = data[attr].about_personal;
        //=====
        desc.textContent = data[attr].desc;
        contactMe.textContent = data[attr].contact_me;
        send.textContent = data[attr].send;
        msg.textContent = data[attr].msg;
        descrEl.textContent = data[attr].mim;
        btnCV.textContent = data[attr].btnCV;
        age.textContent = data[attr].age;
        email.textContent = data[attr].email;
        localizacao.textContent = data[attr].localizacao;
        educacao.textContent = data[attr].educacao;
        projectTT.textContent = data[attr].project_tt;
        projectDescription.textContent = data[attr].project_description;
        projectDescription2.textContent = data[attr].project_description2;
        projectTitle2.textContent = data[attr].project_title2;
        btn.textContent = data[attr].btn;
        welcome.textContent = data[attr].welcome;
        tu.textContent = data[attr].tu;
        emaill.textContent = data[attr].emaill;
        comment.textContent = data[attr].comment;
    });
});

var data = {
    "portuguese":
    {
        "tu": "Seu nome",
        "emaill": "Seu e-mail",
        "comment": "Digite sua mensagem",
        "welcome": "Bem vind@",
        "btnCV": "Baixar CV",
        "email": "Email: arthursantosae@hotmail.com",
        "age": "Idade: 23 anos - 09/05/1999",
        "localizacao": "Localização: Vitória de Santo Antão, Pernambuco - Brasil",
        "educacao": "Educação: Graduação - Análise e Desenvlvimentode Sistemas (andamento)",
        "project_tt": "Aqui estão meus projetos",
        "project_description": "Landing Page totalmente responsiva.",
        "project_description2": "Projeto sendo produzido.",
        "project_title2": "Em breve...",
        "btn": "Enviar",
        "sobre": "Sobre",
        "projetos": "Projetos",
        "contato": "Contato",
        //=====
        "about_personal": "Detalhes pessoais",
        //=====
        "desc": "&nbsp &nbsp Optei pelo mundo da tecnologia pelo fato de que eu sempre amei usar computadores, e quando descobri que poderia trabalhar usando-os, não pensei duas vezes.",
        "contact_me": "Entre em contato!",
        "send": "Mande-me um e-mail ou mande uma mensagem em uma de minhas redes:",
        "msg": "Me mande uma mensagem!",
        "inicio": "Início",
        "im": "Sou um Desenvolvedor Web Front-end Junior, e estou a procura <br> do meu primeiro emprego no mundo da tecnologia.",
        "descrEl": "Sobre mim",
    },
    "espanol":
    {
        "tu": "Tu nombre",
        "emaill": "Tu e-mail",
        "comment": "Escribe tu mensaje",
        "welcome": "Bienvenido",
        "btnCV": "Descargar CV",
        "email": "Email: arthursantosae@hotmail.com",
        "age": "Edad: 23 años - 09/05/1999",
        "localizacao": "Ubicación: Vitória de Santo Antão, Pernambuco - Brasil",
        "educacao": "Educación: Graduación - Análisis y Desarrollo de Sistemas (en curso)",
        "project_tt": "Aquí están mis proyectos",
        "project_description": "Landing Page totalmente receptiva.",
        "project_description2": "Proyecto que se está produciendo.",
        "project_title2": "Pronto...",
        "btn": "Mandar",
        "sobre": "Sobre",
        "projetos": "Proyectos",
        "contato": "Contacto",
        //=====
        "about_personal": "Detalles Personales",
        //=====
        "desc": "&nbsp &nbsp Me decanté por el mundo de la tecnología porque siempre me ha gustado usar computadoras, y cuando descubrí que podía trabajar con ellas, no lo pensé dos veces.",
        "contact_me": "Entre e contacto!",
        "send": "Envíame un correo electrónico o envíame un mensaje en una de mis redes:",
        "msg": "Envíeme un mensaje!",
        "inicio": "Comenzar",
        "im": "Soy Junior Front-end Web Developer, y estoy buscando mi primer trabajo en el mundo de la tecnología.",
        "descrEl": "Sobre mi.",
    },
    "english":
    {
        "tu": "Your name",
        "emaill": "Your e-mail",
        "comment": "Type your message",
        "welcome": "Welcome",
        "btnCV": "Download CV      ",
        "email": "Email: arthursantosae@hotmail.com",
        "age": "Age: 23 years old - 05/09/1999",
        "localizacao": "Location: Vitória de Santo Antão, Pernambuco - Brasil",
        "educacao": "Education: Degree - Analysis and Systems Development (in progress)",
        "project_tt": "Here are my projects.",
        "project_description": "Landing Page full responsive.",
        "project_description2": "project being produced..",
        "project_title2": "Soon...",
        "btn": "Submit",
        "sobre": "About",
        "projetos": "Projects",
        "contato": "Contact",
        //=====
        "about_personal": "Personal Details",
        //=====
        "desc": "&nbsp &nbsp I opted for the world of technology because I've always loved using computers, and when I found out that I could work using them, I didn't think twice.​",
        "contact_me": "Contact me!",
        "send": "Send me an email or message me on one of my networks:",
        "msg": "Message me!",
        "inicio": "Home",
        "im": "I'm a Junior Front-end Web Developer, and I'm looking for my first job in the technology world.",
        "descrEl": "About me",
    }
}
*/




