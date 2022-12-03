import NotificationItem from './Notification'

function Notifications() {
    // const [notifications, setNotifications] = useState(null);
    // const [accessToken, setAccessToken] = useState<string>();

    // useEffect(() => {
    //     const getNotifications = async () => {
    //         const token = await Auth.getGitHubAccessToken()
    //         setAccessToken(token)
    //         const notificationResponse = await fetch("https://api.github.com/notifications", {
    //             headers: {
    //                 'Authorization': `Bearer ${accessToken}`,
    //                 "Access-Control-Allow-Origin": "*"
    //             }
    //         })
    //         console.log(notificationResponse)
    //         const notificationJson = await notificationResponse.json()
    //         setNotifications(notificationJson);
    //         console.log(notifications)
    //     }

    //     getNotifications()
    // }, [accessToken, notifications])

    return (
        <>
            <NotificationItem></NotificationItem>
            {/* {JSON.stringify(notifications)} */}

        </>
    )
}

export default Notifications