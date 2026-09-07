import express from "express"
import path from "path"
// import { notFound, serverCrash } from "./error.middleware.js"; 
// import router from "./routes/api.routes.js"
const app = express();
const port = 3004;
const user = 'Samuel'


// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use("/api", router)

// app.use(notFound)
// app.use(serverCrash)


app.use(express.static(path.join(import.meta.dirname, "Public")))
app.use("/images", express.static(path.join(import.meta.dirname, "images")))

app.get("/", (req, res) => {
    res.send('Hello,' + ' ' + user)

})


app.listen(port, () => {

    console.log('Listening on port\n This is an expresjs server\n ...Server up and running');

});

