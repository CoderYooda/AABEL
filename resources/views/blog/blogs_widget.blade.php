<ul class="blog__list">
    @foreach($blogs as $blog)
    <li class="blog__item blog__item--{{ $loop->index }} blog_{{$blog->id}}">
        <div class="blog__article-image">
            @if($blog->imageLink() != '/storage/')
                <img src="{{  $blog->imageLink() }}" alt="">
            @elseif($blog->imageLink() == '/storage/' && $blog->is_male == true)
                <img src="/images/man.png" alt="">
            @elseif($blog->imageLink() == '/storage/' && $blog->is_male == false)
                <img src="/images/woman.png" alt="">
            @endif
        </div>

        <div class="blog__content">
            <h3 class="blog__article-title blog__article-title--{{ $loop->index }}">
                {{ $blog->title }}
            </h3>

            <span
                class="blog__article-date"
                data-format-date
            >
                {{ $blog->created_at }}
            </span>
            
            <div class="blog__article-content">
                {!! $blog->content !!}
            </div>

            <a
                href="/"
                class="blog__article-link btn-filled"    
            >
                Читать
            </a>
        </div>
    </li>
    @endforeach
</ul>
