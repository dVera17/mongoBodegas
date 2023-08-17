import conn from "../db/connection.js";
import { ErrorHandler } from "../storage/errorHandler.js";
const db = await conn();
let bodegas = db.collection("bodegas");

const getBodegas = async (req, res) => {
    try {
        let result = await bodegas.find({}).sort({ nombre: 1 }).toArray();
        res.send(result);
    } catch (error) {
        let err = new ErrorHandler(error);
        res.status(err.status).send(err.showMessage());
    }
}

const addBodega = async (req, res) => {
    try {
        let result = await bodegas.insertOne(req.body)
        res.send(result)
    } catch (error) {
        let err = new ErrorHandler(error);
        res.status(err.status).send(err.showMessage());
    }
}

export const bodegaController = {
    getBodegas,
    addBodega
}