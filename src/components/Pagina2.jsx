import { useContext } from "react";
import { DataContext } from "./Context/DataContext";

export function Pagina2() {
    const {data} = useContext(DataContext);
    return (
        <div>
            <h1>Pagina 2</h1>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}