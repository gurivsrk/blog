
<div class="sidebar" data-color="azure" data-background-color="white" data-image="">
  <!--
      Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

      Tip 2: you can also add an image using data-image tag
  -->
  <div class="logo">
    <a href="#" class="simple-text logo-normal">
      <img title="website logo" class="img-fluid vsrk-logo-admin" src="{{ asset(@$gd->website_logo) }}">
    </a>
  </div>
  <div class="sidebar-wrapper">
    <ul class="nav">
      <li class="nav-item{{@$activePage == 'dashboard' ? ' active' : '' }}">
        <a class="nav-link" href="{{ route('vsrkAdmin') }}">
          <i class="material-icons">dashboard</i>
            <p>{{ __('Dashboard') }}</p>
        </a>
      </li>
      </li>
      <li class="nav-item{{@$activePage == 'blogs' ? ' active' : '' }}">
        <a class="nav-link" href="{{ route('all-blogs.index') }}">
          <i class="material-icons">history_edu</i>
            <p>{{ __('Blogs') }}</p>
        </a>
      </li>
      <li class="nav-item{{@$activePage == 'menu' ? ' active' : '' }}">
        <a class="nav-link" href="{{ route('menu.index') }}">
          <i class="material-icons">menu</i>
            <p>{{ __('Menu') }}</p>
        </a>
      </li>

      <!-- <li class="nav-item {{ ($activePage == 'FormTable' ||@$activePage == 'allForm') ? ' active' : '' }}">
        <a class="nav-link   {{ ($activePage == 'FormTable' ||@$activePage == 'allForm') ? '' : 'collapsed' }}" data-toggle="collapse" href="#MFForms" aria-expanded="{{ ($activePage == 'FormTable' ||@$activePage == 'allForm') ? 'true' : 'false' }}">
          <i><i class="material-icons">content_paste</i></i>
          <p>{{ __('Forms') }}
            <b class="caret"></b>
          </p>
        </a>
        <div class="collapse  {{ ($activePage == 'FormTable' ||@$activePage == 'allForm') ? 'show' : '' }}" id="MFForms">
          <ul class="nav">
            <li class="nav-item{{@$activePage == 'FormTable' ? ' active' : '' }}">
            <a class="nav-link" href="{{ route('forms.index') }}">
              <i class="material-icons">content_paste</i>
              <span class="sidebar-normal">{{ __('MF Forms') }}</span>
              </a>
            </li>
            <li class="nav-item{{@$activePage == 'allForm' ? ' active' : '' }}">
            <a class="nav-link" href="{{ route('forms.index') }}">
              <i class="material-icons">content_paste</i>
              <span class="sidebar-normal">{{ __('All Other Forms') }}</span>
              </a>
            </li>
          </ul>
        </div>
      </li> -->
      <li class="nav-item{{@$activePage == 'subscriber' ? ' active' : '' }}">
        <a class="nav-link" href="{{ route('subscriber.index') }}">
          <i class="material-icons">email</i>
          <p>{{ __('Subscriber') }}</p>
        </a>
      </li>
      <li class="nav-item{{@$activePage == 'team' ? ' active' : '' }}">
        <a class="nav-link" href="{{ route('team.index') }}">
          <i class="material-icons">groups</i>
          <p>{{ __('Team') }}</p>
        </a>
      </li>
      <li class="nav-item{{@$activePage == 'addEditVacany' ? ' active' : '' }}">
        <a class="nav-link" href="{{route('career.index')}}">
          <i class="material-icons">group_add</i>
            <p>{{ __('Add/Edit Vacany') }}</p>
        </a>
      </li>
      <li class="nav-item{{@$activePage == 'testimonials' ? ' active' : '' }}">
        <a class="nav-link" href="{{route('testimonial.index')}}">
          <i class="material-icons">sms</i>
            <p>{{ __('Testimonials') }}</p>
        </a>
      </li>
      <li class="nav-item{{@$activePage == 'faqs' ? ' active' : '' }}">
        <a class="nav-link" href="{{route('faqs.index')}}">
          <i class="material-icons">quiz</i>
            <p>{{ __('FAQ\'s') }}</p>
        </a>
      </li>
      <li class="nav-item {{ ($activePage == 'career' ||@$activePage == 'GD' ||@$activePage == 'home') ? ' active' : '' }}">
        <a class="nav-link {{ ($activePage == 'career' ||@$activePage == 'GD' ||@$activePage == 'home') ? '' : 'collapsed' }}"  data-toggle="collapse" href="#allPages" aria-expanded="false">
          <i><span class="material-icons">pages</span></i>
          <p>{{ __('All Pages') }}
            <b class="caret"></b>
          </p>
        </a>
        <div class="collapse {{ ($activePage == 'career' ||@$activePage == 'GD' ||@$activePage == 'home') ? 'show' : '' }}" id="allPages">
          <ul class="nav">
            <li class="nav-item{{@$activePage == 'GD' ? ' active' : '' }}">
              <a class="nav-link" href="{{route('staticPages.edit','GD')}}">
                <i class="material-icons">info</i>
                <span class="sidebar-normal">{{ __('General Details') }} </span>
              </a>
            </li>
            <li class="nav-item{{@$activePage == 'home' ? ' active' : '' }}">
              <a class="nav-link" href="{{route('staticPages.edit','home')}}">
                <i class="material-icons">home</i>
                <span class="sidebar-normal">{{ __('Home') }} </span>
              </a>
            </li>
            <li class="nav-item{{@$activePage == 'career' ? ' active' : '' }}">
              <a class="nav-link" href="{{route('staticPages.edit','career')}}">
                <i class="material-icons">work_outline</i>
                <span class="sidebar-normal">{{ __('Career') }} </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item{{@$activePage == 'media' ? ' active' : '' }}">
        <a class="nav-link" href="#">
          <i class="material-icons">perm_media</i>
            <p>{{ __('Media') }}</p>
        </a>
      </li>
      <li class="nav-item{{@$activePage == 'form-category' ? ' active' : '' }}">
              <a class="nav-link" href="{{ route('cateTag.index') }}">
              <i class="material-icons">category</i>
                <p> {{ __('Categories/ Tags') }} </p>
              </a>
            </li>
    
      <li class="nav-item {{ ($activePage == 'profile' ||@$activePage == 'user-management') ? ' active' : '' }}">
        <a class="nav-link {{ ($activePage == 'profile' ||@$activePage == 'user-management') ? '' : 'collapsed' }}" data-toggle="collapse" href="#user-management" aria-expanded="false">
          <i><img style="width:25px" src="{{ asset('admin') }}/img/laravel.svg"></i>
          <p>{{ __('User Section') }}
            <b class="caret"></b>
          </p>
        </a>
        <div class="collapse {{ ($activePage == 'profile' ||@$activePage == 'user-management') ? ' show' : '' }}" id="user-management">
          <ul class="nav">
            <li class="nav-item{{@$activePage == 'profile' ? ' active' : '' }}">
              <a class="nav-link" href="{{ route('profile.edit') }}">
                <span class="sidebar-mini"> UP </span>
                <span class="sidebar-normal">{{ __('User profile') }} </span>
              </a>
            </li>
            <li class="nav-item{{@$activePage == 'user-management' ? ' active' : '' }}">
              <a class="nav-link" href="{{ route('user.index') }}">
                <span class="sidebar-mini"> UM </span>
                <span class="sidebar-normal"> {{ __('User Management') }} </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
        
      
    </ul>
  </div>
</div>
