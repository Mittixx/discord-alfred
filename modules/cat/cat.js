const request = require("request")

exports.name = "Cat"

exports.onMessage = (message) => {
	request("http://random.cat/meow",(err,response,body) => {
		if(err){
			message.channel.sendMessage("Je n'ai pas pu récupèrer l'image de chat :(")
			return
		}
		var body = JSON.parse(response.body)
		message.channel.sendMessage(message.author+" "+body.file)
	});
}