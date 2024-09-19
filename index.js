//node js
const express = require('express')
const exphbs = require('express-handlebars')
//const res = require('express/lib/response')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')


app.get('/',(req,res)=>{

    const dados = {
        nome: 'Gabriel Pereira',
        idade: 17,
        hobby: 'Escrever poemas'
    }

    res.render('home', {dados})
})

app.get('/alunos',(req,res)=>{
    const alunos = [' GB', ' leon', ' nata', ' feitosa']
    const aluno1 = alunos[0]
    const aluno2 = alunos[1]
    const aluno3 = alunos[2]
    const aluno4 = alunos[3]
    res.render('alunos',{alunos,aluno1,aluno2,aluno3,aluno4})
})


app.get('/sobre',(req,res)=>{
    res.render('sobre')
})


app.listen(3000,()=>console.log(`Servidor funcionando em http://localhost:3000`))
