import express from "express";
import { create } from "express-handlebars";

const app = express();

// Set up template engine
const hbs = create({ defaultLayout: "main" });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.enable('view cache');

app.get("/", (req, res) => {
    res.render("index",{title:"Home"});
});

app.get("/about", (req, res) => {
    res.render("about",{title:"About"});
});

app.get("/contact", (req, res) => {
    res.render("contact",{title:"contact"});
});

app.get("/email", (req, res) => {
    res.render("email",{title:"email"});
});
app.listen(8000, () => {
    console.log("Server started on port 8000");
});
