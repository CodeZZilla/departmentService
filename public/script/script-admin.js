// sequelize-auto -h eu-qdbr-west-01.cleardb.com -d heroku_70edf5a71dce6a8 -u bd0bcdb6c96c9c -x 9423f78e

const request = new XMLHttpRequest();

document.querySelectorAll('.adm').forEach(x=>x.style.display ='none');
function addDiscipline() {
    $.post("/admin/addDiscipline", {
        discipline: document.getElementById('discipline').value,
        abbreviation: document.getElementById('abbreviation').value
    }).done(function (data) {
            console.log(data);
            $.ajax({
                url: '/admin/getAll2',           /* Куда пойдет запрос */
                method: 'get',                  /* Метод передачи (post или get) */
                dataType: 'json',               /* Тип данных в ответе (xml, json, script, html). */
                success: function (data) {
                    $('#disciplineDiv').empty();
                    $.each(data, function (key, value){
                        let str = "<tr>\n" +
                            "                                    <!-- <th></th> -->\n" +
                            "                                    <td>"+ value.name_discipline + "</td>\n" +
                            "                                    <td style=\"width: 30px;\">\n" +
                            "                                        <a href=\"/admin/discipline/"+ value.id_discipline + "\" type=\"button\" class=\"btn btn-outline-success btn-sm\">\n" +
                            "                                            <!-- route edit group  -->\n" +
                            "                                            Змінити\n" +
                            "                                        </a>\n" +
                            "                                    </td>\n" +
                            "                                    <!-- НАДО ДОБАВИТЬ РОУТИ  -->\n" +
                            "                                    <td style=\"width: 30px;\">\n" +
                            "                                        <a onclick=\"deleteDiscipline(this.id)\" id='"+ value.id_discipline +"' href=\"#\" class=\"trash-icon\">\n" +
                            "                                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"\n" +
                            "                                                 viewBox=\"0 0 24 24\">\n" +
                            "                                                <path d=\"M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z\"/>\n" +
                            "                                            </svg>\n" +
                            "                                        </a>\n" +
                            "                                    </td>\n" +
                            "                                </tr>";
                        $('#disciplineDiv').append(str);
                        console.log(value);
                    });
                }
            });
        })
        .fail(function () {
            alert("error");
        });
}

function deleteDiscipline(obj) {
    console.log(obj);

    $.post("/admin/deleteDiscipline", {id_discipline: obj})
        .done(function (data) {
            console.log(data);
            $.ajax({
                url: '/admin/getAll2',           /* Куда пойдет запрос */
                method: 'get',                  /* Метод передачи (post или get) */
                dataType: 'json',               /* Тип данных в ответе (xml, json, script, html). */
                success: function (data) {
                    $('#disciplineDiv').empty();

                    $.each(data, function (key, value){
                        let str = "<div class=\"accordion\" id=\"accordionPanelsStayOpenExample\">\n" +
                            "                                              <div class=\"discipline-block\" style=\"display: flex;  \">\n" +
                            "                                                <div class=\"accordion-item\" style=\"width: 95%;\">\n" +
                            "                                                    <h2 class=\"accordion-header\" id=\"panelsStayOpen-headingTwo\" style=\"display: flex; justify-content: space-between;\">\n" +
                            "                                                        <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#panelsStayOpen-<%= allDiscipline[i].id_discipline %>\" aria-expanded=\"false\" aria-controls=\"panelsStayOpen-<%= allDiscipline[i].id_discipline %>\">\n" +
                                                                                            value.name_discipline +
                            "                                                        </button>\n" +
                            "                                                    </h2>\n" +
                            "                                                    <div id=\"panelsStayOpen-<%= allDiscipline[i].id_discipline %>\" class=\"accordion-collapse collapse\" aria-labelledby=\"panelsStayOpen-headingTwo\">\n" +
                            "                                                        <div class=\"accordion-body\">\n" +
                            "                                                            <div class=\"block\">\n" +
                            "                                                                <div class=\"first\">\n" +
                            "                                                                    <table class=\"table table-bordered\">\n" +
                            "                                                                        <tbody>\n" +
                            "                                                                        <tr>\n" +
                            "                                                                            <th style=\"width: 30px; \" scope=\"row\" >1</th>\n" +
                            "                                                                            <td >Редзюк</td>\n" +
                            "                                                                            <td >281</td>\n" +
                            "                                                                            <td style=\"width: 30px;\">\n" +
                            "                                                                                <a href=\"#\" class=\"trash-icon m-2\">\n" +
                            "                                                                                    <svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"><path d=\"M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z\"/></svg>\n" +
                            "                                                                                </a></td>\n" +
                            "                                                                        </tr>\n" +
                            "                                                                        </tbody>\n" +
                            "                                                                    </table>\n" +
                            "                                                                </div>\n" +
                            "                                                            </div>\n" +
                            "                                                            <!-- <div class=\"btns\">\n" +
                            "                                                                <button type=\"button\" class=\"btn btn-outline-danger m-1\">\n" +
                            "                                                                    Видалити викладача</button>\n" +
                            "                                                                <button type=\"button\" class=\"btn btn-success m-1\">\n" +
                            "                                                                    Зберегти зміни</button>\n" +
                            "                                                            </div> -->\n" +
                            "                                                        </div>\n" +
                            "                                                    </div>\n" +
                            "                                                </div>\n" +
                            "                                                <a onclick=\"deleteDiscipline(this.id)\" id=\""+ value.id_discipline +"\" href=\"#\" class=\"trash-icon m-2\">\n" +
                            "                                                    <svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z\"/></svg>\n" +
                            "                                                </a>\n" +
                            "                                            </div>\n" +
                            "                                        </div>";
                        $('#disciplineDiv').append(str);
                        console.log(value);
                    });
                }
            });
        })
        .fail(function () {
            alert("error");
        });

    // // установим еще один обработчик завершения запроса
    // jqxhr.always(function () {
    //     alert("second finished");
    // });


    // $.post('', ).done(function (err, s) {
    //     console.log(s);
    //     if (s === 'success') {
    //         $.get('/admin/getAll2', function (err, data) {
    //             console.log(data);
    //         });
    //     }
    // }).fail(function () {
    //     console.log('Err');
    // });
    //
    // $.ajax({
    //     url: '',           /* Куда пойдет запрос */
    //     method: 'post',             /* Метод передачи (post или get) */
    //     dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
    //     data: {},          /* Параметры передаваемые в запросе. */
    //     success: function(data){
    //         console.log(data);

    //     }
    // });

}

function addGroup() {
    $.ajax({
        url: 'admin/addGroup',           /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        data: {
            group: document.getElementById('group').value,
        },          /* Параметры передаваемые в запросе. */

    });

}

function deleteGroup(obj) {
    console.log('dfsdsfsdfsd')
    $.ajax({
        url: 'admin/deleteGroup',           /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        data: {
            groupId: obj
        },          /* Параметры передаваемые в запросе. */

    });

}

function addTeacher() {
    console.log('dfsdsfsdfsd')

    $.ajax({
        url: 'admin/addTeacher',           /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        data: {
            name:document.getElementById('name').value,
            surname:document.getElementById('surname').value
        },          /* Параметры передаваемые в запросе. */

    });

}