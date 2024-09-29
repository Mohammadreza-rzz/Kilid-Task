import { create } from "zustand";

const useFilterValue = create((set) => ({
  filterValue: null,
  setFilterValue: (state: string) => set(() => ({ filterValue: state })),
}));

export default useFilterValue;
