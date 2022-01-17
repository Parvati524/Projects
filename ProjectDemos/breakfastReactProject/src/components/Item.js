
const Item = (props) => {
   let menuItems = props.menuItems
    return (
        menuItems.map(item => 
          
           <div className="card mx-3 col-xs-12 col-sm-6 col-md-4 rounded shadow bg-body border-dark">
                <img className="menuImg" src={item.src} class="card-img-top" alt={item.entree}></img>
                <div class="card-body">
                    <h5 class="card-title">{item.entree}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{item.price}</h6>
                    <p class="card-text">{item.description}</p>
                </div>
            </div>
    ))
}

export default Item;