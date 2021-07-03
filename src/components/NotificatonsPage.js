import React, { useEffect, useState } from "react";
import './Notification.css'
const NotificationsPage = (props)=>{
    const [filter,setFilter] = useState('all');
    const [alerts1,setAlerts] = useState([]);
    let alerts = [
        {
            notification_id : 1,
            title:"Deilveries will be delayed",
            body:"COVID 19 lockdowns are slowing down deliveries. Usual deadlines not applicable",
            category:4,
            AddedOn: "2021-06-30 15:41:32.237"
        },
        {
            notification_id : 1,
            title:"Deilveries will be delayed",
            body:"COVID 19 lockdowns are slowing down deliveries. Usual deadlines not applicable",
            category:4,
            AddedOn: "2021-06-30 15:41:32.237"
        }
    ];
    
    useEffect(() => {
        if (props.connection) {
            if(props.connection.connectionStarted){
                send();
                props.connection.on('ReceiveMessage', message => {
                    setAlerts(message);
                });
            }
            else
                props.connection.start()
                    .then(result => {
                        send();
                        console.log('Connected!');
        
                        props.connection.on('ReceiveMessage', message => {
                            setAlerts(message);
                        });
                    })
                    .catch(e => console.log('Connection failed: ', e));
        }
    }, [props.connection]);
    async function send(){
        if (props.connection.connectionStarted) {
            try {
                await props.connection.send('SendMessage');
            }
            catch(e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }

    function para(text){
        if(text.length>100){
            return(
                <span>{text.substring(0,100)} ...</span>
            )
        }
        else{
            return(
                <span>{text}</span>
            )
        }
    }
    function change(e){
        setFilter({e});
    }
    return(
        <div className="notificationComponent">
            <header className="header">Notifications</header>
            <div className="notificationMenu">
                <span className={(filter == 'all' ? 'active' : '')} onClick={()=> change('all')}>All</span>
                <span className={(filter == 'unread' ? 'active' : '')} onClick={()=> change('unread')}>Unread</span>
                <span className={(filter == 'anouncements' ? 'active' : '')} onClick={()=> change('anouncements')}>Anouncements</span>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fillRule="currentColor" className="bi bi-search icon" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fillRule="currentColor" className="bi bi-funnel icon" viewBox="0 0 16 16">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                    </svg>
                </div>
            </div>
            <div className="notificationList wrapper">
                {alerts1.map(alert=>(
                    <div key = {alert.notification_id}className="notificationItem">
                        <div className="headerLine">
                            <p className="title"><input type="checkbox" className="checkbox"/><label className="LabelCheckbox"></label>{alert.title}</p>
                            <p className="body">{para(alert.body)}</p>
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
}

export default NotificationsPage;