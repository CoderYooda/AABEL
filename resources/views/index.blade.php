@extends('layouts.app')

@section('content')
<main data-component="Main">
    <!-- About -->
    <section class="about">
        <div class="container">
            <article class="about__text">
                <h2 class="about__title">
                    АА?
                </h2>

                <p class="about__description">
                    АНОНИМНЫЕ АЛКОГОЛИКИ® это Содружество, объединяющее мужчин и женщин, которые делятся друг с другом своим опытом, силами и надеждами с целью <span>помочь себе и другим</span> избавиться от алкоголизма.
                </p>

                <p class="about__description">
                    Единственное условие для членства в АА это желание <span>бросить пить</span>. Члены АА не платят ни вступительных, ни членских взносов. Мы сами себя содержим благодаря нашим добровольным пожертвованиям.
                </p>

                <p class="about__description">
                    АА не связано ни с какой сектой, вероисповеданием, политическим направлением, организацией или учреждением; стремится не вступать в полемику по каким бы то ни было вопросам, не поддерживает и не выступает против чьих бы то ни было интересов.
                </p>

                <p class="about__description">
                    Наша <span>главная цель</span> – оставаться трезвыми и помочь другим алкоголикам обрести трезвость.
                </p>
            </article>

            <picture class="about__image">
                <source
                    media="(max-width: 767px)"
                    srcset="/images/empty.jpg"
                    type="image/jpeg"    
                >
                <source
                    media="(min-width: 768px)"
                    srcset="/images/about.jpg"
                    type="image/jpeg"    
                >
                <img
                    src="/images/about.jpg"
                    alt="Люди держат друг друга за руки"
                >
            </picture>
        </div>
    </section>

    <!-- Не делаем -->
    <section class="dont-do">
        <div class="container">
            <picture class="dont-do__image">
                <source
                    media="(max-width: 767px)"
                    srcset="/images/empty.jpg"
                    type="image/jpeg"    
                >
                <source
                    media="(min-width: 768px)"
                    srcset="/images/dont-do.jpg"
                    type="image/jpeg"    
                >
                <img
                    src="/images/dont-do.jpg"
                    alt="Люди общаются сидя на стульях"
                >
            </picture>

            <article class="dont-do__text">
                <h2 class="dont-do__title">
                    АА не занимается
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

    <!-- Блог -->
    <section class="blog">
        <div class="container">
            <h2 class="blog__title">
                Блог
            </h2>

            {!!  \App\Http\Controllers\BlogController::getRandom(3) !!}
        </div>
    </section>

    <!-- Вопросы -->
    <section class="questions">
        <div class="container">
            <h2 class="questions__title">
                Вопросы
            </h2>

            <ul class="questions__list">
                <li
                    class="accordion questions__item"
                    data-accordion
                >
                    <button
                        class="accordion__control"
                        title="Раскрыть"
                        aria-label="Раскрыть ответ на вопрос"
                        data-accordion-control
                    >
                        <span>Как можно вступить в АА?</span>

                        <i class="accordion__arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="accordion_arrow">
                                <title id="accordion_arrow">Стрелка вниз</title>
                                <path d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </i>
                    </button>
                    
                    <div
                        class="accordion__content-wrapper"
                        data-accordion-content
                    >
                        <div class="accordion__content">
                            Вы становитесь членом АА, как только об этом заявите. Единственное условие для членства – это желание бросить пить. Именно "твердости" в этом вопросе многим из нас на первых порах и не хватало.
                        </div>
                    </div>
                </li>

                <li
                    class="accordion questions__item"
                    data-accordion
                >
                    <button
                        class="accordion__control"
                        title="Раскрыть"
                        aria-label="Раскрыть ответ на вопрос"
                        data-accordion-control
                    >
                        <span>Что происходит на собраниях АА?</span>

                        <i class="accordion__arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="accordion_arrow">
                                <title id="accordion_arrow">Стрелка вниз</title>
                                <path d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </i>
                    </button>
                    
                    <div
                        class="accordion__content-wrapper"
                        data-accordion-content
                    >
                        <div class="accordion__content">
                            На собраниях АА — разнообразных по форме — выступающие алкоголики рассказывают, до чего довело их пьянство, что они делали, чтобы избавиться от этого недуга, и как они живут теперь.    
                        </div>
                    </div>
                </li>

                <li
                    class="accordion questions__item"
                    data-accordion
                >
                    <button
                        class="accordion__control"
                        title="Раскрыть"
                        aria-label="Раскрыть ответ на вопрос"
                        data-accordion-control
                    >
                        <span>Как это может помочь мне бросить пить?</span>

                        <i class="accordion__arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="accordion_arrow">
                                <title id="accordion_arrow">Стрелка вниз</title>
                                <path d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </i>
                    </button>
                    
                    <div
                        class="accordion__content-wrapper"
                        data-accordion-content
                    >
                        <div class="accordion__content">
                            Члены АА вовсе не терапевты и не наркологи. Но все мы знаем, что значит пристраститься к спиртному, обещать себе и другим бросить пить и быть не в состоянии выполнить это обещание. Единственный способ, которым мы можем помочь другим исцелиться от алкоголизма — это наш собственный пример. И люди, страдающие от алкоголизма, приходя к нам видят, что мы уже бросили пить, и понимают на нашем примере, что исцелиться от алкоголизма можно.                        Члены АА вовсе не терапевты и не наркологи. Но все мы знаем, что значит пристраститься к спиртному, обещать себе и другим бросить пить и быть не в состоянии выполнить это обещание. Единственный способ, которым мы можем помочь другим исцелиться от алкоголизма — это наш собственный пример. И люди, страдающие от алкоголизма, приходя к нам видят, что мы уже бросили пить, и понимают на нашем примере, что исцелиться от алкоголизма можно.    
                        </div>
                    </div>
                </li>

                <li
                    class="accordion questions__item"
                    data-accordion
                >
                    <button
                        class="accordion__control"
                        title="Раскрыть"
                        aria-label="Раскрыть ответ на вопрос"
                        data-accordion-control
                    >
                        <span>Являюсь ли я алкоголиком?</span>

                        <i class="accordion__arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="accordion_arrow">
                                <title id="accordion_arrow">Стрелка вниз</title>
                                <path d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </i>
                    </button>
                    
                    <div
                        class="accordion__content-wrapper"
                        data-accordion-content
                    >
                        <div class="accordion__content">
                            Если вы постоянно выпиваете больше, чем собирались, если начав пить, вы не можете остановиться, если у вас на этой почве возникают неприятности или случаются провалы памяти — то вполне вероятно, что вы стали алкоголиком. Определить это сможете только вы сами. В АА за вас этого никто делать не будет.    
                        </div>
                    </div>
                </li>

                <li
                    class="accordion questions__item"
                    data-accordion
                >
                    <button
                        class="accordion__control"
                        title="Раскрыть"
                        aria-label="Раскрыть ответ на вопрос"
                        data-accordion-control
                    >
                        <span>Является ли АА религиозной организацией?</span>

                        <i class="accordion__arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="accordion_arrow">
                                <title id="accordion_arrow">Стрелка вниз</title>
                                <path d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </i>
                    </button>
                    
                    <div
                        class="accordion__content-wrapper"
                        data-accordion-content
                    >
                        <div class="accordion__content">
                            Нет. И ни с какой религиозной организацией не связано.    
                        </div>
                    </div>
                </li>

                <li
                    class="accordion questions__item"
                    data-accordion
                >
                    <button
                        class="accordion__control"
                        title="Раскрыть"
                        aria-label="Раскрыть ответ на вопрос"
                        data-accordion-control
                    >
                        <span>Что мне делать, если я обеспокоен своей склонностью к употреблению алкоголя?</span>

                        <i class="accordion__arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="accordion_arrow">
                                <title id="accordion_arrow">Стрелка вниз</title>
                                <path d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </i>
                    </button>
                    
                    <div
                        class="accordion__content-wrapper"
                        data-accordion-content
                    >
                        <div class="accordion__content">
                            Обратитесь за помощью к АА. Это может вам помочь.
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</main>
@endsection
