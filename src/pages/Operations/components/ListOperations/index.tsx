import { CalendarBlank, CaretDown } from "phosphor-react";
import { DataFilter, Header, OperationsTable } from "./styled";

export function ListOperations() {
    return (
        <>
            <Header>
                <h1>OPERATIONS</h1>
                <DataFilter>
                    <CalendarBlank />
                    <span>7 days</span>
                    <CaretDown />
                </DataFilter>
            </Header>

            <OperationsTable>
                <tr>
                    <th>DATE</th>
                    <th>ASSET</th>
                    <th>ORDER</th>
                    <th>QTY</th>
                    <th>PRICE</th>
                    <th>WALLET</th>
                    <th>AMOUT</th>
                </tr>
                <tr>
                    <td>16-jun-22</td>
                    <td>NYS:O</td>
                    <td>BUY</td>
                    <td>10</td>
                    <td>$57,90</td>
                    <td>WEBULL</td>
                    <td>$579,00</td>
                </tr>
            </OperationsTable>
        </>
    );
}