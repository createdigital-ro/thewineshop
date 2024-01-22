import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Component() {
  const orders = [
    {
      number: "1",
      date: "26 Ianuarie, 2024",
      status: "Delivered",
    },
    {
      number: "1",
      date: "26 Ianuarie, 2024",
      status: "Delivered",
    },
    {
      number: "1",
      date: "26 Ianuarie, 2024",
      status: "Delivered",
    },
  ];
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-semibold">User Dashboard</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/"
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto p-6">
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Change Username</h2>
          <form className="flex space-x-2">
            <Input id="username" placeholder="Enter new username" />
            <Button type="submit">Submit</Button>
          </form>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-2">Past Orders</h2>
          <div className="border rounded-lg overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Număr comandă</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((o, index) => (
                      <TableRow key={index}>
                        <TableCell>{o.number}</TableCell>
                        <TableCell>{o.date}</TableCell>
                        <TableCell>{o.status}</TableCell>
                      </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
    </div>
  );
}
