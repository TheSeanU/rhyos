
const protect = require('static-auth')

import safeCompare from 'safe-compare';

const restrict = protect(
    '/',
    (username, password) => safeCompare(username, 'admin') && safeCompare(password, 'admin'),
    {
        directory: '/',
        // realm: 'vercel-basic-auth.node-static-auth',
        realm: '/',
        onAuthFailed: res => {
            res.end('Restricted area, please login (admin:admin).');
        }
    }
);

export default restrict;