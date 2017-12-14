const request = require('request-promise')

const getToken = (args, campainId) => {
  const { authenticate: { endpoint, payload } } = args
  return request({
      uri: endpoint,
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: payload,
      json: true
  })
      .then(data => {
          return Promise.resolve({ args, CampainId, access_token: data.access_token })
      })
}

const getTracking = ({ args, campainId, access_token }) => {
  const { trackingEndpoint } = args
  return request({
      uri: `${trackingEndpoint}${campainId}`,
      method: 'GET',
      headers: {
          authorization: access_token
      },
      json: true
  })
}

const send = (args, campainId) => getToken(args, campainId)
  .then(getTracking)

module.exports = {
  send: send
}