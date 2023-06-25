import { Grid } from "@mui/material";
import ItemBag from "../ProductItems/ItemBag";
import ItemCard from "../ProductItems/ItemCard";
import ItemMagnet from "../ProductItems/ItemMagnet";
import ItemSliper from "../ProductItems/ItemSliper";
import ItemSneaker from "../ProductItems/ItemSneaker";
import ItemStandy from "../ProductItems/ItemStandy";
import ItemSticker from "../ProductItems/ItemSticker";
import ItemTshirt from "../ProductItems/ItemTshirt";

const Products = () => {
    return (
        <div style={{ paddingTop: 50}}>
            <h1>All items✨</h1>
            <Grid container spacing={2}>
                <Grid xs={12} sm={6} md={3}>
                    <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {<ItemBag />}
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={3}>
                    <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {<ItemCard />}
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={3}>
                    <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {<ItemMagnet />}
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={3}>
                    <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {<ItemSliper />}
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={3}>
                    <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {<ItemSneaker />}
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={3}>
                    <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {<ItemStandy />}
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={3}>
                    <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {<ItemSticker />}
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={3}>
                    <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {<ItemTshirt />}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Products;