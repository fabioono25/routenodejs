//const { PartnerClientNotFound, PartnerValidationError } = require('../errors')
const PartnerClientFactory = require('../partner-factory')(require('../config'))

module.exports = (req, res, next) => {

    const ok = client => res.status(200).json(client)

    const payload = Object.assign(req.params, req.query)

    const { campainId } = payload

    PartnerClientFactory(campainId)
        .then(client => client(payload))
        .then(ok)
        .catch(PartnerNotFound, err => res.status(422).send(err))
        .catch(PartnerValidationError, err => res.status(400).send(err))
        .catch(next)
}
