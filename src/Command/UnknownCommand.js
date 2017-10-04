const CommandComponent = require('./CommandComponent');

class UnknownCommand extends CommandComponent
{
    /**
     *
     * @param body
     * @return {Promise}
     */
    render(body) {
        return new Promise((resolve, reject) => resolve(new Error('Command not yet learned...')));
    }
}

module.exports = UnknownCommand;
