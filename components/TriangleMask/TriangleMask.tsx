const TriangleMask: React.FC = () => {
  return (
    <svg aria-hidden="true" className="clipmask" height="0" width="0">
      <defs>
        <clipPath clipPathUnits="objectBoundingBox" id="cm-triangle">
          {/**
						the numbers used within the transform attribute of this path are the SVGs original viewbox's width and height. The scale using this values is necessary to ensure the SVG is properly sized in all browsers.
					 */}
          <path
            d="M95.13728,0c3.22993,0,4.55127,2.28862,2.9363,5.08583L52.31773,84.3373c-1.615,2.79721-4.25765,2.79721-5.87262,0L.68926,5.08583C-.92571,2.28862.39563,0,3.62556,0Z"
            transform={`scale(${1 / 98.76284} ${1 / 86.43521})`}
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TriangleMask;
