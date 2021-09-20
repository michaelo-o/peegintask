
exports.handler = async (event, context) => {
    const peegins = [
        {

            "title": "Chi chi",
            "example": "Me no get chi chi,I no get chi chi",
            "origin": "Bayelsa",
            "created_at": "2021-09-01T11:54:04.057Z",
            "permalink": "chi-chi",
            "meaning": "Small amount of money - via peegin.com",
            "user": {
                "name": "Brisa fem"
            },
            "views": {
                "view": 1
            }
        }
    ]

    if (context.clientContext.user) { //this contains info about the context of the client making the request. i.e browser 
        // fetch data & then return
        return {
            statusCode: 200, //status code 200 means everything is all right
            body: JSON.stringify(peegins)
        }
    }

    // return error status
    return {
        statusCode: 401,  // this means unauthenticated i.e, you arent signed in
        body: JSON.stringify({ mssg: 'ah ah ah, you must be logged into see this' })
    }

}