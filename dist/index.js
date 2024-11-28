"use strict";
//* ใช้คำสั่ง tsc เพื่ออัพเดท ข้อมูลจาก insex.ts ไปยัง dist/index.js อัตโนมัติ */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const { SetColor, COLOR } = require('./config/colorUtils');
const get_data_1 = require("./model/get_data");
const port = 8888;
const server = (0, express_1.default)();
server.use(body_parser_1.default.json());
// Define routes
server.use('/api', get_data_1.get_data);
server.listen(port, () => {
    console.log(SetColor([COLOR.fg.magenta], "[Server]") +
        " " +
        SetColor([COLOR.fg.green], "Starting..."));
    console.log(SetColor([COLOR.fg.magenta], "[Server]") +
        " " +
        SetColor([COLOR.fg.green], "Starting..."));
    console.log(SetColor([COLOR.fg.magenta], "[Server]") +
        " " +
        SetColor([COLOR.fg.green], "Starting..."));
    console.log(SetColor([COLOR.fg.magenta], "Server") +
        " " +
        SetColor([COLOR.fg.red], "Getting ready..."));
    console.log(SetColor([COLOR.fg.green], `Server running on http://127.0.0.1:${port}`));
});
