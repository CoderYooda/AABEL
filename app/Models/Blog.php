<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Blog extends Model
{
    protected $guarded = [];

    protected $table = 'blog';

    public function imageLink()
    {
        return '/storage/' . $this->image;
    }
}
