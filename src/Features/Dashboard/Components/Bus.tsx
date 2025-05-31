import { DeleteIcon, Edit, Plus } from "lucide-react";

import { useState } from "react";
import AddBus from "./AddBus";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Button } from "@/Components/ui/button";

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
        <AddBus onAdd={addBus} />
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
                <div className="space-x-2">
                  <Button>
                    <Edit />
                  </Button>
                  <Button className="bg-red-500">
                    <DeleteIcon />
                  </Button>
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
