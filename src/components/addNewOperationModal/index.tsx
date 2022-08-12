import { ModalContainer, NewOperationForm } from "./styled"
export function AddNewOperationModal() {
    return (
        <ModalContainer>
            <NewOperationForm>
                <h1>New Operation</h1>

                <label>Asset:</label>
                <select name="asset">
                    <option value="O">NYSE: O</option>
                </select>

                <label>Quantity:</label>
                <input type="number"></input>

                <label>Total Amount:</label>
                <input type="number"></input>


                <label>Wallet:</label>
                <select name="wallet">
                    <option value="Webull">Webull</option>
                </select>

                <label>Operation Description:</label>
                <select name="description">
                    <option value="buy">Stock share acquisition</option>
                </select>
                <div>
                    <button>CANCEL</button>
                    <button>SUBMIT</button>
                </div>
            </NewOperationForm>
        </ModalContainer>
    )
}