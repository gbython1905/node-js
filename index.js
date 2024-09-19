//node js
const express = require('express')
const exphbs = require('express-handlebars')
//const res = require('express/lib/response')

const app = express()
app.use(express.static('public'))

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')


app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/alunos',(req,res)=>{

    const alunos = [
        {nome: ' gb ', beleza: ' alta '},
        {nome: ' feitosa ', beleza: ' alto '},
        {nome: ' leon ', beleza: ' mil grau '},
        {nome: ' rebeca ', beleza: ' beleza '},
        {nome: ' wesley ', beleza: ' nata '}
    ]
    
    const arrayAluno = alunos.map((aluno) =>{
        return aluno.nome
    })
    
    res.render('alunos', {arrayAluno, alunos})
})


app.get('/sobre',(req,res)=>{

    const dados = {
        nome: 'Gabriel Pereira',
        idade: 17,
        hobby: 'Escrever poemas'
    }

    res.render('sobre', dados)
})

app.get('/contatos',(req,res)=>{
    const github = "https://github.com/gbython1905"
    const youtube = "https://www.youtube.com/@leibky"
    const nome = 'Gabriel Pereira'
    res.render('contatos', {github, youtube, nome})

})



app.listen(3000,()=>console.log(`Servidor funcionando em http://localhost:3000`))
