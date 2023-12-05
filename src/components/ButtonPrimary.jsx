import '../reset.css'

function ButtonPrimary({ text }) {
    return <button className="font-semibold text-white bg-purple-700 rounded-sm w-full py-2 hover:bg-purple-600">{text}</button>
}

export default ButtonPrimary;