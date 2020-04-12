import React from 'react';
import s from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import {AppState} from "../../redux/store";


const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className="container">
                <div className={s.navbarWrapper}>
                    <NavLink to='/' className={s.mainLogo}>
                        MarketShop
                    </NavLink>
                    <div className={s.navbarMainLinks}>
                        <NavLink to='/store'>Список товаров</NavLink>
                    </div>


                    <div className={s.navbarSearch}>Поиск</div>

                    <div className={s.navbarControls}>
                        <NavLink to='/store' className={s.wishlist}>Список желаний</NavLink>
                        <NavLink to='/store' className={s.basket}>Корзина</NavLink>
                        <NavLink to='/store' className={s.account}>Аккаунт</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}


let mapStateToProps = (state: AppState) => {
    return {

    }
}

export default connect(mapStateToProps, {})(Navbar);
