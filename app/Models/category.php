<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
class category extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = "category_tag";

    protected $primaryKey = "id";

    protected $fillable = [
        'name',
        'type',
        'logo',
        'bgcolor',
        'parent_id',
        'for'
    ];
    
    public function parent(){

        return $this->belongsTo($this,'parent_id','id');
    }

    public static function cateName($name){
        $nam = str_replace('-',' ',$name);
        return category::where('name',$nam)->pluck('id');
    }

    public function getslugIdattribute(){
        return Str::slug($this->name);
    }
    
}
