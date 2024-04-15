import { Employee } from "@/app/employees/columns";
import { create } from "zustand";
import { appDataBase } from "../utils/helper";

interface EmplployeeStore {
  employees: Employee[];
  fetchEmployee: () => Promise<void>;
}

export const useEmployeeStore = create<EmplployeeStore>()((set) => ({
  employees: [],
  fetchEmployee: async () => {
    try {
      const r = await appDataBase.get("employee");
      if (r.status !== 200) throw new Error("Server Error");
      set({
        employees: r.data,
      });
    } catch (err) {
      console.log(err);
    }
  },
}));
