const Eris = require("eris");

// BOT_TOKENは自身が作成したBotのBot tokenの文字を記述します。
var bot = new Eris("NDcyNDEzNDM2MDYwNDk5OTc5.DjzDZA.7fyN0NIRKObWvDrJfd89im3Vbvo");

bot.on("ready", () => {
    //botが準備できたら呼び出されるイベントです。
    console.log("Ready!");
    bot.createMessage("472415140843618305", "バチャコンどうですか");
});

// bot.on("messageCreate", (msg) => {
//     //誰かがメッセージ(チャット)を発言した時に呼び出されるイベントです。
//     if (msg.content === "!Ping") {
//         //"!Ping"というメッセージを受け取ったら"Pong!"と発言する。
//         bot.createMessage(msg.channel.id, "Pong!");
//     } else if (msg.content === "!Pong") {
//         //"!Pong" というメッセージを受け取ったら"Ping!"と発言する。
//         bot.createMessage(msg.channel.id, "Ping!");
//     }
// });

//Discordに接続します。
bot.connect();
