import { useState } from "react";
import NewPasswordToken from "@/components/auth/NewPasswordToken";
import NewPasswordForm from "@/components/auth/NewPasswordForm";


export default function NewPasswordView() {

  const [isValidToken, setIsValidToken] = useState<boolean>(false);

  return (
    <>
      <h1 className="text-4xl font-black text-white">Restablce Password</h1>
      <p className="text-2xl font-light text-white mt-5">
        Ingresa el codigo que recibiste {""}
        <span className=" text-fuchsia-500 font-bold">
          {" "}
          Por email
        </span>
      </p>

      {!isValidToken ? <NewPasswordToken/> : <NewPasswordForm/>}
    </>
  );
}
