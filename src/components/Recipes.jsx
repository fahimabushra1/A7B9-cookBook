import PropTypes from 'prop-types';
import Orders from "./Orders";
import { useState } from 'react';
import { useEffect } from 'react';
import Recipe from './Recipe';
import toast from 'react-hot-toast';
import {  addToLocalS, addToLS, getStoredWantToCook, removeFromLS } from '../utilities/localStorage';

// export default Recipes;
Recipes.propTypes = {
    
};

function Recipes() {
    const [recipes,setRecipes] = useState([]);
    const [wantToCook, setWantToCook] = useState([]);
    const [currentlyCookingRecipes, setCurrentlyCookingRecipes] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(()=>{
        fetch("recipes.json")
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])


      // load want to cook data from local storage

      useEffect(()=>{
        if(recipes.length){
            const storedWantToCook = getStoredWantToCook();
            console.log(storedWantToCook);
             const savedWantToCook = [];
             for(const id of storedWantToCook){
              console.log(id)
             const wantToCook = recipes.find(recipe => recipe.id === id)
             if(wantToCook){ 
                 savedWantToCook.push(wantToCook)
                }
          }
          setWantToCook(savedWantToCook)
        }
    },[recipes])
     
    // load currently cooking data from local storage

    //   useEffect(()=>{
    //      if(wantToCook.length){
    //         const storedCurrentlyCookingRecipes =  getStoredCurrentlyCookingRecipes();
    //         console.log(storedCurrentlyCookingRecipes);
    //          const savedCurrentlyCookingRecipes = [];
    //          for(const id of storedCurrentlyCookingRecipes){
    //           console.log(id)
    //          const currentlyCookingRecipes = wantToCook.find(recipe => recipe.id === id)
    //          if(currentlyCookingRecipes){ 
    //              savedCurrentlyCookingRecipes.push(currentlyCookingRecipes)
    //             }
    //       }
    //       setCurrentlyCookingRecipes(savedCurrentlyCookingRecipes)
    //     }
    // },[wantToCook])


    function handleWantToCook(recipe) {
    const isAlreadyAdded = wantToCook.some(item => item.id === recipe.id);

    if (isAlreadyAdded) {
      toast('This recipe is already enlisted', {
        style: {
          border: '1px solid #0BE58A',
          padding: '16px',
          color: '#0BE58A',
          borderRadius: '10px',
          background: '#0f172a ',
        },
      });
    } else {
      const newWantToCook = [...wantToCook, recipe];
      setWantToCook(newWantToCook);
      addToLS(recipe.id);
    }
  }


    const handleCurrentlyCooking =(id, recipe, time, calories)=>{
        const isAlreadyAdded = currentlyCookingRecipes.some(item => item.id === recipe.id)

        if(isAlreadyAdded){
          toast('This recipe is already enlisted', {
            style: {
              border: '1px solid #0BE58A',
              padding: '16px',
              color: '#0BE58A',
              borderRadius: '10px',
              background: '#0f172a ',
            },
          });
        }
        else {
          const newCurrentlyCookingRecipes = [...currentlyCookingRecipes, recipe];
          setCurrentlyCookingRecipes(newCurrentlyCookingRecipes);
            // addToLocalS(recipe.id);

            const timeInt = (time) => { 
              let value = parseInt(time)
              if (time.includes('hour')){
                return value * 60
              }  else {
                return value
              }
              }
          setTotalTime(parseInt(totalTime) + timeInt (time));
          setTotalCalories(parseInt(totalCalories) + parseInt(calories));
        }
        if(wantToCook.length > 1){
            setWantToCook(wantToCook.filter(wantedRecipe=>wantedRecipe.id !== id));
            removeFromLS(id);
        }
        else{
            setWantToCook([recipe]);
        }   
    }

    const handleDeleteCurrentlyCooking = (id, time, calories) =>{
        setCurrentlyCookingRecipes(currentlyCookingRecipes.filter(currentlyCookingRecipe=>currentlyCookingRecipe.id !== id));
        // removeFromLocalS(id);

        const timeInt = (time) => { 
          let value = parseInt(time)
          if (time.includes('hour')){
            return value * 60
          }  else {
            return value
          }
          }
        setTotalTime(parseInt(totalTime) - timeInt(time));
        setTotalCalories(parseInt(totalCalories) - parseInt(calories));
    }

    return (
        <div className='max-w-5xl mx-auto bg-slate-900 rounded-t-3xl'>
             <div className='text-center my-12 pt-4 text-white'>
             <h2 className='capitalize text-4xl font-bold text'>our recipes</h2>
             <p className='pt-2 text-lg'>Our healthy delicious recipes can make your life better easier and more enjoyable.</p>
             </div>
             <div className="lg:flex sm:flex-none">
           <div className='lg:w-3/5 sm:w-full lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 gap-4 mb-12'>
                 {
                    recipes?.map(recipe => <Recipe
                    key={recipe.id}
                    recipe = {recipe}
                    handleWantToCook = {handleWantToCook}
                    />)
                 }
           </div>
           <Orders wantToCook={wantToCook}
           totalTime = {totalTime}
           totalCalories = {totalCalories}
            currentlyCookingRecipes = {currentlyCookingRecipes}
            handleDeleteCurrentlyCooking = {handleDeleteCurrentlyCooking}
           handleCurrentlyCooking = {handleCurrentlyCooking}/>
           </div>
        </div>
    );
}

export default Recipes;