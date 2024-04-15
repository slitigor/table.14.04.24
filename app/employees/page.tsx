import { DataTable } from "@/components/data-table";
import { Employee, columns } from "./columns";

async function getEmployees(): Promise<Employee[]> {
  const r = await fetch("http://localhost:8080/employee");
  const data = await r.json();
  return data;
}

const page = async () => {
  const data = await getEmployees();

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">Все сотрудники</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
};

export default page;
