<?php

namespace App\Models;
use Carbon\Carbon;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class blogs extends Model
{
    use HasFactory,SoftDeletes;

        protected $table = "blog";

        protected $fillable = [
            'blogImage',
            'title',
            'sub_title',
            'categories',
            'tags',
            'post_status',
            'descritption'
        ];

        public function scopeReverse($query){
            return $query->orderBy('id','desc');
        }
        
        public function getBlogDateAttribute(){
            return date('d-M-Y h:i:sa', strtotime($this->created_at));
        }

}
