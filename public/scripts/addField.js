

// procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneNode)

//Quando clicar no botão 


//Exercutar uma açãoS
function cloneNode() {
    //Duplicar os campos. como?
    const newFieldsContainer = document.querySelector('.shedule-item').cloneNode(true)

    // Limpar campos
    const fields = newFieldsContainer.querySelectorAll('input')

    fields.forEach(function(field_moment) {
        //pegar o field do momento e limpar
        field_moment.value = ""
    })

    //Colocar na pagina. onde? 
    document.querySelector('#shedule-items').appendChild(newFieldsContainer)

}


