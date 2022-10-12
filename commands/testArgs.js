//test to see if all arguments are being seen

module.exports.run = (client, message, args) => {
    for(arg in args) {
        message.channel.send(args[arg])
    }
}
module.exports.name = "testArgs"