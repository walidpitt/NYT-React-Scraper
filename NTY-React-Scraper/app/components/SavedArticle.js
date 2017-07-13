
var React = require("react");
var helper = require("./utils/helpers");

var SavedArticle = React.createClass({
    handleClick: function (event) {
        console.log('SavedArticle handleClick: function (event) {');
        helper.deleteArticle(this.props.id).then(function (response) {
            
            this.props.updateStateProp();
        }.bind(this));
    },

    render: function() {
        console.log('SavedArticle render: function () {');
        return (
            <div className="well">
                <a href={this.props.url}><h4>{this.props.title}</h4></a>
                <button data-id={this.props.id} onClick={this.handleClick} className="delete-article" type="submit">Delete Article</button>
            </div>
        );
    }
});

module.exports = SavedArticle;