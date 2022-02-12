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

const BASE_URL ="HTTP://localhost:3000/api"

export default function Home() {
  

  const [idsQuestoes,setIdsQuestoes] = useState<number[]>([])
  const [questao,setQuestao] = useState<QuestaoModel>(questaoteste)
  const questaoRef = useRef<QuestaoModel>()

  useEffect(() => {
    questaoRef.current = questao
    carregadorQuestoesIds()
  }, [questao])

  async function carregadorQuestoesIds() {
    const resp = await fetch( `${BASE_URL}/questionario`)
    const idsQuestoes = await resp.json()
    setIdsQuestoes(idsQuestoes)
  }

  async function carregadorQuestoes(idQuestoes:number) {
    const resp = await fetch( `${BASE_URL}/questoes/${idQuestoes}`)
    const idsQuestoes = await resp.json()
    setIdsQuestoes(idsQuestoes)
  }

  


  function onResponse(questao:QuestaoModel){

  }

  function irPraProximoPasso(){}

  return (
    <Questionario 
      questao={questao}
      ultima={true}
      onResponse={onResponse}
      irPraProximoPasso={irPraProximoPasso}
    />

    
  )
}
