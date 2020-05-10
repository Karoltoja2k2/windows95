import React, { useState, useEffect } from 'react'
import '../scss/windowBase.scss'
import PhotoDisplay from './PhotoDisplay'
import { Resizable } from "re-resizable";


const WindowBase = (props: any) => {
    // const [dimensions, setDimensions] = useState(props.windowProps)
    // 
    // useEffect(() => {
    //     setDimensions(props.windowProps)
    // }, [props.windowProps])

    // console.log(dimensions)
    console.log(props.windowProps.isMinimized)

    return (
        <Resizable
            className="resizableWindow"
            size={{ width: props.windowProps.width, height: props.windowProps.height }}
            style={{
                ...props.windowProps,
                zIndex: props.windowProps.isFocused ? 4 : 3,
                visibility: props.windowProps.isMinimized ? 'hidden' : 'visible'
            }
            }
            onResizeStop={(e, direction, ref, d) => {
                props.WindowManagement.SetStyle(props.id, {
                    ...props.windowProps,
                    width: props.windowProps.width + d.width,
                    height: props.windowProps.height + d.height
                })
            }}
        >

            <div
                className="resizableWindowContainer"
                onMouseDown={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    props.WindowManagement.setFocusedWin(props.id)
                }}
                onMouseUp={(e) => {
                    console.log('asd')
                }}
            >

                <div
                    className="bar"
                    onMouseDown={(e) => {
                        e.preventDefault();
                        if (e.target === e.currentTarget) {
                            props.WindowManagement.setMovingWin(props.id);
                            props.WindowManagement.setOffset({
                                top: e.pageY - props.windowProps.top,
                                left: e.pageX - props.windowProps.left
                            })
                        }

                    }}
                    onDoubleClick={(e) => {
                        if (e.target === e.currentTarget) {
                            props.WindowManagement.FullScreenMode(props.id)
                        }
                    }}
                >
                    <label>{props.title}</label>
                    <div className="barButtons">
                        <button onClick={(e) => { props.WindowManagement.MinimizeWindow(props.id) }}>
                            _
                        </button>
                        <button onClick={(e) => { props.WindowManagement.FullScreenMode(props.id) }}>
                            ||
                        </button>
                        <button onClick={(e) => { props.WindowManagement.CloseWindow(props.id) }}>
                            X
                        </button>
                    </div>
                </div>

                {props.children}
            </div>

        </Resizable>
    );
}

export default WindowBase