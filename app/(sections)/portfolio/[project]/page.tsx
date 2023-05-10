import type { Metadata } from 'next';
 
// The `fetch` response is cached and reused between both functions
// below, resulting in a single API request. If you cannot use `fetch`
// directly, you can use `cache`. Learn more:
// https://beta.nextjs.org/docs/data-fetching/caching
export async function generateMetadata(): Promise<Metadata> {
  
  return {  };
}
 
export default async function Page() {

    return(
        <div>hola</div>
    )
}