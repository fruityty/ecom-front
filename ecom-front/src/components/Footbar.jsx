import { Box, Grid } from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
}));

export default function Footbar() {
    return (
        <Box component="footer"
            sx={{ bgcolor: "background.paper", p: 4, width: '100vw' }}>
            <Grid container spacing={2}
                sx={{
                    bgcolor: "wheat",
                    justifyContent: 'center',
                }}
                direction={{ xs: 'column', md: 'row' }}
            >
                {/* Left column */}
                <Grid item xs={12} md={5} lg={4}>
                    <Item>shop social section</Item>
                    <Typography>
                        We have clothes that suits your style and which you’re proud to wear. From women to men.

                    </Typography>
                </Grid>

                {/* Right columns: xs */}
                <Grid container item spacing={2} xs={12} md={7} lg={8}
                    direction={{ xs: 'column', md: 'row' }}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    {/* Now each of these will be half-width on xs (6/12) and quarter-width on lg (3/12) */}
                    <Grid container item xs={12} lg={3} wrap="nowrap"
                        sx={{
                            bgcolor: "blue",
                            justifyContent: 'space-between',
                        }}>
                        <Grid item size={6} xs={6} lg={3} >
                            <Item>
                                <Box
                                    id="company"
                                    sx={{ fontSize: 12, textTransform: "uppercase" }}
                                >
                                    COMPANY
                                </Box>
                                <Box
                                    component="ul"
                                    aria-labelledby="company"
                                    sx={{ listStyle: "none", pl: 2, m: 0 }}
                                >
                                    <li>About</li>
                                    <li>Features</li>
                                    <li>Works</li>
                                    <li>Career</li>
                                </Box>
                            </Item>
                        </Grid>

                        <Grid item size={6} xs={6} lg={3}>
                            <Item>
                                <Box
                                    id="help"
                                    sx={{ fontSize: 12, textTransform: "uppercase" }}
                                >
                                    HELP
                                </Box>
                                <Box
                                    component="ul"
                                    aria-labelledby="help"
                                    sx={{ listStyle: "none", pl: 2, m: 0 }}
                                >
                                    <li>Customer Support</li>
                                    <li>Delivery Details</li>
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} lg={3} wrap="nowrap"
                        sx={{
                            bgcolor: "blue",
                            justifyContent: 'space-between',
                        }}>
                        <Grid item size={6} xs={6} lg={3} >
                            <Item>
                                <Box
                                    id="faq"
                                    sx={{ fontSize: 12, textTransform: "uppercase" }}
                                >
                                    FAQ
                                </Box>
                                <Box
                                    component="ul"
                                    aria-labelledby="faq"
                                    sx={{ listStyle: "none", pl: 2, m: 0 }}
                                >
                                    <li>Account</li>
                                    <li>Manage Deliveries</li>
                                    <li>Orders</li>
                                    <li>Payments</li>
                                </Box>
                            </Item>
                        </Grid>

                        <Grid item size={6} xs={6} lg={3}>
                            <Item>
                                <Box
                                    id="resources"
                                    sx={{ fontSize: 12, textTransform: "uppercase" }}
                                >
                                    RESOURCES
                                </Box>
                                <Box
                                    component="ul"
                                    aria-labelledby="resources"
                                    sx={{ listStyle: "none", pl: 2, m: 0 }}
                                >
                                    <li>Free eBooks</li>
                                    <li>Development Tutorial</li>
                                    <li>How to - Blog</li>
                                    <li>Youtube Playlist</li>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid> 

                {/* Right columns: md */}
                <Grid container item spacing={2} md={12}
                    direction={{ xs: 'column', md: 'row' }}
                    sx={{ display: { xs: 'none', md: 'block' } }}
                >
                    {/* Now each of these will be half-width on xs (6/12) and quarter-width on lg (3/12) */}
                    <Grid container item xs={12} lg={3} wrap="nowrap"
                        sx={{
                            bgcolor: "blue",
                            justifyContent: 'flex-start',
                        }}>
                        <Item>
                            <Box
                                id="company"
                                sx={{ fontSize: 12, textTransform: "uppercase" }}
                            >
                                COMPANY
                            </Box>
                            <Box
                                component="ul"
                                aria-labelledby="company"
                                sx={{ listStyle: "none", pl: 2, m: 0 }}
                            >
                                <li>About</li>
                                <li>Features</li>
                                <li>Works</li>
                                <li>Career</li>
                            </Box>
                        </Item>
                        <Item>
                            <Box
                                id="help"
                                sx={{ fontSize: 12, textTransform: "uppercase" }}
                            >
                                HELP
                            </Box>
                            <Box
                                component="ul"
                                aria-labelledby="help"
                                sx={{ listStyle: "none", pl: 2, m: 0 }}
                            >
                                <li>Customer Support</li>
                                <li>Delivery Details</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </Box>
                        </Item>
                        <Item>
                            <Box
                                id="faq"
                                sx={{ fontSize: 12, textTransform: "uppercase" }}
                            >
                                FAQ
                            </Box>
                            <Box
                                component="ul"
                                aria-labelledby="faq"
                                sx={{ listStyle: "none", pl: 2, m: 0 }}
                            >
                                <li>Account</li>
                                <li>Manage Deliveries</li>
                                <li>Orders</li>
                                <li>Payments</li>
                            </Box>
                        </Item>
                        <Item>
                            <Box
                                id="resources"
                                sx={{ fontSize: 12, textTransform: "uppercase" }}
                            >
                                RESOURCES
                            </Box>
                            <Box
                                component="ul"
                                aria-labelledby="resources"
                                sx={{ listStyle: "none", pl: 2, m: 0 }}
                            >
                                <li>Free eBooks</li>
                                <li>Development Tutorial</li>
                                <li>How to - Blog</li>
                                <li>Youtube Playlist</li>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}