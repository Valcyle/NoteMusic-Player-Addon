# NoteMusic-Player-Addon
Play converter .nbs music in minecraft bedrock edition world.

## How to use
1. Download .mcaddon and run(auto import) or download source code
   and install to minecraft addon(if you don't know how to, then recommend .mcaddon)
2. Convert file using [nbs-js-converter][https://github.com/Valcyle/nbs-js-converter]
3. Go to   
   "C:\Users\"your username"\AppData\Local\Packages\Microsoft.MinecraftUWP_"specific"\
   LocalState\games\com.mojang\behavior_packs" and open this addon's folder
4. Go to "scripts\system\music" and paste music's .js file in there
5. Open info.js
6. Copy "import ~~~~" to '";' from [music_register.txt](https://github.com/Valcyle/NoteMusic-Player-Addon/blob/main/music_register.txt) and add before the "export const~~~~"
7. Open music's .js file and check song file name in "export const 'this is song name'"
8. Replace step 6's "songname" to step 7's song name
9. Copy "2:{" to end from [music_register.txt](https://github.com/Valcyle/NoteMusic-Player-Addon/blob/main/music_register.txt) and add after the "2:{ ~~~~ }," in info.js
10. Change "2" before ":{" to track number you want to use(don't use already used one)
11. Change "title" to your song title
12. Change "length" to length in songinfo's file
13. Change "file" to filename
14. Change "note" to step 8's name
15. Close and save
16. Open minecraft and apply addon to world(search, make sure to turn on beta api in experimental features)
17. Type in chat like ".play 1" ".play 2"(.play track_number)(you can check track number) to play music(/reload to stop)

## Support
[Support Discord](https://discord.gg/f39pkTYdWS)
