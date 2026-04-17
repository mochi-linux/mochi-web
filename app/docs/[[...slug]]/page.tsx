import fs from 'fs';
import path from 'path';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import MarkdownRenderer from '@/app/components/MarkdownRenderer';
import Link from 'next/link';

const CONTENT_DIR = path.join(process.cwd(), 'content/docs');

interface DocPageProps {
  params: Promise<{ slug?: string[] }>;
}

async function getDocContent(slug: string[]) {
  const filePath = path.join(CONTENT_DIR, `${slug.join('/')}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return fs.readFileSync(filePath, 'utf8');
}

function getDocsList(dir: string = ''): { title: string; slug: string }[] {
  const fullPath = path.join(CONTENT_DIR, dir);
  const files = fs.readdirSync(fullPath);

  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const name = file.replace('.md', '');
      const title = name
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return {
        title,
        slug: path.join(dir, name).replace(/\\/g, '/'),
      };
    });
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug = ['getting-started'] } = await params;
  const content = await getDocContent(slug);
  const docs = getDocsList();

  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="sticky top-24 space-y-1">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 px-2">
              Documentation
            </p>
            {docs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className={`block px-2 py-1.5 rounded-md text-sm transition-colors ${
                  slug.join('/') === doc.slug
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900'
                }`}
              >
                {doc.title}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {content ? (
            <MarkdownRenderer content={content} />
          ) : (
            <div className="py-20 text-center">
              <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
              <p className="text-zinc-500">The documentation page you are looking for does not exist.</p>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
