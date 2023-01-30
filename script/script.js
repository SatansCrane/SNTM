

// Случайная серия

const allHtml = ['/SNTM/season2/seriez2/s02s01.html','/SNTM/season2/seriez2/s02s02.html','/SNTM/season2/seriez2/s02s03.html','/SNTM/season2/seriez2/s02s04.html','/SNTM/season2/seriez2/s02s05.html','/SNTM/season2/seriez2/s02s06.html','/SNTM/season2/seriez2/s02s07.html','/SNTM/season2/seriez2/s02s08.html','/SNTM/season2/seriez2/s02s09.html','/SNTM/season2/seriez2/s02s10.html','/SNTM/season2/seriez2/s02s11.html','/SNTM/season2/seriez2/s02s12.html','/SNTM/season2/seriez2/s02s13.html','/SNTM/season1/series1/s01s01.html','/SNTM/season1/series1/s01s02.html','/SNTM/season1/series1/s01s03.html','/SNTM/season1/series1/s01s04.html','/SNTM/season1/series1/s01s05.html','/SNTM/season1/series1/s01s06.html','/SNTM/season1/series1/s01s07.html','/SNTM/season1/series1/s01s08.html','/SNTM/season1/series1/s01s09.html','/SNTM/season1/series1/s01s10.html','/SNTM/season3/seriez3/s03s01.html','/SNTM/season3/seriez3/s03s02.html','/SNTM/season3/seriez3/s03s03.html','/SNTM/season3/seriez3/s03s04.html','/SNTM/season3/seriez3/s03s05.html','/SNTM/season3/seriez3/s03s06.html','/SNTM/season3/seriez3/s03s07.html','/SNTM/season3/seriez3/s03s08.html','/SNTM/season3/seriez3/s03s09.html','/SNTM/season3/seriez3/s03s10.html','/SNTM/season3/seriez3/s03s11.html','/SNTM/season3/seriez3/s03s12.html','/SNTM/season3/seriez3/s03s13.html'];


const randomSer = document.querySelector('.random-seria');
const randSeria = document.querySelector('#randseria');

function ranSer(allHtml) {
    let random = Math.floor(Math.random() * allHtml.length);
    return allHtml[random];
}

randomSer.onclick = function() {
    location.href = ranSer(allHtml);
}
randSeria.onclick = function() {
    location.href = ranSer(allHtml);
}

// Burger-menu

const navToggle = document.querySelector('.nav-toggle');
const menuIcon = document.querySelector('.menu-icon');
const navBarNone = document.querySelector('.navbar-none');

navToggle.onclick = function(){
    navBarNone.classList.toggle('navbar');
    // menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scrol');
}




