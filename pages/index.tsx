import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta';
import {useState , useRef , useEffect} from 'react'
import Questionario from '../components/Questionario';

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

  function onResponse(questao:QuestaoModel){

  }

  function irPraProximoPasso(){}

  return (

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>

    <Questionario 
      questao={questao}
      ultima={true}
      onResponse={onResponse}
      irPraProximoPasso={irPraProximoPasso}
    />

      

    </div>
  )
}
