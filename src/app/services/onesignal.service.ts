import { Injectable } from '@angular/core';
import OneSignal from 'onesignal-cordova-plugin';

@Injectable({
	providedIn: 'root'
})
export class OneSignalService {

	constructor() {
		OneSignal.Debug.setLogLevel(6)

		// Replace YOUR_ONESIGNAL_APP_ID with your OneSignal App ID
		OneSignal.initialize("YOUR_ONESIGNAL_APP_ID");

		OneSignal.Notifications.addEventListener('click', async (e) => {
			let notification = await e.notification;
			console.log("[OneSignal] Notification Clicked: ", notification);
		});

		OneSignal.Notifications.addEventListener('foregroundWillDisplay', async (e) => {
			let notification = await e.getNotification();
			console.log('[OneSignal] Notification received: ', notification);
		});

		OneSignal.Notifications.requestPermission(true).then((success: Boolean) => {
			console.log("[OneSignal] Notification permission granted:" + success);
		});
	}
}
