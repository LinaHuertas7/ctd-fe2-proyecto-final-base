import { useEffect, useState } from "react";
import { obtenerNoticias } from "./fakeRest";
import { INoticiasNormalizadas } from "./types";
import normalizarNoticia from "./utils";

export const useObtenerNoticias = () => {
    const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
    useEffect(() => {
        const obtenerInformacion = async () => {
            const respuesta = await obtenerNoticias();
            const data = respuesta.map((n) => {
                const noticiaNormalizada = normalizarNoticia(n);
                return noticiaNormalizada;
            });
            setNoticias(data);
        };
        obtenerInformacion();
    }, []);
    return noticias;
};