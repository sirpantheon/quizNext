import Questao from '../components/questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta';
import Botao from '../components/botao';
import {useState , useRef , useEffect} from 'react'

//140
const questaoteste = new QuestaoModel(1, "melhor cor?", [
    RespostaModel.errada("verde"),
    RespostaModel.errada("preto"),
    RespostaModel.errada("branco"),
    RespostaModel.certa("roxo"),
])

export default function Home() {
  
  const [questao,setQuestao] = useState(questaoteste)
  const questaoRef = useRef<QuestaoModel>()

  useEffect(() => {
    questaoRef.current = questao
  }, [questao])

  function onResponse(indice: number){
    setQuestao(questao.responderCom(indice))
    console.log(indice)
  }

  function tempoEsgotado(){

    if(questaoRef.current.naoRespondida){
      setQuestao(questaoRef.current.responderCom(-1))

    }
  }

  return (

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>

      <Questao 
        valor={questao} 
        tempoPraResposta={15}
        onResponse={onResponse}
        tempoEsgotado={tempoEsgotado}
      />
      <Botao  texto={"proximo"} />

      

    </div>
  )
}
