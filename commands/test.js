module.exports = {
    name: 'test',
    description: 'A command just to test and see if the bot is proccessing commands correctly',
    execute(message, args) {
        message.channel.send('Niggle bot is up and running!');
    },
};