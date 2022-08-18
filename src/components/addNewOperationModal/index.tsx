/* eslint-disable camelcase */
import { useQueries, useQuery } from "@tanstack/react-query";
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



export function AddNewOperationModal({ closeModal }) {

    const assetlist = useQuery<IAsset>(['asset'], async () => {
        const response = await api.get('asset');
        return response.data;
    })

    const walletList = useQuery<IAsset>(['wallet'], async () => {
        const response = await api.get('wallet');
        return response.data;
    })



    const [asset_id, setAsset_id] = useState('');
    const [shares, setShares] = useState('');
    const [amount, setAmount] = useState('');
    const [wallet_id, setWallet_id] = useState('');
    const [operationDescription_id, setOperationDescription_id] = useState('');

    async function handleSubmit() {
        const newOperation = {
            asset_id,
            shares,
            amount,
            wallet_id,
            operationDescription_id,
        }
        alert(newOperation)
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
                <select name="wallet_id" onChange={e => setWallet_id(e.target.value)} >
                    <option value=""> {assetlist.isFetching && "Loading..."} </option>

                    {walletList.data?.map(wallet => (
                        <option key={wallet.id} value={wallet.id}>{wallet.walletName}</option>
                    ))}

                </select>

                <label><mark>&nbsp;Operation Description: &nbsp;</mark></label>
                <select name="description_id" onChange={e => setOperationDescription_id(e.target.value)} >
                    <option value=""></option>
                </select>
                <div>
                    <ButtonCancel onClick={() => closeModal(false)}>CANCEL</ButtonCancel>
                    <ButtonSubmit onClick={handleSubmit}>SUBMIT</ButtonSubmit>
                </div>
            </NewOperationForm>
        </ModalContainer>
    )
}