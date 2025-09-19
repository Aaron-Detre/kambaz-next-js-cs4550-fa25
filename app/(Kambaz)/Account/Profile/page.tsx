import Link from "next/link";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input defaultValue="user123" placeholder="username" type="text" /> <br />
      <input
        defaultValue="password"
        placeholder="password"
        type="password"
      />{" "}
      <br />
      <input defaultValue="User" placeholder="First Name" type="text" /> <br />
      <input defaultValue="123" placeholder="Last Name" type="text" /> <br />
      <input defaultValue="2003-06-10" type="date" id="wd-dob" /> <br />
      <input defaultValue="user@gmail.com" type="email" id="wd-email" /> <br />
      <select defaultValue="USER" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link href="SignIn"> Sign out</Link> <br />
    </div>
  );
}
