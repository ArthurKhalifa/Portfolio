// ====== CHANGING BG COLOR BY SCROLL ===== // 
// const navEL = document.querySelector('.header')[0];
// const bgBlack = document.getElementsByClassName('header')[0];

// window.addEventListener('scroll', () => {
//   if (window.scrollY >= 65) {
//     bgBlack.style.backgroundColor = "red"
//   } else {
//     bgBlack.style.backgroundColor = "transparent"
//   }
// });

/*===================== ANIMATION =====================*/

const menu = document.getElementById("botao");

menu.onclick = function () {
    menu.classList.toggle("openmenu");
}

// ============================ CHANGE THEME ============================ //

function themeToggle() {
    return document.documentElement.classList.toggle('light');
}

// ============================ CHANGE REDIRECT IMG ============================ //
function changeCall0() {
    const callmeImg = document.getElementById('img_right')
    if (callmeImg.src.match('img/imgCont/callR.svg')) {
        callmeImg.src = 'img/imgCont/call.svg'
    } else {
        callmeImg.src = 'img/imgCont/callR.svg'
    }
}
//=========


function changeCall() {
    const meImg = document.getElementById('me-img')
    if (meImg.src.match('img/imgCont/meR.svg')) {
        meImg.src = 'img/imgCont/me.svg'
    } else {
        meImg.src = 'img/imgCont/meR.svg'
    }
}

//=========

function changeStt() {
    const meImg = document.getElementById('personStart')
    if (meImg.src.match('img/imgCont/personP.svg')) {
        meImg.src = 'img/imgCont/personO.svg'
    } else {
        meImg.src = 'img/imgCont/personP.svg'
    }
}
// ============================ CHANGE GITHUB IMG ============================ //
// function changeGH() {
//     const aboutImg = document.getElementById('reed2')
//     if (aboutImg.src.match('img/icon/gW.png')) {
//         aboutImg.src = 'img/icon/gB.png'
//     } else {
//         aboutImg.src = 'img/icon/gW.png'
//     }
// }

// //==================
// function changeGH2() {
//     const aboutImg = document.getElementById('reed4')
//     if (aboutImg.src.match('img/icon/gW.png')) {
//         aboutImg.src = 'img/icon/gB.png'
//     } else {
//         aboutImg.src = 'img/icon/gW.png'
//     }
// }

// //==================
// function changeGH3() {
//     const aboutImg = document.getElementById('reed6')
//     if (aboutImg.src.match('img/icon/gW.png')) {
//         aboutImg.src = 'img/icon/gB.png'
//     } else {
//         aboutImg.src = 'img/icon/gW.png'
//     }
// }

// //==================
// function changeGH4() {
//     const aboutImg = document.getElementById('reed8')
//     if (aboutImg.src.match('img/icon/gW.png')) {
//         aboutImg.src = 'img/icon/gB.png'
//     } else {
//         aboutImg.src = 'img/icon/gW.png'
//     }
// }

// function changeGH5() {
//     const aboutImg = document.getElementById('reed10')
//     if (aboutImg.src.match('img/icon/gW.png')) {
//         aboutImg.src = 'img/icon/gB.png'
//     } else {
//         aboutImg.src = 'img/icon/gW.png'
//     }
// }

// ============================ CHANGE REDIRECT IMG ============================ //
// function changeRed() {
//     const callImg = document.getElementById('reed1')
//     if (callImg.src.match('img/icon/nxW.png')) {
//         callImg.src = 'img/icon/nxB.png'
//     } else {
//         callImg.src = 'img/icon/nxW.png'
//     }
// }

// // =================
// function changeRed2() {
//     const callImg = document.getElementById('reed3')
//     if (callImg.src.match('img/icon/nxW.png')) {
//         callImg.src = 'img/icon/nxB.png'
//     } else {
//         callImg.src = 'img/icon/nxW.png'
//     }
// }

// // =================
// function changeRed3() {
//     const callImg = document.getElementById('reed5')
//     if (callImg.src.match('img/icon/nxW.png')) {
//         callImg.src = 'img/icon/nxB.png'
//     } else {
//         callImg.src = 'img/icon/nxW.png'
//     }
// }

// // =================
// function changeRed4() {
//     const callImg = document.getElementById('reed7')
//     if (callImg.src.match('img/icon/nxW.png')) {
//         callImg.src = 'img/icon/nxB.png'
//     } else {
//         callImg.src = 'img/icon/nxW.png'
//     }
// }

// // =================
// function changeRed5() {
//     const callImg = document.getElementById('reed9')
//     if (callImg.src.match('img/icon/nxW.png')) {
//         callImg.src = 'img/icon/nxB.png'
//     } else {
//         callImg.src = 'img/icon/nxW.png'
//     }
// }

// // =================
// function changeRed6() {
//     const callImg = document.getElementById('fullL')
//     if (callImg.src.match('img/icon/nxW.png')) {
//         callImg.src = 'img/icon/nxB.png'
//     } else {
//         callImg.src = 'img/icon/nxW.png'
//     }
// }
// // =================
// function changeRed7() {
//     const callImg = document.getElementById('newsL')
//     if (callImg.src.match('img/icon/nxW.png')) {
//         callImg.src = 'img/icon/nxB.png'
//     } else {
//         callImg.src = 'img/icon/nxW.png'
//     }
// }
// ============================ PORT2 See More ============================ //
// const seeMais = document.getElementsByClassName('seeMais')[0];
// const portS = document.getElementsByClassName('portS')[0];

// function more() {
//     portS.classList.add('ativado')
// }
//============================ CHANGE TOP ICON ============================ //
function changeTop() {
    const weather = document.getElementsByClassName('top')
    if (weather.src.match('img/icon/tp.png')) {
        weather.src = 'img/icon/TopB.png'
    } else {
        weather.src = 'img/icon/tp.png'
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
// function changeAbt() {
//     const abt = document.getElementById('eml')
//     if (abt.src.match("img/icon-about/emailBLACK.png")) {
//         abt.src = "img/icon-about/emailWHITE.png"
//     } else {
//         abt.src = "img/icon-about/emailBLACK.png"
//     }
// }
// ==================================
// function changeAbt2() {
//     const tba = document.getElementById('calender')
//     if (tba.src.match("img/icon-about/calendarBLACK.png")) {
//         tba.src = "img/icon-about/calendarWHITE.png"
//     } else {
//         tba.src = "img/icon-about/calendarBLACK.png"
//     }
// }
// ==================================
// function changeAbt3() {
//     const bat = document.getElementById('zaap')
//     if (bat.src.match("img/icon-about/zapBLACK.png")) {
//         bat.src = "img/icon-about/zapWHITE.png"
//     } else {
//         bat.src = "img/icon-about/zapBLACK.png"
//     }
// }
// ==================================
// function changeAbt4() {
//     const tab = document.getElementById('location')
//     if (tab.src.match("img/icon-about/locationWHITE.png")) {
//         tab.src = "img/icon-about/locationBLACK.png"
//     } else {
//         tab.src = ""
//     }
// }
// ==================================
// function changeAbt5() {
//     const ttab = document.getElementById('education')
//     if (ttab.src.match("img/icon-about/mortarboardBLACK.png")) {
//         ttab.src = "img/icon-about/mortarboardWHITE.png"
//     } else {
//         ttab.src = "img/icon-about/mortarboardBLACK.png"
//     }
// }

// ============================ TOP BUTTON  ============================ //

// const toTop = document.querySelector(".top")
// window.addEventListener("scroll", () => {
//     if (window.pageYOffset > 1800) {
//         toTop.classList.add("active")
//     } else {
//         toTop.classList.remove("active")
//     }
// })

// ============================ ACTIVE HEADER BY SCROLL ============================ //
const actInicio = document.querySelector("#inicio")
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 0 && window.pageYOffset < 800) {
        actInicio.classList.add("active")
    } else {
        actInicio.classList.remove("active")
    }
})
//===========================
const actSobre = document.querySelector("#sobre")
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 800 && window.pageYOffset < 1700) {
        actSobre.classList.add("active")
    } else {
        actSobre.classList.remove("active")
    }
})
// =========================
const actProjetos = document.querySelector("#projetos")
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 1700 && window.pageYOffset < 2600) {
        actProjetos.classList.add("active")
    } else {
        actProjetos.classList.remove("active")
    }
})
// =========================
const actContato = document.querySelector("#contato")
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 2600) {
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

//======= Swipers =======
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// ========== BG Header By Scroll ========== // 
const bgBlack = document.getElementsByClassName('header')[0];

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        bgBlack.style.backgroundColor = "var(--res2)"
    } else {
        bgBlack.style.backgroundColor = "transparent"
    }
});
//========
// const wel = document.getElementsByClassName('welcome')[0];

// window.addEventListener('scroll', () => {
//     if (window.scrollY >= 56) {
//         wel.style.color = "var(--gb-input)"
//     } else {
//         wel.style.color = "var(--color-w)"
//     }
// });
