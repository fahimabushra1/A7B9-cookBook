import PropTypes from 'prop-types';
import MoreInfoAboutRecipes from './MoreInfoAboutRecipes';
import Ingredients from './Ingredients';

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func,
};

function Recipe({recipe, handleWantToCook}) {
 const {id, name, image, description,calories, preparing_time, ingredients} = recipe;
 console.log(recipe)
    return (
        <div>
       <div className="card bg-slate-200  lg:max-h-[670px] sm:max-h-72 mb-4 shadow-xl mx-6">
  <figure className="pt-12">
    <img
      src={image}
      alt="Recipes"
      className="rounded-3xl max-w-52 max-h-36" />
  </figure>
  <div className="card-body items-left text-left">
    <h2 className="card-title font-bold">{name}</h2>
    <p className='text-slate-500'>{description}</p>
    <hr className='border border-indigo-200' />
    <p className='font-bold pt-2'>Ingredients: {ingredients.length}</p>
  <div className=''>
  {
        ingredients.map((ingredient, indx) =>
            <Ingredients
        key={indx}
        ingredient = {ingredient}/>)
    }
  </div>
    <hr className='border border-indigo-200' />
     <MoreInfoAboutRecipes calories = {calories} preparingTime = {preparing_time}/>
    <div className="card-actions">
    <button onClick={()=>handleWantToCook(recipe, id)} className='bg-[#0BE58A] font-bold text-lg text-black px-4 py-2 rounded-[32px] capitalize'>want to cook</button>
    </div>
  </div>
</div>
        </div>
    );
}

export default Recipe;