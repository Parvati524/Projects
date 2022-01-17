import { Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu.js';
import Home from './Home.js.js.js';



const Catering = () => {
    return (
        <div>
            <h1>Get in touch with us!</h1>
            <p>Please use this form to make online orders. Be sure to include your address, and we will deliver to you within 24 hours!</p>
            <form>
                <div class="mb-3">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="First Name" />
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Last Name" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email1" placeholder="name@example.com" />
                </div>


                <div class="mb-3">
                    <label for="phoneNumber" class="form-label">Enter phone number here</label>
                    <input type="text" class="form-control" id="phoneNumber" placeholder="777-777-7777" />
                </div>
                <div class="mb-3">
                    <label for="orderText" class="form-label">What would you like to order?</label>
                    <textarea class="form-control" id="orderText" rows="3"></textarea>
                </div>
                <h4>Would you like a side of fries?</h4>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="fries" id="friesYes" value="yes" />
                    <label class="form-check-label" for="friesYes">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="fries" id="friesNo" value="no" />
                    <label class="form-check-label" for="friesNo">No</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="fries" id="friesSurprise" value="surprise" />
                    <label class="form-check-label" for="friesSurprise">Surprise Me </label>
                </div>
            </form>
            
            <div className="links mt-4 text-center">
            <h6>If you would like to see the homepage, click <Link to='/home'> here.</Link></h6>
            <h6>If you would like to see the menu, click <Link to="/menu">click here.</Link></h6>
            </div>
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
            </Routes>
        </div>

    )
}

export default Catering;