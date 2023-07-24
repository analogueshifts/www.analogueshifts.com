<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Artesaos\SEOTools\Facades\SEOTools;

class AppController extends Controller
{
    public function index(){
        SEOTools::setTitle('Tech Talent Recruitment and Acquisition');
        SEOTools::setDescription('Looking for the best tech talent worldwide? Analogueshifts is the recruitment agency for you. Our team of experts can help you streamline recruitment and find the perfect talent for your organization.');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com');
        SEOTools::setCanonical('https://analogueshifts.com');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://analogueshifts.com/logo.png');

        $blogs = Blog::orderBy('id', 'desc')->paginate(3);
        return view('pages.index', [
            'ogImage' => '/logo.png',
            // "blogs" => Blog::latest()->paginate(1)->get(),
        ])->with('blogs', $blogs);
    }

    public function about(){
        SEOTools::setTitle('About Us');
        SEOTools::setDescription('At Analogueshifts, we are passionate about connecting employers with top tech talent from around the world. Our team of experts brings years of experience and industry knowledge to every recruitment search. Learn more about us and our mission today.');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com/about');
        SEOTools::setCanonical('https://analogueshifts.com/about');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://analogueshifts.com/logo.png');

        return view('pages.about', [
            'ogImage' => '/logo.png',
        ]);
    }

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

    public function pricing()
    {
        SEOTools::setTitle('Pricing');
        SEOTools::setDescription('AnalogueShifts is a Project Management and Talent Acquisition Company');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com/pricing');
        SEOTools::setCanonical('https://analogueshifts.com/pricing');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://analogueshifts.com/logo.png');

        return view('pages.pricing', [
            'ogImage' => '/logo.png',
        ]);
    }

    public function faq()
    {
        SEOTools::setTitle('FAQ');
        SEOTools::setDescription('AnalogueShifts is a Project Management and Talent Acquisition Company');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com/faq');
        SEOTools::setCanonical('https://analogueshifts.com/faq');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://analogueshifts.com/logo.png');

        return view('pages.faq', [
            'ogImage' => '/logo.png',
        ]);
    }
    
    public function tools()
    {
        SEOTools::setTitle('Talent Recruitment Tools');
        SEOTools::setDescription('Looking for the right tools to streamline your recruitment process? Analogueshifts has you covered. Our tools page offers a variety of resources, from applicant tracking systems to candidate assessment tools, to help you find the perfect candidate for your organization.');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com/tools');
        SEOTools::setCanonical('https://analogueshifts.com/tools');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://analogueshifts.com/logo.png');

        return view('pages.tools.index', [
            'ogImage' => '/logo.png',
        ]);
    }
}
