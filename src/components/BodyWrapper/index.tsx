import React from 'react';

interface IProps{
    children: JSX.Element
}

const BodyWrapper: React.FC<IProps> = ({children}: IProps) =>{
    return <div>{children}</div>;
} 

export default BodyWrapper;