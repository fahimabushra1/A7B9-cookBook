import PropTypes from 'prop-types';
import Orders from "./Orders";
import { useState } from 'react';
import { useEffect } from 'react';
import Recipe from './Recipe';
import toast from 'react-hot-toast';

Recipes.propTypes = {
    
};

function Recipes() {
    const [recipes,setRecipes] = useState([]);
    const [wantToCook, setWantToCook] = useState([]);
    const [currentlyCookingRecipes, setCurrentlyCookingRecipes] = useState([]);

    useEffect(()=>{
        fetch("recipes.json")
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])


    const handleWantToCook =(recipe)=>{
        setWantToCook([...wantToCook, recipe]);
    }


    const handleCurrentlyCooking =(id, recipe)=>{
        if(recipe==id){
            toast("already included")
        }
        else{
            setCurrentlyCookingRecipes([...currentlyCookingRecipes, recipe]);
        }
       
        setWantToCook(wantToCook.filter(wantedRecipe=>wantedRecipe.id !== id))
    }
    return (
        <div className='max-w-5xl mx-auto bg-slate-900 rounded-t-3xl'>
             <div className='text-center my-12 pt-4 text-white'>
             <h2 className='capitalize text-4xl font-bold text'>our recipes</h2>
             <p className='pt-2 text-lg'>Our healthy delicious recipes can make your life better easier and more enjoyable.</p>
             </div>
             <div className="flex">
           <div className='w-3/5 grid grid-cols-2 gap-4'>
                 {
                    recipes?.map(recipe => <Recipe
                    key={recipe.id}
                    recipe = {recipe}
                    handleWantToCook = {handleWantToCook}
                    />)
                 }
           </div>
           <Orders wantToCook={wantToCook}
            currentlyCookingRecipes = {currentlyCookingRecipes}
           handleCurrentlyCooking = {handleCurrentlyCooking}/>
           </div>
        </div>
    );
}

export default Recipes;