/* eslint-disable prettier/prettier */
import { BiggerPositions, DashGrid, GridItems, HistoryGraph, LastOperations, PortifolioDistributionGraph, PortifolioPizzaGraph } from "./styled";

export function Dashboard() {
  return (
    <DashGrid>
      <LastOperations>Last Operations</LastOperations>
      <PortifolioPizzaGraph>Portifolio</PortifolioPizzaGraph>
      <PortifolioDistributionGraph>Distribution</PortifolioDistributionGraph>
      <HistoryGraph>History</HistoryGraph>
      <BiggerPositions>10 Bigger Possitions</BiggerPositions>
    </DashGrid>
  );
}
