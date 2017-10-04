const AtomCommandComponent = require('./AtomCommandComponent');

class JsInfoCommand extends AtomCommandComponent
{
    feed() {
        return 'https://news.js.org/feed/';
    }
}

module.exports = JsInfoCommand;


