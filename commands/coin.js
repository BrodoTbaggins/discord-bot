module.exports = {
    name: 'coin',
    description: 'A command that lets you /"flip/" a coin to get heads or tails',
    execute(message, args) {

        function coinFlip(){
            return (Math.floor(Math.random() * 2) == 0) ? 'Heads' : 'Tails';
        }

        var result = coinFlip();

        message.channel.send(args[0]);
        message.channel.send(result)
        
        if(args[0] != null){
        if(result == args[0]){
            message.channel.send("You won the coin flip!");
        }else {
            message.channel.send("You lost the coin flip");
        }
    }
        
    },
};