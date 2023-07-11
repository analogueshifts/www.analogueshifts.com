@extends('layouts.app')

@section('content')    
    
    <main class="grid gap-5">
        <!-- Header-->
        <header class="bg-gray-50 py-20">
            <div class="container px-5 lg:px-28">
                <div class="grid justify-center">
                    <div class="md:w-[700px]">
                        <div class="grid lg:flex lg:flex-col gap-5 text-center my-5">
                            <h1 class="text-4xl font-bold mb-3">Our mission is to make building websites easier for everyone.</h1>
                            <p class="text-xl text-gray-500 mb-4">Our mission is to solve the problem of cost for Startups and Large scale companies abroad by sourcing the best talents for clients.</p>
                            <div class="flex justify-center">
                                <a class="bg-as text-white text-xl py-3 px-5 rounded-md" href="#scroll-target">Read our story</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- About section one-->
        <section class="py-20 bg-gray-100" id="scroll-target">
            <div class="container px-5 lg:px-28">
                <div class="grid lg:flex lg:grid-cols-2 gap-5 items-center">
                    <div class="grid lg:col-span-1 h-full w-full"><img class="object-cover h-full w-full rounded-md" src="/images/about/1.jpg" alt="..." /></div>
                    <div class="grid lg:col-span-1 gap-5 h-full w-full">
                        <h2 class="text-3xl font-bold">About us</h2>
                        <p class="text text-gray-500 text-xl mb-0">AnalogueShifts is a Project Management and Talent Acquisition Company. Our mission is to solve the problem of cost for Startups and Large scale companies abroad by sourcing the best talents for clients. We are equipped with the most talented work force across the globe and we are ready to work 24/7.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- About section two-->
        <section class="py-20 bg-gray-100" id="scroll-target">
            <div class="container px-5 lg:px-28">
                <div class="grid lg:flex lg:flex-row-reverse lg:grid-cols-2 gap-5 items-center">
                    <div class="grid lg:col-span-1 h-full w-full"><img class="object-cover h-full w-full rounded-md" src="/images/about/2.jpg" alt="..." /></div>
                    <div class="grid lg:col-span-1 gap-5 h-full w-full">
                        <h2 class="text-3xl font-bold">What we do</h2>
                        <p class="text text-gray-500 text-xl mb-0">We are a dynamic and motivated team of people who share the same goal to find the right talent for your company. We offer high quality services and will help you with anything we can from the recruitment stage up until you have made a final decision. We are here to understand exactly what kind of person you want, to tailor our service to best fit your needs and deliver results for businesses in all industries.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Team members section-->
        <section class="bg-gray-50 py-20">
            <div class="container px-5 lg:px-28">
                <div class="grid gap-3 text-center">
                    <h3 class='flex justify-center text-2xl md:text-7xl text-black font-bold'>Our Team</h3>
                    <p class="flex justify-center text-xl font-semibold">Dedicated to quality and your success</p>
                </div>
                <div class='grid justify-center py-16'>
                    <div class='grid justify-center lg:grid-cols-3 gap-5'>
                        <div class='grid justify-center rounded p-2 cursor-pointer relative'>
                            <img src='images/team/ceo.jpeg' class='object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg' alt='' />
                            <div class='bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5'>
                                <span class='flex justify-center'>Kenneth Malaka</span>
                                <span class='flex justify-center text-yellow-500'>CEO</span>
                            </div>
                        </div>
                        <div class='grid justify-center rounded p-2 cursor-pointer relative'>
                            <img src='images/team/recruit.jpg' class='object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg' alt='' />
                            <div class='bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5'>
                                <span class='flex justify-center'>Regina Maduemezia</span>
                                <span class='flex justify-center text-yellow-500'>Technical Recruiter</span>
                            </div>
                        </div>
                        <div class='grid justify-center rounded p-2 cursor-pointer relative'>
                            <img src='images/team/director.jpg' class='object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg' alt='' />
                            <div class='bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5'>
                                <span class='flex justify-center'>Robert Michaelson</span>
                                <span class='flex justify-center text-yellow-500'>US Sales Director</span>
                            </div>
                        </div>
                        <div class='grid justify-center rounded p-2 cursor-pointer relative'>
                            <img src='images/team/social.jpg' class='object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg' alt='' />
                            <div class='bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5'>
                                <span class='flex justify-center'>Temi Tori</span>
                                <span class='flex justify-center text-yellow-500'>Social media manager</span>
                            </div>
                        </div>
                        <div class='grid justify-center rounded p-2 cursor-pointer relative'>
                            <img src='images/team/dev.png' class='object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg' alt='' />
                            <div class='bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5'>
                                <span class='flex justify-center'>Teslim Abdulwahab</span>
                                <span class='flex justify-center text-yellow-500'>Developer</span>
                            </div>
                        </div>
                        <div class='grid justify-center rounded p-2 cursor-pointer relative'>
                            <img src='images/team/lawyer.jpeg' class='object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg' alt='' />
                            <div class='bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5'>
                                <span class='flex justify-center'>Nonye nwonsu</span>
                                <span class='flex justify-center text-yellow-500'>Lawyer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

@endsection
