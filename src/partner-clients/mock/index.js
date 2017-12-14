const request = require('request-promisse')

module.exports = (args) => (payload) => {

    const { uri } = args

    const get = () => {
        const options = {
            method: 'GET',
            uri: uri,
            qs: {
                campainId: payload.campainId
            }
        }
        return request.get(options)
    }

    return get()
        .then(response => response)
}