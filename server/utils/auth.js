const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const secret = 'AwesomeTravelShop%feanfeah283841vr9qhudb289qhdq8jnd82vq';
const expiration = '3d';

const hashPassword = (password) => {
    return bcrypt.hashSync(password, saltRounds);
};

const checkPassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
};

const authMiddleware = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
    }

    if (!token) {
        res.status(400).json({ message: 'Bearer Token not supplied or invalid' });
        return;
    }

    try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token: ' + err.message });
    }

    return req;
}

const signToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
    };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

module.exports = { hashPassword, checkPassword, authMiddleware, signToken };