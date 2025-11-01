import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { BotaoCriarEvento } from "../BotaoCriarEvento"
import './formulario-do-evento.estilos.css'
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDoEvento({ temas, aoSubmeter }) {

  function aoFormSubmetido(formData) {
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }

    aoSubmeter(evento)
  }

  return (
    <form className='form-evento' action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Qual é o nome do evento?
          </Label>

          <CampoDeEntrada
            type="text"
            id='nomeEvento'
            placeholder='Summer dev hits'
            name='nomeEvento'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">
            Qual é o endereço da imagem de capa?
          </Label>

          <CampoDeEntrada
            type="text"
            id='capa'
            placeholder='http://...'
            name='capa'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <CampoDeEntrada
            type="date"
            id='dataEvento'
            placeholder='Summer dev hits'
            name='dataEvento'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="temaEvento">
            Tema do evento
          </Label>
          <ListaSuspensa id="tema" name="tema" itens={temas}/>
        </CampoDeFormulario>
        <div className="acoes">
        <BotaoCriarEvento>Criar Evento</BotaoCriarEvento>
        </div>

      </div>
    </form>
  )
}