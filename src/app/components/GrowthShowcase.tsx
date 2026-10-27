"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type Work = { title: string; category: string; eyebrow: string; description: string; proof: string; tags: string[]; accent: string; lines: number[]; state?: string };
const works: Work[] = [
  { title: "Google Ads | Search Campaigns", category: "Paid Media", eyebrow: "CAMPAIGN EVIDENCE", description: "Hands-on search campaign management, targeting and performance analysis. Figures shown are from a supplied seven-day campaign dashboard—not lifetime account results.", proof: "17 clicks · 154 impressions · $6.10 avg. CPC", tags: ["Google Ads", "Search", "Reporting"], accent: "#C2E381", lines: [26,46,37,58,41,72,61,82] },
  { title: "Meta Ads | Performance Campaigns", category: "Paid Media", eyebrow: "CAMPAIGN EVIDENCE", description: "Campaign setup, audience strategy, creative testing and reporting for Facebook and Instagram advertising. Private campaign identifiers are not published.", proof: "Performance dashboard evidence available on request", tags: ["Meta Ads", "Campaign Setup", "Analysis"], accent: "#A0AEFF", lines: [34,51,39,65,49,74,67,86] },
  { title: "LinkedIn Ads | Campaign Creative", category: "Paid Media", eyebrow: "DRAFT / SETUP", description: "LinkedIn campaign creative and setup work. The provided evidence shows draft ads; no live campaign results or generated leads are claimed.", proof: "Campaign setup documented · ads in draft", tags: ["LinkedIn Ads", "B2B", "Drafts"], accent: "#A2DCEB", lines: [25,32,49,42,66,54,76,71], state: "Draft / Setup" },
  { title: "SEO + AEO + GEO", category: "Search & AI", eyebrow: "IN PROGRESS · CONCEPT ART", description: "Developing an integrated approach to technical and on-page SEO, answer-oriented content, structured information and discoverability in AI-assisted search.", proof: "Project in progress · no ranking or AI citation claims", tags: ["SEO", "AEO", "GEO"], accent: "#EEC891", lines: [25,45,36,58,48,70,65,84], state: "In progress" },
  { title: "WordPress | Development & Care", category: "Web & Systems", eyebrow: "CONFIDENTIAL CLIENT", description: "Built and continue to maintain a business website using WordPress. The client's name, domain, design and website screenshots are intentionally withheld.", proof: "Website build + ongoing maintenance", tags: ["WordPress", "Maintenance", "Websites"], accent: "#B9D9C1", lines: [45,60,51,64,70,74,67,83], state: "Confidential" },
  { title: "Client Webinar Delivery", category: "Web & Systems", eyebrow: "CLIENT REPRESENTATION", description: "Conducted a webinar on a client's behalf, with responsibility for presenting and representing the client during the session. Client and attendee information remain private.", proof: "Webinar conducted on behalf of client", tags: ["Webinar", "Presentation", "Client Delivery"], accent: "#F1B6C3", lines: [25,52,46,65,56,68,73,86], state: "Confidential" }
];
const categories = ["All", "Paid Media", "Search & AI", "Web & Systems"];

function ConceptVisual({ item, index }: {item: Work; index: number}) {
 return <div className="relative h-56 md:h-60 overflow-hidden rounded-xl border border-white/10" style={{background: "radial-gradient(circle at 80% 0%, "+item.accent+"20, transparent 58%), #0B1012"}}>
  <div className="absolute inset-0 opacity-25" style={{backgroundImage:"linear-gradient(#ffffff12 1px, transparent 1px), linear-gradient(90deg,#ffffff12 1px,transparent 1px)",backgroundSize:"28px 28px"}} />
  <div className="absolute top-5 left-5 text-[10px] font-bold tracking-[.22em] uppercase" style={{color:item.accent}}>0{index+1} / {item.category}</div>
  <div className="absolute inset-x-8 bottom-8 h-28 flex items-end gap-2">
    {item.lines.map((h,i)=><motion.div key={i} initial={{height:0}} whileInView={{height:h+"%"}} viewport={{once:true}} transition={{delay:i*.055,duration:.7}} className="flex-1 rounded-t-md" style={{background:"linear-gradient(180deg,"+item.accent+", transparent)",opacity:.95}} />)}
  </div>
  <div className="absolute top-14 right-8 w-28 h-28 rounded-full border border-white/10 flex items-center justify-center">
   <div className="w-16 h-16 rounded-full border-2 border-dashed animate-spin" style={{borderColor:item.accent,animationDuration:"24s"}} />
   <div className="absolute w-3 h-3 rounded-full" style={{background:item.accent,boxShadow:"0 0 24px "+item.accent}} />
  </div>
  <div className="absolute bottom-5 left-7 text-[10px] tracking-widest uppercase text-white/50">Illustrative visualization · not a reporting screenshot</div>
 </div>;
}

export default function GrowthShowcase() {
 const [active, setActive] = useState("All");
 const reduce = useReducedMotion();
 const filtered = works.filter(p=>active==="All"||p.category===active);
 return <section id="growth" className="relative overflow-hidden border-t border-white/10 py-24 lg:py-36">
  <div className="pointer-events-none absolute top-0 right-0 h-[520px] w-[520px] rounded-full bg-[#B5CDA0]/[.06] blur-[110px]" />
  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
   <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:.7}} viewport={{once:true}} className="max-w-4xl">
    <p className="mb-5 text-xs font-bold tracking-[.3em] text-[#B5CDA0] uppercase">Expanded practice / selected work</p>
    <h2 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[.95] tracking-[-.06em]">Strategy meets <span className="text-[#B5CDA0]">execution.</span></h2>
    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">Paid media, search visibility, websites and growth systems. Every example is labeled to distinguish actual campaign evidence, work in progress and confidential client engagements.</p>
   </motion.div>
   <div className="mt-11 mb-9 flex flex-wrap gap-2" aria-label="Filter selected work">
    {categories.map(c=><button type="button" key={c} onClick={()=>setActive(c)} aria-pressed={active===c} className={"rounded-full border px-5 py-2.5 text-sm transition-all "+(active===c?"border-[#B5CDA0] bg-[#B5CDA0] text-[#101512]":"border-neutral-700 text-neutral-300 hover:border-neutral-400")}>{c}</button>)}
   </div>
   <motion.div layout={!reduce} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    <AnimatePresence mode="popLayout">{filtered.map((item,index)=><motion.article key={item.title} layout={!reduce} initial={reduce?false:{opacity:0,y:24,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={reduce?undefined:{opacity:0,y:-12}} transition={{duration:.38}} whileHover={reduce?undefined:{y:-5}} className="group flex flex-col rounded-2xl border border-white/10 bg-[#101416] p-4 hover:border-[#B5CDA0]/60">
     <ConceptVisual item={item} index={works.indexOf(item)}/>
     <div className="px-2 pb-3 pt-7 flex-1 flex flex-col">
      <div className="flex justify-between gap-3 items-center mb-3"><span className="text-[10px] uppercase tracking-[.2em] text-[#B5CDA0]">{item.eyebrow}</span>{item.state&&<span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] text-neutral-300">{item.state}</span>}</div>
      <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-neutral-400">{item.description}</p>
      <p className="my-5 border-t border-white/10 pt-4 text-sm font-semibold" style={{color:item.accent}}>{item.proof}</p>
      <div className="flex flex-wrap gap-2">{item.tags.map(t=><span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-neutral-300">{t}</span>)}</div>
     </div>
    </motion.article>)}</AnimatePresence>
   </motion.div>
   <p className="mt-8 text-xs text-neutral-500">Campaign screenshots are withheld from this preview pending final confidentiality review and asset upload. Concept graphics do not depict real analytics.</p>
  </div>
 </section>;
}
