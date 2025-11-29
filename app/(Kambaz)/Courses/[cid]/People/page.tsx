/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import * as client from "../../client";
import { usePathname } from "next/navigation";
import PeopleTable from "./PeopleTable";

export default function People() {
  const cid = usePathname().split("/").at(2) ?? "";
  const [users, setUsers] = useState<any[]>([]);
  const fetchUsers = async () => {
    const users = await client.findAllUsersEnrolledInCourse(cid);
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, [cid]);
  return <PeopleTable users={users} fetchUsers={fetchUsers} />;
}
