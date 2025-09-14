
export default function Search({setsearchdrink , searchdrink}){   
    return(
        <div className="flex justify-center ">
          <div className=" h-[10vh] w-[40vw] m-10  ">
          <input className=" text-gray-200 text-2xl w-full h-10 px-8 p-6 rounded-full  border-gray-400 border-8 focus:outline-none focus:ring-2 focus:ring-blue-500"type="text" placeholder="Enter Cocktail Name" value={searchdrink} onChange={(e) =>setsearchdrink(e.target.value)} />
          </div>
        </div>
    )
}