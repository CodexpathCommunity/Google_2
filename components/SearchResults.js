function SearchResults({ results }) {
  return (
    <div className="">
      <p className="text-gray-600 text-md mb-5 mt-3">
        about {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds){" "}
      </p>
    </div>
  );
}

export default SearchResults;
