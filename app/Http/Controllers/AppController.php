<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Artesaos\SEOTools\Facades\SEOTools;

class AppController extends Controller
{
    public function index(){
        SEOTools::setTitle('Home');
        SEOTools::setDescription('AnalogueShifts is a Project Management and Talent Acquisition Company');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com');
        SEOTools::setCanonical('https://analogueshifts.com');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://analogueshifts.com/load.jpg');

        $blogs = Blog::orderBy('id', 'desc')->paginate(3);
        return view('pages.index', [
            'ogImage' => '/resume.jpeg',
            // "blogs" => Blog::latest()->paginate(1)->get(),
        ])->with('blogs', $blogs);
    }

    public function about(){
        SEOTools::setTitle('About');
        SEOTools::setDescription('AnalogueShifts is a Project Management and Talent Acquisition Company');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com/about');
        SEOTools::setCanonical('https://analogueshifts.com/about');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://analogueshifts.com/load.jpg');

        return view('pages.about', [
            'ogImage' => '/resume.jpeg',
        ]);
    }

    public function contact()
    {
        SEOTools::setTitle('Contact');
        SEOTools::setDescription('AnalogueShifts is a Project Management and Talent Acquisition Company');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com/contact');
        SEOTools::setCanonical('https://analogueshifts.com/contact');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://analogueshifts.com/load.jpg');

        return view('pages.contact', [
            'ogImage' => '/resume.jpeg',
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
        SEOTools::jsonLd()->addImage('https://analogueshifts.com/load.jpg');

        return view('pages.pricing', [
            'ogImage' => '/resume.jpeg',
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
        SEOTools::jsonLd()->addImage('https://analogueshifts.com/load.jpg');

        return view('pages.faq', [
            'ogImage' => '/resume.jpeg',
        ]);
    }
    
    public function tools()
    {
        SEOTools::setTitle('Tools');
        SEOTools::setDescription('AnalogueShifts is a Project Management and Talent Acquisition Company');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com/tools');
        SEOTools::setCanonical('https://analogueshifts.com/tools');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://analogueshifts.com/load.jpg');

        return view('pages.tools.index', [
            'ogImage' => '/resume.jpeg',
        ]);
    }
}
