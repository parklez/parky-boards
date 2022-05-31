/* eslint-disable no-undef */
const port = process.env.PORT || 8080;
const jwtSecret = process.env.JWT_SECRET || 'YOUWOULDNEVERHAVEGUESSEDITHUH';

module.exports = {port, jwtSecret};
