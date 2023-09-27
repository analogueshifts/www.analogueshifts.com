import * as React from "react"
import { Link } from "gatsby"
import NotFound from "../images/1.jpg"
import SeoController from "../lib/SeoController"


export const Head = () => <SeoController seoData={seoData} />

const seoData = {
  title: "404",
  description:
    "Next SEO packages simplifies the SEO management in Next Apps with less configurations",
  canonical: "www.analogueshifts.com",
  ogImage: "/images/a4.jpg",
}

export default function NotFoundPage() {



  return (
    <>
      <section className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
        <div className="container mx-auto py-5 px-3 md:px-9 xl:px-28">
          <div className="bg-white border-0 shadow rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-12">
              <div className="grid lg:col-span-6">
                <img className="object-cover h-full w-full" src={NotFound} alt="404" />
              </div>
              <div className="grid lg:col-span-6 py-16 px-3 lg:px-9">
                <div className="grid gap-5 p-4">
                  <Link
                    className="text-gray-500 font-semibold text-md p-3 border hover:ml-3"
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="text-gray-500 font-semibold text-md p-3 border hover:ml-3"
                    to="/blog"
                  >
                    Blog
                  </Link>
                  <Link
                    className="text-gray-500 font-semibold text-md p-3 border hover:ml-3"
                    to="/jobs"
                  >
                    Jobs
                  </Link>
                  <Link
                    className="text-gray-500 font-semibold text-md p-3 border hover:ml-3"
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    className="text-gray-500 font-semibold text-md p-3 border hover:ml-3"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}