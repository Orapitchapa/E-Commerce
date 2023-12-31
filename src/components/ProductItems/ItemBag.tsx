import {
    Card, CardContent, CardMedia, Rating,
    Typography, CardActionArea, Grid, Box
} from '@mui/material';
import PicBagCover from '../../Pictures/Bag/PicBagCover.jpeg'
import { Link } from 'react-router-dom';

export default function ItemBag() {
    const value = 5;
    const price = 1090;
    const formattedPrice = price.toLocaleString();

    return (
        <>
            <Link to="../ProductDetails/product1">
                <Card style={{ width: 200, height: 400 }} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={PicBagCover}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Bag
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Demon slayer bag from Skechers
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