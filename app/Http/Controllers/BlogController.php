<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api',  ['except' => ['get']]);
    }

    public function index()
    {
        $blogs = [
            'test' => 'Название'
        ];

        return view('index', ['blogs' => $blogs]);
    }

    public static function getRandom($count)
    {
        $blogs = Blog::inRandomOrder()->limit($count)->get();

        return view('blog.blogs_widget')->with('blogs', $blogs)->render();
    }

    public function get()
    {
        $blogs = Blog::paginate(request('per_page') ?? 10);

        return request()->wantsJson() ? $blogs->toJson() : view('blog.list')->with('blogs', $blogs);
    }

    public function view($id)
    {
        $blog = Blog::where('id', $id)->first() ?? abort(404);

        return request()->wantsJson() ? $blog->toJson() : view('blog.view')->with('blog', $blog);
    }

    public function delete()
    {
        $validated = $this->validate(request(), [
            'id' => 'required|exists:blog,id',
        ]);

        $blogs = Blog::whereId($validated['id'])->delete();

        return response()->json([
            'status' => 'OK',
            'message' => 'успешно удалено'
        ]);
    }

    public function update()
    {
        $validated = $this->validate(request(), [
            'id' => 'required|exists:blog,id',
            'title' => 'required',
            'content' => 'required',
            'seo_title' => 'required',
            'seo_description' => 'required',
        ]);
        unset($validated['id']);

        $path = null;

        if (request()->hasFile('image')) {
            $fileExtension = request()->file('image')->getClientOriginalName();
            $file = pathinfo($fileExtension, PATHINFO_FILENAME);
            $extension = request()->file('image')->getClientOriginalExtension();
            $fileStore = $file . '_' . time() . '.' . $extension;
            $path = request()->file('image')->storeAs('photos', $fileStore);
            $validated = array_merge($validated, ['image' => $path]);
        }

        Blog::whereId(request('id'))->update(array_merge($validated, ['image' => $path, 'is_male' => request('is_male')]));

        return response()->json([
            'status' => 'OK',
        ]);
    }

    public function store()
    {
        $validated = $this->validate(request(), [
            'title' => 'required',
            'content' => 'required',
            'seo_title' => 'required',
            'seo_description' => 'required',
        ]);

        $path = null;

        if (request()->hasFile('image')) {
            $fileExtension = request()->file('image')->getClientOriginalName();
            $file = pathinfo($fileExtension, PATHINFO_FILENAME);
            $extension = request()->file('image')->getClientOriginalExtension();
            $fileStore = $file . '_' . time() . '.' . $extension;
            $path = request()->file('image')->storeAs('photos', $fileStore);
        }

        $blog = new Blog(array_merge($validated, ['is_male' => request('is_male')]));
        $blog->image = $path;
        $blog->save();

        return response()->json([
            'status' => 'OK',
            'id' => $blog->id
        ]);
    }
}
