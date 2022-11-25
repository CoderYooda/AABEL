@extends('layouts.app')

@section('content')
<section data-component="Main">
    <h2>Блоги</h2>
    
    <div
        id="slider"
        class="portfolio__slider swiper"
    >
        {!!  \App\Http\Controllers\BlogController::getRandom(3) !!}
        
        <!-- Buttons -->
        <div class="portfolio__buttons">
            <button
                class="portfolio__button portfolio__button-prev swiper-button-prev"
                aria-label="Предыдущий слайд"    
            ></button>
            
            <button
                class="portfolio__button portfolio__button-next swiper-button-next"
                aria-label="Следующий слайд"    
            ></button>
        </div>
    </div>

</section>

@endsection



   
