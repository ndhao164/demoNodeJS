import { JsonDB, Config } from 'node-json-db';
import bcrypt from 'bcrypt';

const saltRounds = 10;

const db = new JsonDB(new Config("db", true, false, '/'));

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}

export async function registerUser(body) {
    const data = {
        username: body.username,
        password: hashPassword(body.password)
    }
    await db.push("/user",data)
    return data
}