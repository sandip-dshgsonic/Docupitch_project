import React from 'react';
import { useRouter } from 'next/router';

export default function GetStarted() {
  const router = useRouter();

  const handleLearnMore = () => {
    alert('Learn more about our secure document sharing platform.');
  };

  const handleGetStarted = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to DocuPitch</h1>
      <p className="text-lg mb-6 max-w-2xl">
        Experience enterprise-grade security, seamless sharing, and collaboration.
        Get started today to manage your documents effectively.
      </p>
      <div className="space-y-4">
        <button
          onClick={handleLearnMore}
          className="px-6 py-3 bg-white text-purple-600 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
        >
          Learn More
        </button>
        <button
          onClick={handleGetStarted}
          className="px-6 py-3 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-800 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
