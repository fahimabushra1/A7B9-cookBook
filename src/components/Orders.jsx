import PropTypes from 'prop-types';

Orders.propTypes = {
    wantToCook: PropTypes.array,
};

function Orders({wantToCook}) {
    return (
        <div className='bg-red-300 w-2/5'>
            want to cook: {wantToCook.length}
        </div>
    );
}

export default Orders;