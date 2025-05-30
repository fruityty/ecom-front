import cover from "../assets/cover.jpg"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const statNumberStyle = {
    mr: 2,
    fontFamily: 'roboto',
    fontWeight: 'bold',
    letterSpacing: '.1rem',
    color: 'inherit',
    textDecoration: 'none',
    fontSize: 40,
    mb: 0,
};

const statData = [
    { order: '1', num: '200+', description: 'International Brands' },
    { order: '2', num: '2,000+', description: 'High-Quality Products' },
    { order: '3', num: '30,000+', description: 'Happy Customers' },
]

export default function Cover() {
    return (
        <Box
            sx={{
                backgroundImage: `url(${cover})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                aspectRatio: '16/9', // or use the image's real aspect ratio
                width: '100%',
                maxHeight: '700px',
                pt: {
                    xs: 4,   // 4 * 4 = 16px
                    md: 25, // 25 * 4 = 100px
                },
                pb: {
                    xs: 4,
                    md: 25,
                },
                px: {
                    xs: 2,    // 8px
                    md: '6.9%', // 100px
                },
            }}
        >

            <Typography
                variant="h2"

                sx={{
                    mr: 2,
                    mb: 4,
                    fontFamily: 'roboto',
                    fontWeight: 'bold',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: 64,
                    lineHeight: 1.0, // You can adjust this value
                }}
            >
                FIND CLOTHES <br />
                THAT MATCHES <br />
                YOUR STYLE
            </Typography>

            <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                Browse through our diverse range of meticulously crafted garments, designed <br />
                to bring out your individuality and cater to your sense of style.
            </Typography>

            <Button
                sx={{
                    width: '210px',              // custom width
                    height: '50px',              // custom height
                    backgroundColor: '#000',     // background color
                    color: '#fff',               // text color
                    borderRadius: '50px',        // fully rounded corners (pill shape)
                    textTransform: 'none',       // optional: keep original casing
                    '&:hover': {
                        backgroundColor: '#333',   // hover effect (optional)
                    },
                    mt: '20px'
                }}
            >
                Shop Now
            </Button>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 4, // spacing between items
                    mt: 4,  // margin from the text/button section
                }}
            >
                {statData.map((stat) => (
                    <Box key={stat.order}>
                        <Typography sx={statNumberStyle}>
                            {stat.num}
                        </Typography>
                        <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                            {stat.description}
                        </Typography>
                    </Box>
                ))}
            </Box>


        </Box>
    )
}

