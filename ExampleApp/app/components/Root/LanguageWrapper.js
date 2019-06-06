import React from "react";
import { connect } from "react-redux";
import { getLanguage } from "../../store/settings/settingsSelector";
import AppWithNavigation from "./AppWithNavigation";

class LanguageWrapper extends React.Component {
  render() {
    // Force re-initialization of app whenever language is changed
    const { language } = this.props;
    return <AppWithNavigation key={language} />;
  }
}

const mapStateToProps = state => ({
  language: getLanguage(state)
});

export default connect(mapStateToProps)(LanguageWrapper);
