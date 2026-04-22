import Nav from "./components/Nav";
import Footer from "./components/Footer";

const whyItems = [
  {
    title: "Structured Filesystem",
    desc: "Clean separation between system, applications, and user data.",
  },
  {
    title: "Application Bundles",
    desc: "Self-contained .app directories reduce dependency conflicts.",
  },
  {
    title: "Custom Toolchain",
    desc: "Built entirely from source for full control.",
  },
  {
    title: "Rolling Release",
    desc: "Continuously updated system without fixed versions.",
  },
  {
    title: "Custom Init System",
    desc: "Lightweight and optimized for MochiLinux.",
  },
];

const philosophyItems = [
  { word: "Smooth", desc: "clean and responsive", color: "var(--mochi-green)", bg: "var(--mochi-green-soft)" },
  { word: "Small", desc: "minimal and efficient", color: "var(--mochi-purple)", bg: "var(--mochi-purple-soft)" },
  { word: "Sweet", desc: "simple, elegant, and enjoyable", color: "var(--mochi-pink)", bg: "var(--mochi-pink-soft)" },
];

const teamMembers = [
  {
    name: "Ariz Kamizuki",
    role: "Owner , Core Developer",
    desc: "Architecting the filesystem and init system.",
  },
  {
    name: "Yuuma Hanazawa",
    role: "Website Developer",
    desc: "Building the website and documentation.",
  },
  {
    name: "Luna Hoshigure",
    role: "Tester , Developer",
    desc: "Testing and developing new features.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main className="pt-14">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-32 md:py-48" data-aos="fade-down">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 shadow-sm"
              style={{ background: "var(--mochi-pink-soft)", color: "var(--mochi-pink)" }}>
              Rolling Linux Distribution
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight mb-8 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100 bg-clip-text text-transparent">
              MochiLinux
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Smooth, Small and Sweet — a modern Linux distribution built from
              scratch with a custom filesystem hierarchy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105" 
                style={{ background: "linear-gradient(135deg, var(--mochi-pink), var(--mochi-purple))" }}>
                Get Started
              </button>
              <button className="px-8 py-3 rounded-full font-semibold border-2 transition-all duration-200 transform hover:scale-105"
                style={{ borderColor: "var(--mochi-purple)", color: "var(--mochi-purple)" }}>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* What is MochiLinux */}
        <section id="what-is-mochilinux" className="max-w-6xl mx-auto px-6 py-24" data-aos="fade-down">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
              What is MochiLinux?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-12">
              MochiLinux redefines how applications and system files are
              organized. Instead of spreading files across directories like{" "}
              <code className="text-sm font-mono px-2 py-1 rounded-lg mx-1" style={{ background: "var(--mochi-purple-soft)", color: "var(--mochi-purple)" }}>/usr</code>,{" "}
              <code className="text-sm font-mono px-2 py-1 rounded-lg mx-1" style={{ background: "var(--mochi-purple-soft)", color: "var(--mochi-purple)" }}>/opt</code>, and{" "}
              <code className="text-sm font-mono px-2 py-1 rounded-lg mx-1" style={{ background: "var(--mochi-purple-soft)", color: "var(--mochi-purple)" }}>/usr/share</code>,
              MochiLinux centralizes applications into a single location —
              creating a more predictable and user-friendly system.
            </p>
            <div className="inline-block">
              <pre className="bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 text-zinc-800 dark:text-zinc-200 text-lg font-mono rounded-2xl px-8 py-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
                /Applications
              </pre>
            </div>
          </div>
        </section>

        {/* Application Model */}
        <section id="application-model" className="max-w-6xl mx-auto px-6 py-24" data-aos="fade-down">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
              Application Model
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-12">
              Applications are distributed as{" "}
              <code className="text-sm font-mono px-2 py-1 rounded-lg mx-1" style={{ background: "var(--mochi-green-soft)", color: "var(--mochi-green)" }}>.pkg</code>{" "}
              packages and installed as self-contained bundles under{" "}
              <code className="text-sm font-mono px-2 py-1 rounded-lg mx-1" style={{ background: "var(--mochi-green-soft)", color: "var(--mochi-green)" }}>/Applications/&lt;AppName&gt;.app/</code>.
              This design allows applications to be portable, isolated, and easy
              to manage.
            </p>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <pre className="bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-mono p-8 overflow-x-auto">{`<AppName>.app/
├── exec/
│   └── <arch>/
│       └── <app-binary>
├── library/        # Runtime shared libraries (LD_LIBRARY_PATH)
├── resources/      # Optional assets (icons, UI, data)
└── manifest.json   # Application metadata`}</pre>
            </div>
          </div>
        </section>

        {/* CLI Applications */}
        <section id="cli-applications" className="max-w-6xl mx-auto px-6 py-24" data-aos="fade-down">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
              CLI Applications
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-12">
              Command-line tools follow a traditional UNIX layout for
              compatibility, ensuring that standard CLI workflows remain
              unchanged.
            </p>
            <div className="inline-block">
              <pre className="bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 text-zinc-800 dark:text-zinc-200 text-lg font-mono rounded-2xl px-8 py-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
                /System/bin   (symlinked to /bin)
              </pre>
            </div>
          </div>
        </section>

        {/* Custom Init System */}
        <section id="custom-init-system" className="max-w-6xl mx-auto px-6 py-24" data-aos="fade-down">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
              Custom Init System
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-12">
              MochiLinux does not use{" "}
              <code className="text-sm font-mono px-2 py-1 rounded-lg mx-1" style={{ background: "var(--mochi-pink-soft)", color: "var(--mochi-pink)" }}>systemd</code>{" "}
              or{" "}
              <code className="text-sm font-mono px-2 py-1 rounded-lg mx-1" style={{ background: "var(--mochi-pink-soft)", color: "var(--mochi-pink)" }}>OpenRC</code>.
              Instead, it includes a custom-built init and service management
              system designed specifically for performance and simplicity.
            </p>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <pre className="bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-mono p-8 overflow-x-auto">{`/System/Library/CoreService/SystemDaemon/
├── sysboot    # Boot initialization
├── sysctl     # System control services
└── sysmod     # Module/service management

/System/init  → symlink to sysboot`}</pre>
            </div>
          </div>
        </section>

        {/* Why MochiLinux */}
        <section id="why-mochilinux" className="max-w-6xl mx-auto px-6 py-24" data-aos="fade-down">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              Why MochiLinux?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-zinc-100 dark:border-zinc-800"
              >
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                  style={{ background: "var(--mochi-purple-soft)" }}>
                  <div className="w-6 h-6 rounded-full" style={{ background: "var(--mochi-purple)" }}></div>
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section id="philosophy" className="max-w-6xl mx-auto px-6 py-24" data-aos="fade-down">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              Philosophy
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {philosophyItems.map((item) => (
              <div key={item.word} className="flex-1 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ background: item.bg }}>
                <div className="text-center">
                  <p className="text-2xl font-bold mb-3" style={{ color: item.color }}>
                    {item.word}
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section id="team" className="max-w-6xl mx-auto px-6 py-24" data-aos="fade-down">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              Meet the Team
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-zinc-100 dark:border-zinc-800"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-md"
                  style={{ background: "linear-gradient(135deg, var(--mochi-pink-soft), var(--mochi-purple-soft))" }}>
                  <span className="text-2xl font-bold" style={{ color: "var(--mochi-purple)" }}>
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: "var(--mochi-purple)" }}>
                  {member.role}
                </p>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
