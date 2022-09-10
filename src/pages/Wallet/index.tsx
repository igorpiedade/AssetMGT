
import { Star } from "phosphor-react";
import { Header, NewWalletButton, WalletsContainer, WalletsTable } from "./styled"

export function Wallets() {
  return (
    <WalletsContainer>
      <Header>
        <h1>WALLETS</h1>
        <NewWalletButton>
          NEW WALLET
        </NewWalletButton>
      </Header>

      <WalletsTable>
        <tbody>
          <tr>
            <th>NAME</th>
            <th>RATE</th>
            <th>DESCRIPTION</th>
            <th>VALUE</th>
            <th>WEIGHT</th>
            <th>DESIRED</th>
          </tr>

          <tr>
            <td>WEBULL</td>
            <td>
              <Star color="#C6C870" weight="fill" />
              <Star color="#C6C870" weight="fill" />
              <Star color="#C6C870" weight="fill" />
              <Star color="#C6C870" />
              <Star color="#C6C870" />
              <Star color="#C6C870" />
            </td>
            <td>Stocks and Reits</td>
            <td>$3,790.54</td>
            <td>25%</td>
            <td>33%</td>
          </tr>

          <tr>
            <td>MARCUS</td>
            <td>
              <Star color="#C6C870" weight="fill" />
              <Star color="#C6C870" weight="fill" />
              <Star color="#C6C870" weight="fill" />
              <Star color="#C6C870" />
              <Star color="#C6C870" />
              <Star color="#C6C870" />
            </td>
            <td>Savings</td>
            <td>$10,000.00</td>
            <td>67%</td>
            <td>33%</td>
          </tr>

          <tr>
            <td>Retirement 401K</td>
            <td>
              <Star color="#C6C870" weight="fill" />
              <Star color="#C6C870" weight="fill" />
              <Star color="#C6C870" weight="fill" />
              <Star color="#C6C870" />
              <Star color="#C6C870" />
              <Star color="#C6C870" />
            </td>
            <td>Stocks and Reits</td>
            <td>$940,79</td>
            <td>6%</td>
            <td>33%</td>
          </tr>

        </tbody>

      </WalletsTable>

    </WalletsContainer>
  )
}