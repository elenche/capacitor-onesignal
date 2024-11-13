package io.ionic.starter;

// TODO: Import bridge

import com.onesignal.notifications.IDisplayableMutableNotification;
import com.onesignal.notifications.INotificationReceivedEvent;
import com.onesignal.notifications.INotificationServiceExtension;
import com.onesignal.debug.internal.logging.Logging;


public class NotificationServiceExtension implements INotificationServiceExtension {

  // TODO: Initialize bridge

  @Override
  public void onNotificationReceived(INotificationReceivedEvent event) {
    IDisplayableMutableNotification notification = event.getNotification();

    Logging.info(String.format("NotificationServiceExtension::onNotificationReceived: notificationId=%s, additionalData=%s", notification.getNotificationId(), notification.getAdditionalData()), null);

    // TODO: Use bridge
    // bridge.triggerJSEvent("myCustomEvent", "document", "{ 'dataKey': 'dataValue' }");
  }
}
