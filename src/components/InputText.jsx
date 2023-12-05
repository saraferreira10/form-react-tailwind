import '../reset.css'

function InputText(props) {

    const inputStyle = { width: props.width };

    return (
        <div>
            <label htmlFor={props.name} className="flex flex-col text-white font-semibold">
                <span>{props.label}</span>
                <input name={props.name} type={props.type} placeholder={props.placeholder} required style={inputStyle} className='py-2 px-5 rounded border-none outline-none bg-gray-600' />
            </label>
        </div>
    )
}

export default InputText;