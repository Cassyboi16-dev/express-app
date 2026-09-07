// import { Router } from "express";

// const router = Router()

// router.get("/", (req, res, next) => {
//     res.status(200).send("Welcome To your doom")

// })


// router.get("/bad-request", (req, res, next) => {
//     const err = next(new Error("Data not found"))
//     err.status(400)
//     next(err)
// })

// router.get("/crash", (req, res, next) => {
//     const err = next(new Error("System was overloaded"))
//     err.status = 500
//     next(err)
// })

// export default router
