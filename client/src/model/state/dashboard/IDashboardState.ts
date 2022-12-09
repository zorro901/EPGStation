export default interface IDashboardState {
    clearDate(): void;
    fetchData(): Promise<void>;
    getConflictCnt(): number;
}
