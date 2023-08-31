@extends('layouts.app')

@section('content')

    <main class="">        
        
        <!-- Header-->
        <header class="object-cover" style="background-image: url('/images/dummy/a4.jpg')">
            <div class="bg-trasnparent bg-opacity-80 backdrop-blur-lg drop-shadow-lg">
                <div class="container mx-auto py-5 md:py-20 px-3 md:px-9 xl:px-28">
                    <div class="grid items-center justify-center">
                        <div class="bg-black/20 bg-opacity-80 backdrop-blur-3xl drop-shadow-2xl p-2 md:p-9 rounded">
                            <div class="grid gap-5 my-5 text-white text-center">
                                <h1 id="in" class="text-gray-100 font-bold text-3xl lg:text-5xl mb-2">The Future of Talent Recruitment</h1>
                                <h5 id="in" class="text-gray-100 font-semibold text-lg mb-4 lg:pr-9">Your Success in Recruitment and Technical Support is our Priority. Welcome to Analogue Shifts, where we blend the expertise of recruitment with the precision of technical support to deliver exceptional results for your business. We understand that finding top talent and providing reliable technical assistance are crucial to driving your company’s growth.</h5>
                                <div class="flex justify-center p-3 lg:px-0">
                                    <div class="grid lg:flex gap-3">
                                        <a class="text-2xl px-9 py-4 rounded-lg bg-as text-white hover:bg-transparent font-semibold hover:text-as hover:ring-2 ring-as" href="https://app.analogueshifts.com/tools/hire">Find Top Talents</a>
                                        <a class="text-2xl px-9 py-4 rounded-lg bg-transparent text-white hover:bg-as/80 font-semibold hover:text-white border-2 border-as" href="https://app.analogueshifts.com">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Features section-->
        <section class="bg-white">
            <div class="container mx-auto py-20 px-3 md:px-9 xl:px-28">
                <div class="grid lg:grid-cols-3 gap-3">
                    <div class="grid lg:col-span-1 mb-5 lg:mb-0"><h2 class="font-bold text-4xl mb-0">A better way to start building.</h2></div>
                    <div class="grid lg:col-span-2">
                        <div class="grid lg:grid-cols-2 gap-7">
                            <div id="in" class="grid gap-3 mb-5 px-5">
                                <div class="flex justify-start">
                                    <span class="bg-as text-white rounded p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                                        </svg>
                                    </span>
                                </div>
                                <h2 class="font-semibold text-xl">Best Results</h2>
                                <p class="mb-0">We are here to understand exactly what kind of person you want, to tailor our service to best fit your needs and deliver results for businesses in all industries.</p>
                            </div>
                            <div id="in" class="grid gap-3 mb-5 px-5">
                                <div class="flex justify-start">
                                    <span class="bg-as text-white rounded p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                    </span>
                                </div>
                                <h2 class="font-semibold text-xl">Focused</h2>
                                <p class="mb-0">With a focus on cultural fit, talent acquisition and matching your candidate pool with the talent you need, we’re here to help.</p>
                            </div>
                            <div id="in" class="grid gap-3 mb-5 px-5">
                                <div class="flex justify-start">
                                    <span class="bg-as text-white rounded p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </span>
                                </div>
                                <h2 class="font-semibold text-xl">Passionate</h2>
                                <p class="mb-0">We believe in employees who are passionate about what they do, thoughtful and reliable, with a high level of integrity.</p>
                            </div>
                            <div id="in" class="grid gap-3 mb-5 px-5">
                                <div class="flex justify-start">
                                    <span class="bg-as text-white rounded p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                        </svg>
                                    </span>
                                </div>
                                <h2 class="font-semibold text-xl">Tools</h2>
                                <p class="mb-0">We offer easy to use tools here to assist in tailoring out what kind of person best fit your needs and deliver results for businesses in all industries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div class="bg-gray-100">
            <div class="container mx-auto py-16 px-5 xl:px-28">
                <div class="flex justify-center mb-9">
                    <a class="text-2xl px-9 py-4 rounded-lg bg-as text-white hover:bg-transparent font-semibold hover:text-as hover:ring-2 ring-as" href="https://app.analogueshifts.com/tools/hire">Find Top Talents</a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a href="https://app.analogueshifts.com" class="bg-as/80 bg-opacity-80 backdrop-blur-lg drop-shadow-lg rounded p-5 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-as">
                        <div>
                            <div class="h-16 w-16 border-white border-2  flex items-center justify-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                            </div>
    
                            <h2 class="mt-6 text-xl font-semibold text-slate-700">Product Managers</h2>
    
                            <p class="mt-4 text-slate-700 text-xs leading-relaxed">
                                Highly skilled product managers trained in the development and release of products. That is, create and manage the product roadmap, track product performance, and provide feedback to stakeholders.
                            </p>
                        </div>
    
                        {{-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg> --}}
                    </a>
    
                    <a href="https://app.analogueshifts.com" class="bg-as/80 bg-opacity-80 backdrop-blur-lg drop-shadow-lg rounded p-5 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-as">
                        <div>
                            <div class="h-16 w-16 border-white border-2  flex items-center justify-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                </svg>
                            </div>
    
                            <h2 class="mt-6 text-xl font-semibold text-slate-700">Project Managers</h2>
    
                            <p class="mt-4 text-slate-700 text-xs leading-relaxed">
                                Hire skilled professionals who organize, plan, and execute projects within constraints like budgets and schedules. Also, lead entire teams, define project goals, communicate with stakeholders, and see a project through to its closure.
                            </p>
                        </div>
    
                        {{-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg> --}}
                    </a>
    
                    <a href="https://app.analogueshifts.com" class="bg-as/80 bg-opacity-80 backdrop-blur-lg drop-shadow-lg rounded p-5 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-as">
                        <div>
                            <div class="h-16 w-16 border-white border-2  flex items-center justify-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                                </svg>
                            </div>
    
                            <h2 class="mt-6 text-xl font-semibold text-slate-700">UI/IX</h2>
    
                            <p class="mt-4 text-slate-700 text-xs leading-relaxed">
                                Hire skilled professionals who can identify new opportunities to create better user experiences. Aesthetically pleasing branding strategies help them effectively reach more customers. They also ensure that the end-to-end product or service journey meets desired outcomes.
                            </p>
                        </div>
    
                        {{-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg> --}}
                    </a>
    
                    <a href="https://app.analogueshifts.com" class="bg-as/80 bg-opacity-80 backdrop-blur-lg drop-shadow-lg rounded p-5 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-as">
                        <div>
                            <div class="h-16 w-16 border-white border-2  flex items-center justify-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                </svg>
                            </div>
    
                            <h2 class="mt-6 text-xl font-semibold text-slate-700">Data Analysts</h2>
    
                            <p class="mt-4 text-slate-700 text-xs leading-relaxed">
                                Hire highly skilled data analysts trained in collecting and interpreting data, analysing results, reporting the results back to the relevant stakeholders.
                            </p>
                        </div>
    
                        {{-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg> --}}
                    </a>
    
                    <a href="https://app.analogueshifts.com" class="bg-as/80 bg-opacity-80 backdrop-blur-lg drop-shadow-lg rounded p-5 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-as">
                        <div>
                            <div class="h-16 w-16 border-white border-2  flex items-center justify-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                </svg>
                            </div>
    
                            <h2 class="mt-6 text-xl font-semibold text-slate-700">Developers</h2>
    
                            <p class="mt-4 text-slate-700 text-xs leading-relaxed">
                               Hire skilled developers trained to build and create software and applications. In addition, our professionals can debug and execute a software application's source code.
                            </p>
                        </div>
                        
                        {{-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg> --}}
                    </a>
    
                    <a href="https://app.analogueshifts.com" class="bg-as/80 bg-opacity-80 backdrop-blur-lg drop-shadow-lg rounded p-5 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-as">
                        <div>
                            <div class="h-16 w-16 border-white border-2  flex items-center justify-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                                </svg>
                            </div>
    
                            <h2 class="mt-6 text-xl font-semibold text-slate-700">DevOps Engineers</h2>
    
                            <p class="mt-4 text-slate-700 text-xs leading-relaxed">
                                Hire skilled professionals trained to oversee code release and combine an understanding of both engineering and coding. Our professionals can create and implement systems software, analyze data, and improve existing ones.
                            </p>
                        </div>
                        
                        {{-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg> --}}
                    </a>
    
                    <a href="https://app.analogueshifts.com" class="bg-as/80 bg-opacity-80 backdrop-blur-lg drop-shadow-lg rounded p-5 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-as">
                        <div>
                            <div class="h-16 w-16 border-white border-2  flex items-center justify-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg>
                            </div>
    
                            <h2 class="mt-6 text-xl font-semibold text-slate-700">Business Analysts</h2>
    
                            <p class="mt-4 text-slate-700 text-xs leading-relaxed">
                                Hire top business analysts trained in the how-to guide of improving processes, products, and services through data analysis.
                            </p>
                        </div>
                        
                        {{-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg> --}}
                    </a>
    
                    <a href="https://app.analogueshifts.com" class="bg-as/80 bg-opacity-80 backdrop-blur-lg drop-shadow-lg rounded p-5 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-as">
                        <div>
                            <div class="h-16 w-16 border-white border-2  flex items-center justify-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                                </svg>
                            </div>
    
                            <h2 class="mt-6 text-xl font-semibold text-slate-700">Virtual Assistants</h2>
    
                            <p class="mt-4 text-slate-700 text-xs leading-relaxed">
                                Hire highly skilled virtual assistants that can perform tasks that are difficult or time-consuming and provide a level of convenience and flexibility. Schedule appointments, travel arrangements, manage email and social media accounts and provide customer service.
                            </p>
                        </div>
                        
                        {{-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg> --}}
                    </a>
    
                    <a href="https://app.analogueshifts.com" class="bg-as/80 bg-opacity-80 backdrop-blur-lg drop-shadow-lg rounded p-5 flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-as">
                        <div>
                            <div class="h-16 w-16 border-white border-2  flex items-center justify-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>
                            </div>
    
                            <h2 class="mt-6 text-xl font-semibold text-slate-700">Social Media Managers</h2>
    
                            <p class="mt-4 text-slate-700 text-xs leading-relaxed">
                                Hire top social media managers that can represent your company globally through your social channels. They are trained in the right tips for building a brand voice and online presence.
                            </p>
                        </div>
                        
                        {{-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-white w-6 h-6 mx-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg> --}}
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Testimonial section-->
        <div class="bg-white">
            <div class="container mx-auto py-20 px-3 md:px-9 xl:px-28">
                <div class="flex justify-center">
                    <div class="w-[800px]">
                        <div class="text-center">
                            <div class="text-2xl mb-4 italic">"Your Success in Recruitment and Technical Support is our Priority. Welcome to Analogue Shifts, where we blend the expertise of recruitment with the precision of technical support to deliver exceptional results for your business. We understand that finding top talent and providing reliable technical assistance are crucial to driving your company’s growth."</div>
                            <div class="flex items-center justify-center gap-5">
                                <img class="object-cover rounded-full h-11 w-11" src="/images/team/ceo.jpeg" alt="..." />
                                <div class="font-bold">
                                    Kenneth Malaka
                                    <span class="bold text-as mx-1">/</span>
                                    CEO, Nigeria
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog preview section-->
        <section class="">
            <div class="container mx-auto py-20 px-3 md:px-9 xl:px-28">
                <div class="grid justify-center gap-7">
                    <div class="">
                        <div class="grid gap-5 text-center">
                            <h2 class="text-4xl font-bold">From our blog</h2>
                            <p class="text-gray-800 text-xl lg:w-[500px] mb-5">Here, you'll find the latest updates and developments from our recruitment company, including our unique approach to connecting top talent with companies in need.</p>
                            <div class="flex justify-center">
                                <a class="text-2xl px-9 py-4 rounded-lg bg-as text-white hover:bg-transparent font-semibold hover:text-as hover:ring-2 ring-as" href="/blog">Blog</a>
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