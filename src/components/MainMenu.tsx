import './styles.css';
import {
    withStore,
    compose,
    useHasRight
} from "../core";

import { useAppContext } from './DefaultLayout';

import Rights from '../core/rights';

type TResponse = {
    full_name: string,
    stargazers_count: number,
    id: number
};

interface IFormDataStore {
    readonly gitHubStars: {
        value: ReadonlyArray<TResponse>;
    }
}

interface IMainMenuProps {
    formData: {
        formDataStore: IFormDataStore;
    },
    rights: string[];
}

function MainMenu({
    formData,
    rights
}: IMainMenuProps) {
    const {name} = useAppContext();
    const checkPermission = useHasRight(rights);
    const {gitHubStars} = formData.formDataStore;

    if (!Array.isArray(gitHubStars.value)) {
        return null
    }

    if (!checkPermission(Rights.ACCESS__ALL)) {
        return null
    }

    return (
        <div className="App">
            <ul>
                {gitHubStars.value?.map((repo: TResponse) => (
                    <li key={repo.id}>
                        {repo.full_name} ({repo.stargazers_count}) {name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default compose(
    withStore,
)(MainMenu)