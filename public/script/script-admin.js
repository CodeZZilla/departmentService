// sequelize-auto -h eu-qdbr-west-01.cleardb.com -d heroku_70edf5a71dce6a8 -u bd0bcdb6c96c9c -x 9423f78e

const request = new XMLHttpRequest();

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

function addGroup() {
    $.post("/admin/addGroup", {
        group: document.getElementById('group').value
    }).done(function (data) {
        console.log(data);
        $.ajax({
            url: '/admin/getAllGroups',           /* Куда пойдет запрос */
            method: 'get',                  /* Метод передачи (post или get) */
            dataType: 'json',               /* Тип данных в ответе (xml, json, script, html). */
            success: function (data) {
                console.log(data);
                $('#groupsDiv').empty();
                let i = 1;
                $.each(data, function (key, value){
                    console.log(value);
                    let str = "<tr>\n" +
                        "                                    <th scope=\"row\" style=\"width: 30px;\">"+ i++ +"</th>\n" +
                        "                                    <td>" + value.number_group +"</td>\n" +
                        "                                    <td style=\"width: 30px;\">\n" +
                        "                                        <button href=\"/editGroup\" type=\"button\" class=\"btn btn-outline-success btn-sm\">\n" +
                        "                                            <!-- route edit group  -->\n" +
                        "                                            Змінити\n" +
                        "                                        </button>\n" +
                        "                                    </td>\n" +
                        "                                    <td style=\"width: 30px;\">\n" +
                        "                                        <a onclick=\"deleteGroup(this.id)\" id=\"" + value.id_group +"\" href=\"#\"\n" +
                        "                                           class=\"trash-icon\">\n" +
                        "                                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"\n" +
                        "                                                 viewBox=\"0 0 24 24\">\n" +
                        "                                                <path d=\"M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z\"/>\n" +
                        "                                            </svg>\n" +
                        "                                        </a>\n" +
                        "                                    </td>\n" +
                        "                                </tr>";
                    $('#groupsDiv').append(str);
                });
            }
        });
    }).fail(function () {
            alert("error");
        });
}

function deleteGroup(obj) {
    $.post("/admin/deleteGroup", {
        groupId: obj
    }).done(function (data) {
        $.ajax({
            url: '/admin/getAllGroups',           /* Куда пойдет запрос */
            method: 'get',                  /* Метод передачи (post или get) */
            dataType: 'json',               /* Тип данных в ответе (xml, json, script, html). */
            success: function (data) {
                $('#groupsDiv').empty();
                $.each(data, function (key, value){
                    let str = "<tr>\n" +
                        "                                    <th scope=\"row\" style=\"width: 30px;\">"+ (key + 1) +"</th>\n" +
                        "                                    <td>" + value.number_group +"</td>\n" +
                        "                                    <td style=\"width: 30px;\">\n" +
                        "                                        <button href=\"/editGroup\" type=\"button\" class=\"btn btn-outline-success btn-sm\">\n" +
                        "                                            <!-- route edit group  -->\n" +
                        "                                            Змінити\n" +
                        "                                        </button>\n" +
                        "                                    </td>\n" +
                        "                                    <td style=\"width: 30px;\">\n" +
                        "                                        <a onclick=\"deleteGroup(this.id)\" id=\"" + value.id_group +"\" href=\"#\"\n" +
                        "                                           class=\"trash-icon\">\n" +
                        "                                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"\n" +
                        "                                                 viewBox=\"0 0 24 24\">\n" +
                        "                                                <path d=\"M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z\"/>\n" +
                        "                                            </svg>\n" +
                        "                                        </a>\n" +
                        "                                    </td>\n" +
                        "                                </tr>";
                    $('#groupsDiv').append(str);
                });
            }
        });
    }).fail(function () {
        alert("error");
    });
}