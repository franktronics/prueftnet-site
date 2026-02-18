import { Head } from '@inertiajs/react'
import { Navbar } from '~/pages/home/components/navbar'
import { Hero } from '~/pages/home/components/hero'
import { Capture } from './components/capture'
import { Graph } from './components/graph'
import { Analysis } from './components/analysis'
import { Waitlist } from './components/waitlist'
import { Faq } from './components/faq'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pruftnet - Visual Network Analyser | Open Source Packet Capture Tool</title>
        <meta
          name="description"
          content="Pruftnet is a free, open-source visual network analyser. Capture packets, visualize network topology, and build custom analysis workflows with drag-and-drop simplicity."
        />
        <meta
          name="keywords"
          content="network analyzer, packet capture, network visualization, wireshark alternative, network topology, open source network tool, packet sniffer, network monitoring"
        />
        <meta property="og:title" content="Pruftnet - Visual Network Analyser" />
        <meta
          property="og:description"
          content="Free, open-source network analysis with visual workflows"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pruftnet.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pruftnet - Visual Network Analyser" />
        <meta
          name="twitter:description"
          content="Free, open-source network analysis with visual workflows"
        />
      </Head>

      <div className="relative flex min-h-screen flex-col">
        <div className="pointer-events-none absolute inset-0 hidden justify-center lg:flex">
          <div className="container-main relative h-full w-full">
            <div className="guides-vertical absolute left-0 top-0 h-full" />
          </div>
        </div>

        <div className="relative z-1">
          <Navbar />
          <main className="flex-1">
            <Hero />
            <div className="guides-horizontal-full hidden lg:block" />
            <Capture />
            <div className="guides-horizontal-full hidden lg:block" />
            <Graph />
            <div className="guides-horizontal-full hidden lg:block" />
            <Analysis />
            <div className="guides-horizontal-full hidden lg:block" />
            <Waitlist />
            <div className="guides-horizontal-full hidden lg:block" />
            <Faq />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
