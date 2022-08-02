import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const About = () => {
  const theme = useTheme();
  const [about, setAbout] = useState([]);
  
  const fetchAbout = () => {
    axios.get('/about', {
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': process.env.BACKEND_URL,
      }
    })
    .then(response => {
      setAbout(response.data);
    })
    .catch(error => console.log(error));
  };
  
  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <div id='about'>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={4}
      >
        <Box marginBottom={4}>
          <Typography
            variant='h4'
            align='center'
            data-aos='fade-up'
            fontWeight={700}
            gutterBottom
          >
            About us
          </Typography>
          <Typography
            variant='h6'
            align='center'
            color={theme.palette.text.secondary}
            data-aos='fade-up'
          >
            We help software developers learn new skills, gain more experience and create excellent applications
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {about.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                display='block'
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  component={Card}
                  variant='outlined'
                  border='none'
                  width={1}
                  height={1}
                  padding={4}
                  data-aos='fade-up'
                  data-aos-delay={i * 100}
                  data-aos-offset={100}
                  data-aos-duration={600}
                >
                  <Box 
                    display='flex' 
                    flexDirection='column'
                  >
                    <Box
                      component={Avatar}
                      variant='rounded'
                      width={50}
                      height={50}
                      marginBottom={2}
                      backgroundColor={alpha(theme.palette.primary.main, 0.2)}
                      color={theme.palette.primary.main}
                    >
                      <Icon>
                        {item.icon}
                      </Icon>
                    </Box>
                    <Typography
                      variant='h6'
                      gutterBottom
                      sx={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography color={theme.palette.text.secondary}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default About;