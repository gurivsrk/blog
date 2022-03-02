<div  class="col-12 text-right ">
    <button id="saveOrderBtn" class="btn btn-primary">Save Order</button>
    <button class="btn btn-info reOrderBtn" data-id="2">Change view</button>
</div>
<div class="table-responsive">
        <table class="table">
        <thead style="background: #007070; color: #fff !important;">
            <th> Sno.</th>
            <th> Name</th>
            <th> Designation</th>
            <th> Image </th>
        </thead>
        <tbody id="sortable" style="cursor:grab">
            @foreach($item as $key=>$item)
            <tr data-id="{{$item->id}}">
                <td>{{++$key}}</td>
                <td> {{$item->name}}</td>
                <td> {{$item->designation}}</td>
                <td> <img src="{{asset($item->profileImg)}}" style=" width: 80px;  object-fit: cover; height: 80px;"> </td>
            </tr>
            @endforeach
        </tbody>
        </table>
</div>