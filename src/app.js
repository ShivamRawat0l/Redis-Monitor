import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { getList, addUser,deleteList } from "./model/query.js";
import md5 from "md5";
const app = express();
const PORT = 3000;
const __dirname = path.resolve();
app.use("/static", express.static("static"));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/templates/index_page.html"));
});

//@Fetch data from SQLLite DataBase
app.get("/api/redis_list", async (req, res) => {
    var a = getList();
    a.then((d) => {
        res.json({ success: 1, data: d });
    });
});

app.post("/api/add", (req, res) => {
    try {
        var a = addUser({
            md5: md5(req.body.host + req.body.port.toString()),
            host: req.body.host,
            port: req.body.port,
            password: req.body.password,
        });

        a.then((d) => {
            res.json({ success: 1, data: d });
        });
    } catch {
        res.json({ success: 0, data: "Ping error!" });
    }
});

app.post('/api/del',(req,res)=>{
    try {
        deleteList(req.body.md5)

            res.json({ success: 1, data: 'Success!'});
       
    } catch {
        res.json({ success: 0, data: "Not Found!" });
    }
})
app.listen(PORT, () => {
    console.log("Server Listening 127.0.0.1:" + PORT);
});
