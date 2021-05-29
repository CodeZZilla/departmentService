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

class Teachers{
    static getAllTeachers(){
        return new Promise((resolve) => {
            const queryPosts = 'select * from teachers;';
            pool.query(queryPosts, (error, results) => {
                if (error) throw error;
                resolve(results);
            });
        });
    }



    static addTeacher(obj){
        return new Promise((resolve) => {
            console.log(obj)
            const queryPosts = 'INSERT INTO `teachers` (`name`,`surname`) VALUES (?,?)';
            const queryPosts2 = 'SELECT id_teacher FROM teachers WHERE `name` = ? and `surname` = ?';
            const arr = [obj.name, obj.surname ];
            pool.query(queryPosts, arr,(error, results) => {
                if (error) throw error;
                resolve(results);
                pool.query(queryPosts2, arr, (error, result)=>{
                    if (error) throw error;
                    console.log(result)
                    const pass = [translite(obj.name), translite(obj.surname),'TEACHER', result[0].id_teacher];
                    const queryPosts3 = 'INSERT INTO `users` (`username`,`password`,`role`,`teacher_id`) VALUES (?,?,?,?)';
                    pool.query(queryPosts3, pass, (error, r)=>{
                        if (error) throw error;
                        resolve(r);
                    })
                })
            });
        });
    }

    static deleteTeacher(obj){
        return new Promise((resolve => {
            const queryPosts = 'delete from teachers where id_teacher= ?';
            const queryPosts2 = 'delete from users where teacher_id= ?';
            const queryPosts3 = 'delete from relations_cdl where teacher_id= ?';
            const arr = obj.teacherId;
            pool.query(queryPosts3,arr,(error, results) => {
                if (error) throw error;
                pool.query(queryPosts2,arr,(error, results) => {
                    if (error) throw error;
                    pool.query(queryPosts,arr,(error, results) => {
                        if (error) throw error;
                        resolve(results);
                    });
                });
            })

        }));
    }

}

module.exports = Teachers;