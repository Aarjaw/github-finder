export async function getUserData(username: string) {
  try {
    const [userRes, repoRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`),
    ]);

    if (!userRes.ok) throw new Error('User not found');

    const user = await userRes.json();
    const repos = await repoRes.json();

    return { user, repos };
  } catch (err: any) {
    return { error: err.message };
  }
}
