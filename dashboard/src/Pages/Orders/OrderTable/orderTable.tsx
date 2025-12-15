import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import classes from "./table.module.css";
import Pagination from "@/components/Pagination/Pagination";
// import "./styles.css";

const Table = ({ data }: { data: any[] }) => {
	const columns = useMemo(
		() => [
			{ Header: "Product Name", accessor: "title" },
			{ Header: "Total Price", accessor: "total", Cell: ({ value }: { value: any }) => `$${value}` },
			{ Header: "Quantity", accessor: "totalQuantity" },
			{ Header: "Total Discount", accessor: "discountedTotal" },
			{ Header: "Customer ID", accessor: "userId" },
		],
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0 },
		},
		useSortBy,
		usePagination
	) as any;

	return (
		<div className={classes.table_container}>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup: any) => (
						<tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id || Math.random()}>
							{headerGroup.headers.map((column: any) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())} key={column.id}>
									{column.render("Header")}
									<span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row: any) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()} key={row.id}>
								{row.cells.map((cell: any) => (
									<td {...cell.getCellProps()} key={cell.column.id}>
										{cell.render("Cell")}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
			<Pagination
				canPreviousPage={canPreviousPage}
				canNextPage={canNextPage}
				pageOptions={pageOptions}
				pageCount={pageCount}
				gotoPage={gotoPage}
				nextPage={nextPage}
				previousPage={previousPage}
				setPageSize={setPageSize}
				pageIndex={pageIndex}
				pageSize={pageSize}
			/>
		</div>
	);
};

export default Table;
