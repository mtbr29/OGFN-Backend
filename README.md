# OGFN Backend

![image](https://github.com/user-attachments/assets/47a391b9-9abb-4fc6-b9c1-a15a375f302a)



## Features
* Locker:
    * [x] Changing items.
    * [x] Changing banner icon and banner color.
    * [x] Changing item edit styles.
    * [x] Favoriting items.
    * [x] Marking items as seen.
* Friends:
    * [x] Adding friends.
    * [x] Accepting friend requests.
    * [x] Removing friends.
    * [x] Blocking friends.
    * [x] Setting nicknames.
    * [x] Removing nicknames.
* Item Shop:
    * [x] Customizable Item Shop.
    * [x] Purchasing items from the Item Shop.
    * [x] Gifting items to your friends.
    * [x] Working Auto Item Shop.
* Refunding:
    * [x] Working refunding stuff.
* Discord Bot:
    * [x] Being able to activate/deactivate the Discord bot.
    * [x] Commands with very useful functions.
* BattlePass (s2-s16) / (We are working on season 15 while season 14 is currently not possible :C):
    * [x] Possibility to buy the battle pass.
    * [x] Possibility to purchase battle pass levels.
    * [x] Possibility to gift the battle pass (BETA).
* Challenges (Backend Part):
    * [x] Daily missions worked.
    * [x] Working weekly missions.
    * [x] You can replace daily quests.
    * [x] You can get help from your party to complete missions.
* In-Game Events:
    * [x] You will be able to activate various events that occurred in the game such as the rift in the sky and much more!
* Winterfest Event (11.31, 19.01 & 23.10 / BETA):
    * [x] The winterfest event should work with all its rewards!
* SAC (Support A Creator):
    * [x] It supports a supported creator, you can set it using the `/createsac {code} {ingame-username}` command on discord.
    * [x] Rewards in vbucks for those who support a creator.
* Matchmaker:
    * [x] An improved matchmaker.
* Multiple Gameserver Support:
    * [x] An improved multiple gameserver.
* Website:
    * [x] A simple website where you can create an account to join the game.
* XMPP:
    * [x] Parties.
    * [x] Chat (whispering, global chat, party chat).
    * [x] Friends.


## Discord Commands
### User Commands:
- `/create {email} {username} {password}` - Creates an account on the backend (You can only create 1 account).
- `/details` - Retrieves your account info.
- `/lookup {username}` - Retrieves someones account info.
- `/exchange-code` - Generates an exchange code for login. (One time use for each code and if not used it expires after 5 mins).
- `/change-username {newUsername}` - You can change your username using this command.
- `/change-email {newEmail}` - You can change your email using this command.
- `/change-password {newPassword}` - You can change your password using this command.
- `/sign-out-of-all-sessions` - Signs you out if you have an active session.
- `/vbucksamount` - Shows how many vbucks to the user
- `/giftvbucks {username}` - Send another user your V-Bucks.
- `/claimvbucks` - Claim your daily {idk the default is 250} V-Bucks
### Admin Commands:
- You can only use the admin commands if you are a moderator.
- `/addall {user}` - Allows you to give a user all cosmetics. Note: This will reset all your lockers to default
- `/addvbucks {user} {vbucks}` - Lets you change a users amount of vbucks
- `/additem {user} {cosmeticname}` - The name of the cosmetic you want to give
- `/ban {targetUsername}` - Ban a user from the backend by their username.
- `/createsac {code} {ingame-username}` - Creates a Support A Creator Code.
- `/delete {username}` - Deletes a users account
- `/deletediscord {username}` - Deletes a users account
- `/deletesac {username}` - Deletes a Support A Creator Code.
- `/kick {targetUsername}` - Kick someone out of their current session by their username.
- `/removevbucks {user} {vbucks}` - Lets you change a users amount of vbucks
- `/removeitem {user} {cosmeticname}` - Allows you to remove a cosmetic (skin, pickaxe, glider, etc.) from a user
- `/unban {targetUsername}` - Unban a user from the backend by their username.
### How to set up moderators?
1) Go to **Config/config.json** in the directory you extracted Reload Backend into.
2) Open it, you should see a **"moderators"** section in the file.
3) You have to get your discord id and replace discordId with it.
4) You can set multiple moderators like this `["discordId","discordId2"]`.
### How to setup multiple gameservers
1) Go to **Config/config.json** in the directory you extracted Reload Backend into.
2) Open it, you should see a **"gameServerIP"** section in the file.
3) To add more gameservers you will have to do it like this `"gameServerIP": ["127.0.0.1:7777:playlist_defaultsolo", "127.0.0.1:7777:playlist_defaultduo"],`
4) You have now added solos and duos to your matchmaking 

## how do i start the backend? (online)
before config this: https://github.com/mtbr29/OGFN-Backend/Config/config.json


1.Create an account on https://render.com/.
2.Create a new web service
3.select the same parameters:
name: (as you want)
region: (default)
Repository: (your repo)
Build Command: npm install discord-oauth2 destr cors ini axios
Start Command: node index.js
Auto-Deploy: yes
4.create a secret name:token  secret:(your discord bot token)
5 restart servive
6.normally backend is online



## Credits
### Credits to:
* [Lawin](https://github.com/Lawin0129) - For the backend base (LawinServerV2)
* [Momentum](https://github.com/Nexus-FN/Momentum) - For some files
* [Burlone](https://github.com/burlone0) - For having modded most things, let's say he modded everything
* [NotTacos](https://github.com/PhysicalDrive) - For adding the working challenges (Backend Part)
* [zvivsp](https://github.com/zvivsp) - For creating the graphics
* [joaco](https://github.com/ojotaa0124) - For helping with CloudStorage and responses stuff
* [xLoigi](https://github.com/xLoigi) - For helping with some files and support a creator stuff
* [PRO100KatYT](https://github.com/PRO100KatYT) - For helping with some .json files
* [Marvelco](https://github.com/MarvelcoOGFN) - For helping with Battle passes (s11 - s16) / (We are working on season 15 while season 14 is currently not possible :C)
* [nade](https://github.com/gn1e) - For creating the base of the Auto Item Shop (Even if [Burlone](https://github.com/burlone0) solved many problems heheheh)

---

**OGFN Backend** is under continuous development and there may be errors of any kind, if you want to give advice on what to add and how to improve the project or report any errors you can do so via our [Discord](https://discord.gg/Sv45wd9JZA) server
