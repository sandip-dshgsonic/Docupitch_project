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
    // Check file size (convert maxSize to bytes)
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size must be less than ${maxSize}MB`)
      return false
    }
    // Check file type
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
    }, 150) // Simulates upload progress
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
  }

  return (
    <div className="max-w-2xl mx-auto mb-16">
      <div
        className={`bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-md p-8
          ${isDragging ? 'border-2 border-dashed border-purple-500' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="text-center">
          <div className="mb-4">
            <Upload className="mx-auto h-12 w-12 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Upload your document</h2>
          <p className="text-gray-500 mb-4">
            Supports PDF and DOCX files (max {maxSize}MB)
          </p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept=".pdf,.docx"
            className="hidden"
          />
          <div className="space-y-4">
            <button
              onClick={triggerFileInput}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Select file
            </button>
            <p className="text-sm text-gray-500">
              or drag and drop your file here
            </p>
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600">
              {error}
            </p>
          )}
          {isLoading && (
            <div className="mt-4">
              <p className="text-sm text-gray-500">Uploading... {uploadPercentage}%</p>
            </div>
          )}
          {selectedFile && !error && !isLoading && (
            <div className="mt-4 p-3 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-700">
                Selected file: <span className="font-medium">{selectedFile.name}</span>
              </p>
              <p className="text-xs text-gray-500">
                Size: {(selectedFile.size / (1024 * 1024)).toFixed(2)}MB
              </p>
              <button
                onClick={removeFile}
                className="mt-2 text-sm text-red-500 hover:underline"
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
