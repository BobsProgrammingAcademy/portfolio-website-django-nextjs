// Material UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme, useMediaQuery } from '@mui/material';

// Material Icons
import InfoIcon from '@mui/icons-material/HelpOutline';
import PlayIcon from '@mui/icons-material/PlayCircleOutlineOutlined';

const HeroButtons = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <>
      <Box
        display='flex'
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent='center'
        marginTop={4}
      >
        <Button
          component='a'
          variant='contained'
          size='large'
          color='primary'
          href='#'
          startIcon={<InfoIcon />}
          fullWidth={isMd ? false : true}
          disableElevation={true}
          sx={{
            marginRight: '15px',
            border: '2px solid transparent',
            '&:hover': {
              backgroundColor: 'transparent',
              color: theme.palette.primary.main,
              border: `2px solid ${theme.palette.primary.main}`,
            },
          }}
        >
          Get Started
        </Button>
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 1 }}
          width={{ xs: '100%', md: 'auto' }}
        >
          <Button
            component='a'
            variant='outlined'
            color='primary'
            size='large'
            href='#'
            startIcon={<PlayIcon />}
            fullWidth={isMd ? false : true}
            disableElevation={true}
            sx={{
              marginRight: '15px',
              border: `2px solid ${theme.palette.primary.main}`,
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                border: `2px solid ${theme.palette.primary.main}`,
              },
            }}
          >
            Watch Demo
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HeroButtons;
