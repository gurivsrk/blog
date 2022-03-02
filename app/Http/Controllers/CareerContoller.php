<?php

namespace App\Http\Controllers;

use App\Models\career;
use App\Models\category;
use App\Http\Requests\StorecareerRequest;
use App\Http\Requests\UpdatecareerRequest;
use GuzzleHttp\Promise\Create;

class CareerContoller extends Controller
{

    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = category::where('for','career')->get();
        $vacany = career::all();
        return view('pages.vacancy',compact(['vacany','category']));
    }

      /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorecareerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorecareerRequest $request)
    {
        $data = $request->all();
        career::create($data);

        return redirect()->back()->with('success','Successfully Added New Vacancy');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\career  $career
     * @return \Illuminate\Http\Response
     */
    public function edit(career $career)
    {

        $type = "edit-vacancy";
        $category = category::where('for','career')->get();
        $vacany = career::all();

        return view('pages.vacancy',compact(['vacany','category','type','career']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatecareerRequest  $request
     * @param  \App\Models\career  $career
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatecareerRequest $request, career $career)
    {

        $data = $request->all();
        $career->update($data);

        return redirect()->route('career.index')->with('update','Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\career  $career
     * @return \Illuminate\Http\Response
     */
    public function destroy(career $career)
    {
        $career->delete();
        return redirect()->route('career.index')->with('delete','Deleted Successfully');
    }
}
