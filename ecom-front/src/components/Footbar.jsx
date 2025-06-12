import { Box, Grid } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography';

export default function Footbar() {
    return (
        <Box component="footer"
            sx={{
                bgcolor: "#F2F0EF", p: 4, width: '100vw',
                height: {
                    xs: 846,    
                    md: 500,
                },
                pt: {
                    xs: 4,    // theme.spacing(4) = 32px (default spacing unit is 8px)
                    md: 25, // 12.5 * 8 = 100px
                },
                pb: {
                    xs: 4,
                    md: 25,
                },
                px: {
                    xs: 2,    // 16px
                    md: '6.9%', // 100px
                },
            }}>
            <Grid container spacing={2}
                sx={{
                    bgcolor: "#F2F0EF",
                    justifyContent: 'center',
                }}
                direction={{ xs: 'column', md: 'row' }}
            >
                {/* Left column: xs*/}
                <Grid xs={12}
                    sx={{ display: { xs: 'block', md: 'none' } }}>
                    <Typography
                        variant="h1"
                        noWrap
                        component="a"
                        href="#Home"
                        sx={{
                            mr: 2,
                            fontFamily: 'roboto',
                            fontWeight: 'bold',
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: 32,
                        }}
                    >
                        SHOP.CO
                    </Typography>
                    <Typography>
                        We have clothes that suits your style and which you're <br />
                        proud to wear. From women to men.
                    </Typography>
                </Grid>

                {/* Right columns: xs */}
                <Grid container  spacing={2} xs={12} md={7} lg={8}
                    direction={{ xs: 'column', md: 'row' }}
                    sx={{ display: { xs: 'block', md: 'none',  } }}
                >
                    {/* Now each of these will be half-width on xs (6/12) and quarter-width on lg (3/12) */}
                    <Grid container  xs={12} lg={3} wrap="nowrap"
                        sx={{
                            // bgcolor: "blue",
                            justifyContent: 'flex-start',
                        }}>
                        <Grid  size={6} xs={6} lg={3} 
                        sx={{ 
                            height: "146px",
                            mb: 2, }} 
                        >
                            <Box>
                                <Box
                                    id="company"
                                    sx={{
                                        fontSize: 18,
                                        textTransform: "uppercase",
                                        fontWeight: 'bold',
                                        pb: 4,
                                    }}
                                >
                                    COMPANY
                                </Box>
                                <Box
                                    component="ul"
                                    aria-labelledby="company"
                                    sx={{ listStyle: "none", pl: 0, m: 0 }}
                                >
                                    <li>About</li>
                                    <li>Features</li>
                                    <li>Works</li>
                                    <li>Career</li>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid  size={6} xs={6} lg={3} 
                        sx={{ 
                            height: "146px",
                            mb: 2, }} 
                        >
                            <Box>
                                <Box
                                    id="help"
                                    sx={{
                                        fontSize: 18,
                                        textTransform: "uppercase",
                                        fontWeight: 'bold',
                                        pb: 4,
                                    }}
                                >
                                    HELP
                                </Box>
                                <Box
                                    component="ul"
                                    aria-labelledby="help"
                                    sx={{ listStyle: "none", pl: 0, m: 0 }}
                                >
                                    <li>Customer Support</li>
                                    <li>Delivery Details</li>
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} lg={3} wrap="nowrap"
                        sx={{
                            // bgcolor: "blue",
                            justifyContent: 'space-between',
                        }}>
                        <Grid  size={6} xs={6} lg={3} >
                            <Box>
                                <Box
                                    id="faq"
                                    sx={{
                                        fontSize: 18,
                                        textTransform: "uppercase",
                                        fontWeight: 'bold',
                                        pb: 4,
                                    }}
                                >
                                    FAQ
                                </Box>
                                <Box
                                    component="ul"
                                    aria-labelledby="faq"
                                    sx={{ listStyle: "none", pl: 0, m: 0 }}
                                >
                                    <li>Account</li>
                                    <li>Manage Deliveries</li>
                                    <li>Orders</li>
                                    <li>Payments</li>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid  size={6} xs={6} lg={3}>
                            <Box>
                                <Box
                                    id="resources"
                                    sx={{
                                        fontSize: 18,
                                        textTransform: "uppercase",
                                        fontWeight: 'bold',
                                        pb: 4,
                                    }}
                                >
                                    RESOURCES
                                </Box>
                                <Box
                                    component="ul"
                                    aria-labelledby="resources"
                                    sx={{ listStyle: "none", pl: 0, m: 0 }}
                                >
                                    <li>Free eBooks</li>
                                    <li>Development Tutorial</li>
                                    <li>How to - Blog</li>
                                    <li>Youtube Playlist</li>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                {/* ---------------------------------------------------------- */}
                {/* All columns: md */}
                <Grid container spacing={2} md={12} wrap="nowrap" height={177}
                    sx={{
                        display: {
                            xs: 'none', md: 'flex', width: '100vw',
                        },
                        justifyContent: 'space-between',
                        // backgroundColor: 'red',
                    }}
                >
                    <Grid container height={177}
                    //sx={{ backgroundColor: 'red' }}
                    >
                        <Box>
                            <Box sx={{ textTransform: "uppercase", pb: 6.25 }}>
                                <Typography
                                    variant="h1"
                                    noWrap
                                    component="a"
                                    href="#Home"
                                    sx={{
                                        mr: 2,
                                        fontFamily: 'roboto',
                                        fontWeight: 'bold',
                                        letterSpacing: '.1rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        fontSize: 33.45,
                                    }}
                                >
                                    SHOP.CO
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 14 }}>
                                    We have clothes that suits your style and <br />
                                    which you’re proud to wear. From <br />
                                    women to men.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid container height={177} direction="column"
                    // sx={{ backgroundColor: 'red' }}
                    >

                        <Box>
                            <Box
                                id="company"
                                sx={{ fontSize: 16, textTransform: "uppercase", pb: 6.5 }}
                            >
                                COMPANY
                            </Box>
                            <Box
                                component="ul"
                                aria-labelledby="company"
                                sx={{ fontSize: 16, listStyle: "none", pl: 0, m: 0 }}
                            >
                                <li>About</li>
                                <li>Features</li>
                                <li>Works</li>
                                <li>Career</li>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid container height={177} direction="column"
                    >
                        <Box>
                            <Box
                                id="help"
                                sx={{ fontSize: 16, textTransform: "uppercase", pb: 6.5 }}
                            >
                                HELP
                            </Box>
                            <Box
                                component="ul"
                                aria-labelledby="help"
                                sx={{ fontSize: 16, listStyle: "none", pl: 0, m: 0 }}
                            >
                                <li>Customer Support</li>
                                <li>Delivery Details</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid container height={177} direction="column"
                    >
                        <Box>
                            <Box
                                id="faq"
                                sx={{ fontSize: 16, textTransform: "uppercase", pb: 6.5 }}
                            >
                                FAQ
                            </Box>
                            <Box
                                component="ul"
                                aria-labelledby="faq"
                                sx={{ fontSize: 16, listStyle: "none", pl: 0, m: 0 }}
                            >
                                <li>Account</li>
                                <li>Manage Deliveries</li>
                                <li>Orders</li>
                                <li>Payments</li>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid container height={177} direction="column"
                    >
                        <Box>
                            <Box
                                id="resources"
                                sx={{ fontSize: 16, textTransform: "uppercase", pb: 6.5 }}
                            >
                                RESOURCES
                            </Box>
                            <Box
                                component="ul"
                                aria-labelledby="resources"
                                sx={{ fontSize: 16, listStyle: "none", pl: 0, m: 0 }}
                            >
                                <li>Free eBooks</li>
                                <li>Development Tutorial</li>
                                <li>How to - Blog</li>
                                <li>Youtube Playlist</li>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}