import { useEffect, useState, type FunctionComponent } from 'react';
import { IssueCard } from 'features/Issues';
import { NotFoundPage } from 'features/layout';
import type { IssueCardProps } from 'features/types/types';

const IssuePage: FunctionComponent = () => {
  const [issues, setIssues] = useState<IssueCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/issues')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`요청 실패: ${res.status}`);
        }
        return res.json() as Promise<IssueCardProps[]>;
      })
      .then((data) => {
        return setIssues(data);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (issues.length === 0) return <NotFoundPage />;

  return (
    <ul className="flex flex-col gap-4">
      {issues.map((issue) => (
        <IssueCard key={issue.id} {...issue} />
      ))}
    </ul>
  );
};

export default IssuePage;
