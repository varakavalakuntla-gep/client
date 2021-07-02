import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box, Typography, ListItem, ListItemIcon, Checkbox, ListItemText, Divider, Radio } from "@material-ui/core"


interface SortProps {
    open: boolean,
    onClose: () => void,
    settings: any
    setSortSettings: any
}
const Sort: React.FC<SortProps> = ({ open, onClose, settings, setSortSettings }) => {


    const handleFilterClick = (number: number) => {
        const includes = settings.filters.includes(number)
        let filters = []
        //@ts-ignore
        if (Boolean(includes)) {

            filters = settings.filters.filter((a: any) => a != number)
        } else {

            filters = [...settings.filters, number]
        }
        setSortSettings({ ...settings, filters })
    }

    const handleSortClick = (number: number) => {

        if (number != settings.sort) {
            setSortSettings({ ...settings, sort: number })
        }
    }
    const categories = [1, 2, 3, 4]

    return (
        <div>

            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">{"Sort & Filter Settings"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Box>
                            <Typography variant="body1" color="textPrimary"> Filter on basis of following categories </Typography>
                        </Box>
                        {categories.map((c) => {
                            return (<ListItem dense button onClick={() => { handleFilterClick(c) }}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={settings.filters.includes(c)}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText primary={`Category ${c}`} />
                            </ListItem>)
                        })}

                        <Box m={1}>
                            <Divider />
                        </Box>
                        <Box mt={2}>
                            <Typography color="textPrimary"> Filter on basis of following categories </Typography>
                        </Box>
                        <ListItem dense button onClick={() => { handleSortClick(0) }}>
                            <ListItemIcon>
                                <Radio
                                    edge="start"
                                    checked={settings.sort === 0}
                                    tabIndex={-1}
                                    disableRipple

                                />
                            </ListItemIcon>
                            <ListItemText primary={`Sort from new to old`} />
                        </ListItem>
                        <ListItem dense button onClick={() => { handleSortClick(1) }}>
                            <ListItemIcon>
                                <Radio
                                    edge="start"
                                    checked={settings.sort === 1}
                                    tabIndex={-1}
                                    disableRipple

                                />
                            </ListItemIcon>
                            <ListItemText primary={`Sort from old to new`} />
                        </ListItem>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { onClose() }} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => { onClose() }} color="primary" autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Sort