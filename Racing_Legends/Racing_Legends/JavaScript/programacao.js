// Ficheiro da aplicação

document.addEventListener('DOMContentLoaded', function main(e) {

    function mostraCategorias(categorias) {
        var cats=document.querySelector("#listaCategorias");
        for (var i = 0; i < categorias.length; i++) {
            // Criar elementos HTML, colocá-los no body ou noutro lado qualquer.
            console.log(categorias[i]);
            var containerCats = document.createElement("div");
            //vai buscar o nome das categorias
            var nomeCat = document.createElement("div");
            nomeCat.textContent = categorias[i].name;
            containerCats.appendChild(nomeCat);
            
            //vai buscar descrição das categorias
            var descriptCats = document.createElement("div");
            descriptCats.textContent = categorias[i].description;
            containerCats.appendChild(descriptCats);

            //vai buscar o ID das categorias
            var IdCats = document.createElement("div");
            IdCats.textContent = categorias[i].id;
            containerCats.appendChild(IdCats);

            var ImagemCat = document.createElement("img");
            ImagemCat.src = getImagensCategorias(categorias[i].id);
            containerCats.appendChild(ImagemCat);

            //coloca os dados no div que defini no html (div para lista de categorias)
            cats.appendChild(containerCats);
        }
    }
    function mostraPilotosCategorias() {
        var cats = document.querySelector("#listaCategorias");

        for (var i = 0; i < categorias.length; i++) {
                
        }
    }

    /*
    http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories/gt/drivers
    */

    function ecraCategorias() {
        return getCategorias()
		    .then(function (categorias) {
		        mostraCategorias(categorias);
		    })
		    .catch(function (erro) {
		        console.error(erro);
		    });
    }

    ecraCategorias();

});