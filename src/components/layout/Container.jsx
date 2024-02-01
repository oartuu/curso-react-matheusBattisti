import styles from './Container.module.css'
function Container(props) {
  return (
    <>
      <div className= {`${styles.container} ${styles[props.customClas]}`}> {props.children}
      </div>
    </>
  )
}

export default Container