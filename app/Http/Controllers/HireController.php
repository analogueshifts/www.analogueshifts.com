<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Hire;
use Artesaos\SEOTools\Facades\SEOTools;

class HireController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function jobs()
    {
        SEOTools::setTitle('Jobs');
        SEOTools::setDescription('AnalogueShifts is a Project Management and Talent Acquisition Company');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com/jobs');
        SEOTools::setCanonical('https://analogueshifts.com/jobs');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://app.analogueshifts.com/logo.png');

        $jobs = Hire::orderBy('id', 'desc')->paginate(9);
        return view("pages/jobs/index", [
            'ogImage' => '/logo.png',
            // "jobs" => Hire::where('display', '1')->latest()->get(),
        ])->with('jobs', $jobs);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Hire $job)
    {
        SEOTools::setTitle('Jobs');
        SEOTools::setDescription('AnalogueShifts is a Project Management and Talent Acquisition Company');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com/jobs');
        SEOTools::setCanonical('https://analogueshifts.com/jobs');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://app.analogueshifts.com/logo.png');
        return view("pages/jobs/view", [
            "ogImage" => "/logo.png",
            "job" => $job,
        ]);
    }
}
