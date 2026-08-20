import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { DoodleGradCap } from '../decor/StudyDoodles';
import Emphasis from './Emphasis';

const FEATURES = [
  'Personalized worksheets for your exact syllabus',
  'Weakness analysis on every answer',
  'Accurate scores & predicted grades',
  'Custom feedback & advice after every sheet',
  'Progress tracking & streaks',
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 relative section-light overflow-hidden">
      <div className="hidden lg:block absolute left-[4%] bottom-16"><DoodleGradCap /></div>
      <div className="max-w-[1280px] mx-auto px-6 py-28 lg:py-32">
        {/* The price is the strongest thing on the page, so it gets the full
            width and the biggest type instead of sitting in a side card. */}
        <Reveal>
          <div className="text-center max-w-[900px] mx-auto">
            <h2 className="h-display text-[40px] sm:text-[50px] lg:text-[58px] leading-[1.05]">
              Your grades deserve better.<br />This costs <span className="h-serif">nothing</span>.
            </h2>
            <div className="mt-10 flex flex-col items-center">
              <Emphasis variant="circle">
                <span className="block text-[112px] sm:text-[150px] lg:text-[180px] font-semibold tracking-[-0.04em] leading-[0.85] text-slate-900 px-2">$0</span>
              </Emphasis>
              <div className="mt-5 text-[15px] tracking-[0.14em] uppercase font-semibold text-slate-500">
                forever &middot; every feature &middot; every subject
              </div>
            </div>
            <p className="mt-8 text-[16.5px] text-slate-600 leading-relaxed max-w-[620px] mx-auto">
              The training that moves exam results has always sat behind a price&mdash;coaching fees, paid
              question banks, private tutors. We built InfinitySheets so the only thing standing between
              you and a better grade is the decision to start.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 max-w-[900px] mx-auto">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 mt-1 shrink-0 text-emerald-600" strokeWidth={2.6} />
                <span className="text-[14.5px] text-slate-700">{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center">
            <a href="#signup" className="btn-violet inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-[17px] font-semibold shadow-lg shadow-violet-300/40">
              Make the change <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-4 text-[12.5px] text-slate-500">Supported by ads, so it stays free for everyone.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
