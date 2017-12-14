//const { PartnerClientNotFound } = require('../errors')

module.exports = clients => ({ PartnerConfigs }) => campainId => {

    const partnerConfig = () => PartnerConfigs[campainId] || {}
    const { client, args } = partnerConfig()

    const clientCurrent = clients[client]

    return clientCurrent && Promisse.resolve(clientCurrent(args)) || Promisse.reject(PartnerClientNotFound(`No client for campain: ${campainId}`))

}