import PropTypes from 'prop-types';
import MoreInfoAboutRecipes from './MoreInfoAboutRecipes';
import Ingredients from './Ingredients';

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func,
};

function Recipe({recipe, handleWantToCook}) {
 const {name, image, description,calories, preparing_time, ingredients} = recipe;
    return (
        <div>
       <div className="card bg-slate-200 max-w-80 max-h-[700px] shadow-xl mx-6">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Recipes"
      className="rounded-3xl max-h-40" />
  </figure>
  <div className="card-body items-left text-left">
    <h2 className="card-title font-bold">{name}</h2>
    <p className='text-slate-500 pb-4'>{description}</p>
    <hr className='border border-indigo-200' />
    <p className='font-bold pt-4'>Ingredients: {ingredients.length}</p>
  <div className='pb-4'>
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
    <button onClick={()=>handleWantToCook(recipe)} className='bg-[#0BE58A] font-bold text-lg text-black px-4 py-2 rounded-[32px] capitalize'>want to cook</button>
    </div>
  </div>
</div>
        </div>
    );
}

export default Recipe;