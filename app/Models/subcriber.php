<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class subcriber extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'subscriber';

    protected $fillable = [
        'email',
        'status'
    ];

}
