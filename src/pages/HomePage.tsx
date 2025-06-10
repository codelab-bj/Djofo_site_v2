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
import { investigations } from '../data/investigations';
import { useEffect } from 'react';
import image from '../asset/4.png'
import InvestigationCard from '../components/common/InvestigationCard';
// import image1 from '../asset/1.png'
// import image2 from '../asset/2.png'
import illustration2 from '../asset/2.png';
import illustration3 from '../asset/3.png';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  // Get latest content (3 items)
  const latestContent = [...contentItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Get a few training modules (2 items)
  const featuredTraining = trainingModules.slice(0, 2);

  const latestInvestigation = [...investigations]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
    //.slice(0, 3);


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
          {t('home.hero.empowering')}<br />
          {t('home.hero.future')}
          </h1>
          
          <p className="text-green-100 mb-8 max-w-lg">
            {t('home.hero.description')}
          </p>
          
          <Link to='https://chat.whatsapp.com/C0LhlGoD3hMGPBRlhXQ8wJ' className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-4 rounded-md transition-colors">
         {t('home.hero.join')}
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
          <span className="text-orange-400 text-sm uppercase tracking-wide">{t('home.features.explore')}</span>
        </div>
        
        {/* Main title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {t('home.features.protecting')}
          </h1>
        </div>
        
        {/* Content container */}
        <div className="flex flex-col lg:flex-row gap-8 items-center max-w-7xl mx-auto">
          {/* Left section with illustration */}
          <div className="w-full lg:w-1/2 relative">
            <div className="w-full h-[400px] lg:h-[500px] flex relative overflow-hidden rounded-2xl bg-transparent">
              {/* <div className="w-full h-full bg-[image:url('/src/asset/2.png')] bg-cover bg-center bg-no-repeat">
              </div> */}
              <img 
                src={illustration2}
                alt="Illustration"
                className="w-full h-full object-contain"
                // style={{ 
                //   mixBlendMode: 'multiply',
                //   backgroundColor: 'transparent'
                // }}
              />
            </div>
          </div>
          
          {/* Right section with content */}
          <div className="w-full lg:w-1/2 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-lg">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-wide">
                {t('home.features.protecting')}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
                {t('home.features.security_paragraph')}
              </p>
              
              <div className="flex justify-center">
                <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg">
                  {t('home.features.learn_more')}
                </button>
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
              {t('home.latestContent.title')}
            </h2>
            <Link 
              to="/content" 
              className="text-benin-green-600 dark:text-benin-green-400 hover:text-benin-green-700 dark:hover:text-benin-green-300 flex items-center font-medium"
            >
              {t('home.latestContent.viewAll')}
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
          <div className="relative h-96 md:h-[calc(100vh-64px)] text-white p-8 md:p-12 flex flex-col justify-center">
            <img 
              src={illustration3}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
              // style={{ 
              //   mixBlendMode: 'multiply',
              //   backgroundColor: 'transparent',
              //   zIndex: 0
              // }}
            />
            <div className="max-w-md relative z-10">
              <p className="text-sm md:text-base font-medium mb-2">{t('home.cta.navigation')}</p>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {t('home.cta.protecting')}
              </h1>
              
              <p className="text-sm md:text-base mb-8">
                {t('home.cta.description')}
              </p>
              
              <Link to='/community' className="bg-amber-300 text-black px-8 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors">
                {t('home.cta.takeAction')}
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

      
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className=" min-h-screen p-4 md:p-8">
          <header className="text-center mb-6">
            <p className="text-gray-900 dark:text-white">{t('home.community.securing')}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">{t('home.community.connecting')}</h1>
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
                        alt={t('alt.community_image')} 
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
                <Link to='/community' className="bg-red-500 text-white px-6 py-3 rounded-md w-40 mx-auto mt-4 font-medium">
                  {t('home.community.take_action')}
                </Link>
              </div>
            </div>

            {/* Middle column */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-md shadow-sm">
                <div className="mb-4">
                  <p className=" text-sm">{t('home.community.fostering')}</p>
                  <h3 className="text-xl font-semibold  mt-1">{t('home.community.promoting')}</h3>
                  <p className=" mt-2">
                    {t('home.community.digital_empowerment')}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold ">{t('home.community.embracing_digital')}</h3>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-md shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded">
                    <div className="w-5 h-5 bg-red-500"></div>
                  </div>
                  <p className=" ">{t('home.community.safeguarding_privacy')}</p>
                </div>
                <h3 className="text-xl font-semibold ">{t('home.community.cultivating_digital')}</h3>
                <p className=" mt-2">
                  {t('home.community.ecosystem_desc')}
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-md shadow-sm">
                <div className="mb-4">
                  <p className=" text-sm">{t('home.community.empowering_digital')}</p>
                  <h3 className="text-xl font-semibold  mt-1">{t('home.community.navigating_digital')}</h3>
                  <p className=" mt-2">
                    {t('home.community.digital_future')}
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-md shadow-sm">
                <div className="mb-4">
                  <p className=" text-sm">{t('home.community.fostering_resilience')}</p>
                  <h3 className="text-xl font-semibold  mt-1">{t('home.community.promoting_digital')}</h3>
                  <p className=" mt-2">
                    {t('home.community.thrive_digital')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="max-w-6xl mx-auto mt-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 bg-white dark:bg-gray-900 p-6 rounded-md shadow-sm">
              <p className=" text-sm">{t('home.community.empowering_digital')}</p>
              <h3 className="text-xl font-semibold text-gray-800 mt-1">{t('home.community.navigating_digital_title')}</h3>
              <p className=" mt-2">
                {t('home.community.digital_literacy')}
              </p>
            </div>

            <div className="md:w-1/3 bg-white dark:bg-gray-900 p-6 rounded-md shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-red-100 p-2 rounded">
                  <div className="w-5 h-5 bg-red-500"></div>
                </div>
                <p className="">{t('home.community.protecting_rights')}</p>
              </div>
              <h3 className="text-xl font-semibold ">{t('home.community.building_digital')}</h3>
              <p className=" mt-2">
                {t('home.community.active_role')}
              </p>
            </div>
            
            <div className="md:w-1/3 flex items-center justify-center">
              {/* Empty space to match the layout */}
            </div>
          </div>

          {/* Call to action button */}
          <div className="text-center mt-8 mb-4">
            <Link to='https://chat.whatsapp.com/C0LhlGoD3hMGPBRlhXQ8wJ' className="bg-red-500 text-white px-8 py-3 rounded-md font-medium">
              {t('home.community.join_movement')}
            </Link>
          </div>
        </div>
      </section>
      {/* Latest Investigation */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('Investigations')}
            </h2>
            <Link 
              to="/investigations" 
              className="text-benin-green-600 dark:text-benin-green-400 hover:text-benin-green-700 dark:hover:text-benin-green-300 flex items-center font-medium"
            >
              {t('View All Investigations')}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="max-w-xl mx-auto">
            <InvestigationCard investigation={latestInvestigation} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;