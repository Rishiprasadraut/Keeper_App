import React from 'react'


const NoteForm = ({title, details,setTitle,setDetails,submitHandler}) => {
  return (
     <form
          className=" px-15 py-8 gap-2 flex flex-col items-start bg-white rounded-2xl"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            type="text"
            placeholder="Enter Your Title..."
            className="border-none outline-none px-5 py-2 w-full "
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            placeholder="Enter Notes Description"
            className="w-full border-none outline-none px-2 py-6"
            required
            value={details}
            onChange={(e)=>{
                   setDetails(e.target.value);
            }}
          ></textarea>
          
            <button className="bg-amber-200 px-4 py-2 rounded-full text-shadow-lg active:scale-90 transition-all duration-300 ml-48">
              +
            </button>
         
        </form>
  )
}

export default NoteForm
