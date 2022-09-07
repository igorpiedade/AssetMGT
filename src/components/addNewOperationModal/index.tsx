/* eslint-disable camelcase */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react"
import { api } from "../../services/api";
import { ModalContainer, NewOperationForm, ButtonCancel, ButtonSubmit } from "./styled"

interface IAsset {
    id: string;
    assetName: string;
}

interface IWallet {
    id: string;
    walletName: string;
}

interface IDescriptions {
    id: string;
    description: string;
}

export function AddNewOperationModal({ viewModal }) {

    const assetlist = useQuery<IAsset>(['asset'], async () => {
        const response = await api.get('asset', {
            headers: {
                'authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        });
        return response.data;
    })

    const walletList = useQuery<IWallet>(['wallet'], async () => {
        const response = await api.get('wallet', {
            headers: {
                'authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        });
        return response.data;
    })

    const descriptionList = useQuery<IDescriptions>(['description'], async () => {
        const response = await api.get('description', {
            headers: {
                'authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        });
        return response.data;
    })

    const queryClient = useQueryClient()

    const mutation = useMutation(newOperation => {
        return (api.post('operation', newOperation, {
            headers: {
                'authorization': `Bearer ${sessionStorage.getItem("token")}`
            }
        })
            .catch(function (error) {
                console.log(error)
            })
        )
    }, {
        onSuccess: data => {
            queryClient.refetchQueries();
        }
    });

    const [asset_id, setAsset_id] = useState('');
    const [sharesT, setShares] = useState('');
    const [amountT, setAmount] = useState('');
    const [wallet_id, setWallet_id] = useState('');
    const [operationDescription_id, setOperationDescription_id] = useState('');

    async function handleSubmit() {

        mutation.mutate({
            asset_id,
            shares: parseFloat(sharesT),
            amount: parseFloat(amountT),
            wallet_id,
            operationDescription_id,
        })

        viewModal(false)
    }

    return (
        <ModalContainer>
            <NewOperationForm>
                <h1>New Operation</h1>

                <label><mark>&nbsp; Asset: &nbsp;</mark></label>
                <select name="asset_id" defaultValue="default" onChange={e => setAsset_id(e.target.value)}>
                    <option value="default" disabled hidden> {assetlist.isFetching && "Loading..."} </option>

                    {assetlist.data?.map(asset => (
                        <option key={asset.id} value={asset.id}>{asset.assetName}</option>
                    ))}

                </select>

                <label><mark>&nbsp;Quantity: &nbsp;</mark></label>
                <input name="shares" type="number" onChange={e => setShares(e.target.value)}></input>

                <label><mark>&nbsp;Total Amount: &nbsp;</mark></label>
                <input name="amount" type="number" onChange={e => setAmount(e.target.value)} ></input>


                <label><mark>&nbsp;Wallet: &nbsp;</mark></label>
                <select name="wallet_id" defaultValue="default" onChange={e => setWallet_id(e.target.value)} >
                    <option value="default" > {walletList.isFetching && "Loading..."} </option>

                    {walletList.data?.map(wallet => (
                        <option key={wallet.id} value={wallet.id}>{wallet.walletName}</option>
                    ))}

                </select>

                <label><mark>&nbsp;Operation Description: &nbsp;</mark></label>
                <select name="description_id" defaultValue="default" onChange={e => setOperationDescription_id(e.target.value)} >
                    <option value="default">{descriptionList.isFetching && "Loading..."}</option>

                    {descriptionList.data?.map(description => (
                        <option key={description.id} value={description.id}>{description.description}</option>
                    ))}

                </select>
                <div>
                    <ButtonCancel onClick={() => viewModal(false)}>CANCEL</ButtonCancel>
                    <ButtonSubmit onClick={handleSubmit}>SUBMIT</ButtonSubmit>
                </div>
            </NewOperationForm>
        </ModalContainer>
    )
}