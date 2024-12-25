import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import FileUpload from './components/FileUpload'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DocuPitch - Secure Document Sharing Platform',
  description: 'Enterprise-grade document sharing and collaboration platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }}
        >
          {/* Overlay for the white shade effect */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light white shade
              zIndex: 1,
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Share Documents Securely
                </h1>
                <p className="text-gray-200 text-lg">
                  Upload, share, and collaborate on documents with enterprise-grade security
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search documents..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white bg-opacity-90"
                  />
                  <span className="absolute right-3 top-3 text-gray-400">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* File Upload Component */}
              <FileUpload />

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Feature Items */}
                {[
                  {
                    title: 'Smart Documents',
                    description: 'AI-powered insights and analysis for your documents',
                    iconPath:
                      'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                  },
                  {
                    title: 'Easy Sharing',
                    description: 'Share documents securely with your team',
                    iconPath:
                      'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
                  },
                  {
                    title: 'Enterprise Security',
                    description: 'Bank-grade encryption for your sensitive data',
                    iconPath:
                      'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-90 backdrop-blur-lg p-6 rounded-lg shadow-md text-center"
                  >
                    <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={item.iconPath}
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}


// // RootLayout.tsx
// import './globals.css'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import Header from './components/Header';
// import Footer from './components/Footer';
// const inter = Inter({ subsets: ['latin'] })
// export const metadata: Metadata = {
//   title: 'DocuPitch - Secure Document Sharing Platform',
//   description: 'Enterprise-grade document sharing and collaboration platform',
// }
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={inter.className}>
//       <body>
//         <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
         
//           <Header />
//           {/* Main Content */}
//           <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//             <div className="text-center mb-12">
//               <h1 className="text-4xl font-bold text-purple-600 mb-4">
//                 Share Documents Securely
//               </h1>
//               <p className="text-gray-600 text-lg">
//                 Upload, share, and collaborate on documents with enterprise-grade security
//               </p>
//             </div>
//             {/* Search Bar */}
//             <div className="max-w-2xl mx-auto mb-12">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search documents..."
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 />
//                 <span className="absolute right-3 top-3 text-gray-400">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </span>
//               </div>
//             </div>
//             {/* Upload Section */}
//             <div className="max-w-2xl mx-auto mb-16 bg-white rounded-lg shadow-md p-8">
//               <div className="text-center">
//                 <div className="mb-4">
//                   <svg className="mx-auto h-12 w-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
//                   </svg>
//                 </div>
//                 <h2 className="text-xl font-semibold mb-2">Upload your document</h2>
//                 <p className="text-gray-500 mb-4">Supports PDF and DOCX files</p>
//                 <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
//                 href="/auth/signin">
//                   Select file
                  
//                 </button>
//               </div>
//             </div>
//             {/* Features Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//               {/* Smart Documents */}
//               <div className="bg-white p-6 rounded-lg shadow-md text-center">
//                 <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
//                   <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2">Smart Documents</h3>
//                 <p className="text-gray-600">AI-powered insights and analysis for your documents</p>
//               </div>
//               {/* Easy Sharing */}
//               <div className="bg-white p-6 rounded-lg shadow-md text-center">
//                 <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
//                   <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2">Easy Sharing</h3>
//                 <p className="text-gray-600">Share documents securely with your team</p>
//               </div>
//               {/* Enterprise Security */}
//               <div className="bg-white p-6 rounded-lg shadow-md text-center">
//                 <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
//                   <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
//                 <p className="text-gray-600">Bank-grade encryption for your sensitive data</p>
//               </div>
//             </div>
//             {children}
//           </main>

//           <Footer />
          
//         </div>
//       </body>
//     </html>
//   )
// }





// app/layout.tsx
// import './globals.css'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import FileUpload from './components/FileUpload'
// const inter = Inter({ subsets: ['latin'] })
// export const metadata: Metadata = {
//   title: 'DocuPitch - Secure Document Sharing Platform',
//   description: 'Enterprise-grade document sharing and collaboration platform',
// }
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={inter.className}>
//       <body>
//         <div
//           className="min-h-screen relative"
//           style={{
//             backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80)',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat'
//           }}
//         >
//           {/* Overlay for better readability */}
//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//           {/* Content */}
//           <div className="relative z-10">
//             <Header />
//             {/* Main Content */}
//             <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//               <div className="text-center mb-12">
//                 <h1 className="text-4xl font-bold text-white mb-4">
//                   Share Documents Securely
//                 </h1>
//                 <p className="text-gray-200 text-lg">
//                   Upload, share, and collaborate on documents with enterprise-grade security
//                 </p>
//               </div>
//               {/* Search Bar */}
//               <div className="max-w-2xl mx-auto mb-12">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search documents..."
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white bg-opacity-90"
//                   />
//                   <span className="absolute right-3 top-3 text-gray-400">
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//               {/* File Upload Component */}
//               <FileUpload />
//               {/* Features Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//                 {/* Smart Documents */}
//                 <div className="bg-white bg-opacity-90 backdrop-blur-lg p-6 rounded-lg shadow-md text-center">
//                   <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
//                     <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-lg font-semibold mb-2">Smart Documents</h3>
//                   <p className="text-gray-600">AI-powered insights and analysis for your documents</p>
//                 </div>
//                 {/* Easy Sharing */}
//                 <div className="bg-white bg-opacity-90 backdrop-blur-lg p-6 rounded-lg shadow-md text-center">
//                   <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
//                     <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-lg font-semibold mb-2">Easy Sharing</h3>
//                   <p className="text-gray-600">Share documents securely with your team</p>
//                 </div>
//                 {/* Enterprise Security */}
//                 <div className="bg-white bg-opacity-90 backdrop-blur-lg p-6 rounded-lg shadow-md text-center">
//                   <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
//                     <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
//                   <p className="text-gray-600">Bank-grade encryption for your sensitive data</p>
//                 </div>
//               </div>
//               {children}
//             </main>
//             <Footer />
//           </div>
//         </div>
//       </body>
//     </html>
//   )
// }






















