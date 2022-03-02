@extends('layouts.app', ['activePage' => 'user-management', 'titlePage' => __('User')])

@section('content')
<div class="content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-info">
              <h4 class="card-title ">Users</h4>
              <p class="card-category"> Here you can manage users</p>
            </div>
            <div class="card-body">
                              <div class="row">
                <div class="col-12 text-right">
                  <a href="#" class="btn btn-sm btn-success">Add user</a>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table table-sort">
                  <thead class="text-primary">
                    <tr>
                      <th> Sno.</th></th>
                      <th> Name </th>
                      <th> Email </th>
                      <th> Email Verfied </th>
                      <th> Creation date </th>
                      <th class="text-center"> Actions </th>
                    </tr>
                  </thead>
                  <tbody>
                    @foreach($users as $key => $user)
                      <tr>
                        <td>{{++$key}}</td>
                        <td> {{$user->name}} </td>
                        <td> {{$user->email}} </td>
                        <td> {{($user->email_verified_at)?'Done':'Pending'}} </td>
                        <td>{{date('d-M-Y', strtotime($user->created_at))}}</td>
                        <td class="td-actions text-right">
                            <a rel="tooltip" class="btn btn-success btn-link" href="{{route('profile.otherEdit',$user->id)}}" data-original-title="" title="">
                              <i class="material-icons">edit</i>
                              <div class="ripple-container"></div>
                            </a>
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