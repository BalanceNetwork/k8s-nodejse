const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors());

app.get("/", (req,res) => {
    res.send("Hello World...!!!");
});

app.get("/jwt", async (req, res) => {
    const payload = "deneme 1234 idsalşmfdaslkimfadliskmfdlsaikmn";
    const enc = await bcrypt.hash(payload, 12);

    res.send(`Payload: ${payload}, - Encoded: ${enc}`);
});

app.listen(4444, () => {
    console.log("Server started on port http://localhost:4444");
});
