import { DiaryProps } from "@/types/Diary";

export default function DiaryCard({
  title,
  content,
  date,
  ...props
}: DiaryProps) {

  return (
    <div className="bg-memo max-w-full h-auto p-6 relative shadow-diary">
      <div className="diagonal-split-bg absolute top-0 left-0 w-6 h-6"></div>
      <div className="h-full flex flex-col justify-between text-black">
        <div>
          <h2 className=" text-xl font-bold">{title}</h2>
          <p>{content}</p>
        </div>
        <p className="w-full text-end">{date}</p>
      </div>
    </div>
  );
}