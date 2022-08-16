import { ModalContainer, NewOperationForm } from "./styled"
export function AddNewOperationModal({ closeModal }) {
    return (
        <ModalContainer>
            <NewOperationForm>
                <h1>New Operation</h1>

                <label><mark>&nbsp; Asset: &nbsp;</mark></label>
                <select name="asset">
                    <option value="O">NYSE: O</option>
                </select>

                <label><mark>&nbsp;Quantity: &nbsp;</mark></label>
                <input type="number"></input>

                <label><mark>&nbsp;Total Amount: &nbsp;</mark></label>
                <input type="number"></input>


                <label><mark>&nbsp;Wallet: &nbsp;</mark></label>
                <select name="wallet">
                    <option value="Webull">Webull</option>
                </select>

                <label><mark>&nbsp;Operation Description: &nbsp;</mark></label>
                <select name="description">
                    <option value="buy">Stock share acquisition</option>
                </select>
                <div>
                    <button onClick={() => closeModal(false)} color="red">CANCEL</button>
                    <button>SUBMIT</button>
                </div>
            </NewOperationForm>
        </ModalContainer>
    )
}