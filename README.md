# Tamamon

This was created during our time as students at Code Chrysalis.

Tamamon is an AR game for collecting “tamamon” that combines the best of Pokemon Go and Tamagotchi.

## Installation

1. Ensure that Homebrew, Node, and Watchman are installed in your device:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install node
brew install watchman
```

2. Ensure that the following CLIs are installed in your device:

```
npm install -g react-native-cli
npm install -g react-viro-cli
npm install -g @aws-amplify/cli
```

3. Ensure that Xcode and Ruby are installed in your device.

```
brew install ruby
```

4. Ensure that CocoaPods is installed in your device.

```
gem install cocoapods
pod repo update
```

If a write permission error occurs, install Ruby in a separate PATH.

```
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
source ~/.bash_profile
```

Verify that the current Ruby is in a different path (not `/user/bin ruby`):

```
which ruby
```

Then retry installing CocoaPods.

5. In the root directory of the app, run yarn to install the packages and set up the iOS bundle:

```
yarn
./setup-ide.sh --ios
```

6. Modify the Podfile to have the correct ios version and pods.

- Change platmform to ios 13.1
- Comment out or delete `use frameworks!` and <br />
- Replace `pod 'ViroKit', :path => '../node_modules/react-viro/ios/dist/ViroRenderer/'` with <br />
  `pod 'ViroKit_static_lib', :path => '../node_modules/react-viro/ios/dist/ViroRenderer/static_lib'`

7. Navigate to the iOS subdirectory, update the podfiles, and open the app in Xcode:

```
cd ios
pod update
pod install
open <app-name>.xcworkspace
```

## Resources

1. [Xcode with ViroReact](https://docs.viromedia.com/docs/starting-a-new-viro-project-1) <br/>
2. [ViroReact Quick Start](https://docs.viromedia.com/docs/quick-start) <br />
3. [Ruby Installation for Macs](https://stackify.com/install-ruby-on-your-mac-everything-you-need-to-get-going/) <br/>
