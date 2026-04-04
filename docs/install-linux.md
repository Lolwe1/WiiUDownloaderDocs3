# Installing WiiUDownloader on Linux (Ubuntu)
:::info Video Guide
<video src={require('@site/static/videos/LinuxGuide.mp4').default} controls preload style={{width: 100 + '%'}} playsinline autoPlay loop muted></video>   
:::
1.  Download `WiiUDownloader-Linux-x86-64.AppImage` from the [latest release](https://github.com/Xpl0itU/WiiUDownloader/releases/latest).
    ![GitHub releases page](</screenshots/Linux1.png>)
2.  Go to your downloads and wait for it to finish.
    ![GitHub releases page](</screenshots/Linux2.png>)
3.  Give it execute permissions:
    - Right-click the AppImage → **Properties**.
    - Go to the **Permissions** tab.
    ![GitHub releases page](</screenshots/Linux3.png>)
    - Check the box **Allow executing file as program**
    ![GitHub releases page](</screenshots/Linux4.png>)
4.  Right-click and select **Run** or double-click it.
    ![GitHub releases page](</screenshots/Linux6.png>)

:::warning Missing Fuse
If it doesn't open, you may be missing `libfuse`. See this [AskUbuntu thread](https://askubuntu.com/questions/1363783/cant-run-an-appimage-on-ubuntu-20-04) for a solution.
:::

Continue to [Using on a real Wii U](./use-on-wiiu.md) or [Using on Cemu](./use-on-cemu.md)
