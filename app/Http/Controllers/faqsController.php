<?php

namespace App\Http\Controllers;

use App\Models\faqs;
use App\Models\category;
use App\Http\Requests\StorefaqsRequest;
use App\Http\Requests\UpdatefaqsRequest;

class faqsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        $item = faqs::all();
        $category = category::where('for','faqs')->orwhere('for','all')->get();

      return view('pages.faq',compact(['item','category']));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorefaqsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorefaqsRequest $request)
    {
        $data = $request->all();
        faqs::create($data);

        return redirect()->back()->with('success','Successfully added Faq');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\faqs  $faqs
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $faqs = faqs::findOrFail($id);
        $item = faqs::all();
        $category = category::where('for','faqs')->orwhere('for','all')->get();
        $type = 'edit-faqs';

      return view('pages.faq',compact(['faqs','category','item','type']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatefaqsRequest  $request
     * @param  \App\Models\faqs  $faqs
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatefaqsRequest $request,$id)
    {
        $faqs = faqs::findOrFail($id);
        $data = $request->all();
        echo $faqs->update($data);

        return redirect()->route('faqs.index')->with('update', 'Successfull Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\faqs  $faqs
     * @return \Illuminate\Http\Response
     */
    public function destroy(faqs $faqs)
    {
        //
    }
}
