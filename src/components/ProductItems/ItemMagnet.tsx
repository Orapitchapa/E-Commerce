import {
    Card, CardContent, CardMedia, Rating,
    Typography, CardActionArea, Grid, Box
} from '@mui/material';
import PicMagnetCover from '../../Pictures/Magnet/PicMagnetCover.jpeg'
import { Link } from 'react-router-dom';

export default function ItemMagnet() {
    const value = 5;
    const price = 80;
    const formattedPrice = price.toLocaleString();

    return (
        <>
            <Link to="../ProductDetails/DetailMagnet">
                <Card style={{ width: 200, height: 400 }} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={PicMagnetCover}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Magnet
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Demon slayer magnet from BIGGA
                            </Typography>
                            <Grid container>
                                <Grid item xs={8}>
                                    <h3 style={{ color: "#0079FF" }}>Buy now</h3>
                                </Grid>
                                <Grid item xs={4}>
                                    <h3 style={{ color: "#0079FF", textAlign: 'center' }}>฿{formattedPrice}</h3>
                                </Grid>
                            </Grid>
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                            >
                                <Rating name="read-only" value={value} readOnly />
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </>
    );
}