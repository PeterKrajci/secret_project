import express from "express";
import {param, validationResult} from "express-validator"

import services from "../services"


const router = express.Router();

router.get('/', (req, res) => {
    res.send('We are on blogs');
});

router.post('/', (req, res) => {
    console.log(req.body);
});

export default router;
