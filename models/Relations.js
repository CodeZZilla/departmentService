const mysql = require('mysql2');
const config = require('../config/config_mysql.js');

const pool = mysql.createPool(config);

class Relations {

    static addRelation(obj){
        return new Promise((resolve) => {
            const queryPosts = 'INSERT INTO `relations_cdl` (`giscipline_id`,`teacher_id`,`group_id`) VALUES (?,?,?)';
            const arr = [obj.disciplineId, obj.teacherId, obj.groupId]
            pool.query(queryPosts, arr,(error, results) => {
                if (error) throw error;
                resolve(results);
            });
        });
    }

    static deleteRelation(obj){

    }



    static getRelationById(id){
        return new Promise((resolve => {
            const queryPosts = 'SELECT groups.number_group, teachers.surname, disciplines.abbreviation, relations_cdl.giscipline_id from groups, teachers, disciplines, relations_cdl where relations_cdl.giscipline_id=? and relations_cdl.giscipline_id=disciplines.id_discipline  and  teachers.id_teacher=relations_cdl.teacher_id and groups.id_group=relations_cdl.group_id;\n';
            const arr = id;
            pool.query(queryPosts,arr,(error, results) => {
                if (error) throw error;
                resolve(results);
            });
        }));
    }

}

module.exports = Relations;