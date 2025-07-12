import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>

			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
			</div>
		</div>
	);
};

export default Home;
