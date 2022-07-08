import React from "react";

interface IProps {
    theme: string,
    toggleTheme: Function
}
export const ThemeToggle = ({theme='dark', toggleTheme}: IProps) => {

    return <div onClick={() => toggleTheme()}>
        { theme === "dark" ? '🌕' :  '🌞'}
    </div>
}