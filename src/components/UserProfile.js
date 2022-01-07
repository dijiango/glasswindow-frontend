import React from 'react'
import { Box, Paper, Stack, Container, Grid, TextField, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


const profile = {
    name: 'Diana',
}

const anonIcon = 'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/129-512.png';
function UserProfile() {
    return (
        <div className='profileContainer'>
            <Container component="main" maxWidth="xs">
                <Paper elevation={3}>
                    <Box sx={{
                        margin: 4,
                        paddingTop: 2,
                        paddingBottom: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        
                        <Typography sx={{textAlign: 'center'}}>Profile</Typography> 
                           
                        <Grid item xs={12} sx={{alignItems: 'center', margin: 2}}>
                    <img src={anonIcon} style={{height: '100px'}}/>
                        </Grid>
                        
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"                                          
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField 
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <TextField 
                                    required
                                    fullWidth
                                    id="address"
                                    label="Physical Address"
                                    name="address"
                                    autoComplete="address"
                                />
                            </Grid> 

                            <Grid item xs={12} >
                                <TextField 
                                    required
                                    fullWidth
                                    id="phone_number"
                                    label="Phone Number"
                                    name="phone_number"
                                    autoComplete="phone_number"
                                />
                            </Grid>

                        </Grid>

                    </Box>    
                </Paper>
                
                
            
            </Container>

            <IconButton>
                <EditIcon fontSize='large' color='success'/>    
            </IconButton>    
    </div>
    )
}

export default UserProfile
