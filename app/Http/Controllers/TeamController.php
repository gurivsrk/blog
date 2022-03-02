<?php

namespace App\Http\Controllers;

use App\Models\team;

use App\Http\Requests\StoreteamRequest;
use App\Http\Requests\UpdateteamRequest;
use Illuminate\Support\Facades\Storage;
class TeamController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $type = "index-team";
        $item = team::orderBy('order_id')->get();
        return view('pages.team',compact(['item','type']));
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreteamRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreteamRequest $request)
    {
        //die($request->file('profileImgT'));
        $imgname = addMedia($request->file('profileImgT'),'profile_photos');
        $request->merge(['profileImg'=>$imgname]);
        $data = $request->all();
        team::create($data);
        
        return redirect()->back()->with('success','Successfully Added');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\team  $team
     * @return \Illuminate\Http\Response
     */
    public function edit(team $team)
    {
       $type = "edit-team";
       $item = team::orderBy('order_id')->get();
       return view('pages.team',compact(['type','team','item']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateteamRequest  $request
     * @param  \App\Models\team  $team
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateteamRequest $request, team $team)
    {
        if($request->hasFile('profileImgT')){
            $imgname =  updateMedia($team->profileImg, $request->file('profileImgT'),'profile_photos');
            $request->merge(['profileImg'=>$imgname]);
        }
        $data = $request->all();
        $team->update($data);
        return redirect()->route('team.index')->with('update','Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\team  $team
     * @return \Illuminate\Http\Response
     */
    public function destroy(team $team)
    {
        $image = pathinfo($team->profileImg,PATHINFO_BASENAME);
       if(Storage::delete('public/profile_photos/'.$image)){
            $team->delete();
            return redirect()->back()->with('success','Successfully Deleted Member');
       }
       else{
           //die('fail');
            return redirect()->back()->with('delete','Fail to Delete Member');
       }
    }

}

