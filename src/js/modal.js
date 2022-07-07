export default class Modal {
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
}
