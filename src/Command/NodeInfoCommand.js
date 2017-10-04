const AtomCommandComponent = require('./AtomCommandComponent');

class NodeInfoCommand extends AtomCommandComponent
{
    feed() {
        return 'http://fetchrss.com/rss/59d2b6b68a93f8930a8b4567667751764.atom';
    }
}

module.exports = NodeInfoCommand;


