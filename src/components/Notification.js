import React from 'react';
import './Notification.css';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import { Box } from "@material-ui/core"
import Sort from "./SortFilter"
import NotificationModal from './NotificationModal';
import { IconButton } from "@material-ui/core"
import faker from "faker"

const Notification = ({ isDisplay, alert }) => {

    const [open, setOpen] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)
    const [alertState, setAlertState] = React.useState(null)
    const [sortSettings, setSortSortSettings] = React.useState({
        filters: [1, 2, 3, 4],
        sort: 1,
        readOrNotRead: "BOTH"
    })

    let alerts = [
        {
            title: "Deilveries will be delayed",
            body: "COVID 19 lockdowns are slowing down deliveries. Usual deadlines not applicable",
            category: 1,
            AddedOn: "2021-06-30 15:41:32.237"
        },
        {
            title: "changed Title",
            body: "COVID 19 lockdowns are slowing down deliveries. Usual deadlines not applicable",
            category: 2,
            AddedOn: "2021-06-30 15:41:32.237"
        }
    ];

    const filteredAlerts = alerts.filter((a) => sortSettings.filters.includes(a.category))
    const sortedAlerts = sortSettings.sort === 1 ? filteredAlerts.reverse() : filteredAlerts

    React.useEffect(() => {
        setOpenModal(true)
    }, [alertState])

    if (isDisplay)
        return (
            <>
                {alertState && <NotificationModal open={openModal} onClose={() => setOpenModal(false)} description={alertState?.body} title={alertState?.title} />}
                <Sort open={open} onClose={() => setOpen(false)} settings={sortSettings}
                    setSortSettings={setSortSortSettings} />
                <div className="notificationComponent">
                    <header className="header">Notifications</header>
                    <div className="notificationMenu">
                        <span className="active">All</span>
                        <span>Unread</span>
                        <span>Announcements</span>
                        <div>
                            <Box mt={1} >
                                <Box p={0.5} >
                                    {/* <IconButton onClick={() => setOpen(true)}> */}
                                    <div onClick={() => setOpen(true)}>
                                        <FilterListIcon />
                                    </div>
                                    {/* </IconButton> */}
                                </Box>
                                {/* <Box p={0.5}>
                                    <SearchIcon />
                                </Box> */}
                            </Box>
                        </div>
                    </div>
                    <div>
                        {sortedAlerts.map(alert => (
                            <div className="notificationItem" onClick={() => {
                                console.log(alert)
                                setAlertState(alert)

                            }}>
                                <div className="headerLine">
                                    <p className="title"><input type="radio" className="radioBtn" />{alert.title}</p>
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
            </>
        )
    else
        return (<div>

        </div>)

}

export default Notification;