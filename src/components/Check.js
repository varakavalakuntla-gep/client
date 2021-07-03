import React from "react";
import { HubConnectionBuilder } from '@microsoft/signalr';

function check(){
    const [ connection, setConnection ] = useState(null);
    const [ chat, setChat ] = useState([]);
    const latestChat = useRef(null);
    latestChat.current = chat;

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('http://localhost:5000/hubs/chat')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    /*
    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected!');
    
                    connection.on('ReceiveMessage', message => {
                        const updatedChat = [...latestChat.current];
                        updatedChat.push(message);
                    
                        setChat(updatedChat);
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);
    */
    const sendMessage = async (user, message) => {
        const chatMessage = {
            user: user,
            message: message
        };

        if (connection.connectionStarted) {
            try {
                await connection.send('SendMessage', chatMessage);
            }
            catch(e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }

    return (
        <div>
            <div>{sendMessage} </div>
            <hr />
            <div>{chat}</div>
        </div>
    );
}
export default check;