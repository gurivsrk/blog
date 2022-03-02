<?php

namespace App\Http\Controllers;

use App\Models\testimonials;
use Illuminate\Http\Request;
use App\Http\Requests\storeTestimonialRequest;
use Illuminate\Support\Facades\Storage;


class testimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $type = "index-testimonial";
        $item = testimonials::reverse()->get();
        return view('pages.testimonial',compact(['item','type']));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(storeTestimonialRequest $request)
    {
        $imgname = addMedia($request->file('profileImgT'),'testimonials');
        $request->merge(['profileImg'=>$imgname]);
        $data = $request->all();
        testimonials::create($data);
        
        return redirect()->back()->with('success','Successfully Added');
    }

 

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(testimonials $testimonial)
    {
        $type = "edit-testimonial";
        $item = testimonials::reverse()->get();
        return view('pages.testimonial',compact(['type','testimonial','item']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,testimonials $testimonial)
    {
        if($request->hasFile('profileImgT')){
            $imgname =  updateMedia($testimonial->profileImg, $request->file('profileImgT'),'testimonials');
            $request->merge(['profileImg'=>$imgname]);
        }
        $data = $request->all();
        $testimonial->update($data);
        return redirect()->route('testimonial.index')->with('update','Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(testimonials $testimonial)
    {
        $image = pathinfo($testimonial->profileImg,PATHINFO_BASENAME);
        if(Storage::delete('public/testimonials/'.$image)){
            $testimonial->delete();
             return redirect()->back()->with('success','Successfully Deleted Testimonial');
        }
        else{
             return redirect()->back()->with('delete','Fail to Delete Testimonial');
        }
    }
}
