import FooterDemo from "../../components/Footer/footer";

const ScoreLayout = async ({
  children: children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <main className="w-full pt-[72px]">{children}</main>
        <FooterDemo />
      </div>
    </div>
  );
};

export default ScoreLayout;
