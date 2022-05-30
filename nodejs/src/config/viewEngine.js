import express from 'express';


let configViewEnggine = (app) => {
    app.use(express.static("./src.public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/views");

}
module.exports = configViewEnggine;