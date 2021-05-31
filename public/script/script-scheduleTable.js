$(document).ready(function (){
    let date = new Date();
    changeData(date.toISOString().split('T')[0]);
});

function changeSelect(value){
    let date = new Date();
    if(value == 0){
        changeData(date.toISOString().split('T')[0]);
    }else if(value == 1){
        date.setDate(date.getDate() + 1);
        changeData(date.toISOString().split('T')[0]);
    }else if(value == 2){
        date.setDate(date.getDate() + 2);
        changeData(date.toISOString().split('T')[0]);
    }
}

function changeData(date){
    $.ajax({
        url: '/admin/scheduleAdmin/getData',           /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        data: {date: date},          /* Параметры передаваемые в запросе. */
        success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
            console.log(data);
            if(data.length === 0) {
                $.get("/admin/scheduleAdmin/allAudiences", function (auds) {
                    $.each(auds, function (k, v) {
                        for (let j = 1; j <= 4; j++){
                            let form = $('#form_' + v + '_' + j);form.children(".rounded").removeClass("pz");
                            form.children(".rounded").removeClass("gz");
                            form.children(".rounded").removeClass("l");
                            form.children(".rounded").addClass("free");

                            form.children(".rounded").children(".first").children(".text-group").text('');
                            form.children(".rounded").children(".second").children(".discipline").text('Вільна аудиторія');
                            form.children('.rounded').children(".second").children('.teacher').text('');
                        }
                    });
                });
            }else {
                $.get("/admin/scheduleAdmin/allAudiences", function (auds) {
                    $.each(auds, function (k, v) {
                        for (let j = 1; j <= 4; j++){
                            let form = $('#form_' + v + '_' + j);
                            form.children(".rounded").removeClass("pz");
                            form.children(".rounded").removeClass("gz");
                            form.children(".rounded").removeClass("l");
                            form.children(".rounded").addClass("free");

                            form.children(".rounded").children(".first").children(".text-group").text('');
                            form.children(".rounded").children(".second").children(".discipline").text('Вільна аудиторія');
                            form.children('.rounded').children(".second").children('.teacher').text('');
                        }
                    });

                    $.each(data, function (key, value) {
                        let form = $('#form_' + value.audience + '_' + value.numberLesson);

                        form.children(".rounded").removeClass("free");
                        if(value.type === 'гз'){
                            form.children(".rounded").addClass("gz");
                        }else if(value.type === 'пз'){
                            form.children(".rounded").addClass("pz");
                        }else if(value.type === 'л' || value.type === 'ср'){
                            form.children(".rounded").addClass("l");
                        }

                        form.children(".rounded").children(".first").children(".text-group").text(value.group);
                        form.children(".rounded").children(".second").children(".discipline").text(value.title);
                        form.children('.rounded').children(".second").children('.teacher').text(value.teacher);
                    });
                });
            }
        }
    });
}

// let fullscreenapi = require('./api')
// let options = {
//     'method': 'GET',
//     'url': 'https://fullscreen.spec.whatwg.org/',
//     'headers':{
//     }
// };
// console.log(options)

function fullscreenFunc(){
    // console.log('ffsf')
    // document.documentElement.requestFullScreen(); // отобразить страницу в полноэкранном режиме
    // let element = document.getElementById("schedule-container"); // отобразить элемент в полноэкранном режиме 
    // if(element.requestFullScreen) {
    //     element.requestFullScreen();
    //   } else if(element.mozRequestFullScreen) {
    //     element.mozRequestFullScreen();
    //   } else if(element.webkitRequestFullScreen) {
    //     element.webkitRequestFullScreen();
    //   }


      let elem = document.querySelector("#schedule-container");

  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}

var hoursContainer = document.querySelector('.hours')
var minutesContainer = document.querySelector('.minutes')
var secondsContainer = document.querySelector('.seconds')
var tickElements = Array.from(document.querySelectorAll('.tick'))

var last = new Date(0)
last.setUTCHours(-1)

var tickState = true

function updateTime () {
  var now = new Date
  
  var lastHours = last.getHours().toString()
  var nowHours = now.getHours().toString()
  if (lastHours !== nowHours) {
    updateContainer(hoursContainer, nowHours)
  }
  
  var lastMinutes = last.getMinutes().toString()
  var nowMinutes = now.getMinutes().toString()
  if (lastMinutes !== nowMinutes) {
    updateContainer(minutesContainer, nowMinutes)
  }
  
  
  last = now
}

function tick () {
  tickElements.forEach(t => t.classList.toggle('tick-hidden'))
}

function updateContainer (container, newTime) {
  var time = newTime.split('')
  
  if (time.length === 1) {
    time.unshift('0')
  }
  
  
  var first = container.firstElementChild
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0])
  }
  
  var last = container.lastElementChild
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1])
  }
}

function updateNumber (element, number) {
  //element.lastElementChild.textContent = number
  var second = element.lastElementChild.cloneNode(true)
  second.textContent = number
  
  element.appendChild(second)
  element.classList.add('move')

  setTimeout(function () {
    element.classList.remove('move')
  }, 990)
  setTimeout(function () {
    element.removeChild(element.firstElementChild)
  }, 990)
}

setInterval(updateTime, 1000)