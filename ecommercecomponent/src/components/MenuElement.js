const MenuElement = ({menu}) => (
    <div className="menu__element">
        <div className="menu__element--image">
            <img src={menu.image} alt={menu.name} />
        </div>
        <div className="menu__element--side">
            <div className="menu__element--title">{menu.name}</div>
            <div className="menu__element--price">$ {menu.price}</div>
            <button className="menu__element--add">To Cart</button>
        </div>
    </div>
)

export default MenuElement