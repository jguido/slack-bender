const CommandComponent = require('./CommandComponent');

class BadInfoCommandParameter extends CommandComponent
{
    /**
     *
     * @param body
     * @return {Promise}
     */
    render(body) {
        return new Promise((resolve, reject) => resolve(new Error('/info command take only 1 parameter (php|node|scala|js|infosec)')));
    }
}

module.exports = BadInfoCommandParameter;
