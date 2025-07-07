import { useEffect } from "react"


//AlertBox for the Form
const AlertBox = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setInterval(() => {
        onClose()
      }, 3000)
      return () => clearInterval(timer)
    }
  }, [message, onClose])
  if (!message) return null
  return (
    <>
      <div className="fixed top-4 right-4 text-3xl bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
        {message}
      </div>
    </>
  )
}

export default AlertBox;