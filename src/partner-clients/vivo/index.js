const httpService = require('./httpService')
//const { PartnerValidationError } = require('../../errors')   
const moment = require('moment')

const castResponse = response => {
	const { tracking: { routes } } = response

	return routes.reduce((currentItems, rout) => {
		const items = matchOrderItemsFor(route)
		return [...currentItems, ...items]
	}, [])
}

const matchError = ({ message }) => Promise.reject(PartnerValidationError(message))

module.exports = (args) => ({ campainId }) => {
    return httpService.send(args, campainId)
        .then(response => castResponse(response))
        .catch(err => matchError(errr))
}
