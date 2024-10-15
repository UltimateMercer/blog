import { GlassCard, Card } from "@/components/card";
import { getArticles } from "@/services";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto mt-6">
        <div className="flex flex-col gap-5">
          {getArticles().map((article) => (
            <Card key={article.slug} {...article} />
          ))}
          {getArticles().length === 0 && <p>No articles found.</p>}
          {/* <Card /> */}
        </div>
      </div>
    </main>
  );
}
