import { useState, useEffect } from 'react';
import axios from 'axios';

// Material UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Projects = () => {
  const theme = useTheme();
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    axios
      .get('/projects', {
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': process.env.BACKEND_URL,
        },
      })
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div id='projects'>
      <Box
        position='relative'
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
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
              gutterBottom
              data-aos='fade-up'
            >
              Projects
            </Typography>
            <Typography
              variant='h6'
              align='center'
              color={theme.palette.text.secondary}
              marginTop={3}
              marginBottom={3}
              data-aos='fade-up'
            >
              View some of our latest projects
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {projects.map((item, i) => (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                data-aos='fade-up'
                data-aos-delay={100}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <Box display='block' width={1} height={1}>
                  <Box
                    component={Card}
                    width={1}
                    height={1}
                    display='flex'
                    flexDirection='column'
                  >
                    <CardMedia
                      component='img'
                      title={item.name}
                      image={item.image}
                      sx={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant='h6'
                        align='left'
                        sx={{ fontWeight: 700 }}
                      >
                        {item.name}
                      </Typography>
                      <Box display='flex' alignItems='center' marginY={2}>
                        <Typography
                          variant='subtitle2'
                          color={theme.palette.text.secondary}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                      <Box marginTop={3} marginBottom={1}>
                        {item.tags.map((tag, i) => (
                          <Chip
                            key={i}
                            label={tag.name}
                            variant='outlined'
                            size='small'
                            color='primary'
                            sx={{
                              marginBottom: 1,
                              marginRight: 1,
                              '&:hover': {
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.common.white,
                                border:
                                  '1px solid ' + theme.palette.primary.main,
                              },
                            }}
                          />
                        ))}
                      </Box>
                      <CardActions sx={{ justifyContent: 'flex-end' }}>
                        <Button
                          component='a'
                          href={item.link}
                          target='_blank'
                          endIcon={
                            <Box
                              component='svg'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              width={24}
                              height={24}
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                              />
                            </Box>
                          }
                        >
                          Source Code
                        </Button>
                      </CardActions>
                    </CardContent>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
