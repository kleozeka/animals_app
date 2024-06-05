import "../styles/Search.css";

export default function Search({type, searchTerm, handleSearch}) {
  return (
    <div className="flexbox">
      <div className="search">
        <div>
          <input
            type="text"
            placeholder={`Search ${type}...`}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}