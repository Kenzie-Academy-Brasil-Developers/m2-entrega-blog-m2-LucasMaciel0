/*import { Api } from "./api.js";
/* CADASTRANDO USUARIO */

/*function CadastrarUsuario (){
    const formCadastro = document.getElementById('formCadastro')

    formCadastro.addEventListener('submit',(event)=>{
        event.preventDefault()

        const desconstruido = [...event.target]
        
        
        let array = []
        let data = desconstruido.forEach((elem)=>{
            array.push(elem.value)
        })
        array.pop()
        console.log(array)
        
        let modelo = {
            "username":array[0],
            "email":array[1],
            "avatarUrl":array[2],
            "password":array[3]
        }

        Api.createUser(modelo)
        console.log(Api.createUser(modelo))
    })
}
CadastrarUsuario()*/

import LoguinRequest from "./controllers/loguin.controller.js";
import UserRequests from "./controllers/user.controller.js";
import Modal from "./modal.js";

Modal.CriaModalCadastro()

