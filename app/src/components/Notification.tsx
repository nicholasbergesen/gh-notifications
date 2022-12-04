import { useEffect, useState } from "react"
import { Auth } from "../services/Auth"
import './Notification.css'
import { IFullNotification, INotification } from "../services/notifications"

function NotificationItem(props: { notification: INotification }) {
    const [info, setInfo] = useState<IFullNotification>()
    const notification = props.notification

    useEffect(() => {
        const getMore = async () => {
            const token = await Auth.getGitHubAccessToken()
            const response = await fetch(props.notification.subject.url, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': token
                }
            })
            const jsonResult = await response.json()
            console.log(jsonResult)
            setInfo(jsonResult);
        }

        getMore()
    }, [props.notification.subject.url])

    return (
        <div className="notification-block">
            <p>
                <span className="strong label">Title: </span>{notification.subject.title}
            </p>
            <p>
                <span className="strong label">Repo: </span>{notification.repository.full_name}
            </p>
            <p>
                <span className="strong label">Type: </span>{notification.subject.type}
            </p>
            <p>
                <span className="strong label">State: </span>{info?.state} {info?.draft ? "(Draft)" : ""}
            </p>
            <a href={info?.html_url}>View</a>
        </div>
    )
}

export default NotificationItem