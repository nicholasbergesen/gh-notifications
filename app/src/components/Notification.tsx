import { useState } from "react"
import { Auth } from "../services/Auth"
import { IFullNotification, INotification } from "../services/notifications"

function NotificationItem(props: { notification: INotification }) {
    const [info, setInfo] = useState<IFullNotification>()
    const notification = props.notification

    const getMore = async (url: string) => {
        const token = await Auth.getGitHubAccessToken()
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Authorization': token
            }
        })
        const jsonResult = await response.json()
        setInfo(jsonResult);
    }

    const divStyle = {
        border: '1px solid black'
      };

    return (
        <div style={divStyle}>
            <p>{notification.subject.title}</p>
            <p>{notification.subject.type}</p>
            <p>{notification.subject.url}</p>
            <button onClick={() => getMore(notification.subject.url)}>Show</button>

            <p>{info?.title}</p>
            <p>{info?.state}</p>
            <p>{info?.merged}</p>
            <p>{info?.mergeable}</p>
        </div>
    )
}

export default NotificationItem