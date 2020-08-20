import React, { useState, useEffect, memo } from "react";
import WindowBase from "../../common/windowBase/WindowBase";
import Logo from "../../media/win_logo.png";
import PaintContent from "./paintContent.component";
import IMAGE from "../../../media/bg.jpg";

const Paint = (props: any) => {
    return (
        <WindowBase id={props.id} file={props.file} state={props.state}>
            {/* <Application canvasWidth={600} canvasHeight={400} left={0} top={0}/> */}
            <PaintContent canvasWidth={600} canvasHeight={400} imgSource={IMAGE} left={0} top={0}/>
        </WindowBase>
    );
};

export default React.memo(Paint, (prevProps, nextProps) => {
    return (
        prevProps.file === nextProps.file &&
        prevProps.state === nextProps.state &&
        nextProps.state.isDragged !== true
    );
});