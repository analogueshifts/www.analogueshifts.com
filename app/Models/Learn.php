<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Learn extends Model
{
    use HasFactory;
    use \Conner\Tagging\Taggable;
    protected $fillable = ['title', 'slug', 'tag', 'url', 'description'];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
