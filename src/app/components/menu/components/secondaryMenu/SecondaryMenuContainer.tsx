import { withStyles } from '@material-ui/core';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Dispatch, compose } from 'redux';
import { OpenSecondaryMenuAction } from './actions/SecondaryMenuActions';
import { OpenLanguageMenuAction } from './components/languageMenu/actions/LanguageMenuActions';
import { CloseProfileMenuAction, OpenProfileMenuAction } from './components/profileMenu/actions/ProfileMenuActionTypes';
import SecondaryMenuComponent from './SecondaryMenuComponent';
import { SecondaryMenuStyles } from './content/styles';
import { SecondaryMenuDispatchProps, SecondaryMenuOwnProps, SecondaryMenuStateProps } from './typings';
import { ApplicationState } from '../../../../infrastructure/redux/ApplicationState';

const mapStateToProps = ({ SecondaryMenuState }: ApplicationState) : SecondaryMenuStateProps => ({
    anchorElement: SecondaryMenuState.anchorElement,
    isSecondaryMenuOpen: SecondaryMenuState.anchorElement != null
});
  
 
const mapDispatchToProps = (dispatch: Dispatch) : SecondaryMenuDispatchProps => ({
    closeSecondaryMenu: () => dispatch(CloseProfileMenuAction()),
    openProfileMenu: (event: any) => dispatch(OpenProfileMenuAction(event.currentTarget)),
    openSecondaryMenu: (event: any) => dispatch(OpenSecondaryMenuAction(event.currentTarget)),
    openLanguageMenu: (event: any) => dispatch(OpenLanguageMenuAction(event.currentTarget))
});

export default compose(
    connect<SecondaryMenuStateProps, SecondaryMenuDispatchProps, SecondaryMenuOwnProps, any>(mapStateToProps, mapDispatchToProps),
    withStyles(SecondaryMenuStyles),
    withNamespaces())
    (SecondaryMenuComponent)  as React.ComponentType<any>;