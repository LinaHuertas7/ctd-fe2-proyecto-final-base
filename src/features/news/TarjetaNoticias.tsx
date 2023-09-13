import { INoticiasNormalizadas } from "./types";
import {
    TarjetaNoticia,
    FechaTarjetaNoticia,
    DescripcionTarjetaNoticia,
    ImagenTarjetaNoticia,
    TituloTarjetaNoticia,
    BotonLectura,
} from "./styled";

interface IProps {
    noticia: INoticiasNormalizadas;
    onVerMasClick: () => void;
}

const TarjetaNoticias = ({ noticia, onVerMasClick }: IProps) => {
    return (
        <TarjetaNoticia>
            <ImagenTarjetaNoticia src={noticia.imagen} />
            <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
                {noticia.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={onVerMasClick}>Ver más</BotonLectura>
        </TarjetaNoticia>
    );
};

export default TarjetaNoticias;