@extends('layouts.app')

@section('content')

    <main class="flex-shrink-0">

        <!-- Page Content-->
        <section class="">
            <div class="container mx-auto py-5 px-3 md:px-9 xl:px-28">
                <h1 class="font-bold text-2xl mb-9">AnalogueShifts Jobs</h1>
                <div class="bg-white border-0 shadow rounded-lg overflow-hidden">
                    <div class="grid lg:grid-cols-12">
                            <div class="grid lg:col-span-6 py-16 px-3 lg:px-9">
                                <div class="grid gap-5 lg:w-96 p-4">
                                    <div class="flex justify-start mb-2">
                                        <span class="bg-as text-white text-xs font-bold rounded-full py-1 px-3">Jobs</span>
                                    </div>
                                    <div class="text-3xl font-bold">Jobs of your kind are here for you</div>
                                    <p>Clear and concise job listings, The job search page contains detailed descriptions of the available positions, including the job title, location, and required qualifications.</p>
                                </div>
                            </div>
                            <div class="grid lg:col-span-6">
                                <img class="object-cover h-full w-full" src="/images/jobs/1.jpg"/>
                            </div>
                    </div>
                </div>
            </div>
        </section>

       
        <!-- job preview section-->
        <section class="">
            <div class="container mx-auto py-5 px-3 md:px-9 xl:px-28">
                <div class="grid justify-center gap-7">
                    <div class="">
                        <div class="grid gap-5 text-center">
                            <h2 class="text-4xl font-bold">Featured Stories</h2>
                            <p class="text-gray-800 text-xl lg:w-[500px] mb-5">AnalogueShifts featured job posts. Here, you'll find the latest updates and developments from our recruitment company.</p>
                        </div>
                    </div>
                </div>

                @if(count($jobs) < 1)
                
                @else
                    <div class="grid gap-3 mb-3">
                        @foreach ($jobs as $job)
                            <a href="/job/{{$job->slug}}" class="mb-5">
                                <div class="bg-white h-full shadow border-0">
                                    <div class="p-5">
                                        <div class="h-20 overflow-x-auto scroll">
                                            <span class="bg-yellow-500 font-bold text-white text-xs rounded-full py-1 px-2">Job</span>
                                            <span class="bg-yellow-500 font-bold text-white text-xs rounded-full py-1 px-2">Location: {!!$job->hire_type!!}</span>                                
                                            <span class="bg-yellow-500 font-bold text-white text-xs rounded-full py-1 px-2">Experience: {!!$job->experience!!}</span>                                
                                            <span class="bg-yellow-500 font-bold text-white text-xs rounded-full py-1 px-2">Salary: ${!!$job->range!!}</span>                                
                                            <span class="bg-yellow-500 font-bold text-white text-xs rounded-full py-1 px-2">Duration: {!!$job->duration!!}</span>   
                                            @foreach($job->tags as $tag)
                                                <span class="flex items-center bg-yellow-500 font-bold text-white text-xs rounded-full py-1 px-2">{{ $tag->name }}</span>
                                            @endforeach
                                        </div>
                                        <h5 class="h-16 overflow-hidden font-bold text-lg mb-3">{{$job->role}}</h5>
                                        <div class="h-20 mb-0 overflow-hidden">
                                            <p>{!!$job->description!!}</p>
                                        </div>
                                    </div>
                                    <div class="p-4 pt-0 bg-transparent border-t-0">
                                        <div class="flex items-end justify-start">
                                            <div class="flex gap-5 items-center">
                                                {{-- <img class="object-cover rounded-full h-11 w-11" src="/images/assets/blankuser.png" alt="..." /> --}}
                                                <div class="small">
                                                    <div class="font-bold">{{$job->user->name}}</div>
                                                    <div class="text-gray-500">{{$job->created_at->diffForHumans()}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        @endforeach
                    </div>

                    {{$jobs->links()}}
                @endif


                <!-- Call to action-->
                <aside class="flex justify-center py-16">
                    <div class="bg-yellow-500 grid lg:flex items-center justify-center gap-5 w-full p-9 rounded-lg">
                        <div class="grid gap-5 text-center lg:text-start">
                            <div class="text-2xl font-bold text-white">New products, delivered to you.</div>
                            <div class="text-gray-100 text-sm">Sign up for our Jobsletter for the latest updates.</div>
                        </div>
                        <div class="grid gap-5 text-center lg:text-start">
                            <form class="flex mb-2 min-w-full">
                                <input class="text-sm lg:text-md placeholder:text-sm outline-none w-full py-2 px-5 rounded-l-md" type="email" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-Jobsletter" />
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
        