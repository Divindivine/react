import { kMaxLength } from "buffer";
import { lchown } from "fs";

type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition} - ${VerticalPosition}`, "center - center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position-{position}</div>;
};

