## 随听fm

作为一个移动端app，运行此项目需进行环境配置。下面做一下简短说明，如果这些条件都具备的话请跳过这一步

### 坏境搭建及相关处理办法

#### 1.1 java环境

- 下载 JDK 8.0 版本安装

- 在系统环境变量中新增`JAVA_HOME` 变量将下载安装的jdk 目录路径加入，如下图所示

  ![](lib\md\javahome.png)

- 在`path` 变量中新增 /jre 目录 路径

  ![](lib\md\jre.png)

- 新增`CLASSPATH`,加入刚刚的 `.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;`

  ![](lib\md\classpath.png)

- 打开 命令行窗口 输入 `javac`  检验 是否成功

  ![](lib\md\cmd.png)

#### 1.2 node和Git 环境

- 下载 node ,安装，下载地址:http://nodejs.cn/download/  
- 下载 GIT ，安装 ，下载地址:https://git-scm.com/download/
- 命令行输入`node -v`,检验是否 node安装成功 

#### 1.3 c++ 环境

大多数情况下操作系统自带C\++环境，不需要手动安装C\++环境；

#### 1.4 安装Python环境

- 下载python 安装包  地址:https://www.python.org/downloads/release/python-2717/
- 最好启用 管理员打开安装包

#### 1.5 配置安卓环境

下载安装android studio ，需要下载的依赖包如下

- android sdk  打开adroid studio  File->Settings->Appearance & Behavior -> System Settings ->Android SDK 选择 SDK Platforms  右下角 勾选 Show Package Details  把下面图片中的 SDK工具勾选，点击Apply 等待下载 

  ![](lib\md\android.png)

  

- 选择 SDK Tools 右下角 勾选 Show Package Details   把下面图片中的 SDK 工具勾选，点击Apply 等待下载 

  ![](lib\md\28.0.png)

- 在系统变量中新增 `ANDROID_HOME` 变量 加入刚刚 android sdk 目录 路径 ，如下图所示

   ![](lib\md\sdk.png)

- 在系统变量的path 变量中 加入  sdk 目录中 platform-tools 和tools 文件夹路径，如下图所示

   ![](lib\md\tool.png)

### 1.6 安装yarn 包管理工具 及 react-native-cli 脚手架工具

```
npm i -g yarn
npm i -g react-native-cli
```



### 2 利用react-native脚手架快速创建项目

```
react-native init projectName
```

#### 2.1 项目文件夹

1. android目录是Android项目的目录，里面有Android Studio项目环境文件。
2. ios目录是iOS项目目录，是XCode项目环境文件。
3. index.android.js是Android入口文件。
4. index.ios.js是iOS入口文件。
5. node_modules是项目的依赖包，基于node文件依赖系统产生的，该目录中有react-native相关的依赖和其他的第三方lib
6. package.json是项目依赖包的说明文件，列举了依赖的包以及版本号等等信息。

### android 执行方法

```
需要安装对应的模拟器
1. adb devices
// 当前命令会列出可以使用的设备，如果列表为空，则后续的无法运行
2. react-native start
// 上述命令是开启jsbundle服务器，用于测试设备上Reload JS的服务器
3. react-native run-andoid
// 第三步, 再开启一个新的命令行控制台，进入项目目录，运行当前项目

```
  - 需要设置 ip地址
     打开手机 调试设置在`Settings` 选项中 选择 `Debugging` 设置和电脑同样的 ip  端口号 使用默认的8081
### 错误处理

  ```
react-native : 无法加载文件    C:\Users\SunSeekerX\AppData\Roaming\npm\react-native.ps1，因为在此系统上禁止 运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的about_Execution_Policies。所在位置 行:1 字符: 1
  ```

- 启动 windows PowerShell(A)  更改执行策略 RemoteSigned

    ```
    set-ExecutionPolicy RemoteSigned
    // 查看执行策略
    get-ExecutionPolicy
    ```



node 版本太高无法解析下面的正则表达式，修改  \node_modules\metro-config\src\defaults\blacklist.js 文件下

```
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

// 修改成
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

下面是一些 UI界面截图，功能就不介绍了

![image](https://github.com/LOVINGFINE/suitingfm/tree/master/lib/images/6.png)

![](lib\images\8.png)

![](lib\images\5.png)

![](lib\images\7.png)

![](lib\images\3.png)

![](lib\images\9.png)

![](lib\images\10.png)

![](lib\images\11.png)