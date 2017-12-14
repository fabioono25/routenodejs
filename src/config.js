module.exports ={

    PartnerConfigs:
    {
        '1': { client: 'google', args: { url: 'http://www.google.com'}},
        '2': { client: 'facebook', args: { url: 'http://www.facebook.com'}}
    },
    NEWRELIC_APPNAME: process.env.NEWRELIC_APPNAME || 'DEV / Core / Router API',    
}