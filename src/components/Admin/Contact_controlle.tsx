import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export default function Contact_controlle() {
  const [contact, setContact] = useState([]);

  const Get_Contact = async () => {
    const respons = await getDocs(collection(db, "contact"));
    const data:any = respons.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setContact(data);
  };
  useEffect(() => {
    Get_Contact();
  }, []);

  return (
    <div className="w-full px-2 sm:!px-10 pt-10">
      <h1 className="font-bold text-2xl">Contact</h1>
      <div className="w-full mt-4">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#c63b1e] !rounded-3xl">
              <TableHead className=" !text-white">First Name</TableHead>
              <TableHead className=" !text-white">Last Name</TableHead>
              <TableHead className=" !text-white">Email</TableHead>
              <TableHead className=" !text-white">Number</TableHead>
              <TableHead className=" !text-white">Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contact?.map((c:any, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{c?.first_name}</TableCell>
                <TableCell className="font-medium">{c?.last_Name}</TableCell>
                <TableCell className="font-medium">{c?.Email}</TableCell>
                <TableCell className="font-medium">{c?.number}</TableCell>
                <TableCell className="font-medium">
                  <Dialog>
                    <DialogTrigger className="line-clamp-1 max-w-56 overflow-hidden">{c?.message}</DialogTrigger>
                    <DialogContent className="h-fit w-[400px]">
                    {c?.message}
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
