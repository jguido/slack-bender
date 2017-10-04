const AtomCommandComponent = require('./AtomCommandComponent');

class PhpInfoCommand extends AtomCommandComponent
{

    feed() {
        return 'http://www.planet-php.net/atom/';
    }
}

module.exports = PhpInfoCommand;


