<?php

namespace App\Http\Controllers;

use App\Models\blogs;
use App\Models\category;
use Illuminate\Http\Request;
use App\Http\Requests\StoreblogsRequest;
use App\Http\Requests\UpdateblogsRequest;
use Illuminate\Support\Facades\Storage;

class blogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $type = "index-blog";
        $item = blogs::reverse()->paginate(10);
        $catetag = category::inRandomOrder()->where('for','other')->orwhere('for','all')->get();
        return view('pages.all-blogs',compact(['catetag','item','type']));
    }

    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreblogsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreblogsRequest $request)
    {
            $imgname = addMedia($request->file('blogImage'),'blog_images');
        // $request->merge(['blogImage'=>$imgname]);
            $data = $request->all();
            $data['blogImage'] = $imgname;
            $data['tags'] = json_encode($request->tags);
            blogs::create($data);
        
        return redirect()->back()->with('success','Successfully Added');
    }

    

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\blogs  $blogs
     * @return \Illuminate\Http\Response
     */
    public function edit(blogs $blogs,$id)
    {
        $type = "edit-blog";
        $blogs = blogs::findOrFail($id);
        $item = blogs::reverse()->paginate(10);
        $catetag = category::inRandomOrder()->where('for','other')->orwhere('for','all')->get();
        return view('pages.all-blogs',compact(['catetag','type','blogs','item']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateblogsRequest  $request
     * @param  \App\Models\blogs  $blogs
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateblogsRequest $request, blogs $blogs,$id)
    {
        $blogs = blogs::findOrFail($id);
       
        $data = $request->all();

        if($request->hasFile('blogImage')){  
           $data['blogImage'] = !empty($blogs->blogImage) ? updateMedia( $blogs->blogImage, $request->file('blogImage'),'blog_images') : addMedia($request->file('blogImage'),'blog_images');;
        }
        
        $blogs->update($data);
        return redirect()->route('all-blogs.index')->with('update','Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\blogs  $blogs
     * @return \Illuminate\Http\Response
     */
    public function destroy(blogs $blog,$id)
    {
        $blogs = blogs::findOrFail($id);
        $image = pathinfo($blogs->blogImage,PATHINFO_BASENAME);
        if(Storage::delete('public/blog_images/'.$image)){
            $blogs->delete();
            return redirect()->back()->with('success','Successfully Deleted Blog');
       }
       else{
           //die('fail');
            return redirect()->back()->with('delete','Fail to Delete Blog');
       }
    }

     public function addFeatures(Request $request){
        $blog_id = str_replace('blog-','',$request->id);
         if($request->type == true){
            $f_status = false;
            echo 'remove';
         }  
         else{
            $count = blogs::where('feature_status',true)->count();
            if($count < 4){
                $f_status = true;
            }
            else{
                return false;
            }
        }
        blogs::where('id',$blog_id)->update(array('feature_status'=> $f_status));
        return true;
    }
    
}
