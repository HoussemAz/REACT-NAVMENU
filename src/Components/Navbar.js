import React from 'react';
import "./style.css"

function Navbar (props){
    return (
    <div>
<ul className='big-list'>{props.list.map(el=><li className={el.couleur}>{el.titel}<ul className='nano-list'>{el.submenu&&el.submenu.map(el=><li className='down-list'>{el}</li>)}</ul></li>)
}
</ul></div>);
}
export default Navbar;
