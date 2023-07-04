import { StarFill, Star as StarEmpty } from "react-bootstrap-icons";

const FiveStarRating = ({ rating }) => {
	const starList = [];

	const starFillCount = Math.floor(rating);

	const hasHalfStar = rating - parseInt(rating) >= 0.5;

	const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0); // 5 - 4 = 1 - 0 = 1

	for (let i = 1; i <= starFillCount; i++) {
		starList.push(<StarFill key={"star-fill" + i} />);
	}

	for (let i = 1; i <= emptyStarCount; i++) {
		starList.push(<StarEmpty key={"star-empty" + i} />);
	}

	return <div>{starList}</div>;
};

export default FiveStarRating;
