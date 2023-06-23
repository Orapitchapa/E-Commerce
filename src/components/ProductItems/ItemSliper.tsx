import {
    Card, CardContent, CardMedia, Rating,
    Typography, CardActionArea, Grid, Box
} from '@mui/material';
import PicCoverSliper from '../../Pictures/Sliper/PicCoverSliper.jpeg'

export default function ItemSliper() {
    const value = 5;
    const price = 1200;
    return (
        <>
            <Card style={{ width: 200, height: 400 }} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={PicCoverSliper}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Sliper
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Demon slayer sliper from Skechers
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