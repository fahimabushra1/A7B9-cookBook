import PropTypes from 'prop-types';
import { FaRegClock } from 'react-icons/fa';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';

MoreInfoAboutRecipes.propTypes = {
    preparingTime: PropTypes.string,
    calories: PropTypes.number,
};

function MoreInfoAboutRecipes({preparingTime, calories}) {
    return (
        <div className='flex items-center gap-6 py-2'>
           <div className='flex items-center gap-2'>
            <div><FaRegClock /></div>
            <div>{preparingTime}</div>
           </div>
           <div className='flex items-center gap-2'>
            <div><MdOutlineLocalFireDepartment/></div>
            <div>{calories}</div>
           </div> 
        </div>
    );
}

export default MoreInfoAboutRecipes;