import { useState, useEffect } from 'react';
import axios from 'axios';

// Material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Footer = () => {
  const theme = useTheme();
  const [footer, setFooter] = useState([]);

  const fetchFooter = () => {
    axios
      .get('/footer', {
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': process.env.BACKEND_URL,
        },
      })
      .then((response) => {
        setFooter(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchFooter();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {footer.slice(0, 1).map((item, index) => (
          <Box key={index} sx={{ marginBottom: '20px', textAlign: 'center' }}>
            <Typography
              align='center'
              variant='subtitle2'
              color={theme.palette.text.secondary}
              gutterBottom
              sx={{ marginTop: '25px' }}
            >
              Copyright &copy; {new Date().getFullYear()} {item.copyright}.
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default Footer;
