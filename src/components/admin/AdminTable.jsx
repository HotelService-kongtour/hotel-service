import React from "react";
import styled from "styled-components";

const AdminTable = ({
  headers,
  data,
  onApprove,
  onReviewClick,
  onPaymentChange,
  onThemeChange,
}) => {
  const MIN_ROWS = 10;

  const paddedData = [...data];
  if (data.length < MIN_ROWS) {
    const emptyRows = MIN_ROWS - data.length;
    for (let i = 0; i < emptyRows; i++) {
      const emptyRow = headers.reduce((acc, header) => {
        acc[header.key] = "";
        return acc;
      }, {});
      paddedData.push(emptyRow);
    }
  }

  const renderCell = (header, value) => {
    if (value === "") {
      return "";
    }

    switch (header.type) {
      case "button":
        return (
          <Button
            onClick={() =>
              header.key === "approval"
                ? onApprove(value)
                : onReviewClick(value)
            }
          >
            {header.key === "approval" ? "승인" : "호텔리뷰"}
          </Button>
        );

      case "payment":
        return (
          <Select
            value={value}
            onChange={(e) => onPaymentChange(e.target.value)}
          >
            <option value="미결제">미결제</option>
            <option value="결제완료">결제완료</option>
          </Select>
        );

      case "theme":
        return (
          <Select value={value} onChange={(e) => onThemeChange(e.target.value)}>
            <option value="Korean-Traditional">Korean-Traditional</option>
            <option value="Casino">Casino</option>
            <option value="Pet-friendly">Pet-friendly</option>
            <option value="Eco-friendly">Eco-friendly</option>
          </Select>
        );

      default:
        return value;
    }
  };

  return (
    <TableWrapper>
      <Table>
        <colgroup>
          {headers.map((header) => (
            <col
              key={header.key}
              style={{ width: getColumnWidth(header.type) }}
            />
          ))}
        </colgroup>
        <thead>
          <TR>
            {headers.map((header) => (
              <TH key={header.key}>{header.label}</TH>
            ))}
          </TR>
        </thead>
        <tbody>
          {paddedData.map((row, index) => (
            <TR key={index}>
              {headers.map((header) => (
                <TD key={header.key}>{renderCell(header, row[header.key])}</TD>
              ))}
            </TR>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};
const getColumnWidth = (type) => {
  switch (type) {
    case "button":
      return "10%";
    case "payment":
    case "theme":
      return "12%";
    default:
      return "9%";
  }
};

export default AdminTable;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 1.25rem 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  table-layout: fixed;
`;

const TR = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  height: 3.75rem;
`;

const TH = styled.th`
  padding: 1rem;
  text-align: center;
  border-bottom: 0.125rem solid #ddd;
  background-color: #f5f5f5;
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 3.75rem;
`;

const TD = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 0.0625rem solid #ddd;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 3.75rem;
  font-size: 0.9rem;

  &:empty {
    height: 3.75rem;
    padding: 0.75rem 1rem;
  }
`;

const Button = styled.button`
  width: 80%;
  height: 2.25rem;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 0.875rem;
  margin: 0 auto;
  display: block;

  &:hover {
    background-color: #0056b3;
  }
`;

const Select = styled.select`
  width: 90%;
  height: 2.25rem;
  padding: 0.5rem;
  border: 0.0625rem solid #ddd;
  border-radius: 0.25rem;
  background-color: white;
  font-size: 0.875rem;
  text-align: left;
  cursor: pointer;
  margin: 0 auto;
  display: block;
`;
