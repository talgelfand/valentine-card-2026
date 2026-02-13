function Totoro() {
  return (
    <div className="totoro">
      <div className="totoro-body">
        <div className="totoro-ear left" />
        <div className="totoro-ear right" />
        <div className="totoro-belly" />
        <div className="totoro-eye left" />
        <div className="totoro-eye right" />
        <div className="totoro-nose" />
        {/* whiskers */}
        <div className="totoro-whisker top-left" />
        <div className="totoro-whisker mid-left" />
        <div className="totoro-whisker bottom-left" />
        <div className="totoro-whisker top-right" />
        <div className="totoro-whisker mid-right" />
        <div className="totoro-whisker bottom-right" />
        {/* belly chevrons */}
        <div className="totoro-chevron c1" />
        <div className="totoro-chevron c2" />
        <div className="totoro-chevron c3" />
        <div className="totoro-chevron c4" />
        <div className="totoro-chevron c5" />
        {/* heart he's holding */}
        <div className="totoro-heart">&hearts;</div>
      </div>
    </div>
  );
}

export default Totoro;
