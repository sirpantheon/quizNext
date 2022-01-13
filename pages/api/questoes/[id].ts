import questoes from "../bancoDeQuestoes"

export default function handler(req, res) {

  const idSelector = +req.query.id

  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelector)

  if(unicaQuestaoOuNada.length === 1){
    const questaoSelecionada = unicaQuestaoOuNada[0].embalaralharRespostas()
    const obj = questaoSelecionada.responderCom(0).toObject()
    res.status(200).json(obj)
  }else{
    res.status(204).send({ error:"nenhuma questao selecionada corretamente..."})
  }


  //
  }
  