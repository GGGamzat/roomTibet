import logo from '../assets/logo.svg';

function Header() {
    return (
        <header className="header">
			<div className="header_container">
				<img src={logo} alt="" className="logo" />
				<ul className="menu">
					<li className="item"><a href="#" className="menu__link">Главная</a></li>
					<li className="item"><a href="#" className="menu__link">Про гида</a></li>
					<li className="item"><a href="#" className="menu__link">Программа тура</a></li>
					<li className="item"><a href="#" className="menu__link">Стоимость</a></li>
					<li className="item"><a href="#" className="menu__link">Блог</a></li>
					<li className="item"><a href="#" className="menu__link">Контакты</a></li>
				</ul>
				<button className="btn">Консультация</button>
			</div>
		</header>
    );
}

export default Header;