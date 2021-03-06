import React, { useEffect, useState } from "react";
import "./welcomeScreen.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { LoadFiles } from "../../actions/driveActions";
import File from "../../models/File";
import Monitor from "../desktop/monitor.component";

import win10bg from "../../media/win10bg.jpg";
import personiconwhite from "../../media/personiconwhite.png";

const profiles = [
    {
        Id: 1,
        Name: "Guest",
    },
    {
        Id: 2,
        Name: "Admin",
    },
];

const WelcomeScreen = (props: any) => {
    const [state, setState] = useState({
        isLogged: false,
        chosenProfile: profiles[0],
    });

    function Login() {
        if (state.chosenProfile !== null) {
            setState({ ...state, isLogged: true });
        }
    }

    if (state.isLogged) {
        return <Monitor background={props.images.loginImg} />;
    }

    return (
        <div className="welcomeScreen">
            <img
                className="welcomeScreen__background"
                src={props.images.loginImg.src}
            />
            <div className="welcomeScreen__form">
                <div className="form__photo">
                    <img src={personiconwhite} alt="" className="" />
                </div>
                <div className="form__name">{state.chosenProfile.Name}</div>
                <div className="form__submit" onClick={() => Login()}>
                    Sign in
                </div>
            </div>
            <div className="welcomeScreen__accounts">
                {profiles.map((profile: any, index: number) => (
                    <AccountIem
                        profile={profile}
                        setState={setState}
                        state={state}
                        key={index}
                    />
                ))}
            </div>
            <div className="welcomeScreen__controls">
                <i className="fas fa-wifi"></i>
                <i className="fas fa-cog"></i>
                <i className="fas fa-power-off"></i>
            </div>
        </div>
    );
};

const AccountIem = (props: any) => {
    function FocusProfile() {
        if (props.state.chosenProfile.Id !== props.profile.Id) {
            props.setState({ chosenProfile: props.profile });
        }
    }
    return (
        <div
            className={
                props.state.chosenProfile.Id === props.profile.Id
                    ? "accounts__item accounts__item--chosen"
                    : "accounts__item"
            }
            onClick={() => {
                FocusProfile();
            }}
        >
            <div className="item__photo">
                <i className="far fa-user"></i>
            </div>
            <div className="item__name">{props.profile.Name}</div>
        </div>
    );
};

export default WelcomeScreen;
