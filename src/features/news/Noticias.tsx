import { useObtenerNoticias } from "./useObtenerNoticias";

import { ContenedorNoticias, TituloNoticias } from "./styled";
import { ListadoNoticia } from "./ListadoNoticia";

/* 
Se implemento el principio Solid de responsabilidad Única, tratando de asegurar que cada
componente tenga una unica tarea definida, facilitando la legibilidad, modularidad y mantenibilidad
del codigo, se enfoco en separar la logica y las funcionalidades del componente noticias 
*/

const Noticias = () => {
    const noticias = useObtenerNoticias();

    return (
        <ContenedorNoticias>
            <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
            <ListadoNoticia noticias={noticias}></ListadoNoticia>
        </ContenedorNoticias>
    );
};

export default Noticias;
