import { redirect } from "next/navigation";

export default function RedirectToFirstPolicy() {
  redirect("/Policies/privacy-policy");
}
