import React from 'react';
import './Notification.css';

class Notification extends React.Component{
    render(){
        let alerts = [
            {
                title:"Deilveries will be delayed",
                body:"COVID 19 lockdowns are slowing down deliveries. Usual deadlines not applicable",
                category:4,
                AddedOn: "2021-06-30 15:41:32.237"
            }
        ];
        console.log(this.props);
        if(this.props.isDisplay)
            return(
                <div className="notificationComponent">
                    <header className="header">Notifications</header>
                    <div className="notificationMenu">
                        <span className="active">All</span>
                        <span>Unread</span>
                        <span>Anouncements</span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-search icon" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-funnel icon" viewBox="0 0 16 16">
                                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        {alerts.map(alert=>(
                            <div className="notificationItem">
                                <div className="headerLine">
                                    <p className="title"><input type="radio" className="radioBtn"/>{alert.title}</p>
                                    <p className="body">{alert.body}</p>
                                </div>
                                <div className="footer">
                                    <button className="forecast">Forecast</button>
                                    <span>6.19 AM</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        else
            return(<div>

            </div>)
    }
}

export default Notification;