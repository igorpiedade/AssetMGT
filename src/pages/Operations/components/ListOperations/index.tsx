import { CalendarBlank, CaretDown } from "phosphor-react";
import { ActionControllers, DataFilter, Header, NewOperationButton, OperationsTable } from "./styled";
import * as moment from "moment";

import { useQuery } from "@tanstack/react-query";
import { api } from "../../../../services/api";
import { useState } from "react";
import { AddNewOperation } from "../../../../components/addOperation";

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

    const [isModalOpen, setModalVisible] = useState(false);

    const { data, isFetching } = useQuery<IOperationData>(['operation'], async () => {
    
        const response = await api.get('operation', {
            headers: {
                'authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        });
        return response.data;
    })



    return (
        <>
            <Header>
                <h1>OPERATIONS</h1>
                <ActionControllers>
                    <DataFilter>
                        <CalendarBlank />
                        <span>ALL</span>
                        <CaretDown />
                    </DataFilter>
                    <NewOperationButton onClick={() => setModalVisible(true)}>
                        NEW OPERATIONS
                    </NewOperationButton>

                </ActionControllers>
            </Header>

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
                    {data?.map(operation => (

                        <tr key={operation.id}>
                            <td>{moment(operation.created_at).format("MM/DD/YY")}</td>
                            <td>{operation.Assets.assetName}</td>
                            <td>BUY</td>
                            <td>{operation.shares}</td>
                            <td>${operation.amount / operation.shares}</td>
                            <td>{operation.Wallets.walletName}</td>
                            <td>${operation.amount}</td>
                        </tr>

                    ))}

                </tbody>
            </OperationsTable>
            {isFetching && <p>Loading...</p>}
            {isModalOpen && <AddNewOperation />}
        </>
    );
}