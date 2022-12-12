@if (count($blogs) > 0)
<ul class="blog__list">
    @foreach($blogs as $blog)
    <li class="blog__item blog__item--{{ $loop->index }} blog_{{$blog->id}}">
        <div class="blog__article-image">
            @if($blog->imageLink() != '/storage/')
                <img
                    src="{{  $blog->imageLink() }}"
                    alt="Изображение из статьи блога"
                >
            @elseif($blog->imageLink() == '/storage/' && $blog->is_male == true)
                <img
                    src="/images/man.png"
                    alt="Силуэт мужчины"
                >
            @elseif($blog->imageLink() == '/storage/' && $blog->is_male == false)
                <img
                    src="/images/woman.png"
                    alt="Силуэт женщины"
                >
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
            
            <div class="editor-content blog__article-content">
                {!! $blog->content !!}
            </div>

            <a
                href="/blog/{{ $blog->id }}/view"
                class="blog__article-link btn-filled"
                aria-label="Перейти на страницу статьи" 
            >
                Читать
            </a>
        </div>
    </li>
    @endforeach
</ul>
@else
<p class="blog__empty">
    На данный момент статей нет
</p>
@endif