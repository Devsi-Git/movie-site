"use client";

export default function ClickWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // جلوگیری از اجرای کلیک لینک
    e.preventDefault(); // جلوگیری از رفتن به صفحه
  };

  return <div onClick={handleClick}>{children}</div>;
}
