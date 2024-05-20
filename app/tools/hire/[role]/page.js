'use client'
import { useEffect, useState } from 'react'
import Authenticated from '@/app/layouts/authenticated-layout'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function Page({ params }) {
    const role = params.role
    const router = useRouter()

    // Save The Data that should be prefilled in the job posting form
    const saveData = () => {
        const currentDate = new Date()
        if (role === 'product-manager') {
            Cookies.set(
                'jobPostData',
                JSON.stringify({
                    jobInformation: {
                        title: 'Product Manager',
                        description:
                            '<p>Join our dynamic team as a Product Manager, where you will play a pivotal role in driving the success of our innovative products. As a seasoned leader, you will collaborate cross-functionally to define and execute product strategies. Responsibilities include market research, feature prioritization, and roadmap development. Your insights will guide the development team, ensuring the delivery of high-quality solutions that meet and exceed customer expectations. If you have a passion for product excellence and a proven track record in product management, we invite you to contribute to our exciting journey. Apply now and be a key player in shaping the future of our cutting-edge products.</p>',
                        identifierName: '',
                        identifierValue: '',
                        datePosted: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                        validThrough: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                    },
                    jobDetails: {
                        employmentType: {
                            id: 1,
                            name: 'FULL_TIME',
                        },
                        apply: '',
                        salaryCurrency: {
                            id: 1,
                            name: 'USD',
                        },
                        salaryValue: '6000',
                        salaryUnitText: {
                            id: 4,
                            name: 'MONTH',
                        },
                    },
                }),
            )
        } else if (role === 'project-manager') {
            Cookies.set(
                'jobPostData',
                JSON.stringify({
                    jobInformation: {
                        title: 'Project Manager',
                        description:
                            '<p>Embark on a rewarding career as a Project Manager with our dynamic team. As a Project Manager, you will be at the forefront of delivering successful projects, coordinating resources, and ensuring timely completion. Your role involves comprehensive project planning, risk management, and effective communication with stakeholders at all levels. From initiation to closure, you will lead cross-functional teams, ensuring project goals align with organizational objectives. If you thrive in a fast-paced environment, possess exceptional organizational skills, and have a track record of successfully managing projects, we invite you to apply. Join us and be instrumental in the successful execution of impactful projects that drive our company success.</p>',
                        identifierName: '',
                        identifierValue: '',
                        datePosted: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                        validThrough: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                    },
                    jobDetails: {
                        employmentType: {
                            id: 1,
                            name: 'FULL_TIME',
                        },
                        apply: '',
                        salaryCurrency: {
                            id: 1,
                            name: 'USD',
                        },
                        salaryValue: '5000',
                        salaryUnitText: {
                            id: 4,
                            name: 'MONTH',
                        },
                    },
                }),
            )
        } else if (role === 'ui-ux') {
            Cookies.set(
                'jobPostData',
                JSON.stringify({
                    jobInformation: {
                        title: 'UiUx Designer',
                        description:
                            '<p>Join our creative team as a UI/UX Designer and be at the forefront of crafting exceptional user experiences. As a UI/UX Designer, you will collaborate with cross-functional teams to design intuitive and visually appealing interfaces for our digital products. Responsibilities include user research, wireframing, prototyping, and collaborating with development teams to implement seamless user journeys. Bring your passion for design and user-centric thinking to create products that delight and engage users. If you have a keen eye for detail, a strong portfolio showcasing your design expertise, and a desire to innovate, we welcome you to contribute to shaping the next generation of our digital experiences.</p>',
                        identifierName: '',
                        identifierValue: '',
                        datePosted: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                        validThrough: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                    },
                    jobDetails: {
                        employmentType: {
                            id: 1,
                            name: 'FULL_TIME',
                        },
                        apply: '',
                        salaryCurrency: {
                            id: 1,
                            name: 'USD',
                        },
                        salaryValue: '4500',
                        salaryUnitText: {
                            id: 4,
                            name: 'MONTH',
                        },
                    },
                }),
            )
        } else if (role === 'data-analysis') {
            Cookies.set(
                'jobPostData',
                JSON.stringify({
                    jobInformation: {
                        title: 'Data Analysis',
                        description:
                            '<p>Become a key player in our data-driven decision-making process as a Data Analyst. In this role, you will be responsible for gathering, analyzing, and interpreting complex datasets to provide valuable insights that drive business strategy. Your expertise in data visualization, statistical analysis, and database querying will be crucial in uncovering trends, patterns, and opportunities. Collaborate with cross-functional teams to enhance data quality and contribute to the development of data-driven solutions. If you have a passion for transforming raw data into actionable intelligence and enjoy working with cutting-edge analytics tools, we invite you to be a part of our dynamic team.</p>',
                        identifierName: '',
                        identifierValue: '',
                        datePosted: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                        validThrough: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                    },
                    jobDetails: {
                        employmentType: {
                            id: 1,
                            name: 'FULL_TIME',
                        },
                        apply: '',
                        salaryCurrency: {
                            id: 1,
                            name: 'USD',
                        },
                        salaryValue: '4000',
                        salaryUnitText: {
                            id: 4,
                            name: 'MONTH',
                        },
                    },
                }),
            )
        } else if (role === 'developer') {
            Cookies.set(
                'jobPostData',
                JSON.stringify({
                    jobInformation: {
                        title: 'Software Developer',
                        description:
                            '<p>Join our innovative team as a Software Developer and contribute to the creation of cutting-edge software solutions. As a Software Developer, you will be involved in the entire software development lifecycle, from concept and design to testing and deployment. Collaborate with cross-functional teams to develop high-quality code that meets project requirements. Stay up-to-date with emerging technologies and contribute to the continuous improvement of our development processes. If you have a passion for coding, problem-solving, and creating scalable software solutions, we invite you to be a part of our dynamic development team.</p>',
                        identifierName: '',
                        identifierValue: '',
                        datePosted: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                        validThrough: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                    },
                    jobDetails: {
                        employmentType: {
                            id: 1,
                            name: 'FULL_TIME',
                        },
                        apply: '',
                        salaryCurrency: {
                            id: 1,
                            name: 'USD',
                        },
                        salaryValue: '5000',
                        salaryUnitText: {
                            id: 4,
                            name: 'MONTH',
                        },
                    },
                }),
            )
        } else if (role === 'devops-engineer') {
            Cookies.set(
                'jobPostData',
                JSON.stringify({
                    jobInformation: {
                        title: 'Devops Engineer',
                        description:
                            '<p>Elevate our technology infrastructure as a DevOps Engineer and play a pivotal role in streamlining our development and operations processes. As a DevOps Engineer, you will bridge the gap between development and IT operations, implementing automation, and optimizing workflows. Collaborate with cross-functional teams to deploy and maintain scalable, reliable, and secure systems. Employ best practices in continuous integration and continuous delivery (CI/CD) to enhance the efficiency of our software development lifecycle. If you have a passion for automation, infrastructure as code, and ensuring seamless software delivery, we invite you to contribute your expertise to our innovative team.</p>',
                        identifierName: '',
                        identifierValue: '',
                        datePosted: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                        validThrough: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                    },
                    jobDetails: {
                        employmentType: {
                            id: 1,
                            name: 'FULL_TIME',
                        },
                        apply: '',
                        salaryCurrency: {
                            id: 1,
                            name: 'USD',
                        },
                        salaryValue: '6000',
                        salaryUnitText: {
                            id: 4,
                            name: 'MONTH',
                        },
                    },
                }),
            )
        } else if (role === 'virtual-assistant') {
            Cookies.set(
                'jobPostData',
                JSON.stringify({
                    jobInformation: {
                        title: 'Virtual Assistant',
                        description:
                            '<p>Become an integral part of our team as a Virtual Assistant, providing administrative support and helping to streamline day-to-day operations. As a Virtual Assistant, you will handle tasks such as email management, calendar scheduling, data entry, and general administrative duties. Utilize excellent organizational and communication skills to facilitate smooth workflow and contribute to overall efficiency. This role requires a proactive and adaptable approach to support various team members and projects. If you thrive in a dynamic and remote work environment, possess strong organizational skills, and excel in multitasking, we invite you to join our team.</p>',
                        identifierName: '',
                        identifierValue: '',
                        datePosted: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                        validThrough: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                    },
                    jobDetails: {
                        employmentType: {
                            id: 1,
                            name: 'FULL_TIME',
                        },
                        apply: '',
                        salaryCurrency: {
                            id: 1,
                            name: 'USD',
                        },
                        salaryValue: '2000',
                        salaryUnitText: {
                            id: 4,
                            name: 'MONTH',
                        },
                    },
                }),
            )
        } else if (role === 'social-media-manager') {
            Cookies.set(
                'jobPostData',
                JSON.stringify({
                    jobInformation: {
                        title: 'Social Media Manager',
                        description:
                            '<p>Shape our brand presence and engagement across digital platforms as a Social Media Manager. In this role, you will be responsible for developing and implementing social media strategies to enhance brand visibility, grow audience engagement, and drive business objectives. Create compelling content, manage social media campaigns, and analyze performance metrics to optimize results. Stay informed about industry trends and leverage social media tools to maximize impact. If you have a passion for social media, creativity, and strategic thinking, we invite you to join our team and play a key role in shaping our online presence.</p>',
                        identifierName: '',
                        identifierValue: '',
                        datePosted: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                        validThrough: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                    },
                    jobDetails: {
                        employmentType: {
                            id: 1,
                            name: 'FULL_TIME',
                        },
                        apply: '',
                        salaryCurrency: {
                            id: 1,
                            name: 'USD',
                        },
                        salaryValue: '3500',
                        salaryUnitText: {
                            id: 4,
                            name: 'MONTH',
                        },
                    },
                }),
            )
        } else if (role === 'business-analysis') {
            Cookies.set(
                'jobPostData',
                JSON.stringify({
                    jobInformation: {
                        title: 'Business Analysis',
                        description:
                            '<p>Drive informed decision-making and business improvement as a Business Analyst on our team. As a Business Analyst, your role involves analyzing and interpreting data, identifying trends, and providing valuable insights to support strategic initiatives. Collaborate with stakeholders to gather and document business requirements, and work closely with development teams to ensure successful implementation. Employ analytical tools and methodologies to enhance operational efficiency and contribute to the achievement of business goals. If you have a strong analytical mindset, excellent communication skills, and a passion for optimizing business processes, we invite you to be a key player in our dynamic organization.</p>',
                        identifierName: '',
                        identifierValue: '',
                        datePosted: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                        validThrough: `${currentDate.getFullYear()}-${(
                            currentDate.getMonth() + 1
                        )
                            .toString()
                            .padStart(
                                2,
                                '0',
                            )}-${currentDate
                            .getDate()
                            .toString()
                            .padStart(2, '0')}`,
                    },
                    jobDetails: {
                        employmentType: {
                            id: 1,
                            name: 'FULL_TIME',
                        },
                        apply: '',
                        salaryCurrency: {
                            id: 1,
                            name: 'USD',
                        },
                        salaryValue: '4000',
                        salaryUnitText: {
                            id: 4,
                            name: 'MONTH',
                        },
                    },
                }),
            )
        }
        router.push('/tools/hire/create/job-information')
    }

    useEffect(() => {
        saveData()
    }, [])

    return (
        <Authenticated
            header={
                <h2 className="text-xl font-bold text-gray-800 leading-tight">
                    Hire Talents
                </h2>
            }></Authenticated>
    )
}
