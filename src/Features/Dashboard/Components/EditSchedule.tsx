import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Edit, Plus } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/Components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";

function EditSchedule() {
  const [date, setDate] = React.useState<Date>();

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
            <DialogTitle>Edit Schedule</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Name Bus */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="bus">Name Bus</Label>
              <Select>
                <SelectTrigger
                  id="bus"
                  className="w-full shadow-md hover:bg-gray-200"
                >
                  <SelectValue placeholder="Nama Bus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bus006">Bus 006</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* From & To */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="from">From</Label>
                <Select>
                  <SelectTrigger
                    id="from"
                    className="w-full shadow-md hover:bg-gray-200"
                  >
                    <SelectValue placeholder="From ..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Jakarta">Jakarta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="to">To</Label>
                <Select>
                  <SelectTrigger
                    id="to"
                    className="w-full shadow-md hover:bg-gray-200"
                  >
                    <SelectValue placeholder="To ..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Jakarta">Jakarta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Date */}
            <div className="grid grid-cols-1 gap-4 w-full">
              <div className="flex flex-col gap-1">
                <Label htmlFor="date">Date</Label>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="flex flex-col gap-1 w-full">
                <Label htmlFor="date">Departure Time</Label>
                <Input
                  id="date"
                  type="time"
                  className="shadow-md w-full hover:bg-gray-200"
                />
              </div>

              <div className="flex flex-col gap-1 w-full">
                <Label htmlFor="date">Arrival Time</Label>
                <Input
                  id="date"
                  type="time"
                  className="shadow-md w-full hover:bg-gray-200"
                />
              </div>
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

export default EditSchedule;
