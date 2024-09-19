import PropTypes from 'prop-types';
import Orders from "./Orders";
import { useState } from 'react';
import { useEffect } from 'react';
import Recipe from './Recipe';

Recipes.propTypes = {
    
};

function Recipes() {
    const [recipes,setRecipes] = useState();

    useEffect(()=>{
        fetch("recipes.json")
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className='max-w-7xl mx-auto'>
             <div className='text-center my-12'>
             <h2 className='capitalize text-3xl font-bold text'>our recipes</h2>
             <p className='pt-2 text-lg'>Our healthy delicious recipes can make your life better easier and more enjoyable.</p>
             </div>
             <div className="flex">
           <div className='w-3/5 grid grid-cols-2 gap-4'>
                 {
                    recipes?.map(recipe => <Recipe
                    key={recipe.id}
                    recipe = {recipe}
                    />)
                 }
           </div>
           <Orders/>
           </div>
        </div>
    );
}

export default Recipes;