const AtomCommandComponent = require('./AtomCommandComponent');

class ScalaInfoCommand extends AtomCommandComponent
{

    feed() {
        return 'http://fetchrss.com/rss/59d2b6b68a93f8930a8b4567305048147.atom';
    }
}

module.exports = ScalaInfoCommand;


