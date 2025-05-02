import Image from 'next/image';
import { BsCheckCircleFill } from 'react-icons/bs';
// import CommonPicture from '../assets/commonpicture.svg';
import CommonPicture from '../assets/commonpicture.svg'

const CommonStruggleSection = () => {
  return (
    <div className="w-[90%] bg-[#19202f] mx-auto mt-6 rounded-xl  sm:p-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
  Common Struggle And{' '}
  <span className="relative inline-block">
    <span className="">
      Solution
    </span>
    <span className="block absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#0388FE] via-[#6E49EE] via-[#AA25E5] to-[#D60FCC]"></span>
  </span>
</h2>

            <p className="text-gray-400 mb-8">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Item 1 */}
              <div className="flex items-start space-x-3">
                <BsCheckCircleFill className="text-white text-lg mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Lorem Ipsum is simply</h3>
                  <p className="text-gray-400 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start space-x-3">
                <BsCheckCircleFill className="text-white text-lg mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Lorem Ipsum is simply</h3>
                  <p className="text-gray-400 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start space-x-3">
                <BsCheckCircleFill className="text-white text-lg mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Lorem Ipsum is simply</h3>
                  <p className="text-gray-400 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start space-x-3">
                <BsCheckCircleFill className="text-white text-lg mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Lorem Ipsum is simply</h3>
                  <p className="text-gray-400 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <Image 
                src={CommonPicture} 
                alt="Common Struggle Solution" 
                className="w-full h-auto" 
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonStruggleSection;