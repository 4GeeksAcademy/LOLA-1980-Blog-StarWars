const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favoritos: [], //Array para almacenar los favoritos
			likes: 0 //Contador de likes
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			// Funcion para agregar un favorito
			addFavorite: item => {
				const store = getStore();
				//Verifica si el item ya esta en la lista de favoritos
				if (!store.favoritos.includes(item)) {
					//Agregar el item a la lista de favoritos
					setStore({
						favoritos: [...store.favoritos, item],
					});
					//Incrementar el contador de likes solo si el item no está en la lista de favoritos
					setStore({
						likes: store.likes + 1
					});

				}
			},
			removeFavorite: item => {
				const store = getStore();
				// Encontrar el índice del item en la lista de favoritos
				const index = store.favoritos.indexOf(item);
				if (index > -1) {
					// Si el item está en la lista de favoritos, eliminarlo
					const updatedFavorites = [
						...store.favoritos.slice(0, index), // Elementos antes del elemento a eliminar
						...store.favoritos.slice(index + 1) // Elementos después del elemento a eliminar
					];
					// Actualizar el estado global con la nueva lista de favoritos
					setStore({ favoritos: updatedFavorites });
					//Decrementar el contador de likes solo si el item se elimina de la lista de favoritos
					setStore({
						likes: store.likes - 1
					});

				}
			}

			//Funcion para aumentar el contador de likes
			/*incrementLikes: () => {
				const store = getStore();
				setStore({
					likes: store.likes + 1 // Incrementar el contador de likes
				});
			}*/
		}
	};
};

export default getState;
