import { Box, Paper, Stack, Container, Grid, TextField } from '@mui/material';
import React from 'react'

const profile = {
    name: 'Diana',
}
function UserProfile() {
    return (
        <div className='profileContainer'>
            <Container component="main" maxWidth="xs">
                <Paper>
                    <Box sx={{
                  marginTop: 4,
                  marginBottom: 4,
                  paddingTop: 2,
                  paddingBottom: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                    }}>
                        User Form
                        <Grid container sx={{justifyContent: 'center'}}>
                            <Stack>
                                <Grid item>
                                    <TextField />
                                </Grid>

                                <Grid item>
                                    <TextField />
                                </Grid>

                                <Grid item>
                                    <TextField />
                                </Grid>    
                            </Stack>
                        </Grid>
                    </Box>    
                </Paper>
            </Container>
                
        </div>
    )
}

export default UserProfile
