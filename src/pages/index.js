import React, {useEffect} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Redirect the site root to the docs section.
export default function Home() {
  const docsUrl = useBaseUrl('/docs');

  useEffect(() => {
    window.location.replace(docsUrl);
  }, [docsUrl]);

  // Optional: simple fallback content (useful if JS is disabled)
  return (
    <div style={{padding: '2rem', textAlign: 'center'}}>
      <p>Redirecting to documentation… If you are not redirected, <a href={docsUrl}>click here</a>.</p>
    </div>
  );
}
