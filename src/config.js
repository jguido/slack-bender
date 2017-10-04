const token = process.env.SLACK_API_TOKEN || '';

const config = {
    slackClient: {
        id: process.env.SLACK_CLIENT_ID || '',
        secret: process.env.SLACK_CLIENT_SECRET || '',
        token: null
    },
    httpPort: 4390,
};

module.exports = config;
