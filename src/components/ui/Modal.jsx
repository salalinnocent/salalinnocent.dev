
//Modal for blog
const Modal = ({ blog, onClose }) => {
    if (!blog) return null;
    return (
        <div className="fixed inset-0 flex z-50 items-center justify-center bg-opacity-50 bg-black border-1 border-red-700 p-6">
            <div className="bg-black p-6 rounded-xl w-full max-h-[70vh] overflow-y-auto max-w-xl relative gap-2">
                <button onClick={onClose} className="text-red-700 absolute top-2 right-2">X</button>
                <h1 className="text-4xl text-center font-tertiary text-white font-bold mb-4 border-b-1 border-red-700">{blog.title}</h1>
                <p className="text-2xl whitespace-pre-wrap text-white">{blog.content}</p>
            </div>
        </div>
    )
}

export default Modal