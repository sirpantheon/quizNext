

import styles from '../styles/Home.module.css'
import Questao from '../components/questao'
import questaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

export default function Home() {
  const Questaoteste = new questaoModel(1, "melhor cor?", [
      RespostaModel.errada("verde"),
      RespostaModel.errada("preto"),
      RespostaModel.errada("branco"),
      RespostaModel.certa("roxo"),
  ])


  return (
    <Questao valor={Questaoteste}/>
  )
}
