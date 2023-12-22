import { useRepoDataQuery } from '../hooks/queries/use-repo-data-query';

export function NxWelcome({ title }: { title: string }) {
  const { isPending, error, data } = useRepoDataQuery();
  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}

export default NxWelcome;
