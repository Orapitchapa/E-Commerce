import { Button, Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, styled } from "@mui/material"
import PicCard01 from '../../Pictures/Card/PicCard01.jpeg';
import PicStandyNezuko from '../../Pictures/Standy/PicStandyNezuko.jpeg';



const CheckOut = () => {

    const cartData = [{
        picture: PicCard01,
        product: "Card",
        variation: "001",
        unitPrice: "฿500",
        quantity: 1,
        total: "฿500",
    },
    {
        picture: PicStandyNezuko,
        product: "Standy",
        variation: "Nezuko",
        unitPrice: "฿120",
        quantity: 1,
        total: "฿120",
    },
    ]

    const PlaceOrderButton = styled(Button)`
        border-radius: 1000px;
        padding-left: 16px;
        padding-right: 16px;
    `;

    return (
        <>
            <h1 style={{ paddingTop: 40, textAlign: "center" }}>Check Out</h1>
            <div style={{ marginLeft: 15, marginRight: 15 }}>
                <Grid container columns={24} style={{ textAlign: 'center' }}>
                    <Grid item md={4}></Grid>
                    <Grid item md={4}>
                        <p style={{ fontWeight: "bold" }}>Product</p>
                    </Grid>
                    <Grid item md={3}>
                        <p style={{ fontWeight: "bold" }}>Variation</p>
                    </Grid>
                    <Grid item md={4}>
                        <p style={{ fontWeight: "bold" }}>Unit Price</p>
                    </Grid>
                    <Grid item md={4}>
                        <p style={{ fontWeight: "bold" }}>Quantity</p>
                    </Grid>
                    <Grid item md={4}>
                        <p style={{ fontWeight: "bold" }}>Total Price</p>
                    </Grid>
                </Grid>
                <Divider />
            </div>
            <div style={{ marginLeft: 15, marginRight: 15 }}>
                {cartData.map((item) => (
                    <>
                        <Grid container columns={24} style={{ textAlign: 'center' }}>
                            <Grid item xs={12} sm={6} md={4}>
                                <img style={{ height: 80, marginTop: 6 }} src={item.picture} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <p>{item.product}</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <p>{item.variation}</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <p>{item.unitPrice}</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <p>{item.quantity}</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <p>{item.total}</p>
                            </Grid>
                        </Grid>
                        <Divider />
                    </>
                ))}
            </div>
            <div style={{ marginLeft: 15, marginRight: 15 }}>
                <Grid container columns={24} style={{ textAlign: 'center' }}>
                    <Grid item md={15}></Grid>
                    <Grid item md={4}>
                        <p style={{ fontWeight: "bold" }}>Total(2items)</p>
                    </Grid>
                    <Grid item md={4}>
                        <p style={{ fontWeight: "bold" }}>฿670</p>
                    </Grid>
                </Grid>
            </div>
            <div style={{ marginLeft: 15, marginRight: 15, paddingTop: 50 }}>
                <Grid container columns={24} style={{ textAlign: 'center' }}>
                    <Grid item md={4}>Adress :</Grid>
                    <Grid item md={11}>26/07 Sukhumvit Rd, Tambon Pak Nam, Amphoe Mueang Samut Prakan, Chang Wat Samut Prakan 10270, Thailand</Grid>
                    <Grid item md={8}>
                        <Button variant="outlined">Change adress</Button>
                    </Grid>
                </Grid>
            </div>
            <div style={{ marginLeft: 15, marginRight: 15, paddingTop: 50 }}>
                <Grid container columns={24} style={{ textAlign: 'center' }}>
                    <Grid item md={4}>Payment :</Grid>
                    <Grid item md={6}>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Credit/Debit Card" />
                                <FormControlLabel value="male" control={<Radio />} label="QR Promptpat" />
                                <FormControlLabel value="other" control={<Radio />} label="Cash on Delivery" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
            <div style={{ marginLeft: 15, marginRight: 15 }}>
                <Grid container columns={24} style={{ textAlign: 'center' }}>
                    <Grid item md={13}></Grid>
                    <Grid item md={6}>
                        <p>Merchandise Subtotal :</p>
                    </Grid>
                    <Grid item md={2}>
                        <p>฿670</p>
                    </Grid>
                </Grid>
            </div>
            <div style={{ marginLeft: 15, marginRight: 15 }}>
                <Grid container columns={24} style={{ textAlign: 'center' }}>
                    <Grid item md={13}></Grid>
                    <Grid item md={6}>
                        <p>Shipping :</p>
                    </Grid>
                    <Grid item md={2}>
                        <p>฿30</p>
                    </Grid>
                </Grid>
            </div>
            <div style={{ marginLeft: 15, marginRight: 15 }}>
                <Grid container columns={24} style={{ textAlign: 'center' }}>
                    <Grid item md={13}></Grid>
                    <Grid item md={6}>
                        <p>Total payment :</p>
                    </Grid>
                    <Grid item md={2} style={{color:"#1D5D9B"}}>
                        <h3>฿700</h3>
                    </Grid>
                </Grid>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 10, paddingRight: 100 }}>
                <PlaceOrderButton variant="contained" color="primary">
                    Place order
                </PlaceOrderButton>
            </div>
        </>
    )
}

export default CheckOut