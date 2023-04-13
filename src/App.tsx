import { Typography } from '@material-ui/core';
import Navbar from './components/navbar/Navbar.component';
import CustomCarousel from './components/home/Carousal.component';
import PropertyList from './components/common/PropertiesList.component';
import { PROPERTIES_LIST } from './constants/properties.constants';

function App() {
  return (
    <div>
      <Navbar />
      <CustomCarousel />
      <PropertyList properties={PROPERTIES_LIST}/>
      <div style={{ padding: '24px' }}>
        <Typography variant="h4">Welcome to AirRent</Typography>
        <Typography variant="subtitle1">
          This is a Material UI app!
        </Typography>
      </div>
    </div>
  );
}

export default App;
