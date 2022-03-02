@foreach($item as $item)
<div  class="col-lg-6 col-xl-4 col-md-6">
    <div class="card">
    @if(@$type == 'edit-testimonial' || @$type == 'index-testimonial')
        <div class="card-header card-header-success">
    @else
        <div class="card-header {{($type == 'edit-team' || $type == 'index-team')?'card-header-warning':($item->post_status == 'enabled'?'card-header-success':'card-header-danger')}}">
    @endif
           <div class="float-right">
        @if($type == 'edit-blog' || $type == 'index-blog')
            <a href="#" class="vsrk-icon"><span class="material-icons">preview</span></a>
        @endif
        @if(@$type == 'edit-testimonial' || @$type == 'index-testimonial')
            <a href="{{route('testimonial.edit',$item->id)}}" class="vsrk-icon"><span class="material-icons">edit</span></a>
            <form action="{{ route('testimonial.destroy',$item->id) }}" method="POST" onsubmit="return confirm('Are you sure ?');" style="display: inline-block;">
                @method('delete') 
                @csrf
                <button class="vsrk-icon vsrk-icon-delete btn-link"> <i class="material-icons">delete_outline</i> </button>
            </form>
        @else
            <a href="{{($type == 'edit-team' || $type == 'index-team')?route('team.edit',$item->id):route('all-blogs.edit',$item->id)}}" class="vsrk-icon"><span class="material-icons">edit</span></a>
            <form action="{{ ($type == 'edit-team' || $type == 'index-team')?route('team.destroy',$item->id):route('all-blogs.destroy',$item->id) }}" method="POST" onsubmit="return confirm('Are you sure ?');" style="display: inline-block;">
                @method('delete') 
                @csrf
                <button class="vsrk-icon vsrk-icon-delete btn-link"> <i class="material-icons">delete_outline</i> </button>
            </form>
        @endif
           
        </div>
        <h4 class="card-title">{{($type == 'edit-team' || $type == 'index-team')?$item->name:(($type == 'edit-testimonial' || $type =='index-testimonial')?$item->name:$item->title)}}</h4>
        @if($item->designation)
        <p class="card-category">{{$item->designation}}</p>
        @else
            <p class="card-category">Posted On: {{$item->BlogDate}}</p>
        @endif
    </div>
    <div class="card-body table-responsive img-padding text-center">
        @if(@$type == 'edit-testimonial' || @$type == 'index-testimonial')
            <img class="img-fluid obj-fit-img" src="{{asset($item->profileImg)}}">
        @else
            <img class="img-fluid obj-fit-img" src="{{($type == 'edit-team' || $type == 'index-team')?asset($item->profileImg):asset($item->blogImage)}}">
        @endif
            <p class="pt-2 text-justify">{!! Str::limit($item->descritption,200) !!}</p> 
    </div>
    </div>
</div>
@endforeach