import PropTypes from 'prop-types';

CurrentlyCookingRecipe.propTypes = {
    currentlyCookingRecipe:PropTypes.object.isRequired,
    handleDeleteCurrentlyCooking:PropTypes.func,
};

function CurrentlyCookingRecipe({currentlyCookingRecipe, handleDeleteCurrentlyCooking}) {
    const {id, name, preparing_time, calories} = currentlyCookingRecipe;
    console.log(currentlyCookingRecipe)
    return (
        <>
             <tbody>
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{preparing_time}</td>
                  <td>{calories} calories</td>
                  <td> <button onClick={()=>handleDeleteCurrentlyCooking(id)} className='bg-[#0BE58A] font-bold p-2 rounded-lg'>Delete</button></td>
                </tr>
            </tbody>
        </>
    );
}

export default CurrentlyCookingRecipe;