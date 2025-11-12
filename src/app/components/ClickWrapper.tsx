"use client";

export default function ClickWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    e.preventDefault();
  };

  return <div onClick={handleClick}>{children}</div>;
}
