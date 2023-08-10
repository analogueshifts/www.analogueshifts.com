<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactForm;
use Artesaos\SEOTools\Facades\SEOTools;

class ContactController extends Controller
{

    public function contact()
    {
        SEOTools::setTitle('24/7 Contact Center');
        SEOTools::setDescription('Have a question for Analogueshifts? Our team is here to help. Contact us today to learn more about our recruitment services or to discuss your organizations hiring needs');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com/contact');
        SEOTools::setCanonical('https://analogueshifts.com/contact');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://analogueshifts.com/logo.png');

        return view('pages.contact', [
            'ogImage' => '/logo.png',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        
        $validated = $request->validate([
            'name' => ['required', 'string', 'min:3', 'max:50'],
            'email' => ['required', 'string', 'min:3', 'max:50', 'email'],
            'tel' => ['string', 'max:50'],
            'subject' => ['string', 'max:255'],
            'message' => ['required', 'string', 'min:5', 'max:500'],
        ]);

        $data = array(
            "name" => $validated['name'],
            "email" => $validated['email'],
            "tel" => $validated['tel'],
            "subject" => $validated['subject'],
            'message' => $validated['message'],
        );


        Mail::to('hello@analogueshifts.com')
            ->cc('support@analogueshifts.com')
            ->bcc('Kennethmalaka@gmail.com')
            ->send(new ContactForm($data));
        return redirect()->route('contact')->with('success', "Thank you for reaching out to us. One of our team members will be in touch with you soon to address your inquiry. If you need immediate assistance, please don't hesitate to give us a call or visit any of our social platforms.");

    }

}
