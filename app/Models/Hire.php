<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hire extends Model
{
    use HasFactory;
    use \Conner\Tagging\Taggable;
    protected $fillable = ["slug", "user_id", "display", "status", "role", "hire_type", "range", "experience", "duration", "application", "description"];

    public function user(){
        return $this->belongsTo('App\Models\User');
    }
}
