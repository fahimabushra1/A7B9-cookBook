import PropTypes from 'prop-types';
import Order from './Order';
import CurrentlyCookingRecipes from './CurrentlyCookingRecipes';

Orders.propTypes = {
    wantToCook: PropTypes.array.isRequired,
    currentlyCookingRecipes: PropTypes.array.isRequired,
    handleCurrentlyCooking: PropTypes.func,
};

function Orders({wantToCook, currentlyCookingRecipes, handleCurrentlyCooking}) {
    console.log(wantToCook)
    return (
        <div className='w-2/5 text-white'>
           <h2 className='text-3xl font-bold text-center pb-4 bg-[#77fec5]'>Want to cook: {wantToCook.length}</h2>
           <hr />
          <div className="overflow-x-auto mb-12">
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
                wantToCook?.map((wantedRecipe, index)=>
                <Order
                key={index}
                wantedRecipe = {wantedRecipe}
                handleCurrentlyCooking = {handleCurrentlyCooking}
                />)
            }
            </table>
            </div>
            <CurrentlyCookingRecipes currentlyCookingRecipes = {currentlyCookingRecipes}/>
        </div>
    );
}

export default Orders;