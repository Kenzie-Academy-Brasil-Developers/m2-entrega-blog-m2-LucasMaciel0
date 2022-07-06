function iniciaModalLoguin(modalid) {
    const modal = document.getElementById(modalid)
    
    modal.classList.add('mostrar')

    modal.addEventListener('click',(e)=>{
        if(e.target.id == "fechar"){
            modal.classList.remove('mostrar')
        }
    })
    
}

const botaoLoguin = document.getElementById("loguin")
    botaoLoguin.addEventListener('click',function(){
        iniciaModalLoguin('modal-loguin')
    })



function iniciaModalCadastro(modalid){
    const modal = document.getElementById(modalid)

    modal.classList.add('mostrar')

    modal.addEventListener('click', (e)=>{
        if(e.target.id == "fechar"){
            modal.classList.remove('mostrar')
        }
    })
}

const botaoCadastro = document.getElementById('cadastro')
    botaoCadastro.addEventListener('click', function(){
        iniciaModalCadastro('modal-cadastro')
    })