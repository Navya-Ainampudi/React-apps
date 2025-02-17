// import React from 'react';
// import { useState, useRef } from 'react';
import React, { useState, useRef } from 'react';


const Signaturepad = () => {



    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    const startDrawing = (e) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.beginPath();
        const { offsetX, offsetY } = e.nativeEvent;
        ctx.moveTo(offsetX, offsetY);
        console.log(ctx)
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const { offsetX, offsetY } = e.nativeEvent;
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
    };

    const endDrawing = () => {
        setIsDrawing(false);
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    const downloadCanvas= () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'signature.jpeg';
        link.click();
    }

    return (
        <div style={{position:'absolute',left:'30%'}}>
            <h1>Signature Pad Example</h1>
            <div>
                <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={endDrawing}
                    onMouseLeave={endDrawing}
                    width={500}
                    height={200}
                    style={{ border: '2px solid black' , backgroundColor:'black'}}
                />
            </div>
            <div>
                <button className='btn btn-danger' onClick={clearCanvas}>Clear</button>
                
                <button className='btn btn-info' onClick={downloadCanvas}>download</button>
            </div>
        </div>
    );




}

export default Signaturepad
