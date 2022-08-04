import { CalendarBlank } from "phosphor-react";
import { DataFilter, Header } from "./styled";

export function ListOperations() {
    return (
        <Header>
            <h1>OPERATIONS</h1>
            <DataFilter>
                <CalendarBlank />
                <select>
                    <option value="7 days">7 days</option>
                    <option value="15 days">15 days</option>
                    <option value="30 days">30 days</option>
                    <option value="All">All</option>
                </select>
            </DataFilter>
        </Header>
    );
}