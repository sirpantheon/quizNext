import Questao from '../components/questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta';
import {useState} from 'react'

//137
const questaoteste = new QuestaoModel(1, "melhor cor?", [
    RespostaModel.errada("verde"),
    RespostaModel.errada("preto"),
    RespostaModel.errada("branco"),
    RespostaModel.certa("roxo"),
])

export default function Home() {
  
  const [questao,setQuestao] = useState(questaoteste)

  function onResponse(indice: number){
    setQuestao(questao.responderCom(indice))
    console.log(indice)
  }


  return (

    <div>

      <Questao valor={questao} onResponse={onResponse}/>

    </div>
  )
}
