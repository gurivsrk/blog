@extends('layouts.app', ['activePage' => 'menu', 'titlePage' => __('Menu')])

@section('content')
<style>
    #myEditor {
        border: 1px solid #14bace;
        padding: 20px;
    }
    #myEditor li {
        border: 1px solid #c1c1c1;
        padding: 10px 10px;
        font-size: 18px;
        font-weight: 700;
        cursor: grab;
    }
    #myEditor li:focus {
        cursor: grabbing;
    }
    #myEditor .btn-group, #myEditor .btn-group-vertical{
        margin: 0 10px;
    }
    #myEditor .txt{
        display: inline-block;
        margin-top: 3px
    }
</style>
  <div class="content">
    <div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-info">
              <h4 class="card-title">Menu</h4>
              <p class="card-category">Here you can manage Menu</p>
            </div>
            <div class="card-body table-responsive">
            <div class="card-body">
                    <div class="col-md-12">
                        <form id="menu_selecter_form" action="" method="get">
                            <label>Select Menu:</label>
                            <select name="menu" class="form-control" onchange="window.document.forms.menu_selecter_form.submit()">
                                <option value="">Select</option>
                                @foreach($menus as $menu)
                                    <option value="{{ @$menu->id }}" {{ @$current_menu->id == @$menu->id ? 'selected':'' }}>{{ $menu->name }}</option>
                                @endforeach
                            </select>
                        </form>
                    </div>
                </div>
                <div id="normal-view" class="row">
                @if(@$current_menu)
                    <div class="col-md-6">
                     <div class="card border-primary mb-3">
                        <div class="card-header bg-primary text-white">Edit Menu</div>
                            <div class="card-body">
                            <form id="frmEdit" class="form-horizontal">
                            <div class="form-group">
                            <label for="text">Text</label>
                            <div class="input-group">
                            <input type="text" class="form-control item-menu" name="text" id="text" placeholder="Text">
                            <div class="input-group-append">
                            <button type="button" id="myEditor_icon" class="btn btn-outline-secondary"></button>
                            </div>
                            </div>
                            <input type="hidden" name="icon" class="item-menu">
                            </div>
                            <div class="form-group">
                            <label for="href">URL</label>
                            <input type="text" class="form-control item-menu" id="href" name="href" placeholder="URL">
                            </div>
                            <div class="form-group">
                            <label for="target">Target</label>
                            <select name="target" id="target" class="form-control item-menu">
                            <option value="_self">Self</option>
                            <option value="_blank">Blank</option>
                            <option value="_top">Top</option>
                            </select>
                            </div>
                            <div class="form-group">
                            <label for="title">Tooltip</label>
                            <input type="text" name="title" class="form-control item-menu" id="title" placeholder="Tooltip">
                            </div>
                            </form>
                            </div>
                        <div class="card-footer">
                            <button type="button" id="btnUpdate" class="btn btn-primary" disabled><i class="fas fa-sync-alt"></i> Update</button>
                            <button type="button" id="btnAdd" class="btn btn-success"><i class="fas fa-plus"></i> Add</button>
                            <div class="col-md-6 text-right">
                                <form id="menu_save_form" method="post" action="{{route('menu.update',@$current_menu)}}">
                                    {!! csrf_field() !!}
                                    <input type="hidden" name="_method" value="put">
                                    <textarea id="out" name="data" style="opacity:0 !important; width:0 !important; min-height:0 !important; height:0 !important;"></textarea>
                                    <button id="btnOut" type="button" class="btn btn-danger"><i class="fa fa-check"></i> Save</button>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card border-primary mb-3">
                            <ul id="myEditor" class="sortableLists list-group">
                            </ul>
                        </div>
                    </div>
                    @endif
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
    jQuery(document).ready(function () {

        var iconPickerOptions = {searchText: "Buscar...", labelHeader: "{0}/{1}"};
        // // sortable list options
        // var sortableListOptions = {
        //     placeholderCss: {'background-color': "#cccccc"}
        // };
        var editor = new MenuEditor('myEditor');
        editor.setForm($('#frmEdit'));
        editor.setUpdateButton($('#btnUpdate'));
        //Calling the update method
        $("#btnUpdate").click(function(){
            editor.update();
        });
        // Calling the add method
        $('#btnAdd').click(function(){
            editor.add();
        });

        $('#btnOut').click(function(){
            $('#out').val(editor.getString());
            $('#menu_save_form').submit();
        });

        var arrayJson = '{!! addslashes(@$current_menu->data) !!}';
        editor.setData(arrayJson);
    })
</script>
@endpush