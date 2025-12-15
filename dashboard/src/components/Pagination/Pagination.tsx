import React from "react";
import classes from "./Pagination.module.css";

interface PaginationProps {
	canPreviousPage: boolean;
	canNextPage: boolean;
	pageOptions: any[];
	pageCount: number;
	gotoPage: (updater: number) => void;
	nextPage: () => void;
	previousPage: () => void;
	setPageSize: (pageSize: number) => void;
	pageIndex: number;
	pageSize: number;
}

const Pagination: React.FC<PaginationProps> = ({
	canPreviousPage,
	canNextPage,
	pageOptions,
	pageCount,
	gotoPage,
	nextPage,
	previousPage,
	setPageSize,
	pageIndex,
	pageSize,
}) => {
	return (
		<div className={classes.pagination}>
			<button className={classes.button} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
				{"<<"}
			</button>
			<button className={classes.button} onClick={() => previousPage()} disabled={!canPreviousPage}>
				{"<"}
			</button>
			<button className={classes.button} onClick={() => nextPage()} disabled={!canNextPage}>
				{">"}
			</button>
			<button className={classes.button} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
				{">>"}
			</button>
			<span className={classes.pageInfo}>
				Page{" "}
				<strong>
					{pageIndex + 1} of {pageOptions.length}
				</strong>{" "}
			</span>
			<select
				className={classes.select}
				value={pageSize}
				onChange={e => {
					setPageSize(Number(e.target.value));
				}}
			>
				{[10, 20, 30, 40, 50].map(pageSize => (
					<option key={pageSize} value={pageSize}>
						Show {pageSize}
					</option>
				))}
			</select>
		</div>
	);
};

export default Pagination;
