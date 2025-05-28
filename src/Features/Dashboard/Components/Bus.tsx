import DeleteButton from "@/Components/DeleteButton";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { useState } from "react";
import AddBuss from "./AddBus";
import EditBus from "./EditBus";

type BusType = {
  name: string;
  seats: number;
};
function Bus() {
  const [buses, setBuses] = useState<BusType[]>([
    { name: "Bus001", seats: 20 },
  ]);

  const addBus = (newBus: BusType) => {
    setBuses((prev) => [...prev, newBus]);
  };
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bus</h1>
        <AddBuss onAdd={addBus} />
      </div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nama Bus</TableHead>
            <TableHead>Jumlah Seat</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {buses.map((bus, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{bus.name}</TableCell>
              <TableCell className="text-right">{bus.seats}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <EditBus />
                  <DeleteButton />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Jumlah Bus hari ini: </TableCell>
            <TableCell className="text-right">5</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default Bus;
