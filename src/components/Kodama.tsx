function Kodama() {
  return (
    <div className="kodama-row">
      {[1, 2, 3].map((i) => (
        <div key={i} className={`kodama k${i}`}>
          <div className="kodama-head">
            <div className="kodama-eye left" />
            <div className="kodama-eye right" />
            <div className="kodama-mouth" />
          </div>
          <div className="kodama-body-s" />
        </div>
      ))}
    </div>
  );
}

export default Kodama;
