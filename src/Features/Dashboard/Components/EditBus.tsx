import { Button } from "@/Components/ui/button";
import { Edit, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import React, { useState } from "react";

function EditBus() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button>
            <Edit />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Bus</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Name Bus */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="bus">Name Bus</Label>
              <Input placeholder="Masukkan Nama Bus" />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="from">Jumlah Seat</Label>
              <Input placeholder="Masukkan Jumlah Seat" type="number" />
            </div>

            <div className="flex justify-end">
              <Button className="shadow-md hover:bg-blue-800"> Save</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditBus;
