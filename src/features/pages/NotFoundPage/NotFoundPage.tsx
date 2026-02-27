import { Button } from 'features/shared';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
	const navigate = useNavigate();
	const handleMainClick = () => {
		navigate(-1);
	};

	return (
		<div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 text-center">
			<p className="text-xl text-gray-500">The page does not exist</p>
			<Button variant="primary" size="lg" onClick={handleMainClick}>
				Go back to the previous page
			</Button>
		</div>
	);
};

export default NotFoundPage;
