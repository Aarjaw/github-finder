import Link from 'next/link';

export default function RepoList({ repos, username }: { repos: any[]; username: string }) {
  if (!repos.length) return <p className="text-gray-500">No public repositories found.</p>;

  return (
    <ul className="space-y-4">
      {repos.map((repo) => (
        <li key={repo.id} className="border p-4 rounded bg-white dark:bg-gray-800">
          <a href={repo.html_url} target="_blank" className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
            {repo.name}
          </a>
          <p className="text-sm text-gray-600 dark:text-gray-300">{repo.description}</p>
          <div className="text-xs text-gray-500 mt-2 flex gap-4">
            <span>⭐ {repo.stargazers_count}</span>
            <span>🍴 {repo.forks_count}</span>
            <span>📝 {repo.language}</span>
            <span>🕒 {new Date(repo.updated_at).toLocaleDateString()}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
