import { useParams } from 'react-router-dom';
import { useEffect, useState, type FunctionComponent } from 'react';
import { IssueCard } from 'features/Issues';
import { NotFoundPage } from 'features/layout';
import type { IssueCardProps } from 'features/types/types';

const IssueDetailPage: FunctionComponent = () => {
  console.log('issue detail page');

  const { id } = useParams();
  const [issue, setIssue] = useState<IssueCardProps | null>(null);
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
        const found = data.find((item) => String(item.id) === id);
        setIssue(found ?? null);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!issue) return <NotFoundPage />;

  return (
    <ul className="flex flex-col gap-4">
      <IssueCard {...issue} />
    </ul>
  );
};

export default IssueDetailPage;
