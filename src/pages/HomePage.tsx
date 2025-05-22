import React from 'react';
import { ArrowRight,   } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
//import Button from '../components/common/Button';
import ContentCard from '../components/common/ContentCard';
import TrainingCard from '../components/common/TrainingCard';
//import InvestigationCard from '../components/common/InvestigationCard';
import { contentItems } from '../data/content';
import { trainingModules } from '../data/training';
//import { investigations } from '../data/investigations';
import { useEffect } from 'react';
import image from '../asset/4.png'
// import image1 from '../asset/1.png'
// import image2 from '../asset/2.png'

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  // Get latest content (3 items)
  const latestContent = [...contentItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Get a few training modules (2 items)
  const featuredTraining = trainingModules.slice(0, 2);

  // Get latest investigation (1 item)
  // const latestInvestigation = [...investigations]
  //   .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      //setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



 // const isMobile = windowWidth < 768;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full bg-[image:url('/src/asset/1.png')] bg-cover bg-center bg-no-repeat h-96 md:h-[calc(100vh-64px)] flex items-center justify-center] overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 leading-tight mb-6">
            EMPOWERING BENIN'S<br />
            DIGITAL FUTURE
          </h1>
          
          <p className="text-green-100 mb-8 max-w-lg">
            Djofo.bj is a web platform dedicated to raising awareness, 
            informing, and educating communities in Benin about 
            internet risks such as disinformation, online scams, hacking
          </p>
          
          <Link to='https://chat.whatsapp.com/C0LhlGoD3hMGPBRlhXQ8wJ' className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-4 rounded-md transition-colors">
            Join the Movement
          </Link>
        </div>
        
        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-end">
          <div className="relative">
            <div className="absolute top-0 right-0">
              <div className="bg-white rounded-lg p-1 shadow-md">
                <div className="w-8 h-6 bg-orange-500 rounded"></div>
              </div>
            </div>
            <div className="max-w-md">
              {/* This div serves as a placeholder for where the illustration would be */}
              <div className="h-64 md:h-80 lg:h-96 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    
      </section>

      {/* Features Section */}
    <section className="py-8 bg-gray-50 dark:bg-gray-800 font-sans">
      <div className="container mx-auto px-4">
        {/* Top navigation with "Explore the Risks" */}
        <div className="text-center mb-4">
          <span className="text-orange-400">Explore the Risks</span>
        </div>
        
        {/* Main title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">PROTECTING BENIN'S DIGITAL LANDSCAPE</h1>
        </div>
        
        {/* Content container */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left section with illustration */}
          <div className="w-full lg:w-1/2 bg-[image:url('/src/asset/2.png')] bg-cover bg-center bg-no-repeat h-96 md:h-[calc(100vh-64px)] flex items-center justify-center] rounded-3xl relative flex items-center justify-center py-12 px-6 overflow-hidden">
            {/* Logo */}
            {/* <div className="absolute top-6 left-6 bg-white rounded-full p-3 w-20 h-20 flex items-center justify-center z-10">
              <span className="text-red-600 font-bold text-2xl">Dɔfo</span>
            </div> */}
            
            {/* Person illustration */}
            <div className="relative w-full max-w-md flex items-center justify-center">
              {/* This would be where you'd place the actual image of the person */}
              <div className="w-64 h-80">
                {/* In the real implementation, you'd replace this with an img tag */}
                {/* <img src="/path-to-person-image.png" alt="Person with card" className="w-full h-full" /> */}
              </div>
              
              {/* Card with heart */}
              {/* <div className="absolute top-1/3 right-12 bg-white p-4 rounded-lg shadow-lg transform rotate-6">
                <div className="text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div> */}
            </div>
            
            {/* 'X' marker in the bottom right as seen in the image */}
            <div className="absolute bottom-4 right-4 bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
              <span className="text-xs">×</span>
            </div>
          </div>
          
          {/* Right section with content */}
          <div className="w-full lg:w-1/2 p-6 bg-white dark:bg-gray-900 rounded-3xl flex flex-col justify-center">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white  mb-6">NAVIGATING THE ONLINE WORLD</h2>
              
              <p className="text-gray-600 dark:text-white text-base mb-8 text-center">
                Online security is a shared responsibility. Djofo.bj provides resources and guidance to
                help individuals and communities in Benin stay safe and informed in the digital age. By raising
                awareness and promoting digital literacy, we aim to empower Beninese citizens to make
                informed decisions and protect themselves from
              </p>
              
              <div className="flex justify-center mt-4">
                <Link to="/about" className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-md text-lg transition duration-300">
                {/* <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-md text-lg transition duration-300"> */}
                  Learn More
                </Link>
                {/* </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



      {/* Latest Content Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('Latest Content')}
            </h2>
            <Link 
              to="/content" 
              className="text-benin-green-600 dark:text-benin-green-400 hover:text-benin-green-700 dark:hover:text-benin-green-300 flex items-center font-medium"
            >
              {t('View All')}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestContent.map((content) => (
              <ContentCard key={content.id} content={content} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 dark:bg-gray-900 items-center justify-center px-4">
      <div className="w-full overflow-hidden rounded-2xl shadow-lg">
        <div className="w-full">
          {/* Left Section (Green Background) */}
          <div className="bg-[image:url('/src/asset/3.png')] bg-cover bg-fit bg-center bg-no-repeat h-96 md:h-[calc(100vh-64px)]   text-white p-8 md:p-12 flex flex-col justify-center">
            <div className="max-w-md">
              <p className="text-sm md:text-base font-medium mb-2">Navigating the Digital Landscape</p>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                PROTECTING BENIN'S <br />DIGITAL FUTURE
              </h1>
              
              <p className="text-sm md:text-base mb-8">
                Djofo.bj is a trusted source of information and
                guidance on online safety, cybersecurity, and digital
                literacy. We believe that by empowering Beninese
                citizens with the knowledge and skills to identify and
              </p>
              
              <Link to='/community' className="bg-amber-300 text-black px-8 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors">
                Take Action
              </Link>
            </div>
          </div>
          
          {/* Right Section (Red Background) */}
          
        </div>
      </div>
    </section>
      

      {/* Training Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('Training')}
            </h2>
            <Link 
              to="/training" 
              className="text-benin-green-600 dark:text-benin-green-400 hover:text-benin-green-700 dark:hover:text-benin-green-300 flex items-center font-medium"
            >
              {t('View All')}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTraining.map((training) => (
              <TrainingCard key={training.id} training={training} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Investigation */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className=" min-h-screen p-4 md:p-8">
      <header className="text-center mb-6">
        <p className="text-gray-900 dark:text-white">Securing Benin's Digital Future</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">CONNECTING BENIN'S DIGITAL COMMUNITY</h1>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
        {/* Left column with woman image */}
        <div className="lg:w-1/3 flex flex-col items-center">
          <div className="relative">
            <div className="bg-yellow-400 rounded-full w-64 h-64 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56">
                  <img 
                    src={image}
                    alt="There is an image " 
                    className="rounded-full"
                  />
                  <div className="absolute right-0 bottom-8 bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    ✓
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-8">
            {/* <button className="bg-red-500 text-white px-6 py-3 rounded-md w-40 mx-auto font-medium">
              Explore
            </button> */}
            <Link to='/community' className="bg-red-500 text-white px-6 py-3 rounded-md w-40 mx-auto mt-4 font-medium">
              Take Action
            </Link>
          </div>
        </div>

        {/* Middle column */}
        <div className="lg:w-1/3 space-y-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-md shadow-sm">
            <div className="mb-4">
              <p className=" text-sm">Fostering Digital Inclusion</p>
              <h3 className="text-xl font-semibold  mt-1">Promoting</h3>
              <p className=" mt-2">
                At Djofo.bj, we believe that empowering Benin's digital citizens is key to building a more secure and resilient
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold ">Embracing the Digital</h3>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-md shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-red-100 p-2 rounded">
                <div className="w-5 h-5 bg-red-500"></div>
              </div>
              <p className=" ">Safeguarding Digital Privacy</p>
            </div>
            <h3 className="text-xl font-semibold ">Cultivating Digital</h3>
            <p className=" mt-2">
              Djofo.bj is committed to creating a digital ecosystem in Benin that is secure, inclusive
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:w-1/3 space-y-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-md shadow-sm">
            <div className="mb-4">
              <p className=" text-sm">Empowering Benin's Digital</p>
              <h3 className="text-xl font-semibold  mt-1">Navigating the</h3>
              <p className=" mt-2">
                At Djofo.bj, we believe that digital empowerment is the key to a brighter, more secure digital future for Benin
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-md shadow-sm">
            <div className="mb-4">
              <p className=" text-sm">Fostering Digital Resilience</p>
              <h3 className="text-xl font-semibold  mt-1">Promoting Digital</h3>
              <p className=" mt-2">
                Djofo.bj is dedicated to empowering the people of Benin to thrive in the digital age
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-6xl mx-auto mt-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 bg-white dark:bg-gray-900 p-6 rounded-md shadow-sm">
          <p className=" text-sm">Empowering Benin's Digital</p>
          <h3 className="text-xl font-semibold text-gray-800 mt-1">Navigating Digital</h3>
          <p className=" mt-2">
            At Djofo.bj, we believe that digital literacy and online safety are essential for the
          </p>
        </div>

        <div className="md:w-1/3 bg-white dark:bg-gray-900 p-6 rounded-md shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-red-100 p-2 rounded">
              <div className="w-5 h-5 bg-red-500"></div>
            </div>
            <p className="">Protecting Digital Rights</p>
          </div>
          <h3 className="text-xl font-semibold ">Building Digital</h3>
          <p className=" mt-2">
            Djofo.bj is dedicated to promoting digital literacy and empowering Beninese citizens to take an active
          </p>
        </div>
        
        <div className="md:w-1/3 flex items-center justify-center">
          {/* Empty space to match the layout */}
        </div>
      </div>

      {/* Call to action button */}
      <div className="text-center mt-8 mb-4">
        <Link to='https://chat.whatsapp.com/C0LhlGoD3hMGPBRlhXQ8wJ' className="bg-red-500 text-white px-8 py-3 rounded-md font-medium">
          Join the Movement
        </Link>
      </div>
    </div>
      </section>
    </div>
  );
};

export default HomePage;