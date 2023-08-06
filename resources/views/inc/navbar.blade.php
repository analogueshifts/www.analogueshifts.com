<nav class="bg-white border-b border-gray-100">
    <div class="container mx-auto py-5 px-3 md:px-9 xl:px-28">
        <div class="flex justify-between items-center h-16">
            <div class="flex justify-between">
                <div class="flex items-center h-9 w-auto fill-current text-gray-800 shrink-0">
                    <a href="/" class="flex gap-3">
                        <img src="/logo.png" class="w-12 h-12" alt="" />
                        <h3 class="md:text-xl text-lg font-bold uppercase text-zinc-600 leading-5">
                            <span class="tracking-widest text-yellow-400">Analogue</span>
                            <br />
                            <span class="tracking-[1rem]">Shifts</span>
                        </h3>
                    </a>
                </div>
                <div class="hidden space-x-8 sm:-my-px sm:ml-10 lg:flex items-center">
                    <a href={{route('about')}}>
                        About
                    </a>
                    <a href="/blog">
                        Blog
                    </a>
                    <a href={{route('jobs')}}>
                        Jobs
                    </a>
                    <a href={{route('learn')}}>
                        Learn
                    </a>
                    <a href={{route('tools')}}>
                        Tools
                    </a>
                    <a href={{route('contact')}}>
                        Contact
                    </a>
                </div>
            </div>
            
            <div>
                <div class="hidden lg:flex sm:items-center sm:ml-6">
                    <div class="ml-3 relative">        
                        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-sm text-center inline-flex items-center" type="button">
                            <span class="text-white bg-as hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </span>
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                                <li>
                                    <a href="https://app.analogueshifts.com/login" class="block px-4 py-2 hover:bg-gray-100">Log In</a>
                                </li>
                                <li>
                                    <a href="https://app.analogueshifts.com/register" class="block px-4 py-2 hover:bg-gray-100">Register</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button id="navBtn" class="lg:hidden sm:items-center sm:ml-6">
                    <div class="ml-3 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    </div>
    
    <div id="navBar" class="hidden lg:hidden border-b-black">
        <ul class="text-gray-700 font-semibold py-7 text-sm">
            <li>
                <a href={{route('about')}} class="block px-4 py-3 hover:bg-gray-100">About</a>
            </li>
            <li>
                <a href="/blog" class="block px-4 py-3 hover:bg-gray-100">Blog</a>
            </li>
            <li>
                <a href={{route('jobs')}} class="block px-4 py-3 hover:bg-gray-100">Jobs</a>
            </li>
            <li>
                <a href={{route('learn')}} class="block px-4 py-3 hover:bg-gray-100">Learn</a>
            </li>
            <li>
                <a href={{route('tools')}} class="block px-4 py-3 hover:bg-gray-100">Tools</a>
            </li>
            <li>
                <a href={{route('contact')}} class="block px-4 py-3 border-b-2 hover:bg-gray-100">Contact</a>
            </li>
            <li>
                <a href="https://app.analogueshifts.com/login" class="block px-4 py-3 hover:bg-gray-100">Login in</a>
            </li>
            <li>
                <a href="https://app.analogueshifts.com/register" class="block px-4 py-3 hover:bg-gray-100">Register</a>
            </li>
        </ul>
    </div>
</nav>