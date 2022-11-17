<div>
    @foreach($blogs as $blog)
    <div class="blog_{{$blog->id}}">
        <img style="max-width: 200px" src="{{ $blog->imageLink() }}" alt="">
        <div>{{ $blog->title }}</div>
        <div>{{ $blog->content }}</div>
    </div>
    @endforeach
</div>
