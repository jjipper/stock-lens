import { useEffect, useState, useCallback, type FunctionComponent } from 'react';
import { useOutletContext } from 'react-router-dom';
import { IssueCard } from 'features/Issues';
import { NotFoundPage } from 'features/layout';
import type { IssueCardProps, AppBarOutletContext } from 'features/types/types';

const IssuePage: FunctionComponent = () => {
  // 이슈 렌더링
  const [issues, setIssues] = useState<IssueCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadIssues = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/issues');
      if (!res.ok) throw new Error(`요청 실패: ${res.status}`);
      const data = await res.json();
      setIssues(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadIssues();
  }, [loadIssues]);

  // app bar Layout 타이틀 설정
  const { setAppBarTitle } = useOutletContext<AppBarOutletContext>();

  useEffect(() => {
    setAppBarTitle('이슈 목록');
  }, [setAppBarTitle]);

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
