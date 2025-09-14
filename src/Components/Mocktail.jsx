import { useEffect , useState } from "react";
 
export default function Mocktail({setsearchdrink , searchdrink}){
  const [drinks , setdrinks] =useState([]);


    useEffect(() =>{
        async function fetchMocktail(){
        let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchdrink}`);
        let res = await response.json();
        console.log(res);
        if(res.drinks !== 'no data found'){
            setdrinks(res.drinks)
        }else{
            setdrinks([]);
        }
    }fetchMocktail()
    },[searchdrink]);

  
    return(
        <div className="">
      {drinks.length>0?drinks.map((drink) =>( 
        <div key={drink.idDrink} className="p-[20px] m-[20px] bg-[url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] flex justify-around items-center flex-wrap rounded-2xl ">
          <div className="img-side flex flex-col justify-center items-center font-bold text-2xl gap-5">
         <img src={drink.strDrinkThumb} alt="pick" className="rounded-2xl h-[400px] w-[400px]" height="400px" width="400px" />
          </div>
          <div className="right flex flex-col  gap-10">
            <div className="name">
               <h1 className="font-extrabold text-3xl text-gray-800">Name : {drink.strDrink}</h1>
            </div>
            <div className="inst ">
          <h1 className="text-2xl">Instruction</h1>
          <p className="h-[100%] w-[50vw]">{drink.strInstructions}</p>
          </div>
          <div className="Ingr ">
          <h2 className="text-2xl">
            Ingredents
          </h2>
          <ul className="list-disc">
            <li>{drink.strIngredient1}</li>
            <li>{drink.strIngredient2}</li>
            <li>{drink.strIngredient3}</li>
            <li>{ drink.strIngredient4 == null ? "Glass" : drink.strIngredient4  }</li>
            <li>{ drink.strIngredient5 == null ? "Chakna" : drink.strIngredient5  }</li>
          </ul>
          </div>
          </div>
        </div>
      )):'no data found'}
        </div>   
    )
}
