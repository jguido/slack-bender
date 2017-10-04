const CommandComponent = require('./CommandComponent');
const AtomReader = require('../Reader/AtomReader');

class AtomCommandComponent extends CommandComponent
{
    feed(){};

    /**
     *
     * @param body
     * @return {Promise}
     */
    render(body) {
        return AtomReader(this.feed(), 10);
    }
}

module.exports = AtomCommandComponent;


