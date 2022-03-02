<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class testimonials extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = "testimonials";

    protected $fillable = [
        'name',
        'profileImg',
        'designation',
        'descritption'
    ];

    public function scopeReverse($query){
        return $query->orderBy('id','desc');
    }
}
