'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import Curve from '@/public/images/curve.png'
import DummyUser from '@/public/images/dummy_user.png'

//Data
import { modesDummyData } from './data'

export default function Dashboard() {
    const [selectedMode, setSelectedMode] = useState('Buy')
    const [user, setUser] = useState(null)

    useEffect(() => {
        let storedData = JSON.parse(
            window.localStorage.getItem('analogueshifts'),
        )
        if (storedData) {
            setUser(storedData[0].user)
        }
    }, [])

    return (
        <Authenticated
            user={user}
            header={
                <h2 className="font-semibold text-lg text-gray-500 leading-tight">
                    Dashboard
                </h2>
            }>
            <div className="w-full min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)]">
                <div className="w-full h-60 rounded-2xl bg-tremor-background-brown flex justify-end">
                    <Image src={Curve} alt="" />
                </div>
                <div className="bg-white -translate-y-12 ml-5 h-max w-[calc(100%-40px)] px-5 pb-5 rounded-xl flex flex-col">
                    {/* Profile Overview */}
                    <Image
                        src={DummyUser}
                        alt="Profile"
                        className="rounded-full h-28 w-28 -translate-y-12"
                    />
                    <div className="-translate-y-5">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {user?.name}
                        </h2>
                        <p className="text-gray-600">{user?.email}</p>
                        {/* <p className="text-blue-500">Nigeria</p> */}
                    </div>
                    {/* Metric Overview */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* Metric Card 1 */}
                        <div className="bg-white p-4 rounded-xl shadow-xl">
                            <p className="text-base truncate lg:text-xl font-bold text-blue-600">
                                Hire Talents
                            </p>
                            <p className="text-gray-600">500+</p>
                        </div>

                        {/* Metric Card 2 */}
                        <div className="bg-white p-4 rounded-xl shadow-xl">
                            <p className="text-base truncate lg:text-xl font-bold text-green-600">
                                Vetting System
                            </p>
                            <p className="text-gray-600">25</p>
                        </div>

                        {/* Metric Card 3 */}
                        <div className="bg-white p-4 rounded-xl shadow-xl">
                            <p className="text-base truncate lg:text-xl font-bold text-yellow-600">
                                Recommendations
                            </p>
                            <p className="text-gray-600">12</p>
                        </div>

                        {/* Metric Card 4 */}
                        <div className="bg-white p-4 rounded-xl shadow-xl">
                            <p className="text-base truncate lg:text-xl font-bold text-red-600">
                                Projects
                            </p>
                            <p className="text-gray-600">8</p>
                        </div>
                    </div>

                    {/* Modes Button Row */}
                    <div className="flex flex-col pt-12">
                        <p className="w-full text-center font-medium text-[#D2D2D2] text-[13px]">
                            YOUR MODES
                        </p>
                        <div className="w-full flex pt-8 justify-center gap-1.5">
                            <button
                                onClick={() => setSelectedMode('Buy')}
                                className={`w-28 lg:w-36 py-2.5 rounded-full text-[15px] font-bold duration-300 hover:scale-105 ${
                                    selectedMode === 'Buy'
                                        ? 'text-white bg-tremor-background-darkYellow border border-solid border-tremor-background-darkYellow'
                                        : 'bg-transparent text-tremor-background-darkYellow border border-solid border-tremor-background-darkYellow'
                                }`}>
                                Buy
                            </button>
                            <button
                                onClick={() => setSelectedMode('Sell')}
                                className={`w-28 lg:w-36 py-2.5 hover:scale-105 rounded-full text-[15px] font-bold duration-300 ${
                                    selectedMode === 'Sell'
                                        ? 'text-white bg-tremor-background-darkYellow border border-solid border-tremor-background-darkYellow'
                                        : 'bg-transparent text-tremor-background-darkYellow border border-solid border-tremor-background-darkYellow'
                                }`}>
                                Sell
                            </button>
                        </div>
                        <div className="w-full pt-9 flex flex-col gap-6">
                            {selectedMode === 'Buy'
                                ? modesDummyData.buy.map(data => {
                                      return (
                                          <div
                                              key={crypto.randomUUID()}
                                              className="w-full border-b flex flex-wrap pb-5 justify-between items-center gap-y-2">
                                              <div className="flex gap-2 flex-wrap items-center">
                                                  <Image
                                                      src={data.image}
                                                      alt=""
                                                  />
                                                  <div className="flex flex-col gap-1.5">
                                                      <p className="text-xs font-normal text-black/40">
                                                          {data.company}
                                                      </p>
                                                      <p className="text-sm font-semibold text-black/80">
                                                          {data.title}
                                                      </p>
                                                      <div className="flex gap-1.5 flex-wrap">
                                                          <div className="px-5 bg-[#f2f2f2] rounded py-1 text-black/80 text-[10px] font-normal">
                                                              {data.salary}
                                                          </div>
                                                          <div className="px-5 bg-[#f2f2f2] rounded py-1 text-black/80 text-[10px] font-normal">
                                                              {data.location}
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="flex gap-2 items-center">
                                                  <button
                                                      className={`w-24 lg:w-28 py-2 hover:scale-105 rounded-full text-xs font-bold duration-300 text-white bg-tremor-background-darkYellow border border-solid border-tremor-background-darkYellow`}>
                                                      Apply
                                                  </button>
                                                  <p className="text-xs font-normal text-black/60">
                                                      Just Now!
                                                  </p>
                                              </div>
                                          </div>
                                      )
                                  })
                                : modesDummyData.sell.map(data => {
                                      return (
                                          <div
                                              key={crypto.randomUUID()}
                                              className="w-full border-b gap-y-2 flex flex-wrap pb-5 justify-between items-center">
                                              <div className="flex gap-2 flex-wrap items-center">
                                                  <Image
                                                      src={data.image}
                                                      alt=""
                                                  />
                                                  <div className="flex flex-col gap-1.5">
                                                      <p className="text-xs font-normal text-black/40">
                                                          {data.company}
                                                      </p>
                                                      <p className="text-sm font-semibold text-black/80">
                                                          {data.title}
                                                      </p>
                                                      <div className="flex gap-1.5 flex-wrap">
                                                          <div className="px-5 bg-[#f2f2f2] rounded py-1 text-black/80 text-[10px] font-normal">
                                                              {data.salary}
                                                          </div>
                                                          <div className="px-5 bg-[#f2f2f2] rounded py-1 text-black/80 text-[10px] font-normal">
                                                              {data.location}
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="flex gap-2 items-center">
                                                  <button
                                                      className={`w-24 lg:w-28 py-2 hover:scale-105 rounded-full text-xs font-bold duration-300 text-white bg-tremor-background-darkYellow border border-solid border-tremor-background-darkYellow`}>
                                                      Apply
                                                  </button>
                                                  <p className="text-xs font-normal text-black/60">
                                                      Just Now!
                                                  </p>
                                              </div>
                                          </div>
                                      )
                                  })}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden"></div>
            </div>
        </Authenticated>
    )
}
