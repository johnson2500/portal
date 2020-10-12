import express from "express";
import { test} from "./services/test";

const app = express();
const port = 3000;

const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log("Time: ", Date.now());
    next();
  });

app.use("*", router);

app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});

app.get("/test", test);

// tslint:disable-next-line: arrow-parens
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
