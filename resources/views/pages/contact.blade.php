@extends('layouts.app')

@section('content')

    <main class="grid">

        <!-- Page content-->
        <section class="">
            <div class="container mx-auto py-20 px-5 xl:px-28">
                <!-- Contact form-->
                <div class="bg-gray-200 rounded-md py-16">
                    <div class="text-center mb-5">
                        <div class="flex justify-center w-full">
                            <span class="bg-as text-white p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-9 h-9">
                                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                                </svg>
                            </span>
                        </div>
                        <h1 class="text-3xl font-bold">Get in touch</h1>
                        <p class="font-semibold text-gray-500 mb-0">We'd love to hear from you</p>
                    </div>
                    <div class="grid gap-5 mx-5 lg:mx-80">
                        <form class="grid gap-5 w-full" data-sb-form-api-token="API_TOKEN">
                            <!-- Name input-->
                            <div class="grid gap-2">
                                <input class="border border-black outline-none w-full py-3 px-5 rounded-md" id="name" type="text" placeholder="Enter your name" data-sb-validations="required" />
                                <div class="hidden" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <!-- Email address input-->
                            <div class="grid gap-2">
                                <input class="border border-black outline-none w-full py-3 px-5 rounded-md" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <div class="hidden" data-sb-feedback="email:required">An email is required.</div>
                            </div>
                            <!-- Phone number input-->
                            <div class="grid gap-2">
                                <input class="border border-black outline-none w-full py-3 px-5 rounded-md" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <div class="hidden" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            <!-- Message input-->
                            <div class="grid gap-2">
                                <textarea class="border  border-black outline-none w-full py-3 px-5 rounded-md" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
                                <div class="hidden" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted-->
                            <div class="hidden w-full" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form-->
                            <div class="hidden w-full" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            <!-- Submit Button-->
                            <div class="flex w-full"><button class="bg-as text-white w-full py-3 px-5 rounded-md disabled" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>
                <!-- Contact cards-->
                <div class="grid lg:grid-cols-4 gap-5 py-20 px-5">
                    <div class="grid lg:col-span-1 gap-2 items-start h-full w-full">
                        <div class="flex justify-start items-start pb-2">
                            <span class="bg-as text-white rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                </svg>
                            </span>
                        </div>
                        <div class="flex items-start text-lg font-bold">Chat with us</div>
                        <p class="flex items-start text-gray-500">Chat live with one of our support specialists.</p>
                    </div>
                    <div class="grid lg:col-span-1 gap-2 items-start h-full w-full">
                        <div class="flex justify-start items-start pb-2">
                            <span class="bg-as text-white rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>
                            </span>
                        </div>
                        <div class="flex items-start text-lg font-bold">Ask the community</div>
                        <p class="flex items-start text-gray-500">Explore our community forums and communicate with users.</p>
                    </div>
                    <div class="grid lg:col-span-1 gap-2 items-start h-full w-full">
                        <div class="flex justify-start items-start pb-2">
                            <span class="bg-as text-white rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>
                            </span>
                        </div>
                        <div class="flex items-start text-lg font-bold">Support center</div>
                        <p class="flex items-start text-gray-500">Browse FAQ's and support articles to find solutions.</p>
                    </div>
                    <div class="grid lg:col-span-1 gap-2 items-start h-full w-full">
                        <div class="flex justify-start items-start pb-2">
                            <span class="bg-as text-white rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </span>
                        </div>
                        <div class="flex items-start text-lg font-bold">Call us</div>
                        <p class="flex items-start text-gray-500">Call us during normal business hours at (555) 892-9403.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
@endsection
