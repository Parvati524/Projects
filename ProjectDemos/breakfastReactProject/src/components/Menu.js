import {Link } from 'react-router-dom';
import Item from './Item';
import Menudata from './data';


const Menu = () => {
    return (

        <div>
            <div class="container">
                <div class="row myRow">
                    <div className="card-group">
                        <Item key={Menudata.entree} menuItems={Menudata}/>
                    </div>
                </div>
            </div>
            <div className="links mt-4 text-center">
                <h6>If you would like to see the homepage, click <Link to='/home'> here.</Link></h6>
                <h6>If you would like to make an order to go, click <Link to="/catering/">click here.</Link></h6>
            </div>
           
        </div>
    )
}

export default Menu;