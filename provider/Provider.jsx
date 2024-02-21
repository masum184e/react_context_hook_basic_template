import { createContext, useState } from "react";

export const ImplementContext = createContext(null)

const Provider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const contextValue = {
        count,
        setCount,
        name,
        setName
    }

    return (
        <ImplementContext.Provider value={contextValue}>{children}</ImplementContext.Provider>
    )
}

export default Provider