const UnknownCommand = require('./UnknownCommand');
const JsInfoCommand = require('./JsInfoCommand');
const InfosecInfoCommand = require('./InfosecInfoCommand');
const NodeInfoCommand = require('./NodeInfoCommand');
const PhpInfoCommand = require('./PhpInfoCommand');
const ScalaInfoCommand = require('./ScalaInfoCommand');
const SymfonyInfoCommand = require('./SymfonyInfoCommand');
const BadInfoCommandParameter = require('./BadInfoCommandParameter');


const slashCommandFactory = (body) => new Promise((resolve, reject) => {
  if (!body) {
      throw new Error('no body')
  }


  const command = resolveCommand(body.command, body.text);

  resolve(command.generateResponse(body));
});

const resolveCommand = (cmd, content) => {
    switch (cmd) {
        case '/news':
          return resolveInfoCommandParameters(content);
    }

    return new UnknownCommand(cmd);
};

const resolveInfoCommandParameters = (cmd) => {
    switch(cmd) {
        case 'infosec':
            return new InfosecInfoCommand();
        case 'node':
            return new NodeInfoCommand();
        case 'js':
            return new JsInfoCommand();
        case 'php':
            return new PhpInfoCommand();
        case 'symfony':
            return new SymfonyInfoCommand();
        case 'scala':
            return new ScalaInfoCommand();
        default:
            return new BadInfoCommandParameter();

    }
};

module.exports = slashCommandFactory;
