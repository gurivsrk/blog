<?php

namespace App\Models;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\category;
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
        
        public function scopeEnabled($query){
            return $query->where('post_status','enabled');
        }
        
        public function getBlogDateAttribute(){
            return date('F d, Y', strtotime($this->created_at));
        }

        public function getslugAttribute(){
            return Str::slug($this->title);
        }

        public function getcateSlugAttribute(){
            return Str::slug($this->CatName->name);
        }

        public function CatName(){
            return $this->belongsTo('App\Models\category','categories','id');
        }
        
        public static function tagName($id){
            return category::select('name')->where('id',$id)->get()->first();
        }

        public static function recentPost($id){
            $blog = blogs::select('id', 'title', 'blogImage', 'created_at', 'categories', 'feature_status')->get()->last(); 
            if($blog->id == $id){
                $blog  =  blogs::select('id', 'title', 'blogImage', 'created_at', 'categories', 'feature_status')->where('id',--$id)->get()->first();
            }
            return $blog;
        }
}
