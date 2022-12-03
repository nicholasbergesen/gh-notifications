import { useState, useEffect } from 'react';
import { Auth } from '../services/Auth';
import NotificationItem from './Notification'

function Notifications() {
    const [notifications, setNotifications] = useState(null);
    const [accessToken, setAccessToken] = useState<string>();

    useEffect(() => {
        const getNotifications = async () => {
            const token = await Auth.getGitHubAccessToken()
            console.log(token)
            setAccessToken(token)
            const notificationResponse = await fetch("https://api.github.com/notifications", {
                headers: {
                    'Authorization': token,
                    "Access-Control-Allow-Origin": "*"
                }
            })
            console.log(notificationResponse)
            const notificationJson = await notificationResponse.json()
            setNotifications(notificationJson);
            console.log(notifications)
        }

        getNotifications()
    }, [accessToken, notifications])

    return (
        <>
            <NotificationItem></NotificationItem>
            {JSON.stringify(notifications)}

        </>
    )
}

export default Notifications