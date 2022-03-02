
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="panel-group" id="accordion">
        @foreach($faqs as $key=>$faq)
            @if($loop->first)
             <!-- Start Single Item -->
                <div class="panel">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-bs-toggle="collapse" href="#collapse{{$key}}">{{$faq->question}}</a>
                        </h4>
                    </div>
                    <div id="collapse{{$key++}}" class="collapse show" data-bs-parent="#accordion">
                        <div class="panel-body">
                            <p>{!!$faq->answer!!}</p>
                        </div>
                    </div>
                </div>
                <!-- End Single Item -->
                @else
                 <!-- Start Single Item -->
                <div class="panel">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-bs-toggle="collapse" href="#collapse{{$key}}">{{$faq->question}}</a>
                        </h4>
                    </div>
                    <div id="collapse{{$key++}}" class="collapse" data-bs-parent="#accordion">
                        <div class="panel-body">
                            <p>{!!$faq->answer!!}</p>
                        </div>
                    </div>
                </div>
                <!-- End Single Item -->
                @endif            
          @endforeach
        </div>
    </div>
</div>