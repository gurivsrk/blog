<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class team extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = "team";

    protected $primaryKey = "id";

    protected $fillable = [
        'name',
        'profileImg',
        'designation',
        'descritption',
        'order_id'
    ];
}
