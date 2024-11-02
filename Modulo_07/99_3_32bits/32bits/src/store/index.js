import { createStore } from "vuex";
import juegos from "../assets/juegos.json";

const formattedJuegos = juegos.map((juego) => ({
    ...juego,
    stock: Number(juego.stock),
    precio: Number(juego.precio),
}));

export default createStore({
    state: {
        juegos: formattedJuegos,
    },
    mutations: {
        modificarStock(state, { codigo, cantidad }) {
            const juego = state.juegos.find((juego) => juego.codigo === codigo);
            if (juego && juego.stock + cantidad >= 0) {
                juego.stock += cantidad;
            }
        },
    },
    actions: {
        incrementarStock({ commit }, codigo) {
            commit("modificarStock", { codigo, cantidad: 1 });
        },
        disminuirStock({ commit }, codigo) {
            commit("modificarStock", { codigo, cantidad: -1 });
        },
    },
});