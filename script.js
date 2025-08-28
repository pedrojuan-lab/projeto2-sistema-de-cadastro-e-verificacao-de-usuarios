let nomedapessoa = prompt("Digite seu nome: ")
let idadedapessoa = parseInt(prompt("Digite sua idade: "))
const senha = prompt("Digite sua senha: ")

if (idadedapessoa >=13) {
    alert(`
        --- Cadastro de Usuário ---
        Digite seu nome: ${nomedapessoa}
        Digite sua idade: ${idadedapessoa}
        Digite uma senha: ${senha}
        `)

    let nomeVerificada = prompt("Digite seu nome: ")
    let senhaVerificada = prompt("Digite sua senha: ")
    if (nomeVerificada === nomedapessoa && senhaVerificada === senha)
        //ve se a senha e o nome são os mesmos

        {
        alert(`
            --- Login ---
            Login realizado com sucesso! Bem-vindo, ${nomedapessoa}
            `)//avisa que conseguiu fazer o login
    } 

    else {alert("Nome ou senha incorretos. Tente novamente.")}
} //diz que errou alguma coisa

else {
    alert(`
        --- Cadastro de Usuário ---
        Você não pode se cadastrar. Idade mínima: 13 anos.
`)
}//diz que não deu certo