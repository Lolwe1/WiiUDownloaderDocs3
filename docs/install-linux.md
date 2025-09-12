# Installing WiiUDownloader on Linux (Ubuntu)

1.  Download `WiiUDownloader-Linux-x86-64.AppImage` from the [latest release](https://github.com/Xpl0itU/WiiUDownloader/releases/latest).
    ![GitHub releases page](</screenshots/GitHub releases page.jpg>)
2.  Go to your downloads and wait for it to finish.
3.  Give it execute permissions:
    - Right-click the AppImage → **Properties**.
    - Go to the **Permissions** tab.
    - Check the box **Allow executing file as program**.
    ![Linux Permissions](</gifs/Linux Permissions.gif>)
4.  Right-click and select **Run** or double-click it.

:::warning Missing Fuse
If it doesn't open, you may be missing `libfuse`. See this [AskUbuntu thread](https://askubuntu.com/questions/1363783/cant-run-an-appimage-on-ubuntu-20-04) for a solution.
:::

Continue to [Using on a real Wii U](./use-on-wiiu.md) or [Using on Cemu](./use-on-cemu.md)
