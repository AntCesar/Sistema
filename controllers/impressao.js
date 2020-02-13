module.exports = app => {
    app.get('/impressao', (req, res) => res.send('Voce está na rota de impressão!'))
  
    app.post('/impressao', (req, res) => {
        console.log(req.body)
        res.send('Voce esta na rota impressão e esta realizando um POST!')
    
    app.put('/impressao', (req, res) => res.send('Voce está colocando algo do sistema!'))

    app.delete('/impressao', (req, res) => res.send('Voce está deletando algo do sistema!'))
    
    })
 }
 