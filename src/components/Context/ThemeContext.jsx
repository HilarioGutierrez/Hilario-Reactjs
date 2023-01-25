import { createContext } from "react"

export const contextTheme = createContext()

export function ContextProvider(props) {

    const data = 12
    return (
        <contextTheme.Provider value={data}>
            {props.children}
        </contextTheme.Provider>
    )
}








