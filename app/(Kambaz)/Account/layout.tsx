import AccountNavigation from "./Navigation";
import { ReactNode } from "react";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <table>
      <tbody>
        <tr>
          <td valign="top" width="100px">
            <AccountNavigation />
          </td>
          <td valign="top">{children}</td>
        </tr>
      </tbody>
    </table>
  );
}
