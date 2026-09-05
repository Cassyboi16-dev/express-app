const express = require("express")
const path = require("path")
const app = express();
const port = 3000;
const user = 'Samuel'





app.use(express.static(path.join(__dirname, "Public")))
app.use("/images", express.static(path.join(__dirname, "images")))

app.get("/", (req, res) => {
    res.send('Hello,' + ' ' + user)

})


app.listen(port, () => {

    console.log('Listening on port\n This is an expresjs server\n ...Server up and running');

});

