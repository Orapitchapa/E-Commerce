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
import productDetailJson from "../../components/ProductDetails/ProductDetail.json";

const productData = productDetailJson[6];
const productName = productData.name;
const productDescription = productData.description;
const productSpecification = productData.specification;
const productVariations = productData.variation;
const images = productVariations.map(variation => ({
    label: variation.label,
    imgPath: variation.pic,
}));

const DetailSticker = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [alignment, setAlignment] = React.useState('');
    const [count, setCount] = React.useState(0);
    const [stock, setStock] = React.useState(0);
    const [selectedPrice, setSelectedPrice] = React.useState(0);
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
            case 'Tanjiro':
                setStock(stockTan);
                setCount(0);
                setSelectedPrice(priceTan);
                break;
            case 'Nezuko':
                setStock(stockNez);
                setCount(0);
                setSelectedPrice(priceNez);
                break;
            case 'Zenitsu':
                setStock(stockZen);
                setCount(0);
                setSelectedPrice(priceZen);
                break;
            case 'Inosuke':
                setStock(stockIno);
                setCount(0);
                setSelectedPrice(priceIno);
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

    const stockTan = productVariations.find(variation => variation.label === 'Tanjiro')?.stock || 0;
    const stockNez = productVariations.find(variation => variation.label === 'Nezuko')?.stock || 0;
    const stockZen = productVariations.find(variation => variation.label === 'Zenitsu')?.stock || 0;
    const stockIno = productVariations.find(variation => variation.label === 'Inosuke')?.stock || 0;

    const priceTan = productVariations.find(variation => variation.label === 'Tanjiro')?.price || 0;
    const priceNez = productVariations.find(variation => variation.label === 'Nezuko')?.price || 0;
    const priceZen = productVariations.find(variation => variation.label === 'Zenitsu')?.price || 0;
    const priceIno = productVariations.find(variation => variation.label === 'Inosuke')?.price || 0;

    const totalCost = count * selectedPrice;
    const formattedTotalCost = totalCost.toLocaleString();

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
                            <h1>{productName}</h1>
                            <p>{productDescription}</p>
                            <br />
                            <h3>Specification :</h3>
                            <div>
                                <p>Size: {productSpecification.size}</p>
                                <p>Weight: {productSpecification.weight}</p>
                                <p>Brand: {productSpecification.brand}</p>
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
                                <Grid md={2}>
                                    <p>Quantity:</p>
                                </Grid>
                                <Grid md={4}>
                                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
                                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                                            <Button onClick={handleDecrement}>-</Button>
                                            <Button>{count}</Button>
                                            <Button onClick={handleIncrement}>+</Button>
                                        </ButtonGroup>
                                    </div>
                                </Grid>
                                <Grid md={5}>
                                    <p>{stock} pieces available</p>
                                </Grid>
                            </Grid>
                            <div>
                                <h3 style={{ color: theme.palette.primary.main }}>Price: {formattedTotalCost} ฿</h3>
                            </div>
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

export default DetailSticker;
