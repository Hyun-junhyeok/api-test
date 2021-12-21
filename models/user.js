const db = require('../util/database') 

// 유저 클래스 생성
module.exports = class User {
    constructor(user_id, user_name) {
        this.user_id = user_id
        this.user_name = user_name
    }

    // 유저 모든 정보 fetch
    static fetchAll() {
        // return db.execute('SELECT * FROM spaus_db.users')
        return db.execute('SELECT * FROM users')
    }

    // 유저 생성
    static post(user_name) {
        // return db.execute(`INSERT INTO users (user_name) VALUES ('${user_name}')`)
        console.log("여긴가")
        return db.execute(`INSERT INTO users (user_name) VALUES (?)`, [user_name] )
    }

    // 유저 업데이트
    static update(user_id, user_name) {
        return db.execute('UPDATE users SET user_name = ? WHERE user_id = ?', [user_name, user_id])
    }

    // 유저 삭제
    static delete(user_id) {
        return db.execute('DELETE FROM users WHERE user_id = ?', [user_id]);
    }
}