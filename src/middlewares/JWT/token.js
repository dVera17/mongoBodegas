import { config } from 'dotenv';
import { SignJWT } from 'jose';
import { plainToClass, classToPlain } from 'class-transformer';
import Bodega from '../../storage/Bodega.js';
config();

const generateToken = async (req, res) => {
    try {
        let inst = plainToClass(eval(req.params.table), {}, { ignoreDecorators: true })
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
        const jwt = await jwtconstructor
            .setProtectedHeader({ alg: "HS256", typ: "JWT" })
            .setIssuedAt()
            .setExpirationTime("1h")
            .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        req.data = jwt;
        res.status(201).send({ status: 201, message: jwt });
    } catch (error) {
        res.status(404).send({ status: 404, message: "Token solicitado no valido" });
    }
}

export default generateToken;