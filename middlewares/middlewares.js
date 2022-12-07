

const authn = async (req, res, next) => {
    try {
        next()
    } catch (err) {
        next(err)
    }
}

const authz = async (req, res, next) => {
    try {
        next()
    } catch (err) {
        next(err)
    }
}

const errorHandler = async (err, req, res, next) => {
    console.log(err, 'DARI MIDDLEWARES ERROR HANDLER');
    let code = 500
    let message = "Internal server error"

    switch (err.name) {
        case "UNAUTHORIZED":
            code = 401,
            message = "Unauthorized Access"
            break;
        case "FORBIDDEN":
            code = 403,
            message = "Forbidden Access"
            break;
        case "BAD_REQUEST":
            code = 400,
            message = "Bad Request"
            break;
        case "NOT_FOUND":
            code = 404,
            message = "Not Found"
            break;
        case "INVALID_CREDENTIALS":
            code = 400,
            message = "Invalid email / password"
            break;
        case "SequelizeUniqueConstraintError":
            code = 400,
            message = err.errors[0].message
            break;
    }

    res.status(code).json({message})
}

module.exports = { authn, authz, errorHandler}
