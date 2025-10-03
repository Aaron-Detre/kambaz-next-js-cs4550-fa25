import Link from "next/link";
import { FormControl, FormSelect } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl
        defaultValue="user123"
        placeholder="username"
        type="text"
        className="mb-2"
      />
      <FormControl
        defaultValue="password"
        placeholder="password"
        type="password"
        className="mb-2"
      />
      <FormControl
        defaultValue="User"
        placeholder="First Name"
        type="text"
        className="mb-2"
      />
      <FormControl
        defaultValue="123"
        placeholder="Last Name"
        type="text"
        className="mb-2"
      />
      <FormControl
        defaultValue="2003-06-10"
        type="date"
        id="wd-dob"
        className="mb-2"
      />
      <FormControl
        defaultValue="user@gmail.com"
        type="email"
        id="wd-email"
        className="mb-2"
      />
      <FormSelect defaultValue="USER" id="wd-role" className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormSelect>
      <Link href="SignIn" className="btn btn-danger w-100">
        Sign out
      </Link>
      <br />
    </div>
  );
}
