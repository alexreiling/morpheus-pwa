import { load, save } from './util';
import { User, PersonalData } from './types';
import Crypto from 'crypto';
import jwt from 'jsonwebtoken';
const DB_KEY = process.env.REACT_APP_BACKEND_NAME || 'morpheus-backend';
const SECRET = process.env.REACT_APP_BACKEND_SECRET || 'morpheus-backend';
const defaultDB: DB = {
  auth: [],
  users: [],
};
type DB = {
  auth: {
    username: string;
    hash: string;
  }[];
  users: User[];
};

// TODO: build express backend
export const routes = {
  auth: {
    login: async (body: { password: string; email: string }) => {
      let db: DB = load(DB_KEY) || defaultDB;
      const hash = hashText(body.password);
      const authed = db.auth.find(
        (dbUser) => dbUser.hash === hash && dbUser.username === body.email
      );
      if (!authed) throw new Error('bad credentials');
      let userData = db.users.find((dbUser) => dbUser.username === body.email);
      let token = jwt.sign(userData || {}, SECRET, {});
      return { token };
    },
    register: async (body: {
      username: string;
      password: string;
      personalData: PersonalData;
    }) => {
      let db: DB = load(DB_KEY) || defaultDB;
      if (db.auth.find((dbUser) => dbUser.username === body.username))
        throw new Error('User already exists:' + body.username);
      const hash = hashText(body.password);
      db.users.push({
        personal: body.personalData,
        userFlags: {
          profileCompletionPending: true,
        },
        username: body.username,
      });
      db.auth.push({ username: body.username, hash });
      save(DB_KEY, db);
      return;
    },
  },
  user: {
    update: async (user: User) => {
      return new Promise<{ token: string }>((resolve, reject) => {
        setTimeout(() => {
          let db: DB = load(DB_KEY) || defaultDB;
          db.users.map((dbUser) =>
            dbUser.username === user.username ? user : dbUser
          );
          save(DB_KEY, db);
          let token = jwt.sign(user || {}, SECRET, {});
          return resolve({ token });
        }, 2000);
      });
    },
  },
};
const hashText = (text: string) => {
  return Crypto.createHmac('sha256', SECRET).update(text).digest('hex');
};
const getRoute = (path: string) => {
  let levels = path.split('/');
  if (!levels.length) return;
  let subRoute: any = routes;
  for (let i = 0; i < levels.length; i++) {
    const subPath = levels[i];
    subRoute = subRoute[subPath];
  }
  return subRoute;
};
