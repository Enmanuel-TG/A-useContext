import { Pagina1 } from "./components/Pagina1";
import { Pagina2 } from "./components/Pagina2";
import { BotonCambiarData } from "./components/BotonCanbiarData";
import { DataProvider } from "./components/Context/DataContext";




export function App() {

  return (
    <DataProvider>
      <>
        <Pagina1 />
        <Pagina2 />
        <BotonCambiarData />
      </>
    </DataProvider>
  );
}