# Common Errors with WiiUDownloader

## Black screen on Cemu
![Black Screen Issue](</screenshots/Black Screen Issue.jpg>)

- **Use Vulkan** as the graphics API.
- The game download may have been corrupted. Try re-downloading.
- Make sure you have unpacked the game.
- Check the [Cemu compatibility list](https://compat.cemu.info) to see if the game is supported.
- Update Cemu to the [latest version](https://github.com/cemu-project/Cemu/releases).
- **NSMBU**: Download the specific graphic pack that allows the game to work on Cemu.

## 0% Progress bar / Stuck download
![Stuck Download](</screenshots/Stuck Download.jpg>)

- Change your DNS to `1.1.1.1` and `1.0.0.1`. [Guide here](https://www.hellotech.com/guide/for/how-to-change-dns-server-windows-mac).
- Change the download location in WiiUDownloader.
- Ensure you have enough storage space.

## "Possible missing or bad title.tik file"
![Missing TIK file WUP Installer](</screenshots/Missing TIK file WUP Installer.jpg>)

Use NUSspli and select the option to "generate a fake .tik" file.

## BOTW Update, Returning to Wii U Menu
![BOTW Update Error](</screenshots/BOTW Update Error.jpg>)

This is caused by a missing update. Re-download the game and make sure to include the update.

## NNID Doesn't exist or Sigpatches/Corrupted DLC
![NNID Error](</screenshots/NNID Error.jpg>)

This is a sigpatch issue. Follow the guide [here](./use-on-wiiu.md#danger-game-not-launching) to fix it.

## NUSspli/WUP Installer File Corruption
![Corrupted File](</screenshots/Corrupted File.jpg>)

- The WUP may not have downloaded completely. Try downloading it again.
- Use NUSspli instead of WUP Installer.

## Steam Deck Storage Bug
If you're on a Steam Deck and have "other" storage you can't delete, use this guide: [https://youtu.be/pA_7tKDvJjE](https://youtu.be/pA_7tKDvJjE)

## Game stuck at 99% unpacking
This is a visual bug. You can safely close the application; the game will be unpacked.

## Nothing works! What do I do?
If all else fails, make sure you are on the [latest version](https://github.com/Xpl0itU/WiiUDownloader/releases/latest) and restart the process from the beginning.
