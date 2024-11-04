
import formkit_date from '../assets/icons/formkit_date.svg';
import arrow_down from '../assets/icons/arrow_down.svg';
import main_img from '../assets/main_img.jpg';
import img_1 from '../assets/1.png';
import img_2 from '../assets/2.png';

function Main() {
    return (
        <main class="main">
			<div class="main_container">
				<div class="main-block">
					<div class="main-block__container">
						<div class="main-block__body">
							<h1 class="main-block__title">НАСЛАДИСЬ ПРОГУЛКОЙ В ГОРАХ<br/> С КОМАНДОЙ ЕДИНОМЫШЛЕННИКОВ</h1>
							<div class="main-block__form">
								<div class="main-block__form__container">
									<div class="main-block__form-block">
										<div class="main-block__form-field">
											<span class="form-field__name">Локации для тура</span>
											<img src={arrow_down} alt="" />
										</div>
										<span class="main-block__form-label">выберите из списка</span>
									</div>
									<div class="main-block__form-block">
										<div class="main-block__form-field">
											<span class="form-field__name">Дата похода</span>
											<img src={formkit_date} alt="" />
										</div>
										<span class="main-block__form-label">укажите диапазон</span>
									</div>
									<div class="main-block__form-block">
										<div class="main-block__form-field">
											<span class="form-field__name">Участники</span>
											<img src={arrow_down} alt="" />
										</div>
										<span class="main-block__form-label">минимум 4 человека</span>
									</div>
									<button>Найти программу</button>
								</div>
							</div>
						</div>
					</div>
					<div class="main-block__image">
						<img src={main_img} alt="" />
					</div>
				</div>

				<section class="section-1">
					<div class="section-1_container">
						<div class="section-1__block-left">
							<img class="section-1__img-1" src={img_1} alt="" />
							{/* <img class="section-1__img-1" src="./src/img/1.png" alt="" /> */}
							<img class="section-1__img-2" src={img_2} alt="" />
						</div>
						<div class="section-1__block-right">
							<span class="label-section">о нашем походе</span>
							<h3>Исследуйте все горные массивы мира вместе с нами</h3>
							<p>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.</p>
							<button class="btn">Программа тура</button>
						</div>
					</div>
				</section>
			</div>
		</main>
    );
}

export default Main;