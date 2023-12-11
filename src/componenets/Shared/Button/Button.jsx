import "./Button.css"

const Button = ({buttonName, action} ) => {
    return(
        <button className="button" onClick={() => action()}>
            {buttonName}
        </button>
    )
}

export default Button;