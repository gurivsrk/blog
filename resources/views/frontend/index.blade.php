@extends('layouts.frontend.frontend',['activeClass' => 'index',])
@section('frontend_content')
    <header>
      <div id="top-header" class="d-flex justify-content-center">
        <a href="#" class="display-flex">
          <img src="{{ asset('frontend/imgs/books.png')}}" width="25" height="100%" class="img-fluid display-inline">
          <span class="display-inline mx-2">Top 7 Books of the week</span>
          <div class="verticle-divider"></div>
        </a>
        <a href="#" class="display-flex">
          <img src="{{ asset('frontend/imgs/podcast.png')}}" width="25" height="100%" class="img-fluid display-inline">
          <span class="display-inline mx-2">Top 10 Podcast of the Month</span>
          <div class="verticle-divider"></div>
        </a>
        <a href="#" class="display-flex">
          <img src="{{ asset('frontend/imgs/youtube_video.png')}}" width="25" height="100%" class="img-fluid display-inline">
          <span class="display-inline mx-2">Top 10 Youtube Videos of the Month</span>
          <div class="verticle-divider"></div>
        </a>
        <a href="#" class="display-flex">
        <img src="{{ asset('frontend/imgs/app.png')}}" width="25" height="100%" class="img-fluid display-inline">
          <span class="display-inline mx-2">Top 5 Mobile App of the Month</span>
        </a>   
      </div>
        <div class="container">
          <div class="row mt-3">
            <div class="col-lg-12">
              <div class="row">
                  <div class="title">Featured</div>
                  @foreach($featured_blog as $fblog)
                    @if($loop->first)
                      <div class="col-lg-6">
                        <div class="feature-card-img position-relative-custom cursor-point">
                          <a href="{{route('frontend.blog',[$fblog->id, $fblog->slug])}}">
                          <img src="{{ asset($fblog->blogImage) }} " class="img-fluid" style=" width: 100%; height: 392px; object-fit: cover;">
                        </div>
                        <div class="feature-card">
                              <div class="card-title">{{$fblog->CatName->name}}</div>
                              <h2>{{$fblog->title}}</h2>
                              <div class="card-by">
                                By <span>Admin</span>, Published {{$fblog->BlogDate}}
                              </div>
                        </div> 
                        </a>
                      </div>
                      @endif
                  @endforeach
                  <div class="col-lg-6">
                        <div class="row">
                        @foreach($featured_blog as $fblog)
                          @if($loop->first)

                          @elseif($loop->last)
                          <div class="col-md-12">
                            <a href="{{route('frontend.blog',[$fblog->id, $fblog->slug])}}">
                              <div class="feature-card-img tertiary position-relative-custom cursor-point">
                                <img src="{{ asset($fblog->blogImage) }}" class="img-fluid" style=" width: 100%; height: 175px; object-fit: cover;">
                              </div>
                              <div class="feature-card tertiary">
                                  <div class="card-title">{{$fblog->CatName->name}}</div>
                                  <h2>{{$fblog->title}}</h2>
                                  <div class="card-by">
                                    By <span>Admin</span>, Published {{$fblog->BlogDate}}
                                  </div>
                              </div> 
                            </a> 
                          </div>
                            @else
                            <div class="col-md-6">
                              <a href="{{route('frontend.blog',[$fblog->id, $fblog->slug])}}">
                                <div class="feature-card-img secondary position-relative-custom cursor-point">
                                  <img src="{{ asset($fblog->blogImage) }}" class="img-fluid" style=" width: 100%; height: 150px; object-fit: cover;">
                                </div>
                                <div class="feature-card secondary">
                                    <div class="card-title">{{$fblog->CatName->name}}</div>
                                    <h4>{{$fblog->title}}</h4>
                                    <div class="card-by">
                                      By <span>Admin</span>, Published {{$fblog->BlogDate}}
                                    </div>
                                </div> 
                              </a> 
                            </div>
                      @endif
                  @endforeach
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </header>
    <section id="tab-category-section">
      <div class="row"> 
        <div class="col-lg-12">
            <div id="feature-tab">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <h4 class="mr-1">Must Reads:</h4>
                  @foreach($category as $cat)
                    <li class="nav-item">
                      <a class="nav-link  {{($loop->first)?'active':''}}" id="{{$cat->slugId}}-tab" data-toggle="tab" href="#tab-{{$cat->slugId}}" role="tab" aria-controls="{{$cat->slugId}}" aria-selected="true">{{$cat->name}}</a>
                    </li>
                  @endforeach
                </ul>
                <div class="tab-content">
                @foreach($category as $cat)
                  <div class="tab-pane {{($loop->first)?'active':''}}" id="tab-{{$cat->slugId}}" role="tabpanel" aria-labelledby="{{$cat->slugId}}-tab">
                    <div class="row justify-content-center" >
                    @foreach($blogs as $cblog)
                     @if($cblog->categories == $cat->id)
                        <div class="col-md-3">
                            <div class="feature-card feature-tab">
                              <div class="feature-card-img bg_{{$cat->id}} position-relative-custom cursor-point display-inline">
                                <img src="{{!empty($cat->logo)? asset($cat->logo) : asset('frontend/imgs/bank-1.png')}}" width="50" class="img-fluid position-relative-custom">
                              </div>
                                <div class="card-title">{{$cblog->CatName->name}}</div>
                                <a href="{{route('frontend.blog',[$cblog->id, $cblog->slug])}}" class="position-relative"><h3>{{$cblog->title}}</h3></a>
                                <div class="card-by">
                                  By <span>Admin</span>, {{$cblog->BlogDate}}
                                </div>
                            </div> 
                        </div>
                      @endif
                    @endforeach
                    </div>
                  </div>
                  @endforeach
                </div>
              </div>
          </div>
      </div>
    </section>

    <section id="highlight-section" class="pt-5 highlight-section bg-special">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 position-relative-custom">
            <h2>Heading.</h2>
            <div class="row mt-4 justify-content-center">
            
              <div class="col-lg-6 mt-3 mb-3">
                <div class="img-title display-flex">
                  <div class="highlight-img">
                    <img src="{{ asset('frontend/imgs/bank.png')}}" class="display-inline">
                  </div>
                  <div class="display-inline side-box-title-text ml-3 ">
                    <h4>Mutual Funds Investment</h4>
                    <span class="box-title">We always give unbiased advice. We never recommend something we wouldn’t recommend to our friends.</span>   
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mt-3 mb-3">
                <div class="img-title display-flex">
                  <div class="highlight-img">
                    <img src="{{ asset('frontend/imgs/bank.png')}}" class="display-inline">
                  </div>
                  <div class="display-inline side-box-title-text ml-3 ">
                    <h4>Tax Saving</h4>
                    <span class="box-title">We always give unbiased advice. We never recommend something we wouldn’t recommend to our friends.</span>   
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mt-3 mb-3">
                <div class="img-title display-flex">
                  <div class="highlight-img">
                    <img src="{{ asset('frontend/imgs/bank.png')}}" class="display-inline">
                  </div>
                  <div class="display-inline side-box-title-text ml-3 ">
                    <h4>Insurance</h4>
                    <span class="box-title">We always give unbiased advice. We never recommend something we wouldn’t recommend to our friends.</span>   
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mt-3 mb-3">
                <div class="img-title display-flex">
                  <div class="highlight-img">
                    <img src="{{ asset('frontend/imgs/bank.png')}}" class="display-inline">
                  </div>
                  <div class="display-inline side-box-title-text ml-3 ">
                    <h4>Stock Marketing</h4>
                    <span class="box-title">We always give unbiased advice. We never recommend something we wouldn’t recommend to our friends.</span>   
                  </div>
                </div>
              </div>
              
              <a href="#" class="btn-type-1 mt-4">our all services</a>
              <div class="verticle-divider"></div>
          </div>
        </div>
        <div class="col-lg-4 p-4 pt-0">
          <div class="side-content">
            <h4>OUR FINANCIAL CALCULATION TOOLS</h4>
            <p>When planning your finances for the future, with regard to loans, credit cards and investments, our financial calculators can be of help. They make your planning more precise by helping you calculate the amount you need to save, invest or pay.</p>
          </div>
          <div id="member-list">
            <div class="member-list">

             @for($i=0 ; $i<8 ; $i++)
              <div class="img-title display-flex mb-3">
                <div class="cropped-img">
                  <img src="{{ asset('frontend/imgs/member-1.jpg')}}" class="display-inline">
                </div>
                <div class="display-inline side-box-title-text ml-1">
                  <span class="box-title position-relative-custom" data-designation = "Director">Swapnil Aggarwal, education</span>   
                </div>
              </div>
            @endfor
          </div>
            <div id="action-btn">
            <a href="#" class="more-btn type-see invisible" data-content="see all"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
            <a href="javascript:void(0)" class="more-btn type-more" data-content="more"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </div>
        </div>
      </div>
    </section>
      <!-- start graph section -->
      <section class="graph-section pt-5 pb-5">
            <div class="container">
                <div class="section-title">
                  <div class="title">Calculator</div>
                    <h2>POWER OF SIP</h2>
                    <p>Here We help you to GROW your MONEY</p>
                </div>
               
               <div id="calC">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="sip-calc">
                                <div class="input-group">
                                    <div class="get-range-value">
                                        <label>Monthly Investment</label>
                                        <span class="type-span">₹</span>
                                        <input class="type-input" id="sipAmt" type="number" maxlength="250"  min="500" max="100000" value="25000">
                                    </div>
                                    <input class="type-range" type="range" min="500" max="100000" step="500" value="25000" style="background-size: 25% 100%;">
                                </div>
                                <div class="input-group mt-5">
                                    <div class="get-range-value">
                                        <label>Expected return rate (p.a)</label>
                                        <input class="type-input" type="number"  maxlength="250" min="1" max="30" value="12">
                                        <span class="type-span">%</span>
                                    </div>
                                    <input class="type-range" type="range" min="1" id="sipRoi"  maxlength="250" max="30" step="0.1" value="12" style="background-size: 38% 100%;">
                                </div>
                                <div class="input-group mt-5">
                                    <div class="get-range-value">
                                        <label>Time period</label>
                                        <input class="type-input" type="number"  min="1" max="30" value="10">
                                        <span class="type-span">Yr</span>
                                    </div>
                                    <input class="type-range" type="range" min="1" id="sipTime" max="30" step="1" value="10" style="background-size: 30% 100%;">
                                </div>
                            </div>
                            <div class="col-lg-5 mt-5">
                            <div class="input-group mt-1">
                                <div class="get-range-value dynamic-field">
                                    <label>Invested Amount:</label>
                                    <span id="sipInvestedAmt"></span>
                                </div>
                            </div>
                            <div class="input-group mt-3 dynamic-field">
                                <div class="get-range-value">
                                    <label>Estimated Return:</label>
                                    <span id="sipEstAmt"></span>
                                </div>
                            </div>
                            <div class="input-group mt-3 dynamic-field">
                                <div class="get-range-value">
                                    <label>Total Value:</label>
                                    <span id="sipTotalAmt"></span>
                                </div>
                            </div>
                            <div class="cta-btn mt-3">
                                <a href="#" class="btn-type-primary mt-4">
                                    Invest Now
                                </a>
                            </div>
                        </div>
                        </div>
                        <div class="offset-md-1 col-lg-4">
                            <div id="sipChartCanvas" class="position-relative">
                                <canvas id="sipCalChat" style="width:100%;max-width:350px;max-height:350px"></canvas>
                            </div>
                        </div>
                        
                    </div>
               </div>
            </div>
        </section>
        <!-- end graph section -->
    <section id="news-letter-section" class="bg-dark">
          <div class="row m-auto">
            <div id="news-section" class="col-md-6 p-10">
              <div class="title">IN THE MEDIA</div>
              <div class="img-title display-flex mt-4">
                <div class="newsletter-section-img">
                  <img src="{{ asset('frontend/imgs/demo.jpg')}}" class="display-inline">
                </div>
                <div class="display-inline side-box-title-text ml-3 ">
                  <h4>Heading {{++$i}}</h4>
                  <span class="box-title">We always give unbiased advice. We never recommend something we wouldn’t recommend to our friends.</span>   
                </div>
            </div>
            </div>
            <div id="newsletter-section" class="col-md-6 p-10 pl-2 bg-special2">
              <div class="title">NEWSLETTERS</div>
                <div class="text-dark">
                  <h4>Heading {{++$i}}</h4>
                  <span class="box-title">Daily inspiration, tips, and coaching to reach your financial goals.</span>   
                </div>
                <fom class="d-flex mt-4">
                  <input type="email" class="inputProperty" name="subscribe_email" placeholder="Please enter email..." style="width:61%">
                  <input type="submit" class="inputProperty" name="submit" value="sign up" >
                </fom>
            </div>
          </div>
    </section>
@endsection
@push('js')
<script src="https://cdn.jsdelivr.net/npm/@formulajs/formulajs@3.0.0/lib/browser/formula.min.js"></script>
@endpush