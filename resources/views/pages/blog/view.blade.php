@extends('layouts.app')

@section('content')

    <main class="flex-shrink-0">
        
        <!-- Page Content-->
        <section class="bg-white">
            <div class="container mx-auto py-5 px-5 xl:px-28">
                <div class="grid lg:grid-cols-12 gap-5">
                    <div class="grid lg:col-span-3">
                        <div class="flex gap-3 mt-5 mb-4">
                            <img class="object-cover rounded-full h-11 w-11" src="/images/assets/blankuser.png" alt="..." />
                            <div class="">
                                <div class="font-bold">{{$blog->user->name}}</div>
                                <div class="text-gray-500">{{$blog->created_at->diffForHumans()}} &middot; 6 min read</div>
                                @foreach($blog->tags as $tag)
                                    <div class="text-gray-700">{{ $tag->name }}</div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                    <div class="grid lg:col-span-9">
                        <!-- Post content-->
                        <article>
                            <!-- Post header-->
                            <header class="mb-4">
                                <!-- Post title-->
                                <h1 class="font-bold text-xl md:text-3xl mb-1">{{$blog->title}}</h1>
                                <!-- Post meta content-->
                                <div class="text-gray-700 italic mb-2">{{$blog->created_at->diffForHumans()}}</div>
                                <!-- Post categories-->
                                 @foreach($blog->tags as $tag)
                                    <a class="bg-gray-500 text-white text-xs font-bold py-1 px-3 rounded-full" href="#!">{{ $tag->name }}</a>
                                @endforeach
                                <a class="bg-gray-500 text-white text-xs font-bold py-1 px-3 rounded-full" href="#!">blog</a>
                            </header>
                            <!-- Preview image figure-->
                            <figure class="mb-4"><img class="object-cover md:h-[450px] w-full" src={{$blog->thumbnail}} alt={{$blog->title}} /></figure>
                            <!-- Post content-->
                            <section class="mb-5">{!!$blog->content!!}</section>
                        </article>
                        {{-- <!-- Comments section-->
                        <section>
                            <div class="bg-gray-100 border p-3 rounded-lg">
                                <div class="grid gap-3">
                                    <!-- Comment form-->
                                    <form class="m-3"><textarea class="outline-none border border-gray-300 p-3 w-full rounded-lg" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                                    
                                    <!-- Comment with nested comments-->
                                    <div class="grid gap-3 p-3">
                                        <div class="grid gap-3">
                                            <!-- Parent comment-->
                                            <div class="flex gap-2">
                                                <div class="grid h-9 w-12"><img class="object-cover rounded-full" src="/images/assets/blankuser.png" alt="..." /></div>
                                                <div class="grid gap-2">
                                                    <span class="font-bold">Commenter Name</span>
                                                    <span>
                                                        If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="grid gap-5 pl-9">
                                                <!-- Child comment 1-->
                                                <div class="flex gap-2">
                                                    <div class="grid h-9 w-12"><img class="object-cover rounded-full" src="/images/assets/blankuser.png" alt="..." /></div>
                                                    <div class="grid gap-2">
                                                        <span class="font-bold">Commenter Name</span>
                                                        <span>
                                                            If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                                        </span>
                                                    </div>
                                                </div>
                                                <!-- Child comment 2-->
                                                <div class="flex gap-2">
                                                    <div class="grid h-9 w-12"><img class="object-cover rounded-full" src="/images/assets/blankuser.png" alt="..." /></div>
                                                    <div class="grid gap-2">
                                                        <span class="font-bold">Commenter Name</span>
                                                        <span>
                                                            If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Single comment-->
                                        <div class="flex gap-2">
                                            <div class="grid h-9 w-12"><img class="object-cover rounded-full" src="/images/assets/blankuser.png" alt="..." /></div>
                                            <div class="grid gap-2">
                                                <span class="font-bold">Commenter Name</span>
                                                <span>
                                                    If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> --}}
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    
@endsection