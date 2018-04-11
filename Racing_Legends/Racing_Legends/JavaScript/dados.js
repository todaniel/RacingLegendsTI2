// Ficheiro de funções de acesso a dados

function getCategorias() {
    var url = "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories";

    return fetch(url, { headers: { Accept: 'application/json' } })
		.then(function (resposta) {
		    if (resposta.status === 200) {
		        return resposta.json();
		    } else {
		        return Promise.reject(new Error("Erro ao obter categorias"));
		    }
		});
}