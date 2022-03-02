<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class category extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = "category_tag";

    protected $primaryKey = "id";

    protected $fillable = [
        'name',
        'type',
        'logo',
        'parent_id',
        'for'
    ];
    
    public function parent(){

        return $this->belongsTo($this,'parent_id','id');
    }
    
}
