<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Artesaos\SEOTools\Facades\SEOTools;

class BlogController extends Controller
{
    public function __construct()
    {
        return $this->middleware(['auth', 'verified'])
            ->except(["index", 'show']);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        SEOTools::setTitle('Blog');
        SEOTools::setDescription('AnalogueShifts is a Project Management and Talent Acquisition Company');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com/blog');
        SEOTools::setCanonical('https://analogueshifts.com/blog');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://analogueshifts.com/logo.png');
        
        $blogs = Blog::orderBy('id', 'desc')->paginate(9);
        $news = Blog::orderBy('id', 'desc')->paginate(3);
        return view("pages.blog.index", [
            'ogImage' => '/logo.png',
            'news'=> $news
        ])->with('blogs', $blogs);
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        SEOTools::setTitle('Blog');
        SEOTools::setDescription('AnalogueShifts is a Project Management and Talent Acquisition Company');
        SEOTools::opengraph()->setUrl('https://analogueshifts.com/blog/' . $blog->slug);
        SEOTools::setCanonical('https://analogueshifts.com/blog/' . $blog->slug);
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@AnalogueShifts');
        SEOTools::jsonLd()->addImage('https://analogueshifts.com/blog/' . $blog->thumbnail);
        
        return view("pages.blog.view", [
            "ogImage" => "https://app.analogueshifts.com/$blog->thumbnail",
            "blog" => $blog,
        ]);
    }
}
