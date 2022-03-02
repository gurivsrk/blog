<?php

namespace App\Http\Controllers;

use App\Models\category;
use App\Models\faqs;
use App\Models\staticPages;

use App\Http\Requests\UpdatestaticPagesRequest;


class staticPagesContoller extends Controller
{
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\staticPages  $staticPages
     * @return \Illuminate\Http\Response
     */
    public function edit(staticPages $staticPages,$id)
    {
        $data = $staticPages->getAllFields($id);
        $faqs = faqs::all();

        return view('pages.'.$id,compact(['data','faqs']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatestaticPagesRequest  $request
     * @param  \App\Models\staticPages  $staticPages
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatestaticPagesRequest $request, staticPages $staticPages,$id)
    {
        $staticPages->updateFields($id,$request);
        return redirect()->back()->with('success','Successfully Updated');
    }

}
