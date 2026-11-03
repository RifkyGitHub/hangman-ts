interface HangmanDrawProps {
  attempt: number;
}

export default function HangmanDraw({ attempt }: HangmanDrawProps) {
  const HangmanHead = () => {
    return (
      <div className="rounded-full border-5 border-black w-15 h-15 absolute -right-6.5 top-10" />
    );
  };

  const HangmanBody = () => {
    return <div className="bg-black h-38 w-2 absolute right-0 top-25" />;
  };

  const HangmanRightArm = () => {
    return (
      <div className="bg-black h-2 w-22 absolute -right-21 top-32 -rotate-18" />
    );
  };

  const HangmanLeftArm = () => {
    return (
      <div className="bg-black h-22 w-2 absolute right-10 top-22 rotate-110" />
    );
  };

  const HangmanRightFoot = () => {
    return (
      <div className="bg-black h-2 w-26 absolute -right-16.5 top-72 rotate-70" />
    );
  };

  const HangmanLeftFoot = () => {
    return (
      <div className="bg-black h-26 w-2 absolute right-4.5 top-60 -rotate-160" />
    );
  };

  const HangmanFullBody = [
    <HangmanHead key="head" />,
    <HangmanBody key="body" />,
    <HangmanRightArm key="right-arm" />,
    <HangmanLeftArm key="left-arm" />,
    <HangmanRightFoot key="right-foot" />,
    <HangmanLeftFoot key="left-foot" />,
  ];

  return (
    <section className="relative">
      {HangmanFullBody.slice(0, attempt)}

      {/* TALI */}
      <div className="bg-black w-2 h-10 absolute right-0" />

      {/* KAYU ATAS */}
      <div className="bg-black h-2 w-48 ml-32" />

      {/* TIANG */}
      <div className="bg-black h-128 w-2 ml-32" />

      {/* PENYANGGA */}
      <div className="bg-black h-2 w-64" />
    </section>
  );
}
