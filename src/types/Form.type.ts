import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TForm={
      children:ReactNode;
      onSubmit:SubmitHandler<FieldValues>;
      double?:boolean

}