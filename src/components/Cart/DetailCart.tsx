import * as React from 'react';
import { Button, ButtonGroup, Divider, Grid, IconButton, styled } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import PicCard01 from '../../Pictures/Card/PicCard01.jpeg';
import PicStandyNezuko from '../../Pictures/Standy/PicStandyNezuko.jpeg';
import { Link } from 'react-router-dom';



const DetailCart = () => {
    const [count, setCount] = React.useState(0);

    const cartData = [{
        picture: PicCard01,
        product: "Card",
        variation: "001",
        unitPrice: "฿500",
        quantity: 1,
        total: "฿500",
        count:1
    },
    {
        picture: PicStandyNezuko,
        product: "Standy",
        variation: "Nezuko",
        unitPrice: "฿120",
        quantity: 1,
        total: "฿120",
        count:1
    },
    ]

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const CheckOutButton = styled(Button)`
        border-radius: 1000px;
        padding-left: 16px;
        padding-right: 16px;
    `;

    return (
        <>
            <h1 style={{ paddingTop: 40, textAlign: "center" }}>Cart</h1>
            <div style={{ marginLeft: 15, marginRight: 15 }}>
                <Grid container columns={24} style={{ textAlign: 'center' }}>
                    <Grid item md={4}></Grid>
                    <Grid item md={3}>
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
                    <Grid item md={2}>
                        <p style={{ fontWeight: "bold" }}>Delete</p>
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
                            <Grid item xs={12} sm={6} md={3}>
                                <p>{item.product}</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <p>{item.variation}</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <p>{item.unitPrice}</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <ButtonGroup variant="outlined" aria-label="outlined button group" style={{ marginTop: 10 }}>
                                    <Button onClick={handleDecrement}>-</Button>
                                    <Button>{count}</Button>
                                    <Button onClick={handleIncrement}>+</Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <p>{item.total}</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2}>
                                <IconButton aria-label="delete" style={{ marginTop: 10 }}>
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Divider />
                    </>
                ))}
            </div>
            <div style={{ marginLeft: 15, marginRight: 15 }}>
                <Grid container columns={24} style={{ textAlign: 'center' }}>
                    <Grid item md={4}></Grid>
                    <Grid item md={3}></Grid>
                    <Grid item md={3}></Grid>
                    <Grid item md={4}>
                        <p style={{ fontWeight: "bold" }}>Total</p>
                    </Grid>
                    <Grid item md={4}>
                        <p style={{ fontWeight: "bold" }}>2</p>
                    </Grid>
                    <Grid item md={4}>
                        <p style={{ fontWeight: "bold" }}>฿670</p>
                    </Grid>
                    <Grid item md={2}></Grid>
                </Grid>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 10,paddingRight:100 }}>
                <Link to="/Cart/DetailCart/CheckOut">
                    <CheckOutButton variant="contained" color="primary">
                        Check out
                    </CheckOutButton>
                </Link>
            </div>
        </>
    )
}

export default DetailCart