# Capacitor x OneSignal Integration

This is a demo app showing the integration of OneSignal in a CapacitorJS application (built with Ionic and Angular).

The issue I'm currently facing is how to trigger an event in an Android class, to be received on a JavaScript EventTarget such as `window` or `document`. 


## Installation
1. Clone or fork the project
2. Make sure your environment is ready to run the mobile apps [(link)](https://capacitorjs.com/docs/getting-started/environment-setup)
3. Run `npm install` to install all dependencies


## Usage
Add your OneSignal App ID to line 13 in `onesignal.service.ts`:  
`OneSignal.initialize("YOUR_ONESIGNAL_APP_ID");`


## Testing
Run `ionic cap run android` to run the app on your connected device or emulator via Android Studio.
