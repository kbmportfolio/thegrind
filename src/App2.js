
import './App.css';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header';
import BigCard from './components/Card/BigCard'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CTAButton from './components/Buttons/CTAButton';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {

  const theme = createTheme({
    spacing: 8, // Spacing factor
});
 

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
      <Nav />
      <Grid alignItems="center" justify="center" container spacing={1}>
      <Grid xs={4}>
    <BigCard />
  </Grid>
  <Grid xs={4}>
    <BigCard />
  </Grid>
  <Grid xs={4}>
    <BigCard />
  </Grid>
  <Grid xs={4}>
    <BigCard />
  </Grid>
  <Grid xs={4}>
    <BigCard />
  </Grid>
  <Grid xs={4}>
    <BigCard />
  </Grid>
  <Grid xs={4}>
    <BigCard />
  </Grid>
  <Grid xs={4}>
    <BigCard />
  </Grid>
  <Grid xs={4}>
    <BigCard />
  </Grid>
  <Grid xs={4}>
    <BigCard />
  </Grid>
  <Grid xs={4}>
    <BigCard />
  </Grid>
  <Grid xs={4}>
    <BigCard />
  </Grid>
      
  

      </Grid>
      
     
      {/* <CTAButton /> */}
      
    </div>
    </ThemeProvider>
  );
}

export default App;
