import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function UploadDocuments() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/get-started');
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Upload Your Documents</h1>
      <p className="text-lg text-gray-600 mb-8">
        Securely upload and share your documents with enterprise-grade encryption.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <input type="file" className="w-full mb-4" />
        <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700">
          Upload
        </button>
      </div>
    </div>
  );
}
