import React from 'react'
import "./Nav.css"

const Nav =()=>{
    return(
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li class="parent"><a href="#">Categotires</a>
            <ul class="child">
                <li><a href="/ViewCategories">Wedding Halls</a></li>
                <li><a href="ViewCategories">Zafeh</a></li>
                <li><a href="ViewCategories">Dj</a></li>
                <li><a href="ViewCategories">Beauty Center</a></li>
                <li><a href="ViewCategories">Flowers</a></li>
            </ul>
        </li>
       
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
    )
}
export default Nav