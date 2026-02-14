import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Box,
  IconButton,
  useTheme,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [mode, setMode] = React.useState('light');
  
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#1976d2' : '#90caf9',
      },
      secondary: {
        main: mode === 'light' ? '#dc004e' : '#f48fb1',
      },
    },
    typography: {
      h3: {
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 8,
    },
  });

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Header */}
      <AppBar 
        position="relative" 
        sx={{
          background: mode === 'light'
            ? 'linear-gradient(45deg, #1976d2, #42a5f5)'
            : 'linear-gradient(45deg, #1565c0, #42a5f5)',
        }}
      >
          <Toolbar>
            <PhotoCameraIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              Album layout
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
      </AppBar>

      <main>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
            background: mode === 'light'
              ? 'linear-gradient(135deg, #f5f5f5 0%, #e3f2fd 100%)'
              : 'linear-gradient(135deg, #1e1e1e 0%, #263238 100%)',
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              gutterBottom
              sx={{
                color: mode === 'light' ? '#1565c0' : '#90caf9',
                fontWeight: 600,
              }}
            >
              Album layout
            </Typography>
            <Typography variant="p" fontSize={22} align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
            </Typography>
            <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
              <Button 
                variant="contained" 
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 20,
                }}
              >
                Main Call to Action
              </Button>
              <Button 
                variant="outlined" 
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 20,
                }}
              >
                Secondary Action
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Cards Grid */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {cards.map((card) => (
              <Grid item key={card} size={{ xs: 12, sm: 4, md: 4 }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: mode === 'light' 
                        ? '0 8px 25px rgba(0,0,0,0.15)'
                        : '0 8px 25px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: "56.25%",
                      background: mode === 'light'
                        ? 'linear-gradient(45deg, #e3f2fd, #bbdefb)'
                        : 'linear-gradient(45deg, #37474f, #455a64)',
                      position: 'relative',
                      '&::after': {
                        content: '"📷"',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '2rem',
                        opacity: 0.3,
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                      gutterBottom 
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      Heading
                    </Typography>
                    <Typography 
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.5,
                      }}
                    >
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                      size="small" 
                      variant="contained"
                      sx={{
                        borderRadius: 15,
                      }}
                    >
                      View
                    </Button>
                    <Button 
                      size="small" 
                      variant="outlined"
                      sx={{
                        borderRadius: 15,
                      }}
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box 
        sx={{ 
          bgcolor: mode === 'light' 
            ? 'linear-gradient(45deg, #263238, #37474f)'
            : 'linear-gradient(45deg, #000000, #263238)',
          p: 6, 
          color: 'white',
        }} 
        component="footer"
      >
        <Typography 
          variant="h6" 
          align="center" 
          gutterBottom
          sx={{
            fontWeight: 600,
          }}
        >
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: mode === 'light' ? 'black' : 'white',
          }}
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ 
            mt: 2,
            color: mode === 'light' ? 'black' : 'white',
          }}
        >
          Copyright © Your Website 2026
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
