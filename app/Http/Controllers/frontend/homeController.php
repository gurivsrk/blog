<?php

namespace App\Http\Controllers\frontend;

use App\Models\staticPages;
use App\Models\team;
use App\Models\blogs;
use App\Models\category;
use App\Models\faqs;
use App\Models\career;
use App\Models\testimonials;
use App\models\subcriber;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class homeController extends Controller
{
     

    public function index(){

        $featured_blog = blogs::select('id','title','blogImage','created_at','categories','feature_status')
                        ->Enabled()->orderBy('feature_status','desc')->reverse()->get()->take(4);
        $blogs = blogs::select('id','title','blogImage','created_at','categories','tags')->reverse()->Enabled()->get();
        $category = category::select('name','id','logo','bgcolor')->where('type','category')
                    ->where(function($query){ $query->where('for','all')->orWhere('for','other'); })->get()->take(6);
        return view('frontend.index',compact(['blogs','featured_blog','category']));
    }

 ////// blog page
    public function all_blogs(){
        $all_blogs = blogs::reverse()->Enabled()->get();
        return view('frontend.all-blogs',compact(['all_blogs']));
    }

    public function serach_by_cate($cate){
        $cate_id = category::cateName($cate);
        $all_blogs = blogs::select('id','title','blogImage','categories')->where('categories',$cate_id)->Enabled()->reverse()->get();
        return view('frontend.all-blogs',compact(['all_blogs']));
    }
    
    public function single_blog($id,$slug){
        $blog = blogs::findOrFail($id);
        if(Str::slug($blog->title)  != $slug){
            abort(404);
        }
        $latest = blogs::recentPost($blog->id);
        $all_blogs = blogs::reverse()->Enabled()->get();
        return view('frontend.blog-page',compact(['all_blogs','blog','latest']))->withShortcodes();
    }


 ////// unsubscribe page
    public function unsubscribe($email){
       echo 'unscribe successfully';
    }

}
