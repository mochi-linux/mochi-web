import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Download, Monitor, HardDrive, Cpu, ExternalLink } from "lucide-react";

const downloadOptions = [
  {
    title: "Minimal Rootfs",
    description: "A bare-bones filesystem for containers, chroots, or custom installations.",
    icon: Cpu,
    format: "tar.gz",
    size: "~150MB",
    url: "#",
    color: "var(--mochi-green)",
    bg: "var(--mochi-green-soft)",
  },
  {
    title: "Live ISO",
    description: "Standard bootable image for testing on real hardware or virtual machines.",
    icon: HardDrive,
    format: "iso",
    size: "~650MB",
    url: "#",
    color: "var(--mochi-pink)",
    bg: "var(--mochi-pink-soft)",
  },
  {
    title: "Virtual Image",
    description: "Optimized disk image for QEMU, VirtualBox, and VMware.",
    icon: Monitor,
    format: "img",
    size: "~800MB",
    url: "#",
    color: "var(--mochi-purple)",
    bg: "var(--mochi-purple-soft)",
  },
];

export default function DownloadPage() {
  return (
    <>
      <Nav />

      <main className="pt-32 pb-24">
        <section className="max-w-5xl mx-auto px-6 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 mb-6">
            <Cpu size={14} />
            Architecture: amd64
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            Download MochiLinux
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Choose the image that best fits your needs. All images are built from 
            the latest rolling release branch and optimized for performance.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloadOptions.map((opt) => (
              <div 
                key={opt.title}
                className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 hover:border-zinc-900 dark:hover:border-zinc-100 transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ background: opt.bg, color: opt.color }}
                >
                  <opt.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  {opt.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
                  {opt.description}
                </p>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2 px-1">
                    <span>{opt.format.toUpperCase()}</span>
                    <span>{opt.size}</span>
                  </div>
                  <a
                    href={opt.url}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-medium text-sm transition-all hover:opacity-90 active:scale-95"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 mt-20">
          <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Need help installing?
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
                Check out our installation guide for step-by-step instructions on 
                how to get MochiLinux running on your system.
              </p>
            </div>
            <a 
              href="/docs/getting-started"
              className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              Installation Guide
              <ExternalLink size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
