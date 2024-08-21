import Title from "../common/Title";
import GalleryMasonry from "./GalleryMasonry";

type Props = {};

export default function Gallery({}: Props) {
  return (
    <div id="gallery" className="">
      <div className="container mx-auto py-10">
        <Title title="অগ্রণী দুয়ার গ্যালারী" />
        <GalleryMasonry />
      </div>
    </div>
  );
}
