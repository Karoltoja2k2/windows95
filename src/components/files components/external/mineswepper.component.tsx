import React from "react";
import "./iframeBase.scss";
import WindowBase from "../../common/windowBase/WindowBase";
import IframeFocusable from "../../common/windowExtensions/iframeFocusable.component";
import useSoftExit from "../../common/hooks/useSoftExit";

const Mineswepper = (props: any) => {
    useSoftExit(props.isClosed, props.id);

    return (
        <WindowBase
            id={props.id}
            file={props.file}
            properties={props.properties}
            mobileMode={props.mobileMode}
        >
            <IframeFocusable isFocused={props.properties.isFocused} />
            <div className="container">
                <iframe src="https://karoltoja2k2.github.io/MineswepperTs/" />
            </div>
        </WindowBase>
    );
};

export default React.memo(Mineswepper, (prevProps, nextProps) => {
    return (
        prevProps.file === nextProps.file &&
        prevProps.isClosed === nextProps.isClosed &&
        prevProps.properties === nextProps.properties &&
        nextProps.properties.isDragged !== true &&
        prevProps.mobileMode === nextProps.mobileMode
    );
});
