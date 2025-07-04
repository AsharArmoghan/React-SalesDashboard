import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import classes from "./table.module.css";
// import "./styles.css";

const Table = ({ data }) => {
	const columns = useMemo(
		() => [
			{ Header: "ID", accessor: "order_id" },
			{ Header: "Customer Name", accessor: "customer_name" },
			{ Header: "Product Name", accessor: "product_name" },
			{ Header: "Unit Price", accessor: "unit_price" },
			{ Header: "Shipping Address", accessor: "shipping_address" },
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);

	return (
		<div className={classes.table_container}>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render("Header")}
									<span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => (
									<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
