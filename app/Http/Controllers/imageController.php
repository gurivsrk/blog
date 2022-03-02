<?php

namespace App\Http\Controllers;

use App\Models\team;
use Illuminate\Http\Request;

class imageController extends Controller
{
    public function changeF(request $request){
        $order = 0;
        if($request->type == "team-order"){
            foreach($request->ids as $id){
                team::where('id',$id)->update(array('order_id'=> ++$order));             
            }
        }
        else{
          return false;
        }
          return true;
      }
  
      public function getCategoryF(request $request){
          
  
      }
}
