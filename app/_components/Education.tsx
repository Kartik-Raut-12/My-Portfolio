'use client';
import SectionTitle from '@/components/SectionTitle';
import { EDUCATION } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Education = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.education-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-education">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Education" />

                <div className="grid gap-14">
                    {EDUCATION.map((item) => (
                        <div key={item.institution} className="education-item">
                            <div className="flex justify-between items-start gap-4 flex-wrap">
                                <div className="max-w-[800px]">
                                    <p className="text-xl text-muted-foreground uppercase tracking-widest">
                                        {item.degree}
                                    </p>
                                    <p className="text-4xl md:text-5xl font-anton leading-[1.1] mt-3.5 mb-2.5">
                                        {item.institution}
                                    </p>
                                    <div className="flex gap-4 text-lg text-muted-foreground flex-wrap">
                                        <span>{item.duration}</span>
                                        <span className="text-primary font-bold">{item.grade}</span>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-lg italic">
                                    {item.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
