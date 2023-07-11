@extends('layouts.app')

@section('content')

    <main class="flex-shrink-0">

        <!-- Page Content-->
        <section class="py-5">
            <div class="container px-3 lg:px-28">
                <h1 class="font-bold text-2xl mb-9">AnalogueShifts Blog</h1>
                <div class="bg-white border-0 shadow rounded-lg overflow-hidden">
                    <div class="grid lg:grid-cols-12">
                            <div class="grid lg:col-span-6 py-16 px-3 lg:px-9">
                                <div class="grid gap-5 lg:w-96 p-4">
                                    <div class="flex justify-start mb-2">
                                        <span class="bg-as text-white text-xs font-bold rounded-full py-1 px-3">News</span>
                                    </div>
                                    <div class="text-3xl font-bold">Welcome to Our Blog Page</div>
                                    <p>Thank you for visiting our news page! Here, you'll find the latest updates and developments from our recruitment company, including our unique approach to connecting top talent with companies in need.</p>
                                    <a class="flex items-center text-yellow-500" href="/blog/">
                                <span class="flex items-center">
                                    More news
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex items-center w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                                </div>
                            </div>
                            <div class="grid lg:col-span-6">
                                <img class="object-cover h-full w-full" src="/images/blog/1.jpg"/>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-16 bg-gray-100">
            <div class="container px-3 lg:px-28">
                <div class="grid lg:grid-cols-12">
                    <div class="grid lg:col-span-8 gap-5 p-3">
                        <h2 class="font-bold text-5xl mb-4">News</h2>

                        @foreach($news as $post)
                            <!-- News item-->
                            <div class="mb-4">
                                <div class="text-sm text-gray-500">{{$post->created_at->diffForHumans()}}</div>
                                <a class="text-3xl font-bold underline" href="/blog/"><h3>{{$post->title}}</h3></a>
                            </div>
                        @endforeach
                        <div class="flex justify-end mb-5">
                            <a class="flex items-center text-yellow-500" href="/blog/">
                                <span class="flex items-center">
                                    More news
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex items-center w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="grid lg:col-span-4 h-full">
                        <div class="bg-white p-4 h-full">
                            <div class="flex h-full items-center justify-center">
                                <div class="text-center">
                                    <div class="text-lg font-bold">Contact</div>
                                    <p class="text-muted mb-4">
                                        For inquiries, email us at
                                        <br />
                                        <a href="/blog/">hello@analogueshifts.com</a>
                                    </p>
                                    <div class="text-lg font-bold">Follow us</div>
                                    <a class="text-lg px-2" href="/blog/"><i class="bi-twitter"></i></a>
                                    <a class="text-lg px-2" href="/blog/"><i class="bi-facebook"></i></a>
                                    <a class="text-lg px-2" href="/blog/"><i class="bi-linkedin"></i></a>
                                    <a class="text-lg px-2" href="/blog/"><i class="bi-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <!-- Blog preview section-->
        <section class="py-5">
            <div class="container py-16 px-3 lg:px-28">
                <div class="grid justify-center gap-7">
                    <div class="">
                        <div class="grid gap-5 text-center">
                            <h2 class="text-4xl font-bold">Featured Stories</h2>
                            <p class="text-gray-800 text-xl lg:w-[500px] mb-5">AnalogueShifts featured blog posts. Here, you'll find the latest updates and developments from our recruitment company.</p>
                        </div>
                    </div>
                </div>

                @if(count($blogs) < 1)
                
                @else
                    <div class="grid lg:grid-cols-3 gap-3">
                        @foreach ($blogs as $blog)
                            <div class="mb-5">
                                <div class="h-full shadow border-0">
                                    <img class="object-cover h-56 w-full" src="http://as.test/{{$blog->thumbnail}}" alt="..." />
                                    <div class="p-5">
                                        <div class="flex justify-start gap-2">
                                            <span class="flex items-center bg-yellow-500 font-bold text-white text-xs rounded-full py-1 px-2">Blog</span>
                                            @foreach($blog->tags as $tag)
                                                <span class="flex items-center bg-yellow-500 font-bold text-white text-xs rounded-full py-1 px-2">{{ $tag->name }}</span>
                                            @endforeach
                                        </div>
                                        <a class="overflow-hidden" href="/blog/{{$blog->slug}}"><h5 class="font-bold text-lg mb-3">{{$blog->title}}</h5></a>
                                        <p class="h-20 mb-0 overflow-hidden">{{$blog->content}}</p>
                                    </div>
                                    <div class="p-4 pt-0 bg-transparent border-t-0">
                                        <div class="flex items-end justify-center">
                                            <div class="flex gap-5 items-center">
                                                <img class="object-cover rounded-full h-11 w-11" src="/images/assets/blankuser.png" alt="..." />
                                                <div class="small">
                                                    <div class="font-bold">{{$blog->user->name}}</div>
                                                    <div class="text-gray-500">{{$blog->created_at->diffForHumans()}} &middot; 6 min read</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>

                    {{$blogs->links()}}

                @endif


                <!-- Call to action-->
                <aside class="flex justify-center py-16">
                    <div class="bg-yellow-500 grid lg:flex items-center justify-center gap-5 w-full p-9 rounded-lg">
                        <div class="grid gap-5 text-center lg:text-start">
                            <div class="text-2xl font-bold text-white">New products, delivered to you.</div>
                            <div class="text-gray-100 text-sm">Sign up for our newsletter for the latest updates.</div>
                        </div>
                        <div class="grid gap-5 text-center lg:text-start">
                            <form class="flex mb-2 min-w-full">
                                <input class="text-sm lg:text-md placeholder:text-sm outline-none w-full py-2 px-5 rounded-l-md" type="email" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-newsletter" />
                                <button class="bg-transparent text-sm border outline-none w-full py-2 px-5 rounded-r-md" type="button">Sign up</button>
                            </form>
                            <div class="text-gray-100 text-sm">We care about privacy, and will never share your data.</div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>

    </main>
    
@endsection
        