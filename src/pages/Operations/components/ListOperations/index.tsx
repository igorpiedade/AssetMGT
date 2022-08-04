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
             <th>TESTE</th>
             <th>TESTE</th>
             <th>TESTE</th>
             <th>TESTE</th>
             <th>TESTE</th>
             <th>TESTE</th>
             <th>TESTE</th>
            </tr>
            <tr>
             <td>TESTE</td>
             <td>TESTE</td>
             <td>TESTE</td>
             <td>TESTE</td>
             <td>TESTE</td>
             <td>TESTE</td>
             <td>TESTE</td>
            </tr> 
        </OperationsTable>
      </>
    );
}