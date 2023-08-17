import * as React from 'react';
import { Button, ButtonGroup, Divider, Grid, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import PicCard01 from '../../Pictures/Card/PicCard01.jpeg';
import PicStandyNezuko from '../../Pictures/Standy/PicStandyNezuko.jpeg';



const DetailCart = () => {
    const [count, setCount] = React.useState(0);

    const cartData = [{
        picture: PicCard01,
        product: "Card",
        variation: "001",
        unitPrice: "฿100",
        quantity: 1,
        total: "฿100",
        // count:3
    },
    {
        picture: PicStandyNezuko,
        product: "Standy",
        variation: "Nezuko",
        unitPrice: "฿120",
        quantity: 1,
        total: "฿100",
        // count:4
    },
    ]

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };


    return (
        <>
            <h1 style={{ paddingTop: 40, textAlign: "center" }}>Cart</h1>
            <div style={{ marginLeft: 15, marginRight: 15 }}>
                        <Grid container columns={24} style={{textAlign: 'center'}}>
                            <Grid item md={4}></Grid>
                            <Grid item md={3}>
                                <p style={{fontWeight: "bold"}}>Product</p>
                            </Grid>
                            <Grid item md={3}>
                                <p style={{fontWeight: "bold"}}>Variation</p>
                            </Grid>
                            <Grid item md={4}>
                                <p style={{fontWeight: "bold"}}>Unit Price</p>
                            </Grid>
                            <Grid item md={4}>
                                <p style={{fontWeight: "bold"}}>Quantity</p>
                            </Grid>
                            <Grid item md={4}>
                                <p style={{fontWeight: "bold"}}>Total</p>
                            </Grid>
                            <Grid item md={2}>
                                <p style={{fontWeight: "bold"}}>Delete</p>
                            </Grid>
                        </Grid>
                        <Divider />
            </div>
            <div style={{ marginLeft: 15, marginRight: 15 }}>
                {cartData.map((item) => (
                    <>
                        <Grid container columns={24} style={{textAlign: 'center'}}>
                            <Grid item md={4}>
                            <img style={{ height: 80, marginTop: 6 }} src={item.picture} />
                            </Grid>
                            <Grid item md={3}>
                                <p>{item.product}</p>
                            </Grid>
                            <Grid item md={3}>
                                <p>{item.variation}</p>
                            </Grid>
                            <Grid item md={4}>
                                <p>{item.unitPrice}</p>
                            </Grid>
                            <Grid item md={4}>
                                <p>{item.quantity}</p>
                            </Grid>
                            <Grid item md={4}>
                                <ButtonGroup variant="outlined" aria-label="outlined button group" style={{marginTop:10}}>
                                    <Button onClick={handleDecrement}>-</Button>
                                    <Button>{count}</Button>
                                    {/* <Button>{item.count}</Button> */}
                                    <Button onClick={handleIncrement}>+</Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item md={2}>
                                <IconButton aria-label="delete" style={{marginTop: 10}}>
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Divider />
                    </>
                ))}
            </div>
        </>
    )
}

export default DetailCart