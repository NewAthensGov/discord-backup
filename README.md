## Getting started
1. Create a bot on the [Discord Developer Portal](https://discord.com/developers/applications/).
2. Go to the Bot tab, and click Add Bot.
3. Click Reset Token to generate your secret bot token.
4. Add the secret bot token to `settings["token"]` in `backup.js`.
5. Go back to the General Informaiton tab and get your APPLICATION ID.
6. Add the bot to the server you wish to backup with the following URL:
    > https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_APPLICATION_ID_HERE&permissions=0&scope=bot
7. Add the name of the target server to the `let guild =` variable in `backup.js`.
8. Open command prompt or terminal and navigate to the folder that holds these scripts using this command: `cd path/to/folder`.
9. Run the following command in command prompt/terminal: `node backup.js` to create your first backup.
10. To restore from a backup, add the secret bot token and the name of the server you'd like to overwrite into the `restore.js` file and repeat step 8 and 9, but with `restore.js` instead of the backup script.

## Tips
1. DO NOT SHARE YOUR BOT TOKEN WITH ANYONE ELSE!!! Anyone who has it can control your bot! That means they could make backups of any server you've added your bot to, and they could even wipe your servers by restoring from a blank backup file. VERY DANGEROUS, SO KEEP IT SECRET! If anyone gets it, you can reset the token by clicking Reset Token under the Bot tab of your bot in the discord developer portal. Once you do that, the old token won't work anymore and you'll be secure again.
2. Backing up is fairly quick, typically taking anywhere between 10 seconds and 10 minutes, depending on the size of your server.
3. Restoring is fairly slow because the discord API is slow. It can take hours to fully recreate a server, so make sure you're in a place where you can leave your computer running for a while until it finishes.
4. When you run the restore script on a server, it will completely wipe that server first, then it will paste in everything from the backup.

## How to not backup specific channels?
* Remove "Text Permissions > Read Messages" permissions for the bot user on each channel that you do not want backed up. If the bot cannot read the channel, it cannot back it up.

## How to backup more than 999,999 messages per channel?
* Adjust the `maxMessagesPerChannel: 999999,` variable to however many messages you want to backup.


*Be warned that the Discord API is incredibly slow and you will be looking at hours long execution time at this many messages, especially across multiple channels.*

## What options are there for the `doNotBackup` variable?
* You can chose not to backup any of the following:
    * roles
    * channels
        * This includes channels, categories, and messages.
    * emojis
    * bans
        * If you wish to backup bans, the bot must permission to ban users in order to access the ban list.

## How do I backup images?
* You can backup images by adding `saveImages: "base64"` or `saveImages: "url"` to the `backup.create()` function call.

`base64` backs up the actual image data where as `url` simply backs up a link to the Discord image hosted on the Discord server. If the Discord server gets banned, the URLs will all be deleted so it is recommended to use `base64` or not back up images at all.

*Image backups will also exponentially increase backup execution time.*

## Why is the bot not backing up my channel/messages?
* Make sure the bot has permission to read the channel and make sure the total amount of messages in the channel is not more than the `maxMessagesPerChannel` variable. To check how many messages are in a channel, you can use `in: #general-chat` or `in: #{your channel name here}` in the Discord search bar. It'll return the total amount. 
