
const mysql = require('mysql');
const config = require('../config/config_mysql.js');

const connection = mysql.createConnection(config);

class Disciplines {
    static addDisciplines(obj) {
        return new Promise((resolve) => {
            const queryPosts = 'INSERT INTO `disciplines` (`name_discipline`,`abbreviation`) VALUES (?,?,?)';
            connection.query(queryPosts, (error, results) => {
                if (error) throw error;
                resolve(results);
            });
        });
    }
}

module.exports = Disciplines;
