
var React = require("react");

var SearchPanel = require("./SearchPanel");
var SearchResultPanel = require("./SearchResultPanel");
var SavedArticlePanel = require("./SavedArticlePanel");
var helper = require("./utils/helpers");

var Main = React.createClass({
    getInitialState: function () {
        console.log('Main getInitialState: function () {');
        return {
            searchPanelData: []
        };
    },

   
    updateSearchResultPanel: function (data) {
        console.log('Main updateSearchResultPanel : function () {');
        this.setState({
            searchPanelData: data
        });
    },


    updateSavedArticlesPanel: function () {
        console.log('Main updateSavedArticlesPanel : function () {');
        this.refs.refSAP.updateState();
    },

    render: function() {
        console.log('Main render: function () {');
        return ( 
        <div className="container-fluid">
            <div className="row">
                <div>
                    <h1 className="text-center">Article</h1>
                    <br/>
                    <div className="text-center">
                    </div>
                </div>
            </div>
            <hr/>
            <SearchPanel updateSearchResults={this.updateSearchResultPanel}/>
            <SearchResultPanel searchResults={this.state.searchPanelData} updateSavedArticles={this.updateSavedArticlesPanel}/>
            <SavedArticlePanel ref="refSAP"/>
          </div>
        );
    }
});

module.exports = Main;