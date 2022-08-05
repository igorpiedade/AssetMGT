import { CalendarBlank, CaretDown } from "phosphor-react";
import { DataFilter, Header, OperationsTable } from "./styled";

import { useQuery } from "@tanstack/react-query";
import { api } from "../../../../services/api";

interface IOperationData {
    id: string;
    created_at: Date;
    assetName: string;
    walletName: string;
    descriptio: string;
    shares: number;
    amount: number;
}

export function ListOperations() {

    const queryOperation = useQuery<IOperationData>(['operation'], async () => {
        const response = await api.get('operation');
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

            <ul>
                {queryOperation.data?.map(operation => (
                    <li key={operation.id}>{operation.Assets.assetName}</li>
                 ))}
            </ul>

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
                    {queryOperation.data?.map(operation => (
    
                    <tr key={operation.id}>
                        <td>{operation.created_at}</td>
                        <td>{operation.Assets.assetName}</td>
                        <td>BUY</td>
                        <td>{operation.shares}</td>
                        <td>${operation.amount/operation.shares}</td>
                        <td>{operation.Wallets.walletName}</td>
                        <td>{operation.amount}</td>
                    </tr>
                   
                   ))}
                    
                </tbody>
            </OperationsTable>
        </>
    );
}