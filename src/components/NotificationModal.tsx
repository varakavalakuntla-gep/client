import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core"
import React from "react"





interface NotificationModalProps {
    description: string,
    title: string,
    open: boolean,
    onClose: () => void
}
const NotificationModal: React.FC<NotificationModalProps> = ({ description, title, open, onClose }) => {


    return <><Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {description}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary" autoFocus>
                Mark as read
            </Button>
            <Button onClick={onClose} color="primary" autoFocus>
                Delete
            </Button>
        </DialogActions>
    </Dialog></>
}


export default NotificationModal