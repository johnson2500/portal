"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_1 = require("./services/test");
const app = express_1.default();
const port = 3000;
const router = express_1.default.Router();
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
app.use('*', router);
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.get('/test', test_1.test);
// tslint:disable-next-line: arrow-parens
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map