const CustomButton = ({text, handleCompletedThing})=>{
   return(
    <button className="flex items-center space-x-3 text-2xl bg-teal-600 px-6 py-3 rounded-md text-slate-200 focus:outline-none focus-visible:ring-4 ring-teal-200 hover:opacity-80 transition-opacity" autoFocus onClick={handleCompletedThing}>
        <span className="pointer-events-none">{text}</span>
    </button>
   )
}
export default CustomButton