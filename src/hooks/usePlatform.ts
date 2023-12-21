import useData from "./useData";
import { PlatformProps } from "./useGames";

const usePlatform = () => useData<PlatformProps>("/platforms/lists/parents");

export default usePlatform;
