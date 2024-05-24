interface TitleProps {
  title: string;
}
const SectionHeader: React.FC<TitleProps> = ({ title }) => {
  return (
    <>
      <h2 className="text-[36px] relative font-medium">{title}</h2>
      <div className="line ">
        <span className="bg-[#ffc10f]"></span>
        <span className="bg-[#ffc10f]"></span>
        <span className="bg-[#ff7e04]"></span>
      </div>{" "}
    </>
  );
};
export default SectionHeader;
