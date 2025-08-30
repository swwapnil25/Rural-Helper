const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
const authHeader = req.headers['authorization'] || req.headers['Authorization'];
if (!authHeader) return res.status(401).json({ message: 'No token provided' });
const parts = authHeader.split(' ');
if (parts.length !== 2) return res.status(401).json({ message: 'Invalid auth header' });
const token = parts[1];
try {
const decoded = jwt.verify(token, process.env.JWT_SECRET);
req.userId = decoded.id;
next();
} catch (err) {
return res.status(401).json({ message: 'Invalid token' });
}
};