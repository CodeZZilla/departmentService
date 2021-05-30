const mysql = require('mysql2');
const config = require('../config/config_mysql.js');

const pool = mysql.createPool(config);

function translite(str)
{
    const ru = ("А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я").split("-");
    const en = ("A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya").split("-");
    let res = '';
    let i = 0, l = str.length;
    for(; i<l; i++)
    {
        const s = str.charAt(i), n = ru.indexOf(s);
        if(n >= 0) { res += en[n]; }
        else { res += s; }
    }
    return res;
}
class Cadets {

    
    static addCadets(obj){
        return new Promise((resolve) => {
            console.log(obj)
            const queryPosts = 'INSERT INTO `cadets` (`name`,`surname`,`group_id`) VALUES (?,?,?)';
            const queryPosts2 = 'SELECT id_cadet FROM cadets WHERE `name` = ? and `surname` = ?';
            const arr = [obj.name, obj.surname ];
            pool.query(queryPosts, arr,(error, results) => {
                if (error) throw error;
                resolve(results);
                pool.query(queryPosts2, arr, (error, result)=>{
                    if (error) throw error;
                    console.log(result)
                    const pass = [translite(obj.name), translite(obj.surname),'cadet', result[0].id_cadet];
                    const queryPosts3 = 'INSERT INTO `users` (`username`,`password`,`role`,`cadet_id`) VALUES (?,?,?,?)';
                    pool.query(queryPosts3, pass, (error, r)=>{
                        if (error) throw error;
                        resolve(r);
                    })
                })
            });
        });
    }

    static getAllCadets(){
        return new Promise((resolve => {
            const queryPosts = 'SELECT * FROM cadets';
            pool.query(queryPosts,(error, results) => {
                if (error) throw error;
                resolve(results);
            });
        }));
    }

    static deleteCadets(obj){
        return new Promise((resolve => {
            const queryPosts = 'delete from cadets where id_cadet = ?';
            const arr = obj.id_cadet;
            pool.query(queryPosts,arr,(error, results) => {
                if (error) throw error;
                resolve(results);
            });
        }));
    }

    static getCadetsById(id){
        return new Promise((resolve => {
            const queryPosts = 'select * from cadets where id_cadet = ?';
            const arr = id
            pool.query(queryPosts,arr,(error, results) => {
                if (error) throw error;
                resolve(results);
            });
        }));
    }

    static getOneById(username) {
        return new Promise((resolve => {
            const queryPosts = 'select * from users where username = ?';

            pool.query(queryPosts, username, (error, results) => {
                if (error) throw error;
                resolve(results);
            });
        }));
    }

    static getAllByUsername(obj) {
        return new Promise((resolve => {
            const query = 'select cadets.id_cadet from users , cadets WHERE users.username=? AND cadets.id_cadet=users.cadet_id;'
            const query2 ='SELECT groups.number_group, CONCAT(cadets.name," ",cadets.surname)  as stud, disciplines.abbreviation FROM groups, cadets, relations_cdl, disciplines  WHERE cadets.id_cadet=? and groups.id_group=cadets.group_id and groups.id_group=relations_cdl.group_id and relations_cdl.giscipline_id=disciplines.id_discipline'
            pool.query(query, obj, (error, results) => {
                if (error) throw error;
                pool.query(query2, results[0].id_cadet, (error, results) => {
                    if (error) throw error;
                    console.log(results)
                    resolve(results);
                })
                // console.log(results)
                // resolve(results);
            });
        }));
    }
}

module.exports = Cadets;

