@extends('layouts.app')

@section('content')

    <!-- Page Content-->
    <section class="bg-white min-h-screen border-b">
        <div class="container mx-auto py-5 px-3 md:px-9 xl:px-28">
            <div class="grid lg:grid-cols-12 gap-5 h-full">
                <div class="grid lg:col-span-3">
                    <div class="flex gap-3 mt-5 mb-4">
                        <img class="object-cover rounded-full h-11 w-11" src="/images/assets/blankuser.png" alt="..." />
                        <div class="">
                            <div class="font-bold">{{$job->user->name}}</div>
                            <div class="text-gray-500">{{$job->created_at->diffForHumans()}} &middot; 6 min read</div>
                            @foreach($job->tags as $tag)
                                <div class="text-gray-700">{{ $tag->name }}</div>
                            @endforeach
                        </div>
                    </div>
                </div>
                <div class="grid lg:col-span-9">
                    <!-- Post content-->
                    <div>
                        <!-- Post header-->
                        <header class="mb-4">
                            <!-- Post title-->
                            <h1 class="font-bold text-3xl md:text-5xl mb-2">{{$job->role}}</h1>
                            <!-- Post meta content-->
                            <div class="text-gray-700 italic mb-2">{{$job->created_at->diffForHumans()}}</div>
                            <!-- Post categories-->
                            <a class="bg-gray-500 text-white text-xs font-bold py-1 px-3 rounded-full" href="#!">Web Design</a>
                            @foreach($job->tags as $tag)
                                <a class="bg-gray-500 text-white text-xs font-bold py-1 px-3 rounded-full" href="#!">{{ $tag->name }}</a>
                            @endforeach
                        </header>
                        <!-- Post content-->
                        <form class="bg-gray-100 border p-3 rounded-lg">
                            <div class="grid gap-3">
                                <input class="py-2 px-3 w-full border-as border-l-4 outline-none" placeholder="Name" />
                                <input class="py-2 px-3 w-full border-as border-l-4 outline-none" placeholder="Email" />
                                <input class="py-2 px-3 w-full border-as border-l-4 outline-none" placeholder="Tel" />
                                <input type="file" class="py-2 px-3 w-full border-as border-l-4 outline-none" placeholder="Resume" />
                                <input class="py-2 px-3 w-full border-as border-l-4 outline-none" placeholder="Porfolio Link" />
                                <textarea class="py-2 px-3 w-full border-as border-l-4 outline-none" placeholder="Experience"></textarea>
                            </div>
                            <div class="flex justify-end w-full py-2 px-0">
                                <button
                                    class="bg-as text-white py-2 px-4 rounded-md"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </di>
                </div>
            </div>
        </div>
    </section>
    
@endsection