import PicPromotion from '../../Pictures/PicPromotion.jpeg'
import BestSeller from './BestSeller'

const Home = () => {
    
    return (
        <>
            <img src={PicPromotion} alt="Logo" style={{width:'100%',paddingRight:'10px',paddingTop:'50px'}} />
            <h1>Best Seller</h1>
            <BestSeller/>
        </>
    )
}

export default Home;