@extends('layouts.app', ['activePage' => 'FormTable', 'titlePage' => __('Forms')])

@section('content')
<div class="content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-info">
            <h4 class="card-title ">MF Forms</h4>
            <p class="card-category">Find all MF Forms here</p>
          </div>
          <div class="card-body">
             <!--- Add Form --->
             <div class="row  justify-content-center">
                    <div id="addFormSection" class="col-md-10 vsrkAddForms {{ $errors->any() ? 'd-block' : ((@$type =='edit-form')?'d-block':'') }}">
                           @if(@$type =='edit-form')
                                <a href="{{route('forms.index')}}"><div class="close">X</div></a>
                            @else
                                <div class="close">X</div>
                            @endif      
                        <form method="post"  id="add-form" action="{{(@$type != 'edit-form')?route('forms.store'):route('forms.update',$formItem->id)}}" enctype="multipart/form-data">
                        @if(@$type =='edit-form')
                                @method('put')
                            @endif
                        <h4 class="card-title mb-4">Add Form</h4>
                            @csrf
                            <div class="col-md-4 p-0">
                                <label class="">{{ __('Form') }}</label>
                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                    <div class="fileinput-preview fileinput-exists thumbnail img-raised">
                                      @if(@$formItem->form)
                                        <iframe src="{{asset(@$formItem->form)}}"></iframe>
                                      @endif
                                    </div>
                                        <a href="#pablo" class="fileinput-exists" data-dismiss="fileinput">
                                        <i class="fa fa-times"></i></a>
                                    <div id="vsrkInputImg"> 
                                        <span class="btn btn-raised btn-file">
                                        <input type="file" name="form" />
                                        </span>
                                    </div>
                                </div>    
                                @if ($errors->has('form'))
                                        <span id="form-error" class="error text-danger" for="input-form">{{ $errors->first('form') }}</span>
                                    @endif
                            </div>
                            <div class="{{ $errors->has('form_name') ? ' has-danger' : '' }}">
                                    <label class="">{{ __('Form Name') }}</label>
                                    <input class="form-control{{ $errors->has('form_name') ? ' is-invalid' : '' }}" name="form_name" id="input-form_name" type="text" placeholder="{{ __('Form Name') }}" value="{{old('form_name',@$formItem->form_name)}}" required="true" aria-required="true"/>
                                    @if ($errors->has('form_name'))
                                        <span id="form_name-error" class="error text-danger" for="input-form_name">{{ $errors->first('form_name') }}</span>
                                    @endif
                            </div>
                            <div class="{{ $errors->has('post_status') ? ' has-danger' : '' }}">
                                <label class="">Form link (if any)</label>
                                <input type="text" class="form-control" name="form_link" value="{{ old('form_link', @$formItem->form_link )}}">
                            </div>
                            <div class="row">
                            
                                <div class="col-md-12{{ $errors->has('categories') ? ' has-danger' : '' }}">
                                    <label class="">{{ __('Category') }}</label>
                                   <select name="category_id" class="vsrk-select form-control custom-select" aria-required="true">
                                       @if(!empty($catetag))
                                        <option value="">Please Select One</option>
                                            @foreach($catetag as $cat)
                                              <option value="{{$cat->id}}" {{(@$cat->id == @$formItem->category_id)?'selected':''}} > {{$cat->name}}</option>  
                                            @endforeach
                                       @endif
                                   </select>
                                    @if ($errors->has('category'))
                                        <span id="category-error" class="error text-danger" for="input-category">{{ $errors->first('category') }}</span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group">
                                <input class="btn {{(!empty(@$type))?'btn-warning':'btn-success'}} " name="Submit" type="submit" value="{{(!empty(@$type))?'Update':'Submit'}}"/>
                            </div>
                        </form>
                    </div>
                    </div>
                <!---- End Add Form ---->
          <div class="col-12 text-right">
                  <a href="{{(!empty(@$type))?route('forms.index'):'#'}}" class="btn btn-sm btn-info {{(!empty(@$type))?'':'addBtn'}}" data-attr="addFormSection">Add New Form<div class="ripple-container"></div><div class="ripple-container"></div></a>
                </div>
            <div class="table-responsive">
              <table class="table table-sort">
                <thead class="text-primary">
                  <th> Sno.</th>
                  <th> Form Name</th>
                  <th> Category</th>
                  <th> link (if any) </th>
                  <th class="text-center"> Actions </th>
                </thead>
                <tbody>
                  @foreach($form as $key=>$form)
                    <tr>
                      <td>{{++$key}}</td>
                      <td> {{$form->form_name}}</td>
                      <td> {{$form->categoryName->name}}</td>
                      <td> {{(!empty($form->link)?$form->link:'-')}} </td>
                      <td class="td-actions text-center">
                          <a rel="tooltip" class="btn btn-Muted  btn-link" href="{{asset($form->form)}}" target="_blank"> <i class="material-icons">file_download</i> </a>
                          <a rel="tooltip" class="btn btn-success btn-link" href="{{route('forms.edit',$form->id)}}"> <i class="material-icons">edit</i> </a>
                          <form action="{{route('forms.destroy',$form->id)}}" method="POST" onsubmit="return confirm('Are you sure ?');" style="display: inline-block;">
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