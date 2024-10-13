import {createStore, createEvent} from 'effector';
import GlobalComponent from './GlobalComponent';

const savePreliminaryData = createEvent<any[]>();

const eventsSaveFormData = [
    savePreliminaryData
];

const $gitHubStarsStore = createStore({});

$gitHubStarsStore
    .on(savePreliminaryData, (_, value) => ({
        value
    }));

export {
    eventsSaveFormData,
    $gitHubStarsStore,
    GlobalComponent
}