import { Link } from 'react-router-dom';
import Brunch from '../assets/brunch.jpg'


let Home = () => {
    return (
        <div>
            
            <h1 className="text-center">Welcome to the Brunch Cafe Website</h1>
            <img className="homeImg"src={Brunch} alt="lovely brunch food" />
            <div className="mx-3">
                <h3 className="text-center">Our Cafe serves simply the best food you will taste. We guarantee it!</h3>
                <p>The Brunch Cafe was established in 2001 with one goal in mind:to serve our customers the finest breakfast food in the world. It is our profound belief that food should be delicious and good for you.</p>
                <p>You want eggs? We got it. You want coffee? We got it. We promise that we'll never cut corners or compromise on quality. We are also extremely proud of our wide selection of pastries.Our chef wakes up every morning at 2 am to make our baked goods from scratch. He literally sleeps only 3 or 4 hours a night!With every bite into our croissants and muffins, you'll taste a difference that sets us apart from our competitors. Trust us, you'll never go anywhere else! </p>
                <p>If you're not completely satisfied with our food, you don't have to pay. (Just don't leave a negative review on Yelp. We'll sue.) </p>
            </div>
            <div className="links mt-4 text-center">
                <h6>If you would like to see the menu, click <Link to='/menu/'> here.</Link></h6>
                <h6>If you would like to make an order to go, click <Link to="/catering/">click here.</Link></h6>
            </div>

        </div>
    )
}

export default Home;