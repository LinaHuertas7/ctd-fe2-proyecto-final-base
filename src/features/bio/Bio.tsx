import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
//import styles from "./styles.module.css";
import {
    ContenedorBotones,
    BioContainer,
    BotonBio,
    BioImagen,
    BioNombre,
    BioDescripcion,
} from "./styled";

//styled components
const Bio = () => {
    const [bioActiva, setBioActiva] = useState(
        INFO_SIMPSONS[NombresSimpsons.BART]
    );

    const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
        setBioActiva(INFO_SIMPSONS[nombre]);

    const crearBotones = () => {
        return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
            <BotonBio
                key={nombre as string}
                onClick={() => onClick(nombre as NombresSimpsons)}
                isActive={bioActiva.id === nombre}
            >
                {nombre}
            </BotonBio>
        ));
    };
    return (
        <BioContainer>
            <ContenedorBotones>{crearBotones()}</ContenedorBotones>
            <div>
                <div>
                    <BioImagen src={bioActiva.image} alt={bioActiva.nombre} />
                </div>
                <div>
                    <BioNombre>{bioActiva.nombre}</BioNombre>
                    <BioDescripcion>{bioActiva.descripcion}</BioDescripcion>
                </div>
            </div>
        </BioContainer>
    );
};

export default Bio;