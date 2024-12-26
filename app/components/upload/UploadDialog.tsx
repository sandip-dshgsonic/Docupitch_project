// 'use client';

// import { useState } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Box,
//   Typography,
//   LinearProgress
// } from '@mui/material';
// import { CloudUpload } from '@mui/icons-material';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';

// export default function UploadDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
//   const [uploading, setUploading] = useState(false);
//   const { data: session } = useSession();
//   const router = useRouter();

//   const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
    
//     if (!session) {
//       router.push('/auth/signin');
//       return;
//     }

//     const files = Array.from(event.dataTransfer.files);
//     await handleUpload(files);
//   };

//   const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (!session) {
//       router.push('/auth/signin');
//       return;
//     }

//     const files = Array.from(event.target.files || []);
//     await handleUpload(files);
//   };

//   const handleUpload = async (files: File[]) => {
//     setUploading(true);
//     try {
//       // Upload logic here
//       await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated upload
//       onClose();
//     } catch (error) {
//       console.error('Upload failed:', error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
//       <DialogTitle>Upload Documents</DialogTitle>
//       <DialogContent>
//         <Box
//           sx={{
//             border: '2px dashed',
//             borderColor: 'primary.main',
//             borderRadius: 2,
//             p: 3,
//             textAlign: 'center',
//             cursor: 'pointer',
//             '&:hover': {
//               backgroundColor: 'action.hover'
//             }
//           }}
//           onDrop={handleDrop}
//           onDragOver={(e) => e.preventDefault()}
//         >
//           <input
//             type="file"
//             multiple
//             onChange={handleFileSelect}
//             style={{ display: 'none' }}
//             id="file-upload"
//           />
//           <label htmlFor="file-upload">
//             <CloudUpload sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
//             <Typography variant="h6" gutterBottom>
//               Drag and drop files here
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               or click to select files
//             </Typography>
//           </label>
//         </Box>
//         {uploading && <LinearProgress sx={{ mt: 2 }} />}
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//       </DialogActions>
//     </Dialog>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  LinearProgress
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Upload() {
  const [open, setOpen] = useState(true); // Controls dialog visibility
  const [uploading, setUploading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session, router]);

  // Handle file drop
  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!session) {
      router.push('/login');
      return;
    }

    const files = Array.from(event.dataTransfer.files);
    await handleUpload(files);
  };

  // Handle file selection
  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!session) {
      router.push('/login');
      return;
    }

    const files = Array.from(event.target.files || []);
    await handleUpload(files);
  };

  // Simulate file upload
  const handleUpload = async (files: File[]) => {
    setUploading(true);
    try {
      // Simulated upload logic
      console.log('Uploading files:', files);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay
      setOpen(false);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  if (!session) {
    return null; // Prevent rendering until redirected
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Upload Documents</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              border: '2px dashed',
              borderColor: 'primary.main',
              borderRadius: 2,
              p: 3,
              textAlign: 'center',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'action.hover'
              }
            }}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              type="file"
              multiple
              onChange={handleFileSelect}
              style={{ display: 'none' }}
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <CloudUpload sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Drag and drop files here
              </Typography>
              <Typography variant="body2" color="text.secondary">
                or click to select files
              </Typography>
            </label>
          </Box>
          {uploading && <LinearProgress sx={{ mt: 2 }} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
