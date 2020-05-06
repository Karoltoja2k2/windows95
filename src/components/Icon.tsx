import React, { useState, useEffect } from 'react';
import FileExplorer from './FileExplorer';
import '../scss/icon.scss'
import test from '../media/logo192.png';


const Icon = (props: any) => {
    function OpenFileEvent(event: any) {
        props.Navigate(props.fileObj)
    }
    return (
        <div className="icon" onDoubleClick={(e) => OpenFileEvent(e)}>
            <div className="bg"></div>
            <img src={test} alt="fileIcon" />
            <label>{props.fileObj.file.title}{props.fileObj.file.extension}</label>
        </div>
    );
}

export default Icon