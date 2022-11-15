<?php

namespace App\Http\Controllers;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index()
    {
        $blogs = [
            'test' => 'Название'
        ];

        return view('index', ['blogs' => $blogs]);
    }
}
