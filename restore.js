const Discord = require("discord.js"),
backup = require("discord-backup"),
client = new Discord.Client(),
settings = {
    token: "insert token here"
};

client.on("ready", () => {
    console.log("Successfully connected to Discord.");

    backup.setStorageFolder(__dirname + "/backups/");
    console.log("Set backup location.");

    let guild = client.guilds.cache.find(guild => guild.name === "My server");
    console.log("Found guild ID from guild name: " + guild.id);

    let startTime = Math.round(new Date().getTime());

    const backupID = "979204539011956736";
    



    backup.load(backupID, guild, {
        maxMessagesPerChannel: 999999
    }).then(() => {
      
    });



});

client.login(settings.token);
