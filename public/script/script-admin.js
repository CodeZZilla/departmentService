// sequelize-auto -h eu-qdbr-west-01.cleardb.com -d heroku_70edf5a71dce6a8 -u bd0bcdb6c96c9c -x 9423f78e

const request = new XMLHttpRequest();
function addDiscipline() {
    console.log(document.getElementById('discipline').value)

    // let value = JSON.stringify({discipline:document.getElementById('discipline').value, abbreviation:document.getElementById('abbreviation').value });
    // request.open('POST', 'admin/addDiscipline', true);
    // request.setRequestHeader("Content-Type", "application/json");
    // request.addEventListener('load', ()=>{console.log(request.response)} );
    // request.send(value);
    $.ajax({
        url: 'admin/addDiscipline',           /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        data: {discipline:document.getElementById('discipline').value, abbreviation:document.getElementById('abbreviation').value },          /* Параметры передаваемые в запросе. */
        // success: function(info){   /* функция которая будет выполнена после успешного запроса.  */
        //     $('#qwer').text(info);
        // }
    });
}
