// 'use client';

// import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
// import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
// import NextLink from 'next/link';

// export default function Footer() {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         bgcolor: 'background.paper',
//         py: 6,
//         borderTop: '1px solid',
//         borderColor: 'divider',
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" color="text.primary" gutterBottom>
//               DocuPitch
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               AI-powered document collaboration platform for modern teams.
//             </Typography>
//             <Box sx={{ mt: 2 }}>
//               <IconButton color="primary" aria-label="Facebook">
//                 <Facebook />
//               </IconButton>
//               <IconButton color="primary" aria-label="Twitter">
//                 <Twitter />
//               </IconButton>
//               <IconButton color="primary" aria-label="LinkedIn">
//                 <LinkedIn />
//               </IconButton>
//               <IconButton color="primary" aria-label="Instagram">
//                 <Instagram />
//               </IconButton>
//             </Box>
//           </Grid>
          
//           <Grid item xs={12} md={2}>
//             <Typography variant="h6" color="text.primary" gutterBottom>
//               Product
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//               <NextLink href="/features" passHref legacyBehavior>
//                 <Box component="a" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
//                   Features
//                 </Box>
//               </NextLink>
//               <NextLink href="/pricing" passHref legacyBehavior>
//                 <Box component="a" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
//                   Pricing
//                 </Box>
//               </NextLink>
//               <NextLink href="/security" passHref legacyBehavior>
//                 <Box component="a" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
//                   Security
//                 </Box>
//               </NextLink>
//             </Box>
//           </Grid>

//           <Grid item xs={12} md={2}>
//             <Typography variant="h6" color="text.primary" gutterBottom>
//               Company
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//               <NextLink href="/about" passHref legacyBehavior>
//                 <Box component="a" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
//                   About Us
//                 </Box>
//               </NextLink>
//               <NextLink href="/careers" passHref legacyBehavior>
//                 <Box component="a" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
//                   Careers
//                 </Box>
//               </NextLink>
//               <NextLink href="/contact" passHref legacyBehavior>
//                 <Box component="a" sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
//                   Contact
//                 </Box>
//               </NextLink>
//             </Box>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" color="text.primary" gutterBottom>
//               Contact Us
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Email: support@docupitch.com
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Phone: +1 (555) 123-4567
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Address: 123 Innovation Street, Tech City, TC 12345
//             </Typography>
//           </Grid>
//         </Grid>
//         <Box sx={{ mt: 5 }}>
//           <Typography variant="body2" color="text.secondary" align="center">
//             © {new Date().getFullYear()} DocuPitch. All rights reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

'use client';

import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <img
               src="/images/Docupitch_logo.png"
                alt="DocuPitch Logo"
                style={{ height: '52px', width: '52px', marginBottom: '8px' }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary">
              Document sharing with analytics - making collaboration smarter and more efficient.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="text.secondary" underline="hover">
                Home
              </Link>
              <Link href="/about" color="text.secondary" underline="hover">
                About Us
              </Link>
              <Link href="/login" color="text.secondary" underline="hover">
                Login
              </Link>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: contact@docupitch.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: (555) 123-4567
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} DocuPitch. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
