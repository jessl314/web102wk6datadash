import {useState} from 'react';
import {Link} from 'react-router-dom';
import './CreationYearList.css'

const CreationYearList = ({objects}) => {
    const modernObjects = objects.filter((obj) => (Number(obj.year_start) >= 1980 && Number(obj.year_start) <= 2025) || (Number(obj.year_end) >= 1980 && Number(obj.year_end) <= 2025))

    const [searchYear, setSearchYear] = useState("");
    const [searchMedium, setSearchMedium] = useState("")
    const [page, setPage] = useState(0);

    const filtered = modernObjects.filter(
    (obj) => {
        const yearMatch =
            (obj.year_start && obj.year_start.includes(searchYear)) ||
            (obj.year_end && obj.year_end.includes(searchYear));

        const medium = obj.medium ?? "";
        const mediumMatch = medium.toLowerCase().includes(searchMedium.toLowerCase());

        return yearMatch && mediumMatch;
    });

    const itemsPerPage = 10;
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = filtered.slice(start, end);

    const totalPages = Math.ceil(filtered.length / itemsPerPage);

    return (
        <div className="search-list">
            <div className="filter">
                 <input
                type="text"
                value={searchYear}
                onChange={(e) => {
                setSearchYear(e.target.value);
                setPage(0); // Reset page on search
                }}
                placeholder="Filter By Year"
                />
                <input
                    type="text"
                    value={searchMedium}
                    onChange={(e) => {
                        setSearchMedium(e.target.value);
                        setPage(0);
                    }}
                    placeholder="Filter by Medium"
                />

            </div>

            <table>
                <thead>
                    <tr>
                    <th>Year Created</th>
                    <th>Name of Art</th>
                    <th>Medium</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((obj) => {
                    const year = obj.year_start ?? obj.year_end ?? "Unknown";
                    return (
                        <tr key={obj.id}>
                        <td>{year}</td>
                        <td>
                            <Link to={`/item/${obj.id}`}>
                                {obj.title || "Untitled"}
                            </Link>
                        </td>
                        <td>{obj.medium || "Unknown"}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
            <div className="pagination">
                <button disabled={page === 0} onClick={() => setPage(page - 1)}>
                    ⬅ Prev
                </button>
                <span>
                    Page {page + 1} of {totalPages}
                </span>
                <button disabled={page >= totalPages - 1} onClick={() => setPage(page + 1)}>
                    Next ➡
                </button>
            </div>
        </div>   
    )

}

export default CreationYearList;