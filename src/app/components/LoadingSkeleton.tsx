export default function LoadingSkeleton({ style }: { style: string }) {
  return <div className={`bg-[#82828276] ${style} animate-pulse `} />;
}
