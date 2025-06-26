export default function UserProfile({ user }: { user: any }) {
  return (
    <div className="flex gap-4 mb-6">
      <img src={user.avatar_url} alt={user.name} className="w-24 h-24 rounded-full" />
      <div>
        <h1 className="text-2xl font-bold">{user.name || user.login}</h1>
        <p>{user.bio}</p>
        <p>{user.location}</p>
        <p>
          Followers: {user.followers} | Following: {user.following} | Public Repos: {user.public_repos}
        </p>
      </div>
    </div>
  );
}
