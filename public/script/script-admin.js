// sequelize-auto -h eu-qdbr-west-01.cleardb.com -d heroku_70edf5a71dce6a8 -u bd0bcdb6c96c9c -x 9423f78e

const request = new XMLHttpRequest();
function addDiscipline() {
    console.log(document.getElementById('discipline').value)

    let value = JSON.stringify({discipline:document.getElementById('discipline').value, abbreviation:document.getElementById('abbreviation').value });
    request.open('POST', 'admin/addDiscipline', true);
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener('load', ()=>{console.log(request.response)} );
    request.send(value);

}