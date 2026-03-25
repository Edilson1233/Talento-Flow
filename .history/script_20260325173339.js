const provincias = document.querySelector(".provincias")
const pesquisaCargo = document.querySelector(".pesquisaCargo")
const resultado = document.querySelector(".resultado")
//console.log(resultado)

//Input para selecionar as provincias
const listaprovincia = ["Maputo Cidade", "Maputo provincia", "Gaza", "Inhambane", "Sofala", "Manica", "Zambezia", "Tete", "Nampula", "Niassa", "Cabo Delgado"];

listaprovincia.forEach(provincia =>{
    const option = document.createElement("option");
    option.text = provincia;

    provincias.appendChild(option)
})

//Pesquisa das Vagas
const vagas = ["Desenvolvedor Frontend",  "Desenvolvedor Backend", "Analista de Sistemas", "Tecnico IT", "Administrador de redes", "Engenheiro de Sofware", "Analista de Ciberseguranca", "Engenheiro de Dados", "Tecnico de Suporte"];

function exibirVagas(vagasFiltradas){
    resultado.innerHTML = "";

    if(pesquisaCargo.value === ""){
        return;
    }

    vagasFiltradas.forEach(vaga =>{
        const li = document.createElement("div");
        li.textContent = vaga;
        li.classList.add("sugestao-item");

        li.addEventListener("click", () =>{
            pesquisaCargo.value = vaga;
            resultado.innerHTML = "";
        })
        


        resultado.appendChild(li)
    })
}

//Evento de detetar a digitacao
pesquisaCargo.addEventListener("input", function(){
    const termoBusca = pesquisaCargo.value.toLowerCase();

    const resultadosFiltrados = vagas.filter(item =>
        item.toLowerCase().startsWith(termoBusca)
  )

  exibirVagas(resultadosFiltrados)

})

exibirVagas(vagas)