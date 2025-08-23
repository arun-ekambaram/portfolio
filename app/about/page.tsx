// app/about/page.tsx

import React from "react";
import Image from "next/image";

import { AboutTrackPattern } from "@/app/components/AboutTrackPattern";
import { AnimatedImage } from "@/app/components/AnimatedImage";
import { Button } from "@/app/components/Button";
import { ProjectsBento } from "@/app/components/ProjectsBento";
import { CurrentlyReadingBento } from "@/app/components/CurrentlyReadingBento";
import { getTimeOfDayGreeting } from "app/lib/utils";
import { GridWrapper } from "@/app/components/GridWrapper";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { Photo } from "@/app/components/Photo";
import { Resume } from "app/components/Resume";
import { ScrapbookBento } from "@/app/components/ScrapbookBento";
import { ShadowBox } from "@/app/components/ShadowBox";
import { StatsBento } from "@/app/components/StatsBento";
import { VisionBoardAboutBento } from "@/app/components/VisionBoardAboutBento";

export default function AboutPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <div className="relative mt-14">
      <title>About | Arun Ekambaram</title>
      <div className="relative space-y-10 md:space-y-16">
        {/* Title */}
        <GridWrapper className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
            <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
              <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
                <span>{timeOfDayGreeting}</span>
              </div>
              <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-3xl lg:text-left lg:text-5xl lg:leading-[64px]">
                I&apos;m Arun Ekambaram, a Data Scientist and AI/ML Researcher.
              </h1>
            </div>
            <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="relative grid grid-cols-3">
                  <div className="relative z-20 -translate-y-2">
                    <Photo
                      width={140}
                      height={140}
                      src="/about/reading.png"
                      alt="Arun Ekambaram"
                      direction="left"
                    />
                  </div>
                  <div className="relative z-30">
                    <Photo
                      width={140}
                      height={140}
                      src="/about/laptopworking_g1.png"
                      alt="Arun Ekambaram"
                      direction="right"
                    />
                  </div>
                  <div className="relative z-20 translate-y-4">
                    <Photo
                      width={140}
                      height={140}
                      src="/about/drinkingcoffee.png"
                      alt="Arun Ekambaram"
                      direction="left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>

        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* About */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                Here&apos;s a brief introduction about me and what I love doing
              </h2>
            </GridWrapper>
          </div>
          <div className="relative h-fit w-full overflow-x-hidden">
            <div className="absolute left-0 top-0 w-full md:left-4 lg:left-[355px] xl:left-[455px]">
              <AboutTrackPattern />
            </div>

            {/* Section 1 */}
            <div className="grid grid-cols-1 gap-8 py-12 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pb-20 xl:py-32">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <Image
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/about/about_finding.jpg"
                      alt="Finding My Way into AI/ML"
                      width={180}
                      height={270}
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Finding My Way into AI/ML
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                I&apos;ve always been fascinated by how data can reveal patterns and drive decisions. 
                I started by experimenting with ML models and small projects, gradually learning to turn ideas
                 into practical solutions. During my time as a Data Science Intern at GlaxoSmithKline (GSK plc) Global Capability Centre, I applied these skills in 
                 real-world scenarios optimizing workflows, automating processes, and generating actionable insights from 
                 large-scale datasets. With Generative AI on the rise, my curiosity has grown even further. I continue 
                 exploring new models, experimenting with innovative solutions, and learning how to build AI systems 
                 that make a real-world impact.
                </p>
              </div>
              <div className="hidden lg:order-1 lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <Image
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/about/about_finding.jpg"
                    alt="Finding My Way into AI/ML"
                    width={180}
                    height={270}
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 gap-8 py-24 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <Image
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/about/about_coffee_video.gif"
                      alt="These Days"
                      width={180}
                      height={270}
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  These Days
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I&apos;m exploring end-to-end data science workflows, machine learning models, 
                  and generative AI systems. I&apos;m learning RAG pipelines, AI agents, and 
                  agentic AI applications, while leveraging MLOps tools to deploy and 
                  monitor robust models.  It&apos;s not just about building smarter systems, My focus is on 
                  building practical, human-centered AI solutions that make a real impact.
                </p>
                {/* <p className="mb-6 text-base leading-8 text-text-secondary">
                  It&apos;s not just about building smarter systems, it&apos;s
                  more about making them useful and human-centered.
                </p> */}
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <Image
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/about/about_coffee_video.gif"
                    alt="These Days"
                    width={180}
                    height={270}
                  />
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 gap-8 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between xl:py-24">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <Image
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/about/about_achivements.jpg"
                      alt="Achievements I'm Proud of"
                      width={180}
                      height={270}
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Achievements I&apos;m Proud of
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  During my time at GSK, I optimized workflows, automated processes, 
                  and earned an e-Card on the Global Recognition Portal for my advanced 
                  programming. I quickly picked up complex concepts, delivered impactful 
                  solutions, and demonstrated a fast learning curve while contributing 
                  effectively to the project. I was also selected for the Amazon ML Summer School, 
                  ranking in the top 3.5% of 80,000 applicants.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <Image
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/about/about_achivements.jpg"
                    alt="Achievements I'm Proud of"
                    width={180}
                    height={270}
                  />
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pl-12 xl:py-24">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <AnimatedImage
                    images={[
                      "/about/pedri&lamine.png",
                      "/about/about_f1.png",
                      "/about/about_eating.png",
                      "/about/about_shopping.png",
                    ]}
                    width={180}
                    height={270}
                    alt="Life Beyond Code"
                    rotation={8}
                  />
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Life Beyond Code
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I love spending time hanging out with friends, exploring new eateries, 
                  and indulging in a bit of shopping. When I&apos;m not out and about, you&apos;ll often 
                  find me gaming, catching the latest football matches or Formula 1, 
                  and keeping up with the excitement of my favorite teams and drivers. 
                  Weekends are all about balancing fun, food, and a bit of friendly competition.
                </p>
              </div>
              <div className="hidden lg:block">
                <AnimatedImage
                  images={[
                    "/about/pedri&lamine.png",
                    "/about/about_f1.png",
                    "/about/about_eating.png",
                    "/about/about_shopping.png",
                  ]}
                  width={180}
                  height={270}
                  alt="Life Beyond Code"
                  rotation={8}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Experience - Resume */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Experience</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                My work history and internship timeline.
              </h2>
            </GridWrapper>
          </div>
        </div>
        <div className="space-y-16">
          <GridWrapper>
            <Resume />
          </GridWrapper>
          <div className="flex justify-center">
            <Button
              variant="secondary"
              href="/charvikusuma_cv.pdf"
              target="_blank"
            >
              View CV
            </Button>
          </div>
        </div>

        {/* More */}
        <section className="relative space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>More</span>
              </div>
            </GridWrapper>

            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary">
                Here&apos;s what sets me apart and makes me unique
              </h2>
            </GridWrapper>
          </div>

          {/* About Grid */}
          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
              <div className="lg:col-span-3 lg:row-span-6">
                <VisionBoardAboutBento linkTo="/vision-board" />
              </div>
              <div className="hidden lg:col-span-7 lg:row-span-5 lg:block">
                <ScrapbookBento />
              </div>
              <div className="hidden lg:col-span-2 lg:col-start-11 lg:row-span-10 lg:block lg:min-h-[50px]">
                <CurrentlyReadingBento />
              </div>
              <div className="lg:col-span-7 lg:row-span-8">
                <ProjectsBento linkTo="/projects" />
              </div>
              <div className="lg:col-span-3 lg:row-span-4">
                <StatsBento />
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* Newsletter */}
        <NewsletterSignUp />
      </div>
    </div>
  );
}
