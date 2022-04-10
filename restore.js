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

    let guild = client.guilds.cache.find(guild => guild.name === "Testing");
    console.log("Found guild ID from guild name: " + guild.id);

    let startTime = Math.round(new Date().getTime());

    const backupID = "962563959263723520";
    



    backup.load(backupID, guild, {
        maxMessagesPerChannel: 999999
    }).then(() => {
      
    });



});

client.login(settings.token);
