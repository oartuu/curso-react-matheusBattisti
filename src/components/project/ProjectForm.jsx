import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import style from './ProjectForm.module.css'
function ProjectForm({btnText}) {
  return (
    <form className={style.form}>
        <Input
            type = "text"
            name = "name"
            text = "Nome do projeto:"
            placeHolder="Insira o nome do projeto"
        />
        <Input
            type = "number"
            name = "budget"
            text = "Orçamento do projeto:"
            placeHolder="Insira o orçamento total"
        />
        <Select
            name= "category_id"
            text = "Selecione a categoria"
        />
        <SubmitButton text={btnText}/>
    </form>
    )
}

export default ProjectForm