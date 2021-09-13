import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChange: Function;
    goToPage: Function;
}
const MaxItem = 5;
const MaxLeft = (MaxItem - 1) / 2;

const Pagination = ({ page, onPageChange, goToPage }: Props) => {
    const current = page.number + 1;
    const totalPage = page.totalPages ;
    const maxfirstPage = Math.max(totalPage - (MaxItem - 1), 1);
    const firstPage = Math.min(Math.max(current - MaxLeft, 1), maxfirstPage);
    const paginationItens = Array.from({ length: Math.min(MaxItem, totalPage) });

    return (
        <div className="row d-flex justify-content-center">
            <nav>
                <ul className="pagination pagination-sm">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)}><FontAwesomeIcon icon={faChevronCircleLeft} /></button>
                    </li>
                    {paginationItens.map((item, index) => index + firstPage)
                        .map((pg) => (
                            <li key={pg} className={`page-item ${current === pg ? 'active' : 'inactive'}`} onClick={() => goToPage(pg-1)}>
                                <span className="page-link">{pg}</span>
                            </li>
                        ))}
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}><FontAwesomeIcon icon={faChevronCircleRight} /></button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;