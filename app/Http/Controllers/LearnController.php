<?php

namespace App\Http\Controllers;

use App\Models\Learn;
use Artesaos\SEOTools\Facades\SEOTools;

class LearnController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        SEOTools::setTitle('Learn');
        SEOTools::setDescription('AnalogueShifts is a Project Management and Talent Acquisition Company');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com/learn');
        SEOTools::setCanonical('https://analogueshifts.com/learn');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://app.analogueshifts.com/logo.png');
        return view("pages.learn.index", [
            "ogImage" => "/logo.png",
            "learns" => Learn::latest()->get(),
        ]);
    }

    
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

}
