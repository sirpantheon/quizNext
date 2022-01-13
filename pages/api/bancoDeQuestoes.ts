import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(200,'Qual Animal Transmite a Doeança De Chagas?', [

        RespostaModel.errada("abelha"),
        RespostaModel.errada("barata"),
        RespostaModel.errada("Pulga"),
        RespostaModel.certa("Barbeiro")
    ]),

    new QuestaoModel(307,'Qual Fruta e Conhecida Como "Jerimun" No Nordeste?', [
        RespostaModel.errada("Caju"),
        RespostaModel.errada("Laranja"),
        RespostaModel.errada("ChuChu"),
        RespostaModel.certa("Abóbora"),
    ]),

    new QuestaoModel(456,"Qual o Coletivo De Cães?", [
        RespostaModel.errada("Manada"),
        RespostaModel.errada("Alcateia"),
        RespostaModel.errada("Rebanho"),
        RespostaModel.certa("Matilha")
    ]),

    new QuestaoModel(476,"Qual é o Triangulo Que Tem todos os lados Diferentes",[
        RespostaModel.errada("Equilátero"),
        RespostaModel.errada("Isóceles"),
        RespostaModel.errada("Trapézio"),
        RespostaModel.certa("Escaleno"),
    ])


]

export default questoes;