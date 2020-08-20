import React, { useRef, useEffect, useState } from "react";
import Point from "./Point";
import HistoryElem from "../files components/paint/models/HistoryElem";
import History from "../files components/paint/models/History";
import Tool from "../files components/paint/models/Tool";

interface CanvasState {
    properties: {
        height: number;
        width: number;
        top: number;
        left: number;
    };
    img: HTMLImageElement | null;
}

interface CanvasProps {
    properties: {
        width: number;
        height: number;
        top: number;
        left: number;
    };
    backgroundColor: string;
    tool: Tool;
    img: HTMLImageElement | null;
    canvasRef: React.RefObject<HTMLCanvasElement>;
    history: History;
    setHistory: React.Dispatch<React.SetStateAction<History>>;
}

const Canvas = (props: CanvasProps) => {
    const [state, setState] = useState<CanvasState>({
        properties: {
            ...props.properties,
        },
        img: props.img,
    });
    const [drawing, setDrawing] = useState(false);

    useEffect(() => {
        const canvas: HTMLCanvasElement = props.canvasRef.current!;
        const context: CanvasRenderingContext2D = canvas.getContext("2d")!;
        if (state.img !== null) {
            RenderImage();
        } else {
            context.fillStyle = props.backgroundColor;
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            context.fill();
        }
    }, []);

    useEffect(() => {
        setState({
            ...state,
            properties: {
                ...props.properties,
            },
            img: props.img,
        });
    }, [props.properties, props.img]);

    function RenderImage() {
        console.log(state.img);
        if (state.img !== null) {
            const canvas: HTMLCanvasElement = props.canvasRef.current!;
            const context: CanvasRenderingContext2D = canvas.getContext("2d")!;
            context.drawImage(state.img, 0, 0);
        }
    }

    function CalculateOffset(e: React.MouseEvent): Point {
        return {
            X:
                e.pageX -
                props.properties.left +
                e.currentTarget.parentElement!.scrollLeft,
            Y:
                e.pageY -
                props.properties.top +
                e.currentTarget.parentElement!.scrollTop,
        };
    }

    function Draw(context: CanvasRenderingContext2D, point: Point) {
        context.strokeStyle = props.tool.strokeStyle;
        context.lineWidth = props.tool.lineWidth;
        context.lineJoin = context.lineCap = props.tool.lineStyle;
        context.lineTo(point.X, point.Y);
        context.stroke();
    }

    function RedrawAll() {
        const canvas: HTMLCanvasElement = props.canvasRef.current!;
        const context: CanvasRenderingContext2D = canvas.getContext("2d")!;
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (state.img !== null) {
            context.drawImage(state.img, 0, 0);
        }
        
        var lines: HistoryElem[] = props.history.latest;
        lines.pop();
        for (let line of lines) {
            context.strokeStyle = line.tool.strokeStyle;
            context.lineWidth = line.tool.lineWidth;
            context.lineJoin = context.lineCap = line.tool.lineStyle;
            context.beginPath();
            context.moveTo(line.points[0].X, line.points[0].Y);
            line.points.map((point) => {
                context.lineTo(point.X, point.Y);
                context.stroke();
            });
        }

        props.setHistory({ ...props.history, latest: [...lines] });
    }

    function HandleMouseDown(e: React.MouseEvent) {
        if (e.button !== 0) {
            return;
        }
        setDrawing(true);
        const canvas: HTMLCanvasElement = props.canvasRef.current!;
        const context: CanvasRenderingContext2D = canvas.getContext("2d")!;
        let point = CalculateOffset(e);
        context.moveTo(point.X, point.Y);
        context.beginPath();
        Draw(context, point)
        props.setHistory({
            ...props.history,
            current: {
                points: [point],
                tool: { ...props.tool },
            },
            latest: [...props.history.latest],
        });
    }

    function StopDrawing(e: React.MouseEvent) {
        if (drawing) {
            props.setHistory({
                ...props.history,
                current: null,
                latest: [...props.history.latest, props.history.current!],
            });
            setDrawing(false);
        }
    }

    function HandleMouseMove(e: React.MouseEvent) {
        if (drawing) {
            const canvas: HTMLCanvasElement = props.canvasRef.current!;
            const context: CanvasRenderingContext2D = canvas.getContext("2d")!;
            let point = CalculateOffset(e);
            Draw(context, point);
            props.setHistory({
                ...props.history,
                current: {
                    ...props.history.current!,
                    points: [...props.history.current!.points, point],
                },
            });
        }
    }

    function HandleKeyDown(e: React.KeyboardEvent) {
        console.log(e.key);
    }

    return (
        <div style={{ overflow: "auto" }}>
            <div
                style={{
                    width: state.properties.width,
                    height: state.properties.height,
                }}
                onMouseDown={(e) => HandleMouseDown(e)}
                onMouseUp={(e) => StopDrawing(e)}
                onMouseMove={(e) => HandleMouseMove(e)}
                onMouseLeave={(e) => StopDrawing(e)}
                onKeyDown={(e) => HandleKeyDown(e)}
            >
                <canvas
                    style={{
                        backgroundColor: props.backgroundColor,
                        cursor: "crosshair",
                    }}
                    ref={props.canvasRef}
                    {...state.properties}
                />
            </div>

            <button
                style={{ width: 50, height: 50 }}
                onClick={() => RedrawAll()}
            />
        </div>
    );
};

export default Canvas;