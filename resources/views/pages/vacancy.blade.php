@extends('layouts.app', ['activePage' => 'addEditVacany', 'titlePage' => __('Add/Edit Vacancies')])

@section('content')
<div class="content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-info">
            <h4 class="card-title ">Vacancies</h4>
            <p class="card-category">Add/Edit vacancies here</p>
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
                        <h4 class="card-title mb-4">Add Vacany</h4>
                            @csrf
                            <div class="{{ $errors->has('vacany_name') ? ' has-danger' : '' }}">
                                    <label class="">{{ __('Vacany Name') }}</label>
                                    <input class="form-control{{ $errors->has('vacany_name') ? ' is-invalid' : '' }}" name="vacany_name" id="input-vacany_name" type="text" placeholder="{{ __('Vacany Name') }}" value="{{old('vacany_name',@$career->vacany_name)}}" required="true" aria-required="true"/>
                                    @if ($errors->has('vacany_name'))
                                        <span id="vacany_name-error" class="error text-danger" for="input-vacany_name">{{ $errors->first('vacany_name') }}</span>
                                    @endif
                            </div>
                            <div class="{{ $errors->has('num_of_post') ? ' has-danger' : '' }}">
                                <label class="">No. of Post</label>
                                <input type="text" class="form-control {{ $errors->has('num_of_post ') ? ' is-invalid' : '' }}" name="num_of_post" value="{{ old('num_of_post', @$career->num_of_post )}}">
                                @if ($errors->has('num_of_post'))
                                        <span id="num_of_post-error" class="error text-danger" for="input-num_of_post">{{ $errors->first('num_of_post') }}</span>
                                    @endif
                            </div>
                            <div class="row">
                                <div class="col-md-12{{ $errors->has('categories') ? ' has-danger' : '' }}">
                                    <label class="">{{ __('Category') }}</label>
                                   <select name="category_id" class="vsrk-select form-control custom-select dynamic-content" aria-required="true">
                                       @if(!empty($category))
                                        <option value="">Please Select One</option>
                                            @foreach($category as $cat)
                                              <option value="{{$cat->id}}" {{(@$cat->id == @$career->category_id)?'selected':''}} > {{$cat->name}}</option>  
                                            @endforeach
                                       @endif
                                   </select>
                                    @if ($errors->has('category'))
                                        <span id="category-error" class="error text-danger" for="input-category">{{ $errors->first('category') }}</span>
                                    @endif
                                </div>
                            </div>

                            <div class="{{ $errors->has('descritption') ? ' has-danger' : '' }}">
                                <label class="">{{ __('Descritption') }}</label>
                                <textarea class="form-control{{ $errors->has('descritption') ? ' is-invalid' : '' }} ckeditor"  rows="5"  name="descritption" id="input-descritption" placeholder="{{ __('descritption') }}" required="true" aria-required="true">{{old('descritption',@$career->descritption)}}</textarea>
                                @if ($errors->has('descritption'))
                                    <span id="name-descritption" class="error text-danger" for="input-descritption">{{ $errors->first('descritption') }}</span>
                                @endif
                            </div>

                            <div class="{{ $errors->has('post_status') ? ' has-danger' : '' }}">
                                <label class="">{{ __('Post Status') }}</label>
                                <select class="form-control custom-select" name="post_status" required aria-required="true">
                                    <option hidden value="">Please Select Post Status</option>
                                    <option value="enabled" {{(@$career->post_status === "enabled" ? 'selected':'')}}>Enabled</option>
                                    <option value="disabled" {{(@$career->post_status === "disabled" ? 'selected':'')}}>Disabled</option>
                                </select>
                                @if ($errors->has('post_status'))
                                    <span id="post_status-status" class="error text-danger" for="input-post_status">{{ $errors->first('post_status') }}</span>
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
                  <a href="{{(!empty(@$type))?route('forms.index'):'#'}}" class="btn btn-sm btn-info {{(!empty(@$type))?'':'addBtn'}}" data-attr="addFormSection">Add New Vacany<div class="ripple-container"></div><div class="ripple-container"></div></a>
                </div>
            <div class="table-responsive">
              <table class="table table-sort">
                <thead class=" text-primary">
                  <th> Sno.</th>
                  <th> Vacancy Name</th>
                  <th> Type</th>
                  <th> Number of Posts </th>
                  <th> Status </th>
                  <th class="text-center"> Actions </th>
                </thead>
                <tbody>
                  @foreach($vacany as $key=>$vacany)
                    <tr class="text-capitalize {{(@$vacany->post_status == 	'disabled')?'bg-error':''}}">
                      <td>{{++$key}}</td>
                      <td> {{@$vacany->vacany_name}}</td>
                      <td> {{@$vacany->cateName->name}}</td>
                      <td> {{(!empty(@$vacany->num_of_post )?$vacany->num_of_post :'-')}} </td>
                      <td> {{(@$vacany->post_status )}} </td>
                      <td class="td-actions text-center">
                          <a rel="tooltip" class="btn btn-success btn-link" href="{{route('career.edit',$vacany->id)}}"> <i class="material-icons">edit</i> </a>
                          <form action="{{route('career.destroy',$vacany->id)}}" method="POST" onsubmit="return confirm('Are you sure ?');" style="display: inline-block;">
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