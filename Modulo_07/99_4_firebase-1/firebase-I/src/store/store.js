import { createStore } from "vuex";
import {
    collection,
    getFirestore,
    onSnapshot,
    setDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import firebaseApp from "../firebaseconfig";

const store = createStore({
    state: {
        usuarios: [],
    },
    mutations: {
        setUsuarios(state, usuarios) {
            state.usuarios = usuarios;
        },
        addUsuario(state, usuario) {
            const existe = state.usuarios.some(u => u.id === usuario.id);
            if (!existe) {
                state.usuarios.push(usuario);
            }
        },
        deleteUsuario(state, usuarioId) {
            state.usuarios = state.usuarios.filter(
                (usuario) => usuario.id !== usuarioId
            );
        },
    },
    actions: {
        fetchUsuarios({ commit }) {
            const db = getFirestore(firebaseApp);
            const usuariosRef = collection(db, "usuarios");
            onSnapshot(usuariosRef, (snapshot) => {
                const usuarios = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log("Usuarios recibidos desde Firebase:", usuarios);
                commit("setUsuarios", usuarios);
            });
        },
        async addUsuario({ commit }, nuevoUsuario) {
            const db = getFirestore(firebaseApp);
            const usuariosRef = collection(db, "usuarios");
            const docRef = doc(usuariosRef, nuevoUsuario.email);
            await setDoc(docRef, nuevoUsuario)
                commit("addUsuario", { id: docRef.id, ...nuevoUsuario });
        },
        async deleteUsuario({ commit }, usuarioId) {
            const db = getFirestore(firebaseApp);
            const usuarioRef = doc(db, "usuarios", usuarioId);
            await deleteDoc(usuarioRef);
            commit("deleteUsuario", usuarioId);
        },
    },
    getters: {
        usuarios: (state) => state.usuarios,
    },
});

export default store;