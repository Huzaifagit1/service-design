import Image from 'next/image';
import { BsCheckCircleFill } from 'react-icons/bs';
import CommonPicture1 from '../assets/robin.svg';
import CommonPicture2 from '../assets/studio.svg';
import CommonPicture3 from '../assets/robin.svg';
import { MdArrowOutward } from 'react-icons/md';
const CommonStruggleSection = () => {
  // Sample data for the items
  const struggleItems = [
    {
      title: "Lorem Ipsum is simply",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Lorem Ipsum is simply",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Lorem Ipsum is simply",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  // Sample data for case studies
  const caseStudies = [
    {
      id: 1,
      title: "Studio BeardAndBonesAI - Internal AI Suite",
      description: "The client's team needed a centralized, internal platform to streamline AI image generation for business content, manage prompts effectively, and maintain brand consistency, moving away from scattered tools and spreadsheets.",
      image: CommonPicture1,
      ctaText: "Get Started"
    },
    {
      id: 2,
      title: "Studio BeardAndBonesAI - Internal AI Suite",
      description: "The client's team needed a centralized, internal platform to streamline AI image generation for business content, manage prompts effectively, and maintain brand consistency, moving away from scattered tools and spreadsheets.",
      image: CommonPicture2,
      ctaText: "Get Started"
    },
    {
      id: 3,
      title: "Studio BeardAndBonesAI - Internal AI Suite",
      description: "The client's team needed a centralized, internal platform to streamline AI image generation for business content, manage prompts effectively, and maintain brand consistency, moving away from scattered tools and spreadsheets.",
      image: CommonPicture3,
      ctaText: "Get Started"
    }
  ];

  return (
    <div className="  py-16 w-[90%] mx-auto">
      {/* Header Section */}
      <div className="  mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white ">
        Our Case 
<span className="relative inline-block">
  Study
  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#0388FE] via-[#6E49EE] via-[#AA25E5] to-[#D60FCC] rounded-full"></span>
</span>
        </h2>
        <p className="text-gray-400  mt-2">See our client works & Businesses</p>
        
        <div className="flex justify-end">
          <button className="back  text-white px-4 flex py-2 rounded-lg text-sm mt-4 flex items-center gap-1">
            View All           <MdArrowOutward size={25} />
            
          </button>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className=" mx-auto">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id}
              className={`bg-[#19202f] rounded-2xl overflow-hidden shadow-xl ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base mb-6">
                    {study.description}
                  </p>
                  <div>
                  <button className="bg-transparent hover:text-white transition-colors duration-300 px-5 py-2 rounded-full text-sm flex items-center gap-1">
  <span className="bg-gradient-to-r from-[#0388FE] via-[#6E49EE] via-[#AA25E5] to-[#D60FCC] bg-clip-text text-transparent">
    Get Started
  </span>
  <MdArrowOutward size={20} className="text-[#D60FCC]" />
</button>

                  </div>
                </div>
                
                <div className="w-full md:w-1/2 flex items-center justify-center  md:p-0">
                  <div className="relative w-full">
                    <Image 
                      src={study.image} 
                      alt={`Case Study ${study.id}`} 
                      width={600}
                      height={600}
                      className="w-full h-[50vh] object-cover rounded-b-lg md:rounded-tr-lg md:rounded-br-lg" 
                      priority
                    />
                  </div>  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Common Struggles Section */}
    
    </div>
  );
};

export default CommonStruggleSection;