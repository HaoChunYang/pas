1. 如果不知道Android SDK的位置，可以打开Android Studio的`setting`查看。
2. 打开或者创建 shell 的 rc 文件，比如，在macOS Mojave 或 Mojave 之前的系统里，是默认使用 Bash 的（ Linux也是一样的），所以需要修改 `$HOME/.bashrc` 文件。 macOS Catalina 操作系统默认使用 Z Shell，所以需要修改 `$HOME/.zshrc` 文件。请知晓，如果你使用不同的 shell，文件目录或文件名可能会有所不同
从命令行（terminal.app）中打开`.bash_profile`
```
open .bash_profile
```
3. 在文件底部添加ANDROID_HOME的设置。
```
export ANDROID_HOME=/workspace/android-sdk-macosx
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```
4. 关闭`.bash_profile`后，执行指令，让设置生效。
```
source .bash_profile
```

`.zshrc`文件也是一样的配置方法。