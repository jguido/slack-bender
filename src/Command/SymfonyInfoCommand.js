const AtomCommandComponent = require('./AtomCommandComponent');

class SymfonyInfoCommand extends AtomCommandComponent
{

    feed() {
        return 'http://feeds.fabien.potencier.org/aidedecamp?format=xml';
    }
}

module.exports = SymfonyInfoCommand;


