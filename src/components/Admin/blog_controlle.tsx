import { FilePenLine, ImageIcon, Loader, Plus, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBlogs } from "@/hooks/Get_blogs";
import useImageUpload from "@/hooks/upload_Image";
import { Button } from "../ui/button";
import { FormEvent, useState } from "react";
import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import RechText from "./RechText";
import slugIfy from "slugify";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export default function Blog_controlle() {
  const [formState, setFormState] = useState<"Create" | "Update">("Create");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const { blog, Get_blogs } = useGetBlogs({ limit_value: 1000 });
  const [data, setData] = useState<any>({});

  const { uploadImage, Image, isloading, setImage } = useImageUpload();

  const handleInputChange = (key: string, value: string) => {
    setData({ ...data, [key]: value });
  };

  const submit = async (value: FormEvent) => {
    setLoading(true);
    value.preventDefault();
    const body: any = data;
    body["image"] = Image || data["image"];

    if (formState == "Create") {
      await addDoc(collection(db, "blogs"), { ...body, createAt: Date.now() });
    } else if (formState == "Update") {
      await setDoc(doc(db, "blogs", data?.id), body);
    }

    await Get_blogs();
    setLoading(false);

    setOpen(false);
  };
  const deleteBlog = async (id: string) => {
    if (confirm("Are you sure you want to delete this"))
      await deleteDoc(doc(db, "blogs", id));
    Get_blogs();
  };

  return (
    <div className="w-full px-2 sm:!px-10 pt-10 ">
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
            setOpen(true);
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
            {blog?.map((b: any, index: number) => (
              <TableRow key={b?.title}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{b?.title}</TableCell>
                <TableCell
                  className="cursor-pointer"
                  onClick={() => {
                    setFormState("Update");
                    setData({ ...b });
                    setOpen(true);
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
      {open && (
        <div className="fixed left-0 top-0 bg-black/50 h-full w-full flex justify-center items-center">
          <div className="bg-white h-[700px] flex flex-col items-center rounded-xl p-4  overflow-scroll relative">
            <h1 className="text-2xl font-bold">{formState}</h1>
            <form
              onSubmit={submit}
              className="flex flex-col gap-6 mt-3"
              method="post"
            >
              <input
                required
                value={data["title"]}
                className="text-black placeholder:text-black/70 border py-2 px-1"
                type="text"
                onChange={(e) => {
                  setData({
                    ...data,
                    title: e?.target?.value,
                    slug: slugIfy(e?.target?.value),
                  });
                }}
                placeholder="Blog title"
              />
              <input
                required
                value={data["category"]}
                className="text-black placeholder:text-black/70 border py-2 px-1"
                type="text"
                onChange={(e) => {
                  handleInputChange("category", e?.target?.value);
                }}
                placeholder="Blog Category"
              />
              <input
                required
                value={data["slug"]}
                className="text-black placeholder:text-black/70 border py-2 px-1"
                type="text"
                onChange={(e) => {
                  handleInputChange("slug", e?.target?.value);
                }}
                placeholder="Blog Slug"
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

              <RechText
                value={data["content"]}
                onChange={(value) => {
                  handleInputChange("content", value);
                }}
              />
              <div className="flex items-center border gap-9 border-black px-2 w-fit">
                <label
                  htmlFor="file-upload"
                  className="bg-[#C63B1E] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#b8533f] focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Choose File
                </label>
                <input
                  accept="image/jpeg ,image/jpg"
                  onChange={(e: any) => {
                    uploadImage(e?.target?.files[0]);
                  }}
                  type="file"
                  id="file-upload"
                  className="hidden"
                />


                <Dialog>
                  <DialogTrigger
                    disabled={isloading}
                    className="w-10 h-10 border flex text-center items-center justify-center"
                  >
                    {isloading ? (
                      <div className="animate-spin">
                        <Loader />
                      </div>
                    ) : (
                      <ImageIcon />
                    )}
                  </DialogTrigger>
                  <DialogContent className="w-96 h-96">
                    {Image ? (
                      <img
                        className={
                          "w-full object-cover absolute h-full aspect-square"
                        }
                        src={Image}
                        alt=""
                      />
                    ) : (
                      data["image"] && (
                        <img
                          className={"w-full object-cover absolute h-full"}
                          src={data["image"]}
                          alt=""
                        />
                      )
                    )}
                  </DialogContent>
                </Dialog>
              </div>

              <Button
                size={"lg"}
                disabled={loading}
                className="text-white mt-9 py-4 text-xl bg-[#C63B1E]"
              >
                {loading ? " proccessing..." : "Save"}
              </Button>
            </form>
            <Button
              className="absolute top-1 right-1"
              size={"icon"}
              variant={"ghost"}
              onClick={() => {
                setOpen(false);
              }}
            >
              X
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
