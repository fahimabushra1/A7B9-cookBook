import PropTypes from 'prop-types';
import Order from './Order';

Orders.propTypes = {
    wantToCook: PropTypes.array.isRequired,
};

function Orders({wantToCook}) {
    console.log(wantToCook)
    return (
        <div className='bg-red-300 w-2/5 text-white'>
           <h2 className='text-3xl font-bold text-center pb-4'>Want to cook: {wantToCook.length}</h2>
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
                wantToCook?.map((wantedRecipe, index)=>
                <Order
                key={index}
                wantedRecipe = {wantedRecipe}
                />)
            }
            </table>
            </div>
        </div>
    );
}

export default Orders;