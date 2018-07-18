// T - Wrapped component props
// S - Wrapped component state
// K - Store state
// I - Injected props to wrapped component
// A - Bound actions

declare module "unistore/react" {
	import * as React from "react";
	import { ActionCreator, StateMapper, Store } from "unistore";

	export function connect<T, S, K, I, A = {}>(
		mapStateToProps: string | Array<string> | StateMapper<T, K, I>,
		actions?: ActionCreator<K> | object
	): (Child: React.StatelessComponent<T & I & A> | React.ComponentClass<T & I & A>) => ComponentConstructor<T, S>;

	export interface ProviderProps<T> {
		store: Store<T>;
	}

	export class Provider<T> extends React.Component<ProviderProps<T>, {}> {
		render(): React.ReactNode;
	}
	
	interface ComponentConstructor<P = {}, S = {}> {
		new(props: P, context?: any): React.Component<P, S>;
	}
}
