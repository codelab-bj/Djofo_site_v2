//import { useState } from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-gray-900">
      {/* Hero Section with African pattern overlay */}
      <div className="relative bg-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* African pattern overlay - stylized geometric pattern */}
          <div className="w-full h-full" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px",
          }}></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">About Djofo.bj</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Empowering Benin's digital citizens through education, investigation, and protection against online threats.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Our Mission Section */}
        <div className="mb-24">
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center">
              <span className="text-white text-2xl">1</span>
            </div>
            <h2 className="text-3xl font-bold ml-4 text-green-900 dark:text-green-400">Our Mission</h2>
            <div className="flex-grow h-px bg-green-800 dark:bg-green-400 ml-6"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-2/3 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md border-l-4 border-green-800">
              <p className="mb-6 text-lg">
                Djofo.bj is an educational and investigative platform created to raise awareness and educate people in Benin about online threats such as disinformation, hacking, scams, and data theft. We believe that digital literacy is essential for safe navigation of today's internet landscape.
              </p>
              <p className="mb-6 text-lg">
                The internet has revolutionized the way we live, work, and communicate, but it has also brought new risks and challenges. Djofo.bj is dedicated to equipping the people of Benin with the knowledge and tools to navigate the digital landscape safely and responsibly.
              </p>
              <p className="text-lg">
                Our goal is to create a more informed digital citizenry in Benin, capable of identifying threats, protecting their data, and contributing to a safer online environment for all.
              </p>
            </div>
            
            <div className="w-full md:w-1/3">
              <div className="bg-amber-100 p-6 rounded-lg shadow-md border-t-4 border-yellow-600">
                <h3 className="text-xl font-bold mb-4 text-yellow-800">Our Focus Areas</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-500 mt-1"></div>
                    <span className="ml-3 text-gray-800">Combating disinformation and fake news</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-500 mt-1"></div>
                    <span className="ml-3 text-gray-800">Protection against online scams and fraud</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 mt-1"></div>
                    <span className="ml-3 text-gray-800">Data privacy and security awareness</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 mt-1"></div>
                    <span className="ml-3 text-gray-800">Digital literacy for all age groups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Approach Section */}
        <div className="mb-24">
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 rounded-full bg-green-800  flex items-center justify-center">
              <span className="text-white text-2xl">2</span>
            </div>
            <h2 className="text-3xl font-bold ml-4 text-green-900 dark:text-green-400">Our Approach</h2>
            <div className="flex-grow h-px bg-green-800 dark:bg-green-400 ml-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-red-600"></div>
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18v-4.568a10.981 10.981 0 000-4.752V4.566a1 1 0 01.553-.894l1.447-.62v4.867l-1.7-.73a1 1 0 00-.8 0L3 8.293zm4 0a1 1 0 01-.553-.106l-1.147-.493v-4.865l2.7 1.157c.2.085.2.285 0 .37l-2.7 1.157v3.838a1 1 0 001.647.07A10.927 10.927 0 0112 18c-2.019 0-3.901-.53-5.553-1.47A1 1 0 0110 18z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Education</h3>
                <p className="">
                  We develop accessible, culturally relevant educational content in multiple languages to reach diverse audiences across Benin. Our materials are designed to be understood by users with varying levels of digital literacy.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-yellow-600"></div>
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Investigation</h3>
                <p className="">
                  Our team conducts investigations into real cases of internet fraud, scams, and disinformation campaigns targeting Beninese citizens. We document these cases and share findings to help communities recognize similar threats.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-green-600"></div>
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Community Engagement</h3>
                <p className="">
                  We collaborate with schools, community organizations, and government agencies to deliver workshops, training sessions, and awareness campaigns throughout Benin.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Team Section */}
        <div className="mb-24">
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center">
              <span className="text-white text-2xl">3</span>
            </div>
            <h2 className="text-3xl font-bold ml-4 text-green-900 dark:text-green-400">Our Team</h2>
            <div className="flex-grow h-px bg-green-800 dark:bg-green-400 ml-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Team Member Cards with African styling */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-4 bg-green-600"></div>
              <div className="p-6">
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden bg-green-100 mb-6 border-4 border-yellow-500 shadow-lg">
                  <div className="w-full h-full bg-green-600 flex items-end justify-center">
                    <div className="w-24 h-24 bg-yellow-500 rounded-full relative top-6"></div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-2xl mb-1">Ibrahim Haliloulaye</h3>
                  <p className="text-green-700 dark:text-green-400 mb-3">Backend Developer</p>
                  <p className="">
                    Leads our educational initiatives and develops training materials for diverse audiences across Benin.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-4 bg-yellow-600"></div>
              <div className="p-6">
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden bg-yellow-100 mb-6 border-4 border-yellow-500 shadow-lg">
                  <div className="w-full h-full bg-yellow-500 flex items-end justify-center">
                    <div className="w-24 h-24 bg-red-600 rounded-full relative top-6"></div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-2xl mb-1">Idris Rasheed</h3>
                  <p className="text-yellow-700 dark:text-yellow-400 mb-3">Frontend Developer</p>
                  <p className="">
                    Manages our investigation team to uncover digital fraud and disinformation campaigns targeting Beninese citizens.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-4 bg-red-600"></div>
              <div className="p-6">
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden bg-yellow-100 mb-6 border-4 border-yellow-500 shadow-lg">
                  <div className="w-full h-full bg-yellow-500 flex items-end justify-center">
                    <div className="w-24 h-24 bg-red-600 rounded-full relative top-6"></div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-2xl mb-1">Georis</h3>
                  <p className="text-red-700 dark:text-red-400 mb-3">Mobile Developer</p>
                  <p className="">
                    Coordinates partnerships with local organizations and leads community engagement initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Empowering Digital Citizens Section with Adinkra-inspired styling */}
        <div className="mb-24">
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center">
              <span className="text-white text-2xl">4</span>
            </div>
            <h2 className="text-3xl font-bold ml-4 text-green-900 dark:text-green-400">Empowering Benin's Digital Citizens</h2>
            <div className="flex-grow h-px bg-green-800 dark:bg-green-400 ml-6"></div>
          </div>
          
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            The internet has revolutionized the way we live, work, and communicate, but it has also brought new risks and challenges. Djofo.bj is dedicated to equipping the people of Benin with the knowledge and tools to navigate the digital landscape safely and responsibly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md text-center relative border-b-4 border-green-600">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600"></div>
              {/* <div className="mx-auto w-28 h-28 rounded-full overflow-hidden bg-green-100 mb-6 border-4 border-green-600 shadow-lg">
                <div className="w-full h-full bg-green-600 flex items-end justify-center">
                  <div className="w-20 h-20 bg-yellow-500 rounded-full relative top-5"></div>
                </div>
              </div> */}
              <h3 className="font-bold text-2xl mb-4 text-green-800 dark:text-green-400">Digital Education</h3>
              <p className=" mb-6">
                Developing skills to critically evaluate online information and recognize potential threats. Our approach emphasizes cultural context and practical applications.
              </p>
              <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">Learn More</button>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md text-center relative border-b-4 border-yellow-600">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600"></div>
              {/* <div className="mx-auto w-28 h-28 rounded-full overflow-hidden bg-yellow-100 mb-6 border-4 border-yellow-600 shadow-lg">
                <div className="w-full h-full bg-yellow-500 flex items-end justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full relative top-5"></div>
                </div>
              </div> */}
              <h3 className="font-bold text-2xl mb-4 text-yellow-900 dark:text-yellow-400">Fraud Prevention</h3>
              <p className=" mb-6">
                Learning to identify and avoid common online scams targeting Beninese citizens. Our case studies showcase real incidents and provide practical prevention strategies.
              </p>
              <button className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition">Explore Cases</button>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md text-center relative border-b-4 border-red-600">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600"></div>
              {/* <div className="mx-auto w-28 h-28 rounded-full overflow-hidden bg-red-100 mb-6 border-4 border-red-600 shadow-lg">
                <div className="w-full h-full bg-red-600 flex items-end justify-center">
                  <div className="w-20 h-20 bg-yellow-500 rounded-full relative top-5"></div>
                </div>
              </div> */}
              <h3 className="font-bold text-2xl mb-4 text-red-900 dark:text-red-400">Data Protection</h3>
              <p className=" mb-6">
                Safeguarding personal information and understanding digital rights and privacy. We provide tools and techniques relevant to Benin's technological landscape.
              </p>
              <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">Protection Tips</button>
            </div>
          </div>
        </div>
        
        {/* Get Involved Section */}
        <div>
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 rounded-full bg-green-800 dark:bg-green-400 flex items-center justify-center">
              <span className="text-white text-2xl">5</span>
            </div>
            <h2 className="text-3xl font-bold ml-4 text-green-900 dark:text-green-400">Get Involved</h2>
            <div className="flex-grow h-px bg-green-800 dark:bg-green-400 ml-6"></div>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md relative overflow-hidden">
            {/* African pattern background as subtle decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                backgroundSize: "84px 48px",
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
                <p className="text-lg">
                  Join our mission to create a safer digital environment for all Beninese citizens. Whether you're an individual or an organization, there are multiple ways to contribute to our work.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <button className="p-6 bg-green-700 text-white rounded-lg hover:bg-green-800 transition shadow-md flex flex-col items-center justify-center">
                  <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  <span className="text-xl font-bold">Volunteer With Us</span>
                </button>
                
                <button className="p-6 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition shadow-md flex flex-col items-center justify-center">
                  <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  <span className="text-xl font-bold">Report a Digital Threat</span>
                </button>
                
                <button className="p-6 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow-md flex flex-col items-center justify-center">
                  <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                  <span className="text-xl font-bold">Request a Training</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}