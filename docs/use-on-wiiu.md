# WiiUDownload for WiiU

### Downloading the game

:::info Video Guide
<video src={require('@site/static/videos/WiiU(Download)1.mp4').default} controls preload style={{width: 100 + '%'}} playsinline autoPlay loop muted></video>   
:::

:::danger Important
- Do **NOT** forget to download the update for the game if it's available, or it will not work (e.g., Breath of the Wild). DLC is optional.
- Do **NOT** click "Decrypt Contents" or "Delete encrypted contents after decryption" as this will make the files **UNUSABLE** by the Wii U.
- Make sure you download and install NUSSPLI from [here](./nusspli.md) before moving forward.
:::

1. Only have the WiiU box checked during setup.
    ![WiiU](</screenshots/WiiU1.png>)
2. Search for the game(s) you want.
    ![WiiU](</screenshots/WiiU2.png>)
3. Check the checkmark box on the game(s) you want to add to the download queue
    ![WiiU](</screenshots/WiiU3.png>)   
4. Press **Download Queue**.
    ![WiiU](</screenshots/WiiU4.png>)
5. Choose where you want to save the files and click **OK**. 
    ![WiiU](</screenshots/WiiU5.png>)
    - The game will start downloading after this step.
    ![WiiU](</screenshots/WiiU6.png>)
6. You should now have the **encypted** game files which include **.app** and **.H3** files.
    ![WiiU](</screenshots/WiiU7.png>)

### Installing games to real hardware (Wii U)
1.  Insert your SD card and create a folder named `install` on the root.
2.  Move the downloaded game folder(s) to the `install` folder.
    ![Moving game files to SD card](</gifs/Moving Games.gif>)
3.  Eject your SD card and put it into the Wii U.
4.  Turn on the Wii U and open **NUSspli**.
    - For Aroma, it will be on the Home screen.
       ![Aroma NUSspli](</screenshots/Aroma NUSspli.jpg>)
    - For Tiramisu, open **Mii Maker** or the **Homebrew Launcher**.
       ![HBL NUSspli](</screenshots/HBL NUSspli.jpg>)
5.  Once open, press (A) on **Install Content**.
    ![Installing content with NUSspli](</screenshots/Installing content with NUSspli.jpg>)
    :::info Empty Directory?
    If you see an empty screen, press (X) to switch to the correct directory (SD Card).
    ![Empty NUSspli directory](</screenshots/Empty NUSspli directory.jpg>)
    :::
6.  Select the game you want using the D-Pad or Left Stick and press (A).
    ![Selecting a game in NUSspli](</screenshots/Selecting a game in NUSspli.jpg>)
7.  Make sure to **Install to USB** by clicking (A) on the "Install to:" prompt.
    ![Installing to USB](</screenshots/Installing to USB.jpg>)
    :::tip Queueing Multiple Games
    Press (-) to add a game to the queue. Repeat for all games, then press (+) to start the installation.
    :::
    :::warning NAND Installation
    You can install to NAND at your **OWN RISK** if you don't have a USB drive. Hynix NANDs in particular are prone to corrupting from installations and game writes.
    :::
8.  Once finished, you'll see a green "Installed successfully" screen. Press the Home button to exit.
    ![Installation success screen](</screenshots/Installation success screen.jpg>)
9.  The game will now be on your Wii U Home screen.
    ![Game on home screen](</screenshots/Game on home screen.jpg>)

:::info Video Guides
## Tiramisu
<video src={require('@site/static/videos/NUSspli HBL.mp4').default} controls preload style={{width: 100 + '%'}}></video>

## Aroma
<video src={require('@site/static/videos/NUSspli Aroma.mp4').default} controls preload style={{width: 100 + '%'}}></video>
:::

:::danger Game Not Launching?
If the game doesn't open, you may need to install sigpatches.
1.  Shut down the console and put the SD card in your computer.
2.  Download `01_sigpatches.rpx` from [here](https://github.com/marco-calautti/SigpatchesModuleWiiU/releases/download/1.2/01_sigpatches.rpx).
3.  Place the file in:
    - **Aroma**: `wiiu/environments/aroma/modules/setup/`
    - **Tiramisu**: `wiiu/environments/tiramisu/modules/setup/`
4.  Put the SD card back in the console. The game should now work.
![NNID error screen](</screenshots/NNID Error.jpg>)
![Sigpatch error screen](</screenshots/Sigpatch Error.jpg>)
:::

You have completed installing your favorite games on the Wii U. Congratulations! You can now safely delete the files from the `install` folder on your SD card.
