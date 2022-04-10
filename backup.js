const Discord = require("discord.js"),
backup = require("discord-backup"),
client = new Discord.Client(),
settings = {
    prefix: "b!",
    token: "OTYyNTU4NzY0Mzc5MTY0Njcy.YlJStA.MR1x3Q6mK75tQWuSu0D9N-RkfXM"
};

client.on("ready", () => {
    console.log("Successfully connected to Discord.");

    backup.setStorageFolder(__dirname + "/backups/");
    console.log("Set backup location.");

    let guild = client.guilds.cache.find(guild => guild.name === "Testing");
    console.log("Found guild ID from guild name: " + guild.id);

    let startTime = Math.round(new Date().getTime());

    backup.create(guild, {
        maxMessagesPerChannel: 999999,
        jsonBeautify: true,
        doNotBackup: [""],
        saveImages: "base64",
    }).then((backupData) => {
        let endTime = Math.round(new Date().getTime());
        console.log("Backup is done, ID: " + backupData.id)
        console.log("The process took: " + (endTime - startTime) / 1000 + " seconds to complete.")
        console.log("Exiting...")
        process.exit()
    });

});

client.login(settings.token);
