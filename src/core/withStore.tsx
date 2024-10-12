import React, { ComponentClass } from "react";
import PropTypes from "prop-types";
import { $preliminaryStore } from "../storage";

const buildPropTypes = (originalPropTypes: Record<string, any>) => ({
    ...originalPropTypes,

    formData: PropTypes.shape({
        /**
         * Хранилище данных.
         */
        formDataStore: PropTypes.object
    })
});

type TStore = {
    gitHubStars: {}
}

const _store: TStore = {
    gitHubStars: {}
};

const withStore = (Component: ComponentClass<any, any>) => {
    const originalComponentPropTypes = Component.propTypes ?? {};

    Component.propTypes = buildPropTypes(originalComponentPropTypes);


    $preliminaryStore.watch((values) => {
        _store.gitHubStars = values;
    });

    return (class C extends React.Component<any, any> {
        static displayName = `withStore(${Component.displayName || Component.name})`;
        static propTypes = originalComponentPropTypes;
        static defaultProps = Component.defaultProps;

        constructor(props: any) {
            super(props);
            this.state = {
                store: _store
            };
        }

        render() {
            const filteredProps = { ...this.props };

            return (
                <Component 
                    formData={{ formDataStore: this.state.store }} 
                    {...filteredProps} 
                />
            );
        }
    });
};

export default withStore;