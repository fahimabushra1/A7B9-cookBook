import PropTypes from 'prop-types';

Banner.propTypes = {
    
};

function Banner(props) {
    return (
        <div className="max-w-7xl mx-auto text-center mt-12 bg-[url('src/assets/images/banner.png')] text-white space-y-4 p-32 text-wrap mb-12">
           <h1 className='text-5xl font-bold leading-relaxed'>Discover an exceptional cooking <br />
           class tailored for you!</h1>
           <p className='text-wrap text-lg'>Learn and Master Basic cooking, cutting, baking, kitchen management, training and 40+ live classes 
           problems to become <br /> an exceptionally well world-class Programmer.</p>
          <div className='pt-8'>
          <button className='bg-[#0BE58A] font-bold text-lg text-black px-4 py-2 rounded-[32px] capitalize'>explore now</button>
          <button className='outline bg-transparent text-lg font-bold outline-blue-950 ml-6 px-4 py-2 rounded-[32px] capitalize'>our feedback</button>
          </div>
        </div>
    );
}

export default Banner;