import { Button } from "../../../Components/ui/button";
import { Plus } from "lucide-react";

import { Label } from "../../../Components/ui/label";
import { Input } from "../../../Components/ui/input";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../Components/ui/dialog";

type BusType = {
  name: string;
  seats: number;
};
interface AddBusProps {
  onAdd: (bus: BusType) => void;
}

function AddBus({ onAdd }: AddBusProps) {
  const [name, setName] = useState("");
  const [seats, setSeats] = useState("");

  const handleSubmit = () => {
    const newBus: BusType = {
      name,
      seats: parseInt(seats, 10),
    };

    if (!name || !seats) return;
    onAdd(newBus);
    setName("");
    setSeats("");
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="w-10 h-7">
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Bus</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Name Bus */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="bus">Name Bus</Label>
              <Input
                placeholder="Masukkan Nama Bus"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="from">Jumlah Seat</Label>
              <Input
                placeholder="Masukkan Jumlah Seat"
                type="number"
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
              />
            </div>

            <div className="flex justify-end">
              <Button
                className="shadow-md hover:bg-blue-800"
                onClick={handleSubmit}
              >
                {" "}
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddBus;
