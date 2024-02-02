import style from './select.module.css'  

function Select ({ name, text, options, handleOnChange, value}) {
    return (
        <div className= {style.form_control} >
            <label htmlFor={name}>
                {text}
            </label>
            <select name={name} id= {name}>
                <option >selecione uma opção</option>
            </select>
        </div>
    )
}

export default Select