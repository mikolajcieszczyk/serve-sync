import { Table } from "#components/Table/Table.tsx";
import { TableHeader } from "#components/Table/TableHeader.tsx";
import { Gender, User, UserRole } from "#utils/types/user.ts";
import { FaFemale, FaMale } from "react-icons/fa";

const users: User[] = [
  {
    userId: "1",
    email: "miki@wp.pl",
    username: "",
    role: UserRole.ADMIN,
    firstName: "Mikołaj",
    lastName: "Kowalski",
    gender: Gender.MALE,
    dateOfBirth: new Date(),
    phoneNumber: "12334535",
    profilePictureUrl: "",
    additionalInfo: "",
  },
  {
    userId: "1",
    email: "miki@wp.pl",
    username: "",
    role: UserRole.CLIENT,
    firstName: "Mikołaj",
    lastName: "Kowalski",
    gender: Gender.FEMALE,
    dateOfBirth: new Date(),
    phoneNumber: "12334535",
    profilePictureUrl: "",
    additionalInfo: "",
  },
  {
    userId: "1",
    email: "miki@wp.pl",
    username: "",
    role: UserRole.COACH,
    firstName: "Mikołaj",
    lastName: "Kowalski",
    gender: Gender.FEMALE,
    dateOfBirth: new Date(),
    phoneNumber: "12334535",
    profilePictureUrl: "",
    additionalInfo: "",
  },
  {
    userId: "1",
    email: "miki@wp.pl",
    username: "",
    role: UserRole.OFFICE_EMPLOYEE,
    firstName: "Mikołaj",
    lastName: "Kowalski",
    gender: Gender.FEMALE,
    dateOfBirth: new Date(),
    phoneNumber: "12334535",
    profilePictureUrl: "",
    additionalInfo: "",
  },
  {
    userId: "1",
    email: "miki@wp.pl",
    username: "",
    role: UserRole.OTHER,
    firstName: "Mikołaj",
    lastName: "Kowalski",
    gender: Gender.FEMALE,
    dateOfBirth: new Date(),
    phoneNumber: "12334535",
    profilePictureUrl: "",
    additionalInfo: "",
  },
];

const thItems = [
  {
    name: "Full Name",
    key: "fullName",
  },

  {
    name: "Gender",
    key: "gender",
  },
  {
    name: "Phone",
    key: "phoneNumber",
  },
  {
    name: "E-Mail",
    key: "email",
  },
  {
    name: "Role",
    key: "role",
  },
  {
    name: "Action",
    key: "action",
  },
];

function renderGenderIcon(gender: Gender) {
  if (gender === Gender.MALE) {
    return <FaMale size={20} className="text-blue-400" />;
  } else {
    return <FaFemale size={20} className="text-pink-400" />;
  }
}

function renderUserRoleIcon(type: UserRole) {
  switch (type) {
    case UserRole.ADMIN:
      return "Admin";
    case UserRole.CLIENT:
      return "Client";
    case UserRole.COACH:
      return "Coach";
    case UserRole.OFFICE_EMPLOYEE:
      return "Office";
    case UserRole.OTHER:
      return "Other";
    default:
      break;
  }
}

async function getUsers() {
  const res = await fetch("http://localhost:3201/user");

  const users = await res.json();

  return users;
}

export default async function Dashboard() {
  // const users = await getUsers();

  return (
    <>
      <div className="w-full h-full relative overflow-auto shadow-md rounded-md">
        <Table>
          <TableHeader>
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              {thItems.map((th) => {
                return (
                  <th key={th.key} scope="col" className="px-6 py-3">
                    {th.name}
                  </th>
                );
              })}
            </tr>
          </TableHeader>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${index}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-table-search-${index}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-4" title={user.gender}>
                  {renderGenderIcon(user.gender)}
                </td>
                <td className="px-6 py-4" title={user.email}>
                  {user.phoneNumber}
                </td>
                <td className="px-6 py-4" title={user.email}>
                  {user.email}
                </td>
                <td className="px-6 py-4" title={user.role}>
                  {renderUserRoleIcon(user.role)}
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
