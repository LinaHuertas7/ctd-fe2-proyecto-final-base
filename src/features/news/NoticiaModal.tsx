import { BotonSuscribir, CloseButton, ContenedorModal, CotenedorTexto, DescripcionModal, ImagenModal, TarjetaModal, TituloModal } from "./styled";
import { INoticiasNormalizadas } from "./types";
import { SuscribeImage, CloseButton as Close } from "../../assets";

interface IProps {
    noticia: INoticiasNormalizadas;
    isPremium: boolean;
    closeModal: () => void;
}

const NoticiaModal = ({ noticia, isPremium, closeModal }: IProps) => {

    const handleSuscribirClick = () => {
        setTimeout(() => {
            alert("Suscripto!");
            closeModal();
        }, 100);
    };

    return (
        <ContenedorModal>
            <TarjetaModal>
                <CloseButton onClick={closeModal}>
                    <img src={Close} alt="close-button" />
                </CloseButton>
                {isPremium ? (
                    <>
                        <ImagenModal src={SuscribeImage} alt="mr-burns-excellent" />
                        <CotenedorTexto>
                            <TituloModal>
                                Suscríbete a nuestro Newsletter
                            </TituloModal>
                            <DescripcionModal>
                                Suscríbete a nuestro newsletter y recibe noticias de
                                nuestros personajes favoritos.
                            </DescripcionModal>
                            <BotonSuscribir onClick={handleSuscribirClick}>
                                Suscríbete
                            </BotonSuscribir>
                        </CotenedorTexto>
                    </>
                ) : (
                    <>
                        <ImagenModal src={noticia.imagen} alt="news-image" />
                        <CotenedorTexto>
                            <TituloModal>{noticia.titulo}</TituloModal>
                            <DescripcionModal>
                                {noticia.descripcion}
                            </DescripcionModal>
                        </CotenedorTexto>
                    </>
                )}
            </TarjetaModal>
        </ContenedorModal>
    );
};

export default NoticiaModal;
