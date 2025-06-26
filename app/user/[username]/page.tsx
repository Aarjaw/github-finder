import { getUserData } from '@/lib/github';
import UserProfile from '@/components/UserProfile';
import RepoList from '@/components/RepoList';

export default async function UserPage({ params }: { params: { username: string } }) {
  const { username } = params;
  const { user, repos, error } = await getUserData(username);

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <UserProfile user={user} />
      <RepoList repos={repos} username={username} />
    </main>
  );
}
