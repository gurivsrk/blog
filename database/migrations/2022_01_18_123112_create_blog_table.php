<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog', function (Blueprint $table) {
            $table->id();
            $table->string('title',100);
            $table->string('sub_title',200)->nullable();
            $table->string('blogImage',300);
            $table->bigInteger('categories');
            $table->text('tags');
            $table->longText('descritption');
            $table->enum('post_status',['enabled','disabled']);
            $table->boolean('feature_status');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blog');
    }
}
