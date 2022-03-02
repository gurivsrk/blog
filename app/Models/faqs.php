<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class faqs extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'faqs';

    protected $fillable = [
        "question", 
        "answer",
        "category_id"
    ];

    public function category(){
        return $this->belongsTo('App\Models\category','category_id','id');
    }
}
