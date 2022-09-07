
import { ListOperations } from "./components/ListOperations"
import { Grid, OperationsContainer, SideBox1, SideBox2, SideBox3 } from "./styled"

export function Operations() {
  return (
    <Grid>
      <OperationsContainer>
        <ListOperations />
      </OperationsContainer>
      <SideBox1>TESTE</SideBox1>
      <SideBox2>TESTE</SideBox2>
    </Grid>

  )
}
