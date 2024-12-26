// 'use client'
// import React, { useState, useRef } from 'react'
// import { Upload } from 'lucide-react'

// interface FileUploadProps {
//   maxSize?: number // in MB
//   onUpload?: (file: File) => void
// }

// export default function FileUpload({ maxSize = 10, onUpload }: FileUploadProps) {
//   const fileInputRef = useRef<HTMLInputElement>(null)
//   const [selectedFile, setSelectedFile] = useState<File | null>(null)
//   const [error, setError] = useState<string>('')
//   const [isDragging, setIsDragging] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)
//   const [uploadPercentage, setUploadPercentage] = useState(0)

//   const validateFile = (file: File) => {
//     setError('')
//     // Check file size (convert maxSize to bytes)
//     if (file.size > maxSize * 1024 * 1024) {
//       setError(`File size must be less than ${maxSize}MB`)
//       return false
//     }
//     // Check file type
//     const validTypes = [
//       'application/pdf',
//       'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // .docx
//     ]
//     if (!validTypes.includes(file.type)) {
//       setError('Please upload a PDF or DOCX file')
//       return false
//     }
//     return true
//   }

//   const simulateUpload = (file: File) => {
//     setIsLoading(true)
//     setUploadPercentage(0)
//     const uploadInterval = setInterval(() => {
//       setUploadPercentage((prev) => {
//         if (prev >= 100) {
//           clearInterval(uploadInterval)
//           setIsLoading(false)
//           setSelectedFile(file)
//           onUpload?.(file)
//           return 100
//         }
//         return prev + 10
//       })
//     }, 150) // Simulates upload progress
//   }

//   const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]
//     if (file) {
//       if (validateFile(file)) {
//         simulateUpload(file)
//       }
//     }
//   }

//   const handleDrop = (event: React.DragEvent) => {
//     event.preventDefault()
//     setIsDragging(false)
//     const file = event.dataTransfer.files[0]
//     if (file) {
//       if (validateFile(file)) {
//         simulateUpload(file)
//       }
//     }
//   }

//   const handleDragOver = (event: React.DragEvent) => {
//     event.preventDefault()
//     setIsDragging(true)
//   }

//   const handleDragLeave = () => {
//     setIsDragging(false)
//   }

//   const triggerFileInput = () => {
//     fileInputRef.current?.click()
//   }

//   const removeFile = () => {
//     setSelectedFile(null)
//     setError('')
//     setUploadPercentage(0)
//   }

//   return (
//     <div className="max-w-2xl mx-auto mb-16">
//       <div
//   className={`
//     glass-card p-8 rounded-lg text-center cursor-pointer
//     transition-all duration-300 ease-in-out
//     ${isDragging ? "border-primary border-2" : "border border-dashed"}
//     bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-600 shadow-lg
//   `}
//   onDrop={handleDrop}
//   onDragOver={handleDragOver}
//   onDragLeave={handleDragLeave}
// >
//   <div className="flex flex-col items-center space-y-6">
//     <div className="p-4 bg-gradient-to-r from-purple-300 to-indigo-400 rounded-full shadow-lg">
//       <Upload className="h-10 w-10 text-white" />
//     </div>
//     <h2 className="text-2xl font-extrabold text-white mb-3">
//       Upload Your Document
//     </h2>
//     <p className="text-sm text-white/80 mb-6">
//       Supports PDF and DOCX files (max {maxSize}MB)
//     </p>
//     <input
//       type="file"
//       ref={fileInputRef}
//       onChange={handleFileSelect}
//       accept=".pdf,.docx"
//       className="hidden"
//     />
//     <div className="space-y-5">
//       <button
//         onClick={triggerFileInput}
//         className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-dark transition-colors"
//       >
//         Select File
//       </button>
//       <p className="text-sm text-white/70">
//         or drag and drop your file here
//       </p>
//     </div>
//     {error && (
//       <p className="mt-3 text-sm text-red-400 font-medium">{error}</p>
//     )}
//     {isLoading && (
//       <div className="w-full max-w-xs mt-6">
//         <Progress value={uploadPercentage} className="h-2 rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500" />
//         <p className="text-sm text-white/80 mt-2">
//           Uploading... {uploadPercentage}%
//         </p>
//       </div>
//     )}
//     {selectedFile && !error && !isLoading && (
//       <div className="mt-6 p-4 bg-white/80 rounded-lg shadow-lg">
//         <p className="text-sm text-gray-800">
//           Selected file: <span className="font-semibold">{selectedFile.name}</span>
//         </p>
//         <p className="text-xs text-gray-600">
//           Size: {(selectedFile.size / (1024 * 1024)).toFixed(2)}MB
//         </p>
//         <button
//           onClick={removeFile}
//           className="mt-3 text-sm text-red-500 hover:underline"
//         >
//           Remove file
//         </button>
//       </div>
//     )}
//   </div>
// </div>

//     </div>
//   )
// }


'use client'
import React, { useState, useRef } from 'react'
import { Upload } from 'lucide-react'

interface FileUploadProps {
  maxSize?: number // in MB
  onUpload?: (file: File) => void
}

export default function FileUpload({ maxSize = 10, onUpload }: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [error, setError] = useState<string>('')
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [uploadPercentage, setUploadPercentage] = useState(0)

  const validateFile = (file: File) => {
    setError('')
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size must be less than ${maxSize}MB`)
      return false
    }
    const validTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // .docx
    ]
    if (!validTypes.includes(file.type)) {
      setError('Please upload a PDF or DOCX file')
      return false
    }
    return true
  }

  const simulateUpload = (file: File) => {
    setIsLoading(true)
    setUploadPercentage(0)
    const uploadInterval = setInterval(() => {
      setUploadPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(uploadInterval)
          setIsLoading(false)
          setSelectedFile(file)
          onUpload?.(file)
          return 100
        }
        return prev + 10
      })
    }, 150)
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (validateFile(file)) {
        simulateUpload(file)
      }
    }
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    setIsDragging(false)
    const file = event.dataTransfer.files[0]
    if (file) {
      if (validateFile(file)) {
        simulateUpload(file)
      }
    }
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const removeFile = () => {
    setSelectedFile(null)
    setError('')
    setUploadPercentage(0)
    if (fileInputRef.current) {
      fileInputRef.current.value = '' // Reset file input
    }
  }

  return (
    <div className="max-w-2xl mx-auto mb-16">
      <div
        className={`glass-card p-8 rounded-lg text-center cursor-pointer transition-all duration-300 ease-in-out ${
          isDragging ? 'border-primary border-2' : 'border border-dashed'
        } bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-600 shadow-lg`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="p-4 bg-gradient-to-r from-purple-300 to-indigo-400 rounded-full shadow-lg">
            <Upload className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl font-extrabold text-white mb-3">Upload Your Document</h2>
          <p className="text-sm text-white/80 mb-6">Supports PDF and DOCX files (max {maxSize}MB)</p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept=".pdf,.docx"
            className="hidden"
          />
          <div className="space-y-5">
            <button
              onClick={triggerFileInput}
              className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-dark transition-colors"
            >
              Select File
            </button>
            <p className="text-sm text-white/70">or drag and drop your file here</p>
          </div>
          {error && <p className="mt-3 text-sm text-red-400 font-medium">{error}</p>}
          {isLoading && (
            <div className="w-full max-w-xs mt-6">
              <div className="h-2 rounded-full bg-gray-300 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 transition-all"
                  style={{ width: `${uploadPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-white/80 mt-2">Uploading... {uploadPercentage}%</p>
            </div>
          )}
          {selectedFile && !error && !isLoading && (
            <div className="mt-6 p-4 bg-white/80 rounded-lg shadow-lg">
              <p className="text-sm text-gray-800">
                Selected file: <span className="font-semibold">{selectedFile.name}</span>
              </p>
              <p className="text-xs text-gray-600">Size: {(selectedFile.size / (1024 * 1024)).toFixed(2)}MB</p>
              <button
                onClick={removeFile}
                className="mt-3 text-sm text-red-500 hover:underline"
              >
                Remove file
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
