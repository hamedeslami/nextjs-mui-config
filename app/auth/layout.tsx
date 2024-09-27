import { Box, Container, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image'

export default function AuthLayout({children}: Readonly<{ children: React.ReactNode; }>) { 
    return(
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
                <Stack sx={{height: '100vh'}} alignItems={'center'} justifyContent={'center'}>
                    {children}
                </Stack>
            </Grid>
            <Grid size={{ md: 4 }} display={{ xs: "none", md: "block" }}>
                <Stack sx={{height: '100vh', backgroundColor: '#fff'}} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                    <Image
                        src="/images/background/security.svg"
                        priority={false}
                        width={430}
                        height={293}
                        alt="login page vector"
                        />
                </Stack>
            </Grid>
        </Grid>
    )
 };