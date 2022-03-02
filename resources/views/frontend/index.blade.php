@extends('layouts.frontend.frontend',['activeClass' => 'index',])
@section('frontend_content')
    <header>
      <div id="top-header" class="d-flex justify-content-center">
        <a href="#" class="display-flex">
          <i class="fa-solid fa-building-columns display-inline font-large"></i>
          <span class="display-inline mx-2">Making Sense of your Finances for Over 20 Years</span>
          <div class="verticle-divider"></div>
        </a>
        <a href="#" class="display-flex">
          <i class="fa-solid fa-building-columns display-inline font-large"></i>
          <span class="display-inline mx-2">Making Sense of your Finances for Over 20 Years</span>
          <div class="verticle-divider"></div>
        </a>
        <a href="#" class="display-flex">
          <i class="fa-solid fa-building-columns display-inline font-large"></i>
          <span class="display-inline mx-2">Making Sense of your Finances for Over 20 Years</span>
          <div class="verticle-divider"></div>
        </a>
        <a href="#" class="display-flex">
          <i class="fa-solid fa-building-columns display-inline font-large"></i>
          <span class="display-inline mx-2">Making Sense of your Finances for Over 20 Years</span>
        </a>   
      </div>
        <div class="container">
          <div class="row mt-3">
            <div class="col-lg-9">
              <div class="row">
                  <div class="title">Featured</div>
                <div class="col-lg-7">
                  <div class="feature-card-img position-relative-custom cursor-point">
                    <a href="#">
                    <img src="{{ asset('frontend/imgs/demo.jpg') }} " class="img-fluid">
                  </div>
                   <div class="feature-card">
                        <div class="card-title">us economy news</div>
                        <h2>Gender Pay Gap Persists Even at Top of Corporate ladder</h2>
                        <div class="card-by">
                          By <span>Name</span>, Published 22-02-2022
                        </div>
                   </div> 
                  </a>
                </div>  
                <div class="col-lg-5">
                  <a href="#">
                  <div class="feature-card-img secondary position-relative-custom cursor-point">
                    <img src="{{ asset('frontend/imgs/demo.jpg') }}" class="img-fluid">
                  </div>
                  <div class="feature-card secondary">
                      <div class="card-title">us economy news</div>
                      <h2>Gender Pay Gap Persists Even at Top of Corporate ladder</h2>
                      <div class="card-by">
                        By <span>Name</span>, Published 22-02-2022
                      </div>
                  </div> 
                </a> 
                </div>
                <div class="col-lg-12">
                  <div id="feature-tab">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <h4 class="mr-1">Must Reads:</h4>
                      <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">Messages</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
                      </li>
                    </ul>
                    
                    <div class="tab-content">
                      <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="row">
                          <div class="col-md-4">
                            <a href="#">
                             <div class="feature-card feature-tab">
                                <div class="feature-card-img position-relative-custom cursor-point display-inline">
                                  <img src="{{ asset('frontend/imgs/save-money.png')}}" width="50" class="img-fluid position-relative-custom">
                                </div>
                                  <div class="card-title">us economy news</div>
                                  <h2>Gender Pay Gap Persists Even at Top of Corporate ladder</h2>
                                  <div class="card-by">
                                    By <span>Name</span>, Published 22-02-2022
                                  </div>
                             </div> 
                            </a>
                          </div>
                          <div class="col-md-4">
                            <a href="#">
                             <div class="feature-card feature-tab">
                                <div class="feature-card-img position-relative-custom cursor-point display-inline">
                                  <img src="{{ asset('frontend/imgs/save-money.png')}}" width="50" class="img-fluid position-relative-custom">
                                </div>
                                  <div class="card-title">us economy news</div>
                                  <h2>Gender Pay Gap Persists Even at Top of Corporate ladder</h2>
                                  <div class="card-by">
                                    By <span>Name</span>, Published 22-02-2022
                                  </div>
                             </div> 
                            </a>
                          </div>
                          <div class="col-md-4">
                            <a href="#">
                             <div class="feature-card feature-tab">
                                <div class="feature-card-img position-relative-custom cursor-point display-inline">
                                  <img src="{{ asset('frontend/imgs/save-money.png')}}" width="50" class="img-fluid position-relative-custom">
                                </div>
                                  <div class="card-title">us economy news</div>
                                  <h2>Gender Pay Gap Persists Even at Top of Corporate ladder</h2>
                                  <div class="card-by">
                                    By <span>Name</span>, Published 22-02-2022
                                  </div>
                             </div> 
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">.pro..</div>
                      <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                        <div class="row">
                          <div class="col-md-4">
                            <a href="#">
                             <div class="feature-card feature-tab">
                                <div class="feature-card-img position-relative-custom cursor-point display-inline">
                                  <img src="{{ asset('frontend/imgs/save-money.png')}}" width="50" class="img-fluid position-relative-custom">
                                </div>
                                  <div class="card-title">us economy news</div>
                                  <h2>Gender Pay Gap Persists Even at Top of Corporate ladder</h2>
                                  <div class="card-by">
                                    By <span>Name</span>, Published 22-02-2022
                                  </div>
                             </div> 
                            </a>
                          </div>
                          <div class="col-md-4">
                            <a href="#">
                             <div class="feature-card feature-tab">
                                <div class="feature-card-img position-relative-custom cursor-point display-inline">
                                  <img src="{{ asset('frontend/imgs/save-money.png')}}" width="50" class="img-fluid position-relative-custom">
                                </div>
                                  <div class="card-title">us economy news</div>
                                  <h2>Gender Pay Gap Persists Even at Top of Corporate ladder</h2>
                                  <div class="card-by">
                                    By <span>Name</span>, Published 22-02-2022
                                  </div>
                             </div> 
                            </a>
                          </div>
                          <div class="col-md-4">
                            <a href="#">
                             <div class="feature-card feature-tab">
                                <div class="feature-card-img position-relative-custom cursor-point display-inline">
                                  <img src="{{ asset('frontend/imgs/save-money.png')}}" width="50" class="img-fluid position-relative-custom">
                                </div>
                                  <div class="card-title">us economy news</div>
                                  <h2>Gender Pay Gap Persists Even at Top of Corporate ladder</h2>
                                  <div class="card-by">
                                    By <span>Name</span>, Published 22-02-2022
                                  </div>
                             </div> 
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">.sett..</div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="title">title</div>  
              <div id="side-box">
                  <div class="side-box-items">
                    <div class="img-title display-flex">
                        <img src="{{ asset('frontend/imgs/bank.png')}}" width="50" height="100%" class="img-fluid display-inline">
                        <div class="display-inline side-box-title-text">
                          <span class="box-title">Average Mortgage rate</span>   
                          <span class="box-text title-with-border">4.32%</span> 
                        </div>
                    </div>
                    <a href="#"> See what the rate trend means for you <i class="fa-solid fa-angle-right"></i></a>
                  </div>
                  <div class="side-box-items">
                    <div class="img-title display-flex">
                        <img src="{{ asset('frontend/imgs/bank.png')}}" width="50" height="100%" class="img-fluid display-inline">
                        <div class="display-inline side-box-title-text">
                          <span class="box-title">Average Mortgage rate</span>   
                          <span class="box-text title-with-border second">4.32%</span> 
                        </div>
                    </div>
                    <a href="#"> See what the rate trend means for you <i class="fa-solid fa-angle-right"></i></a>
                  </div>
                  <div class="side-box-items">
                    <div class="img-title display-flex">
                        <img src="{{ asset('frontend/imgs/bank.png')}}" width="50" height="100%" class="img-fluid display-inline">
                        <div class="display-inline side-box-title-text">
                          <span class="box-title">Average Mortgage rate</span>   
                          <span class="box-text title-with-border third">4.32%</span> 
                        </div>
                    </div>
                    <a href="#"> See what the rate trend means for you <i class="fa-solid fa-angle-right"></i></a>
                  </div>
                  <div class="side-box-items">
                    <div class="img-title display-flex">
                        <img src="{{ asset('frontend/imgs/bank.png')}}" width="50" height="100%" class="img-fluid display-inline">
                        <div class="display-inline side-box-title-text">
                          <span class="box-title">Average Mortgage rate</span>   
                          <span class="box-text title-with-border fourth">4.32%</span> 
                        </div>
                    </div>
                    <a href="#"> See what the rate trend means for you <i class="fa-solid fa-angle-right"></i></a>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </header>

    <section id="highlight-section" class="pt-5 highlight-section bg-special">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 position-relative-custom">
            <h2>We help you conquer everyday moments and milestones in your financial lives, and we take our job seriously.</h2>
            <div class="row mt-4 justify-content-center">
            @for ($i=0; $i<4; $i++) 
              <div class="col-lg-6 mt-3 mb-3">
                <div class="img-title display-flex">
                  <div class="highlight-img">
                    <img src="{{ asset('frontend/imgs/bank.png')}}" class="display-inline">
                  </div>
                  <div class="display-inline side-box-title-text ml-3 ">
                    <h4>Heading <?php echo $i;?></h4>
                    <span class="box-title">We always give unbiased advice. We never recommend something we wouldn’t recommend to our friends.</span>   
                  </div>
                </div>
              </div>
              @endfor
              <a href="#" class="btn-type-1 mt-4">our policies</a>
              <div class="verticle-divider"></div>
          </div>
        </div>
        <div class="col-lg-4 p-4 pt-0">
          <div class="side-content">
            <h4>OUR FINANCIAL REVIEW BOARD</h4>
            <p>Our Review Board includes experts from all over the financial industry, from professors to Certified Financial Planners. The Board ensures our content is up to date with industry developments and trends.</p>
          </div>
          <div id="member-list">
            <div class="member-list">

             @for ($i=0 ; $i<8 ; $i++)
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
            <a href="#" class="more-btn type-see invisible" data-content="see all"><i class="fa-solid fa-angle-right"></i></a>
            <a href="javascript:void(0)" class="more-btn type-more" data-content="more"><i class="fa-solid fa-angle-right"></i></a>
            </div>
        </div>
      </div>
    </section>
    <section id="news-letter-section" class="bg-dark">
          <div class="row m-auto">
            <div id="news-section" class="col-md-6 p-10">
              <div class="title">IN THE MEDIA</div>
              <div class="img-title display-flex mt-4">
                <div class="newsletter-section-img">
                  <img src="{{ asset('frontend/imgs/demo.jpg')}}" class="display-inline">
                </div>
                <div class="display-inline side-box-title-text ml-3 ">
                  <h4>Heading <?php echo $i;?></h4>
                  <span class="box-title">We always give unbiased advice. We never recommend something we wouldn’t recommend to our friends.</span>   
                </div>
            </div>
            </div>
            <div id="newsletter-section" class="col-md-6 p-10 pl-2 bg-special2">
              <div class="title">NEWSLETTERS</div>
                <div class="text-dark">
                  <h4>Heading <?php echo $i;?></h4>
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