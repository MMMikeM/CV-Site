const This = ({ elementRef }) => {
  return (
    <div ref={elementRef} className="wrapper h-1/3 -mb-12">
      <h2 className="h2">Some fun things about this site</h2>
      <p>
        I debated heavily between using a static site generator or writing a SPA
        for this page. Although a static site would have yielded the smallest
        bundle size, I chose to use a SPA to avoid latency when navigating to
        new pages. Even serving a custom font from the front end, I was able to
        keep a smaller bundle size than a basic CRA.
      </p>

      <p>
        After much deliberation, I built it using Preact, Typescript and
        Tailwind CSS's just-in-time compiler. By lazy loading the both the font
        and images, I was able to get load times down to 114ms (from an average
        of 10 local loads - so not accounting for network latency), even using
        Chrome's "Fast 3G" profile, DOMContent is loaded in ~1.4s thanks to
        limited network requests. In comparison, a standard CRA using a similar
        set of libraries had a bundle size of 441kg and loaded DOMContent in
        ~2.1s using the "Fast 3G" profile and a load time of 600ms.
      </p>
      <table className="my-4 mx-4 lg:mx-8 text-left w-full text-sm sm:text-base">
        <tr>
          <th className="pr-4 sm:pr-12 align-top">Framework</th>
          <th className="pr-4 sm:pr-12">
            Bundle Size
            <span className="hidden sm:block"> (excl font)</span>
          </th>
          <th className="pr-4 sm:pr-12">
            DOMContent<span className="hidden sm:block"> (Fast 3g)</span>
          </th>
        </tr>
        <tr>
          <td>React</td>
          <td>241kB</td>
          <td>2.1s</td>
        </tr>
        <tr>
          <td>Preact</td>
          <td>41kB</td>
          <td>1.4s</td>
        </tr>
      </table>

      <p>
        I was quite impressed with the bundle size improvement I gained by using
        Preact. It was able to provide all functionality I needed, while
        maintaining performance that is competitive with static sites.
      </p>
    </div>
  );
};

export default This;
