const express = require("express");
const app = express();

const sendHTML = (req, res, nxt) => {
  console.log(`nxt:${nxt}`);
  //console.log(req);
  res.sendFile(__dirname + "/index.html");
};

const sendObj = (req, res, nxt) => {
  console.log(req);
  const data = [{ name: "Khi" }, { name: "Mekhi" }, { name: "Goku" }];
  res.send(data);
};

const sendObjTwo = (req, res, nxt) => {
  console.log(req);

  const data = "next time on Dragon Ball Z";
  res.send(data);
};

const sendQueryReq = (req, res, nxt) => {
  console.log(req);
  const { first, last } = req.query;
  res.send(`First: ${first} and Last: ${last}`);
};

app.get("/", sendHTML);
app.get("/api/obj", sendObj);
app.get("/api/obj2", sendObjTwo);
/** FEEDBACK: This query should send back some HTML since the path does not start with /api/. */
app.get("/appQ/", sendQueryReq);

const port = 8888;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
