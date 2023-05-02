import {useContext} from "react";
import { DataContext } from "./Context/DataContext";


export function BotonCambiarData() {

    const {setData} = useContext(DataContext);

    const newData = {
        name: "Nadie",
        age: 0,
    };

    return (
        <div>
            <button
                onClick={() => { setData(newData)}}
            >
                Cambiar Data
            </button>
        </div>
    )
}