import Questao from '../components/questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

export default function Home() {
  
  
  const questaoteste = new QuestaoModel(1, "melhor cor?", [
      RespostaModel.errada("verde"),
      RespostaModel.errada("preto"),
      RespostaModel.errada("branco"),
      RespostaModel.certa("roxo"),
  ])


  return (

    <div styles={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }}>

      <Questao valor={questaoteste}/>

    </div>
  )
}
