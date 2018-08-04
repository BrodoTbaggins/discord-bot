module.exports = {
    name: '175',
    description: '175',
    execute(message, args) {

    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            const dispatcher = connection.playFile('./taunts/Do It.mp3');
     dispatcher.on("end", end => {
       
       });
          })
          .catch(console.log);
      } else {
        message.reply('You need to join a voice channel first!');
      }
    
    },
};