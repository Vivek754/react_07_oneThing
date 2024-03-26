const Form = ({thing, handleInput, handleSubmit})=>{
    return(
        <>
        <h1 className="text-3xl font-bold">What is your "One Thing"?</h1>
        <form
          onSubmit={handleSubmit}
          className=" mt-5 flex ring-4 rounded-md ring-slate-200 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200 ring-offset-slate-200"
        >
          <input
            onInput={handleInput}
            placeholder="Enter One Thing"
            autoFocus
            maxLength="64"
            value={thing}
            type="text"
            className="bg-inherit rounded-md font-sans text-slate-800 py-2 px-6 focus:outline-none text-xl sm:text-2xl placeholder:text-slate-400 caret-teal-600 appearance-none w-full"
          />
          <button className="bg-inherit rounded-md font-sans text-slate-800 py-2 pr-6 focus:outline-none focus:text-teal-600 hover:text-teal-600 pointer-events-none">
            GO
          </button>
        </form></>
    )
}

export default Form