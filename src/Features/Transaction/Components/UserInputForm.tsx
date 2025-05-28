import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const UserInputForm = () => {
  return (
    <div className="p-4 rounded-xl border-border border-1">
      <div className="p-4 rounded-xl border-border border-1">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Informasi Penumpang</h1>
          <form className="flex flex-row gap-4">
            <div className="grid w-full max-w-sm items-center">
              <Label htmlFor="fullname" className="mb-2">
                Nama
              </Label>
              <Input
                type="text"
                id="fullname"
                placeholder="Masukan nama lengkap"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Masukan alamat email"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="telepon" className="mb-2">
                Telepon
              </Label>
              <Input
                type="number"
                id="telepon"
                placeholder="Masukan nomor telepon"
              />
            </div>
          </form>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-1">
              <text>Total Harga</text>
              <text className="text-lg font-semibold text-red-500">
                Rp 127.000
              </text>
            </div>
            <text className="text-xs text-gray-400 italic">
              *Sudah termasuk pajak
            </text>
          </div>
          <Button className="cursor-pointer w-1/5">Pesan</Button>
        </div>
      </div>
    </div>
  );
};

export default UserInputForm;
