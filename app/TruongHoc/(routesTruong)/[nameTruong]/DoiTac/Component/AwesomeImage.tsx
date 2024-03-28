import React from 'react';
interface Props {
    src: string;
    width?: number;
    height?: number;
}

const AwesomeImage: React.FC<Props> = ({ src, width = 300, height = 200 }) => {
    return (
        <div
            className='AwesomeImage'
            style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px"
            }}
        />
    );
};

export default AwesomeImage;