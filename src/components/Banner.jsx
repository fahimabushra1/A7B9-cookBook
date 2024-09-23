import PropTypes from 'prop-types';
import banner from "../assets/images/banner.png"
Banner.propTypes = {
   
};

function Banner() {
    return (
        <div style={{backgroundImage: `url(${banner})`}} className="max-w-5xl bg-no-repeat bg-auto bg-center mx-auto text-center lg:h-[480px] sm:h-[300px] mt-8 text-white lg:space-y-4 sm:space-y-0 lg:p-24 sm:p-12 text-wrap mb-12">
           <h1 className='text-5xl font-bold leading-relaxed'>Discover an exceptional cooking <br />
           class tailored for you!</h1>
           <p className='text-wrap lg:text-lg sm:text-sm'>Learn and Master Basic cooking, cutting, baking, kitchen management, training and 40+ live classes 
           problems to become an exceptionally well world-class Programmer.</p>
          <div className='pt-8 pb-6'>
          <button className='bg-[#0BE58A] font-bold lg:text-lg sm:text-sm text-black px-4 py-2 rounded-[32px] capitalize'>explore now</button>
          <button className='outline bg-transparent lg:text-lg sm:text-sm font-bold outline-blue-950 ml-6 px-4 py-2 rounded-[32px] capitalize'>our feedback</button>
          </div>
        </div>
    );
}

export default Banner;