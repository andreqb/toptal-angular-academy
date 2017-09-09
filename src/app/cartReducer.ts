import { IAppState2 } from "./store";
import { Action } from "@ngrx/store";
import { INCREMENT } from "./cartActions";
import { Product } from "./models/product";




const INITIAL_STATE =  new IAppState2( );
INITIAL_STATE.products =  Array<Product>();

export function cartReducer(state: IAppState2 = INITIAL_STATE, action: Action) {
	switch (action.type) {
		case INCREMENT:
			return {
                products: state.products.concat(action.payload.product)
            };

		default:
			return state;
	}
}