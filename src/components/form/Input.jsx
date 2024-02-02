import style from './Input.module.css'  

function Input ({type, name, text, placeHolder, handleOnChange, value}) {
    return (
        <div className= {style.form_control} >
            <label htmlFor={name}>
                {text}
            </label>
            <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeHolder}
                onChange={handleOnChange}
                value={value}
            />
        </div>
    )
}

export default Input