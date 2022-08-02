import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LocationIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTheme } from '@mui/material/styles';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Contact = () => {
  const theme = useTheme();
  const [contact, setContact] = useState([]);

  const fetchContact = () => {
    axios.get('/contact', {
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': process.env.BACKEND_URL,
      }
    })
    .then(response => {
      setContact(response.data);
    })
    .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchContact();
  }, []);
  
  return (
    <div id='contact'>
      <Box position='relative'>
        <Box
          maxWidth={{ sm: 720, md: 1236 }}
          width={1}
          margin='0 auto'
          paddingX={2}
          paddingY={4}
        >
          <Box marginBottom={2}>
            <Typography
              variant='h4'
              align='center'
              fontWeight={700}
              data-aos='fade-up'
              gutterBottom
            >
              Get in touch
            </Typography>
            <Typography
              variant='h6'
              align='center'
              color={theme.palette.text.secondary}
              data-aos='fade-up'
              marginTop={3}
              marginBottom={3}
            >
              We would love to hear from you
            </Typography>
          </Box>
          {contact.map((item, index) => (
            <Box key={index}>
              <Box marginBottom={4}>
                <Grid container spacing={4}>
                  <Grid 
                    item
                    container 
                    alignItems='center'
                    justifyContent='center'
                    xs={12} 
                    md={6}
                  >
                    <Box
                      sx={{
                        height: { xs: 'auto', md: 1 },
                        '& img': { objectFit: 'cover' },
                        '& .lazy-load-image-loaded': {
                          height: 1,
                          width: 1,
                        },
                      }}
                    >
                      <Box 
                        component={LazyLoadImage}
                        src='/images/office.jpg'
                        alt='Laptop'
                        height={{ xs: 'auto', md: 1 }}
                        maxHeight={{ xs: 300, md: 1 }}
                        width={1}
                        maxWidth={1}
                        borderRadius={2}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      display='flex'
                      flexDirection='column'
                      justifyContent='center'
                      marginTop={15}
                      marginBottom={6}
                    >
                      <Box
                        component={ListItem}
                        disableGutters
                        width='auto'
                        padding={0}
                        marginLeft={5}
                        marginBottom={2}
                      >
                        <PhoneIcon
                          sx={{
                            color: theme.palette.primary.main,
                            width: 25,
                            height: 25,
                            marginRight: 1
                          }} 
                        />
                        <ListItemText primary={item.phone} />
                      </Box>
                      <Box
                        component={ListItem}
                        disableGutters
                        width='auto'
                        padding={0}
                        marginLeft={5}
                        marginBottom={2}
                      >
                        <EmailIcon 
                          sx={{
                            color: theme.palette.primary.main,
                            width: 25,
                            height: 25,
                            marginRight: 1
                          }}  
                        />
                        <ListItemText primary={item.email} />
                      </Box>
                      <Box
                        component={ListItem}
                        disableGutters
                        width='auto'
                        padding={0}
                        marginLeft={5}
                        marginBottom={1}
                      >
                        <LocationIcon 
                          sx={{
                            color: theme.palette.primary.main,
                            width: 25,
                            height: 25,
                            marginRight: 1
                          }} 
                        />
                        <ListItemText primary={item.address} />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Contact;