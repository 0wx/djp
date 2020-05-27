const ejs = require("ejs");
const pdf = require("html-pdf");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "public/uploads/" });
const bodyParser = require("body-parser");
const rimraf = require("rimraf");
const express = require("express");
const app = new express();
const rm = rimraf.sync;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.listen(process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.render("upload");
});

app.post("/pdf", upload.array("lampiran"), (req, res) => {
  let data = req.body;
  data["bufflampiran"] = [];
  req.files.forEach((x) => {
    data.bufflampiran.push(fs.readFileSync("./" + x.path, "base64"));
    rm("./" + x.path);
  });
  data["title"] = data.nama;
  ejs.renderFile(
    path.join(__dirname, "./views/", "index.ejs"),
    data,
    (err, data) => {
      if (err) {
        res.send(err);
        console.log(err);
      } else {
        let options = {
          height: "33cm",
          width: "21cm",
          border: {
            top: "1cm", // default is 0, units: mm, cm, in, px
            right: "1cm",
            bottom: "1cm",
            left: "1cm",
          },
        };
        pdf
          .create(data, options)
          .toFile("./public/uploads/result.pdf", function (err, data) {
            if (err) {
              res.send("xxx");
            } else {
              var xdata = fs.readFileSync("./public/uploads/result.pdf");
              res.contentType("application/pdf");
              res.send(xdata);
            }
          });
      }
    }
  );
});

function f(n) {
  let x = n.toString().split("");
  let res = "";

  for (let i = x.length - 1, c = 1; i > -1; i--, c++) {
    res = x[i] + res;
    if (c % 3 == 0 && i != 0) res = "." + res;
  }
  return res;
}
