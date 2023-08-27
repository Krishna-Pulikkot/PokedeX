import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Grid from '@mui/material/Grid';


const Connect = () =>{
    return (
        <div className="contact-div">
            <Header/>
            <Grid container spacing={2} >

                    <Grid item xs={5}>
                    <div className="contact-body-left">
                    
                    <h1 class="contact-body-left-title">Connect with us</h1>
                    <p>Share your thoughts and ideas with us. We would love to hear from you.<br/>
                    Visit our space and have a cup of coffee with us in the following address.
                    </p>
                    <h1 class="contact-body-left-title">Reach Us At</h1>
                    <p>
                        Address : 100 Feet Rd, Thirumangalam, Anna Nagar, Chennai, Tamil Nadu 600040
                        <br/>
                        Phone : +91-8989898989
                    </p>
                    </div>
                    </Grid>


                    <Grid item xs={5}>
                        <div className="contact-body-right">
                            <div className="contact-form">
                                <Form />
                            </div>
                        </div>
                    </Grid>
                
            </Grid>
            <div className="contact-footer">
            <Footer/>
            </div>
        </div>
    );
}
  
export default Connect;
