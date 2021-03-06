import { Action } from 'redux';
import { ActionWithPayLoad } from '../../../../../../infrastructure/redux/ActionCreateHelper';
import { LanguageMenuActionTypes } from './actions/LanguageMenuActionTypes';
import { LanguageMenuState } from './LanguageMenuState';

const InitialLanguageMenuState: LanguageMenuState = {
    anchorElement: null
}

export const LanguageMenuReducer = (state: LanguageMenuState = InitialLanguageMenuState, action: Action<LanguageMenuActionTypes>) : LanguageMenuState => {
    switch(action.type){
        case LanguageMenuActionTypes.OpenLanguageMenu:
            return {
                ...state,
                anchorElement: (action as ActionWithPayLoad<LanguageMenuActionTypes, any>).payload
            };
        case LanguageMenuActionTypes.CloseLanguageMenu:
            return {
                ...state,
                anchorElement: null
            };
        default:
            return state;
    }
};