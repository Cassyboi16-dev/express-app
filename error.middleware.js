// export function notFound(req, res, next) {
//     const error = new Error(req.originalUrl);
//     error.status = 404;
//     next(error);

// };


// export function serverCrash(err, req, res, next){
//     const status = err.status || 500
//     const message = err.message

//     console.log(message);
    

//     res.status(status).json({
//         error: true,
//         status: status,
//         message: message
//     })
// }