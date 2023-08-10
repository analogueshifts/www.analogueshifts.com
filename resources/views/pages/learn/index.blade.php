@extends('layouts.app')

@section('content')

    <main class="flex-shrink-0">

        <!-- Page Content-->
        <section class="">
            <div class="container mx-auto py-5 px-3 md:px-9 xl:px-28">
                <h1 class="font-bold text-2xl mb-9">AnalogueShifts Learn</h1>
                <div class="bg-white border-0 shadow rounded-lg overflow-hidden">
                    <div class="grid lg:grid-cols-12">
                            <div class="grid lg:col-span-6 py-16 px-3 lg:px-9">
                                <div class="grid gap-5 lg:w-96 p-4">
                                    <div class="flex justify-start mb-2">
                                        <span class="bg-as text-white text-xs font-bold rounded-full py-1 px-3">Learn</span>
                                    </div>
                                    <div class="text-3xl font-bold">Welcome to Our learn Page</div>
                                    <p>Thank you for visiting our Learn page! Here, you'll find the latest updates and developments from our recruitment company, including our unique approach to connecting top talent with companies in need.</p>
                                    <a class="flex items-center text-yellow-500" href="/learn/">
                                <span class="flex items-center">
                                    More Learn
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex items-center w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                                </div>
                            </div>
                            <div class="grid lg:col-span-6">
                                <img class="object-cover h-full w-full" src="/images/learn/1.jpg"/>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        

         <!-- learn preview section-->
        <section class="">
            <div class="container mx-auto py-5 px-3 md:px-9 xl:px-28">
                <div class="grid justify-center gap-7">
                    <div class="">
                        <div class="grid gap-5 text-center">
                            <h2 class="text-4xl font-bold">Featured Stories</h2>
                            <p class="text-gray-800 text-xl lg:w-[500px] mb-5">AnalogueShifts featured learn posts. Here, you'll find the latest updates and developments from our recruitment company.</p>
                        </div>
                    </div>
                </div>

                @if(count($learns) < 1)
                
                @else
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        @foreach ($learns as $learn)
                        <div class="mb-5">
                            <div class="h-full shadow border-0">
                                <div>
                                    <iframe
                                        height="315"
                                        width="100%"
                                        src="https://www.youtube.com/embed/{{$learn->url}}"
                                        title="{{$learn->title}}"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div class="p-5">
                                    <div class="flex justify-start">
                                        <span class="flex items-center bg-yellow-500 font-bold text-white text-xs rounded-full py-1 px-2">Learn</span>
                                    </div>
                                    <h5 class="font-bold text-lg mb-3 overflow-hidden">{{$learn->title}}</h5>
                                    <p class="h-20 mb-0 overflow-hidden">{{$learn->description}}</p>
                                </div>
                                <div class="p-4 pt-0 bg-transparent border-t-0">
                                    <div class="flex items-end justify-start">
                                        <div class="flex gap-5 items-center">
                                            <img class="object-cover rounded-full h-11 w-11" src="/images/assets/blankuser.png" alt="..." />
                                            <div class="small">
                                                <div class="font-bold">{{$learn->user->name}}</div>
                                                <div class="text-gray-500">{{$learn->created_at->diffForHumans()}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                @endif


                <!-- Call to action-->
                <aside class="flex justify-center py-16">
                    <div class="bg-yellow-500 grid lg:flex items-center justify-center gap-5 w-full p-9 rounded-lg">
                        <div class="grid gap-5 text-center lg:text-start">
                            <div class="text-2xl font-bold text-white">New products, delivered to you.</div>
                            <div class="text-gray-100 text-sm">Sign up for our Learnletter for the latest updates.</div>
                        </div>
                        <div class="grid gap-5 text-center lg:text-start">
                            <form class="flex mb-2 min-w-full">
                                <input class="text-sm lg:text-md placeholder:text-sm outline-none w-full py-2 px-5 rounded-l-md" type="email" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-Learnletter" />
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
        