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
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subscribe = subcriber::all();
        return view('pages.subscriber',compact(['subscribe']));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoresubcriberRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoresubcriberRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\subcriber  $subcriber
     * @return \Illuminate\Http\Response
     */
    public function show(subcriber $subcriber)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\subcriber  $subcriber
     * @return \Illuminate\Http\Response
     */
    public function edit(subcriber $subcriber)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatesubcriberRequest  $request
     * @param  \App\Models\subcriber  $subcriber
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatesubcriberRequest $request, subcriber $subcriber)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\subcriber  $subcriber
     * @return \Illuminate\Http\Response
     */
    public function destroy(subcriber $subcriber)
    {
        //
    }

 /////// Purely for testing purpose
    public function testEmail(Request $request)
    {    
        $main_email = "contact@vsrkcapital.com";
        $email = 'gursharan@vsrkcapital.com';
        $subject = "test email from local sever";
        $email_content = "Welcome to mail Function";
        Mail::to($email)->send(new subscibe(  $email ,$subject, $email_content ));
       // return redirect()->route('admin.subscribers.index')->with('message', 'Email was sent successfully');
       echo 'done';
    }

    public function sendEmail(Request $request)
    {    
         $request->validate([
          'emails.*' => 'email|required',
          'subject' => 'required'
          ]);
        $main_email = "news@slottomat.com";
        $emails = $request->emails;
        $subject = $request->subject;
        $email_content = "Welcome to mail Function";
        foreach ($emails as $email){
          Mail::to($email)->send(new subscibe( $email, $subject, $email_content));
        }
        return redirect()->route('admin.subscribers.index')->with('message', 'Email was sent successfully');
    }

    public function sendBulkEmail(Request $request)
    {     $request->validate([
          'emails.*' => 'email|required',
          'subject' => 'required'
          ]);
        $main_email = "news@slottomat.com";
        $emails = $request->emails;
        $subject = $request->subject;
        $email_content = "Welcome to mail Function";
        foreach ($emails as $email){
          Mail::to($email)->send(new subscibe( $email, $subject, $email_content));
        }
        return redirect()->route('admin.subscribers.index')->with('message', 'Email was sent successfully');
    }
}
