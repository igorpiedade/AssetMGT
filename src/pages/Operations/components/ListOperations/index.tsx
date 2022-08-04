import { CalendarBlank, CaretDown } from "phosphor-react";
import { DataFilter, Header, OperationsTable } from "./styled";

import { useQuery } from "@tanstack/react-query";
import { api } from "../../../../services/api";

interface IOperationData {
    id: string;
    date: Date;
    assetName: string;
}

export function ListOperations() {

    const { data, isFetching } = useQuery<IOperationData>(['operation'], async () => {
        const response = await api.get('operation');

        console.log(response.data);

        return response.data;
    })

    return (
        <>
            <Header>
                <h1>OPERATIONS</h1>
                <DataFilter>
                    <CalendarBlank />
                    <span>ALL</span>
                    <CaretDown />
                </DataFilter>
            </Header>
            {/* {isFetching && <span>Loading...</span>}
            <OperationsTable>
                <tbody>
                    <tr>
                        <th>DATE</th>
                        <th>ASSET</th>
                        <th>ORDER</th>
                        <th>QTY</th>
                        <th>PRICE</th>
                        <th>WALLET</th>
                        <th>AMOUT</th>
                    </tr>
                    {data?.map(operation => {
                        return (
                            <tr key={operation.id}>
                                <td>{operation.date}</td>
                                <td>NYS:O</td>
                                <td>BUY</td>
                                <td>10</td>
                                <td>$57,90</td>
                                <td>WEBULL</td>
                                <td>$579,00</td>
                            </tr>
                        )
                    })}
                </tbody>
            </OperationsTable> */}
        </>
    );
}