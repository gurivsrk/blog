        <!-- start testimonial section  -->
        <section id="testimonial" class="testimonial-section testimonial ptb-100 bg-light">
            <div class="container">
                <div class="section-title">
                    <span class="subtitle">TESTIMONIALS</span>
                    <h2>What People Say About Us</h2>
                    <p>Does any industry face a more complex audience journey and marketing sales process than B2B technology. Does any industry face a more complex audience.</p>
                </div>
                <div class="tesimonial-grid">
                    
                <div class="dot active">
                        <img src="{{asset('frontend/img/clients/client_1.png')}}" alt="client-1" />
                    </div>
                    <div class="dot">
                        <img src="{{asset('frontend/img/clients/client_2.png')}}" alt="client-2" />
                    </div>
                    <div class="dot">
                        <img src="{{asset('frontend/img/clients/client_3.png')}}" alt="client-3" />
                    </div>
                    <div class="dot">
                        <img src="{{asset('frontend/img/clients/client_4.png')}}" alt="client-4" />
                    </div>
                    <div class="dot">
                        <img src="{{asset('frontend/img/clients/client_5.png')}}" alt="client-5" />
                    </div>
                    <div class="dot">
                        <img src="{{asset('frontend/img/clients/client_6.png')}}" alt="client-6" />
                    </div>
                  
                    <div class="testimonial-slider owl-carousel">
                        @foreach($testimonials as $testimonial)
                            <div class="slider-item">
                                <div class="qoute-icon">
                                    <img src="{{asset('frontend/img/resource/quotation.png')}}" alt="quotation" />
                                </div>
                                <div class="inner-text" style=" {{ (Str::length($testimonial->descritption) > 350)?'font-size:13px' :'' }} ">
                                    {!! $testimonial->descritption !!}
                                </div>
                                <div class="client">
                                    <div class="client-img">
                                        <img src="{{asset($testimonial->profileImg)}}" alt="{{$testimonial->name}}" />
                                    </div>
                                    <div class="client-info">
                                        <h6>{{$testimonial->name}}</h6>
                                        <span>{{$testimonial->designation}}</span>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <div class="overlay-img">
                        <img src="{{asset('frontend/img/background/Testimonial_bg.png')}}" alt="Testimonial_bg" />
                    </div>
                </div>
                <!-- tesimonial-grid -->
            </div>
            <div class="shape">
                <img src="{{asset('frontend/img/resource/shape_6.png')}}" alt="shape" class="shape-inner" />
                <img src="{{asset('frontend/img/resource/Ellipse_1.png')}}" alt="shape" class="shape-inner" />
                <img src="{{asset('frontend/img/resource/Rectangle_1.png')}}" alt="shape" class="shape-inner" />
                <img src="{{asset('frontend/img/resource/Ellipse_1.png')}}" alt="shape" class="shape-inner" />
                <img src="{{asset('frontend/img/resource/Rectangle_1.png')}}" alt="shape" class="shape-inner" />
                <img src="{{asset('frontend/img/resource/shape_2.png')}}" alt="shape" class="shape-inner" />
            </div>
        </section>
        <!-- testimonial section end  -->