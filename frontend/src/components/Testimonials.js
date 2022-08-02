import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import TextIcon from '@mui/icons-material/TextSmsOutlined';
import { useTheme } from '@mui/material/styles';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Testimonials = () => {
  const theme = useTheme();
  const [testimonials, setTestimonials] = useState([]);
  
  const fetchTestimonials = () => {
    axios.get('/testimonials', {
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': process.env.BACKEND_URL,
      }
    })
    .then(response => {
      setTestimonials(response.data);
    })
    .catch(error => console.log(error));
  };
  
  useEffect(() => {
    fetchTestimonials();
  }, []);
  
  return (
    <div id='testimonials'>
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
            fontWeight={700}
            data-aos='fade-up'
            gutterBottom
          >
            Testimonials
          </Typography>
          <Typography
            variant='h6'
            color={theme.palette.text.secondary}
            align='center'
            data-aos='fade-up'
            marginTop={3}
            marginBottom={3}
          >
            Check what clients have said about our work
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {testimonials.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
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
                  padding={4}
                  borderRadius={2}
                  width={1}
                  height={1}
                  data-aos='fade-up'
                  data-aos-delay={i * 100}
                  data-aos-offset={100}
                  data-aos-duration={600}
                  variant='outlined'
                >
                  <Box 
                    display='flex' 
                    flexDirection='column'
                  >
                    <Box 
                      component={Avatar}
                      width={50}
                      height={50}
                      marginBottom={2}
                      backgroundColor={theme.palette.primary.main}
                      color={theme.palette.background.paper}
                    >
                      <TextIcon 
                        sx={{ 
                          color: theme.palette.common.white,
                          height: 25, 
                          width: 25
                        }} 
                      />
                    </Box>
                    <Typography 
                      color={theme.palette.text.secondary}
                      gutterBottom
                    >
                      {item.testimonial}
                    </Typography>
                    <ListItem 
                      component='div' 
                      disableGutters 
                      sx={{ padding: 0, marginTop: 1 }}
                    >
                      <ListItemAvatar>
                        <Avatar src={item.author_photo} />
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ margin: 0 }}
                        primary={
                          <Typography
                            variant='h6'
                            color='primary'
                            gutterBottom
                            sx={{ fontWeight: 700 }}
                          >
                            {item.author_name}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            variant='subtitle1'
                            gutterBottom
                            sx={{ fontWeight: 500 }}
                          >
                            {item.author_title}
                          </Typography>
                        }
                      />
                    </ListItem>                 
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

export default Testimonials;