<?php

if(!function_exists('addMedia')){
    function addMedia($file,$loc){
        $img_name = $file->getClientOriginalName();
        $filename = date('his') . '-' . $img_name;
        $img_name = $file->storePubliclyAs($loc, $filename,'public');
        return '/storage/'.$img_name;
    }
}

if(!function_exists('updateMedia')){
    function updateMedia($oldFile,$file,$loc){
        $old = pathinfo($oldFile,PATHINFO_BASENAME);
        //echo $file_name;
        // echo 'public/'.$loc.'/'.$old;
        if(Illuminate\Support\Facades\Storage::delete('public/'.$loc.'/'.$old)){
            return addMedia($file,$loc);
        }
        else {
            return redirect()->back()->with('delete','Fail to Update File');
        }
    }
}

if(!function_exists('deleteMedia')){
    function deleteMedia(){
       //////
    }
}