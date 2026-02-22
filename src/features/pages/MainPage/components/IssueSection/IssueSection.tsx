import { useEffect, useState } from 'react';
import { SectionWrapper, SectionHeader } from 'features/layout';
import { IssueCard } from 'features/Issues';
import type { IssueCardProps } from 'features/types/types';

const IssueSection = () => {
  const [issues, setIssues] = useState<IssueCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('/issues?_limit=3')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`요청 실패: ${response.status}`);
        }
        return response.json();
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
