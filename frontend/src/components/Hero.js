import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from 'axios';

// Material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import HeroButtons from './HeroButtons';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [hero, setHero] = useState([]);

  const fetchHero = () => {
    axios
      .get('/hero', {
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': process.env.BACKEND_URL,
        },
      })
      .then((response) => {
        setHero(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchHero();
  }, []);

  return (
    <div id='home'>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={4}
      >
        {hero.slice(0, 1).map((item, i) => (
          <Grid container spacing={4} key={i}>
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
                <Box marginBottom={2}>
                  <Typography
                    color={theme.palette.primary.main}
                    variant='h4'
                    component='span'
                    fontWeight={700}
                  >
                    {item.title}{' '}
                  </Typography>
                  <Typography
                    color={theme.palette.text.primary}
                    variant='h4'
                    fontWeight={700}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box marginBottom={3}>
                  <Typography
                    variant='h6'
                    component='p'
                    color={theme.palette.text.secondary}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <HeroButtons />
              </Box>
            </Grid>
            <Grid
              item
              container
              alignItems='center'
              justifyContent='center'
              xs={12}
              md={6}
              sx={{ order: { xs: 1, md: 2 } }}
            >
              <Box
                sx={{
                  height: { xs: 'auto', md: 1 },
                  '& img': {
                    objectFit: 'cover',
                  },
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    width: 1,
                  },
                }}
              >
                <Box
                  component={LazyLoadImage}
                  src={item.image}
                  alt='Background Image'
                  effect='blur'
                  height={{ xs: 'auto', md: 1 }}
                  maxHeight={{ xs: 300, md: 1 }}
                  width={1}
                  maxWidth={1}
                  borderRadius={1}
                />
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </div>
  );
};

export default Hero;
