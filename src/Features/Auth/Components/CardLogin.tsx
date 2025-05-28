import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

function CardLogin() {
  return (
    <div className=" max-w-md md:w-96 border-[1px] rounded-xl shadow-2xl p-5 bg-white">
      <h1 className="md:text-3xl tracking-tight text-lg font-bold text-center">
        Admin
      </h1>

      <form action="" className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="Masukkan Email"
          type="text"
          className="text-sm rounded-xl shadow-blue-300 p-4 "
          name="email"
          required
        />
        <Label htmlFor="password">Password</Label>

        <Input
          placeholder="Masukkan Password"
          type="password"
          name="password"
          className="text-sm rounded-xl shadow-blue-300 p-4"
          required
        />
        <div className="mt-3">
          <Button className="rounded-2xl w-full text-sm md:text-shadow-lg hover:bg-blue-700">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CardLogin;
