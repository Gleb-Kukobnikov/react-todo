import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LinkButton extends Component {
    render() {
        return (
            <div className={'link-button'}>
                <Link to={this.props.path}>
                    {this.props.title}
                </Link>
            </div>
        );
    }
}

LinkButton.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default LinkButton;
