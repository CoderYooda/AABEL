@extends('layouts.app')

@section('content')
<main>
    <section class="article article_{{$blog->id}}">
        <div class="container">
            <h1 class="article__title">
                {{ $blog->title }}
            </h1>
            
            <div class="article__img">
                @if ($blog->image)
                <img
                    src="/storage/{{ $blog->image }}"
                    alt="Изображение к статье"
                ></img>
                @elseif (!$blog->image && $blog->is_male)
                <img
                    src="/images/man.png"
                    alt="Мужчина"    
                ></img>
                @elseif (!$blog->image && !$blog->is_male)
                <img
                    src="/images/woman.png"
                    alt="Женщина"
                ></img>
                @endif
            </div>
    
            <div class="editor-content article__content">
                {!! $blog->content !!}
            </div>
        </div>
    </section>
</main>
@endsection
