import { useState } from "react";
import TarjetaNoticias from "./TarjetaNoticias";
import { ListaNoticias } from "./styled";
import { INoticiasNormalizadas } from "./types";
import NoticiaModal from "./NoticiaModal";

interface IProps {
    noticias: INoticiasNormalizadas[];
}

export const ListadoNoticia = ({ noticias }: IProps) => {
    const [selectedNoticia, setSelectedNoticia] =
        useState<INoticiasNormalizadas | null>(null);

    const closeModal = () => {
        setSelectedNoticia(null);
    };

    return (
        <ListaNoticias>
            {noticias.map((noticia) => (
                <TarjetaNoticias
                    noticia={noticia}
                    key={noticia.id}
                    onVerMasClick={() => setSelectedNoticia(noticia)}
                />
            ))}
            {selectedNoticia && (
                <NoticiaModal
                    noticia={selectedNoticia}
                    isPremium={selectedNoticia.esPremium}
                    closeModal={closeModal}
                />
            )}
        </ListaNoticias>
    );
};
