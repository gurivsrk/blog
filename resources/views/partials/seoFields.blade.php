<div id="seo-section" class="seotype-section">
    <h5 class="card-title mb-5">Seo Section:</h5>
    <div class="form-group">
        <label>{{__('Seo Title')}}</label>
        <input type="text" class="form-control" name="seo_title" placeholder="seo title" value="{{old('seo_title',@$data->seo_title)}}" require aria-required="true"> 
    </div>
    <div class="form-group">
        <label class="position-relative mb-1">{{__('Seo keyword')}}</label>
        <textarea  class="form-control" name="seo_keyword" rows="3" placeholder="seo,keyword"  require aria-required="true">{{old('seo_keyword',@$data->seo_keyword)}}</textarea>
    </div>
    <div class="form-group"> 
        <label class="position-relative mb-1">{{__('Seo Descritption')}}</label>
        <textarea  class="form-control" name="seo_descritption" rows="5" placeholder="seo descritption" require aria-required="true">{{old('seo_descritption',@$data->seo_descritption)}}</textarea> 
    </div>
</div>
