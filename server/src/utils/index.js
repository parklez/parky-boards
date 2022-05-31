const crypto = require('crypto');
const jose = require('jose');
const {jwtSecret} = require('../config/app');

const SECRET_KEY = crypto.createSecretKey(jwtSecret, 'utf-8');


async function signJwt(userId) {
  return await new jose.SignJWT({
    userId,
  })
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(SECRET_KEY);
}

async function verifyJwt(jwt) {
  return await jose.jwtVerify(jwt, SECRET_KEY);
}

function hashPassword(pass) {
  const salt = crypto.randomBytes(16).toString('hex');
  const derivedKey = crypto.scryptSync(
    pass,
    salt,
    64,
  ).toString('hex');
  return salt + ':' + derivedKey;
}

function verifyPassword(userInput, hashed) {
  const [salt, actual] = hashed.split(':');

  // eslint-disable-next-line no-undef
  const keyBuffer = Buffer.from(actual, 'hex');
  const derivedKey = crypto.scryptSync(userInput, salt, 64);
  return crypto.timingSafeEqual(keyBuffer, derivedKey);
}

module.exports = {
  signJwt,
  verifyJwt,
  hashPassword,
  verifyPassword,
};
