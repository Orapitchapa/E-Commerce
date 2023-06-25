import { Grid } from "@mui/material";
import ItemBag from "../ProductItems/ItemBag";
import ItemSneaker from "../ProductItems/ItemSneaker";
import ItemStandy from "../ProductItems/ItemStandy";
import ItemTshirt from "../ProductItems/ItemTshirt";

const BestSeller = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid xs={12} sm={6} md={3}>
                    <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {<ItemBag />}
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
                        {<ItemTshirt />}
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default BestSeller;