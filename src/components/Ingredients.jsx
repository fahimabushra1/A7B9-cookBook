import PropTypes from 'prop-types';

Ingredients.propTypes = {
    ingredient: PropTypes.string,
};

function Ingredients({ingredient}) {
    return (
        <div>
             <ul>
        <li className='text-slate-500 list-disc list-inside'>{ingredient}</li>
    </ul>
        </div>
    );
}

export default Ingredients;