import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LinkButton extends Component {
    render() {
        return (
            <div>
                <Link to={this.props.pagePath}>
                    {this.props.title}
                </Link>
            </div>
        );
    }
}

LinkButton.propTypes = {
    pagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default LinkButton;
