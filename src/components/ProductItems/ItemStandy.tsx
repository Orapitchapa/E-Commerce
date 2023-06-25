import {
    Card, CardContent, CardMedia, Rating,
    Typography, CardActionArea, Grid, Box
} from '@mui/material';
import PicCoverStandy from '../../Pictures/Standy/PicStandyCover.jpeg'

export default function itemStandy() {
    const value = 5;
    const price = 120;
    const formattedPrice = price.toLocaleString(); 

    return (
        <>
            <Card style={{ width: 200, height: 400 }} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={PicCoverStandy}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Standy
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Demon slayer standy from BIGGA
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
        </>
    );
}