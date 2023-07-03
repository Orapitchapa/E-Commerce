import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Grid, Box, MobileStepper, Paper, Typography, Button, Stack, ButtonGroup, styled,
} from "@mui/material";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PicBagBlack from "../../Pictures/Bag/PicBagBlack.jpeg"
import PicBagWhite from "../../Pictures/Bag/PicBagWhite.jpeg"

const images = [
    {
        label: 'Black',
        imgPath: PicBagBlack
    },
    {
        label: 'White',
        imgPath: PicBagWhite
    },
];
const DetailBag = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedVariation, setSelectedVariation] = React.useState('Black');
    const [count, setCount] = React.useState(0);
    const theme = useTheme();
    const maxSteps = images.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleVariationClick = (variation: string) => {
        setSelectedVariation(variation);
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const AddToCartButton = styled(Button)`
        width: 150px;
        height: 50px;
        border-radius: 50%;
`;

    return (
        <>
            <div style={{ paddingTop: 30 }}>
                <Grid container spacing={2} sx={{ paddingTop: 10 }}>
                    <Grid xs={12} sm={6} md={6} sx={{ paddingTop: 5 }}>
                        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                            <Paper
                                square
                                elevation={0}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: 50,
                                    pl: 2,
                                    bgcolor: '#F2D8D8',
                                }}
                            >
                                <Typography>{images[activeStep].label}</Typography>
                            </Paper>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 255, maxWidth: 400, width: '100%', backgroundColor: "white" }}>
                                <img style={{ height: 255 }} src={images[activeStep].imgPath} />
                            </Box>

                            <MobileStepper sx={{ bgcolor: '#F2D8D8' }}
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Next
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Back
                                    </Button>
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={6} md={6}>
                        <div>
                            <h1>Bag</h1>
                            <p>Demon slayer bag from Skechers</p>
                            <br />
                            <h3>Specification :</h3>
                            <div>
                                <p>Dimension : 180X130 cm</p>
                                <p>Weight : 380 g</p>
                                <p>Brand : Skechers</p>
                            </div>
                            <br />
                            <h3>Variation :</h3>
                            <Stack spacing={2} direction="row">
                                <Button
                                    variant="contained"
                                    color={selectedVariation === 'Black' ? 'primary' : undefined}
                                    onClick={() => handleVariationClick('Black')}
                                    sx={{
                                        backgroundColor:
                                            selectedVariation === 'Black' ? 'primary' : 'transparent',
                                        color: selectedVariation === 'Black' ?
                                            'white' : 'black',
                                    }}
                                    defaultChecked
                                >
                                    Black</Button>
                                <Button
                                    variant="contained"
                                    color={selectedVariation === 'White' ? 'primary' : undefined}
                                    onClick={() => handleVariationClick('White')}
                                    sx={{
                                        backgroundColor:
                                            selectedVariation === 'White' ? 'primary' : 'transparent',
                                        color: selectedVariation === 'White' ?
                                            'white' : 'black',
                                    }}
                                >
                                    White
                                </Button>
                            </Stack>
                            <br />
                            <Grid container>
                                <Grid md={4}>
                                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                                        <Button onClick={handleDecrement}>-</Button>
                                        <Button>{count}</Button>
                                        <Button onClick={handleIncrement}>+</Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid md={6}>
                                    <p>23 pieces available</p>
                                </Grid>
                            </Grid>
                            <div>
                                <AddToCartButton variant="contained" color="primary">
                                    Add to cart
                                </AddToCartButton>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default DetailBag;