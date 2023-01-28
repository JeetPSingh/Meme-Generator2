import React, { useState } from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import useImage from 'use-image';
import './meme creator.css';

const templateData = [
    {
        image: 'template1.jpeg',
        text: [
            { value: 'Something i dont like', x: 300, y: 100 },
            { value: 'Something i like', x: 300, y: 300 },
        ]
    }
]

const Memecreator = () => {

    const [selTemplate, setSelTemplate] = useState(templateData[0]);

    const [image] = useImage(`templates/${selTemplate.image}`);

    const renderText = (template) => {
        return template.text.map(({value, x, y}) => (
            <Text text={value} x={x} y={y} fontSize={15} />
        ))
    }

    return (
        <div>
            <p className=' hover display-3 text-center mt-4 mb-5 fw-bold'>Meme Generator</p>
            <div className="col-md-11 mx-auto">
                <div className="row">
                    <div className="col-md-8">
                        <Stage width={window.innerWidth} height={window.innerHeight}>
                            <Layer>
                                <Image height={500} width={500} image={image} />
                                {renderText(selTemplate)}
                            </Layer>
                        </Stage>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Memecreator;