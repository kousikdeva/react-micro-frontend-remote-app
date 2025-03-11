import React, { ReactNode } from 'react'

interface PropsType {
    onClick: () => void;
    children: ReactNode;
}

const Button: React.FC<PropsType> = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default Button