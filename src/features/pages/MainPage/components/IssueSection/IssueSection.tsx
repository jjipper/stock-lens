import { IssueCard } from 'features/Issues';
import { SectionHeader,SectionWrapper } from 'features/layout';
import type { IssueCardProps } from 'features/types/types';
import { useEffect, useState } from 'react';

const IssueSection = () => {
  const [issues, setIssues] = useState<IssueCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('/issues?_limit=3')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`요청 실패: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setIssues(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <SectionWrapper>Loading...</SectionWrapper>;
  if (error) return <SectionWrapper>Error: {error.message}</SectionWrapper>;

  return (
    <SectionWrapper>
      <SectionHeader title={'Top Trending Issues'} updateTime={'Just now'} />

      <ul className="flex flex-col gap-4">
        {issues.map((issue) => (
          <IssueCard key={issue.id} {...issue} />
        ))}
      </ul>
    </SectionWrapper>
  );
};

export { IssueSection };
