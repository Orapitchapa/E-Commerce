import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Grid,
    Box,
    MobileStepper,
    Paper,
    Typography,
    Button,
    Stack,
    ButtonGroup,
    styled,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PicCard01 from '../../Pictures/Card/PicCard01.jpeg';
import PicCard02 from '../../Pictures/Card/PicCard02.jpeg';
import PicCard03 from '../../Pictures/Card/PicCard03.jpeg';
import PicCard04 from '../../Pictures/Card/PicCard04.jpeg';

const images = [
    {
        label: '001',
        imgPath: PicCard01,
    },
    {
        label: '002',
        imgPath: PicCard02,
    },
    {
        label: '003',
        imgPath: PicCard03,
    },
    {
        label: '004',
        imgPath: PicCard04,
    },
];

const DetailCard = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [alignment, setAlignment] = React.useState('');
    const [count, setCount] = React.useState(0);
    const [stock, setStock] = React.useState(0);
    const theme = useTheme();
    const maxSteps = images.length;

    const handleChange = (event: React.MouseEvent<HTMLElement> | null, newAlignment: string) => {
        const index = images.findIndex((image) => image.label === newAlignment);
        if (index !== -1) {
            setActiveStep(index);
        }
        console.log(event)
        setAlignment(newAlignment);

        switch (newAlignment) {
            case '001':
                setStock(stock01);
                setCount(0);
                break;
            case '002':
                setStock(stock02);
                setCount(0);
                break;
            case '003':
                setStock(stock03);
                setCount(0);
                break;
            case '004':
                setStock(stock04);
                setCount(0);
                break;
            default:
                setStock(0);
                break;
        }
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const AddToCartButton = styled(Button)`
    border-radius: 1000px;
    padding-left: 16px;
    padding-right: 16px;
    `;

    const stock01 = 10;
    const stock02 = 12;
    const stock03 = 15;
    const stock04 = 19;

    return (
        <>
            <div style={{ paddingTop: 30 }}>
                <Grid container spacing={2} sx={{ paddingTop: 10, paddingLeft: 7 }}>
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
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 255,
                                    maxWidth: 400,
                                    width: '100%',
                                    backgroundColor: 'white',
                                }}
                            >
                                <img style={{ height: 255 }} src={images[activeStep].imgPath} alt={images[activeStep].label} />
                            </Box>

                            <MobileStepper
                                sx={{ bgcolor: '#F2D8D8' }}
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                        Next
                                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                        Back
                                    </Button>
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={6} md={6} sx={{ paddingLeft: 8 }}>
                        <div>
                            <h1>Card</h1>
                            <p>Demon slayer card from BIGGA</p>
                            <br />
                            <h3>Specification :</h3>
                            <div>
                                <p>Dimension: 85X55 mm</p>
                                <p>Weight: 1 g</p>
                                <p>Brand: BIGGA</p>
                            </div>
                            <br />
                            <h3>Variation :</h3>
                            <Stack spacing={2} direction="row">
                                <ToggleButtonGroup
                                    color="primary"
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange}
                                    aria-label="Platform"
                                >
                                    {images.map((image) => (
                                        <ToggleButton key={image.label} value={image.label}>
                                            {image.label}
                                        </ToggleButton>
                                    ))}
                                </ToggleButtonGroup>
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
                                    <p>{stock} pieces available</p>
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
    );
};

export default DetailCard;
