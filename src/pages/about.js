import React, { useEffect } from "react"
import { Link } from "gatsby"
import gsap from 'gsap'
import AppLayout from '../components/Layouts/AppLayout'
import LandImg from "../images/1.jpg"
import AboutImg from "../images/about/1.jpg"
import AboutImg2 from "../images/about/2.jpg"
import CeoImg from "../images/team/ceo.jpeg"
import SocialImg from "../images/team/social.jpg"
import TechnicalImg from "../images/team/recruit.jpg"
import DirectorImg from "../images/team/director.jpg"
import DevImg from "../images/team/dev.png"
import LawyerImg from "../images/team/lawyer.jpeg"
import SeoController from "../lib/SeoController"

export const Head = () => <SeoController seoData={seoData} />
const seoData = {
    title: 'About Us',
    description:
        "At Analogueshifts, we're passionate about connecting employers with top tech talent from around the world. Our team of experts brings years of experience and industry knowledge to every recruitment search. Learn more about us and our mission today.",
    canonical: 'https://analogueshifts.com/about',
    ogImage: '/images/a4.jpg',
}

export default function About() {

    useEffect(() => {
        // Animation for the main heading
        gsap.from('#title', {
            opacity: 0,
            x: -50,
            duration: 1,
            delay: 0.5,
        })

        // Animation for the job description section
        gsap.from('#intro', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
            stagger: 0.2,
        })

        // Animation for the contact form section
        gsap.from('#form', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
        })

        // Animation for the contact cards
        gsap.from('#card', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 1,
            stagger: 0.2,
        })
    }, [])

    return (
      <AppLayout>
        <div>
          {/* Page Content */}
          <section className="">
            <div className="container mx-auto py-5 px-3 md:px-9 xl:px-28">
              <h1 id="title" className="font-bold text-2xl mb-9">
                About AnalogueShifts
              </h1>
              <div className="bg-white border-0 shadow rounded-lg overflow-hidden">
                <div className="grid lg:grid-cols-12">
                  <div className="grid lg:col-span-6 py-16 px-3 lg:px-9">
                    <div id="intro" className="grid gap-5 lg:w-96 p-4">
                      <div className="text-3xl font-bold">
                        Learn about AnalogueShifts
                      </div>
                      <p>
                        AnalogueShifts is a Project Management and Talent
                        Acquisition Company. Our mission is to solve the problem
                        of cost for Startups and Large scale companies abroad by
                        sourcing the best talents for clients. We are equipped
                        with the most talented work force across the globe and
                        we are ready to work 24/7.
                      </p>
                    </div>
                  </div>
                  <div className="grid lg:col-span-6">
                    <img className="object-cover h-full w-full" src={LandImg} alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Header */}
          <header className="bg-gray-50">
            <div className="container mx-auto py-5 px-3 md:px-9 xl:px-28">
              <div className="grid justify-center">
                <div className="md:w-[700px]">
                  <div className="grid lg:flex lg:flex-col gap-5 text-center my-5">
                    <h1 className="text-4xl font-bold mb-3">
                      Our mission is to make hiring easier for everyone.
                    </h1>
                    <p className="text-xl text-gray-500 mb-4">
                      Our mission is to solve the problem of cost for Startups
                      and Large scale companies abroad by sourcing the best
                      talents for clients.
                    </p>
                    <div className="flex justify-center">
                      <Link
                        className="bg-as text-white text-xl py-3 px-5 rounded-md"
                        href="#scroll-target"
                      >
                        Read our story
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* About section one */}
          <section className="bg-gray-100" id="scroll-target">
            <div className="container mx-auto py-5 px-3 md:px-9 xl:px-28">
              <div className="grid lg:flex lg:grid-cols-2 gap-5 items-center">
                <div className="grid lg:col-span-1 h-full w-full">
                  <img
                    className="object-cover h-full w-full rounded-md"
                    src={AboutImg}
                    alt="..."
                  />
                </div>
                <div className="grid lg:col-span-1 gap-5 h-full w-full">
                  <h2 className="text-3xl font-bold">About us</h2>
                  <p className="text text-gray-500 text-xl mb-0">
                    AnalogueShifts is a Project Management and Talent
                    Acquisition Company. Our mission is to solve the problem of
                    cost for Startups and Large scale companies abroad by
                    sourcing the best talents for clients. We are equipped with
                    the most talented work force across the globe and we are
                    ready to work 24/7.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* About section two */}
          <section className="bg-gray-100" id="scroll-target">
            <div className="container mx-auto py-5 px-3 md:px-9 xl:px-28">
              <div className="grid lg:flex lg:flex-row-reverse lg:grid-cols-2 gap-5 items-center">
                <div className="grid lg:col-span-1 h-full w-full">
                  <img
                    className="object-cover h-full w-full rounded-md"
                    src={AboutImg2}
                    alt="..."
                  />
                </div>
                <div className="grid lg:col-span-1 gap-5 h-full w-full">
                  <h2 className="text-3xl font-bold">What we do</h2>
                  <p className="text text-gray-500 text-xl mb-0">
                    We are a dynamic and motivated team of people who share the
                    same goal to find the right talent for your company. We
                    offer high quality services and will help you with anything
                    we can from the recruitment stage up until you have made a
                    final decision. We are here to understand exactly what kind
                    of person you want, to tailor our service to best fit your
                    needs and deliver results for businesses in all industries.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Team members section */}
          <section className="bg-gray-50">
            <div className="container mx-auto py-5 px-3 md:px-9 xl:px-28">
              <div className="grid gap-3 text-center">
                <h3 className="flex justify-center text-2xl md:text-7xl text-black font-bold">
                  Our Team
                </h3>
                <p className="flex justify-center text-xl font-semibold">
                  Dedicated to quality and your success
                </p>
              </div>
              <div className="grid justify-center py-16">
                <div className="grid justify-center lg:grid-cols-3 gap-5">
                  <div className="grid justify-center rounded p-2 cursor-pointer relative">
                    <img
                      src={CeoImg}
                      className="object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg"
                      alt="CEO"
                    />
                    <div className="bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5">
                      <span className="flex justify-center">
                        Kenneth Malaka
                      </span>
                      <span className="flex justify-center text-yellow-500">
                        CEO
                      </span>
                    </div>
                  </div>
                  <div className="grid justify-center rounded p-2 cursor-pointer relative">
                    <img
                      src={TechnicalImg}
                      className="object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg"
                      alt="Technical Recruiter"
                    />
                    <div className="bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5">
                      <span className="flex justify-center">
                        Regina Maduemezia
                      </span>
                      <span className="flex justify-center text-yellow-500">
                        Technical Recruiter
                      </span>
                    </div>
                  </div>
                  <div className="grid justify-center rounded p-2 cursor-pointer relative">
                    <img
                      src={DirectorImg}
                      className="object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg"
                      alt="US Sales Director"
                    />
                    <div className="bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5">
                      <span className="flex justify-center">
                        Robert Michaelson
                      </span>
                      <span className="flex justify-center text-yellow-500">
                        US Sales Director
                      </span>
                    </div>
                  </div>
                  <div className="grid justify-center rounded p-2 cursor-pointer relative">
                    <img
                      src={SocialImg}
                      className="object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg"
                      alt="Social Media Manager"
                    />
                    <div className="bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5">
                      <span className="flex justify-center">Temi Tori</span>
                      <span className="flex justify-center text-yellow-500">
                        Social media manager
                      </span>
                    </div>
                  </div>
                  <div className="grid justify-center rounded p-2 cursor-pointer relative">
                    <img
                      src={DevImg}
                      className="object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg"
                      alt="Developer"
                    />
                    <div className="bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5">
                      <span className="flex justify-center">
                        Teslim Abdulwahab
                      </span>
                      <span className="flex justify-center text-yellow-500">
                        Developer
                      </span>
                    </div>
                  </div>
                  <div className="grid justify-center rounded p-2 cursor-pointer relative">
                    <img
                      src={LawyerImg}
                      className="object-cover grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg"
                      alt="Lawyer"
                    />
                    <div className="bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5">
                      <span className="flex justify-center">Nonye nwonsu</span>
                      <span className="flex justify-center text-yellow-500">
                        Lawyer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </AppLayout>
    )
}
