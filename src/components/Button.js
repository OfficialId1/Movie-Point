export const Button = ({children}) => {
  return (
    <button className='w-64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium hover:bg-gradient-to-r hover:bg-gradient-to-tr'>{children}</button>
  )
}
