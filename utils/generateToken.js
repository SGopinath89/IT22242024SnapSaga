import jwt from 'jsonwebtoken';

const JWT_SECRET = '534kavi933';
const NODE_ENV = 'development';

const generateTokenAndSetCookie = function(userId, res){
    const token = jwt.sign({userId},JWT_SECRET,{
        expiresIn: '15d'
    })

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly:true, //prevent cross site attacks
        sameSite:"strict", //prevent forgery attacks
        secure:NODE_ENV !== "development"
    });
};

export default generateTokenAndSetCookie;