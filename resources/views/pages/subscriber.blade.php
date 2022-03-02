@extends('layouts.app', ['activePage' => 'subscriber', 'titlePage' => __('Subscriber')])

@section('content')
<div class="content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-info">
            <h4 class="card-title ">Subscriber</h4>
            <p class="card-category">Add/Edit Subscriber here</p>
          </div>
          <div class="card-body">
             <!--- Add Form --->
             <div class="row  justify-content-center">
                    <div id="addFormSection" class="col-md-10 vsrkAddForms {{ $errors->any() ? 'd-block' : ((@$type =='edit-vacancy')?'d-block':'') }}">
                           @if(@$type =='edit-vacancy')
                                <a href="{{route('forms.index')}}"><div class="close">X</div></a>
                            @else
                                <div class="close">X</div>
                            @endif      
                        <form method="post"  id="add-form" action="{{(@$type != 'edit-vacancy')?route('career.store'):route('career.update',$career->id)}}" enctype="multipart/form-data">
                        @if(@$type =='edit-vacancy')
                                @method('put')
                            @endif
                        <h4 class="card-title mb-4">Add Subscribe</h4>
                            @csrf
                            <div class="{{ $errors->has('email') ? ' has-danger' : '' }}">
                                    <label class="">{{ __('Email') }}</label>
                                    <input class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" id="input-email" type="text" placeholder="{{ __('email') }}" value="{{old('subscribe_name',@$subsciber->email)}}" required="true" aria-required="true"/>
                                    @if ($errors->has('email'))
                                        <span id="email-error" class="error text-danger" for="input-email">{{ $errors->first('email') }}</span>
                                    @endif
                            </div>
                       
                            <div class="{{ $errors->has('status') ? ' has-danger' : '' }}">
                                <label class="">{{ __('Status') }}</label>
                                <select class="form-control custom-select" name="status" required aria-required="true">
                                    <option hidden value="">Please Select Status</option>
                                    <option value="pending" {{(@$career->post_status === "pending" ? 'selected':'')}}>Pending</option>
                                    <option value="subscribe" {{(@$career->post_status === "subscribe" ? 'selected':'')}}>Subscribe</option>
                                    <option value="unsubscribe" {{(@$career->post_status === "unsubscribe" ? 'selected':'')}}>Unsubscribe</option>
                                </select>
                                @if ($errors->has('status'))
                                    <span id="status-status" class="error text-danger" for="input-status">{{ $errors->first('status') }}</span>
                                @endif
                            </div>

                            <div class="form-group">
                                <input class="btn {{(!empty(@$type))?'btn-warning':'btn-success'}} " name="Submit" type="submit" value="{{(!empty(@$type))?'Update':'Submit'}}"/>
                            </div>
                        </form>
                    </div>
                    </div>
                <!---- End Add Form ---->
          <div class="col-12 text-right">
                  <a href="{{(!empty(@$type))?route('forms.index'):'#'}}" class="btn btn-sm btn-info {{(!empty(@$type))?'':'addBtn'}}" data-attr="addFormSection">Add New subscribe<div class="ripple-container"></div><div class="ripple-container"></div></a>
                </div>
            <div class="table-responsive">
              <table class="table table-sort">
                <thead class=" text-primary">
                  <th> Sno.</th>
                  <th > email</th>
                  <th> Status </th>
                  <th> Subcribe on </th>
                  <th class="text-center"> Actions </th>
                </thead>
                <tbody>
                  @foreach($subscribe as $key=>$subscribe)
                    <tr class="text-capitalize {{(@$subscribe->post_status == 	'disabled')?'bg-error':''}}">
                      <td>{{++$key}}</td>
                      <td> {{@$subscribe->email}}</td>
                      <td> {{(@$subscribe->status )}} </td>
                      <td> {{(@$subscribe->created_at )}} </td>
                      <td class="td-actions text-center">
                          <a rel="tooltip" class="btn btn-success" href="{{route('subscriber.show',$subscribe->id)}}">Send Mail </a>
                          <a rel="tooltip" class="btn btn-success btn-link" href="{{route('subscriber.edit',$subscribe->id)}}"> <i class="material-icons">edit</i> </a>
                          <form action="{{route('subscriber.destroy',$subscribe->id)}}" method="POST" onsubmit="return confirm('Are you sure ?');" style="display: inline-block;">
                              @method('delete') 
                              @csrf
                              <button class="btn btn-danger btn-link"> <i class="material-icons">delete</i> </button>
                          </form>
                        </td>
                    </tr>
                  @endforeach
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection