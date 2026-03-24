export const Button = ({message}: {message: String}) => {
    return (
        <button className="bg-gray-200 text-gray-600 border border-solid border-gray-500 shadow-sm cursor-pointer font-bold py-[9px] px-[17px] rounded-md leading-6"
        >
            {message}
        </button>
    )
}