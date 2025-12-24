const Separator = () => {
  return (
    <div className="relative w-full">
      <div
        className="border-b-2 border-transparent"
        style={{
          borderImage: `repeating-linear-gradient(
      to right,
      #D6D6D6 0 6px,
      transparent 6px 14px
    ) 1`,
        }}
      />

      <div
        className="absolute left-0 top-1/2
                   -translate-y-1/2 -translate-x-1/2
                   h-3 w-3 rounded-full bg-white border-2  border-[#D6D6D6] z-10"
      />
      <div
        className="absolute right-0 top-1/2
                   -translate-y-1/2 translate-x-1/2
                   h-3 w-3 rounded-full bg-white border-2 border-[#D6D6D6] z-10"
      />
    </div>
  );
};
export default Separator;
