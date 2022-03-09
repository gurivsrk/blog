@extends('layouts.app', ['activePage' => 'subscriber', 'titlePage' => __('Send Email')])


@section('content')

<div class="content">
  <div class="container-fluid">
    <div class="row">
      
      <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-info">
              <h4 class="card-title ">Send Email</h4>
              <p class="card-category"> Here you can send email to Individual/ All</p>
            </div>
            <div class="card-body">
              <div id="email-section" class="page-field-section">
                  <div class="row">
                    <div class="col-md-12">
                      <h2 class="card-title mb-5">Send Mail</h2>
                      <form method="post" action="{{route('subcriber.sendMail')}}">
                        @csrf
                        <div class="">
                            <label class="">{{ __('Emails') }}</label>
                            <select name="emails[]" class="vsrk-select form-control custom-select" multiple aria-required="true">
                            @if(!empty($subscribe))
                                @foreach($subscribe as $email)
                                @if($type=='multi')
                                    <option value="{{$email->email}}" selected>{{$email->email}}</option>
                                @else   
                                    <option value="{{$email->email}}" {{ ($email_id == $email->id ? 'selected' : '')}} >{{$email->email}}</option>
                                @endif
                                @endforeach
                            @else
                            @endif
                            </select>
                        </div>
                        <div class="form-group mt-4">
                          <label class="">{{ __('Email Subject') }}</label>
                          <input class="form-control{{ $errors->has('email_subject') ? ' is-invalid' : '' }}" name="email_subject" id="input-name" type="text" placeholder="{{ __('Email Subject') }}" required="true" aria-required="true"/>
                        </div>
                        <div class="form-group">
                          <label class="position-relative">{{ __('Email Content') }}</label>
                          <textarea class="form-control{{ $errors->has('email_content') ? ' is-invalid' : '' }} ckeditor"  rows="5"  name="email_content" id="input-email_content" required="true" aria-required="true"></textarea>
                        </div>
                        <div class="form-group">
                            <input name="submit" type="submit" class="btn btn-success" value="Send mail">
                        </div>
                      </form>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  </div>
</div>

@endsection
