const Crumb = ({ idx, index, pathName, link }) => {
  return (
    <li>
      <div className="flex items-center">
        {idx !== 0 && (
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <a
          href={link ? link : "#"}
          className={`${idx ? "ml-4" : ""} text-sm font-medium text-gray-${
            index === link ? "200 pointer-events-none" : "400"
          } hover:text-gray-600`}
          aria-current="page"
        >
          {pathName}
        </a>
      </div>
    </li>
  );
};

/**
 * BreadCrumbs
 * @param {String} index current index
 * @param {List} paths list of path object ({ name, link })
 */
const BreadCrumbs = ({ index = null, paths = [] }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        {paths.map((path, idx) => {
          return (
            <Crumb
              idx={idx}
              index={index}
              pathName={path.name}
              link={path.link}
            />
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
