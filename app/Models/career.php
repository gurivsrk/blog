<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class career extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'career';

    protected $fillable = [
        "vacany_name", 
        "num_of_post",
        "category_id" ,
        "descritption",
        "post_status" 
    ];

    public function cateName(){
        return $this->belongsTo('App\Models\category','category_id','id');
    }

}
