import React from "react";
import "./optionBase.scss";
import { useDispatch } from "react-redux";
import { CreateFile } from "../../../../actions/driveActions";
import CreateFileDto from "../../../../models/CreateFileDto";

const NewFileOption = (props: any) => {
    const dispatch = useDispatch();

    function CreateNewFile() {
        let createFileDto: CreateFileDto = {
            path: `${props.file.path}${props.file.title}/`,
            componentId: 1,
            title: "GÓWNO",
            prevFolder: props.file,
        };
        dispatch(CreateFile(createFileDto));
    }
    return (
        <button
            className="container__option"
            onClick={() => CreateNewFile()}
            style={{ background: "green" }}
        ></button>
    );
};

export default NewFileOption;
