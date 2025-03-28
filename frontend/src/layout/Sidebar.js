import PropTypes from 'prop-types';

// Material Icons
import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// Material Icons
import DevicesIcon from '@mui/icons-material/DevicesOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevicesOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import TextIcon from '@mui/icons-material/TextSmsOutlined';

import CustomButton from '../components/CustomButton';

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer
        anchor='left'
        onClose={() => onClose()}
        open={open}
        variant='temporary'
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.default,
            width: 256,
          },
        }}
      >
        <Box height='100%' padding={2}>
          <Box width={1} paddingY={1}>
            <Link href='/' sx={{ textDecoration: 'none' }}>
              <IconButton size='large' disabled>
                <ImportantDevicesIcon
                  sx={{
                    color: theme.palette.primary.main,
                    height: 30,
                    width: 30,
                  }}
                />
                <Typography
                  variant='h6'
                  color={theme.palette.primary.main}
                  flexGrow={1}
                  fontWeight='bold'
                  textDecoration='none'
                  marginLeft='10px'
                >
                  Bob&apos;s Programming Academy
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box paddingY={2}>
            <CustomButton href='#home' icon={<HomeIcon />} text='Home' />
            <Box paddingY={1}>
              <CustomButton href='#about' icon={<InfoIcon />} text='About' />
            </Box>
            <Box paddingY={1}>
              <CustomButton
                href='#projects'
                icon={<ListIcon />}
                text='Projects'
              />
            </Box>
            <Box paddingY={1}>
              <CustomButton
                href='#technologies'
                icon={<DevicesIcon />}
                text='Technologies'
              />
            </Box>
            <Box paddingY={1}>
              <CustomButton
                href='#testimonials'
                icon={<TextIcon />}
                text='Testimonials'
              />
            </Box>
            <Box paddingY={1}>
              <CustomButton
                href='#contact'
                icon={<EmailIcon />}
                text='Contact'
              />
            </Box>
            <Box>
              <Stack direction='row' spacing={1}>
                <IconButton
                  aria-label='LinkedIn'
                  href='#'
                  target='_blank'
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  <LinkedInIcon fontSize='large' />
                </IconButton>
                <IconButton
                  aria-label='Instagram'
                  href='#'
                  target='_blank'
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  <InstagramIcon fontSize='large' />
                </IconButton>
                <IconButton
                  aria-label='GitHub'
                  href='#'
                  target='_blank'
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  <GitHubIcon fontSize='large' />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default Sidebar;
