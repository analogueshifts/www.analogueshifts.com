<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    use \Conner\Tagging\Taggable;
    protected $fillable = ["title", "slug", "content", "thumbnail", "publish"];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}