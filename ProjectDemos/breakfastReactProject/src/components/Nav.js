import {Link} from 'react-router-dom';


const Nav = () => {

return(
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/home" class="navbar-brand">Brunch Cafe</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home" class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/menu" class="nav-link">Menu</Link>
        </li>
        <li class="nav-item">
          <Link to="/catering" class="nav-link">Catering</Link>
        </li>
      </ul>
    </div>
  </div>
  </nav>

</div>
)
}

export default Nav;