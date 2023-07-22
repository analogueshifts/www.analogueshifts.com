@extends('layouts.app')

@section('content')

    <main class="flex-shrink-0">
        <!-- Header-->
        <header class="bg-gray-50">
            <div class="container mx-auto py-5 px-3 md:px-9 xl:px-28">
                <div class="grid justify-center">
                    <div class="md:w-[700px]">
                        <div class="grid lg:flex lg:flex-col gap-5 text-center my-5">
                            <h1 class="text-4xl font-bold mb-3">Better with AnalogueShifts Tools</h1>
                            <p class="text-xl text-gray-500 mb-4">Solve the problem of cost for Startups and Large scale companies abroad by sourcing the best talents for clients, with easy to integrate AnalogueShifts Tools</p>
                            <div class="flex justify-center">
                                <a class="bg-as text-white text-xl py-3 px-5 rounded-md" href="#scroll-target">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      
         <!-- Blog preview section-->
        <section class="">
            <div class="container mx-auto py-5 px-3 md:px-9 xl:px-28">              
                <div class="grid lg:grid-cols-3 gap-3">
                    <div class="mb-5">
                        <div class="h-full shadow border-0">
                            <img class="object-cover h-56 w-full" src="/images/tools/1.jpg" alt="..." />
                            <div class="w-full p-5">
                                <div class="flex justify-end">
                                    <span class="flex items-center bg-as font-bold text-white text-xs rounded-full py-1 px-2">New</span>
                                </div>
                                <a class="text-sm" href="#scroll-target">AnalogueShifts Hire Talents</a>
                                <a href="/blog/"><h5 class="font-bold text-lg mb-3 underline">Learn more</h5></a>
                            </div>
                        </div>
                    </div>

                    <div class="mb-5">
                        <div class="h-full shadow border-0">
                            <img class="object-cover h-56 w-full" src="/images/tools/1.jpg" alt="..." />
                            <div class="w-full p-5">
                                <div class="flex justify-end">
                                    <span class="flex items-center bg-as font-bold text-white text-xs rounded-full py-1 px-2">New</span>
                                </div>
                                <a class="text-sm" href="#scroll-target">AnalogueShifts Form and Vetting system</a>
                                <a href="/blog/"><h5 class="font-bold text-lg mb-3 underline">Learn more</h5></a>
                            </div>
                        </div>
                    </div>

                    <div class="mb-5">
                        <div class="h-full shadow border-0">
                            <img class="object-cover h-56 w-full" src="/images/tools/1.jpg" alt="..." />
                            <div class="w-full p-5">
                                <div class="flex justify-end">
                                    <span class="flex items-center bg-as font-bold text-white text-xs rounded-full py-1 px-2">New</span>
                                </div>
                                <a class="text-sm" href="#scroll-target">AnalogueShifts Resume Builder</a>
                                <a href="/blog/"><h5 class="font-bold text-lg mb-3 underline">Learn more</h5></a>
                            </div>
                        </div>
                    </div>
                </div>
                   
                <!-- Call to action-->
                <aside class="flex justify-center py-16">
                    <div class="bg-as grid lg:flex items-center justify-center gap-5 w-full p-9 rounded-lg">
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
        