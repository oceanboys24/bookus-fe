import { Button } from "@/Components/ui/button";
import { Calendar } from "@/Components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  ArrowRightLeft,
  Calendar1Icon,
  MapPinCheck,
  MapPinPlus,
  Search,
} from "lucide-react";
import { useState } from "react";

const FormPencarian = () => {
  const cities = ["Jakarta", "Malang", "Bandung", "Semarang", "Yogyakarta"];

  const [date, setDate] = useState<Date>();
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const switchDestination = () => {
    setFrom((prev) => {
      setTo(prev);
      return to;
    });
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row w-full gap-5">
        <div className="w-1/4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal rounded-xl",
                  !date && "text-muted-foreground"
                )}
              >
                <Calendar1Icon />
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
        <div className="w-3/4">
          <div className="flex flex-row gap-5">
            <Select value={from} onValueChange={setFrom}>
              <SelectTrigger className="w-full rounded-xl">
                <SelectValue placeholder="Asal" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Asal</SelectLabel>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      <MapPinPlus />
                      {city}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button
              onClick={switchDestination}
              variant={"outline"}
              className="cursor-pointer rounded-xl"
            >
              <ArrowRightLeft />
            </Button>
            <Select value={to} onValueChange={setTo}>
              <SelectTrigger className="w-full rounded-xl">
                <SelectValue placeholder="Tujuan" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tujuan</SelectLabel>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      <MapPinCheck />
                      {city}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-1/4">
          <Button
            // onClick={handleSearch}
            className="cursor-pointer w-full rounded-xl"
          >
            <Search /> Cari
          </Button>
        </div>
      </div>
      <div className="block w-full p-5  border-border border-1 rounded-xl">
        <div className="flex flex-col gap-4">
          <div
            // onClick={handleBusCard}
            className="flex flex-col gap-4 p-4 border-border border-1 rounded-xl"
          >
            {/* Bus Card List */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPencarian;
