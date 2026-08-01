const pipPositions = {
  1: [5],
  2: [1, 9],
  3: [1, 5, 9],
  4: [1, 3, 7, 9],
  5: [1, 3, 5, 7, 9],
  6: [1, 3, 4, 6, 7, 9],
};

const faces = [[6, 1], [4, 3], [5, 2], [3, 6], [2, 4], [1, 5]];

function DominoHalf({ value }) {
  return (
    <span className="domino-loader-half">
      {pipPositions[value].map((position) => (
        <i className={`domino-loader-pip domino-loader-pip--${position}`} key={position} />
      ))}
    </span>
  );
}

export default function DominoLoader() {
  return (
    <div className="domino-loader" role="status" aria-label="Loading page">
      <div className="domino-loader-stage" aria-hidden="true">
        {faces.map(([top, bottom], index) => (
          <span className="domino-loader-tile" style={{ '--domino-index': index }} key={`${top}-${bottom}`}>
            <DominoHalf value={top} />
            <DominoHalf value={bottom} />
          </span>
        ))}
      </div>
    </div>
  );
}
