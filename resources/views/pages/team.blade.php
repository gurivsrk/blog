@extends('layouts.app', ['activePage' => 'team', 'titlePage' => __('Team')])

@section('content')
  <div class="content">
    <div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-info">
              <h4 class="card-title">Team</h4>
              <p class="card-category">Here you can manage Team</p>
            </div>
            <div class="card-body table-responsive">
                <!--- Add Form --->
                    <div class="row  justify-content-center">
                    <div id="addTeamSection" class="col-md-10 vsrkAddForms {{ $errors->any() ? 'd-block' : ((@$type =='edit-team')?'d-block':'') }}">
                            @if(@$type =='edit-team')
                                <a href="{{route('team.index')}}"><div class="close">X</div></a>
                            @else
                                <div class="close">X</div>
                            @endif    
                        <form method="post"  id="add-team-member" action="{{ (@$type !='edit-team')?route('team.store'):route('team.update',$team->id)}}" enctype="multipart/form-data">
                            @if(@$type =='edit-team')
                                @method('put')
                            @endif
                        <h4 class="card-title mb-4">Add Team Member</h4>
                            @csrf
                            @foreach($item as $id)
                                @if($loop->last)    
                                    @php $lastId = $id->order_id; @endphp
                                    <input type="hidden" name="order_id" value="{{ ++$lastId }}">
                                @endif
                            @endforeach
                            <div class="col-md-4 p-0">
                                <label class="">{{ __('Profile Image') }}</label>
                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                    <div class="fileinput-preview fileinput-exists thumbnail img-raised">
                                    @if(@$type =='edit-team')
                                        <img src="{{asset($team->profileImg)}}">
                                    @endif
                                    </div>
                                        <a href="#pablo" class="fileinput-exists" data-dismiss="fileinput">
                                        <i class="fa fa-times"></i></a>
                                    <div id="vsrkInputImg"> 
                                        <span class="btn btn-raised btn-file">
                                        <input type="file" name="profileImgT" />
                                        </span>
                                    </div>
                                </div> 
                                @if ($errors->has('profileImgT'))
                                        <span id="profileImgT-error" class="error text-danger" for="input-profileImgT">{{ $errors->first('profileImgT') }}</span>
                                    @endif   
                            </div>
                            <div class="row">
                                <div class="col-md-6{{ $errors->has('name') ? ' has-danger' : '' }}">
                                    <label class="">{{ __('Name') }}</label>
                                    <input class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" id="input-name" type="text" placeholder="{{ __('Name') }}" value="{{old('name', @$team->name)}}"  required="true" aria-required="true"/>
                                    @if ($errors->has('name'))
                                        <span id="name-error" class="error text-danger" for="input-name">{{ $errors->first('name') }}</span>
                                    @endif
                                </div>
                                <div class="col-md-6{{ $errors->has('designation') ? ' has-danger' : '' }}">
                                    <label class="">{{ __('designation') }}</label>
                                    <input class="form-control{{ $errors->has('designation') ? ' is-invalid' : '' }}" name="designation" id="input-designation" type="text" placeholder="{{ __('designation') }}" value="{{old('designation', @$team->designation)}}"  required="true" aria-required="true"/>
                                    @if ($errors->has('designation'))
                                        <span id="designation-error" class="error text-danger" for="input-designation">{{ $errors->first('designation') }}</span>
                                    @endif
                                </div>
                            </div>
                            <div class="{{ $errors->has('descritption') ? ' has-danger' : '' }}">
                                <label class="">{{ __('descritption') }}</label>
                                <textarea class="form-control{{ $errors->has('descritption') ? ' is-invalid' : '' }} ckeditor"  rows="5"  name="descritption" id="input-descritption" placeholder="{{ __('descritption') }}" required="true" aria-required="true">{!! old('descritption', @$team->descritption) !!}</textarea>
                                @if ($errors->has('descritption'))
                                    <span id="name-descritption" class="error text-danger" for="input-descritption">{{ $errors->first('descritption') }}</span>
                                @endif
                            </div>
                            
                            <div class="form-group">
                            <input class="btn {{(@$type == 'edit-team')?'btn-warning':'btn-success'}} " name="Submit" type="submit" value="{{(@$type == 'edit-team')?'Update':'Submit'}}"/>
                            </div>
                        </form>
                    </div>
                    </div>
                <!---- End Add Form ---->
                    <div id="normal-view" class="row">
                        <div  class="col-12 text-right ">
                            <button class="btn btn-sm btn-danger reOrderBtn" data-id="1">Re-order Team Member<div class="ripple-container"></div></button>
                            <button data-attr="addTeamSection" class="btn btn-sm btn-info addBtn">Add New Team Member<div class="ripple-container"></div></button>
                        </div>
                            @include('partials.blogType',compact('item','type'))
                        </div>
                    <div id="rearrange-order" class="col-md-12" style="display: none;">
                        @include('partials.listTypeSort',compact('item','type'))
                    </div>
                </div>
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
@push('js')
    <script>
        $(document).ready(function(){
            $('#saveOrderBtn').click(()=>{
                if(confirm('Are you sure to change order') == true){
                    var ids = [];
                $('#sortable tr').each(function(){
                    ids.push($(this).data('id'));
                });
                $.ajax({
                    headers: {'X-CSRF-TOKEN': "{{ csrf_token() }}"},
                    method: 'POST',
                    url: "{{route('vsrk-admin.changeOrder')}}",
                    data: {ids: ids, type:'team-order'},
                    success: function(result){
                       if(result == true){
                            md.showNotification('top','right','success', 'check_circle',"Successfully Updated Order" )
                            setInterval(()=>{
                                location.reload();
                            },1000)
                       }
                       else{
                        md.showNotification('top','right','danger', 'error',"Fail to Update Order" )
                       }
                    }
                })
                }
                
            })
        })




        
    </script>
@endpush