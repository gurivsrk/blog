<?php

namespace App\Http\Controllers;


use App\Models\subcriber;
use Illuminate\Http\Request;
use App\Mail\subscibe;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\StoresubcriberRequest;
use App\Http\Requests\UpdatesubcriberRequest;

class subscribeController extends Controller
{
 
     
 
    public function index()
    {
        $subscribe = subcriber::select('id','email','status')->get();
        return view('pages.subscriber',compact(['subscribe']));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoresubcriberRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoresubcriberRequest $request)
    {
        $data = $request->all();
        subcriber::create($data);
        return back()->with('success','Successfully Added');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\subcriber  $subcriber
     * @return \Illuminate\Http\Response
     */
    public function edit(subcriber $subcriber,$id)
    {   
         $type = 'edit-subscriber';
         $s_subcriber = subcriber::findOrFail($id);
         $subscribe = subcriber::select('id','email','status')->get();
        
         return view('pages.subscriber',compact(['subscribe','type','s_subcriber']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatesubcriberRequest  $request
     * @param  \App\Models\subcriber  $subcriber
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatesubcriberRequest $request,$id)
    {
        $data = $request->all();
        $subs = subcriber::findOrFail($id);
        $subs->update($data);
        return back()->with('update','Updated Successfully');
    }

    public function sendMail($email_id=0)
    {
        $type = 'single';
        $subscribe = subcriber::select('id','email','status')->get();
        if(!$email_id){
            $type = 'multi';
            $subscribe = subcriber::select('id','email','status')->where('status','subscribe')->get();
        }
        return view('pages.send_mail',compact(['subscribe','email_id','type']));
    }

    public function send(Request $request)
    {
        $this->sendEmail($request->all());
        return back()->with('success','Send Email Successfully');
    }

 /////// Purely for testing purpose
    public function testEmail(Request $request)
    {    
        $main_email = "contact@vsrkcapital.com";
        $email = 'gursharan@vsrkcapital.com';
        $subject = "test email from local sever";
        $email_content = "Welcome to mail Function";
        Mail::to($email)->send(new subscibe(  $email ,$subject, $email_content ));
       echo 'done';
    }

    private function sendEmail($request)
    {    
        $job = (new \App\Jobs\sendNewsletter($request))->delay(now()->addMinute(2));
        dispatch($job);
        return true;
    }

}
