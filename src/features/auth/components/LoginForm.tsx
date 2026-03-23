import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";

export function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { mutate, isPending } = useLogin();

  const onSubmit = (data: any) => mutate(data);

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">Đăng nhập Quin POS</Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 flex flex-col gap-6">
          <Input size="lg" label="Email" {...register("email")} required />
          <Input type="password" size="lg" label="Mật khẩu" {...register("password")} required />
        </div>
        <Button className="mt-6" fullWidth type="submit" disabled={isPending}>
          {isPending ? "Đang kiểm tra..." : "Đăng nhập"}
        </Button>
      </form>
    </Card>
  );
}