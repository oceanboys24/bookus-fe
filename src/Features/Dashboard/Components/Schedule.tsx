import { Button } from "@/Components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { DeleteIcon, Edit } from "lucide-react";
import AddSchedule from "../Components/AddSchedule";

const scheduleList = [
  {
    nameBus: "Bus001",
    from: "Jakarta",
    departure: "08.00 WIB",
    arrival: "09.30 WIB",
    to: "Surabaya",
  },
  {
    nameBus: "Bus002",
    from: "Bandung",
    departure: "10.00 WIB",
    arrival: "11:30 WIB",
    to: "Surabaya",
  },
  {
    nameBus: "Bus003",
    from: "Jakarta",
    departure: "10.00 WIB",
    arrival: "11:30 WIB",
    to: "Depok",
  },
  {
    nameBus: "Bus004",
    from: "Malang",
    departure: "12.30 WIB",
    arrival: "15:30 WIB",
    to: "Bandung",
  },
  {
    nameBus: "Bus005",
    from: "Padang",
    departure: "15.40 WIB",
    arrival: "16:30 WIB",
    to: "Banten",
  },
  {
    nameBus: "Bus006",
    from: "Jawa Barat",
    departure: "10.00 WIB",
    arrival: "11:30 WIB",
    to: "Jawa Timur",
  },
];

function Schedule() {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Schedule</h1>
        <AddSchedule />
      </div>
      <div className="overflow-x-auto">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nama Bus</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Departure</TableHead>
              <TableHead>Arrival</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scheduleList.map((schedule, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {schedule.nameBus}
                </TableCell>
                <TableCell>{schedule.from}</TableCell>
                <TableCell>{schedule.to}</TableCell>
                <TableCell>{schedule.departure}</TableCell>
                <TableCell>{schedule.arrival}</TableCell>
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
              <TableCell colSpan={3}>Today: </TableCell>
              <TableCell className="text-right">27 May 2025</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}

export default Schedule;
