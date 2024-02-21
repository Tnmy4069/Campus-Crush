import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const Page = () => {
  return (
    <>
      <Header />
      
      <>
  <div className="container mx-auto px-4 py-8">
    {/* Hero Section */}
    <section className="bg-blue-500 text-white rounded-lg px-8 py-12 mb-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Find Your Match on Campus</h2>
        <p className="text-xl mb-8">
          Connect with other college students who share your interests.
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="bg-white text-blue-500 hover:bg-blue-200 font-bold py-2 px-6 rounded"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="bg-pink-500 text-white hover:bg-blue-200 font-bold py-2 px-6 rounded ml-2"
          >
            Log In
          </a>
        </div>
      </div>
    </section>
    {/* Features Section */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
      <ul className="list-disc list-inside">
        <li className="text-lg text-gray-600 mb-4">
          Browse profiles of other college students.
        </li>
        <li className="text-lg text-gray-600 mb-4">
          Match with students based on shared interests.
        </li>
        <li className="text-lg text-gray-600 mb-4">
          Chat and connect with matches on campus.
        </li>
      </ul>
    </section>
    {/* Testimonials Section */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-lg text-gray-800">
            "I met my best friend through Campus Crush! We both love hiking and
            now explore trails together every weekend."
          </p>
          <p className="text-gray-600 mt-2">- Emily, University of Example</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-lg text-gray-800">
            "Thanks to Campus Crush, I found someone who shares my passion for
            photography. We've been shooting together ever since!"
          </p>
          <p className="text-gray-600 mt-2">- Alex, State College</p>
        </div>
      </div>
    </section>
  </div>
  {/* Footer Section */}
</>

    

      <Footer />
    </>
  );
};

export default Page;
