<?php

namespace App\Http\Controllers;

use App\Models\category;
use Illuminate\Http\Request;
use App\Http\Requests\storeCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Support\Facades\Storage;

class CategoryTagContoller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = category::all();
        return view('pages.form-category',compact('category'));
    }
 
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(storeCategoryRequest $request)
    {
            $data = $request->all();
      
            if($request->file('logo')){
                $imgname = addMedia($request->file('logo'),'logos');
                $data['logo'] = $imgname; 
            }    
            category::create($data);

            return redirect()->back()->with('success','Successfully Added');
       
    }
   
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(category $category,$id)
    {
        $type = 'edit-catetag';
        $category = category::all();
        $cateUpdate = category::findOrFail($id);
        return view('pages.form-category',compact(['cateUpdate','category','type']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request, category $category,$id)
    {
            $category = category::findOrFail($id);
            $data = $request->all();
            if($request->hasFile('logo')){
                $data['logo'] =  updateMedia( $category->logo ,$request->file('logo'),'logos');
            }
            $category->update($data);
            
            return redirect()->route('cateTag.index')->with('update','Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(category $category,$id)
    {
        $category = category::findOrFail($id);

        if(empty($category->logo)){
            $category->delete();
        }
        else{
            $image = pathinfo($category->logo,PATHINFO_BASENAME);
            if(Storage::delete('public/logos/'.$image)){
                $category->delete();
            }
            else {
                return redirect()->back()->with('delete','Fail to delete');
            }
    
        }
        return redirect()->back()->with('success','Deleted Successfully');
    }

}
