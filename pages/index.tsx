import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta';
import {useState , useRef , useEffect} from 'react'
import Questionario from '../components/Questionario';
import Resposta from '../components/Resposta';

//145
const BASE_URL ="HTTP://localhost:3000/api"

export default function Home() {
  
  const [idsQuestoes,setIdsQuestoes] = useState<number[]>([])
  const [questao,setQuestao] = useState<QuestaoModel>()

  useEffect(() => {
    carregadorQuestoesIds()
  }, [])

  useEffect(() => {
    idsQuestoes.length > 0 && carregadorQuestoes(idsQuestoes[0])
  }, [idsQuestoes])

  async function carregadorQuestoesIds() {
    const resp = await fetch( `${BASE_URL}/questionario`)
    const idsQuestoes = await resp.json() 
    setIdsQuestoes(idsQuestoes)
    console.log(idsQuestoes)
  }

  async function carregadorQuestoes(idQuestoes:number) {
    const resp = await fetch( `${BASE_URL}/questoes/${idQuestoes}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
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
