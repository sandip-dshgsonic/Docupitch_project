'use client';

import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import NextLink from 'next/link';
import { useContext } from 'react';
import { ColorModeContext } from '../context/ColorModeContext';

export default function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        backgroundColor: 'white',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        color: 'black',
      }}
    >
      <Toolbar
        sx={{
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          padding: { xs: '0 16px', sm: '0 24px', lg: '0 32px' },
          height: '100px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Left Side: Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NextLink href="/" passHref legacyBehavior>
            <Box
              component="a"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Image
                src="/images/Docupitch_logo.png"
                alt="DocuPitch Logo"
                width={90} // Increased width for better clarity
                height={40} // Increased height for better clarity
                quality={100} // Ensures a sharp image
                style={{
                  objectFit: 'contain', // Ensures proper scaling
                }}
              />
            </Box>
          </NextLink>
        </Box>

        {/* Right Side: Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <NextLink href="/" passHref legacyBehavior>
            <Button
              component="a"
              sx={{
                color: 'gray',
                fontSize: '14px',
                fontWeight: '500',
                textTransform: 'none',
                '&:hover': { color: 'black' },
              }}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/about" passHref legacyBehavior>
            <Button
              component="a"
              sx={{
                color: 'gray',
                fontSize: '14px',
                fontWeight: '500',
                textTransform: 'none',
                '&:hover': { color: 'black' },
              }}
            >
              About Us
            </Button>
          </NextLink>

          {/* Login Button */}
          <Button
  sx={{
    backgroundColor: '#5a3aaf', // Primary button color
    color: 'blue',
    fontWeight: '500',
    padding: '8px 16px',
    borderRadius: '8px',
    textTransform: 'none',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#5a3aaf', // Slightly darker purple for hover effect
      transition: 'background-color 0.3s ease',
    },
  }}
>
  Login
</Button>


          {/* Theme Toggle Icon */}
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}



// 'use client';

// import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
// import { Brightness4, Brightness7 } from '@mui/icons-material';
// import { useTheme } from '@mui/material/styles';
// import Image from 'next/image';
// import NextLink from 'next/link';
// import { useContext } from 'react';
// import { ColorModeContext } from '../context/ColorModeContext';

// export default function Header() {
//   const theme = useTheme();
//   const colorMode = useContext(ColorModeContext);

//   return (
//     <AppBar
//       position="static"
//       elevation={1}
//       sx={{
//         backgroundColor: 'white',
//         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Shadow to mimic Tailwind's `shadow-sm`
//         color: 'black',
//       }}
//     >
//       <Toolbar
//         sx={{
//           maxWidth: '1280px', // Equivalent to `max-w-7xl`
//           width: '100%',
//           margin: '0 auto', // Center the header content
//           padding: { xs: '0 16px', sm: '0 24px', lg: '0 32px' }, // Equivalent to `px-4 sm:px-6 lg:px-8`
//           height: '80px', // Increased height
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}
//       >
//         {/* Left Side: Logo */}
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <NextLink href="/" passHref legacyBehavior>
//             <Box
//               component="a"
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 textDecoration: 'none',
//                 color: 'inherit',
//               }}
//             >
//               <Image
//                 src="/images/Docupitch_logo.png"
//                 alt="DocuPitch Logo"
//                 width={60} // Increased width
//                 height={48} // Increased height
//                 style={{ marginRight: '12px' }}
//               />
//             </Box>
//           </NextLink>
//         </Box>

//         {/* Right Side: Navigation Links */}
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <NextLink href="/" passHref legacyBehavior>
//             <Button
//               component="a"
//               sx={{
//                 color: 'gray',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 textTransform: 'none',
//                 '&:hover': { color: 'black' }, // Equivalent to `hover:text-gray-900`
//               }}
//             >
//               Home
//             </Button>
//           </NextLink>
//           <NextLink href="/about" passHref legacyBehavior>
//             <Button
//               component="a"
//               sx={{
//                 color: 'gray',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 textTransform: 'none',
//                 '&:hover': { color: 'black' }, // Equivalent to `hover:text-gray-900`
//               }}
//             >
//               About Us
//             </Button>
//           </NextLink>

//           {/* Login Button */}
//           <Button
//             sx={{
//               backgroundColor: '#6b46c1', // Equivalent to Tailwind's `bg-purple-600`
//               color: 'white',
//               fontWeight: '500',
//               padding: '8px 16px',
//               borderRadius: '8px', // Equivalent to `rounded-lg`
//               textTransform: 'none',
//               fontSize: '14px',
//               '&:hover': {
//                 backgroundColor: '#553c9a', // Equivalent to `hover:bg-purple-700`
//                 transition: 'background-color 0.3s ease',
//               },
//             }}
//           >
//             Login
//           </Button>

//           {/* Theme Toggle Icon */}
//           <IconButton onClick={colorMode.toggleColorMode} color="inherit">
//             {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }
