<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ @$gd->website_title }}</title>
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset(@$gd->favicon)}} ">
    <link rel="icon" type="image/png" href="{{asset(@$gd->favicon)}}">
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
    <!--     Fonts and icons     -->
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
    <!-- CSS Files -->
    <link href="{{ asset('admin') }}/css/theme-dashboard.css?v=2.1.1" rel="stylesheet" />
    <link href="{{ asset('admin') }}/css/custom.css" rel="stylesheet" />
    <link href="https://cdn.datatables.net/1.11.3/css/dataTables.bootstrap4.min.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"/>
    <link rel="stylesheet" href="{{ asset('admin') }}/bootstrap-iconpicker/css/bootstrap-iconpicker.min.css">
    </head>
    <body class="{{ $class ?? '' }}">
        @auth()
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
            @include('layouts.page_templates.auth')
        @endauth
        @guest()
            @include('layouts.page_templates.guest')
        @endguest

        <!--   Core JS Files   -->
        <script src="{{ asset('admin') }}/js/core/jquery.min.js"></script>
        <script src="{{ asset('admin') }}/js/core/popper.min.js"></script>
        <script src="{{ asset('admin') }}/js/core/bootstrap-theme-design.min.js"></script>
        <script src="{{ asset('admin') }}/js/plugins/perfect-scrollbar.jquery.min.js"></script>
        <!-- Plugin for the momentJs  -->
        <script src="{{ asset('admin') }}/js/plugins/moment.min.js"></script>
        <!--  Plugin for Sweet Alert -->
        <script src="{{ asset('admin') }}/js/plugins/sweetalert2.js"></script>
        <!-- Forms Validations Plugin -->
        <script src="{{ asset('admin') }}/js/plugins/jquery.validate.min.js"></script>
        <!-- Plugin for the Wizard, full documentation here: https://github.com/VinceG/twitter-bootstrap-wizard -->
        <script src="{{ asset('admin') }}/js/plugins/jquery.bootstrap-wizard.js"></script>
        <!--	Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select -->
        <script src="{{ asset('admin') }}/js/plugins/bootstrap-selectpicker.js"></script>
        <!--  Plugin for the DateTimePicker, full documentation here: https://eonasdan.github.io/bootstrap-datetimepicker/ -->
        <script src="{{ asset('admin') }}/js/plugins/bootstrap-datetimepicker.min.js"></script>
        <!--  DataTables.net Plugin, full documentation here: https://datatables.net/  -->
        <script src="{{ asset('admin') }}/js/plugins/jquery.dataTables.min.js"></script>
        <!--	Plugin for Tags, full documentation here: https://github.com/bootstrap-tagsinput/bootstrap-tagsinputs  -->
        <script src="{{ asset('admin') }}/js/plugins/bootstrap-tagsinput.js"></script>
        <!-- Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput -->
        <script src="{{ asset('admin') }}/js/plugins/jasny-bootstrap.min.js"></script>
        <!--  Full Calendar Plugin, full documentation here: https://github.com/fullcalendar/fullcalendar    -->
        <script src="{{ asset('admin') }}/js/plugins/fullcalendar.min.js"></script>
        <!-- Vector Map plugin, full documentation here: http://jvectormap.com/documentation/ -->
        <script src="{{ asset('admin') }}/js/plugins/jquery-jvectormap.js"></script>
        <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
        <script src="{{ asset('admin') }}/js/plugins/nouislider.min.js"></script>
        <!-- Include a polyfill for ES6 Promises (optional) for IE11, UC Browser and Android browser support SweetAlert -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
        <!-- Library for adding dinamically elements -->
        <script src="{{ asset('admin') }}/js/plugins/arrive.min.js"></script>
        <!--  Google Maps Plugin    -->
        <!-- <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE'"></script> -->
        <!-- Chartist JS -->
        <script src="{{ asset('admin') }}/js/plugins/chartist.min.js"></script>
        <!--  Notifications Plugin    -->
        <script src="{{ asset('admin') }}/js/plugins/bootstrap-notify.js"></script>
        <!-- Control Center for theme Dashboard: parallax effects, scripts for the example pages etc -->
        <script src="{{ asset('admin') }}/js/theme-dashboard.js?v=2.1.1" type="text/javascript"></script>
        <!------ Additional ----------->
        <script src="https://cdn.ckeditor.com/4.17.1/standard/ckeditor.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
        <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
        <script type="text/javascript" src="{{ asset('admin') }}/bootstrap-iconpicker/js/iconset/fontawesome5-3-1.min.js"></script>
        <script type="text/javascript" src="{{ asset('admin') }}/bootstrap-iconpicker/js/bootstrap-iconpicker.min.js"></script>
        <script type="text/javascript" src="{{ asset('admin') }}/jquery-menu-editor.min.js"></script>
            <script>
                $( function() {
                    $( "#sortable" ).sortable();
                } );
            </script>
        <!------ global functions ------>
        
           @if(Session::has('success'))
                <script>
                    md.showNotification('top','right','success', 'check_circle',"{{ Session::get('success') }}" )
                </script>
            @endif
            @if(Session::has('delete'))
                <script>
                    md.showNotification('top','right','danger', 'error',  "{{ Session::get('delete') }}" )
                </script>
            @endif
            @if(Session::has('update'))
                <script>
                    md.showNotification('top','right','warning', 'sync_alt', "{{ Session::get('update') }}" )
                </script>
            @endif
            <script>
            // $(document).ready(function(){
            //     $('.deleteBtn').click(function() {
            //         if(confirm('Are you sure to delete ?')){
            //             const url= $(this).data("url"), data= $(this).data('id')
            //             $.ajax({
            //             type:'POST',
            //             url : url,
            //             headers: {
            //                 'X-CSRF-TOKEN': "{{ csrf_token() }}"
            //             },
            //             data: {id : data},
            //             success: function(result){
            //                 console.log(result);
            //                 return result;
            //             }
            //             }
            //             )
            //         }
            //     })
            // })
        </script>
        @stack('js')
    </body>
</html>