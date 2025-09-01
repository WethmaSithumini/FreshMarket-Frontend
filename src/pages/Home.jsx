import React from 'react'; 
import NavBar from './NavBar'; 
import CoverPage from './CoverPage'; 
import Benefits from './Benefits'; 
import CropCategories from './CropCategories'; 
import FeaturedProducts from './FeaturedProducts'; 
import Testimonials from './Testimonials'; 
import CTA from './CTA'; 

function Home({ onSignOut }) { 
    return ( 
    <div> 
        <NavBar /> 
        <CoverPage /> 
        <Benefits /> 
        <CropCategories /> 
        <FeaturedProducts /> 
        <Testimonials /> 
        <CTA /> 
    </div> 
    ); 
} 
    
export default Home;

