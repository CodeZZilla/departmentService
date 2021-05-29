const mysql = require('mysql2');
const config = require('../config/config_mysql.js');

const pool = mysql.createPool(config);

class Groups {
    static getAllGroups(){
        return new Promise((resolve) => {
            const queryPosts = 'select * from groups;';
            pool.query(queryPosts, (error, results) => {
                if (error) throw error;
                resolve(results);
            });
        });
    }

    static addGroup(obj){
        return new Promise((resolve) => {
            const queryPosts = 'INSERT INTO `groups` (`number_group`) VALUES (?)';
            const arr = obj.group;
            pool.query(queryPosts, arr,(error, results) => {
                if (error) throw error;
                resolve(results);
            });
        });
    }

    static deleteGroup(obj){
        return new Promise((resolve => {
            const queryPosts = 'delete from groups where id_group = ?';
            const arr = obj.groupId;
            pool.query(queryPosts,arr,(error, results) => {
                if (error) throw error;
                resolve(results);
            });
        }));
    }

}

module.exports = Groups;