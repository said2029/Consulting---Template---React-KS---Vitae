import { FilePenLine, Plus, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBlogs } from "@/hooks/Get_blogs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReactQuill from "react-quill";
import useImageUpload from "@/hooks/upload_Image";
import { Button } from "../ui/button";
import { FormEvent, useRef, useState } from "react";
import clsx from "clsx";
import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ align: [] }],
    ["link", "image", "video"], // Image button included in the toolbar
    ["clean"], // Remove formatting button
  ],
};
export default function Blog_controlle() {
  const [formState, setFormState] = useState<"Create" | "Update">("Create");
  const [loading, setLoading] = useState(false);
  const dialogButton = useRef<HTMLButtonElement>(null);

  const { blog, Get_blogs } = useGetBlogs({ limit_value: 10 });
  const [data, setData] = useState({});

  const { uploadImage, Image, isloading, setImage } = useImageUpload();

  const handleInputChange = (key: string, value: string) => {
    setData({ ...data, [key]: value });
  };

  const submit = async (value: FormEvent) => {
    setLoading(true);
    value.preventDefault();
    console.log(data);
    const body = data;
    body["image"] = Image || data["image"];

    if (formState == "Create") {
      await addDoc(collection(db, "blogs"), { ...body, createAt: Date.now() });
    } else if (formState == "Update") {
      await setDoc(doc(db, "blogs", data?.id), body);
    }

    await Get_blogs();
    setLoading(false);

    dialogButton.current?.click();
  };
  const deleteBlog = async (id: string) => {
    if (confirm("Are you sure you want to delete this"))
      await deleteDoc(doc(db, "blogs", id));
    Get_blogs();
  };

  return (
    <div className="w-full px-2 sm:!px-10 pt-10">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Blog</h1>
        <button
          onClick={() => {
            setFormState("Create");
            setImage("");
            setData({
              title: "",
              content: "",
              image: null,
              short_des: "",
            });
            dialogButton.current?.click();
          }}
          className="bg-[#c63b1e] text-white p-2 rounded-xl"
        >
          <Plus />
        </button>
      </div>

      <div className="w-full mt-4">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#c63b1e] !rounded-3xl">
              <TableHead className=" !text-white">ID</TableHead>
              <TableHead className=" !text-white">Blog Title</TableHead>
              <TableHead className=" !text-white">Update</TableHead>
              <TableHead className=" !text-white">Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blog?.map((b, index) => (
              <TableRow key={b?.title}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{b?.title}</TableCell>
                <TableCell
                  className="cursor-pointer"
                  onClick={() => {
                    setFormState("Update");
                    setData({ ...b });
                    dialogButton.current?.click();
                  }}
                >
                  <FilePenLine />{" "}
                </TableCell>
                <TableCell
                className="cursor-pointer"
                  onClick={() => {
                    deleteBlog(b?.id);
                  }}
                >
                  <Trash2 />{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* deloag */}
      <Dialog>
        <DialogTrigger ref={dialogButton} className="hidden"></DialogTrigger>
        <DialogContent className="!w-full h-full  overflow-scroll">
          <DialogHeader>
            <DialogTitle>{formState} Blog!</DialogTitle>
          </DialogHeader>
          <form onSubmit={submit} className="flex flex-col gap-6" method="post">
            <input
              required
              value={data["title"]}
              className="text-black placeholder:text-black/70 border py-2 px-1"
              type="text"
              onChange={(e) => {
                handleInputChange("title", e?.target?.value);
              }}
              placeholder="Blog title"
            />
            <textarea
              className="text-black placeholder:text-black/70 border py-2 px-1"
              onChange={(e) => {
                handleInputChange("short_des", e?.target?.value);
              }}
              placeholder="short description"
              value={data["short_des"]}
              rows={5}
            ></textarea>
            <ReactQuill
              className="h-full "
              modules={modules}
              value={data["content"]}
              onChange={(e) => {
                handleInputChange("content", e);
              }}
              placeholder="write here"
            />
            <div className="flex items-center bg-black relative justify-center mt-16 rounded-xl w-full h-96 overflow-hidden">
              <label
                className={clsx(
                  "z-40 cursor-pointer hover:scale-110 transition-all text-3xl font-bold text-white drop-shadow-lg shadow-black",
                  {
                    opacity: isloading ? "30" : "100",
                    "pointer-events-none": isloading,
                  }
                )}
                htmlFor="uploadIage"
              >
                Select Image!
              </label>
              <input
                accept="image/jpeg ,image/jpg"
                className="text-white mt-9 border border-black p-1 rounded-xl hidden"
                type="file"
                onChange={(e) => {
                  uploadImage(e.target.files[0]);
                }}
                id="uploadIage"
                placeholder="blog title"
              />

              {Image ? (
                <img
                  className={"w-full object-cover absolute h-full opacity-65"}
                  src={Image}
                  alt=""
                />
              ) : (
                data["image"] && (
                  <img
                    className={"w-full object-cover absolute h-full opacity-65"}
                    src={data["image"]}
                    alt=""
                  />
                )
              )}
            </div>
            <Button
              size={"lg"}
              disabled={loading}
              className="text-white mt-9 py-4 text-xl"
            >
              {loading ? " proccessing..." : "send"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
