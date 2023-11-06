'use client';
import Image from 'next/image';
import Link from 'next/link';
import DojahIcon from '../../../public/svg/dojah.svg';
import CatlogIcon from '../../../public/svg/Catlog.svg';
import GetWalletsIcon from '../../../public/svg/getwallets.svg';
import PayourseIcon from '../../../public/svg/payourse.svg';
import PiggyvestIcon from '../../../public/svg/piggyvest.svg';
import TermiiIcon from '../../../public/svg/termii.svg';
import HailifyIcon from '../../../public/svg/hailify-logo.svg';
import BuycoinsIcon from '../../../public/svg/buycoins.svg';
import GreenCheckIcon from '../../../public/svg/green_check.svg';
import ArrowRightIcon from '../../../public/svg/arrow-right-icon.svg';
import Illustration from '../../../public/static/2nd-illustration.png';
import { useState } from 'react';

export default function Home() {
	const [activeTab, setActiveTab] = useState('cloud');
	const [expandImage, setExpandImage] = useState(false);

	const newFeatures = [
		{
			img: 'send',
			title: 'Send and Receive webhooks',
			body: 'You can both publish and receive millions of Webhooks events from any provider. Both API providers and API consumers can benefit from using Convoy',
			featureImg: 'send-and-receive-webhooks'
		},
		{
			img: 'secure',
			title: 'Secure all Payload',
			body: 'Create secrets, sign payload, verify events. Increase security by enabling rolling secrets. Prevents well known attacks like SSRF (Server-Side Request Forgery).',
			featureImg: 'secure-all-payload'
		},
		{
			img: 'no-language',
			title: 'No Language Lock-in',
			body: 'Use any cloud technology and deploy to any environment and send events from any language. We have built SDKs in a number of languages (Ruby, Golang, JavaScript etc) to make integrating sending and receiving webhooks a breeze.',
			featureImg: 'no-language-lock-in'
		},
		{
			img: 'scale',
			title: 'Scale without worries',
			body: 'Independently scale convoy as your system needs grows. You can horizontally scale convoy’s components (API server, dispatch workers, egress gateway)',
			featureImg: 'scale-without-worries'
		},
		{
			img: 'efficient',
			title: 'Efficient Rate Limiting',
			body: 'Avoid blasting too much events to a single endpoint at once with flexible rate limiting controls. Rate limits can be configured at both high level and per endpoint.',
			featureImg: 'efficient-rate-limiting'
		},
		{
			img: 'stress',
			title: 'Stress free event debugging',
			body: 'Easily filter & debug events sent to multiple applications & endpoints with Delivery Attempt Logs. The Dashboards helps you easily fix customer issues and have a guaranteed audit trail in addition to application logs.',
			featureImg: 'stress-free-event-debugging'
		}
	];

	const tabs = [
		{ label: 'Cloud', id: 'cloud' },
		{ label: 'Community', id: 'community' },
		{ label: 'Enterprise', id: 'enterprise' }
	];

	const communityFeatures = ['Rate Limiting', 'Retries', 'Static IPs', 'App Portal', 'Send Millions of Events'];
	const enterpriseFeatures = ['Send Billion of Events', 'Dedicated Customer Success', 'Own your data', 'On-prem Support', 'Compliant'];
	const cloudFeatures = ['Team management', 'Mulitple projects', 'Debug logs and metric', 'Manage app and customers'];

	const offerings = [
		{ offer: 'Independently scalable', img: 'independently', class: 'bg-success-400' },
		{ offer: 'Bi-directional webhooks', img: 'bi-directional', class: 'bg-[#D4D1FA]' },
		{ offer: 'Static IP’s', img: 'static', class: 'bg-[#F8DEC7]' },
		{ offer: 'Retries', img: 'retries', class: 'bg-[#F2F2F2]' },
		{ offer: 'Language Agnostic', img: 'language-agnostic', class: 'bg-[#D1F0FA]' },
		{ offer: 'Rich UI - Event Logs & Querying', img: 'monitor', class: 'bg-[#FCE3AD]' },
		{ offer: 'Flexible Configuration', img: 'flexible', class: 'bg-[#E3EDF7]' },
		{ offer: 'URL per Event Type', img: 'url', class: 'bg-alert-500' },
		{ offer: 'Independently scalable', img: 'independently', class: 'bg-success-400' },
		{ offer: 'Bi-directional webhooks', img: 'bi-directional', class: 'bg-[#D4D1FA]' },
		{ offer: 'Static IP’s', img: 'static', class: 'bg-[#F8DEC7]' },
		{ offer: 'Retries', img: 'retries', class: 'bg-[#F2F2F2]' },
		{ offer: 'Language Agnostic', img: 'language-agnostic', class: 'bg-[#D1F0FA]' },
		{ offer: 'Rich UI - Event Logs & Querying', img: 'monitor', class: 'bg-[#FCE3AD]' },
		{ offer: 'Flexible Configuration', img: 'flexible', class: 'bg-[#E3EDF7]' },
		{ offer: 'URL per Event Type', img: 'url', class: 'bg-alert-500' }
	];
	return (
		<main>
			<section className="max-w-[1062] flex flex-col justify-center items-center pt-220px pb-100px desktop:pb-236px px-20px">
				<div className="bg-primary-25 rounded-[40px] w-fit py-10px px-20px flex items-center text-14 mb-40px">
					We are backed by
					<Image src="/svg/y-combinator.svg" width={24} height={24} className="ml-16px" alt="y-combinator" />
				</div>
				<h1 className="text-center desktop:text-[50px] desktop:leading-[80px] font-bold">Open-source Webhooks Gateway for</h1>
				<h1 className="text-center desktop:text-[50px] desktop:leading-[80px] font-bold text-primary-400">Efficient Engineers</h1>
				<p className="text-center max-w-[950px] mx-auto text-16 leading-8 mobile:text-14 mt-16px text-gray-600">
					Securely Send, Receive and Manage millions of Webhooks Reliably with robust support for Retries, Rate Limiting, Static IPs, Circuit Breaking, Rolling Secrets
					and more.
				</p>
				<div className="flex justify-center xs:flex-col mt-40px">
					<a
						target="_blank"
						href="https://cloud.getconvoy.io/signup"
						className="py-12px desktop:py-16px px-38px shadow-lg hover:shadow-xl transition-all duration-300 desktop:px-24px text-14 text-center font-medium rounded-8px bg-primary-400 text-white-100 mr-24px xs:mr-0 xs:mb-20px xs:w-[90vw]">
						Start your webhooks project
					</a>

					<Link
						href="/docs"
						className="py-12px px-28px text-14 font-medium rounded-8px bg-primary-25 text-primary-400 border border-primary-50 flex items-center justify-center text-center xs:w-[90vw]">
						<Image src="/svg/documentation.svg" height={16} width={16} className="mr-10px" alt="document icon" />
						Documentation
					</Link>
				</div>
			</section>

			<section className="rounded-[20px] desktop:rounded-[70px] mx-auto bg-[linear-gradient(180deg,#2c2f3e_0%,#422f41_100%)] -mb-78px max-w-[1350px] w-[90%] z-auto relative">
				<div className="w-full md:bg-[url(/static/Settings.png)] bg-no-repeat bg-right desktop:bg-contain rounded-[70px] min-h-[200px] py-30px desktop:py-56px px-20px desktop:px-70px">
					<p className="font-bold text-white-100 text-24 desktop:text-32 max-w-[690px]">
						Engineering teams that value efficiency use
						<span className="text-primary-300 mx-4px">Convoy</span>
						to manage webhook events.
					</p>

					<ul className="flex items-center list-none mt-38px">
						<li className="mr-12px">
							<a target="_blank" href="https://www.drivehailify.com/">
								<Image src={HailifyIcon} alt="hailify logo" />
							</a>
						</li>
						<li className="mr-12px">
							<a target="_blank" href="https://www.piggyvest.com/">
								<Image src={PiggyvestIcon} alt="piggyvest logo" />
							</a>
						</li>
						<li className="mr-12px">
							<a target="_blank" href="https://www.catlog.shop/">
								<Image src={CatlogIcon} alt="catlog logo" />
							</a>
						</li>
						<li className="mr-12px">
							<a target="_blank" href="https://www.payourse.com/">
								<Image src={PayourseIcon} className="mt-4px" alt="payourse logo" />
							</a>
						</li>
						<li className="mr-12px hidden desktop:block">
							<a target="_blank" href="https://buycoins.africa/">
								<Image src={BuycoinsIcon} alt="buycoins logo" />
							</a>
						</li>
						<li className="mr-12px hidden desktop:block">
							<a target="_blank" href="https://www.getwallets.co/">
								<Image src={GetWalletsIcon} alt="getwallets logo" />
							</a>
						</li>
						<li className="mr-12px hidden desktop:block">
							<a target="_blank" href="https://www.dojah.io/">
								<Image src={DojahIcon} alt="dojah logo" />
							</a>
						</li>
						<li className="mr-12px hidden desktop:block">
							<a target="_blank" href="https://termii.com/">
								<Image src={TermiiIcon} alt="termii logo" />
							</a>
						</li>
					</ul>
				</div>
			</section>

			{/* why use us   */}
			<section id="why-convoy" className="flex flex-col justify-center items-center pt-160px bg-white-100">
				<div className="bg-primary-25 rounded-[40px] w-fit py-10px px-20px flex items-center text-14 mb-40px">
					<div className="mr-16px w-24px h-24px rounded-100px bg-success-400 flex justify-center items-center">
						<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M13.5749 6.95841C13.5056 6.82098 13.3997 6.70541 13.2688 6.62451C13.1379 6.54361 12.9871 6.50054 12.8332 6.50008H8.66655V1.50008C8.67549 1.31731 8.62403 1.13669 8.52011 0.986077C8.41619 0.835467 8.26559 0.723249 8.09155 0.666743C7.92424 0.611696 7.74379 0.611077 7.5761 0.664976C7.40842 0.718875 7.26212 0.824519 7.15822 0.966743L0.491551 10.1334C0.408023 10.2541 0.357867 10.3948 0.34616 10.5411C0.334453 10.6874 0.361611 10.8343 0.424885 10.9667C0.483153 11.1182 0.584375 11.2493 0.716126 11.3441C0.847877 11.4388 1.00442 11.493 1.16655 11.5001H5.33322V16.5001C5.33335 16.6758 5.38903 16.847 5.4923 16.9892C5.59557 17.1314 5.74114 17.2373 5.90822 17.2917C5.99194 17.3177 6.07891 17.3317 6.16655 17.3334C6.29804 17.3338 6.42774 17.303 6.54506 17.2436C6.66237 17.1842 6.76397 17.0979 6.84155 16.9917L13.5082 7.82508C13.598 7.70074 13.6517 7.55404 13.6635 7.40112C13.6753 7.24821 13.6446 7.09502 13.5749 6.95841ZM6.99988 13.9334V10.6667C6.99988 10.4457 6.91209 10.2338 6.75581 10.0775C6.59953 9.92121 6.38756 9.83341 6.16655 9.83341H2.83322L6.99988 4.06674V7.33341C6.99988 7.55442 7.08768 7.76638 7.24396 7.92267C7.40024 8.07895 7.6122 8.16674 7.83322 8.16674H11.1666L6.99988 13.9334Z"
								fill="#FCFCFC"
							/>
						</svg>
					</div>
					Why use Convoy?
				</div>

				<h1 className="text-center font-bold max-w-[1040px] text-[46px] text-gray-800 desktop:leading-[58px] mt-16px mx-auto mb-80px">
					Convoy is a high-performance open-source webhooks gateway
				</h1>

				<div className="desktop:py-40px px-20px bg-white-100 feature-list">
					{newFeatures.slice(0, 3).map((feature, i) => (
						<div className="flex flex-col desktop:flex-row items-center justify-between max-w-[1236px] mx-auto mb-140px feature gap-x-20 gap-y-10" key={i}>
							<div className="order-2 desktop:order-1 px-20px xs:px-10px desktop:px-0">
								<Image
									src={`/static/${feature.img}.png`}
									alt={`${feature.img} image`}
									width={48}
									height={48}
									className="mb-32px rounded-8px shadow-[0px_22px_24px_rgba(65,111,244,0.2)]"
								/>
								<h3 className="font-semibold text-20 mb-16px">{feature.title}</h3>
								<p className="text-14 leading-7 font-light mobile:text-14 max-w-[500px] text-gray-500">{feature.body}</p>
							</div>
							<div className="md:max-w-[500px] tab:max-w-[470px] tab:ml-20px order-1 desktop:order-2">
								<img src={`/static/${feature.featureImg}.png`} alt={`${feature.featureImg} image`} className="object-contain" />
							</div>
						</div>
					))}

					{newFeatures.slice(0, 3).map((feature, i) => (
						<div className="flex flex-col desktop:flex-row items-center justify-between max-w-[1236px] mx-auto mb-140px feature gap-x-20 gap-y-10" key={i}>
							<div className="md:max-w-[500px] tab:max-w-[470px] tab:mr-20px">
								<img src={`/static/${feature.featureImg}.png`} alt={`${feature.featureImg} image`} className="object-contain" />
							</div>
							<div className="px-20px xs:px-10px desktop:px-0">
								<Image
									src={`/static/${feature.img}.png`}
									alt={`${feature.img} image`}
									width={48}
									height={48}
									className="mb-32px rounded-8px shadow-[0px_22px_24px_rgba(65,111,244,0.2)]"
								/>
								<h3 className="font-semibold mb-16px text-20">{feature.title}</h3>
								<p className="text-14 leading-7 font-light mobile:text-14 max-w-[500px] text-gray-500">{feature.body}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* open core  */}
			<section className="py-60px desktop:py-110px">
				<div className="max-w-[1170px] w-full m-auto px-20px">
					<div className="bg-gradient-to-br from-[#2c2f3e] to-[#422f41] rounded-16px pt-40px px-20px pb-100px desktop:px-66px desktop:pt-50px desktop:pb-200px">
						<div className="bg-white-16 rounded-8px w-fit m-auto flex flex-row mb-30px">
							{tabs.map(tab => (
								<li className="list-none" key={tab.id}>
									<button
										className={`rounded-6px py-12px px-8px desktop:px-60px min-w-[114px] desktop:min-w-[220px] transition-all duration-300 ${
											activeTab === tab.id ? 'bg-white-100 shadow-sm' : ''
										}`}
										onClick={() => setActiveTab(tab.id)}>
										<span
											className={`text-14 tracking-[0.02em] transition-all duration-300 ${activeTab === tab.id ? 'font-bold text-black' : 'text-white-100'}`}>
											{tab.label}
										</span>
									</button>
								</li>
							))}
						</div>

						<div className="w-full min-h-[280px] h-full">
							{/* enterprise edition   */}
							<div
								className={`flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
									activeTab === 'enterprise' ? 'animate-slideup block opacity-100' : 'opacity-0 hidden animate-slidedown'
								}`}>
								<h1 className="text-32 desktop:text-[40px] desktop:leading-[60px] text-white-100 font-bold text-center">Enterprise Edition</h1>
								<p className="text-white-100 text-center text-14 leading-7 desktop:mt-16px max-w-[860px] m-auto">
									Send & Receive billions of webhooks while totally control your own event infrastructure and data, and staying compliant all with one platform
									with on-prem support .
								</p>

								<div className="flex justify-center desktop:justify-center m-auto mobile:overflow-x-scroll mobile:scroll-smooth no-scrollbar mt-30px desktop:mt-40px w-full">
									{enterpriseFeatures.map((feature, i) => (
										<div
											className="bg-white-16 pl-12px pr-16px py-8px rounded-6px mr-24px last-of-type:mr-0 flex items-center text-white-100 text-12 font-medium whitespace-nowrap"
											key={i}>
											<Image src={GreenCheckIcon} className="mr-12px" alt="check" />
											{feature}
										</div>
									))}
								</div>
							</div>

							{/* convoy cloud   */}
							<div
								className={`flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
									activeTab === 'cloud' ? 'animate-slideup block opacity-100' : 'opacity-0 hidden animate-slidedown'
								}`}>
								<h1 className="text-32 desktop:text-[40px] desktop:leading-[60px] text-white-100 font-bold text-center">Convoy Cloud</h1>
								<p className="text-white-100 text-center text-14 leading-7 mt-20px desktop:mt-16px max-w-[860px] m-auto">
									Fully managed Webhooks-as-a-service platform where you can manage millions of webhook events whether incoming or outgoing and you only pay for
									what you use.
								</p>

								<div className="flex justify-center desktop:justify-center m-auto mobile:overflow-x-scroll mobile:scroll-smooth no-scrollbar mt-30px desktop:mt-40px w-full">
									{cloudFeatures.map(feature => (
										<div
											className="bg-white-16 pl-12px pr-16px py-8px rounded-6px mr-24px last-of-type:mr-0 flex items-center text-white-100 text-12 font-medium w-fit whitespace-nowrap"
											key={feature}>
											<Image src={GreenCheckIcon} className="mr-12px" alt="check" />
											{feature}
										</div>
									))}
								</div>
							</div>

							{/* community edition  */}
							<div
								className={`flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
									activeTab === 'community' ? 'animate-slideup block opacity-100' : 'opacity-0 hidden animate-slidedown'
								}`}>
								<h1 className="text-32 desktop:leading-[60px] text-white-100 font-bold text-center">Community Edition</h1>
								<p className="text-white-100 text-center text-14 leading-7 mt-20px desktop:mt-16px max-w-[860px] m-auto">
									Open-source Webhooks Gateway for managing incoming and outgoing webhooks. Ships with everything you need for securely sending and receiving
									events reliably.
								</p>

								<div className="flex justify-center desktop:justify-center m-auto mobile:overflow-x-scroll mobile:scroll-smooth no-scrollbar mt-30px desktop:mt-40px w-full">
									{communityFeatures.map(feature => (
										<div
											className="bg-white-16 pl-12px pr-16px py-8px rounded-6px mr-24px last-of-type:mr-0 whitespace-nowrap flex items-center text-white-100 text-12 font-medium w-fit"
											key={feature}>
											<Image src={GreenCheckIcon} className="mr-12px" alt="check" />
											{feature}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="bg-[#082B91] bg-opacity-[0.07] w-11/12 h-220px desktop:h-270px rounded-b-16px m-auto relative">
						<div className="absolute left-1/2 -translate-x-1/2 -top-100px xs:-top-70px desktop:-top-200px w-full">
							<div className="md:max-h-320px max-h-[218px] overflow-hidden rounded-16px w-fit mx-auto">
								<img src="/static/groups-img-small.png" alt="group" className="xs:hidden max-w-[866px] desktop:w-full w-5/6 m-auto" />
							</div>
							<img src="/static/groups-img-small.png" className="hidden xs:block m-auto w-5/6" alt="group" />

							{activeTab === 'community' && (
								<a
									target="_blank"
									href="https://github.com/frain-dev/convoy#installation-getting-started"
									className="bg-primary-400 m-auto text-white-100 whitespace-nowrap text-12 font-semibold flex items-center py-12px px-24px rounded-8px mt-32px w-fit">
									Get started
									<Image src={ArrowRightIcon} className="ml-12px" alt="arrow right" />
								</a>
							)}
							{activeTab === 'enterprise' && (
								<Link
									href="/enterprise#requestAccess"
									className="bg-primary-400 m-auto text-white-100 whitespace-nowrap text-12 font-semibold flex items-center py-12px px-24px rounded-8px mt-32px w-fit">
									Get started
									<Image src={ArrowRightIcon} className="ml-12px" alt="arrow right" />
								</Link>
							)}
							{activeTab === 'cloud' && (
								<Link
									href="/cloud"
									className="bg-primary-400 m-auto text-white-100 whitespace-nowrap text-12 font-medium flex items-center py-12px px-24px rounded-8px mt-32px w-fit">
									Get started
									<Image src={ArrowRightIcon} className="ml-12px" alt="arrow right" />
								</Link>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* architecture infrastructure */}
			<section className="bg-[#fcfcfc] py-60px desktop:py-80px px-24px desktop:px-64px">
				<div className="max-w-[1234px] mx-auto">
					<h2 className="font-bold desktop:text-32 mb-22px">
						Developers use Convoy Webhooks Gateway to securely ingest, persist, debug, deliver and manage millions of events reliably...
					</h2>
					<Link href="/docs/overview" className="text-16 font-semibold text-primary-400 flex items-center">
						Learn about our infrastructure
						<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-8px">
							<path
								d="M7.61289 16.2357L6.98548 15.5963C6.81939 15.4271 6.72607 15.1975 6.72607 14.9581C6.72607 14.7188 6.81939 14.4892 6.98548 14.32L10.7352 10.5013L6.98622 6.68155C6.90392 6.59774 6.83864 6.49822 6.7941 6.38868C6.74955 6.27914 6.72663 6.16174 6.72663 6.04317C6.72663 5.9246 6.74955 5.8072 6.7941 5.69766C6.83864 5.58813 6.90392 5.48861 6.98622 5.40479L7.61363 4.76547C7.69592 4.68132 7.7937 4.61456 7.90136 4.569C8.00903 4.52345 8.12446 4.5 8.24104 4.5C8.35761 4.5 8.47304 4.52345 8.58071 4.569C8.68837 4.61456 8.78615 4.68132 8.86844 4.76547L13.8667 9.86199C14.0328 10.0313 14.1261 10.2608 14.1261 10.5002C14.1261 10.7396 14.0328 10.9691 13.8667 11.1384L8.86549 16.2357C8.69938 16.4049 8.4741 16.5 8.23919 16.5C8.00429 16.5 7.779 16.4049 7.61289 16.2357Z"
								fill="#477DB3"
							/>
						</svg>
					</Link>
					<div
						className="bg-white-100 rounded-[30px] max-w-[1062px] mx-auto mt-52px flex justify-center py-20px px-20px desktop:px-80px hover:cursor-pointer"
						onClick={() => setExpandImage(true)}>
						<Image src={Illustration} alt="infrastructure image" />
					</div>
				</div>
			</section>

			{/* offerings  */}
			<section className="max-w-[1234px] mx-auto pt-60px px-20px desktop:pt-180px pb-60px desktop:pb-116px">
				<div className="bg-primary-25 rounded-[40px] w-fit py-10px px-20px flex items-center text-14 mb-40px">
					<div className="mr-16px w-24px h-24px rounded-100px bg-warning-400 flex justify-center items-center">
						<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M13.5749 6.95841C13.5056 6.82098 13.3997 6.70541 13.2688 6.62451C13.1379 6.54361 12.9871 6.50054 12.8332 6.50008H8.66655V1.50008C8.67549 1.31731 8.62403 1.13669 8.52011 0.986077C8.41619 0.835467 8.26559 0.723249 8.09155 0.666743C7.92424 0.611696 7.74379 0.611077 7.5761 0.664976C7.40842 0.718875 7.26212 0.824519 7.15822 0.966743L0.491551 10.1334C0.408023 10.2541 0.357867 10.3948 0.34616 10.5411C0.334453 10.6874 0.361611 10.8343 0.424885 10.9667C0.483153 11.1182 0.584375 11.2493 0.716126 11.3441C0.847877 11.4388 1.00442 11.493 1.16655 11.5001H5.33322V16.5001C5.33335 16.6758 5.38903 16.847 5.4923 16.9892C5.59557 17.1314 5.74114 17.2373 5.90822 17.2917C5.99194 17.3177 6.07891 17.3317 6.16655 17.3334C6.29804 17.3338 6.42774 17.303 6.54506 17.2436C6.66237 17.1842 6.76397 17.0979 6.84155 16.9917L13.5082 7.82508C13.598 7.70074 13.6517 7.55404 13.6635 7.40112C13.6753 7.24821 13.6446 7.09502 13.5749 6.95841ZM6.99988 13.9334V10.6667C6.99988 10.4457 6.91209 10.2338 6.75581 10.0775C6.59953 9.92121 6.38756 9.83341 6.16655 9.83341H2.83322L6.99988 4.06674V7.33341C6.99988 7.55442 7.08768 7.76638 7.24396 7.92267C7.40024 8.07895 7.6122 8.16674 7.83322 8.16674H11.1666L6.99988 13.9334Z"
								fill="#FCFCFC"
							/>
						</svg>
					</div>
					Work more efficiently!
				</div>
				<h1 className="desktop:text-[48px] desktop:leading-[60px] font-bold max-w-[842px]">All-in-one Webhooks Gateway for all your event needs</h1>
			</section>

			<section>
				<div className="slideshow">
					<div className="firstSlide">
						{offerings.map((offer, i) => (
							<div
								key={i}
								className={`shadow-[14px_20px_24px_rgba(20,37,63,0.04)] rounded-[60px] flex flex-col justify-center items-center py-20px px-86px h-[80px] desktop:h-[98px] min-w-[280px] desktop:min-w-[350px] mx-20px ${offer.class}`}>
								<img src={`/svg/${offer.img}.svg`} className="w-24px mb-10px" alt="feature icon" />
								<p className="text-16">{offer.offer}</p>
							</div>
						))}
					</div>
				</div>
				<div className="slideshow">
					<div className="secondSlide">
						{offerings.map((offer, i) => (
							<div
								key={i}
								className={`shadow-[14px_20px_24px_rgba(20,37,63,0.04)] rounded-[60px] flex flex-col justify-center items-center h-[80px] desktop:h-[98px] min-w-[280px] desktop:min-w-[350px] mx-20px py-20px px-86px ${offer.class}`}>
								<img src={`/svg/${offer.img}.svg`} className="w-24px mb-10px" alt="feature icon" />
								<p className="text-16">{offer.offer}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="px-20px pb-100px desktop:pb-130px">
				<div className="mt-100px desktop:mt-130px max-w-[1000px] w-full m-auto bg-[url(/static/cta.png)] bg-no-repeat bg-cover bg-top bg-blend-normal bg-[#422F41] rounded-16px py-56px px-20px">
					<h1 className="text-32 text-white-100 font-bold tracking-[0.02em] text-center mb-24px max-w-[562px] m-auto">
						Start sending and receiving webhooks now, risk free
					</h1>
					<p className="text-center text-14 leading-7 text-white-100 max-w-[806px] m-auto">
						Convoy provides you with fast, secure and reliable webhooks infrastructure so you can focus on building the actual tech. Save yourself some engineering time
						and get started today.
					</p>
					<a
						target="_blank"
						href="https://github.com/frain-dev/convoy#installation-getting-started"
						className="bg-primary-400 m-auto text-white-100 whitespace-nowrap text-12 font-semibold flex items-center py-12px px-24px rounded-8px mt-40px w-fit">
						Get started
						<Image src={ArrowRightIcon} className="ml-12px" alt="arrow right" />
					</a>
				</div>
			</section>

			{/* ilustration full page  */}
			<section
				className={`fixed top-0 left-0 w-screen h-screen bg-[#fafafe] transition-all duration-500 ${
					expandImage ? 'visible animate-slideup opacity-100 z-[100000]' : 'invisible animate-slidedown opacity-0'
				}`}
				onClick={() => setExpandImage(false)}>
				<div className="flex justify-center items-center h-full max-w-[2000px] m-auto">
					<Image src={Illustration} className="w-full" alt="infrastructure" />
				</div>
			</section>
		</main>
	);
}
