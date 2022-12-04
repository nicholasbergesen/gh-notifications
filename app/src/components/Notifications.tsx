import { useState, useEffect } from 'react';
import { Auth } from '../services/Auth';
import { INotification } from '../services/notifications';
import NotificationItem from './Notification'

function Notifications() {
    const [notifications, setNotifications] = useState<INotification[]>([]);

    useEffect(() => {
        const getNotifications = async () => {
            const token = await Auth.getGitHubAccessToken()
            const notificationResponse = await fetch("https://api.github.com/notifications", {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': token
                }
            })
            const notificationJson = await notificationResponse.json()
            setNotifications(notificationJson);
        }

        getNotifications()
    }, [])

    if (!notifications) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {
                notifications.map((notification, i) =>
                    <NotificationItem key={notification.id} notification={notification}></NotificationItem>
                )
            }
        </div>
    )
}

export default Notifications