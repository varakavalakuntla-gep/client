import React, { useState } from "react";
import { usePluginStore } from "react-pluggable";
import Notification from "./Notification";
import './Notification.css';
import { SetStateAction } from "react";
import NotificationsIcon from '@material-ui/icons/Notifications';
import { IconButton, Box } from "@material-ui/core"

const Header = (props: any) => {
  const pluginStore: any = usePluginStore();
  let Renderer = pluginStore.executeFunction("Renderer.getRendererComponent");
  var isDisplay = false;
  var toggleNotification = function () {
    isDisplay = !isDisplay;
    if (isDisplay) {
      pluginStore.executeFunction("Renderer.add", "notification", () => {
        return (
          <Notification isDisplay={isDisplay} alert={[]} />
        )
      })
    }
    else
      pluginStore.executeFunction("Renderer.remove", "notification", () => {
        return (
          <Notification isDisplay={isDisplay} alert={[]} />
        )
      })
  }
  return (
    <>
      <div className="homeHeader">
        <div className='headerLeft'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list menu" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
          <p>Home Dashboard</p>
        </div>
        <div>
          <Box>
            <IconButton onClick={() => { toggleNotification() }}>
              <NotificationsIcon color="secondary" />
            </IconButton>
          </Box>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="bi bi-bell notifiIcon" viewBox="0 0 16 16" onClick={() => toggleNotification()}>
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg> */}
        </div>
      </div>
      <Renderer placement="notification" />
    </>
  );
};

export default Header;