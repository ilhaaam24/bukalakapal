import IconValue from "../atoms/IconValue";

const CardValue = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, judul, deskripsi } = props;
  return (
    <div className="h-[250px] w-full bg-[#F3F5F7] flex flex-col justify-center items-start px-8 py-12 gap-4">
      <IconValue>{children}</IconValue>
      <div className="flex flex-col gap-2">
        <h1 className="font-poppins font-medium text-xl">{judul}</h1>
        <p className="font-poppins text-xs text-[#6C7275]">{deskripsi}</p>
      </div>
    </div>
  );
};

export default CardValue;
