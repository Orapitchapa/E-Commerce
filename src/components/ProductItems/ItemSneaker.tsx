import {
    Card, CardContent, CardMedia, Rating,
    Typography, CardActionArea, Grid, Box
} from '@mui/material';
import PicCoverSneaker from '../../Pictures/Sneaker/PicCoverSneaker.jpeg'

export default function ItemSneaker() {
    const value = 5;
    const price = 3400;
    return (
        <>
            <Card style={{ width: 200, height: 400 }} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={PicCoverSneaker}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Sneaker
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Demon slayer sneaker from Skechers
                        </Typography>
                        <Grid container>
                            <Grid item xs={8}>
                                <h3 style={{ color: "#0079FF" }}>Buy now</h3>
                            </Grid>
                            <Grid item xs={4}>
                                <h3 style={{ color: "#0079FF", textAlign: 'center' }}>฿{price}</h3>
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
        </>
    );
}