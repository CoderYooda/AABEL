<div class="portfolio__wrapper swiper-wrapper">
    @foreach($blogs as $blog)
    <div class="portfolio__slide swiper-slide blog_{{$blog->id}}">
        <img style="max-width: 200px" src="{{ $blog->imageLink() != '/storage/' ? $blog->imageLink() : '/images/no-image.svg' }}" alt="">
        <div>{{ $blog->title }}</div>
        <div>{!! $blog->content !!}</div>

        
    </div>
    @endforeach
</div>
