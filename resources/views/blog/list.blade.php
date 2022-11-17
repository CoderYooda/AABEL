<div>
    @foreach($blogs as $blog)
    <div class="blog_{{$blog->id}}">
        <div>{{ $blog->title }}</div>
        <div>{{ $blog->content }}</div>
    </div>
    @endforeach
    <div class="pagination">
        @foreach($blogs->links()->elements[0] as $page => $link)
            <div class="page">
                <a class="{{ request('page') == $page ? 'active' : null }}" href="{{ $link }}">{{ $page }}</a>
            </div>
        @endforeach
    </div>
</div>
