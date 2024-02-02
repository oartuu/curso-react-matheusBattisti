import ProjectForm from "../project/ProjectForm"
import styles from './NewProject.module.css'
function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Crie Seu Projeto</h1>
      <p>crie seu projeto para adicionar serviços</p>
      <ProjectForm btnText="Criar projeto"/>
    </div>
  )
}

export default NewProject