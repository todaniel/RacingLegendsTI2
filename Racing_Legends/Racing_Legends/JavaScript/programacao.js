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


            //coloca os dados no div que defini no html (div para lista de categorias)
            cats.appendChild(containerCats);
        }
    }


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

//Exemplo do eventListener do exercio anterior
/*
input.addEventListener("input", function (evt) {
            var filtroFaixas = input.value;

            //faixasContainer.innerHTML = '';
            divFaixas.remove();

            if (filtroFaixas.length == 0) {
                var fxs = cd.querySelectorAll('faixa');
                //faixasContainer.appendChild(faixas(fxs));
                divFaixas = faixas(fxs);
            } else {
                var faixasFiltradas = cd.querySelectorAll('faixa[ref*="' + filtroFaixas + '"]');
                //faixasContainer.appendChild(faixas(faixasFiltradas));
                divFaixas = faixas(faixasFiltradas);
            }

            albumContainer.appendChild(divFaixas);

        });
*/