import logo from './logo.svg';
import './App.css';
import Notification from './components/Notification';
import {React, useState} from 'react';
import { createPluginStore, PluginProvider,RendererPlugin } from "react-pluggable";
import ShowAlertPlugin from "./components/ShowAlertPlugin.tsx";
import Header from "./components/Header.tsx";
import Chat from './components/Chat';

const pluginStore = createPluginStore();
pluginStore.install(new RendererPlugin());
pluginStore.install(new ShowAlertPlugin());

function App() {
  const [isDisplay, setDisplay] = useState(false);
  var changeState = function(){
    setDisplay(!isDisplay);
  }
  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
