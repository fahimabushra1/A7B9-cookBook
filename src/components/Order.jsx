import PropTypes from 'prop-types';

Order.propTypes = {
    wantedRecipe:PropTypes.object.isRequired,
    handleCurrentlyCooking: PropTypes.func,
};

function Order({wantedRecipe, handleCurrentlyCooking}) {
    const {id, name, preparing_time, calories} = wantedRecipe;
    return (
        <>
           <tbody>
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{preparing_time}</td>
                  <td>{calories} calories</td>
                  <td> <button onClick={()=>handleCurrentlyCooking(id, wantedRecipe)} className='bg-[#0BE58A] font-bold p-2 rounded-lg'>Preparing</button></td>
                </tr>
            </tbody>
        </>
    );
}

export default Order;