import UserRequests from "./controllers/user.controller.js"
import LoguinRequest from "./controllers/loguin.controller.js"


export default class Modal {

    static CriarHeader(){
        const body = document.querySelector('body')

        const header = document.createElement('header')
        const div = document.createElement('div')
        const p = document.createElement('p')
        const buttonLoguin = document.createElement('button')
        const buttonCadastrar = document.createElement('button')

        p.innerText = 'BlogKenzie'
        buttonLoguin.innerText = "Loguin"
        buttonLoguin.addEventListener('click',(event)=>{
            this.CriaModalLoguin()
        })
        buttonCadastrar.innerText = "Cadastrar"
        buttonCadastrar.addEventListener('click',(event)=>{
            this.CriaModalCadastro()
        })
        div.append(buttonLoguin,buttonCadastrar,p)
        header.append(div)
        body.append(header)
    }

    static CriarHeaderHomePage(){
        const body = document.querySelector('body')

        const header = document.createElement('header')
        const div = document.createElement('div')
        const p = document.createElement('p')
        const buttonLogout = document.createElement('button')
        

        p.innerText = 'BlogKenzie'
        buttonLogout.innerText = "Logout"
        buttonLogout.addEventListener('click',()=>{
            localStorage.clear()
            window.location.href = "index.html"
        })
        
        div.append(buttonLogout,p)
        header.append(div)
        body.append(header)
    }

    static CriaModalLoguin(){
        const body = document.querySelector('body')

        const divSuperior = document.createElement('div')
        const divINferior = document.createElement('div')
        const botaoClose = document.createElement('button')
        const form = document.createElement('form')

        const h3 = document.createElement('h3')
        const inputEmail = document.createElement('input')
        const inputPassword = document.createElement('input')
        const botaoLoguin = document.createElement('button')

        divSuperior.id = 'modal-loguin'
        divSuperior.classList.add('modal-container')
        divINferior.classList.add('modal')
        botaoClose.id = "fechar"
        botaoClose.classList.add('fechar')
        botaoClose.innerText = 'X'

        botaoClose.addEventListener('click', (event)=>{
            event.preventDefault()
            divSuperior.style = "display:none"
        })

        form.id = "formLoguin"
        form.classList.add('form')
        h3.innerText = "Loguin"
        inputEmail.type = "email"
        inputEmail.placeholder = "E-mail"
        inputPassword.type = "password"
        inputPassword.placeholder = "Senha"
        botaoLoguin.type = "submit"
        botaoLoguin.id = "botaoLoguin"
        botaoLoguin.innerText = "Loguin"

        botaoLoguin.addEventListener('click',async(event)=>{
            event.preventDefault()
            const desconstruido = [...event.target.form]
        
            let array = []
            desconstruido.forEach((elem)=>{
                array.push(elem.value)

            })
            array.pop()
            
            let modelo = {
                "email": array[0],
                "password":array[1]
            }
            
            LoguinRequest.loguin(modelo)
            divSuperior.style = "display:none"
    
            
        
        })

        form.append(h3,inputEmail,inputPassword,botaoLoguin)
        divINferior.append(botaoClose,form)
        divSuperior.appendChild(divINferior)
        body.appendChild(divSuperior)
    }

    static CriaModalCadastro(){
        const body = document.querySelector('body')

        const divSuperior = document.createElement('div')
        const divINferior = document.createElement('div')
        const botaoClose = document.createElement('button')
        const form = document.createElement('form')

        const h3 = document.createElement('h3')
        const inputName = document.createElement('input')
        const inputEmail = document.createElement('input')
        const avatar = document.createElement('input')
        const inputPassword = document.createElement('input')
        const botaoCadastro = document.createElement('button')

        const p = document.createElement('p')

        divSuperior.id = 'modal-cadastro'
        divSuperior.classList.add('modal-container')
        divINferior.classList.add('modal')
        botaoClose.id = "fechar"
        botaoClose.classList.add('fechar')
        botaoClose.innerText = 'X'

        botaoClose.addEventListener('click', (event)=>{
            event.preventDefault()
            divSuperior.style = "display:none"
        })

        form.id = "formCadastro"
        form.classList.add('form')
        h3.innerText = "Cadastro"
        inputName.type = "text"
        inputName.placeholder = 'Nome de usuário'
        inputEmail.type = "email"
        inputEmail.placeholder = "E-mail"
        avatar.type = 'text'
        avatar.placeholder = 'Foto de Perfil'
        inputPassword.type = "password"
        inputPassword.placeholder = "Senha"
        botaoCadastro.type = "submit"
        botaoCadastro.id = "botaoCadastro"
        botaoCadastro.innerText = "Cadastrar"

        botaoCadastro.addEventListener('click',async (event)=>{
            event.preventDefault()
            const desconstruido = [...event.srcElement.form]
        
            let array = []
            desconstruido.forEach((elem)=>{
                array.push(elem.value)
            })
            array.pop()
            
            let modelo = {
                "username":array[0],
                "email":array[1],
                "avatarUrl":array[2],
                "password":array[3]
            }
            
            UserRequests.createUser(modelo)
            divSuperior.style = "display:none"
            this.CriaModalLoguin()
    })
        
        p.innerHTML = "Já tem Loguin ?<a href = #> Clique aqui</a> "

        p.addEventListener('click', (event)=>{
            divSuperior.style = "display:none"
            this.CriaModalLoguin()
        })

        form.append(h3,inputName,inputEmail,avatar,inputPassword,botaoCadastro,p)
        divINferior.append(botaoClose,form)
        divSuperior.appendChild(divINferior)

        body.appendChild(divSuperior)
    }

    static async Noticias(){
        const body = document.querySelector('body')

            let noticias = await UserRequests.Post()

            noticias.data.forEach((content)=>{
            const div = document.createElement('div')
            const img = document.createElement('img')
            const usuario = document.createElement('h4')
            const p = document.createElement('p')
            const divInferior = document.createElement('div')
            const divSuperior = document.createElement('div')
            
            divInferior.classList.add('divInferior')
            div.classList.add('container')
            img.classList.add('img')
            usuario.classList.add('titulo')
            p.classList.add('texto')
            divSuperior.classList.add('divSuperior')

            img.src = content.user.avatarUrl
            usuario.innerText = content.user.username
            p.innerText = content.content

            divInferior.append(usuario,p)
            div.append(img,divInferior)
            divSuperior.appendChild(div)
            body.append(divSuperior)

        })
        console.log(noticias)
    }
    
    static textArea (){
        const body = document.querySelector('body')
        const textArea = document.createElement('textarea')
        textArea.placeholder = "Escreva aqui seu comentário"
        body.appendChild(textArea)
    }
}
