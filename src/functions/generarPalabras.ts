import { palabras } from "../data/words";

export const generarPalabras = ():string => { 
    const listaPalabras = palabras;
    const palabra = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    return `${palabra}`;
};
