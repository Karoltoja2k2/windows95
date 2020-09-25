import File from "../../../models/File";
import IPoint, { Point, Point0, RandomPoint, SubtractPoints } from "../../common/Point";
import RigidBody from "./models/RigidBody";
import SelectState from "./models/SelectState";

export const DIMS = {
    boundryFrom: Point0,
    boundryTo: Point(window.innerWidth, window.innerHeight),
    iconWidth: 75,
    iconHeight: 85,
    iconRadius: 80,
};

export const CONST: IConst = {
    boundryFrom: Point0,
    boundryTo: Point(window.innerWidth, window.innerHeight),
    iconWidth: 75,
    iconHeight: 85,
    iconRadius: 80,
    fps: 60,
    energyLoss: 0.85,
    gravity: Point(0, 10),
};

export interface IConst {
    boundryFrom: IPoint;
    boundryTo: IPoint;
    iconWidth: number;
    iconHeight: number;
    iconRadius: number;
    fps: number;
    energyLoss: number;
    gravity: IPoint;
}

export function MapFilesToRbs(files: File[]): RigidBody[] {
    let row = 0;
    let col = 0;
    let gridFrom = Point(50, 100);
    let gridTo = Point(
        window.innerWidth < 700 ? window.innerWidth * 0.8 : 700,
        1000
    );
    let gridGap = 10;

    let rigidBodies: RigidBody[] = files.map((file: File, index: number) => {
        let pos = Point(
            gridFrom.X +
                col * DIMS.iconWidth +
                DIMS.iconWidth / 2 +
                col * gridGap,
            gridFrom.Y +
                row * DIMS.iconHeight +
                DIMS.iconHeight / 2 +
                row * gridGap
        );

        let result: RigidBody = {
            id: index,
            file: file,
            pos: pos,
            vel: RandomPoint(Point(-20, -20), Point(20, 20)),
            acc: Point0,
        };

        col++;
        if (col * DIMS.iconWidth > gridTo.X) {
            col = 0;
            row++;
        }

        return result;
    });

    return rigidBodies;
}

export function CalculateSelect(select: SelectState) {
    let start = Point(
        select.start.X > select.end.X ? select.end.X : select.start.X,
        select.start.Y > select.end.Y ? select.end.Y : select.start.Y
    );

    let end = Point(
        select.start.X > select.end.X ? select.start.X : select.end.X,
        select.start.Y > select.end.Y ? select.start.Y : select.end.Y
    );

    let absDims = SubtractPoints(end, start);
    return {
        top: start.Y,
        left: start.X,
        width: absDims.X,
        height: absDims.Y,
    };
}
