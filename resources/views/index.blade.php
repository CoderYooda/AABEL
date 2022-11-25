@extends('layouts.app')

@section('content')
<main data-component="Main">
    <section class="about">
        <div class="container">
            <article class="about__text">
                <h2 class="about__title">О нас</h2>

                <p class="about__description">
                    АНОНИМНЫЕ АЛКОГОЛИКИ®  это Содружество, объединяющее мужчин и женщин, которые делятся друг с другом своим опытом, силами и надеждами с целью помочь себе и другим избавиться от алкоголизма.
                    Единственное условие для членства в АА это желание бросить пить. Члены АА не платят ни вступительных, ни членских взносов. Мы сами себя содержим благодаря нашим добровольным пожертвованиям.
                    АА не связано ни с какой сектой, вероисповеданием, политическим направлением, организацией или учреждением; стремится не вступать в полемику по каким бы то ни было вопросам, не поддерживает и не выступает против чьих бы то ни было интересов.
                    Наша главная цель – оставаться трезвыми и помочь другим алкоголикам обрести трезвость.
                </p>
            </article>

            <div class="about__image">
                <img src="/images/no-image.svg" alt="">
            </div>
        </div>
    </section>

    <section class="dont-do">
        <div class="container">
            <div class="dont-do__image">
                <img src="/images/no-image.svg" alt="">
            </div>

            <article class="dont-do__text">
                <h2 class="dont-do__title">
                    Чем не занимается АА
                </h2>

                <ol class="dont-do__list">
                    <li class="dont-do__item">
                        Не агитирует никого вступать в АА и не пытается убеждать алкоголиков стремиться к выздоровлению
                    </li>

                    <li class="dont-do__item">
                        Не ведет учета своих членов или их историй болезни
                    </li>

                    <li class="dont-do__item">
                        Не контролирует своих членов и не следит за ними
                    </li>

                    <li class="dont-do__item">
                        Не ставит медицинских и психиатрических диагнозов, не делает прогнозов
                    </li>

                    <li class="dont-do__item">
                        Не предоставляет госпитализации, лекарств или иного медицинского или психиатрического лечения
                    </li>

                    <li class="dont-do__item">
                        Не обеспечивает жилищем, питанием, одеждой, работой, деньгами или прочими бытовыми благами
                    </li>

                    <li class="dont-do__item">
                        Не дает консультаций по семейным вопросам и по проблемам трудовой занятости
                    </li>

                    <li class="dont-do__item">
                        Не участвует в исследованиях и не выступает их спонсором
                    </li>

                    <li class="dont-do__item">
                        Не присоединяется к общественным организациям (несмотря на то, что многие члены и службы АА сотрудничают с ними)
                    </li>

                    <li class="dont-do__item">
                        Не предлагает никаких религиозных обрядов
                    </li>

                    <li class="dont-do__item">
                        Не вступает в полемику ни по проблеме алкоголизма, ни по каким-либо другим
                    </li>

                    <li class="dont-do__item">
                        Не принимает никакой платы за свои услуги и пожертвований из посторонних источников
                    </li>

                    <li class="dont-do__item">
                        Не выдает характеристик для предоставления комиссиям по условно-досрочному освобождению, адвокатам, работникам суда, школам, коммерческим организациям, социальным службам или каким бы то ни было другим учреждениям
                    </li>
                </ol>
            </article>
        </div>
    </section>

    <section class="blog">
        <div class="container">
            <h2>Блог</h2>

            <div
                id="slider"
                class="blog__slider swiper"
            >
                {!!  \App\Http\Controllers\BlogController::getRandom(3) !!}
                
                <!-- Buttons -->
                <div class="blog__buttons">
                    <button
                        class="blog__button blog__button-prev swiper-button-prev"
                        aria-label="Предыдущий слайд"    
                    ></button>
                    
                    <button
                        class="blog__button blog__button-next swiper-button-next"
                        aria-label="Следующий слайд"    
                    ></button>
                </div>
            </div>
        </div>
        

    </section>
</main>
@endsection



   
