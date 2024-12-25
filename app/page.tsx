import { Typography, Container, Box, Button } from '@mui/material';
import FeatureSection from './components/home/FeatureSection';
import { CloudUpload } from '@mui/icons-material';

export default function Home() {
  return (
    <>
      {/* <Box
        sx={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              mb: 4,
              fontSize: { xs: '2.5rem', md: '4rem' }
            }}
          >
            DocuPitch
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              mb: 4,
              maxWidth: 600
            }}
          >
            AI-Powered Document Collaboration Platform
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<CloudUpload />}
            href="/auth/signin"
            sx={{ fontSize: '1.2rem' }}
          >
            Start Uploading
          </Button>
        </Container>
      </Box> */}
      <FeatureSection />
    </>
  );
}