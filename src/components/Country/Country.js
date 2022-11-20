import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  const { name, area, population, flags, ccn3 } = country;
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <img src={flags.png} className="object-cover w-full h-64" alt="" />
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            Population
          </a>
          <span className="text-gray-600">— {population}</span>
        </p>
        <a
          href="/"
          aria-label="Category"
          title="Visit the East"
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          {name.common}
        </a>
        <p className="mb-2 text-gray-700">{name.official}</p>
        <p className="mb-2 text-gray-700">Area: {area}</p>
        <Link
          to={`/countryDetails/${ccn3}`}
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more about this country
        </Link>
      </div>
    </div>
  );
};

export default Country;
