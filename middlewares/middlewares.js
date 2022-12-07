

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
    }

    res.status(code).json({message})
}

module.exports = { authn, authz, errorHandler}
