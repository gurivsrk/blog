<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

///// Frontend Group 
Route::group(['as' => 'frontend.', 'namespace' => 'frontend'], function () {

	 Route::get('/', [App\Http\Controllers\frontend\homeController::class, 'index'])->name('index');
	 	
	 /// blog
	Route::get('/all-blog', [App\Http\Controllers\frontend\homeController::class, 'about'])->name('all-blog');

});


//////// Admin group

Auth::routes();

Route::get('/vsrk-admin', 'App\Http\Controllers\HomeController@index')->name('vsrkAdmin')->middleware('auth');

Route::group(['middleware' => 'auth'], function () {

	///Other Common Functions
	Route::post('vsrk-admin/change-order',  'App\Http\Controllers\imageController@changeF')->name('vsrk-admin.changeOrder');
	Route::post('vsrk-admin/get-category',  'App\Http\Controllers\imageController@getCategoryF')->name('getCategory');
	
	/// Blog
	Route::resource('vsrk-admin/all-blogs',  'App\Http\Controllers\blogController');

	/// Categories And Tags
	Route::resource('vsrk-admin/cateTag',  'App\Http\Controllers\CategoryTagContoller');

	/// Team
	Route::resource('vsrk-admin/team', 'App\Http\Controllers\TeamController');
	
	/// testimonials
	Route::resource('vsrk-admin/testimonial', 'App\Http\Controllers\testimonialController');

	
	///// Form
	Route::resource('vsrk-admin/forms', 'App\Http\Controllers\FormController');
	
	///// Career
	Route::resource('vsrk-admin/career', 'App\Http\Controllers\CareerContoller');

	///// Static Pages
	Route::resource('vsrk-admin/staticPages', 'App\Http\Controllers\staticPagesContoller')->only([
		'edit','update'
	]);
	
	///// Faqs
	Route::resource('vsrk-admin/faqs', 'App\Http\Controllers\faqsController');
	
	Route::resource('vsrk-admin/user', 'App\Http\Controllers\UserController', ['except' => ['show']]);
	Route::get('vsrk-admin/profile', ['as' => 'profile.edit', 'uses' => 'App\Http\Controllers\ProfileController@edit']);
	Route::get('vsrk-admin/profile/{userId}/edit', 'App\Http\Controllers\ProfileController@editO')->name('profile.otherEdit');
	Route::put('vsrk-admin/profile', ['as' => 'profile.update', 'uses' => 'App\Http\Controllers\ProfileController@update']);
	Route::put('vsrk-admin/profile/password', ['as' => 'profile.password', 'uses' => 'App\Http\Controllers\ProfileController@password']);
});

