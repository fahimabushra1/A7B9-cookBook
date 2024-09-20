import PropTypes from 'prop-types';

CurrentlyCookingRecipe.propTypes = {
    currentlyCookingRecipe:PropTypes.object.isRequired,
};

function CurrentlyCookingRecipe({currentlyCookingRecipe}) {
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
                </tr>
            </tbody>
        </>
    );
}

export default CurrentlyCookingRecipe;