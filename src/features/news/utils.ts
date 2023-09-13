import { INoticias } from "./fakeRest";

const normalizarTitulo = (str: string) => {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

const calcularMinutosTranscurridos = (noticia: INoticias) => {
    const ahora = new Date();
    return Math.floor((ahora.getTime() - noticia.fecha.getTime()) / 60000);
};

const normalizarNoticia = (noticia: INoticias) => {
    const titulo = normalizarTitulo(noticia.titulo);
    const minutosTranscurridos = calcularMinutosTranscurridos(noticia);
    const fecha = `Hace ${minutosTranscurridos} minutos`;
    const descripcionCorta = noticia.descripcion.substring(0, 100);
    return {
        id: noticia.id,
        titulo,
        descripcion: noticia.descripcion,
        fecha,
        esPremium: noticia.esPremium,
        imagen: noticia.imagen,
        descripcionCorta,
    };
};

export default normalizarNoticia;