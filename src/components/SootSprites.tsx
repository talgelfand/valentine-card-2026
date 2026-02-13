function SootSprites() {
  return (
    <div className="soot-sprites">
      {[1, 2, 3].map((i) => (
        <div key={i} className={`soot-sprite s${i}`}>
          <div className="soot-body">
            <div className="soot-eye left" />
            <div className="soot-eye right" />
          </div>
          <span className="soot-heart">&hearts;</span>
        </div>
      ))}
    </div>
  );
}

export default SootSprites;
