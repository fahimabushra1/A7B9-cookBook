// LS function for want to cook recipes:

const getStoredWantToCook =()=>{
    const storedWantToCookString = localStorage.getItem('wantToCook');
    if(storedWantToCookString){
        return JSON.parse(storedWantToCookString);
    }
    return[];
}

const saveWantToCookToLS = wantToCook =>{
    const wantToCookStringified = JSON.stringify(wantToCook);
    localStorage.setItem('wantToCook', wantToCookStringified);
    }

    const addToLS = id =>{
        const wantToCook = getStoredWantToCook();
        wantToCook.push(id);
        // save to local storage
        saveWantToCookToLS(wantToCook);
    }

    const removeFromLS = id =>{
        const wantToCook = getStoredWantToCook();
        const remaining = wantToCook.filter(item=>item!== id);
        saveWantToCookToLS(remaining);
        }

// LS function for currently cooking recipes:

const getStoredCurrentlyCookingRecipes =()=>{
    const storedCurrentlyCookingRecipesString = localStorage.getItem('currentlyCookingRecipes');
    if(storedCurrentlyCookingRecipesString){
        return JSON.parse(storedCurrentlyCookingRecipesString);
    }
    return[];
}

const saveCurrentlyCookingRecipesToLS = currentlyCookingRecipes =>{
    const currentlyCookingRecipesStringified = JSON.stringify(currentlyCookingRecipes);
    localStorage.setItem('currentlyCookingRecipes', currentlyCookingRecipesStringified);
    }

    const addToLocalS = id =>{
        const currentlyCookingRecipes = getStoredCurrentlyCookingRecipes();
        currentlyCookingRecipes.push(id);
        // save to local storage
        saveCurrentlyCookingRecipesToLS(currentlyCookingRecipes);
    }

    const removeFromLocalS = id =>{
        const currentlyCookingRecipes = getStoredCurrentlyCookingRecipes();
        const remaining = currentlyCookingRecipes.filter(item=>item!== id);
        saveCurrentlyCookingRecipesToLS(remaining);
        }

export {getStoredWantToCook, getStoredCurrentlyCookingRecipes, addToLS, addToLocalS, removeFromLS, removeFromLocalS}