export default function ArticleCard({ article }: any) {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
      
      {/* Title */}
      <h2 className="text-2xl font-semibold text-white mb-3 leading-snug">
        {article.title}
      </h2>

      {/* Source */}
      <p className="text-sm text-gray-400 mb-4">
        Source:{" "}
        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
        >
          Original Article
        </a>
      </p>

      {/* Content */}
      <div className="bg-[#020617] border border-white/10 rounded-lg p-4 text-gray-300 text-sm leading-relaxed whitespace-pre-line max-h-64 overflow-y-auto">
        {article.content}
      </div>

      {/* Footer */}
      {article.isUpdated && (
        <div className="mt-5 pt-4 border-t border-white/10">
          
          {/* Badge */}
          <span className="inline-flex items-center bg-emerald-900/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full">
            ✓ Enhanced Article
          </span>

          {/* References */}
          <div className="mt-4">
            <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
              References
            </p>

            <ul className="space-y-1 text-sm">
              {article.references.map((ref: string, idx: number) => (
                <li key={idx}>
                  <a
                    href={ref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 hover:underline"
                  >
                    Reference {idx + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
}
