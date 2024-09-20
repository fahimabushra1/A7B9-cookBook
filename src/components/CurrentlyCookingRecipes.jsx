import PropTypes from 'prop-types';
import CurrentlyCookingRecipe from './CurrentlyCookingRecipe';

CurrentlyCookingRecipes.propTypes = {
    currentlyCookingRecipes: PropTypes.array.isRequired,
};

function CurrentlyCookingRecipes({currentlyCookingRecipes}) {
    return (
        <div>
             <div className='text-white'>
           <h2 className='text-3xl font-bold text-center pb-4 bg-[#a09aff]'>Currently cooking: {currentlyCookingRecipes.length}</h2>
           <hr />
          <div className="overflow-x-auto">
          <table className="table">
                <thead>
                  <tr className='text-white'>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </thead>              
           
            {
                currentlyCookingRecipes?.map((currentlyCookingRecipe)=>
                <CurrentlyCookingRecipe
                key={currentlyCookingRecipe.id}
                currentlyCookingRecipe = {currentlyCookingRecipe}
                />)
            }
            </table>
            </div>
        </div> 
        </div>
    );
}

export default CurrentlyCookingRecipes;