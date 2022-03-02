<!-- Start Partner Area -->
<div class="partner-area ptb-30 bg-thin">
    <div class="container">
        <div class="partner-slider owl-carousel">
        @foreach($brand_logo as $logo)
                <div class="partner-item">
                    <img src="{{asset($logo->logo)}}" alt="{{$logo->name}}" /> 
                </div>
            @endforeach
        </div>
    </div>
</div>
<!-- end partner area -->